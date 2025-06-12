import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";

// ตรวจสอบว่ามี root element
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("ไม่พบ <div id='root'> ใน index.html");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);