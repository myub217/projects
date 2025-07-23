#!/bin/sh

# ฟังก์ชัน sed inline แบบ compatible termux (busybox)
sed_inline() {
  file="$1"
  shift
  # ใช้คำสั่ง sed ทีละคำสั่ง เพื่อแก้ปัญหา sed ไม่รับหลาย expression พร้อมกัน
  tmpfile="$file.tmp"
  cp "$file" "$tmpfile"

  while [ $# -gt 0 ]; do
    sed "$1" "$tmpfile" > "$tmpfile.new" && mv "$tmpfile.new" "$tmpfile"
    shift
  done

  mv "$tmpfile" "$file"
}

mkdir -p .husky/_

cat > .husky/pre-commit << 'EOF'
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

pnpm lint
EOF
chmod +x .husky/pre-commit

for file in .husky/_/*; do
  if [ -f "$file" ]; then
    sed_inline "$file" \
      '1s|#!/usr/bin/env sh|#!/bin/sh|' \
      '2s|. "$(dirname -- "$0")/_/husky.sh"|. "$(dirname "$0")/husky.sh"|'
  fi
done

for file in .husky/*; do
  if [ -f "$file" ]; then
    sed_inline "$file" \
      '1s|#!/usr/bin/env sh|#!/bin/sh|' \
      '2s|. "$(dirname -- "$0")/_/husky.sh"|. "$(dirname "$0")/_/husky.sh"|'
  fi
done

echo "Setup husky hooks updated with correct shebang and husky.sh path"