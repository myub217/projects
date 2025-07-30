// update-eslint-auto-import.js :: ESM style
// ✅ ใช้ร่วมกับ AutoImport plugin เพื่ออัปเดตไฟล์ eslint config สำหรับ global imports
// Run: node ./scripts/update-eslint-auto-import.js "$(cat src/auto-imports.d.ts | extract-json-from-autoimport)"

<<<<<<< HEAD
import { writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
=======
import { writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
>>>>>>> bbe22dc9 (update)

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ รับ input JSON จาก CLI argument
const input = process.argv[2];
if (!input) {
<<<<<<< HEAD
  console.error('❌ ไม่พบ input json (ควรใส่ JSON string เป็น argument แรก)');
=======
  console.error("❌ ไม่พบ input json (ควรใส่ JSON string เป็น argument แรก)");
>>>>>>> bbe22dc9 (update)
  process.exit(1);
}

// ✅ แปลง JSON เป็น Object
let imports;
try {
  imports = JSON.parse(input);
} catch (err) {
<<<<<<< HEAD
  console.error('❌ ไม่สามารถแปลง JSON ได้:', err.message);
=======
  console.error("❌ ไม่สามารถแปลง JSON ได้:", err.message);
>>>>>>> bbe22dc9 (update)
  process.exit(1);
}

// ✅ เตรียม path สำหรับ eslint auto import config
<<<<<<< HEAD
const eslintConfigPath = path.resolve(__dirname, '../.eslintrc-auto-import.json');
=======
const eslintConfigPath = path.resolve(
  __dirname,
  "../.eslintrc-auto-import.json",
);
>>>>>>> bbe22dc9 (update)

// ✅ สร้าง global scope สำหรับ eslint
const globals = {};
for (const entry of imports) {
<<<<<<< HEAD
  if (entry?.name) globals[entry.name] = 'readonly';
=======
  if (entry?.name) globals[entry.name] = "readonly";
>>>>>>> bbe22dc9 (update)
}

// ✅ สร้าง output config
const output = {
  globals,
};

// ✅ เขียนไฟล์ eslint auto import config
try {
<<<<<<< HEAD
  await writeFile(eslintConfigPath, JSON.stringify(output, null, 2) + '\n', 'utf-8');
=======
  await writeFile(
    eslintConfigPath,
    JSON.stringify(output, null, 2) + "\n",
    "utf-8",
  );
>>>>>>> bbe22dc9 (update)
  console.log(
    `✅ อัปเดต .eslintrc-auto-import.json เรียบร้อย (${Object.keys(globals).length} รายการ)`,
  );
} catch (err) {
<<<<<<< HEAD
  console.error('❌ เกิดข้อผิดพลาดขณะเขียนไฟล์:', err.message);
=======
  console.error("❌ เกิดข้อผิดพลาดขณะเขียนไฟล์:", err.message);
>>>>>>> bbe22dc9 (update)
  process.exit(1);
}
