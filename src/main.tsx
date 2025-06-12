import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// หาจุด mount ของ React app
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element #root ไม่พบใน DOM");
}

// สร้าง root และ render React app
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);