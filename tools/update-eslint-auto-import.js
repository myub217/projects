// update-eslint-auto-import.js :: ESM style
import { writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const input = process.argv[2];
if (!input) {
  console.error('❌ ไม่พบ input json');
  process.exit(1);
}

let imports;
try {
  imports = JSON.parse(input);
} catch (err) {
  console.error('❌ ไม่สามารถแปลง JSON ได้:', err.message);
  process.exit(1);
}

const eslintConfigPath = path.resolve(__dirname, '../.eslintrc-auto-import.json');

const globals = {};
for (const entry of imports) {
  if (entry.name) {
    globals[entry.name] = 'readonly';
  }
}

const output = {
  globals,
};

try {
  await writeFile(eslintConfigPath, JSON.stringify(output, null, 2) + '\n', 'utf-8');
  console.log(`🔧 อัปเดต eslintrc-auto-import.json (${imports.length} รายการ)`);
} catch (err) {
  console.error('❌ เกิดข้อผิดพลาดขณะเขียนไฟล์:', err.message);
  process.exit(1);
}
