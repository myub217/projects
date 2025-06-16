// src/main.tsx
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import "./styles/global.css";

// Optional: Register service worker for PWA
import { registerSW } from "virtual:pwa-register";

// ตรวจสอบว่ารองรับ service worker แล้วค่อย register
if ("serviceWorker" in navigator) {
  registerSW({
    onOfflineReady() {
      console.log("[PWA] App is ready to work offline");
    },
    onNeedRefresh() {
      console.log("[PWA] New content available, please refresh");
    },
  });
}

// เข้าถึง root element อย่างปลอดภัย
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("❌ Root element #root not found");
}

// Render แอปหลักพร้อม Provider และ Suspense
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
          <Suspense
            fallback={
              <div className="min-h-screen flex items-center justify-center text-gray-500 text-lg">
                กำลังโหลด...
              </div>
            }
          >
            <App />
          </Suspense>
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);