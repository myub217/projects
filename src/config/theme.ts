// src/config/theme.ts
<<<<<<< HEAD
// ✅ Theme config สำหรับระบบจัดการธีม (light/dark) พร้อม export ทุกฟังก์ชันและค่าที่จำเป็น

export type Theme = 'light' | 'dark';

export const THEMES: Theme[] = ['light', 'dark'];

const STORAGE_KEY = 'app-theme';

/**
 * ดึงค่า theme เริ่มต้นตามลำดับ:
 * 1. localStorage
 * 2. system preference (media query)
 * 3. fallback: 'light'
 */
export function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light';

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
  } catch {
    // ignore error silently
  }

  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  return mql.matches ? 'dark' : 'light';
}

/**
 * เปลี่ยนธีมโดยตรง + บันทึกลง localStorage
 */
export function applyTheme(theme: Theme): void {
  if (typeof document === 'undefined') return;

  try {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // ignore error silently
  }
}

/**
 * Toggle ระหว่าง light/dark พร้อม apply ทันที
 */
export function toggleTheme(current: Theme): Theme {
  const next: Theme = current === 'light' ? 'dark' : 'light';
  applyTheme(next);
  return next;
}
=======

export const themes = {
  jpvisual: {
    "--color-primary": "#4F46E5", // Indigo-600
    "--color-primary-focus": "#4338CA", // Indigo-700
    "--color-primary-content": "#FFFFFF", // White

    "--color-secondary": "#EC4899", // Pink-500
    "--color-secondary-focus": "#DB2777", // Pink-600
    "--color-secondary-content": "#FFFFFF",

    "--color-accent": "#22D3EE", // Cyan-400
    "--color-accent-focus": "#06B6D4", // Cyan-500
    "--color-accent-content": "#FFFFFF",

    "--color-neutral": "#3D4451", // Neutral-700
    "--color-neutral-focus": "#2A2E37", // Neutral-800
    "--color-neutral-content": "#FFFFFF",

    "--color-base-100": "#FFFFFF", // White background
    "--color-base-200": "#F9FAFB", // Gray-50
    "--color-base-300": "#D1D5DB", // Gray-300
    "--color-base-content": "#1F2937", // Gray-800 text
  },
  jpvisualdark: {
    "--color-primary": "#818CF8", // Indigo-400
    "--color-primary-focus": "#6366F1", // Indigo-500
    "--color-primary-content": "#1F2937", // Gray-800

    "--color-secondary": "#F472B6", // Pink-400
    "--color-secondary-focus": "#EC4899", // Pink-500
    "--color-secondary-content": "#1F2937",

    "--color-accent": "#67E8F9", // Cyan-300
    "--color-accent-focus": "#22D3EE", // Cyan-400
    "--color-accent-content": "#1F2937",

    "--color-neutral": "#9CA3AF", // Neutral-400
    "--color-neutral-focus": "#6B7280", // Neutral-500
    "--color-neutral-content": "#1F2937",

    "--color-base-100": "#1F2937", // Gray-800 background
    "--color-base-200": "#111827", // Gray-900
    "--color-base-300": "#374151", // Gray-700
    "--color-base-content": "#F9FAFB", // Gray-50 text
  },
};
>>>>>>> bbe22dc9 (update)
