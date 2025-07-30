// tools/find-imports.js
<<<<<<< HEAD
import fs from 'fs';
import path from 'path';

const SRC_DIR = path.resolve(process.cwd(), 'src');
=======
import fs from "fs";
import path from "path";

const SRC_DIR = path.resolve(process.cwd(), "src");
>>>>>>> bbe22dc9 (update)

function scanFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const imports = new Set();

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      for (const imp of scanFiles(fullPath)) {
        imports.add(imp);
      }
    } else if (/\.(js|jsx|ts|tsx)$/.test(entry.name)) {
<<<<<<< HEAD
      const content = fs.readFileSync(fullPath, 'utf-8');
=======
      const content = fs.readFileSync(fullPath, "utf-8");
>>>>>>> bbe22dc9 (update)
      // Match import ... from 'module' and import 'module'
      const regex = /import\s+(?:.*?\s+from\s+)?['"]([^'"]+)['"]/g;
      let match;
      while ((match = regex.exec(content)) !== null) {
        imports.add(match[1]);
      }
    }
  }
  return imports;
}

const result = Array.from(scanFiles(SRC_DIR));
console.log(JSON.stringify(result, null, 2));
