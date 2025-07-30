<<<<<<< HEAD
// ✅ src/types/vite-env.d.ts – เวอร์ชันสมบูรณ์ พร้อมใช้งานจริง

/// <reference types="vite/client" />

/**
 * กำหนดชนิดของ environment variables ที่สามารถเข้าถึงได้ผ่าน import.meta.env
 * โดยตัวแปรทั้งหมดจะถูกอ่านจาก `.env` หรือ `vite.config.ts`
 */
interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string; // เช่น "https://api.jpdocs.com"
  readonly VITE_APP_TITLE: string; // เช่น "JP Visual & Docs"
  readonly VITE_ORGANIZATION_NAME?: string; // เช่น "JP Technologies Co., Ltd."
  readonly VITE_USE_MOCK_API?: 'true' | 'false'; // ใช้ mock API หรือไม่
  readonly VITE_APP_ENV?: 'development' | 'production' | 'staging'; // ระบุสภาพแวดล้อม
  readonly VITE_ENABLE_PWA?: 'true' | 'false'; // เปิดใช้งาน PWA หรือไม่
  readonly VITE_ANALYTICS_ID?: string; // เช่น Google Analytics ID
=======
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  // เพิ่ม environment variables ที่ใช้ในโปรเจกต์ที่นี่ เช่น
  // readonly VITE_SOME_KEY: string;
>>>>>>> bbe22dc9 (update)
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
<<<<<<< HEAD
}
=======
}
>>>>>>> bbe22dc9 (update)
