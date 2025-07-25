// scan-unused-icons.js
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC_DIR = path.resolve(__dirname, 'src');
const usedIcons = new Set();

function scanDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      scanDir(full);
    } else if (full.endsWith('.tsx') || full.endsWith('.ts')) {
      const content = fs.readFileSync(full, 'utf-8');
      const matches = content.match(/(Fi\w+|Lu\w+|Md\w+|Fa\w+|Hi\w+)/g);
      if (matches) matches.forEach((icon) => usedIcons.add(icon));
    }
  }
}

scanDir(SRC_DIR);

console.log('🧩 ใช้ไอคอนต่อไปนี้ในโปรเจกต์:');
[...usedIcons].sort().forEach((icon) => console.log('→', icon));
