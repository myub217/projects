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

  // โหลดธีมจาก localStorage หรือ system preference ตอน mount
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('theme') as Theme | null
      const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches
      if (savedTheme === 'light' || savedTheme === 'dark') {
        setTheme(savedTheme)
        document.documentElement.setAttribute('data-theme', savedTheme)
      } else {
        const systemTheme = prefersDark ? 'dark' : 'light'
        setTheme(systemTheme)
        document.documentElement.setAttribute('data-theme', systemTheme)
      }
    } catch {
      setTheme('light')
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }, [])

  // อัพเดต data-theme attribute และบันทึก localStorage เมื่อ theme เปลี่ยน
  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // ignore write error
    }
  }, [theme])

  // toggle ธีมระหว่าง light กับ dark
  const toggleTheme = useCallback(() => {
    setTheme(curr => (curr === 'light' ? 'dark' : 'light'))
  }, [])

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

// Hook ใช้งาน ThemeContext พร้อมตรวจสอบการใช้งานนอก Provider
export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}
