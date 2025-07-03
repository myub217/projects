import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ตัวอย่างตรวจสอบ username/password แบบง่าย (แก้ตามระบบจริงได้)
    if (username === "admin" && password === "password") {
      // เข้าสู่ระบบสำเร็จ
      navigate("/secret-room"); // หรือหน้าอื่นที่ต้องการหลัง login
    } else {
      setError("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-6">
      <section className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
          เข้าสู่ระบบลับ
        </h1>

        {error && (
          <div className="mb-4 text-red-600 dark:text-red-400 text-center">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label htmlFor="username" className="font-medium text-gray-700 dark:text-gray-300">
            ชื่อผู้ใช้
          </label>
          <input
            id="username"
            type="text"
            autoComplete="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />

          <label htmlFor="password" className="font-medium text-gray-700 dark:text-gray-300">
            รหัสผ่าน
          </label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />

          <button
            type="submit"
            className="mt-4 bg-pink-600 text-white font-semibold py-2 rounded-md hover:bg-pink-700 focus:outline-none focus:ring-4 focus:ring-pink-400 transition"
          >
            เข้าสู่ระบบ
          </button>
        </form>
      </section>
    </main>
  );
};

export default LoginPage;