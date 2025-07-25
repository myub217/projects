#!/bin/bash

# =============================
# 📦 AUTO ARCHIVE UNUSED COMPONENTS
# =============================

ARCHIVE_DIR="src/__archive__/unused"
mkdir -p "$ARCHIVE_DIR"

# รายชื่อ component ที่ไม่ถูก import
UNUSED_COMPONENTS=(
  "src/components/common/LoadingFallback.tsx"
  "src/components/AdminBoard/widgets/CertificateExporter.tsx"
  "src/components/AdminBoard/widgets/CertificateTemplate.tsx"
  "src/components/AdminBoard/widgets/FormFieldWrapper.tsx"
  "src/components/AdminBoard/widgets/SalaryCertificate.tsx"
  "src/components/SecretRoom/DashboardCard.tsx"
  "src/components/ErrorBoundary.tsx"
  "src/components/ProtectedRoute.tsx"
)

echo "📦 ย้าย components ที่ไม่ได้ใช้ไปยัง $ARCHIVE_DIR"

for FILE in "${UNUSED_COMPONENTS[@]}"; do
  if [ -f "$FILE" ]; then
    mv "$FILE" "$ARCHIVE_DIR/"
    echo "✅ ย้ายแล้ว: $FILE -> $ARCHIVE_DIR/"
  else
    echo "⚠️ ไม่พบไฟล์: $FILE"
  fi
done

echo "🏁 เสร็จสิ้นการ archive!"