import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style.css";

import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import SecretRoomPage from "./pages/SecretRoomPage";

// ชื่อ key สำหรับเก็บธีมใน localStorage
const THEME_KEY = "app-theme";

const App: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // โหลด theme ที่เคยตั้งไว้ หรือใช้ค่าจาก system preference ตอนเริ่มต้น
  useEffect(() => {
    const stored = localStorage.getItem(THEME_KEY);
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme =
      stored === "dark" || (!stored && systemPrefersDark) ? "dark" : "light";
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  // ฟังก์ชันสลับธีมและซิงค์ class กับ localStorage
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  // ฟังก์ชันตั้ง class .dark และ data-theme attribute เพื่อปรับธีมให้ TailwindCSS หรือ CSS framework อื่นทำงาน
  const applyTheme = (theme: "light" | "dark") => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.setAttribute("data-theme", "lofi-dark"); // ปรับตามธีมของคุณ
    } else {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "lofi"); // ปรับตามธีมของคุณ
    }
    localStorage.setItem(THEME_KEY, theme);
  };

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

// เริ่มเรนเดอร์แอปที่ root element
ReactDOM.createRoot(document.getElementById("root")!).render(<App />);