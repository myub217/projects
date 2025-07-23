#!/bin/sh

# ✅ ฟังก์ชัน sed inline ที่ compatible กับ Termux (busybox)
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

# ✅ สร้างโฟลเดอร์ husky และไฟล์ pre-commit
mkdir -p .husky/_
cat > .husky/pre-commit << 'EOF'
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

pnpm lint
EOF

# ✅ ให้สิทธิ์ executable กับทุก hook และ husky.sh
find .husky -type f -exec chmod +x {} \;

# ✅ แก้ shebang และ path ใน hook ที่อยู่ใน .husky/_ เท่านั้น (ไม่ใช่ผู้เรียกตรง)
for file in .husky/_/*; do
  [ -f "$file" ] && sed_inline "$file" \
    '1s|#!/usr/bin/env sh|#!/bin/sh|' \
    '2s|. "$(dirname -- "$0")/_/husky.sh"|. "$(dirname "$0")/husky.sh"|' \
    '2s|. "$(dirname "$0")/_/_/husky.sh"|. "$(dirname "$0")/husky.sh"|'
done

# ✅ แก้ shebang และ path ใน hook หลักที่รันจริง (ยกเว้นโฟลเดอร์ _)
for file in .husky/*; do
  [ -f "$file" ] && [ "$(basename "$file")" != "_" ] && sed_inline "$file" \
    '1s|#!/usr/bin/env sh|#!/bin/sh|' \
    '2s|. "$(dirname -- "$0")/_/husky.sh"|. "$(dirname "$0")/_/husky.sh"|' \
    '2s|. "$(dirname "$0")/_/_/husky.sh"|. "$(dirname "$0")/_/husky.sh"|'
done

echo "✅ Husky hooks updated with correct shebang and husky.sh path"