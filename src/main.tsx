// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import App from "./App";
import { AuthProvider } from "@/context/AuthContext"; // ✅ สำคัญมาก

// ✅ ตรวจสอบว่า root element มีอยู่ใน index.html
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error('❌ ไม่พบ root element ที่มี id="root" ใน index.html');
}

// ✅ Render React App ครบโครงสร้าง
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <AuthProvider> {/* ✅ เพิ่ม AuthProvider ครอบ App */}
          <App />
        </AuthProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);