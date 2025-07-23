// src/components/ThemeProvider.tsx
// ✅ Theme context with system preference detection, localStorage sync, and toggle

import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  type ReactNode,
  useCallback,
} from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light')

  // Initialize theme from localStorage or system preference on mount
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('theme') as Theme | null
      const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches
      if (savedTheme === 'light' || savedTheme === 'dark') {
        setTheme(savedTheme)
      } else {
        setTheme(prefersDark ? 'dark' : 'light')
      }
    } catch {
      // Fail silently if localStorage or matchMedia is unavailable
      setTheme('light')
    }
  }, [])

  // Update root html class and localStorage when theme changes
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // Fail silently on localStorage write error
    }
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme(curr => (curr === 'light' ? 'dark' : 'light'))
  }, [])

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

// Hook to consume ThemeContext with error guard
export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}
