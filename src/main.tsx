// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./styles/styles.css"; // ✅ ใช้แค่ styles.css เท่านั้น

const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("❌ ไม่พบ element ที่ใช้ mount แอป: #root");
  throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);