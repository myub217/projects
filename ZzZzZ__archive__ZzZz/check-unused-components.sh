#!/bin/bash

echo "🔍 กำลังตรวจสอบ components ที่ไม่ถูกใช้งาน..."

# Step 1: หาไฟล์ที่ export default จาก components
find src/components -type f -name "*.tsx" | while read file; do
  if grep -q "export default" "$file"; then
    echo "$file"
  fi
done | sort > all_components.txt

# Step 2: หา import ที่เรียกใช้ components เหล่านั้น
grep -r --exclude-dir=node_modules --exclude-dir=dist --exclude-dir=.git \
  --include="*.tsx" "from '@components/" src \
  | sed -E "s/.*from '@components\/([^']+)'.*/src\/components\/\1.tsx/" \
  | sort | uniq > used_components.txt

# Step 3: เปรียบเทียบหาส่วนต่าง
echo ""
echo "📦 Components ที่ไม่ได้ถูกใช้งาน:"
comm -23 all_components.txt used_components.txt

echo ""
echo "✅ เสร็จสิ้น ตรวจสอบแล้ว"