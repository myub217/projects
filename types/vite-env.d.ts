interface ImportMetaEnv {
  VITE_API_BASE_URL: string;
  [key: string]: any;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
