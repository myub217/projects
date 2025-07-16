#!/bin/bash

# Root path
PROJECT_DIR="src"

# โฟลเดอร์ที่ควรมี
DIRS=(
  "$PROJECT_DIR/api"
  "$PROJECT_DIR/assets/icons"
  "$PROJECT_DIR/assets/images/review"
  "$PROJECT_DIR/components/AdminBoard"
  "$PROJECT_DIR/components/Features"
  "$PROJECT_DIR/config"
  "$PROJECT_DIR/constants"
  "$PROJECT_DIR/data"
  "$PROJECT_DIR/pages/SecretRoomPageComponents/Features"
  "$PROJECT_DIR/pages/config"
  "$PROJECT_DIR/styles"
  "$PROJECT_DIR/types"
  "$PROJECT_DIR/utils"
)

# สร้างโฟลเดอร์ถ้ายังไม่มี
for dir in "${DIRS[@]}"; do
  [ ! -d "$dir" ] && mkdir -p "$dir" && echo "สร้าง: $dir"
done

# สร้างไฟล์ถ้าไม่มี (เปล่าไว้ก่อน)
FILES=(
  "$PROJECT_DIR/api/apiClient.ts"
  "$PROJECT_DIR/constants/env.ts"
  "$PROJECT_DIR/config/contact.ts"
  "$PROJECT_DIR/config/themes.ts"
  "$PROJECT_DIR/data/servicesData.ts"
  "$PROJECT_DIR/data/users.ts"
  "$PROJECT_DIR/styles/global.css"
  "$PROJECT_DIR/utils/hashPassword.ts"
  "$PROJECT_DIR/types/assets.d.ts"
  "$PROJECT_DIR/types/connect-history-api-fallback.d.ts"
  "$PROJECT_DIR/types/index.d.ts"
  "$PROJECT_DIR/types/vite-env.d.ts"
)

for file in "${FILES[@]}"; do
  [ ! -f "$file" ] && touch "$file" && echo "สร้างไฟล์เปล่า: $file"
done

echo "✅ เสร็จสิ้น"