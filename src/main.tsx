// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // ไฟล์ styles ของ Tailwind + DaisyUI
import { ThemeProvider } from "./context/ThemeContext"; // บริบทจัดการธีม (ถ้ามี)
import { BrowserRouter } from "react-router-dom"; // สำหรับ routing SPA
import { HelmetProvider } from "react-helmet-async"; // สำหรับจัดการ meta tags, SEO

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found"); // ตรวจสอบว่ามี element id=root หรือไม่
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);