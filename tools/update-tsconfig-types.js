// tools/update-tsconfig-types.js
<<<<<<< HEAD
import { readFile, writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
=======
import { readFile, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
>>>>>>> bbe22dc9 (update)

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

<<<<<<< HEAD
const configPath = path.resolve(__dirname, '../tsconfig.json');

async function updateTsconfigTypes() {
  try {
    const raw = await readFile(configPath, 'utf8');
=======
const configPath = path.resolve(__dirname, "../tsconfig.json");

async function updateTsconfigTypes() {
  try {
    const raw = await readFile(configPath, "utf8");
>>>>>>> bbe22dc9 (update)
    const tsconfig = JSON.parse(raw);

    if (!tsconfig.compilerOptions) tsconfig.compilerOptions = {};
    if (!Array.isArray(tsconfig.compilerOptions.types))
      tsconfig.compilerOptions.types = [];

    const types = tsconfig.compilerOptions.types;

<<<<<<< HEAD
    const autoImportType = './tools/auto-imports.d.ts';
=======
    const autoImportType = "./tools/auto-imports.d.ts";
>>>>>>> bbe22dc9 (update)
    const hasAutoImportType = types.includes(autoImportType);

    if (!hasAutoImportType) {
      types.push(autoImportType);
<<<<<<< HEAD
      await writeFile(configPath, JSON.stringify(tsconfig, null, 2) + '\n', 'utf8');
=======
      await writeFile(
        configPath,
        JSON.stringify(tsconfig, null, 2) + "\n",
        "utf8",
      );
>>>>>>> bbe22dc9 (update)
      console.log(`✅ อัปเดต tsconfig.json เรียบร้อย`);
    } else {
      console.log(`ℹ️ tsconfig.json มี auto-imports.d.ts แล้ว`);
    }
  } catch (err) {
    console.error(`❌ ล้มเหลว: อัปเดต tsconfig.json`);
    console.error(err);
    process.exit(1);
  }
}

await updateTsconfigTypes();
