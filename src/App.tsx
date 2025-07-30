// src/App.tsx
import React, { useEffect, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "@/routes/Routes";
import { useTheme } from "@/contexts/ThemeContext";

const App: React.FC = () => {
  const { theme } = useTheme();

  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
      html.setAttribute("data-theme", "jpvisualdark");
    } else {
      html.classList.remove("dark");
      html.setAttribute("data-theme", "jpvisual");
    }
  }, [theme]);

  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Suspense>
  );
};

export default App;