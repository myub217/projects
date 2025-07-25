// tools/update-tsconfig-paths.js
import fs from 'fs';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const tsconfigPath = path.resolve(__dirname, '../tsconfig.json');
const viteConfigPath = path.resolve(__dirname, '../vite.config.ts');

const aliasPattern = /alias:\s*{([\s\S]*?)}/m;
const entryPattern =
  /(['"`])([^'"`]+)\1\s*:\s*path\.resolve\(__dirname,\s*['"`](.*?)['"`]\)/g;

function extractAliasFromVite() {
  const viteRaw = fs.readFileSync(viteConfigPath, 'utf-8');
  const aliasMatch = aliasPattern.exec(viteRaw);

  if (!aliasMatch || aliasMatch.length < 2) {
    console.warn('⚠️ ไม่พบ alias ใน vite.config.ts');
    return {};
  }

  const aliasSection = aliasMatch[1];
  const aliases = {};
  let match;

  while ((match = entryPattern.exec(aliasSection)) !== null) {
    // match[2] = alias key, match[3] = path value
    let key = match[2];
    let val = match[3];

    if (!key.startsWith('@')) key = '@' + key;
    // Normalize val to relative path starting with ./src and trailing /*
    let relativePath = val.replace(/^src\//, './src/').replace(/\/$/, '');
    aliases[key + '/*'] = [relativePath + '/*'];
  }

  return aliases;
}

function updateTsconfigPaths() {
  const tsconfigRaw = fs.readFileSync(tsconfigPath, 'utf-8');
  const tsconfig = JSON.parse(tsconfigRaw);
  const aliases = extractAliasFromVite();

  if (!tsconfig.compilerOptions) tsconfig.compilerOptions = {};
  if (!tsconfig.compilerOptions.paths) tsconfig.compilerOptions.paths = {};

  tsconfig.compilerOptions.paths = {
    ...tsconfig.compilerOptions.paths,
    ...aliases,
  };

  fs.writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 2) + '\n', 'utf-8');
  console.log('✅ tsconfig.json paths updated.');
}

updateTsconfigPaths();
