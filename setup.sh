#!/bin/bash

echo "🛠️ เริ่มแก้ไข alias สำหรับ @ ไปที่ src/"

# สำรองไฟล์เดิม
cp vite.config.ts vite.config.ts.bak
cp tsconfig.json tsconfig.json.bak

# เพิ่ม import path ใน vite.config.ts ถ้ายังไม่มี
if ! grep -q 'import path from "path"' vite.config.ts; then
  sed -i '1s;^;import path from "path";\' vite.config.ts
  echo "✅ เพิ่ม import path ใน vite.config.ts แล้ว"
fi

# เพิ่ม resolve alias ถ้ายังไม่มี
if ! grep -q 'alias: {' vite.config.ts; then
  sed -i '/plugins: react(),/a\
  resolve: {\n    alias: {\n      "@": path.resolve(__dirname, "src"),\n    },\n  },' vite.config.ts
  echo "✅ เพิ่ม alias @: src/ ใน vite.config.ts แล้ว"
else
  echo "✅ alias มีอยู่แล้วใน vite.config.ts"
fi

# แก้ tsconfig.json ด้วย jq (ต้องติดตั้งแล้ว)
if command -v jq >/dev/null 2>&1; then
  jq '.compilerOptions += {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    },
    "types": ["vite/client"],
    "jsx": "react-jsx"
  }' tsconfig.json > tsconfig.tmp.json && mv tsconfig.tmp.json tsconfig.json
  echo "✅ ปรับ tsconfig.json สำเร็จ"
else
  echo "❌ ต้องติดตั้ง jq ก่อน (ใช้คำสั่ง: pkg install jq)"
  exit 1
fi

echo "🚀 เสร็จสิ้น! ทดสอบรันด้วย: pnpm run dev"
