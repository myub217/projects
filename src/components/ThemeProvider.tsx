// src/components/ThemeProvider.tsx

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';

type Theme = 'light' | 'dark' | 'system';

interface JPThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const JPThemeContext = createContext<JPThemeContextType | undefined>(undefined);

export const useJPTheme = (): JPThemeContextType => {
  const context = useContext(JPThemeContext);
  if (!context) {
    throw new Error('useJPTheme must be used within a ThemeProvider');
  }
  return context;
};

// Export useTheme alias to match imports elsewhere
export const useTheme = useJPTheme;

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>('system');

  // Detect system theme preference
  const getSystemTheme = (): Theme => {
    if (typeof window === 'undefined') return 'light';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  // Initialize theme from localStorage or system
  useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme | null;
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved);
    } else {
      setTheme('system');
    }
  }, []);

  // Sync theme to document and localStorage
  useEffect(() => {
    let appliedTheme = theme;
    if (theme === 'system') {
      appliedTheme = getSystemTheme();
    }
    document.documentElement.setAttribute('data-theme', appliedTheme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <JPThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </JPThemeContext.Provider>
  );
};
