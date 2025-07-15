#!/data/data/com.termux/files/usr/bin/bash
set -euo pipefail
IFS=$'\n\t'

NOW=$(date +"%Y%m%d-%H%M%S")
OUTDIR="diagnostic-$NOW"
mkdir -p "$OUTDIR"

log() { echo -e "[$(date +%H:%M:%S)] $*"; }

log "🚀 setup.sh: FULL PROJECT DIAGNOSTIC START"

# ── 🔧 Require tools
TOOLS=(node pnpm jq depcheck eslint prettier tsc tree git)
for t in "${TOOLS[@]}"; do
  if ! command -v "$t" &>/dev/null; then
    echo "❌ Missing: $t"
    case "$t" in
      prettier) pnpm add -D prettier && log "📦 Installed: prettier";;
      eslint) pnpm add -D eslint && log "📦 Installed: eslint";;
    esac
    command -v "$t" &>/dev/null || exit 1
  fi
  log "✅ Found: $t"
done

# ── 📄 Patch types
dir_types="types"
log "📄 $dir_types/"
mkdir -p "$dir_types"
cat <<EOF > "$dir_types/assets.d.ts"
declare module '*.webp'; declare module '*.png'; declare module '*.jpg';
EOF
cat <<EOF > "$dir_types/vite-env.d.ts"
interface ImportMetaEnv {
  VITE_API_BASE_URL: string;
  [key: string]: any;
}
interface ImportMeta { readonly env: ImportMetaEnv; }
EOF

# ── 🛠️ tsconfig patch
log "🛠️ tsconfig.json"
jq '(.compilerOptions //= {})
  | (.compilerOptions.types //= [])
  | .compilerOptions.types += ["vite/client"]
  | (.include //= [])
  | .include |= unique + ["types"]' tsconfig.json > tsconfig.tmp.json && mv tsconfig.tmp.json tsconfig.json

# ── 📦 install @types/cors if needed
grep -q "cors" server.ts && pnpm add -D @types/cors && log "📦 + @types/cors"

# ── 🧹 Clean
log "🧹 clean node_modules/dist/cache"
rm -rf node_modules dist .cache pnpm-lock.yaml || true

# ── 📦 Install
log "📦 pnpm install"
pnpm install

# ── 🔐 Git init
[ ! -d .git ] && git init && log "✅ git init"
[ ! -f .gitignore ] && cat <<EOF > .gitignore
node_modules
dist
.env
.cache
pnpm-lock.yaml
.vscode
.DS_Store
.idea
EOF
log "✅ .gitignore"

# ── ⚙️ .env
[ ! -f .env ] && cp .env.example .env && log "⚠️ .env created from .env.example"

# ── 🧼 Format + Lint
log "🧼 prettier"
pnpm exec prettier --write . || log "❌ prettier failed"

log "🧹 eslint"
pnpm exec eslint . || log "❌ eslint failed"

# ── 🧪 Type check + test + build
log "🧪 typecheck"
pnpm typecheck || log "❌ typecheck failed"

log "🧪 test"
pnpm test || log "❌ test failed"

log "🧱 build"
pnpm build || log "❌ build failed"

# ── 📊 Export diagnostics
log "📊 export: $OUTDIR"
tree -L 3 > "$OUTDIR/tree.txt"
cp .env "$OUTDIR/env.txt"
pnpm exec depcheck --json > "$OUTDIR/depcheck.json" || echo "{}" > "$OUTDIR/depcheck.json"
pnpm exec tsc --noEmit > "$OUTDIR/ts-errors.log" 2>&1 || true
git status --short > "$OUTDIR/git.log"
git log --oneline -n 5 >> "$OUTDIR/git.log"
lsof -i -P -n | grep LISTEN > "$OUTDIR/ports.txt" || echo "no ports" > "$OUTDIR/ports.txt"
du -ah ./src | sort -rh | head -n 50 > "$OUTDIR/filesizes.txt"
pnpm exec ts-unused-exports tsconfig.json > "$OUTDIR/unused-exports.txt" 2>&1 || true
log "✅ DONE → $OUTDIR"

# ── 📦 Save all .env* files
log "🧾 Merge all .env* → $OUTDIR/env-all.txt"
find . -maxdepth 1 -type f -name ".env*" -exec echo -e "\n## {}" \; -exec cat {} \; > "$OUTDIR/env-all.txt"

# ── 🧠 Generate AI-ready Markdown summary
SUMMARY="$OUTDIR/project-summary.md"
log "🧠 Markdown summary → $SUMMARY"

{
  echo "# 🧠 Project Diagnostic Summary"
  echo
  echo "- 📅 Date: $(date)"
  echo "- 📁 Output Directory: \`$OUTDIR\`"
  echo "- 🧪 Type Check: \`tsc --noEmit\`"
  echo "- 📦 Dependencies: \`pnpm install\`"
  echo "- 🔧 Lint / Format: \`eslint\`, \`prettier\`"
  echo "- 🧪 Test: \`pnpm test\`"
  echo "- 🧱 Build: \`pnpm build\`"
  echo
  echo "## 🔍 Tree (Level 3)"
  echo '```'
  cat "$OUTDIR/tree.txt"
  echo '```'
  echo
  echo "## 🧩 Dependency Check (depcheck)"
  echo '```json'
  cat "$OUTDIR/depcheck.json"
  echo '```'
  echo
  echo "## 🐛 TS Errors"
  echo '```'
  cat "$OUTDIR/ts-errors.log"
  echo '```'
  echo
  echo "## 🚥 Git"
  echo '```'
  cat "$OUTDIR/git.log"
  echo '```'
  echo
  echo "## 📦 File Sizes (Top 50)"
  echo '```'
  cat "$OUTDIR/filesizes.txt"
  echo '```'
  echo
  echo "## ⚠️ Unused Exports"
  echo '```'
  cat "$OUTDIR/unused-exports.txt"
  echo '```'
} > "$SUMMARY"

log "✅ Summary ready"
