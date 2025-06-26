// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import { AuthProvider } from "./context/AuthContext"; // ✅ เพิ่ม
import "./styles/global.css";

// ตรวจสอบว่า root element มีอยู่จริงก่อน render
const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("ไม่พบ root element ใน index.html");
  throw new Error("ไม่สามารถ mount React App ได้ เนื่องจากไม่มี #root element");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <AuthProvider> {/* ✅ ครอบ App ด้วย AuthProvider */}
          <App />
        </AuthProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);