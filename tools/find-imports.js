// tools/find-imports.js
import fs from "fs";
import path from "path";

const SRC_DIR = path.resolve(process.cwd(), "src");

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
      const content = fs.readFileSync(fullPath, "utf-8");
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
