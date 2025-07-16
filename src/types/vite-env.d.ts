// src/types/vite-env.d.ts

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL?: string;
  readonly VITE_APP_TITLE?: string;
  // เพิ่ม environment variables ที่ต้องการใช้ในโปรเจกต์ เช่น
  // readonly VITE_SOME_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}