#!/bin/bash

# ============================
# 🧼 JP Visual & Docs :: CLEAN SCRIPT
# ============================

echo "🚿 Starting project cleanup..."

# ========== CONFIG ==========
TRASH_DIR="./.trash"
TEMP_DIRS=("temp" "dev-dist" "dist")
GEN_FILES=("ts-prune.log" "project-audit.md" "auto-imports.d.ts")
BACKUP_FILES=$(find . -type f -name "*.bak.*")
ARCHIVE_DIR="ZzZzZ__archive__ZzZz"
NODE_MODULES="node_modules"

# ========== CLEANUP ==========
# 1. Clean .bak backups
if [[ -n "$BACKUP_FILES" ]]; then
  echo "🗑 Removing .bak backups..."
  echo "$BACKUP_FILES" | xargs rm -f
fi

# 2. Clean temp + gen files
echo "🧹 Cleaning temp/gen files..."
for f in "${GEN_FILES[@]}"; do
  [[ -f $f ]] && rm -f "$f"
done

# 3. Move archive to .trash
if [[ -d $ARCHIVE_DIR ]]; then
  mkdir -p "$TRASH_DIR"
  mv "$ARCHIVE_DIR" "$TRASH_DIR/"
  echo "📦 Moved $ARCHIVE_DIR -> $TRASH_DIR/"
fi

# 4. Optional clean node_modules & build
if [[ "$1" == "--full" ]]; then
  echo "♻️ Full clean mode: Removing node_modules + builds..."
  rm -rf "$NODE_MODULES"
  for d in "${TEMP_DIRS[@]}"; do
    [[ -d $d ]] && rm -rf "$d"
  done
fi

echo "✅ Clean complete."