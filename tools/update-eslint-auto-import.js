// update-eslint-auto-import.js :: ESM style
// ✅ ใช้ร่วมกับ AutoImport plugin เพื่ออัปเดตไฟล์ eslint config สำหรับ global imports
// Run: node ./scripts/update-eslint-auto-import.js "$(cat src/auto-imports.d.ts | extract-json-from-autoimport)"

import { writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ รับ input JSON จาก CLI argument
const input = process.argv[2];
if (!input) {
  console.error("❌ ไม่พบ input json (ควรใส่ JSON string เป็น argument แรก)");
  process.exit(1);
}

// ✅ แปลง JSON เป็น Object
let imports;
try {
  imports = JSON.parse(input);
} catch (err) {
  console.error("❌ ไม่สามารถแปลง JSON ได้:", err.message);
  process.exit(1);
}

// ✅ เตรียม path สำหรับ eslint auto import config
const eslintConfigPath = path.resolve(
  __dirname,
  "../.eslintrc-auto-import.json",
);

// ✅ สร้าง global scope สำหรับ eslint
const globals = {};
for (const entry of imports) {
  if (entry?.name) globals[entry.name] = "readonly";
}

// ✅ สร้าง output config
const output = {
  globals,
};

// ✅ เขียนไฟล์ eslint auto import config
try {
  await writeFile(
    eslintConfigPath,
    JSON.stringify(output, null, 2) + "\n",
    "utf-8",
  );
  console.log(
    `✅ อัปเดต .eslintrc-auto-import.json เรียบร้อย (${Object.keys(globals).length} รายการ)`,
  );
} catch (err) {
  console.error("❌ เกิดข้อผิดพลาดขณะเขียนไฟล์:", err.message);
  process.exit(1);
}
