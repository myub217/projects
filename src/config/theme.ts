// src/config/theme.ts
// ✅ Theme management utility with system preference detection and persistent storage

export type Theme = 'light' | 'dark'

export const THEMES: Record<Theme, Theme> = {
  light: 'light',
  dark: 'dark',
}

const STORAGE_KEY = 'app-theme'

/**
 * Get initial theme preference:
 * 1. Check localStorage
 * 2. Fallback to system preference
 * 3. Default to 'light'
 */
export function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light'

  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') {
      return stored
    }
  } catch {
    // ignore errors reading storage
  }

  const mql = window.matchMedia('(prefers-color-scheme: dark)')
  if (mql.matches) return 'dark'
  return 'light'
}

/**
 * Apply theme to <html> element and store preference
 */
export function applyTheme(theme: Theme): void {
  if (typeof window === 'undefined') return

  try {
    const root = document.documentElement
    root.setAttribute('data-theme', theme)
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    // ignore errors writing storage
  }
}

/**
 * Toggle theme between 'light' and 'dark'
 */
export function toggleTheme(current: Theme): Theme {
  const next = current === 'light' ? 'dark' : 'light'
  applyTheme(next)
  return next
}
