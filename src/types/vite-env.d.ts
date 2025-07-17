// src/types/vite-env.d.ts

/// <reference types="vite/client" />

/**
 * กำหนดชนิดของ environment variables ที่สามารถเข้าถึงได้ผ่าน import.meta.env
 * โดยตัวแปรทั้งหมดจะถูกอ่านจาก `.env` หรือ `vite.config.ts`
 */
interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;      // URL สำหรับเรียก API หลัก เช่น "https://api.example.com"
  readonly VITE_APP_TITLE: string;         // ชื่อแอปหรือโปรเจกต์ เช่น "JP Visual & Docs"
  readonly VITE_ORGANIZATION_NAME?: string; // ชื่อองค์กรเพิ่มเติม (optional)
  readonly VITE_USE_MOCK_API?: 'true' | 'false'; // ใช้ mock API หรือไม่
  // เพิ่ม environment variables เพิ่มเติมได้ที่นี่ตามต้องการ
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}