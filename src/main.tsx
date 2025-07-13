// src/main.tsx

import React, { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/global.css"; // Tailwind + custom vars

import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import SecretRoomPage from "./pages/SecretRoomPage";

const THEME_KEY = "app-theme";

export type ThemeMode = "light" | "dark";

const App: React.FC = () => {
  const [theme, setTheme] = useState<ThemeMode>("light");

  const applyTheme = useCallback((mode: ThemeMode) => {
    const root = document.documentElement;
    if (mode === "dark") {
      root.classList.add("dark");
      root.setAttribute("data-theme", "platinum-dark");
    } else {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "platinum");
    }
    localStorage.setItem(THEME_KEY, mode);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem(THEME_KEY) as ThemeMode | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme: ThemeMode =
      stored === "dark" || (!stored && prefersDark) ? "dark" : "light";
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, [applyTheme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      applyTheme(next);
      return next;
    });
  }, [applyTheme]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<IndexPage theme={theme} toggleTheme={toggleTheme} />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/secret"
          element={<SecretRoomPage theme={theme} toggleTheme={toggleTheme} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);