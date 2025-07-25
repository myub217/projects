const fs = require('fs');
const path = require('path');

const tsconfigPath = path.resolve(__dirname, '../tsconfig.json');
const viteConfigPath = path.resolve(__dirname, '../vite.config.ts');

const aliasPattern = /alias:\s*\[([\s\S]*?)\]/gm;
const entryPattern =
  /{\s*find:\s*['"`](.*?)['"`],\s*replacement:\s*['"`](.*?)['"`]\s*}/g;

function extractAliasFromVite() {
  const viteRaw = fs.readFileSync(viteConfigPath, 'utf-8');
  const aliasMatch = aliasPattern.exec(viteRaw);

  if (!aliasMatch || aliasMatch.length < 2) {
    console.warn('⚠️  ไม่พบ alias ใน vite.config.ts');
    return {};
  }

  const aliasSection = aliasMatch[1];
  const aliases = {};
  let match;

  while ((match = entryPattern.exec(aliasSection)) !== null) {
    const key = match[1].replace(/^@/, '') + '/*';
    const value = match[2].replace(/^\.\/|\/$/g, '') + '/*';
    aliases[`@${key}`] = [`./${value}`];
  }

  return aliases;
}

function updateTsconfigPaths() {
  const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, 'utf-8'));
  const aliases = extractAliasFromVite();

  if (!tsconfig.compilerOptions) tsconfig.compilerOptions = {};
  if (!tsconfig.compilerOptions.paths) tsconfig.compilerOptions.paths = {};

  tsconfig.compilerOptions.paths = {
    ...tsconfig.compilerOptions.paths,
    ...aliases,
  };

  fs.writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 2));
  console.log('✅ tsconfig.json paths updated.');
}

updateTsconfigPaths();
