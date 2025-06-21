import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./styles/global.css";

// ตรวจสอบว่า root element มีอยู่จริงก่อน render
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("ไม่พบ root element ใน index.html");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);