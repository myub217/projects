// src/config/themes.ts

/**
 * 🌈 ThemeMode: โหมดของธีม (light/dark)
 */
export type ThemeMode = "light" | "dark";

/**
 * 🎨 AppTheme: โครงสร้างข้อมูลของธีมที่ระบบรองรับ
 */
export type AppTheme = {
  name: string;                // ชื่อภายใน เช่น "jp-light"
  displayName: string;         // ชื่อที่แสดงให้ผู้ใช้ เช่น "JP Light Theme"
  dataTheme: string;           // ค่าที่ใช้กับ data-theme (เช่นใน <html data-theme="...">)
  mode: ThemeMode;             // "light" หรือ "dark"
  primaryColor: string;        // สีหลัก (primary)
  secondaryColor: string;      // สีรอง (secondary)
  accentColor: string;         // สีเสริม (accent)
  backgroundColor: string;     // สีพื้นหลัง
  textColor: string;           // สีข้อความหลัก
  borderColor: string;         // สีขอบหรือเส้นแบ่ง
};

/**
 * 🔖 themeNames: enum สำหรับชื่อธีม
 */
export const themeNames = {
  JP_LIGHT: "jp-light",
  JP_DARK: "jp-dark",
} as const;

export type ThemeName = (typeof themeNames)[keyof typeof themeNames];

/**
 * 🎨 themes: ธีมทั้งหมดที่ระบบรองรับ
 */
export const themes: AppTheme[] = [
  {
    name: themeNames.JP_LIGHT,
    displayName: "JP Light Theme",
    dataTheme: "jp-light",
    mode: "light",
    primaryColor: "#1e40af",         // --color-primary
    secondaryColor: "#6b7280",       // --color-secondary
    accentColor: "#2563eb",          // --color-accent
    backgroundColor: "#ffffff",      // --color-bg
    textColor: "#1f2937",            // --color-fg
    borderColor: "#e5e7eb",          // --color-border
  },
  {
    name: themeNames.JP_DARK,
    displayName: "JP Dark Theme",
    dataTheme: "jp-dark",
    mode: "dark",
    primaryColor: "#3b82f6",         // --color-primary
    secondaryColor: "#a3a9b4",       // --color-secondary
    accentColor: "#60a5fa",          // --color-accent
    backgroundColor: "#1f2937",      // --color-bg
    textColor: "#f3f4f6",            // --color-fg
    borderColor: "#374151",          // --color-border
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
export const isDarkMode = (theme: AppTheme): boolean => theme.mode === "dark";