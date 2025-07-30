// tools/generate-auto-imports.js (plain JS, no TS syntax)
<<<<<<< HEAD
import fs from 'fs';
import path from 'path';

const imports = {
  'react': ['useState', 'useEffect', 'useMemo', 'useCallback', 'useRef'],
  'react-router-dom': ['useNavigate', 'useParams', 'Link'],
  '@/utils': ['cn', 'formatDate'],
};

const dtsPath = path.resolve(process.cwd(), './src/auto-imports.d.ts');
const eslintPath = path.resolve(process.cwd(), './.eslintrc-auto-import.json');
=======
import fs from "fs";
import path from "path";

const imports = {
  react: ["useState", "useEffect", "useMemo", "useCallback", "useRef"],
  "react-router-dom": ["useNavigate", "useParams", "Link"],
  "@/utils": ["cn", "formatDate"],
};

const dtsPath = path.resolve(process.cwd(), "./src/auto-imports.d.ts");
const eslintPath = path.resolve(process.cwd(), "./.eslintrc-auto-import.json");
>>>>>>> bbe22dc9 (update)

const dtsContent = `// auto generated — DO NOT EDIT MANUALLY
/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
declare global {
${Object.entries(imports)
  .map(([pkg, fns]) =>
<<<<<<< HEAD
    fns.map((fn) => `  const ${fn}: typeof import('${pkg}')['${fn}'];`).join('\n'),
  )
  .join('\n')}
=======
    fns
      .map((fn) => `  const ${fn}: typeof import('${pkg}')['${fn}'];`)
      .join("\n"),
  )
  .join("\n")}
>>>>>>> bbe22dc9 (update)
}
export {};
`;

const eslintContent = {
  globals: Object.values(imports)
    .flat()
    .reduce((acc, fn) => {
<<<<<<< HEAD
      acc[fn] = 'readonly';
=======
      acc[fn] = "readonly";
>>>>>>> bbe22dc9 (update)
      return acc;
    }, {}),
};

<<<<<<< HEAD
fs.writeFileSync(dtsPath, dtsContent, 'utf-8');
fs.writeFileSync(eslintPath, JSON.stringify(eslintContent, null, 2) + '\n', 'utf-8');
=======
fs.writeFileSync(dtsPath, dtsContent, "utf-8");
fs.writeFileSync(
  eslintPath,
  JSON.stringify(eslintContent, null, 2) + "\n",
  "utf-8",
);
>>>>>>> bbe22dc9 (update)

console.log(
  `✅ Generated ${path.relative(process.cwd(), dtsPath)} and ${path.relative(process.cwd(), eslintPath)}`,
);
