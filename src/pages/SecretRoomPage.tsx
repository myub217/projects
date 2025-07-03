import React, { useState, useRef, useEffect } from "react";
import Header from "@/components/Header";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const usernameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    usernameRef.current?.focus();
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "1234") {
      setError("");
      alert("ล็อกอินสำเร็จ!");
      // ทำอย่างอื่นหลังล็อกอิน เช่น เปลี่ยนหน้า
    } else {
      setError("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
    }
  };

  return (
    <>
      <Header />
      <div className="p-6 bg-white dark:bg-gray-800 border rounded shadow max-w-sm mx-auto mt-10">
        <h2 className="text-xl font-semibold mb-4 text-center text-gray-800 dark:text-white">
          เข้าสู่ระบบ
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              ชื่อผู้ใช้
            </label>
            <input
              id="username"
              type="text"
              ref={usernameRef}
              autoComplete="username"
              placeholder="admin"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm border border-gray-300 dark:border-gray-600 focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              รหัสผ่าน
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              placeholder="1234"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm border border-gray-300 dark:border-gray-600 focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          {error && (
            <p className="text-sm text-red-500" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            เข้าสู่ระบบ
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;