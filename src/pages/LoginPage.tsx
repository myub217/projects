// src/pages/LoginPage.tsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const trimmedUsername = username.trim();
    const success = login(trimmedUsername, password);

    if (success) {
      navigate("/secret-room");
    } else {
      setError("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");

      // 👀 Optional debug:
      if (import.meta.env.DEV) {
        console.warn("🛑 ล็อกอินล้มเหลว:", {
          username: trimmedUsername,
          password,
        });
      }
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow max-w-sm w-full"
        aria-label="แบบฟอร์มเข้าสู่ระบบ"
      >
        <h1 className="text-2xl font-bold mb-4 text-center" id="login-title">
          เข้าสู่ระบบ
        </h1>

        {error && (
          <p
            className="text-red-500 text-sm mb-3"
            role="alert"
            aria-live="assertive"
          >
            {error}
          </p>
        )}

        <input
          type="text"
          placeholder="ชื่อผู้ใช้"
          className="input input-bordered w-full mb-3"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          aria-describedby="login-title"
          aria-label="ชื่อผู้ใช้"
          autoComplete="username"
          spellCheck={false}
        />

        <input
          type="password"
          placeholder="รหัสผ่าน"
          className="input input-bordered w-full mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          aria-label="รหัสผ่าน"
          autoComplete="current-password"
          spellCheck={false}
        />

        <button
          type="submit"
          className="btn btn-primary w-full"
          aria-label="ปุ่มเข้าสู่ระบบ"
        >
          เข้าสู่ระบบ
        </button>
      </form>
    </main>
  );
};

export default LoginPage;