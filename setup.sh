#!/bin/bash
# setup.sh - Clean and restructure project folders and files according to standard structure

set -e

echo "🔧 Starting project restructure..."

BASE_DIR=$(pwd)

echo "📁 Base directory: $BASE_DIR"

# Define allowed folders and files (relative to src/)
ALLOWED_PATHS=(
  "api"
  "assets"
  "components"
  "config"
  "data"
  "features"
  "hooks"
  "pages"
  "styles"
  "sw.ts"
  "types"
  "utils"
)

# Remove files/folders inside src/ that are NOT in ALLOWED_PATHS
echo "🧹 Removing files/folders not in allowed structure under src/"

for item in "$BASE_DIR/src"/*; do
  name=$(basename "$item")
  allowed=false
  for allowed_path in "${ALLOWED_PATHS[@]}"; do
    if [[ "$name" == "$allowed_path" ]]; then
      allowed=true
      break
    fi
  done
  if [ "$allowed" = false ]; then
    echo "  ❌ Removing $item"
    rm -rf "$item"
  fi
done

# Move misplaced .tsx files in src to proper pages or components folder
echo "📂 Organizing .tsx files into pages and components folders..."

# Move page files to src/pages if not there
find "$BASE_DIR/src" -maxdepth 1 -type f -name "*.tsx" | while read -r file; do
  filename=$(basename "$file")
  if [[ ! -f "$BASE_DIR/src/pages/$filename" ]]; then
    echo "  ➡️ Moving $filename to src/pages/"
    mv "$file" "$BASE_DIR/src/pages/"
  fi
done

# Move components files wrongly placed in src/pages/Documents to src/pages/Documents or components
# You may customize as needed, here's a basic placeholder example:
echo "  (Ensure BusinessDocumentRequest.tsx is inside src/pages/Documents/)"

mkdir -p "$BASE_DIR/src/pages/Documents"
if [ -f "$BASE_DIR/src/BusinessDocumentRequest.tsx" ]; then
  mv "$BASE_DIR/src/BusinessDocumentRequest.tsx" "$BASE_DIR/src/pages/Documents/"
  echo "  ➡️ Moved BusinessDocumentRequest.tsx to src/pages/Documents/"
fi

# Optional: move any component files misplaced to src/components
# Add your own rules here if needed

# Sanitize file names to PascalCase for components/pages (basic example)
echo "⚠️ Reminder: Verify file naming conventions manually if needed."

echo "✅ Restructure complete."

exit 0