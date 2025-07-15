// src/config/themes.ts

/**
 * 🌈 ThemeMode: โหมดของธีม (light/dark)
 */
export type ThemeMode = 'light' | 'dark';

/**
 * 🎨 AppTheme: โครงสร้างข้อมูลของธีมที่ระบบรองรับ
 */
export type AppTheme = {
  name: string;
  displayName: string;
  dataTheme: string;
  mode: ThemeMode;
  primaryColor: string;
  primaryLightColor: string;
  primaryDarkColor: string;
  secondaryColor: string;
  secondaryLightColor: string;
  secondaryDarkColor: string;
  accentColor: string;
  backgroundColor: string;
  textColor: string;
  borderColor: string;
  infoColor: string;
  successColor: string;
  warningColor: string;
  errorColor: string;
};

/**
 * 🔖 themeNames: enum สำหรับชื่อธีม
 */
export const themeNames = {
  JP_LIGHT: 'jp-light',
  JP_DARK: 'jp-dark',
} as const;

export type ThemeName = (typeof themeNames)[keyof typeof themeNames];

/**
 * 🎨 themes: ธีมทั้งหมดที่ระบบรองรับ
 */
export const themes: AppTheme[] = [
  {
    name: themeNames.JP_LIGHT,
    displayName: 'JP Light Theme',
    dataTheme: 'jp-light',
    mode: 'light',
    primaryColor: '#1e40af',
    primaryLightColor: '#3b82f6',
    primaryDarkColor: '#1e3a8a',
    secondaryColor: '#6b7280',
    secondaryLightColor: '#a3a9b4',
    secondaryDarkColor: '#4b5261',
    accentColor: '#2563eb',
    backgroundColor: '#ffffff',
    textColor: '#1f2937',
    borderColor: '#e5e7eb',
    infoColor: '#3b82f6',
    successColor: '#22c55e',
    warningColor: '#f59e0b',
    errorColor: '#ef4444',
  },
  {
    name: themeNames.JP_DARK,
    displayName: 'JP Dark Theme',
    dataTheme: 'jp-dark',
    mode: 'dark',
    primaryColor: '#3b82f6',
    primaryLightColor: '#60a5fa',
    primaryDarkColor: '#2563eb',
    secondaryColor: '#a3a9b4',
    secondaryLightColor: '#cbd5e1',
    secondaryDarkColor: '#475569',
    accentColor: '#60a5fa',
    backgroundColor: '#1f2937',
    textColor: '#f3f4f6',
    borderColor: '#374151',
    infoColor: '#2563eb',
    successColor: '#16a34a',
    warningColor: '#b45309',
    errorColor: '#b91c1c',
  },
];

/**
 * 🧩 getThemeByName: ดึงข้อมูลธีมจากชื่อ
 */
export const getThemeByName = (name: string): AppTheme | undefined =>
  themes.find((theme) => theme.name === name);

/**
 * 🌘 isDarkMode: เช็คว่า theme นั้นเป็น dark mode หรือไม่
 */
export const isDarkMode = (theme: AppTheme): boolean => theme.mode === 'dark';
