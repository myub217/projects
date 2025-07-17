// ✅ src/config/env.ts – Environment Configuration สำหรับ Modular Onepage

export const ENV = {
  // 🔗 GitHub Integration
  GITHUB_TOKEN: import.meta.env.VITE_GITHUB_TOKEN ?? '',
  GITHUB_REPO_URL: import.meta.env.VITE_GITHUB_REPO_URL ?? '',
  GITHUB_REPO_NAME: import.meta.env.VITE_GITHUB_REPO_NAME ?? '',

  // 🌐 API Endpoints
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL ?? 'https://applicationlubmobile.vercel.app',

  // 🎨 UI / Theme Settings
  DEFAULT_THEME: import.meta.env.VITE_DEFAULT_THEME ?? 'system',
  DATA_THEME: import.meta.env.VITE_DATA_THEME ?? 'light',

  // ⚙️ Feature Flags
  ENABLE_PWA: import.meta.env.VITE_ENABLE_PWA === 'true',
  ENABLE_LOGGING: import.meta.env.VITE_ENABLE_LOGGING === 'true',
  DEBUG_MODE: import.meta.env.VITE_DEBUG_MODE === 'true',
  USE_MOCK: import.meta.env.VITE_USE_MOCK === 'true',
  ENABLE_INSPECT: import.meta.env.VITE_ENABLE_INSPECT === 'true',
  ENABLE_ESLINT: import.meta.env.VITE_ENABLE_ESLINT === 'true',

  // 📊 Telemetry / Analytics
  ANALYTICS_URL: import.meta.env.VITE_ANALYTICS_URL ?? 'https://analytics.yourdomain.com',

  // 🧭 App Meta
  APP_TARGET: import.meta.env.VITE_APP_TARGET ?? 'client',
};