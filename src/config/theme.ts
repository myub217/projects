// src/config/theme.ts
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
