#!/bin/bash
# auto-commit.sh - สคริปต์สำหรับ commit และ push อัตโนมัติในโปรเจกต์

set -e

# ตั้งค่า message commit เริ่มต้น
COMMIT_MSG=${1:-"auto commit: update $(date +'%Y-%m-%d %H:%M:%S')"}

# ตรวจสอบว่ามีการเปลี่ยนแปลงหรือไม่
if [[ -n $(git status --porcelain) ]]; then
  echo "พบการเปลี่ยนแปลง กำลัง commit อัตโนมัติ..."
  git add -A
  git commit -m "$COMMIT_MSG"
  git push
  echo "commit และ push เรียบร้อย"
else
  echo "ไม่มีการเปลี่ยนแปลงที่จะ commit"
fi