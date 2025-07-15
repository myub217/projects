# Project Summary - projects1

## Project Path

/data/data/com.termux/files/home/projects/projects1

## Git Info

```bash
true
main
4b06bf37 - project (2025-07-14 19:44:52 +0700) M depcheck.config.js
 M dev-dist/sw.js
 M dev-dist/sw.js.map
 M dev-dist/workbox-c6c6fb7c.js
 D dist/assets/index-B8Lf4LT7.js
 D dist/assets/index-B8Lf4LT7.js.map
 M dist/index.html
 M dist/sw.js
 M dist/sw.js.map
 M generate-project-info.sh
 M node_modules/.vite/deps/_metadata.json
?? .summary/coverage-summary-20250714-194515.txt
?? .summary/coverage-summary-20250714-204753.txt
?? .summary/depcheck-20250714-194515.json
?? .summary/depcheck-20250714-204753.json
?? .summary/env-20250714-194515.txt
?? .summary/env-20250714-204753.txt
?? .summary/env-example-20250714-194515.txt
?? .summary/env-example-20250714-204753.txt
?? .summary/git-info-20250714-194515.txt
?? .summary/git-info-20250714-204753.txt
?? .summary/jest-config-20250714-194515.txt
?? .summary/jest-config-20250714-204753.txt
?? .summary/project-info-20250714-194515.json
?? .summary/project-info-20250714-204753.json
?? .summary/server-preview-20250714-194515.txt
?? .summary/server-preview-20250714-204753.txt
?? .summary/tree-20250714-194515.txt
?? .summary/tree-20250714-204753.txt
?? .summary/tsconfig-20250714-194515.txt
?? .summary/tsconfig-20250714-204753.txt
?? .summary/vite-config-20250714-194515.txt
?? .summary/vite-config-20250714-204753.txt
?? dist/assets/index-Ckwltlrp.js
?? dist/assets/index-Ckwltlrp.js.map
?? project-info/
```

## Package Info (package.json)

```bash
"modular-onepage"
"0.1.0"
{
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "start:api": "tsx server.ts",
  "start": "concurrently \"pnpm start:api\" \"pnpm dev\"",
  "start:preview": "concurrently \"pnpm start:api\" \"pnpm preview\"",
  "clean": "sh ./Clean.sh",
  "typecheck": "tsc --noEmit",
  "lint": "eslint . --ext .ts,.tsx",
  "check": "pnpm typecheck && pnpm lint",
  "format": "prettier --write \"**/*.{ts,tsx,js,jsx,json,css,scss,md}\"",
  "analyze": "vite build --plugin rollup-plugin-visualizer",
  "prepare": "husky install",
  "upgrade": "ncu -u && pnpm install"
}
{
  "@tanstack/react-query": "^5.56.0",
  "clsx": "^2.1.1",
  "connect-history-api-fallback": "^2.0.0",
  "dotenv": "^17.2.0",
  "express": "^5.1.0",
  "framer-motion": "^12.23.3",
  "jszip": "^3.10.1",
  "lucide-react": "^0.525.0",
  "node-fetch": "^3.3.2",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-helmet-async": "^2.0.5",
  "react-icons": "^5.5.0",
  "react-router-dom": "^6.30.1",
  "zod": "^3.22.4"
}
{
  "@eslint/js": "^9.31.0",
  "@tailwindcss/typography": "^0.5.16",
  "@testing-library/jest-dom": "^6.6.3",
  "@types/connect-history-api-fallback": "^1.5.4",
  "@types/express": "^4.17.23",
  "@types/node": "^20.19.7",
  "@types/react": "^18.3.23",
  "@types/react-dom": "^18.3.7",
  "@typescript-eslint/eslint-plugin": "^8.36.0",
  "@typescript-eslint/parser": "^8.36.0",
  "@vitejs/plugin-react": "^4.6.0",
  "autoprefixer": "^10.4.21",
  "concurrently": "^8.2.2",
  "daisyui": "^5.0.46",
  "depcheck": "^1.4.3",
  "eslint": "^9.31.0",
  "eslint-config-prettier": "^10.1.5",
  "eslint-plugin-jsx-a11y": "^6.10.2",
  "eslint-plugin-react": "^7.37.5",
  "eslint-plugin-react-hooks": "^5.2.0",
  "eslint-plugin-simple-import-sort": "^12.1.1",
  "eslint-plugin-tailwindcss": "^3.18.0",
  "eslint-plugin-unused-imports": "^4.1.4",
  "husky": "^9.0.11",
  "jest": "^29.7.0",
  "jest-fetch-mock": "^3.0.3",
  "npm-check-updates": "^16.14.16",
  "postcss": "^8.5.6",
  "prettier": "^3.6.2",
  "rollup-plugin-visualizer": "^6.0.3",
  "tailwindcss": "^3.4.17",
  "tsx": "^4.20.3",
  "typescript": "^5.8.3",
  "vite": "^7.0.4",
  "vite-plugin-eslint": "^1.8.1",
  "vite-plugin-pwa": "^1.0.1"
}
```

## Installed Dependencies (pnpm)

```bash
Legend: production dependency, optional only, dev only

modular-onepage@0.1.0 /data/data/com.termux/files/home/projects/projects1 (PRIVATE)

dependencies:
@tanstack/react-query 5.83.0
├── @tanstack/query-core 5.83.0
└── react 18.3.1 peer
clsx 2.1.1
connect-history-api-fallback 2.0.0
dotenv 17.2.0
express 5.1.0
├── accepts 2.0.0
├── body-parser 2.2.0
├── content-disposition 1.0.0
├── content-type 1.0.5
├── cookie 0.7.2
├── cookie-signature 1.2.2
├── debug 4.4.1
├── encodeurl 2.0.0
├── escape-html 1.0.3
├── etag 1.8.1
├── finalhandler 2.1.0
├── fresh 2.0.0
├── http-errors 2.0.0
├── merge-descriptors 2.0.0
├── mime-types 3.0.1
├── on-finished 2.4.1
├── once 1.4.0
├── parseurl 1.3.3
├── proxy-addr 2.0.7
├── qs 6.14.0
├── range-parser 1.2.1
├── router 2.2.0
├── send 1.2.0
├── serve-static 2.2.0
├── statuses 2.0.2
├── type-is 2.0.1
└── vary 1.1.2
framer-motion 12.23.5
├── motion-dom 12.23.5
├── motion-utils 12.23.2
├── react 18.3.1 peer
├── react-dom 18.3.1 peer
└── tslib 2.8.1
jszip 3.10.1
├── lie 3.3.0
├── pako 1.0.11
├── readable-stream 2.3.8
└── setimmediate 1.0.5
lucide-react 0.525.0
└── react 18.3.1 peer
node-fetch 3.3.2
├── data-uri-to-buffer 4.0.1
├── fetch-blob 3.2.0
└── formdata-polyfill 4.0.10
react 18.3.1
└── loose-envify 1.4.0
react-dom 18.3.1
├── loose-envify 1.4.0
├── react 18.3.1 peer
└── scheduler 0.23.2
react-helmet-async 2.0.5
├── invariant 2.2.4
├── react 18.3.1 peer
├── react-fast-compare 3.2.2
└── shallowequal 1.1.0
react-icons 5.5.0
└── react 18.3.1 peer
react-router-dom 6.30.1
├── @remix-run/router 1.23.0
├── react 18.3.1 peer
├── react-dom 18.3.1 peer
└── react-router 6.30.1
zod 3.25.76

devDependencies:
@eslint/js 9.31.0
@tailwindcss/typography 0.5.16
├── lodash.castarray 4.4.0
├── lodash.isplainobject 4.0.6
├── lodash.merge 4.6.2
├── postcss-selector-parser 6.0.10
└── tailwindcss 3.4.17 peer
@testing-library/jest-dom 6.6.3
├── @adobe/css-tools 4.4.3
├── aria-query 5.3.2
├── chalk 3.0.0
├── css.escape 1.5.1
├── dom-accessibility-api 0.6.3
├── lodash 4.17.21
└── redent 3.0.0
@types/connect-history-api-fallback 1.5.4
├── @types/express-serve-static-core 5.0.7
└── @types/node 20.19.7
@types/express 4.17.23
├── @types/body-parser 1.19.6
├── @types/express-serve-static-core 4.19.6
├── @types/qs 6.14.0
└── @types/serve-static 1.15.8
@types/node 20.19.7
└── undici-types 6.21.0
@types/react 18.3.23
├── @types/prop-types 15.7.15
└── csstype 3.1.3
@types/react-dom 18.3.7
└── @types/react 18.3.23 peer
@typescript-eslint/eslint-plugin 8.36.0
├── @eslint-community/regexpp 4.12.1
├── @typescript-eslint/parser 8.36.0 peer
├── @typescript-eslint/scope-manager 8.36.0
├── @typescript-eslint/type-utils 8.36.0
├── @typescript-eslint/utils 8.36.0
├── @typescript-eslint/visitor-keys 8.36.0
├── eslint 9.31.0 peer
├── graphemer 1.4.0
├── ignore 7.0.5
├── natural-compare 1.4.0
├── ts-api-utils 2.1.0
└── typescript 5.8.3 peer
@typescript-eslint/parser 8.36.0
├── @typescript-eslint/scope-manager 8.36.0
├── @typescript-eslint/types 8.36.0
├── @typescript-eslint/typescript-estree 8.36.0
├── @typescript-eslint/visitor-keys 8.36.0
├── debug 4.4.1
├── eslint 9.31.0 peer
└── typescript 5.8.3 peer
@vitejs/plugin-react 4.6.0
├── @babel/core 7.28.0
├── @babel/plugin-transform-react-jsx-self 7.27.1
├── @babel/plugin-transform-react-jsx-source 7.27.1
├── @rolldown/pluginutils 1.0.0-beta.19
├── @types/babel__core 7.20.5
├── react-refresh 0.17.0
└── vite 7.0.4 peer
autoprefixer 10.4.21
├── browserslist 4.25.1
├── caniuse-lite 1.0.30001727
├── fraction.js 4.3.7
├── normalize-range 0.1.2
├── picocolors 1.1.1
├── postcss 8.5.6 peer
└── postcss-value-parser 4.2.0
concurrently 8.2.2
├── chalk 4.1.2
├── date-fns 2.30.0
├── lodash 4.17.21
├── rxjs 7.8.2
├── shell-quote 1.8.3
├── spawn-command 0.0.2
├── supports-color 8.1.1
├── tree-kill 1.2.2
└── yargs 17.7.2
daisyui 5.0.46
depcheck 1.4.7
├── @babel/parser 7.28.0
├── @babel/traverse 7.28.0
├── @vue/compiler-sfc 3.5.17
├── callsite 1.0.0
├── camelcase 6.3.0
├── cosmiconfig 7.1.0
├── debug 4.4.1
├── deps-regex 0.2.0
├── findup-sync 5.0.0
├── ignore 5.3.2
├── is-core-module 2.16.1
├── js-yaml 3.14.1
├── json5 2.2.3
├── lodash 4.17.21
├── minimatch 7.4.6
├── multimatch 5.0.0
├── please-upgrade-node 3.2.0
├── readdirp 3.6.0
├── require-package-name 2.0.1
├── resolve 1.22.10
├── resolve-from 5.0.0
├── semver 7.7.2
└── yargs 16.2.0
eslint 9.31.0
├── @eslint-community/eslint-utils 4.7.0
├── @eslint-community/regexpp 4.12.1
├── @eslint/config-array 0.21.0
├── @eslint/config-helpers 0.3.0
├── @eslint/core 0.15.1
├── @eslint/eslintrc 3.3.1
├── @eslint/js 9.31.0
├── @eslint/plugin-kit 0.3.3
├── @humanfs/node 0.16.6
├── @humanwhocodes/module-importer 1.0.1
├── @humanwhocodes/retry 0.4.3
├── @types/estree 1.0.8
├── @types/json-schema 7.0.15
├── ajv 6.12.6
├── chalk 4.1.2
├── cross-spawn 7.0.6
├── debug 4.4.1
├── escape-string-regexp 4.0.0
├── eslint-scope 8.4.0
├── eslint-visitor-keys 4.2.1
├── espree 10.4.0
├── esquery 1.6.0
├── esutils 2.0.3
├── fast-deep-equal 3.1.3
├── file-entry-cache 8.0.0
├── find-up 5.0.0
├── glob-parent 6.0.2
├── ignore 5.3.2
├── imurmurhash 0.1.4
├── is-glob 4.0.3
├── jiti 1.21.7 peer
├── json-stable-stringify-without-jsonify 1.0.1
├── lodash.merge 4.6.2
├── minimatch 3.1.2
├── natural-compare 1.4.0
└── optionator 0.9.4
eslint-config-prettier 10.1.5
└── eslint 9.31.0 peer
eslint-plugin-jsx-a11y 6.10.2
├── aria-query 5.3.2
├── array-includes 3.1.9
├── array.prototype.flatmap 1.3.3
├── ast-types-flow 0.0.8
├── axe-core 4.10.3
├── axobject-query 4.1.0
├── damerau-levenshtein 1.0.8
├── emoji-regex 9.2.2
├── eslint 9.31.0 peer
├── hasown 2.0.2
├── jsx-ast-utils 3.3.5
├── language-tags 1.0.9
├── minimatch 3.1.2
├── object.fromentries 2.0.8
├── safe-regex-test 1.1.0
└── string.prototype.includes 2.0.1
eslint-plugin-react 7.37.5
├── array-includes 3.1.9
├── array.prototype.findlast 1.2.5
├── array.prototype.flatmap 1.3.3
├── array.prototype.tosorted 1.1.4
├── doctrine 2.1.0
├── es-iterator-helpers 1.2.1
├── eslint 9.31.0 peer
├── estraverse 5.3.0
├── hasown 2.0.2
├── jsx-ast-utils 3.3.5
├── minimatch 3.1.2
├── object.entries 1.1.9
├── object.fromentries 2.0.8
├── object.values 1.2.1
├── prop-types 15.8.1
├── resolve 2.0.0-next.5
├── semver 6.3.1
├── string.prototype.matchall 4.0.12
└── string.prototype.repeat 1.0.0
eslint-plugin-react-hooks 5.2.0
└── eslint 9.31.0 peer
eslint-plugin-simple-import-sort 12.1.1
└── eslint 9.31.0 peer
eslint-plugin-tailwindcss 3.18.0
├── fast-glob 3.3.3
├── postcss 8.5.6
└── tailwindcss 3.4.17 peer
eslint-plugin-unused-imports 4.1.4
├── @typescript-eslint/eslint-plugin 8.36.0 peer
└── eslint 9.31.0 peer
husky 9.1.7
jest 29.7.0
├── @jest/core 29.7.0
├── @jest/types 29.6.3
├── import-local 3.2.0
└── jest-cli 29.7.0
jest-fetch-mock 3.0.3
├── cross-fetch 3.2.0
└── promise-polyfill 8.3.0
npm-check-updates 16.14.20
├── @types/semver-utils 1.1.3
├── chalk 5.4.1
├── cli-table3 0.6.5
├── commander 10.0.1
├── fast-memoize 2.5.2
├── find-up 5.0.0
├── fp-and-or 0.1.4
├── get-stdin 8.0.0
├── globby 11.1.0
├── hosted-git-info 5.2.1
├── ini 4.1.3
├── js-yaml 4.1.0
├── json-parse-helpfulerror 1.0.3
├── jsonlines 0.1.1
├── lodash 4.17.21
├── make-fetch-happen 11.1.1
├── minimatch 9.0.5
├── p-map 4.0.0
├── pacote 15.2.0
├── parse-github-url 1.0.3
├── progress 2.0.3
├── prompts-ncu 3.0.2
├── rc-config-loader 4.1.3
├── remote-git-tags 3.0.0
├── rimraf 5.0.10
├── semver 7.7.2
├── semver-utils 1.1.4
├── source-map-support 0.5.21
├── spawn-please 2.0.2
├── strip-ansi 7.1.0
├── strip-json-comments 5.0.2
├── untildify 4.0.0
└── update-notifier 6.0.2
postcss 8.5.6
├── nanoid 3.3.11
├── picocolors 1.1.1
└── source-map-js 1.2.1
prettier 3.6.2
rollup-plugin-visualizer 6.0.3
├── open 8.4.2
├── picomatch 4.0.2
├── rollup 2.79.2 peer
├── source-map 0.7.4
└── yargs 17.7.2
tailwindcss 3.4.17
├── @alloc/quick-lru 5.2.0
├── arg 5.0.2
├── chokidar 3.6.0
├── didyoumean 1.2.2
├── dlv 1.1.3
├── fast-glob 3.3.3
├── glob-parent 6.0.2
├── is-glob 4.0.3
├── jiti 1.21.7
├── lilconfig 3.1.3
├── micromatch 4.0.8
├── normalize-path 3.0.0
├── object-hash 3.0.0
├── picocolors 1.1.1
├── postcss 8.5.6
├── postcss-import 15.1.0
├── postcss-js 4.0.1
├── postcss-load-config 4.0.2
├── postcss-nested 6.2.0
├── postcss-selector-parser 6.1.2
├── resolve 1.22.10
└── sucrase 3.35.0
tsx 4.20.3
├── esbuild 0.25.6
├── fsevents 2.3.3
└── get-tsconfig 4.10.1
typescript 5.8.3
vite 7.0.4
├── @types/node 20.19.7 peer
├── esbuild 0.25.6
├── fdir 6.4.6
├── fsevents 2.3.3
├── jiti 1.21.7 peer
├── picomatch 4.0.2
├── postcss 8.5.6
├── rollup 4.45.0
├── terser 5.43.1 peer
├── tinyglobby 0.2.14
├── tsx 4.20.3 peer
└── yaml 2.8.0 peer
vite-plugin-eslint 1.8.1
├── @rollup/pluginutils 4.2.1
├── @types/eslint 8.56.12
├── eslint 9.31.0 peer
├── rollup 2.79.2
└── vite 7.0.4 peer
vite-plugin-pwa 1.0.1
├── debug 4.4.1
├── pretty-bytes 6.1.1
├── tinyglobby 0.2.14
├── vite 7.0.4 peer
├── workbox-build 7.3.0 peer
└── workbox-window 7.3.0 peer
```

## Unused Dependencies (depcheck)

```bash
Unused dependencies
* @tanstack/react-query
* clsx
* jszip
* react-helmet-async
* zod
Unused devDependencies
* eslint-plugin-jsx-a11y
* eslint-plugin-react-hooks
* eslint-plugin-simple-import-sort
* vite-plugin-eslint
Missing dependencies
* @emotion/is-prop-valid: ./dist/assets/vendor-react-CA3tHcxm.js
```

## ESLint Report

```bash
/*! 🌼 daisyUI 5.0.46 */

/data/data/com.termux/files/home/projects/projects1/api/apiAdmin.ts
  19:17  error  'process' is not defined  no-undef

/data/data/com.termux/files/home/projects/projects1/api/apiClient.ts
  18:21  error  'fetch' is not defined  no-undef

/data/data/com.termux/files/home/projects/projects1/depcheck.config.js
  10:18  error  'require' is not defined  no-undef
  12:1   error  'module' is not defined   no-undef

/data/data/com.termux/files/home/projects/projects1/dev-dist/registerSW.js
  1:23  error  'navigator' is not defined  no-undef
  1:34  error  'navigator' is not defined  no-undef

/data/data/com.termux/files/home/projects/projects1/dev-dist/sw.js
  15:6   error  'self' is not defined           no-undef
  23:15  error  'URL' is not defined            no-undef
  27:29  error  'self' is not defined           no-undef
  28:28  error  'document' is not defined       no-undef
  31:13  error  'document' is not defined       no-undef
  34:13  error  'importScripts' is not defined  no-undef
  49:3   error  'self' is not defined           no-undef
  50:49  error  'self' is not defined           no-undef
  50:56  error  'document' is not defined       no-undef
  50:92  error  'location' is not defined       no-undef
  70:1   error  'define' is not defined         no-undef
  72:3   error  'self' is not defined           no-undef
  74:7   error  'self' is not defined           no-undef

/data/data/com.termux/files/home/projects/projects1/dev-dist/workbox-c6c6fb7c.js
     1:1   error    'define' is not defined                                                         no-undef
     5:7   error    'self' is not defined                                                           no-undef
     5:37  error    '_' is not defined                                                              no-undef
     6:14  error    'e' is defined but never used                                                   no-unused-vars
     6:17  error    Empty block statement                                                           no-empty
    18:9   error    'self' is not defined                                                           no-undef
    30:13  error    'self' is not defined                                                           no-undef
    36:53  error    'navigator' is not defined                                                      no-undef
    37:13  error    'console' is not defined                                                        no-undef
    44:9   error    'console' is not defined                                                        no-undef
    52:7   error    Definition for rule '@typescript-eslint/ban-types' was not found                @typescript-eslint/ban-types
   419:5   error    Definition for rule '@typescript-eslint/ban-types' was not found                @typescript-eslint/ban-types
   435:5   warning  Unused eslint-disable directive (no problems were reported)
   458:7   error    'self' is not defined                                                           no-undef
   458:40  error    '_' is not defined                                                              no-undef
   459:14  error    'e' is defined but never used                                                   no-unused-vars
   459:17  error    Empty block statement                                                           no-empty
   637:30  error    'location' is not defined                                                       no-undef
   661:26  error    'URL' is not defined                                                            no-undef
   661:43  error    'location' is not defined                                                       no-undef
   664:49  error    'location' is not defined                                                       no-undef
   713:9   error    'self' is not defined                                                           no-undef
   750:9   error    'self' is not defined                                                           no-undef
   752:11  error    Definition for rule '@typescript-eslint/no-unsafe-member-access' was not found  @typescript-eslint/no-unsafe-member-access
   754:13  error    Definition for rule '@typescript-eslint/no-unsafe-assignment' was not found     @typescript-eslint/no-unsafe-assignment
   765:35  error    'Request' is not defined                                                        no-undef
   799:50  error    'Request' is not defined                                                        no-undef
   806:25  error    'URL' is not defined                                                            no-undef
   806:42  error    'location' is not defined                                                       no-undef
   813:43  error    'location' is not defined                                                       no-undef
   948:11  error    Definition for rule '@typescript-eslint/no-unsafe-assignment' was not found     @typescript-eslint/no-unsafe-assignment
   964:13  error    Definition for rule '@typescript-eslint/no-unsafe-assignment' was not found     @typescript-eslint/no-unsafe-assignment
   970:13  warning  Unused eslint-disable directive (no problems were reported)
  1135:32  error    'URL' is not defined                                                            no-undef
  1135:45  error    'location' is not defined                                                       no-undef
  1197:53  error    'registration' is not defined                                                   no-undef
  1255:7   error    'self' is not defined                                                           no-undef
  1255:43  error    '_' is not defined                                                              no-undef
  1256:14  error    'e' is defined but never used                                                   no-unused-vars
  1256:17  error    Empty block statement                                                           no-empty
  1285:31  error    'URL' is not defined                                                            no-undef
  1285:42  error    'location' is not defined                                                       no-undef
  1303:31  error    'URL' is not defined                                                            no-undef
  1303:40  error    'location' is not defined                                                       no-undef
  1311:31  error    'URL' is not defined                                                            no-undef
  1311:40  error    'location' is not defined                                                       no-undef
  1312:31  error    'URL' is not defined                                                            no-undef
  1312:40  error    'location' is not defined                                                       no-undef
  1352:84  error    'Request' is not defined                                                        no-undef
  1389:11  warning  Unused eslint-disable directive (no problems were reported)
  1392:33  error    'Request' is not defined                                                        no-undef
  1499:34  error    'Response' is not defined                                                       no-undef
  1502:17  error    'Response' is not defined                                                       no-undef
  1504:20  error    'error' is defined but never used                                               no-unused-vars
  1543:33  error    'URL' is not defined                                                            no-undef
  1546:22  error    'self' is not defined                                                           no-undef
  1554:22  error    'Headers' is not defined                                                        no-undef
  1564:18  error    'Response' is not defined                                                       no-undef
  1574:31  error    'URL' is not defined                                                            no-undef
  1648:5   error    Definition for rule '@typescript-eslint/ban-types' was not found                @typescript-eslint/ban-types
  1695:37  error    'setTimeout' is not defined                                                     no-undef
  1700:7   error    'self' is not defined                                                           no-undef
  1700:43  error    '_' is not defined                                                              no-undef
  1701:14  error    'e' is defined but never used                                                   no-unused-vars
  1701:17  error    Empty block statement                                                           no-empty
  1711:46  error    'Request' is not defined                                                        no-undef
  1779:56  error    'ExtendableEvent' is not defined                                                no-undef
  1818:61  error    'FetchEvent' is not defined                                                     no-undef
  1852:33  error    'fetch' is not defined                                                          no-undef
  1853:15  error    Unexpected constant condition                                                   no-constant-condition
  1920:32  error    'caches' is not defined                                                         no-undef
  1992:29  error    'self' is not defined                                                           no-undef
  2045:35  warning  Unused eslint-disable directive (no problems were reported)
  2144:16  error    Expected a conditional expression and instead saw an assignment                 no-cond-assign
  2315:32  error    'FetchEvent' is not defined                                                     no-undef
  2322:67  error    'Request' is not defined                                                        no-undef
  2383:18  error    'error' is defined but never used                                               no-unused-vars
  2511:46  error    'Request' is not defined                                                        no-undef
  2543:87  error    'Request' is not defined                                                        no-undef
  2702:11  error    'self' is not defined                                                           no-undef
  2703:11  error    'self' is not defined                                                           no-undef
  2772:9   error    Definition for rule '@typescript-eslint/no-unsafe-return' was not found         @typescript-eslint/no-unsafe-return
  2781:33  error    'Request' is not defined                                                        no-undef
  2819:9   error    Definition for rule '@typescript-eslint/no-unsafe-return' was not found         @typescript-eslint/no-unsafe-return
  2821:31  error    'self' is not defined                                                           no-undef
  2867:31  error    'URL' is not defined                                                            no-undef
  2867:40  error    'location' is not defined                                                       no-undef
  2897:40  error    'Request' is not defined                                                        no-undef
  2900:31  error    'self' is not defined                                                           no-undef
  2921:33  error    'Request' is not defined                                                        no-undef
  3002:29  error    'URL' is not defined                                                            no-undef
  3002:38  error    'location' is not defined                                                       no-undef
  3008:34  error    'URL' is not defined                                                            no-undef
  3013:30  error    'URL' is not defined                                                            no-undef
  3195:32  error    'self' is not defined                                                           no-undef
  3197:74  error    'self' is not defined                                                           no-undef
  3199:61  error    'self' is not defined                                                           no-undef
  3218:7   error    'self' is not defined                                                           no-undef

/data/data/com.termux/files/home/projects/projects1/dist/assets/index-Ckwltlrp.js
    1:275    error  'document' is not defined          no-undef
    1:382    error  'document' is not defined          no-undef
    1:446    error  'MutationObserver' is not defined  no-undef
    1:596    error  'document' is not defined          no-undef
    1:944    error  'fetch' is not defined             no-undef
    1:3083   error  'setTimeout' is not defined        no-undef
    1:3211   error  'document' is not defined          no-undef
    1:3254   error  'document' is not defined          no-undef
    1:3329   error  'document' is not defined          no-undef
    1:3399   error  'document' is not defined          no-undef
    1:3769   error  'document' is not defined          no-undef
    1:3840   error  'document' is not defined          no-undef
    1:3908   error  'document' is not defined          no-undef
    1:3961   error  'document' is not defined          no-undef
    1:4105   error  'setTimeout' is not defined        no-undef
    1:4164   error  'document' is not defined          no-undef
    1:4232   error  'history' is not defined           no-undef
    1:4262   error  'window' is not defined            no-undef
    1:4332   error  'window' is not defined            no-undef
    1:4378   error  'window' is not defined            no-undef
    1:4438   error  'window' is not defined            no-undef
    6:565    error  'window' is not defined            no-undef
    6:659    error  'window' is not defined            no-undef
    6:692    error  'window' is not defined            no-undef
    6:736    error  'window' is not defined            no-undef
    6:958    error  'window' is not defined            no-undef
    6:999    error  'window' is not defined            no-undef
    6:5101   error  'window' is not defined            no-undef
   14:4394   error  'fetch' is not defined             no-undef
   14:19814  error  'alert' is not defined             no-undef
   14:23559  error  'alert' is not defined             no-undef
   22:3858   error  't' is defined but never used      no-unused-vars
   27:5684   error  'r' is defined but never used      no-unused-vars
   27:5738   error  'document' is not defined          no-undef
   27:8699   error  'window' is not defined            no-undef
   27:8726   error  'window' is not defined            no-undef
   27:8779   error  'window' is not defined            no-undef
   27:8855   error  'document' is not defined          no-undef
   27:8886   error  'window' is not defined            no-undef
   27:8929   error  'window' is not defined            no-undef
   35:412    error  'window' is not defined            no-undef
   35:453    error  'window' is not defined            no-undef
   35:515    error  'document' is not defined          no-undef
   35:563    error  'document' is not defined          no-undef
   35:5443   error  'alert' is not defined             no-undef
   35:7552   error  'TextEncoder' is not defined       no-undef
   35:7597   error  'window' is not defined            no-undef
   35:8283   error  'localStorage' is not defined      no-undef
   35:8318   error  'localStorage' is not defined      no-undef
   35:8417   error  'console' is not defined           no-undef
   35:27234  error  'setInterval' is not defined       no-undef
   35:27287  error  'clearInterval' is not defined     no-undef
   35:39067  error  'window' is not defined            no-undef
   35:39119  error  'window' is not defined            no-undef
  190:673    error  'setTimeout' is not defined        no-undef
  190:693    error  'alert' is not defined             no-undef
  193:5007   error  'setInterval' is not defined       no-undef
  193:5064   error  'clearInterval' is not defined     no-undef
  193:5372   error  'localStorage' is not defined      no-undef
  193:5478   error  'setTimeout' is not defined        no-undef
  193:6088   error  'localStorage' is not defined      no-undef
  193:6124   error  'localStorage' is not defined      no-undef
  193:11884  error  'document' is not defined          no-undef
  193:12016  error  'localStorage' is not defined      no-undef
  193:12072  error  'localStorage' is not defined      no-undef
  193:12098  error  'window' is not defined            no-undef
  193:13546  error  'document' is not defined          no-undef
  193:13746  error  'console' is not defined           no-undef

/data/data/com.termux/files/home/projects/projects1/dist/assets/vendor-B0T0T1rU.js
   9:66     error  '__REACT_DEVTOOLS_GLOBAL_HOOK__' is not defined                            no-undef
   9:138    error  '__REACT_DEVTOOLS_GLOBAL_HOOK__' is not defined                            no-undef
   9:831    error  'M' is defined but never used                                              no-unused-vars
   9:833    error  'h' is defined but never used                                              no-unused-vars
   9:835    error  'm' is defined but never used                                              no-unused-vars
   9:882    error  'performance' is not defined                                               no-undef
   9:922    error  'performance' is not defined                                               no-undef
   9:1166   error  'setTimeout' is not defined                                                no-undef
   9:1217   error  'clearTimeout' is not defined                                              no-undef
   9:1262   error  'setImmediate' is not defined                                              no-undef
   9:1302   error  'navigator' is not defined                                                 no-undef
   9:1333   error  'navigator' is not defined                                                 no-undef
   9:1379   error  'navigator' is not defined                                                 no-undef
   9:1420   error  'navigator' is not defined                                                 no-undef
   9:1762   error  'A' is defined but never used                                              no-unused-vars
   9:3246   error  'console' is not defined                                                   no-undef
   9:3640   error  'MessageChannel' is not defined                                            no-undef
   9:4464   error  '__REACT_DEVTOOLS_GLOBAL_HOOK__' is not defined                            no-undef
   9:4535   error  '__REACT_DEVTOOLS_GLOBAL_HOOK__' is not defined                            no-undef
  18:25     error  'ce' is a function                                                         no-func-assign
  18:714    error  'console' is not defined                                                   no-undef
  18:758    error  Empty block statement                                                      no-empty
  18:1442   error  'document' is not defined                                                  no-undef
  18:1853   error  'DOMException' is not defined                                              no-undef
  18:2355   error  'URL' is not defined                                                       no-undef
  18:2938   error  's' is defined but never used                                              no-unused-vars
  18:4815   error  'n' is defined but never used                                              no-unused-vars
  18:9084   error  'console' is not defined                                                   no-undef
  18:9906   error  'n' is defined but never used                                              no-unused-vars
  18:9924   error  'console' is not defined                                                   no-undef
  18:11871  error  'performance' is not defined                                               no-undef
  18:12451  error  'requestAnimationFrame' is not defined                                     no-undef
  18:12597  error  'performance' is not defined                                               no-undef
  18:12633  error  'queueMicrotask' is not defined                                            no-undef
  18:14739  error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
  18:29780  error  'getComputedStyle' is not defined                                          no-undef
  18:31147  error  'window' is not defined                                                    no-undef
  18:32416  error  'window' is not defined                                                    no-undef
  18:32527  error  'document' is not defined                                                  no-undef
  18:34462  error  Empty block statement                                                      no-empty
  18:35789  error  's' is assigned a value but never used                                     no-unused-vars
  18:35802  error  'r' is assigned a value but never used                                     no-unused-vars
  18:35812  error  'i' is assigned a value but never used                                     no-unused-vars
  18:36674  error  'Element' is not defined                                                   no-undef
  18:36827  error  'HTMLElement' is not defined                                               no-undef
  18:38326  error  'n' is defined but never used                                              no-unused-vars
  18:39177  error  Unexpected comma in middle of array                                        no-sparse-arrays
  18:39430  error  'window' is not defined                                                    no-undef
  18:42412  error  'window' is not defined                                                    no-undef
  18:42480  error  'window' is not defined                                                    no-undef
  18:42811  error  'window' is not defined                                                    no-undef
  18:43069  error  'EventTarget' is not defined                                               no-undef
  18:43120  error  'document' is not defined                                                  no-undef
  18:45984  error  'queueMicrotask' is not defined                                            no-undef
  18:46201  error  'AbortController' is not defined                                           no-undef
  18:46989  error  'PointerEvent' is not defined                                              no-undef
  18:47523  error  'window' is not defined                                                    no-undef
  18:47565  error  'window' is not defined                                                    no-undef
  18:47696  error  'window' is not defined                                                    no-undef
  18:47708  error  'document' is not defined                                                  no-undef
  18:47769  error  'window' is not defined                                                    no-undef
  18:47810  error  'window' is not defined                                                    no-undef
  18:47896  error  'window' is not defined                                                    no-undef

/data/data/com.termux/files/home/projects/projects1/dist/assets/vendor-react-CA3tHcxm.js
    9:66     error  '__REACT_DEVTOOLS_GLOBAL_HOOK__' is not defined                            no-undef
    9:138    error  '__REACT_DEVTOOLS_GLOBAL_HOOK__' is not defined                            no-undef
    9:1710   error  'console' is not defined                                                   no-undef
    9:1721   error  'console' is not defined                                                   no-undef
    9:2144   error  'h' is defined but never used                                              no-unused-vars
    9:2187   error  'x' is defined but never used                                              no-unused-vars
    9:2189   error  'V' is defined but never used                                              no-unused-vars
    9:2244   error  'x' is defined but never used                                              no-unused-vars
    9:2246   error  'V' is defined but never used                                              no-unused-vars
    9:2248   error  'F' is defined but never used                                              no-unused-vars
    9:2300   error  'x' is defined but never used                                              no-unused-vars
    9:2302   error  'V' is defined but never used                                              no-unused-vars
    9:2304   error  'F' is defined but never used                                              no-unused-vars
    9:3182   error  Expected to return a value in method 'get'                                 getter-return
    9:3297   error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
    9:7236   error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
    9:8121   error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
   21:1353   error  'console' is not defined                                                   no-undef
   21:1368   error  'console' is not defined                                                   no-undef
   21:1384   error  'console' is not defined                                                   no-undef
   21:1400   error  'console' is not defined                                                   no-undef
   21:1417   error  'console' is not defined                                                   no-undef
   21:1434   error  'console' is not defined                                                   no-undef
   21:1460   error  'console' is not defined                                                   no-undef
   21:1560   error  'console' is not defined                                                   no-undef
   21:1746   error  'console' is not defined                                                   no-undef
   21:2087   error  'x' is defined but never used                                              no-unused-vars
   21:2089   error  'V' is defined but never used                                              no-unused-vars
   25:366    error  'x' is defined but never used                                              no-unused-vars
   25:368    error  'V' is defined but never used                                              no-unused-vars
   25:808    error  Empty block statement                                                      no-empty
   27:110    error  Unnecessary escape character: \/                                           no-useless-escape
   31:1693   error  'V' is defined but never used                                              no-unused-vars
   31:2914   error  'h' is defined but never used                                              no-unused-vars
   31:2916   error  'x' is defined but never used                                              no-unused-vars
   31:2918   error  'V' is defined but never used                                              no-unused-vars
   31:3036   error  'x' is defined but never used                                              no-unused-vars
   31:3896   error  'MessageChannel' is not defined                                            no-undef
   31:4974   error  'dt' is defined but never used                                             no-unused-vars
   31:6233   error  '__REACT_DEVTOOLS_GLOBAL_HOOK__' is not defined                            no-undef
   31:6304   error  '__REACT_DEVTOOLS_GLOBAL_HOOK__' is not defined                            no-undef
   39:964    error  'console' is not defined                                                   no-undef
   39:975    error  'console' is not defined                                                   no-undef
   39:2385   error  'console' is not defined                                                   no-undef
   39:2400   error  'console' is not defined                                                   no-undef
   39:2416   error  'console' is not defined                                                   no-undef
   39:2432   error  'console' is not defined                                                   no-undef
   39:2449   error  'console' is not defined                                                   no-undef
   39:2466   error  'console' is not defined                                                   no-undef
   39:2492   error  'console' is not defined                                                   no-undef
   39:2592   error  'console' is not defined                                                   no-undef
   39:2778   error  'console' is not defined                                                   no-undef
   39:3117   error  'G' is defined but never used                                              no-unused-vars
   39:3119   error  'b' is defined but never used                                              no-unused-vars
   43:364    error  'G' is defined but never used                                              no-unused-vars
   43:366    error  'b' is defined but never used                                              no-unused-vars
   43:804    error  Empty block statement                                                      no-empty
   43:4623   error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
   45:112    error  Unnecessary escape character: \/                                           no-useless-escape
   62:72     error  '__REACT_DEVTOOLS_GLOBAL_HOOK__' is not defined                            no-undef
   62:144    error  '__REACT_DEVTOOLS_GLOBAL_HOOK__' is not defined                            no-undef
   62:752    error  'console' is not defined                                                   no-undef
   62:763    error  'console' is not defined                                                   no-undef
   62:1302   error  'window' is not defined                                                    no-undef
   62:1330   error  'window' is not defined                                                    no-undef
   62:2972   error  Unexpected combined character in character class                           no-misleading-character-class
   62:3747   error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
   62:5370   error  Unnecessary escape character: \-                                           no-useless-escape
   62:5372   error  Unnecessary escape character: \:                                           no-useless-escape
   62:7393   error  Unexpected control character(s) in regular expression: \x00, \x1f          no-control-regex
   62:7512   error  Unnecessary escape character: \:                                           no-useless-escape
   62:8232   error  'r' is defined but never used                                              no-unused-vars
   62:9723   error  'console' is not defined                                                   no-undef
   62:9738   error  'console' is not defined                                                   no-undef
   62:9754   error  'console' is not defined                                                   no-undef
   62:9770   error  'console' is not defined                                                   no-undef
   62:9787   error  'console' is not defined                                                   no-undef
   62:9804   error  'console' is not defined                                                   no-undef
   62:9830   error  'console' is not defined                                                   no-undef
   62:9930   error  'console' is not defined                                                   no-undef
   62:10116  error  'console' is not defined                                                   no-undef
   62:10455  error  't' is defined but never used                                              no-unused-vars
   62:10457  error  'n' is defined but never used                                              no-unused-vars
   66:350    error  't' is defined but never used                                              no-unused-vars
   66:352    error  'n' is defined but never used                                              no-unused-vars
   66:385    error  't' is defined but never used                                              no-unused-vars
   66:387    error  'n' is defined but never used                                              no-unused-vars
   66:826    error  Empty block statement                                                      no-empty
   68:3372   error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
   68:3992   error  'document' is not defined                                                  no-undef
   68:6543   error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
   68:6584   error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
   68:6758   error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
   68:6785   error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
   70:525    error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
   70:3110   error  't' is defined but never used                                              no-unused-vars
   70:3544   error  'MSApp' is not defined                                                     no-undef
   70:3592   error  'MSApp' is not defined                                                     no-undef
   70:3731   error  'document' is not defined                                                  no-undef
   70:8904   error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
   70:9267   error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
   70:9402   error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
   70:9568   error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
   70:9719   error  't' is defined but never used                                              no-unused-vars
   70:9815   error  't' is defined but never used                                              no-unused-vars
   70:10101  error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
   70:10277  error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
   70:24767  error  Unexpected combined character in character class                           no-misleading-character-class
   70:24803  error  Unexpected combined character in character class                           no-misleading-character-class
   70:24939  error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
   70:25222  error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
   70:26302  error  Unexpected combined character in character class                           no-misleading-character-class
   70:26338  error  Unexpected combined character in character class                           no-misleading-character-class
   70:26758  error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
   70:26793  error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
   70:27894  error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
   70:30178  error  'window' is not defined                                                    no-undef
   70:31745  error  Expected to return a value in method 'get'                                 getter-return
   70:31769  error  'window' is not defined                                                    no-undef
   70:31807  error  'window' is not defined                                                    no-undef
   70:31878  error  'r' is defined but never used                                              no-unused-vars
   70:31880  error  'a' is defined but never used                                              no-unused-vars
   70:31882  error  's' is defined but never used                                              no-unused-vars
   70:31884  error  'l' is defined but never used                                              no-unused-vars
   70:31886  error  'd' is defined but never used                                              no-unused-vars
   70:31888  error  'p' is defined but never used                                              no-unused-vars
   70:32019  error  'window' is not defined                                                    no-undef
   70:32081  error  'document' is not defined                                                  no-undef
   70:32122  error  'document' is not defined                                                  no-undef
   70:32172  error  'a' is defined but never used                                              no-unused-vars
   70:32174  error  's' is defined but never used                                              no-unused-vars
   70:32176  error  'l' is defined but never used                                              no-unused-vars
   70:32178  error  'd' is defined but never used                                              no-unused-vars
   70:32180  error  'p' is defined but never used                                              no-unused-vars
   70:32182  error  'm' is defined but never used                                              no-unused-vars
   70:32209  error  'document' is not defined                                                  no-undef
   70:32703  error  'document' is not defined                                                  no-undef
   70:32745  error  'window' is not defined                                                    no-undef
   70:32792  error  'window' is not defined                                                    no-undef
   70:32860  error  'window' is not defined                                                    no-undef
   70:32878  error  'window' is not defined                                                    no-undef
   70:32885  error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
   70:32911  error  'window' is not defined                                                    no-undef
   70:33197  error  Empty block statement                                                      no-empty
   70:33247  error  'window' is not defined                                                    no-undef
   70:33377  error  'window' is not defined                                                    no-undef
   70:34098  error  'window' is not defined                                                    no-undef
   70:34263  error  'e' is defined but never used                                              no-unused-vars
   70:34265  error  't' is defined but never used                                              no-unused-vars
   70:34267  error  'n' is defined but never used                                              no-unused-vars
   70:34269  error  'r' is defined but never used                                              no-unused-vars
   70:34271  error  'a' is defined but never used                                              no-unused-vars
   70:34273  error  's' is defined but never used                                              no-unused-vars
   70:34275  error  'l' is defined but never used                                              no-unused-vars
   70:34277  error  'd' is defined but never used                                              no-unused-vars
   70:34279  error  'p' is defined but never used                                              no-unused-vars
   70:34331  error  'e' is defined but never used                                              no-unused-vars
   70:34333  error  't' is defined but never used                                              no-unused-vars
   70:34335  error  'n' is defined but never used                                              no-unused-vars
   70:34337  error  'r' is defined but never used                                              no-unused-vars
   70:34339  error  'a' is defined but never used                                              no-unused-vars
   70:34341  error  's' is defined but never used                                              no-unused-vars
   70:34343  error  'l' is defined but never used                                              no-unused-vars
   70:34345  error  'd' is defined but never used                                              no-unused-vars
   70:34347  error  'p' is defined but never used                                              no-unused-vars
   70:38139  error  '__REACT_DEVTOOLS_GLOBAL_HOOK__' is not defined                            no-undef
   70:45749  error  'VP' is defined but never used                                             no-unused-vars
   70:46123  error  'n' is defined but never used                                              no-unused-vars
   70:47225  error  'e' is defined but never used                                              no-unused-vars
   70:47227  error  't' is defined but never used                                              no-unused-vars
   70:54004  error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
   70:54387  error  Invalid typeof comparison value                                            valid-typeof
   70:54561  error  Invalid typeof comparison value                                            valid-typeof
   70:55626  error  'window' is not defined                                                    no-undef
   70:56758  error  'e' is defined but never used                                              no-unused-vars
   70:57766  error  'window' is not defined                                                    no-undef
   70:57802  error  'document' is not defined                                                  no-undef
   70:57816  error  'document' is not defined                                                  no-undef
   70:57864  error  'window' is not defined                                                    no-undef
   70:60062  error  's' is defined but never used                                              no-unused-vars
   70:60064  error  'l' is defined but never used                                              no-unused-vars
   82:55     error  'document' is not defined                                                  no-undef
   82:77     error  'document' is not defined                                                  no-undef
   82:743    error  'document' is not defined                                                  no-undef
   82:766    error  'document' is not defined                                                  no-undef
   82:1069   error  't' is defined but never used                                              no-unused-vars
   82:1472   error  's' is defined but never used                                              no-unused-vars
   82:1474   error  'l' is defined but never used                                              no-unused-vars
   82:1491   error  'window' is not defined                                                    no-undef
   82:1856   error  's' is defined but never used                                              no-unused-vars
   82:1858   error  'l' is defined but never used                                              no-unused-vars
   82:2119   error  'window' is not defined                                                    no-undef
   82:3385   error  'window' is not defined                                                    no-undef
   82:4044   error  'document' is not defined                                                  no-undef
   82:4073   error  'window' is not defined                                                    no-undef
   82:4961   error  'window' is not defined                                                    no-undef
   82:5496   error  Expected a conditional expression and instead saw an assignment            no-cond-assign
   82:6014   error  'document' is not defined                                                  no-undef
   82:6024   error  'document' is not defined                                                  no-undef
   82:6366   error  'window' is not defined                                                    no-undef
   82:6829   error  's' is defined but never used                                              no-unused-vars
   82:6831   error  'l' is defined but never used                                              no-unused-vars
   82:6848   error  'window' is not defined                                                    no-undef
   82:7117   error  Expected a 'break' statement before 'case'                                 no-fallthrough
   82:7492   error  'document' is not defined                                                  no-undef
   82:7547   error  'window' is not defined                                                    no-undef
   82:7684   error  'window' is not defined                                                    no-undef
   82:7816   error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
   82:9100   error  'l' is defined but never used                                              no-unused-vars
   82:9192   error  Expected a 'break' statement before 'case'                                 no-fallthrough
   82:9378   error  Expected a 'break' statement before 'case'                                 no-fallthrough
   82:10213  error  'l' is defined but never used                                              no-unused-vars
   82:11213  error  'a' is defined but never used                                              no-unused-vars
   82:11946  error  'a' is defined but never used                                              no-unused-vars
   82:12037  error  'e' is assigned to itself                                                  no-self-assign
   82:12739  error  's' is defined but never used                                              no-unused-vars
   82:13931  error  't' is defined but never used                                              no-unused-vars
   82:14271  error  'document' is not defined                                                  no-undef
   82:15068  error  Unexpected control character(s) in regular expression: \x00                no-control-regex
   83:369    error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
   83:638    error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
   83:1162   error  Unnecessary escape character: \/                                           no-useless-escape
   83:2521   error  'a' is defined but never used                                              no-unused-vars
   83:2819   error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
   83:2841   error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
   83:2907   error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
   83:2995   error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
   83:3087   error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
   83:3180   error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
   83:3207   error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
   83:3260   error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
   83:3537   error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
   83:3966   error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
   83:4746   error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
   83:4974   error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
   83:5969   error  'n' is defined but never used                                              no-unused-vars
   83:6312   error  'n' is defined but never used                                              no-unused-vars
   83:11392  error  'n' is defined but never used                                              no-unused-vars
   83:11492  error  'PP' is defined but never used                                             no-unused-vars
   83:11519  error  'e' is defined but never used                                              no-unused-vars
   83:11577  error  'e' is defined but never used                                              no-unused-vars
   83:11902  error  'a' is defined but never used                                              no-unused-vars
   83:12586  error  'window' is not defined                                                    no-undef
   83:12668  error  'setTimeout' is not defined                                                no-undef
   83:12721  error  'clearTimeout' is not defined                                              no-undef
   83:12829  error  'queueMicrotask' is not defined                                            no-undef
   83:12931  error  'setTimeout' is not defined                                                no-undef
   83:12981  error  'r' is defined but never used                                              no-unused-vars
   83:13140  error  's' is defined but never used                                              no-unused-vars
   83:13970  error  'e' is assigned to itself                                                  no-self-assign
   83:14129  error  'e' is assigned to itself                                                  no-self-assign
   83:14156  error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
   83:14393  error  'n' is defined but never used                                              no-unused-vars
   83:15272  error  'r' is defined but never used                                              no-unused-vars
   83:16177  error  'n' is defined but never used                                              no-unused-vars
   83:16229  error  'n' is defined but never used                                              no-unused-vars
   83:21831  error  'e' is defined but never used                                              no-unused-vars
   83:24644  error  'e' is defined but never used                                              no-unused-vars
   83:26499  error  'e' is defined but never used                                              no-unused-vars
   83:26501  error  't' is defined but never used                                              no-unused-vars
   83:26591  error  'e' is defined but never used                                              no-unused-vars
   83:26593  error  't' is defined but never used                                              no-unused-vars
  112:541    error  't' is defined but never used                                              no-unused-vars
  118:215    error  'e' is defined but never used                                              no-unused-vars
  118:217    error  't' is defined but never used                                              no-unused-vars
  122:11667  error  'r' is defined but never used                                              no-unused-vars
  122:14148  error  Expected a 'break' statement before 'case'                                 no-fallthrough
  122:15348  error  Unexpected constant condition                                              no-constant-condition
  122:16720  error  't' is defined but never used                                              no-unused-vars
  135:2331   error  't' is defined but never used                                              no-unused-vars
  135:2333   error  'n' is defined but never used                                              no-unused-vars
  135:3526   error  't' is defined but never used                                              no-unused-vars
  135:3528   error  'n' is defined but never used                                              no-unused-vars
  135:3947   error  'jP' is defined but never used                                             no-unused-vars
  135:3950   error  'e' is defined but never used                                              no-unused-vars
  135:3952   error  't' is defined but never used                                              no-unused-vars
  135:3954   error  'n' is defined but never used                                              no-unused-vars
  135:3967   error  'NP' is defined but never used                                             no-unused-vars
  135:3970   error  'e' is defined but never used                                              no-unused-vars
  135:3972   error  't' is defined but never used                                              no-unused-vars
  135:3974   error  'n' is defined but never used                                              no-unused-vars
  135:4704   error  'n' is defined but never used                                              no-unused-vars
  135:5928   error  'e' is defined but never used                                              no-unused-vars
  135:5957   error  'e' is defined but never used                                              no-unused-vars
  135:6324   error  'e' is defined but never used                                              no-unused-vars
  135:7113   error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
  135:7930   error  'e' is defined but never used                                              no-unused-vars
  135:7932   error  't' is defined but never used                                              no-unused-vars
  135:8853   error  'n' is defined but never used                                              no-unused-vars
  135:10860  error  Empty block statement                                                      no-empty
  135:11235  error  'n' is defined but never used                                              no-unused-vars
  135:13027  error  'e' is defined but never used                                              no-unused-vars
  135:13029  error  't' is defined but never used                                              no-unused-vars
  135:13226  error  'e' is defined but never used                                              no-unused-vars
  135:13228  error  't' is defined but never used                                              no-unused-vars
  135:13230  error  'n' is defined but never used                                              no-unused-vars
  135:14291  error  'e' is defined but never used                                              no-unused-vars
  135:14293  error  't' is defined but never used                                              no-unused-vars
  135:14487  error  'e' is defined but never used                                              no-unused-vars
  135:14489  error  't' is defined but never used                                              no-unused-vars
  135:14491  error  'n' is defined but never used                                              no-unused-vars
  135:15385  error  'e' is defined but never used                                              no-unused-vars
  135:15548  error  'e' is defined but never used                                              no-unused-vars
  135:15550  error  't' is defined but never used                                              no-unused-vars
  135:15742  error  'e' is defined but never used                                              no-unused-vars
  135:15744  error  't' is defined but never used                                              no-unused-vars
  135:15746  error  'n' is defined but never used                                              no-unused-vars
  135:15823  error  'n' is defined but never used                                              no-unused-vars
  135:16638  error  'e' is defined but never used                                              no-unused-vars
  135:16801  error  'e' is defined but never used                                              no-unused-vars
  135:16803  error  't' is defined but never used                                              no-unused-vars
  135:16995  error  'e' is defined but never used                                              no-unused-vars
  135:16997  error  't' is defined but never used                                              no-unused-vars
  135:16999  error  'n' is defined but never used                                              no-unused-vars
  135:17076  error  'n' is defined but never used                                              no-unused-vars
  135:18120  error  'e' is defined but never used                                              no-unused-vars
  135:18122  error  't' is defined but never used                                              no-unused-vars
  135:18334  error  'e' is defined but never used                                              no-unused-vars
  135:18336  error  't' is defined but never used                                              no-unused-vars
  135:18338  error  'n' is defined but never used                                              no-unused-vars
  135:19295  error  'e' is defined but never used                                              no-unused-vars
  135:19468  error  'e' is defined but never used                                              no-unused-vars
  135:19470  error  't' is defined but never used                                              no-unused-vars
  135:19677  error  'e' is defined but never used                                              no-unused-vars
  135:19679  error  't' is defined but never used                                              no-unused-vars
  135:19681  error  'n' is defined but never used                                              no-unused-vars
  135:19763  error  'n' is defined but never used                                              no-unused-vars
  135:20633  error  'e' is defined but never used                                              no-unused-vars
  135:20806  error  'e' is defined but never used                                              no-unused-vars
  135:20808  error  't' is defined but never used                                              no-unused-vars
  135:21015  error  'e' is defined but never used                                              no-unused-vars
  135:21017  error  't' is defined but never used                                              no-unused-vars
  135:21019  error  'n' is defined but never used                                              no-unused-vars
  135:21101  error  'n' is defined but never used                                              no-unused-vars
  135:21512  error  'e' is defined but never used                                              no-unused-vars
  147:4804   error  'e' is defined but never used                                              no-unused-vars
  147:4806   error  't' is defined but never used                                              no-unused-vars
  147:4973   error  'console' is not defined                                                   no-undef
  151:10     error  'console' is not defined                                                   no-undef
  151:36     error  'setTimeout' is not defined                                                no-undef
  151:1104   error  'r' is defined but never used                                              no-unused-vars
  151:1207   error  't' is defined but never used                                              no-unused-vars
  153:1030   error  'n' is defined but never used                                              no-unused-vars
  153:1032   error  'r' is defined but never used                                              no-unused-vars
  153:1949   error  'n' is defined but never used                                              no-unused-vars
  153:2381   error  'n' is defined but never used                                              no-unused-vars
  153:3504   error  'n' is defined but never used                                              no-unused-vars
  153:13018  error  'n' is defined but never used                                              no-unused-vars
  153:13020  error  'r' is defined but never used                                              no-unused-vars
  153:13312  error  'e' is defined but never used                                              no-unused-vars
  153:13314  error  't' is defined but never used                                              no-unused-vars
  153:18856  error  'n' is defined but never used                                              no-unused-vars
  153:19604  error  'n' is defined but never used                                              no-unused-vars
  166:676    error  'r' is defined but never used                                              no-unused-vars
  166:5030   error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
  166:7367   error  Expected a 'break' statement before 'case'                                 no-fallthrough
  166:8794   error  'n' is defined but never used                                              no-unused-vars
  166:9008   error  'n' is defined but never used                                              no-unused-vars
  166:12915  error  'n' is defined but never used                                              no-unused-vars
  166:12917  error  'r' is defined but never used                                              no-unused-vars
  166:14912  error  'e' is defined but never used                                              no-unused-vars
  166:14958  error  'IS_REACT_ACT_ENVIRONMENT' is not defined                                  no-undef
  166:15083  error  'IS_REACT_ACT_ENVIRONMENT' is not defined                                  no-undef
  166:16505  error  'e' is defined but never used                                              no-unused-vars
  166:19160  error  Unreachable code                                                           no-unreachable
  166:21002  error  Unexpected constant condition                                              no-constant-condition
  166:21556  error  Unexpected constant condition                                              no-constant-condition
  166:21978  error  Unexpected constant condition                                              no-constant-condition
  188:2666   error  Unreachable code                                                           no-unreachable
  188:2697   error  'BC' is assigned a value but never used                                    no-unused-vars
  188:5472   error  'n' is defined but never used                                              no-unused-vars
  190:3115   error  'm' is defined but never used                                              no-unused-vars
  190:4593   error  'd' is defined but never used                                              no-unused-vars
  190:4671   error  'm' is defined but never used                                              no-unused-vars
  192:1080   error  'e' is defined but never used                                              no-unused-vars
  192:1140   error  'e' is defined but never used                                              no-unused-vars
  192:3290   error  'e' is defined but never used                                              no-unused-vars
  192:3990   error  'reportError' is not defined                                               no-undef
  192:4014   error  'console' is not defined                                                   no-undef
  195:3324   error  Expected a conditional expression and instead saw an assignment            no-cond-assign
  195:8930   error  'window' is not defined                                                    no-undef
  195:8943   error  'window' is not defined                                                    no-undef
  195:8957   error  'navigator' is not defined                                                 no-undef
  195:8999   error  'navigator' is not defined                                                 no-undef
  195:9041   error  'navigator' is not defined                                                 no-undef
  195:9092   error  'window' is not defined                                                    no-undef
  195:9146   error  'console' is not defined                                                   no-undef
  196:471    error  '__REACT_DEVTOOLS_GLOBAL_HOOK__' is not defined                            no-undef
  196:542    error  '__REACT_DEVTOOLS_GLOBAL_HOOK__' is not defined                            no-undef
  205:25     error  'Sl' is a function                                                         no-func-assign
  207:1822   error  'console' is not defined                                                   no-undef
  207:2942   error  'console' is not defined                                                   no-undef
  207:6634   error  'console' is not defined                                                   no-undef
  207:6831   error  'o' is defined but never used                                              no-unused-vars
  207:7244   error  'i' is defined but never used                                              no-unused-vars
  216:25     error  'ms' is a function                                                         no-func-assign
  216:853    error  'FormData' is not defined                                                  no-undef
  216:862    error  'document' is not defined                                                  no-undef
  216:1334   error  'FormData' is not defined                                                  no-undef
  216:1736   error  'FormData' is not defined                                                  no-undef
  216:2491   error  'window' is not defined                                                    no-undef
  216:2527   error  Empty block statement                                                      no-empty
  216:3208   error  'window' is not defined                                                    no-undef
  216:3236   error  'window' is not defined                                                    no-undef
  216:3557   error  'URL' is not defined                                                       no-undef
  216:3561   error  'window' is not defined                                                    no-undef
  216:3609   error  'URL' is not defined                                                       no-undef
  216:3631   error  'URL' is not defined                                                       no-undef
  216:7824   error  'URLSearchParams' is not defined                                           no-undef
  274:967    error  'console' is not defined                                                   no-undef
  274:978    error  'console' is not defined                                                   no-undef
  274:2394   error  'console' is not defined                                                   no-undef
  274:2409   error  'console' is not defined                                                   no-undef
  274:2425   error  'console' is not defined                                                   no-undef
  274:2441   error  'console' is not defined                                                   no-undef
  274:2458   error  'console' is not defined                                                   no-undef
  274:2475   error  'console' is not defined                                                   no-undef
  274:2501   error  'console' is not defined                                                   no-undef
  274:2601   error  'console' is not defined                                                   no-undef
  274:2787   error  'console' is not defined                                                   no-undef
  274:3126   error  'U' is defined but never used                                              no-unused-vars
  274:3128   error  'Y' is defined but never used                                              no-unused-vars
  278:366    error  'U' is defined but never used                                              no-unused-vars
  278:368    error  'Y' is defined but never used                                              no-unused-vars
  278:808    error  Empty block statement                                                      no-empty
  278:2809   error  'U' is defined but never used                                              no-unused-vars
  278:4191   error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
  280:61     error  'b' is defined but never used                                              no-unused-vars
  287:1362   error  'document' is not defined                                                  no-undef
  287:1421   error  'document' is not defined                                                  no-undef
  295:1819   error  'console' is not defined                                                   no-undef
  295:3721   error  'require' is not defined                                                   no-undef
  295:3769   error  Empty block statement                                                      no-empty
  295:5840   error  'window' is not defined                                                    no-undef
  295:5877   error  'window' is not defined                                                    no-undef
  295:5950   error  'window' is not defined                                                    no-undef
  295:6178   error  'queueMicrotask' is not defined                                            no-undef
  295:6198   error  'window' is not defined                                                    no-undef
  295:12311  error  'ae' is assigned a value but never used                                    no-unused-vars
  295:13453  error  'v' is assigned a value but never used                                     no-unused-vars
  295:13836  error  'c' is defined but never used                                              no-unused-vars
  295:14247  error  'i' is defined but never used                                              no-unused-vars
  295:14255  error  'o' is defined but never used                                              no-unused-vars
  295:14271  error  'u' is defined but never used                                              no-unused-vars
  295:14289  error  'c' is defined but never used                                              no-unused-vars
  295:14308  error  'v' is defined but never used                                              no-unused-vars
  295:14317  error  'y' is defined but never used                                              no-unused-vars
  295:14330  error  'f' is defined but never used                                              no-unused-vars
  295:14344  error  'R' is defined but never used                                              no-unused-vars
  295:14351  error  'C' is defined but never used                                              no-unused-vars
  295:14361  error  'S' is defined but never used                                              no-unused-vars
  295:15321  error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
  295:15807  error  'window' is not defined                                                    no-undef
  295:15866  error  'window' is not defined                                                    no-undef
  295:18011  error  'w' is assigned a value but never used                                     no-unused-vars
  295:18838  error  Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
  295:24313  error  'window' is not defined                                                    no-undef
  295:24481  error  'window' is not defined                                                    no-undef
  295:25515  error  'window' is not defined                                                    no-undef
  295:34026  error  'window' is not defined                                                    no-undef
  295:42447  error  'window' is not defined                                                    no-undef
  295:42535  error  'window' is not defined                                                    no-undef
  295:44602  error  'window' is not defined                                                    no-undef
  295:44639  error  'window' is not defined                                                    no-undef
  295:46605  error  'window' is not defined                                                    no-undef
  295:63711  error  'navigator' is not defined                                                 no-undef
  295:63732  error  'navigator' is not defined                                                 no-undef
  295:64125  error  'document' is not defined                                                  no-undef
  295:64162  error  'document' is not defined                                                  no-undef
  295:64189  error  'document' is not defined                                                  no-undef
  295:64225  error  'document' is not defined                                                  no-undef
  295:64417  error  'window' is not defined                                                    no-undef
  295:64572  error  'window' is not defined                                                    no-undef
  295:65594  error  'HTMLButtonElement' is not defined                                         no-undef
  295:66154  error  'document' is not defined                                                  no-undef
  295:66248  error  'IntersectionObserver' is not defined                                      no-undef
  295:67500  error  'window' is not defined                                                    no-undef
  295:67527  error  'window' is not defined                                                    no-undef
  295:68222  error  'o' is defined but never used                                              no-unused-vars
  295:68224  error  'u' is defined but never used                                              no-unused-vars
  295:68226  error  'c' is defined but never used                                              no-unused-vars
  295:69447  error  'E' is assigned a value but never used                                     no-unused-vars
  295:70985  error  'window' is not defined                                                    no-undef
  295:71018  error  'window' is not defined                                                    no-undef
  295:74988  error  'window' is not defined                                                    no-undef
  295:77098  error  'nd' is a function                                                         no-func-assign

/data/data/com.termux/files/home/projects/projects1/dist/registerSW.js
  1:23  error  'navigator' is not defined  no-undef
  1:35  error  'window' is not defined     no-undef
  1:74  error  'navigator' is not defined  no-undef

/data/data/com.termux/files/home/projects/projects1/dist/sw.js
  15:6   error  'self' is not defined           no-undef
  23:15  error  'URL' is not defined            no-undef
  27:29  error  'self' is not defined           no-undef
  28:28  error  'document' is not defined       no-undef
  31:13  error  'document' is not defined       no-undef
  34:13  error  'importScripts' is not defined  no-undef
  49:3   error  'self' is not defined           no-undef
  50:49  error  'self' is not defined           no-undef
  50:56  error  'document' is not defined       no-undef
  50:92  error  'location' is not defined       no-undef
  70:1   error  'define' is not defined         no-undef
  72:3   error  'self' is not defined           no-undef
  74:7   error  'self' is not defined           no-undef

/data/data/com.termux/files/home/projects/projects1/dist/workbox-c6c6fb7c.js
     1:1   error    'define' is not defined                                                         no-undef
     5:7   error    'self' is not defined                                                           no-undef
     5:37  error    '_' is not defined                                                              no-undef
     6:14  error    'e' is defined but never used                                                   no-unused-vars
     6:17  error    Empty block statement                                                           no-empty
    18:9   error    'self' is not defined                                                           no-undef
    30:13  error    'self' is not defined                                                           no-undef
    36:53  error    'navigator' is not defined                                                      no-undef
    37:13  error    'console' is not defined                                                        no-undef
    44:9   error    'console' is not defined                                                        no-undef
    52:7   error    Definition for rule '@typescript-eslint/ban-types' was not found                @typescript-eslint/ban-types
   419:5   error    Definition for rule '@typescript-eslint/ban-types' was not found                @typescript-eslint/ban-types
   435:5   warning  Unused eslint-disable directive (no problems were reported)
   458:7   error    'self' is not defined                                                           no-undef
   458:40  error    '_' is not defined                                                              no-undef
   459:14  error    'e' is defined but never used                                                   no-unused-vars
   459:17  error    Empty block statement                                                           no-empty
   637:30  error    'location' is not defined                                                       no-undef
   661:26  error    'URL' is not defined                                                            no-undef
   661:43  error    'location' is not defined                                                       no-undef
   664:49  error    'location' is not defined                                                       no-undef
   713:9   error    'self' is not defined                                                           no-undef
   750:9   error    'self' is not defined                                                           no-undef
   752:11  error    Definition for rule '@typescript-eslint/no-unsafe-member-access' was not found  @typescript-eslint/no-unsafe-member-access
   754:13  error    Definition for rule '@typescript-eslint/no-unsafe-assignment' was not found     @typescript-eslint/no-unsafe-assignment
   765:35  error    'Request' is not defined                                                        no-undef
   799:50  error    'Request' is not defined                                                        no-undef
   806:25  error    'URL' is not defined                                                            no-undef
   806:42  error    'location' is not defined                                                       no-undef
   813:43  error    'location' is not defined                                                       no-undef
   948:11  error    Definition for rule '@typescript-eslint/no-unsafe-assignment' was not found     @typescript-eslint/no-unsafe-assignment
   964:13  error    Definition for rule '@typescript-eslint/no-unsafe-assignment' was not found     @typescript-eslint/no-unsafe-assignment
   970:13  warning  Unused eslint-disable directive (no problems were reported)
  1135:32  error    'URL' is not defined                                                            no-undef
  1135:45  error    'location' is not defined                                                       no-undef
  1197:53  error    'registration' is not defined                                                   no-undef
  1255:7   error    'self' is not defined                                                           no-undef
  1255:43  error    '_' is not defined                                                              no-undef
  1256:14  error    'e' is defined but never used                                                   no-unused-vars
  1256:17  error    Empty block statement                                                           no-empty
  1285:31  error    'URL' is not defined                                                            no-undef
  1285:42  error    'location' is not defined                                                       no-undef
  1303:31  error    'URL' is not defined                                                            no-undef
  1303:40  error    'location' is not defined                                                       no-undef
  1311:31  error    'URL' is not defined                                                            no-undef
  1311:40  error    'location' is not defined                                                       no-undef
  1312:31  error    'URL' is not defined                                                            no-undef
  1312:40  error    'location' is not defined                                                       no-undef
  1352:84  error    'Request' is not defined                                                        no-undef
  1389:11  warning  Unused eslint-disable directive (no problems were reported)
  1392:33  error    'Request' is not defined                                                        no-undef
  1499:34  error    'Response' is not defined                                                       no-undef
  1502:17  error    'Response' is not defined                                                       no-undef
  1504:20  error    'error' is defined but never used                                               no-unused-vars
  1543:33  error    'URL' is not defined                                                            no-undef
  1546:22  error    'self' is not defined                                                           no-undef
  1554:22  error    'Headers' is not defined                                                        no-undef
  1564:18  error    'Response' is not defined                                                       no-undef
  1574:31  error    'URL' is not defined                                                            no-undef
  1648:5   error    Definition for rule '@typescript-eslint/ban-types' was not found                @typescript-eslint/ban-types
  1695:37  error    'setTimeout' is not defined                                                     no-undef
  1700:7   error    'self' is not defined                                                           no-undef
  1700:43  error    '_' is not defined                                                              no-undef
  1701:14  error    'e' is defined but never used                                                   no-unused-vars
  1701:17  error    Empty block statement                                                           no-empty
  1711:46  error    'Request' is not defined                                                        no-undef
  1779:56  error    'ExtendableEvent' is not defined                                                no-undef
  1818:61  error    'FetchEvent' is not defined                                                     no-undef
  1852:33  error    'fetch' is not defined                                                          no-undef
  1853:15  error    Unexpected constant condition                                                   no-constant-condition
  1920:32  error    'caches' is not defined                                                         no-undef
  1992:29  error    'self' is not defined                                                           no-undef
  2045:35  warning  Unused eslint-disable directive (no problems were reported)
  2144:16  error    Expected a conditional expression and instead saw an assignment                 no-cond-assign
  2315:32  error    'FetchEvent' is not defined                                                     no-undef
  2322:67  error    'Request' is not defined                                                        no-undef
  2383:18  error    'error' is defined but never used                                               no-unused-vars
  2511:46  error    'Request' is not defined                                                        no-undef
  2543:87  error    'Request' is not defined                                                        no-undef
  2702:11  error    'self' is not defined                                                           no-undef
  2703:11  error    'self' is not defined                                                           no-undef
  2772:9   error    Definition for rule '@typescript-eslint/no-unsafe-return' was not found         @typescript-eslint/no-unsafe-return
  2781:33  error    'Request' is not defined                                                        no-undef
  2819:9   error    Definition for rule '@typescript-eslint/no-unsafe-return' was not found         @typescript-eslint/no-unsafe-return
  2821:31  error    'self' is not defined                                                           no-undef
  2867:31  error    'URL' is not defined                                                            no-undef
  2867:40  error    'location' is not defined                                                       no-undef
  2897:40  error    'Request' is not defined                                                        no-undef
  2900:31  error    'self' is not defined                                                           no-undef
  2921:33  error    'Request' is not defined                                                        no-undef
  3002:29  error    'URL' is not defined                                                            no-undef
  3002:38  error    'location' is not defined                                                       no-undef
  3008:34  error    'URL' is not defined                                                            no-undef
  3013:30  error    'URL' is not defined                                                            no-undef
  3195:32  error    'self' is not defined                                                           no-undef
  3197:74  error    'self' is not defined                                                           no-undef
  3199:61  error    'self' is not defined                                                           no-undef
  3218:7   error    'self' is not defined                                                           no-undef

/data/data/com.termux/files/home/projects/projects1/eslint.config.mjs
  27:26  error  'process' is not defined  no-undef

/data/data/com.termux/files/home/projects/projects1/jest.config.js
  60:1  error  'module' is not defined  no-undef

/data/data/com.termux/files/home/projects/projects1/jest.setup.js
  13:27  error  Parsing error: Unexpected token :

/data/data/com.termux/files/home/projects/projects1/server.ts
  19:5   error  'options' is defined but never used  no-unused-vars
  20:39  error  'context' is defined but never used  no-unused-vars
  40:14  error  'process' is not defined             no-undef
  40:40  error  'process' is not defined             no-undef
  67:3   error  'console' is not defined             no-undef

/data/data/com.termux/files/home/projects/projects1/src/api/apiClient.ts
  22:21  error  'fetch' is not defined  no-undef

/data/data/com.termux/files/home/projects/projects1/src/components/AdminBoard/RepoList.tsx
  28:9   error    'console' is not defined               no-undef
  35:17  warning  Invalid Tailwind CSS classnames order  tailwindcss/classnames-order
  66:18  warning  Invalid Tailwind CSS classnames order  tailwindcss/classnames-order

/data/data/com.termux/files/home/projects/projects1/src/components/CTASection.tsx
  21:24  error    'e' is defined but never used                                        no-unused-vars
  21:24  warning  'e' is defined but never used. Allowed unused args must match /^_/u  unused-imports/no-unused-vars
  24:18  error    'document' is not defined                                            no-undef

/data/data/com.termux/files/home/projects/projects1/src/components/CustomerAssessmentForm.tsx
  103:30  error  'fetch' is not defined         no-undef
  135:16  error  'e' is defined but never used  no-unused-vars
  182:16  error  'e' is defined but never used  no-unused-vars

/data/data/com.termux/files/home/projects/projects1/src/components/DocumentPreviewModal.tsx
  38:15  error  'document' is not defined  no-undef
  43:15  error  'document' is not defined  no-undef
  51:17  error  'window' is not defined    no-undef
  52:18  error  'window' is not defined    no-undef

/data/data/com.termux/files/home/projects/projects1/src/components/ErrorBoundary.tsx
  17:35  error  '_' is defined but never used  no-unused-vars
  22:5   error  'console' is not defined       no-undef
  34:30  error  'window' is not defined        no-undef

/data/data/com.termux/files/home/projects/projects1/src/components/Feature.tsx
   74:5   error  'alert' is not defined  no-undef
  110:30  error  'alert' is not defined  no-undef

/data/data/com.termux/files/home/projects/projects1/src/components/Features/Feature1.tsx
  6:5  error  'alert' is not defined  no-undef

/data/data/com.termux/files/home/projects/projects1/src/components/Features/Feature3.tsx
  6:5  error  'alert' is not defined  no-undef

/data/data/com.termux/files/home/projects/projects1/src/components/Features/Feature4.tsx
  6:5  error  'alert' is not defined  no-undef

/data/data/com.termux/files/home/projects/projects1/src/components/Features/Feature5.tsx
  6:5  error  'alert' is not defined  no-undef

/data/data/com.termux/files/home/projects/projects1/src/components/Features/Feature6.tsx
  6:5  error  'alert' is not defined  no-undef

/data/data/com.termux/files/home/projects/projects1/src/components/Footer.tsx
  32:45  error  'window' is not defined    no-undef
  33:5   error  'window' is not defined    no-undef
  34:18  error  'window' is not defined    no-undef
  38:29  error  'document' is not defined  no-undef
  39:7   error  'window' is not defined    no-undef
  41:7   error  'window' is not defined    no-undef

/data/data/com.termux/files/home/projects/projects1/src/components/Header.tsx
  29:37  error  'window' is not defined  no-undef
  35:45  error  'window' is not defined  no-undef
  36:5   error  'window' is not defined  no-undef
  37:18  error  'window' is not defined  no-undef
  58:5   error  'window' is not defined  no-undef
  59:18  error  'window' is not defined  no-undef

/data/data/com.termux/files/home/projects/projects1/src/components/Hero.tsx
  16:5  error  'window' is not defined  no-undef

/data/data/com.termux/files/home/projects/projects1/src/components/MobileMenu.tsx
   32:5   error  'setTimeout' is not defined  no-undef
   45:5   error  'document' is not defined    no-undef
   46:18  error  'document' is not defined    no-undef
   52:7   error  'document' is not defined    no-undef
   57:9   error  'document' is not defined    no-undef
   79:25  error  'document' is not defined    no-undef
   82:33  error  'document' is not defined    no-undef
   88:5   error  'document' is not defined    no-undef
   91:18  error  'document' is not defined    no-undef
  107:7   error  'setTimeout' is not defined  no-undef
  110:33  error  'document' is not defined    no-undef
  113:13  error  'history' is not defined     no-undef
  115:13  error  'window' is not defined      no-undef
  118:11  error  'window' is not defined      no-undef
  120:11  error  'window' is not defined      no-undef
  127:55  error  'window' is not defined      no-undef

/data/data/com.termux/files/home/projects/projects1/src/components/ServicesSection.tsx
  18:16  error    'service' is defined but never used                                          no-unused-vars
  21:60  error    'onRequest' is defined but never used                                        no-unused-vars
  21:60  warning  'onRequest' is defined but never used. Allowed unused args must match /^_/u  unused-imports/no-unused-vars

/data/data/com.termux/files/home/projects/projects1/src/components/VisitorCount.tsx
  65:41  error  'navigator' is not defined      no-undef
  66:9   error  'navigator' is not defined      no-undef
  82:24  error  'setInterval' is not defined    no-undef
  83:18  error  'clearInterval' is not defined  no-undef

/data/data/com.termux/files/home/projects/projects1/src/config/contact.ts
  15:9  error  'React' is not defined  no-undef

/data/data/com.termux/files/home/projects/projects1/src/main.tsx
  20:18  error  'document' is not defined      no-undef
  23:5   error  'localStorage' is not defined  no-undef
  27:20  error  'localStorage' is not defined  no-undef
  28:25  error  'window' is not defined        no-undef
  60:16  error  'document' is not defined      no-undef
  64:3   error  'console' is not defined       no-undef

/data/data/com.termux/files/home/projects/projects1/src/pages/IndexPage.tsx
   25:5   error  'window' is not defined    no-undef
   26:18  error  'window' is not defined    no-undef
   30:5   error  'document' is not defined  no-undef
   32:7   error  'document' is not defined  no-undef
  130:19  error  'alert' is not defined     no-undef

/data/data/com.termux/files/home/projects/projects1/src/pages/LoginPage.tsx
  51:9  error  'localStorage' is not defined  no-undef
  52:9  error  'localStorage' is not defined  no-undef
  59:7  error  'console' is not defined       no-undef

/data/data/com.termux/files/home/projects/projects1/src/pages/SecretRoomPage.tsx
   47:22  error  'setInterval' is not defined    no-undef
   50:18  error  'clearInterval' is not defined  no-undef
   72:18  error  'localStorage' is not defined   no-undef
   80:32  error  'setTimeout' is not defined     no-undef
  115:5   error  'localStorage' is not defined   no-undef
  116:5   error  'localStorage' is not defined   no-undef

/data/data/com.termux/files/home/projects/projects1/src/pages/SecretRoomPageComponents/AccessTimeout.tsx
  39:22  error  'setInterval' is not defined    no-undef
  42:18  error  'clearInterval' is not defined  no-undef

/data/data/com.termux/files/home/projects/projects1/src/pages/SecretRoomPageComponents/Features/Feature1.tsx
   21:21  error  'name' is defined but never used  no-unused-vars
   21:35  error  'date' is defined but never used  no-unused-vars
  107:32  error  'setTimeout' is not defined       no-undef
  108:5   error  'alert' is not defined            no-undef

/data/data/com.termux/files/home/projects/projects1/src/pages/SecretRoomPageComponents/Features/Feature3.tsx
  6:5  error  'alert' is not defined  no-undef

/data/data/com.termux/files/home/projects/projects1/src/pages/SecretRoomPageComponents/Features/Feature4.tsx
  6:5  error  'alert' is not defined  no-undef

/data/data/com.termux/files/home/projects/projects1/src/pages/SecretRoomPageComponents/Features/Feature5.tsx
  6:5  error  'alert' is not defined  no-undef

/data/data/com.termux/files/home/projects/projects1/src/pages/SecretRoomPageComponents/Features/Feature6.tsx
  6:5  error  'alert' is not defined  no-undef

/data/data/com.termux/files/home/projects/projects1/src/pages/SecretRoomPageComponents/SalaryCertDocument.tsx
  39:42  error  'window' is not defined  no-undef
  40:7   error  'window' is not defined  no-undef

/data/data/com.termux/files/home/projects/projects1/src/utils/hashPassword.ts
  11:43  error  'window' is not defined  no-undef

/data/data/com.termux/files/home/projects/projects1/tailwind.config.mjs
  3:13  error  Parsing error: Unexpected token {

/data/data/com.termux/files/home/projects/projects1/vite.config.mjs
   7:8   error  'fs' is defined but never used  no-unused-vars
  11:29  error  'process' is not defined        no-undef
  74:27  error  '__dirname' is not defined      no-undef

✖ 954 problems (942 errors, 12 warnings)
  0 errors and 10 warnings potentially fixable with the `--fix` option.

```

## Jest Test Summary

```bash
ReferenceError: module is not defined in ES module scope
This file is being treated as an ES module because it has a '.js' file extension and '/data/data/com.termux/files/home/projects/projects1/package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.
    at file:///data/data/com.termux/files/home/projects/projects1/jest.config.js:60:1
    at ModuleJobSync.runSync (node:internal/modules/esm/module_job:501:37)
    at ModuleLoader.importSyncForRequire (node:internal/modules/esm/loader:437:47)
    at loadESMFromCJS (node:internal/modules/cjs/loader:1523:24)
    at Module._compile (node:internal/modules/cjs/loader:1674:5)
    at Module._extensions..js (node:internal/modules/cjs/loader:1824:10)
    at Module.load (node:internal/modules/cjs/loader:1427:32)
    at Module._load (node:internal/modules/cjs/loader:1250:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
```

## Build Output (vite build)

```bash

> modular-onepage@0.1.0 build /data/data/com.termux/files/home/projects/projects1
> vite build

vite v7.0.4 building for production...
transforming...
/*! 🌼 daisyUI 5.0.46 */
✓ 2091 modules transformed.
rendering chunks...
computing gzip size...
dist/registerSW.js                      0.13 kB
dist/manifest.webmanifest               0.42 kB
dist/index.html                         3.78 kB │ gzip:   1.42 kB
dist/assets/hero-C1-WP8yC.webp         25.12 kB
dist/assets/review9-DhFu7Jzq.png       36.39 kB
dist/assets/signature-BovtCThw.webp    37.33 kB
dist/assets/review4-CBioFpeu.png       45.74 kB
dist/assets/review2-Bz0_BXyV.png       52.89 kB
dist/assets/review8-kXAHO_8W.png       55.52 kB
dist/assets/review10-D0SwORip.png      55.55 kB
dist/assets/review1-7dlrv2oA.png       55.60 kB
dist/assets/review7-Bt93fMFo.png       59.97 kB
dist/assets/review3-UloQNvHI.png       65.21 kB
dist/assets/review5-CAS9ctNR.png       68.45 kB
dist/assets/review6-C1CShlkS.png       71.48 kB
dist/assets/about-us-IgS6mAQi.webp    155.52 kB
dist/assets/jp-logo-DClkmN1r.png      269.03 kB
dist/assets/index-DdHoUk37.css         95.39 kB │ gzip:  15.76 kB
dist/assets/vendor-B0T0T1rU.js         54.11 kB │ gzip:  20.53 kB │ map:   471.59 kB
dist/assets/index-Ckwltlrp.js         158.09 kB │ gzip:  30.45 kB │ map:   236.77 kB
dist/assets/vendor-react-CA3tHcxm.js  446.94 kB │ gzip: 139.24 kB │ map: 3,875.91 kB
✓ built in 29.19s
```

## Directory Tree (Top-Level)

```bash
.
├──
├── Clean.sh
├── README.md
├── api
│   ├── apiAdmin.ts
│   └── apiClient.ts
├── config
├── depcheck.config.js
├── eslint.config.mjs
├── full-setup.sh
├── generate-project-info.sh
├── index.html
├── jest.config.js
├── jest.setup.js
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── postcss.config.cjs
├── postcss.config.js
├── project-info
│   ├── _temp.log
│   ├── project-summary.md
│   └── project-summary.txt
├── public
│   ├── assets
│   ├── favicon.ico
│   ├── icons
│   ├── images
│   └── manifest.json
├── server.ts
├── src
│   ├── __tests__
│   ├── api
│   ├── assets
│   ├── components
│   ├── config
│   ├── data
│   ├── hooks
│   ├── layouts
│   ├── main.tsx
│   ├── pages
│   ├── services
│   ├── styles
│   ├── tools
│   ├── types
│   └── utils
├── tailwind.config.mjs
├── tsconfig.base.json
├── tsconfig.json
├── vercel.json
└── vite.config.mjs

24 directories, 28 files
```

## Vite Config

````bash
// vite.config.mjs
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";
import history from "connect-history-api-fallback";
import fs from "fs";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const isDev = mode === "development";
  const isBuild = command === "build";

  const defineEnv = Object.fromEntries(
    Object.entries(env)
      .filter(([key]) => key.startsWith("VITE_"))
      .map(([key, val]) => [`process.env.${key}`, JSON.stringify(val)])
  );

  const base = env.VITE_BASE_URL?.trim() || "/";
  const outDir = env.VITE_BUILD_OUTDIR?.trim() || "dist";
  const devPort = Number(env.VITE_DEV_SERVER_PORT) || 5173;
  const previewPort = Number(env.VITE_PREVIEW_SERVER_PORT) || 4173;
  const openBrowser = env.VITE_OPEN_BROWSER === "true";
  const openReport = env.VITE_OPEN_REPORT === "true";

  return {
    base,

    plugins: [
      react(),
      VitePWA({
        registerType: "autoUpdate",
        injectRegister: "script",
        devOptions: {
          enabled: isDev,
        },
        manifest: {
          name: "Modular Onepage App",
          short_name: "ModularOne",
          start_url: base,
          display: "standalone",
          background_color: "#ffffff",
          theme_color: "#0f172a",
          icons: [
            {
              src: "/icons/icon-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "/icons/icon-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
          ],
        },
      }),
      isBuild &&
        visualizer({
          filename: `${outDir}/report.html`,
          open: openReport,
          gzipSize: true,
          brotliSize: true,
          template: "sunburst",
        }),
      // @rollup/plugin-strip ถูกถอดออก เพราะไม่มีใน dependencies แล้ว
    ].filter(Boolean),

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },

    define: defineEnv,

    server: {
      port: devPort,
      open: openBrowser,
      fs: {
        allow: ["."],
      },
      middlewareMode: false,
      configureServer(server) {
        server.middlewares.use(history());
      },
    },

    preview: {
      port: previewPort,
      open: openBrowser,
    },

    build: {
      outDir,
      sourcemap: true,
      assetsInlineLimit: 4096,
      preloadModules: true,
      rollupOptions: {
        output: {
          entryFileNames: "assets/[name]-[hash].js",
          chunkFileNames: "assets/[name]-[hash].js",
          assetFileNames: "assets/[name]-[hash][extname]",
          manualChunks(id) {
            if (id.includes("node_modules")) {
              if (id.includes("react")) return "vendor-react";
              if (id.includes("framer-motion")) return "vendor-framer";
              if (id.includes("tailwindcss")) return "vendor-tailwind";
              return "vendor";
            }
          },
        },
      },
    },

    optimizeDeps: {
      include: [
        "react",
        "react-dom",
        "react-router-dom",
        "framer-motion",
      ],
    },

    css: {
      devSourcemap: true,
    },
  };
});```

## Tailwind Config

```bash
// tailwind.config.ts

import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import daisyui from "daisyui";

/**
 * 💠 Tailwind Config: JP Visual System
 * 📐 Design Scale + Extended Utilities
 * 🌙 Dark Mode: class-based
 * 🎨 Theme Presets: bluewhite / bluewhite-dark / temp
 * 🔌 Plugins: DaisyUI, Typography
 */

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  darkMode: "class",

  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
        160: "40rem",
      },
      maxWidth: {
        "8xl": "90rem",
        "9xl": "110rem",
      },
      zIndex: {
        "-1": "-1",
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
        110: "110",
        120: "120",
      },
      colors: {
        background: {
          DEFAULT: "#FFFFFF",
          dark: "#1F2937",
          surface: "#F9FAFB",
          surfaceDark: "#111827",
        },
        foreground: {
          DEFAULT: "#1F2937",
          dark: "#F3F4F6",
        },
        muted: {
          DEFAULT: "#6B7280",
        },
        primary: {
          DEFAULT: "#1E40AF",
          light: "#3B82F6",
          dark: "#1E3A8A",
          contrastText: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#2563EB",
        },
        border: {
          DEFAULT: "#E5E7EB",
        },
        success: {
          DEFAULT: "#22C55E",
          dark: "#16A34A",
          light: "#A7F3D0",
        },
        warning: {
          DEFAULT: "#F59E0B",
          dark: "#B45309",
          light: "#FEF3C7",
        },
        error: {
          DEFAULT: "#EF4444",
          dark: "#B91C1C",
          light: "#FEE2E2",
        },
        info: {
          DEFAULT: "#3B82F6",
          dark: "#2563EB",
          light: "#BFDBFE",
        },
      },
      backgroundImage: {
        "bluewhite-gradient": "linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)",
        "bluewhite-dark-gradient": "linear-gradient(135deg, #111827 0%, #1F2937 100%)",
      },
      fontFamily: {
        body: ["Inter", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        heading: ["Playfair Display", "Merriweather", "Georgia", "serif"],
        code: ["Fira Code", "Menlo", "Monaco", "monospace"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.375rem" }],
        base: ["1rem", { lineHeight: "1.6rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.75rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
      },
      boxShadow: {
        soft: "0 4px 12px rgba(59, 130, 246, 0.25)",
        medium: "0 8px 24px rgba(59, 130, 246, 0.35)",
        dark: "0 12px 32px rgba(31, 41, 55, 0.9)",
      },
      transitionProperty: {
        colors: "background-color, border-color, color, fill, stroke",
        shadow: "box-shadow",
        transform: "transform",
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-in forwards",
        slideUp: "slideUp 0.6s ease-out forwards",
        bounceSlow: "bounce 2.5s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(24px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },

  plugins: [typography, daisyui],

  daisyui: {
    themes: [
      {
        bluewhite: {
          primary: "#1E40AF",
          "primary-focus": "#1E3A8A",
          secondary: "#6B7280",
          "secondary-focus": "#4B5563",
          accent: "#2563EB",
          neutral: "#F9FAFB",
          "base-100": "#FFFFFF",
          "base-200": "#E5E7EB",
          "base-300": "#D1D5DB",
          info: "#3B82F6",
          success: "#22C55E",
          warning: "#F59E0B",
          error: "#EF4444",
        },
      },
      {
        "bluewhite-dark": {
          primary: "#3B82F6",
          "primary-focus": "#2563EB",
          secondary: "#A3A9B4",
          "secondary-focus": "#475569",
          accent: "#60A5FA",
          neutral: "#1F2937",
          "base-100": "#1F2937",
          "base-200": "#111827",
          "base-300": "#374151",
          info: "#2563EB",
          success: "#16A34A",
          warning: "#B45309",
          error: "#B91C1C",
        },
      },
      {
        temp: {
          primary: "#4F46E5",
          "primary-focus": "#4338CA",
          secondary: "#64748B",
          "secondary-focus": "#475569",
          accent: "#1E40AF",
          neutral: "#F9FAFB",
          "base-100": "#FFFFFF",
          "base-200": "#F3F4F6",
          "base-300": "#E5E7EB",
          info: "#3B82F6",
          success: "#22C55E",
          warning: "#F59E0B",
          error: "#EF4444",
        },
      },
    ],
    darkTheme: "bluewhite-dark",
  },
};

export default config;```

## PostCSS Config

```bash
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}// postcss.config.js

import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

/**
 * 🔧 PostCSS Config
 * 📦 Plugins: TailwindCSS + Autoprefixer
 * 🚀 Compatible with Vite / Next / CRA
 */

export default {
  plugins: [tailwindcss, autoprefixer],
};```

## TypeScript Config

```bash
{
  "name": "Modular OnePage",
  "short_name": "OnePage",
  "version": "1.0.0",
  "description": "A modular modern one-page app built with React, Vite, TailwindCSS, and Express API.",
  "start_url": "/",
  "scope": "/",
  "display": "standalone",
  "orientation": "portrait",
  "background_color": "#ffffff",
  "theme_color": "#18BC9C",
  "lang": "en",
  "dir": "ltr",
  "icons": [
    {
      "src": "/icons/icon-72x72.png",
      "sizes": "72x72",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-96x96.png",
      "sizes": "96x96",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-128x128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-144x144.png",
      "sizes": "144x144",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-152x152.png",
      "sizes": "152x152",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-384x384.png",
      "sizes": "384x384",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "categories": ["productivity", "utilities"],
  "prefer_related_applications": false,
  "related_applications": [],
  "screenshots": [
    {
      "src": "/screenshots/home-light.png",
      "sizes": "1280x720",
      "type": "image/png",
      "label": "Home - Light mode"
    },
    {
      "src": "/screenshots/home-dark.png",
      "sizes": "1280x720",
      "type": "image/png",
      "label": "Home - Dark mode"
    }
  ],
  "shortcuts": [
    {
      "name": "Open Dashboard",
      "short_name": "Dashboard",
      "url": "/dashboard",
      "icons": [{ "src": "/icons/icon-192x192.png", "sizes": "192x192", "type": "image/png" }]
    }
  ],
  "description_long": "Modular OnePage is a performant, scalable single-page application (SPA) built with React 18, Vite 4, TailwindCSS 3, DaisyUI, and an Express backend API. It supports light/dark themes, localization, analytics, and GitHub integration.",
  "developer": {
    "name": "Ohmydevhack",
    "url": "https://github.com/myub217"
  },
  "serviceworker": {
    "src": "/service-worker.js",
    "scope": "/",
    "type": "module",
    "update_via_cache": "none"
  }
}{
  "$schema": "https://json.schemastore.org/tsconfig",
  "display": "Modular Onepage Project",

  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "lib": ["DOM", "DOM.Iterable", "ES2022"],
    "moduleResolution": "bundler",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "resolveJsonModule": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true,
    "strict": true,
    "noFallthroughCasesInSwitch": true,

    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    },

    "jsx": "react-jsx",
    "types": ["vite/client", "jest", "jest-fetch-mock"]
  },

  "include": [
    "src/**/*",              // ✅ Source code ทั้งหมด
    "api/**/*",              // ✅ สำหรับ serverless / backend API
    "server.ts",             // ✅ Backend entry file
    "vite.config.mjs",       // ✅ Vite config
    "tailwind.config.mjs",   // ✅ Tailwind config
    "eslint.config.js",      // ✅ ESLint config (ใช้ใน parserOptions.project)
    "jest.setup.ts"          // ✅ Jest setup
  ],

  "exclude": [
    "node_modules",
    "dist",
    "coverage"
  ],

  "ts-node": {
    "esm": true,
    "experimentalSpecifierResolution": "node",
    "compilerOptions": {
      "module": "ESNext",
      "target": "ES2022"
    }
  }
}```
````
