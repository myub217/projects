from pathlib import Path

summary_text = """\
🧠 สรุปภาพรวมโปรเจกต์: modular-onepage

📦 เทคโนโลยีที่ใช้:
React, TypeScript, Vite, TailwindCSS, DaisyUI, Express, Framer Motion

🔧 ไฟล์ config ที่สำคัญ:
✅ vite.config.mjs
✅ tailwind.config.mjs
✅ tsconfig.json
✅ tsconfig.base.json
❌ vite.config.js
❌ tailwind.config.js

🧩 ตัวอย่าง Component หลัก:
- src/components/About.tsx
- src/components/Feature.tsx
- src/components/AdminBoard/Dashboard.tsx
- src/components/AdminBoard/RepoList.tsx
- src/components/AdminBoard/StatsPanel.tsx
- src/components/AdminBoard/UserTable.tsx
- src/components/Features/Feature1.tsx
- src/components/Features/Feature2.tsx
- src/components/Features/Feature3.tsx
- src/components/Features/Feature4.tsx

📦 Dependencies:
react, react-dom, react-router-dom, framer-motion, lucide-react, react-icons, daisyui, tailwindcss, express

🧰 DevDependencies:
vite, typescript, eslint, jest, @types/node, @types/react, @types/react-dom

🛠️ Scripts:
dev, build, preview, start:api, clean, typecheck, lint, check, analyze

📂 โครงสร้างโฟลเดอร์ (ตัวอย่าง):
.
├── Clean.sh
├── README.md
├── api/
│   ├── apiAdmin.ts
│   └── apiClient.ts
├── dist/
├── env-vars-20250713-223029.txt
├── eslint.config.mjs
├── full-setup.sh
├── index.html
├── jest.config.js
├── jest.setup.js
├── node_modules/
├── package.json
├── src/
│   ├── components/
│   ├── App.tsx
│   ├── main.tsx
├── tailwind.config.mjs
├── tsconfig.json
├── tsconfig.base.json
├── vite.config.mjs

🧪 ผลลัพธ์ build (ท้าย log):
✓ build completed successfully
✓ 2084 modules transformed.
✓ rendering chunks...
✓ computing gzip size...
✓ dist/index.html — 3.63 kB │ gzip: 1.39 kB

📌 พร้อมใช้งานสำหรับวิเคราะห์หรือ commit ต่อ
"""

summary_path = Path("/mnt/data/project-summary-prompt-final.txt")
summary_path.write_text(summary_text, encoding="utf-8")
summary_path
