// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import SecretRoomPage from "./pages/SecretRoomPage"; // import หน้า secret room
import "./style.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/secret-room" element={<SecretRoomPage />} /> {/* เพิ่ม Route นี้ */}
        {/* เพิ่ม Route อื่น ๆ ตามต้องการ */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);