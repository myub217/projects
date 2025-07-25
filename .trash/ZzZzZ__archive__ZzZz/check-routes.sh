#!/bin/bash
ROUTE_DIR="src/routes"
echo "🔍 Checking routes and imported components..."

find "$ROUTE_DIR" -type f \( -name '*.tsx' -o -name '*.ts' \) | while read -r file; do
  echo "Checking $file"

  # ดึงค่า path="..." หรือ path='...' แบบแม่นยำ
  ROUTES=$(grep -oE 'path\s*=\s*["'\''][^"\'\'"]+["'\'']' "$file" | sed -E 's/path\s*=\s*["'\'']([^"\'\'"]+)["'\'']/\1/' | sort -u)

  # ดึงชื่อ component จาก import statements ทั้งแบบ default และ named imports
  IMPORTS=$(grep '^import ' "$file" \
    | sed -E 's/import\s+((\{[^}]+\})|([^ ]+))\s+from\s+["'\''][^"\'\'"]+["'\''];?/\1/' \
    | tr ',' '\n' \
    | sed 's/[{}]//g' \
    | sed 's/^[[:space:]]*//;s/[[:space:]]*$//' \
    | grep -v '^$' \
    | sort -u)

  if [ -z "$ROUTES" ]; then
    echo "⚠️  ไม่มี path route ใด ๆ ใน $file"
  else
    echo "Paths found:"
    echo "$ROUTES"
  fi

  if [ -z "$IMPORTS" ]; then
    echo "⚠️  ไม่มี import component ใด ๆ ใน $file"
  else
    echo "Imported components:"
    echo "$IMPORTS"
  fi

  echo "-------------------------"
done

echo "✅ ตรวจสอบเสร็จสิ้น"