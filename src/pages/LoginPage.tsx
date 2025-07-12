import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../data/users";
import { hashPassword } from "../utils/hashPassword";

/**
 * LoginPage Component
 * - ฟอร์มล็อกอินพื้นฐาน พร้อมระบบ hash password
 * - ปรับปรุง UX / accessibility / dark mode
 */
const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const usernameRef = useRef<HTMLInputElement>(null);

  // Autofocus ชื่อผู้ใช้เมื่อโหลดหน้า
  useEffect(() => {
    usernameRef.current?.focus();
  }, []);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(""); // ล้าง error เดิมก่อนตรวจสอบใหม่

    const trimmedUsername = username.trim();
    if (!trimmedUsername) {
      setError("กรุณากรอกชื่อผู้ใช้");
      return;
    }

    const user = users[trimmedUsername];
    if (!user) {
      setError("ชื่อผู้ใช้ไม่ถูกต้อง");
      return;
    }

    try {
      const inputHash = await hashPassword(password);
      if (inputHash === user.passwordHash) {
        // จำลองการล็อกอิน - โปรดเปลี่ยนเป็น cookie หรือ token จริงในระบบ production
        localStorage.setItem("authUser", trimmedUsername);
        localStorage.setItem("authRole", user.role);
        navigate("/secret");
      } else {
        setError("รหัสผ่านไม่ถูกต้อง");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("เกิดข้อผิดพลาดในการเข้าสู่ระบบ กรุณาลองใหม่อีกครั้ง");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-6 transition-colors duration-300">
      <section
        role="region"
        aria-labelledby="login-title"
        aria-live="polite"
        className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
      >
        <h1
          id="login-title"
          className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6"
        >
          เข้าสู่ระบบ
        </h1>

        {error && (
          <div
            id="login-error"
            role="alert"
            className="mb-4 text-center text-red-600 dark:text-red-400 font-medium"
          >
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-5" noValidate>
          {/* Username Input */}
          <input
            id="username"
            ref={usernameRef}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            required
            aria-required="true"
            aria-describedby={error ? "login-error" : undefined}
            placeholder="ชื่อผู้ใช้"
            className="px-4 py-3 border border-gray-300 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition"
          />

          {/* Password Input */}
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
            aria-required="true"
            placeholder="รหัสผ่าน"
            className="px-4 py-3 border border-gray-300 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition"
          />

          {/* Submit Button */}
          <button
            type="submit"
            aria-label="เข้าสู่ระบบ"
            className="bg-primary text-primary-contrastText py-3 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-50 transition"
          >
            เข้าสู่ระบบ
          </button>
        </form>
      </section>
    </main>
  );
};

export default LoginPage;