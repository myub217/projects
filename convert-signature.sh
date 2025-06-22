#!/data/data/com.termux/files/usr/bin/bash

# Path ของภาพต้นฉบับ
INPUT="./src/assets/signature.webp"

# ไฟล์ชั่วคราวระหว่างแปลง
TMP="./src/assets/signature.pbm"

# ผลลัพธ์ SVG
OUTPUT="./src/assets/signature.svg"

# 1. แปลง WebP เป็น PBM (bitmap สำหรับ potrace)
convert "$INPUT" -threshold 50% "$TMP"

# 2. ใช้ potrace แปลง PBM เป็น SVG
potrace "$TMP" -s -o "$OUTPUT"

# 3. ลบไฟล์ชั่วคราว
rm "$TMP"

echo "✅ Success: แปลงไฟล์ signature.svg เสร็จแล้วที่ $OUTPUT"
