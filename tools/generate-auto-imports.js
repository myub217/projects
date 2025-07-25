// tools/generate-auto-imports.js
import fs from 'fs';

const imports = {
  'react': ['useState', 'useEffect', 'useMemo', 'useCallback', 'useRef'],
  'react-router-dom': ['useNavigate', 'useParams', 'Link'],
  '@/utils': ['cn', 'formatDate'],
};

const dtsPath = './auto-imports.d.ts';
const eslintPath = './.eslintrc-auto-import.json';

const dtsContent = `// auto generated
${Object.entries(imports)
  .map(([pkg, fns]) =>
    fns.map((fn) => `declare const ${fn}: typeof import('${pkg}')['${fn}']`).join('\n'),
  )
  .join('\n')}
`;

const eslintContent = {
  globals: Object.values(imports)
    .flat()
    .reduce((acc, fn) => {
      acc[fn] = 'readonly';
      return acc;
    }, {}),
};

fs.writeFileSync(dtsPath, dtsContent);
fs.writeFileSync(eslintPath, JSON.stringify(eslintContent, null, 2));
console.log('✅ Generated auto-imports.d.ts and .eslintrc-auto-import.json');
