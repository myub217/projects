#!/bin/sh

# สร้างโฟลเดอร์ .husky/_ ถ้ายังไม่มี
mkdir -p .husky/_

# สร้างไฟล์ hook pre-commit แบบใหม่
cat > .husky/pre-commit << 'EOF'
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

pnpm lint
EOF

chmod +x .husky/pre-commit

# แก้ไขไฟล์ hook ใน .husky/_/* ให้ใช้ shebang กับ path husky.sh แบบใหม่
for file in .husky/_/*; do
  if [ -f "$file" ]; then
    sed -i -e '1s|#!/usr/bin/env sh|#!/bin/sh|' \
           -e '2s|. "$(dirname -- "$0")/_/husky.sh"|. "$(dirname "$0")/_/husky.sh"|' "$file"
  fi
done

echo "Setup husky hooks updated with correct shebang and husky.sh path"