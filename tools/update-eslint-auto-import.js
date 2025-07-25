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

const imports = JSON.parse(input);
const eslintConfigPath = path.resolve(__dirname, '../.eslintrc-auto-import.json');

const globals = {};
for (const entry of imports) {
  globals[entry.name] = 'readonly';
}

const output = {
  globals,
};

await writeFile(eslintConfigPath, JSON.stringify(output, null, 2) + '\n', 'utf-8');
console.log(`🔧 อัปเดต eslintrc-auto-import.json (${imports.length} รายการ)`);
