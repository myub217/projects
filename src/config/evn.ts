// src/config/env.ts
// แก้ชื่อไฟล์เป็น env.ts ให้ถูกต้องและตั้งค่า environment variables อย่างปลอดภัย

export const env = {
  APP_ENV: (import.meta.env.VITE_APP_ENV as string) || 'development',
  API_BASE: (import.meta.env.VITE_API_BASE as string) || 'http://localhost:3000/api',
  USE_MOCK: import.meta.env.USE_MOCK === 'true' || false,
  ANALYTICS_ENABLED: import.meta.env.VITE_ANALYTICS_ENABLED === 'true' || false,
  PWA_ENABLED: import.meta.env.VITE_PWA_ENABLED === 'true' || false,
};
