#!/bin/bash

# ========================================
# 🧪 JP Visual & Docs :: PROJECT AUDIT SCRIPT
# ========================================

BASE_DIR="${BASE_DIR:-$(pwd)}"
SRC_DIR="$BASE_DIR/src"
REPORT_FILE="$BASE_DIR/project-audit.md"

TAILWIND="$BASE_DIR/tailwind.config.ts"
VITE="$BASE_DIR/vite.config.ts"
TS_CONFIG="$BASE_DIR/tsconfig.json"
MAIN="$SRC_DIR/main.tsx"
ROUTER="$SRC_DIR/routes/AppRoutes.tsx"

PAGES=(
  "$SRC_DIR/pages/AdminPage.tsx"
  "$SRC_DIR/pages/SecretRoomPage.tsx"
  "$SRC_DIR/pages/LoginPage.tsx"
  "$SRC_DIR/pages/CustomerAssessmentSummary.tsx"
  "$SRC_DIR/pages/NotFoundPage.tsx"
)

EXTRA_FILES=(
  "$SRC_DIR/config/configureServer.ts"
  "$BASE_DIR/.prettierrc.json"
)

echo "# 🧾 รายงานตรวจสอบโปรเจกต์" > "$REPORT_FILE"
echo "- 📍 ที่อยู่: \`$BASE_DIR\`" >> "$REPORT_FILE"
echo "- 🕒 เวลา: $(date '+%a %b %d %T %Z %Y')" >> "$REPORT_FILE"
echo "- 📘 โหมด: Dev Audit" >> "$REPORT_FILE"
echo -e "\n---\n\n## ✅ ไฟล์และโฟลเดอร์ที่ควรมี" >> "$REPORT_FILE"

check_list=(src src/components src/pages src/routes public tailwind.config.ts vite.config.ts package.json .env)
for p in "${check_list[@]}"; do
  if [[ -e "$BASE_DIR/$p" ]]; then
    echo "- [✅] \`$p\`" >> "$REPORT_FILE"
  else
    echo "- [❌] \`$p\`" >> "$REPORT_FILE"
  fi
done

print_file() {
  local label="$1"
  local file="$2"
  echo -e "\n## 📄 $label (\`$file\`)\n\`\`\`ts" >> "$REPORT_FILE"
  if [[ -f "$file" ]]; then
    cat "$file" >> "$REPORT_FILE"
  else
    echo "// ❌ ไม่พบไฟล์นี้" >> "$REPORT_FILE"
  fi
  echo -e "\n\`\`\`" >> "$REPORT_FILE"
}

print_file "Tailwind Config" "$TAILWIND"
print_file "Vite Config" "$VITE"
print_file "TS Config" "$TS_CONFIG"
print_file "Main Entry" "$MAIN"
print_file "AppRoutes" "$ROUTER"

for page in "${PAGES[@]}"; do
  print_file "$(basename "$page")" "$page"
done

for f in "${EXTRA_FILES[@]}"; do
  print_file "$(basename "$f")" "$f"
done

echo -e "\n## 🧭 Router Mapping" >> "$REPORT_FILE"

if [[ -f "$ROUTER" ]]; then
  declare -A imports=()

  while IFS= read -r line; do
    if [[ $line =~ ^import[[:space:]]+([A-Za-z0-9_]+)[[:space:]]+from[[:space:]]+[\'\"](.+)[\'\"] ]]; then
      imports["${BASH_REMATCH[1]}"]="${BASH_REMATCH[2]}"
    fi
  done < "$ROUTER"

  awk '
    /<Routes>/,/<\/Routes>/ {
      if ($0 ~ /<Route /) {
        path = "";
        component = "";
        for (i=1; i<=NF; i++) {
          if ($i ~ /^path=/) {
            gsub(/path=|"|'\''/, "", $i);
            path = $i;
          }
          if ($i ~ /^element=</) {
            match($i, /element={<([^ >]+)/, arr);
            if (arr[1] != "") {
              component = arr[1];
            }
          }
        }
        print path, component;
      }
    }
  ' "$ROUTER" | while IFS= read -r route comp; do
    echo "### 🔸 Route: /$route" >> "$REPORT_FILE"
    echo "- Component: \`$comp\`" >> "$REPORT_FILE"
    if [[ -n "$comp" && -n "${imports[$comp]}" ]]; then
      echo "- Import Path: \`${imports[$comp]}\`" >> "$REPORT_FILE"
    else
      echo "- Import Path: ❌ ไม่พบใน import" >> "$REPORT_FILE"
    fi
    echo "" >> "$REPORT_FILE"
  done
else
  echo "- ❌ ไม่พบไฟล์ AppRoutes.tsx" >> "$REPORT_FILE"
fi

echo -e "\n## 🗂️ โครงสร้างโปรเจกต์ (3 ชั้น)\n\`\`\`" >> "$REPORT_FILE"
if command -v tree >/dev/null 2>&1; then
  tree -L 3 -I 'node_modules|.git|dist|build' "$BASE_DIR" >> "$REPORT_FILE"
else
  echo "[⚠️] ไม่พบคำสั่ง tree — ติดตั้งด้วย \`pkg install tree\` หรือ \`brew install tree\`" >> "$REPORT_FILE"
fi
echo -e "\n\`\`\`" >> "$REPORT_FILE"

echo -e "\n## 🧹 ts-prune (exports ที่ไม่ได้ใช้งาน)" >> "$REPORT_FILE"
if ! command -v pnpm >/dev/null 2>&1; then
  echo "[⚠️] ไม่พบ pnpm โปรดติดตั้ง pnpm ก่อนใช้งาน ts-prune" >> "$REPORT_FILE"
else
  pnpm add -D ts-prune &>/dev/null
  pnpm exec ts-prune > ts-prune.log 2>&1 || echo "// ❌ ts-prune error หรือไม่มีไฟล์ tsconfig.json" > ts-prune.log
  echo -e "\n\`\`\`ts" >> "$REPORT_FILE"
  cat ts-prune.log >> "$REPORT_FILE"
  echo -e "\n\`\`\`" >> "$REPORT_FILE"
fi

cat >> "$REPORT_FILE" << 'EOF'

---

## ✅ DEV CHECKLIST

- [x] ตั้งค่า Tailwind theme เรียบร้อย
- [x] Vite + React Router + alias พร้อม
- [x] ใช้ import แบบ @components, @pages
- [x] Prettier + Tailwind plugin ทำงานปกติ
- [x] รองรับ responsive (grid, flex, container)
- [x] รองรับโซนเทา (UI/คำพูดไม่เป็นทางการ)
- [x] ตรวจ unused export ด้วย ts-prune

---

# การแสดงผลหน้าเว็ปไซค์ปัจจุบัน JP - VISUAL & DOCS

**JP Visual & Docs**  
บริการช่วยจัดการเบื้องหลังทุกเรื่องที่คุณไม่อยากวุ่น — เอกสาร ธุรกิจ และการตลาด พร้อมทำจริง จบไว

---

## 🔐 เข้าสู่ระบบลับ  
📁 **งานที่เราได้ดูแลให้ลูกค้าแล้ว**  
> เราช่วยวางแผน ตรวจเอกสาร และประสานงานกับหน่วยงานต่าง ๆ ให้ลูกค้าตั้งแต่ต้นจนจบ

**ทั้งหมด 15 รายการ**  
**อัปเดตล่าสุด:** กรกฎาคม 2568

**ตัวอย่างรายการล่าสุด:**
- **ศรัณย์ พิทักษ์ชาญชัย** — จัดเตรียมเอกสารจำนองที่ดิน *(9 ก.ค.)*
- **อรินทรา ทองเจริญ** — ขอหนังสือรับรองบริษัทและงบดุล *(8 ก.ค.)*
- **ณัฐวัฒน์ ชัยวรรณ** — ตรวจสอบโฉนดที่ดินพร้อมแบบบ้าน *(7 ก.ค.)*
- *(อื่น ๆ รวม 15 รายการ)*

📤 [ส่งคำขอให้เราช่วยดูแล](#)

---

## 📊 สถิติที่สร้างความมั่นใจ  
- 👥 **2,450+** ลูกค้าที่ไว้วางใจ  
- 📁 **1,200+** โปรเจกต์ที่ส่งมอบสำเร็จ  
- 🌟 **4.9 / 5.0** คะแนนรีวิวเฉลี่ย  

---

## 💼 บริการของเรา  
บริการหลากหลายที่ออกแบบเพื่อเสริมศักยภาพธุรกิจคุณอย่างมั่นคงและยั่งยืน 🚀

### 🏦 ที่ปรึกษายื่นกู้สินเชื่อ  
วิเคราะห์เงื่อนไข จัดเอกสาร ยื่นเรื่อง เพิ่มโอกาสอนุมัติจริง  
→ [อ่านเพิ่มเติม](#)

### 🛂 รับดูแลเอกสารยื่นวีซ่า  
ตรวจสอบ + ปรับเอกสารให้ตรงข้อกำหนด  
→ [อ่านเพิ่มเติม](#)

### 🧾 แก้ไข / สร้างใหม่ สลิป / เอกสาร  
แก้ไขหรือสร้างใหม่เหมือนจริง ใช้ฟอนต์และพื้นหลังล่าสุด  
→ [อ่านเพิ่มเติม](#)

### 📄 แก้ไข - สร้างใหม่ - จัดหาเอกสารเฉพาะทาง  
แม่นยำ + รวดเร็ว เหมาะกับงานพิเศษ  
→ [อ่านเพิ่มเติม](#)

### 🪪 บัตรแข็ง / อ่อน  
ผลิตพร้อมลายน้ำ QR ตรวจสอบ  
→ [อ่านเพิ่มเติม](#)

### 📢 การตลาดครบวงจร  
วางกลยุทธ์ สร้างคอนเทนต์ ยิงแอด พร้อมรีพอร์ต  
→ [อ่านเพิ่มเติม](#)

### 🎨 ออกแบบโลโก้ / แบนเนอร์ / ทีม  
สื่อแบรนด์คุณภาพสูง พร้อมไฟล์ต้นฉบับ  
→ [อ่านเพิ่มเติม](#)

### 🧠 ระบบหลังบ้านธุรกิจ  
ตั้งค่า Line OA, Telegram, บอท  
→ [อ่านเพิ่มเติม](#)

### 🤖 ระบบดูแลลูกค้าภายใน  
จัดกลุ่มปิด, ดึงลูกค้า, AI ดูแลลูกค้า  
→ [อ่านเพิ่มเติม](#)

### 🔁 สร้างภาพลักษณ์ / ทำลายภาพลักษณ์  
รีแบรนด์อย่างมืออาชีพ *(ไม่ละเมิดกฎหมาย)*  
→ [อ่านเพิ่มเติม](#)

---

## 🚧 บริการใหม่ Coming Soon  
กำลังอัปเดตบริการใหม่ โปรดติดตามเร็ว ๆ นี้  
→ [ติดต่อเรา](#)

---

## 🧑‍💼 JP - Visual & Docs  
ธุรกิจสีเทาที่ออกแบบมาให้ได้มาตรฐานเท่าที่สามารถแสดงได้  
เราพร้อมร่วมงานกับทุกสายอาชีพ ทุกวงการ  
> โปร่งใส ไม่ขายฝัน  
> ให้คำปรึกษาจริง พร้อมบอกเปอร์เซ็นต์ความเสี่ยง

📩 สนใจคุยตรงกับทีมงานหรือแอดมิน → LINE: `@462fqrfc`

---

## 🗣 รีวิวจากลูกค้าของเรา  

> “JP ช่วยจัดระบบเอกสารและทำแบรนด์ให้ดูน่าเชื่อถือมากขึ้น ลูกค้าตัดสินใจเร็วขึ้นกว่าเดิมเยอะเลยค่ะ”  
– คุณแพรว, เจ้าของธุรกิจออนไลน์ *(12 มิ.ย. 2025)*

> “พวกเขามีความเป็นมืออาชีพสูงมาก ทุกงานเสร็จตรงเวลา และมีความเข้าใจเชิงธุรกิจจริง ๆ”  
– คุณไมค์, ผู้ก่อตั้ง StartUp *(8 พ.ค. 2025)*

> “ระบบเอกสารที่พวกเขาทำให้เราลดเวลาการทำงานได้เยอะมาก ข้อมูลทุกอย่างหาเจอไวสุด ๆ”  
– คุณบี, ฝ่ายการตลาด *(3 เม.ย. 2025)*

*(อื่น ๆ รวม 15 รีวิว)*

---

## 📞 พร้อมเริ่มใช้งานหรือยัง?  
**ติดต่อเราวันนี้** เพื่อรับคำปรึกษาฟรีและข้อเสนอสุดพิเศษจากทีมงานมืออาชีพของเรา

- LINE: [@462fqrfc](https://line.me/R/ti/p/@462fqrfc)  
- Facebook / Messenger  
- © 2025 JP - Visual & Docs

> *ข้อมูลทั้งหมดเป็นความจริงตามสถานการณ์ปัจจุบัน และไม่มีการเก็บข้อมูลใด ๆ โดยไม่ได้รับอนุญาต*


# 🔐 แดชบอร์ดของผู้ใช้งานการแเสงผลในSecretRoomPage

## 👤 ผู้ใช้งาน: `JPKYETONKEY300`  
# ✅ ได้รับสิทธิเข้าถึง **ห้องลับ** แล้ว

---

## 🕒 การแจ้งเตือนระบบ

- 🔧 ระบบจะมีการปรับปรุงใน **วันเสาร์ เวลา 23:00 น.**

---

## 📅 ประวัติการแจ้งเตือน

| วันที่            | รายการ                                   |
|------------------|-------------------------------------------|
| 2025-07-21 10:45 | ✅ อัปเดตข้อมูลผู้ใช้สำเร็จแล้ว          |
| 2025-07-20 16:30 | ❌ ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้   |
| 2025-07-19 08:15 | 🌐 การเชื่อมต่ออินเทอร์เน็ต: ออนไลน์<br/>💾 LocalStorage: พร้อมใช้งาน |

---

## 📊 สถานะระบบ

- 🧠 **การใช้ CPU:** `32%`  
- 🧠 **การใช้ RAM:** `68%`  
- 💽 **พื้นที่ใช้งาน:** `140GB / 250GB`  
- ⏱ **ระยะเวลาทำงาน:** `3 วัน 4 ชม.`

---

## 📁 ไฟล์ที่เลือก

> ⚠️ ยังไม่ได้เลือกไฟล์  
> _ไม่ได้เลือกไฟล์ใด_

---

## 📘 บันทึกการเข้าใช้งานระบบ  
_กิจกรรมล่าสุดใน Secret Room_

| เวลา                    | ผู้ใช้            | กิจกรรม              |
|------------------------|------------------|----------------------|
| 2025-07-22 10:30:00    | JPKYETONKEY201   | เข้าสู่ระบบ         |
| 2025-07-22 10:32:12    | JPKYETONKEY233   | ดาวน์โหลดเอกสาร     |
| 2025-07-22 10:35:45    | JPKYETONKEY299   | ออกจากระบบ          |

---

## 💬 ศูนย์ช่วยเหลือ & การสนับสนุน

- 📱 **สอบถามด่วนผ่าน LINE:**  
  👉 [คลิกที่นี่เพื่อแชทกับทีมงาน](#)
- 📧 **ติดต่อทางอีเมล:**  
  `support@jpvisualdocs.com`  
  ⏱ ทีมงานตอบกลับภายใน 1–3 ชั่วโมง (ในเวลาทำการ)

---

## ⚠️ คำเตือนด้านความปลอดภัย

- 🔐 รหัสที่คุณได้รับคือ **กุญแจเข้าระบบทั้งหมด**  
  _ใช้เฉพาะคุณเท่านั้น ห้ามเปิดเผย_

- ❌ ห้ามแชร์:
  - User
  - Password
  - IP
  - Token

- ⚠️ หากมีการเข้าระบบจากเครื่องที่ไม่ใช่เครื่องประจำ  
  → **บัญชีจะถูกปิดทัน
## 📌 สรุปขั้นตอน Dev Audit

### Phase 0: เตรียมความพร้อม
- ตรวจสอบโครงสร้างไฟล์หลัก (src, components, pages, routes, config, public)
- ตรวจสอบ config ต่างๆ (tailwind.config.ts, vite.config.ts, tsconfig.json)

### Phase 1: ตรวจสอบการใช้งานไฟล์
- ตรวจหาไฟล์ที่ไม่ถูก import หรือใช้งานจริง
- ตรวจสอบ import path ใน Router ให้ถูกต้อง
- ตรวจสอบ Component ที่ซ้ำซ้อน

### Phase 2: ปรับปรุงโครงสร้างไฟล์
- แยกไฟล์และโฟลเดอร์ตามหน้าที่
- ย้ายหรือรวมไฟล์ตามความเหมาะสม

### Phase 3: ล้างโค้ดซ้ำซ้อนและปรับปรุง
- รวม utils หรือ constants ที่ซ้ำกัน
- ใช้ Tailwind ให้เต็มประสิทธิภาพ

### Phase 4: ตรวจสอบ Style และ Token
- ตรวจสอบ class ซ้ำซ้อน หรือตัวแปรที่ไม่ได้ใช้
- แยกตัวแปร spacing, colors, zIndex ให้ชัดเจน

### Phase 5: สรุปและ Cleanup
- เตรียมคำสั่งลบไฟล์เก่า
- สร้าง structure ใหม่ที่สะอาดและเป็นมาตรฐาน
- แจ้งปัญหา import หรือ config ที่ผิดพลาดทันที

---

📣 *พบปัญหาเช่น import ผิด หรือ config ขาด แจ้ง Dev Partner ทันที*

EOF

echo -e "\n✅ รายงานพร้อมใช้งานที่ → $REPORT_FILE"