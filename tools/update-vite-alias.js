const fs = require('fs');
const path = require('path');

const tsconfigPath = path.resolve(__dirname, '../tsconfig.json');
const viteConfigPath = path.resolve(__dirname, '../vite.config.ts');

// อ่าน tsconfig.json paths
function getAliasesFromTsconfig() {
  const tsconfigRaw = fs.readFileSync(tsconfigPath, 'utf-8');
  const tsconfig = JSON.parse(tsconfigRaw);
  const paths = tsconfig.compilerOptions?.paths || {};
  const aliases = [];

  for (const key in paths) {
    const cleanKey = key.replace(/\/\*$/, '');
    const target = paths[key][0].replace(/\/\*$/, '');
    aliases.push({ find: cleanKey, replacement: target });
  }
  return aliases;
}

// อัปเดต alias ใน vite.config.ts
function updateViteAlias() {
  let viteRaw = fs.readFileSync(viteConfigPath, 'utf-8');
  const aliases = getAliasesFromTsconfig();

  // สร้าง block alias ใหม่ (TS/JS syntax)
  const aliasBlock = `alias: [\n${aliases
    .map(
      (a) =>
        `    { find: '${a.find}', replacement: path.resolve(__dirname, '${a.replacement}') }`,
    )
    .join(',\n')}\n  ]`;

  // regex หา alias block เดิมใน vite.config.ts (ประมาณ)
  const aliasRegex = /alias:\s*\[[\s\S]*?\]/m;

  if (aliasRegex.test(viteRaw)) {
    viteRaw = viteRaw.replace(aliasRegex, aliasBlock);
    console.log('✅ อัปเดต alias ใน vite.config.ts สำเร็จ');
  } else {
    // ถ้าไม่มี alias block ให้เพิ่มตรงที่เหมาะสม (simplify: แทรกก่อน export default)
    viteRaw = viteRaw.replace(/export default/, `${aliasBlock},\n\nexport default`);
    console.log('⚠️ ไม่พบ alias block เดิมใน vite.config.ts, แทรก alias ใหม่แทน');
  }

  fs.writeFileSync(viteConfigPath, viteRaw, 'utf-8');
}

updateViteAlias();
