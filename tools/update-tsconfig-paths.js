// tools/update-tsconfig-paths.js
const fs = require('fs');
const path = require('path');

const tsconfigPath = path.resolve(__dirname, '../tsconfig.json');
const viteConfigPath = path.resolve(__dirname, '../vite.config.ts');

const aliasPattern = /alias:\s*{([\s\S]*?)}/m;
const entryPattern = /(\w+):\s*path\.resolve\(__dirname,\s*['"`](.*?)['"`]\)/g;

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
    // match[1] = alias key, match[2] = path value
    let key = match[1];
    let val = match[2];

    if (!key.startsWith('@')) key = '@' + key;
    // normalize val to relative path with /* for TS paths
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
