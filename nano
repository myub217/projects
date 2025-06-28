#!/data/data/com.termux/files/usr/bin/bash
# ใช้ได้กับ Termux หรือ Linux ทั่วไป

# === CONFIG =====================
API_KEY="AIzaSyDn2vOrKGV2cKi7aFwJTbVOIZqzABLMDDY"
RC_FILE="$HOME/.zshrc"  # เปลี่ยนเป็น ~/.bashrc หากใช้ bash
# ================================

echo "🔧 ติดตั้ง curl และ jq..."
pkg install -y curl jq

echo "🧹 ล้าง alias gemini เดิม (ถ้ามี)..."
sed -i '/# === Gemini CLI Function ===/,/# ===========================/d' "$RC_FILE"

echo "➕ เพิ่ม alias gemini แบบปลอดภัยลงใน $RC_FILE ..."
cat << EOF >> "$RC_FILE"

# === Gemini CLI Function ===
gemini() {
  curl -s "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=$API_KEY" \\
    -H "Content-Type: application/json" \\
    -d "{\"contents\":[{\"parts\":[{\"text\":\"\$*\"}]}]}" \\
    | jq -r '.candidates[0].content.parts[0].text'
}
# ===========================
EOF

echo "✅ โหลดการตั้งค่าใหม่..."
source "$RC_FILE"

echo ""
echo "🎉 เสร็จสิ้น! พร้อมใช้คำสั่ง 'gemini' แล้ว เช่น:"
echo ""
echo "   gemini เปรียบเทียบ React กับ Vue"
echo ""
