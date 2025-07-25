#!/bin/bash

echo "🔍 กำลังตรวจสอบ Tailwind classes ที่ไม่ได้ใช้งาน..."

npx tailwindcss --content "./src/**/*.{js,ts,jsx,tsx}" --dry-run --output /dev/null > unused-classes.log

if [ -s unused-classes.log ]; then
  echo "⚠️ พบ class ที่อาจไม่ได้ใช้งาน:"
  cat unused-classes.log
else
  echo "✅ ไม่พบ Tailwind class ที่ไม่ได้ใช้งาน"
fi