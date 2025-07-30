<<<<<<< HEAD
// .eslintrc.config.js (CommonJS format)
=======
>>>>>>> bbe22dc9 (update)
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
<<<<<<< HEAD
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'jsx-a11y', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/anchor-is-valid': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  globals: {
    Link: 'readonly',
    NavLink: 'readonly',
    Navigate: 'readonly',
    Outlet: 'readonly',
    Route: 'readonly',
    Routes: 'readonly',
    auth: 'readonly',
    cn: 'readonly',
    createRef: 'readonly',
    formatDate: 'readonly',
    forwardRef: 'readonly',
    getCurrentUser: 'readonly',
    hashPassword: 'readonly',
    lazy: 'readonly',
    login: 'readonly',
    memo: 'readonly',
    startTransition: 'readonly',
    useAuth: 'readonly',
    useCallback: 'readonly',
    useContext: 'readonly',
    useDebugValue: 'readonly',
    useDeferredValue: 'readonly',
    useEffect: 'readonly',
    useHref: 'readonly',
    useId: 'readonly',
    useImperativeHandle: 'readonly',
    useInRouterContext: 'readonly',
    useInsertionEffect: 'readonly',
    useLayoutEffect: 'readonly',
    useLineAuth: 'readonly',
    useLinkClickHandler: 'readonly',
    useLocation: 'readonly',
    useMemo: 'readonly',
    useNavigate: 'readonly',
    useNavigationType: 'readonly',
    useOnlineStatus: 'readonly',
    useOutlet: 'readonly',
    useOutletContext: 'readonly',
    useParams: 'readonly',
    useReducer: 'readonly',
    useRef: 'readonly',
    useResolvedPath: 'readonly',
    useRoutes: 'readonly',
    useSearchParams: 'readonly',
    useState: 'readonly',
    useSyncExternalStore: 'readonly',
    useTransition: 'readonly',
  },
};
=======
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    // เพิ่มกฎเข้มงวดตามมาตรฐาน production
    "react/react-in-jsx-scope": "off", // React 17+ ไม่ต้อง import React
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "react/prop-types": "off", // ใช้ TS แทน prop-types
    "prefer-const": "error",
    "no-var": "error",
    "eqeqeq": ["error", "always"],
    "curly": "error",
    "semi": ["error", "always"],
    "quotes": ["error", "double", { avoidEscape: true }],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
>>>>>>> bbe22dc9 (update)
