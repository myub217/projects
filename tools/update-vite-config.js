// tools/update-vite-config.js
import fs from "fs";
import path from "path";

const VITE_CONFIG_PATH = path.resolve(process.cwd(), "vite.config.ts");

function updateViteConfig() {
  if (!fs.existsSync(VITE_CONFIG_PATH)) {
    console.error("❌ vite.config.ts ไม่พบไฟล์");
    process.exit(1);
  }

  let content = fs.readFileSync(VITE_CONFIG_PATH, "utf-8");

  // กำหนด aliases ใหม่แบบถูกต้อง (แก้ path ให้ใช้ ./src ไม่ใช่ /src)
  const aliases = {
    "@": "./src",
    "@components": "./src/components",
    "@data": "./src/data",
    "@utils": "./src/utils",
    "@assets": "./src/assets",
    "@pages": "./src/pages", // เพิ่มเติม
  };

  // สร้าง alias block string ใหม่ (แบบ object literal)
  const aliasString = Object.entries(aliases)
    .map(([key, val]) => `      '${key}': path.resolve(__dirname, '${val}')`)
    .join(",\n");

  const newAliasBlock = `alias: {\n${aliasString}\n    }`;

  // แทนที่ alias block เดิมใน vite.config.ts ด้วย regex แบบ multiline
  const aliasRegex = /alias:\s*\{[^}]*\}/m;
  if (aliasRegex.test(content)) {
    content = content.replace(aliasRegex, newAliasBlock);
  } else {
    console.warn(
      "⚠️ ไม่พบ alias block ใน vite.config.ts, ไม่ได้เพิ่มใหม่อัตโนมัติ",
    );
  }

  fs.writeFileSync(VITE_CONFIG_PATH, content, "utf-8");

  console.log("✅ vite.config.ts อัปเดต alias เรียบร้อย");
}

// ไม่ต้องรับ args ตอนนี้ ไม่ใช้ importList
updateViteConfig();
