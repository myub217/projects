#!/bin/bash
set -euo pipefail
IFS=$'\n\t'

NOW=$(date +"%Y%m%d-%H%M%S")
OUTDIR="diagnostic-$NOW"
mkdir -p "$OUTDIR"

log() { echo -e "[$(date +%H:%M:%S)] $*"; }

log "🚀 Start full setup"

# ────────────────────────────────────────────────
# 🔍 Check tools
REQUIRED_TOOLS=(node pnpm jq depcheck eslint prettier tsc tree)
for TOOL in "${REQUIRED_TOOLS[@]}"; do
  command -v "$TOOL" &>/dev/null || {
    echo "❌ Missing: $TOOL" >&2
    exit 1
  }
done

# ────────────────────────────────────────────────
# 📄 Patch missing type shims
log "📄 Patch types → types/assets.d.ts, types/vite-env.d.ts"
mkdir -p types
cat <<EOF > types/assets.d.ts
declare module '*.webp';
declare module '*.png';
declare module '*.jpg';
EOF

cat <<EOF > types/vite-env.d.ts
interface ImportMetaEnv {
  VITE_API_BASE_URL: string;
  VITE_DEV_SERVER_PORT?: string;
  VITE_PREVIEW_SERVER_PORT?: string;
  VITE_BUILD_OUTDIR?: string;
  VITE_OPEN_BROWSER?: string;
  VITE_OPEN_REPORT?: string;
  NODE_ENV?: string;
  [key: string]: any;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
EOF

# 🔧 Ensure tsconfig includes type folder and vite/client
log "🛠️ Patch tsconfig.json for types + vite/client"
TMP="tsconfig.tmp.json"
jq '(.compilerOptions.types //= []) + ["vite/client"] |
    (.include //= []) + ["types"]' tsconfig.json > "$TMP" && mv "$TMP" tsconfig.json

# ────────────────────────────────────────────────
# 📦 Optional: auto-install @types/cors if 'cors' found in server.ts
grep -q "cors" server.ts && pnpm add -D @types/cors && log "📦 Installed: @types/cors"

# ────────────────────────────────────────────────
# 🧹 Clean previous installs
log "🧹 Clean"
rm -rf node_modules dist .cache pnpm-lock.yaml || true

# 📦 Install dependencies
log "📦 Installing..."
pnpm install

# ⚙️ .env setup
[ ! -f .env ] && cp .env.example .env && log "⚠️ Created .env from example"
log "✅ .env ready"

# 🔧 Check main config files
for f in vite.config.ts tailwind.config.mjs tsconfig.json eslint.config.mjs; do
  [ -f "$f" ] && log "✅ $f" || log "⚠️ Missing: $f"
done

# 🔐 Git init if needed
[ ! -d .git ] && git init && log "✅ Git initialized"
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
log "✅ .gitignore ready"

# 🧼 Format
log "🧼 Prettier"
pnpm prettier --write . || log "❌ Prettier failed"

# 🧹 Lint
log "🧹 ESLint"
pnpm exec eslint . --ext .ts,.tsx || log "❌ ESLint failed"

# 🧪 Type Check
log "🧪 TypeCheck"
pnpm typecheck || log "❌ TypeCheck failed"

# 🧪 Test
log "🧪 Test"
pnpm test || log "❌ Test failed"

# 🧱 Build
log "🧱 Build"
pnpm build || log "❌ Build failed"

# ────────────────────────────────────────────────
# 📊 Export diagnostics
log "📊 Export"
tree -L 3 > "$OUTDIR/tree.txt"
cp .env "$OUTDIR/env.txt"
pnpm exec depcheck --json > "$OUTDIR/depcheck.json" || echo "{}" > "$OUTDIR/depcheck.json"
pnpm exec tsc --noEmit > "$OUTDIR/ts-errors.log" 2>&1 || true
git status --short > "$OUTDIR/git.log"
git log --oneline -n 5 >> "$OUTDIR/git.log"
lsof -i -P -n | grep LISTEN > "$OUTDIR/ports.txt" || echo "no ports" > "$OUTDIR/ports.txt"
du -ah ./src | sort -rh | head -n 50 > "$OUTDIR/filesizes.txt"
pnpm exec ts-unused-exports tsconfig.json > "$OUTDIR/unused-exports.txt" 2>&1 || true

log "✅ Export complete → $OUTDIR"
log "🎉 Setup done!"
log "📁 Full output saved in: $OUTDIR"