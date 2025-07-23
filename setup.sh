#!/bin/sh

sed_inline() {
  file="$1"
  shift
  tmpfile="$file.tmp"
  cp "$file" "$tmpfile"
  while [ $# -gt 0 ]; do
    sed "$1" "$tmpfile" > "$tmpfile.new" && mv "$tmpfile.new" "$tmpfile"
    shift
  done
  mv "$tmpfile" "$file"
}

mkdir -p .husky/_

# สร้าง pre-commit main hook
cat > .husky/pre-commit << 'EOF'
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"
pnpm lint
EOF
chmod +x .husky/pre-commit

# Set exec ทุกไฟล์
find .husky -type f -exec chmod +x {} \;

# แก้ shebang + path ใน hooks .husky/_/*
for file in .husky/_/*; do
  [ -f "$file" ] || continue
  sed_inline "$file" \
    '1s|#!/usr/bin/env sh|#!/bin/sh|' \
    '2s|. "$(dirname -- "$0")/_/husky.sh"|. "$(dirname "$0")/husky.sh"|' \
    '2s|. "$(dirname "$0")/_/_/husky.sh"|. "$(dirname "$0")/husky.sh"|'
done

# แก้ shebang + path ใน hooks .husky/* ยกเว้น _ directory
for file in .husky/*; do
  [ -f "$file" ] && [ "$(basename "$file")" != "_" ] || continue
  sed_inline "$file" \
    '1s|#!/usr/bin/env sh|#!/bin/sh|' \
    '2s|. "$(dirname -- "$0")/_/husky.sh"|. "$(dirname "$0")/_/husky.sh"|' \
    '2s|. "$(dirname "$0")/_/_/husky.sh"|. "$(dirname "$0")/_/husky.sh"|'
done

echo "✅ Husky hooks updated with correct shebang and husky.sh path"