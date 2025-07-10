import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../data/users";
import { hashPassword } from "../utils/hashPassword";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const usernameRef = useRef<HTMLInputElement>(null);

  // โฟกัสที่ input เมื่อโหลดหน้า
  useEffect(() => {
    usernameRef.current?.focus();
  }, []);

  // จัดการการเข้าสู่ระบบ
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setError(""); // reset error ก่อนเช็คใหม่

    const user = users[username];
    if (!user) {
      setError("ชื่อผู้ใช้ไม่ถูกต้อง");
      return;
    }

    const inputHash = await hashPassword(password);
    if (inputHash === user.passwordHash) {
      localStorage.setItem("authUser", username);
      localStorage.setItem("authRole", user.role);
      // แก้ไขเส้นทางให้ตรงกับ Route ที่ตั้งไว้ใน App.tsx
      navigate("/secret");
    } else {
      setError("รหัสผ่านไม่ถูกต้อง");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-6">
      <section className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
          เข้าสู่ระบบ
        </h1>

        {error && (
          <div className="mb-4 text-red-600 dark:text-red-400 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            id="username"
            type="text"
            ref={usernameRef}
            autoComplete="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="px-3 py-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            placeholder="ชื่อผู้ใช้"
          />

          <input
            id="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="px-3 py-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            placeholder="รหัสผ่าน"
          />

          <button
            type="submit"
            className="bg-black dark:bg-white dark:text-black text-white py-2 rounded hover:opacity-90 transition"
          >
            เข้าสู่ระบบ
          </button>
        </form>
      </section>
    </main>
  );
};

export default LoginPage;