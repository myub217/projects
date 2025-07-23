#!/bin/sh

# สร้างโฟลเดอร์ husky ถ้ายังไม่มี
mkdir -p .husky/_

# ดาวน์โหลดไฟล์ husky.sh (สมมติว่าไว้ใน repo หรือ local copy)
# ปกติจะถูกสร้างโดย husky install อยู่แล้ว ไม่ต้องทำเอง

# ตัวอย่างสร้างไฟล์ hook pre-commit แบบใหม่
cat > .husky/pre-commit << 'EOF'
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

pnpm lint
EOF

chmod +x .husky/pre-commit

# ตัวอย่างแก้ไขไฟล์ hook ใน .husky/_/* ให้เรียก husky.sh แบบใหม่
for file in .husky/_/*; do
  if [ -f "$file" ]; then
    sed -i '1,2s|#!/usr/bin/env sh\n. "$(dirname -- "$0")/_/husky.sh"|#!/bin/sh\n. "$(dirname "$0")/husky.sh"|' "$file"
  fi
done

echo "Setup husky hooks updated with correct shebang and husky.sh path"