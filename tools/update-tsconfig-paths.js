// tools/update-tsconfig-paths.js (plain JS, no TS syntax)
<<<<<<< HEAD
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
=======
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
>>>>>>> bbe22dc9 (update)

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

<<<<<<< HEAD
const tsconfigPath = path.resolve(__dirname, '../tsconfig.json');
const viteConfigPath = path.resolve(__dirname, '../vite.config.ts');
=======
const tsconfigPath = path.resolve(__dirname, "../tsconfig.json");
const viteConfigPath = path.resolve(__dirname, "../vite.config.ts");
>>>>>>> bbe22dc9 (update)

const aliasObjectRegex = /alias:\s*{([\s\S]*?)}/m;
const aliasEntryRegex =
  /(['"`])([^'"`]+)\1\s*:\s*path\.resolve\(__dirname,\s*(['"`])([^'"`]+)\3\)/g;

function extractAliasesFromVite() {
<<<<<<< HEAD
  const viteRaw = fs.readFileSync(viteConfigPath, 'utf-8');
  const match = aliasObjectRegex.exec(viteRaw);

  if (!match) {
    console.warn('⚠️ ไม่พบ alias object ใน vite.config.ts');
=======
  const viteRaw = fs.readFileSync(viteConfigPath, "utf-8");
  const match = aliasObjectRegex.exec(viteRaw);

  if (!match) {
    console.warn("⚠️ ไม่พบ alias object ใน vite.config.ts");
>>>>>>> bbe22dc9 (update)
    return {};
  }

  const aliasBlock = match[1];
  const aliases = {};
  let matchEntry;

  while ((matchEntry = aliasEntryRegex.exec(aliasBlock)) !== null) {
    const aliasKey = matchEntry[2];
    const aliasPath = matchEntry[4];

<<<<<<< HEAD
    const tsKey = aliasKey.endsWith('/*') ? aliasKey : `${aliasKey}/*`;
    const tsPath = aliasPath.replace(/^\.\/?/, './').replace(/\/$/, '') + '/*';
=======
    const tsKey = aliasKey.endsWith("/*") ? aliasKey : `${aliasKey}/*`;
    const tsPath = aliasPath.replace(/^\.\/?/, "./").replace(/\/$/, "") + "/*";
>>>>>>> bbe22dc9 (update)

    aliases[tsKey] = [tsPath];
  }

  return aliases;
}

function updateTsconfigPaths() {
<<<<<<< HEAD
  const raw = fs.readFileSync(tsconfigPath, 'utf-8');
=======
  const raw = fs.readFileSync(tsconfigPath, "utf-8");
>>>>>>> bbe22dc9 (update)
  const tsconfig = JSON.parse(raw);

  const aliases = extractAliasesFromVite();

  if (!tsconfig.compilerOptions) tsconfig.compilerOptions = {};
  if (!tsconfig.compilerOptions.paths) tsconfig.compilerOptions.paths = {};
<<<<<<< HEAD
  tsconfig.compilerOptions.baseUrl = tsconfig.compilerOptions.baseUrl || '.';
=======
  tsconfig.compilerOptions.baseUrl = tsconfig.compilerOptions.baseUrl || ".";
>>>>>>> bbe22dc9 (update)

  tsconfig.compilerOptions.paths = {
    ...tsconfig.compilerOptions.paths,
    ...aliases,
  };

<<<<<<< HEAD
  fs.writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 2) + '\n', 'utf-8');
  console.log('✅ tsconfig.json paths synced with vite.config.ts aliases.');
=======
  fs.writeFileSync(
    tsconfigPath,
    JSON.stringify(tsconfig, null, 2) + "\n",
    "utf-8",
  );
  console.log("✅ tsconfig.json paths synced with vite.config.ts aliases.");
>>>>>>> bbe22dc9 (update)
}

updateTsconfigPaths();
