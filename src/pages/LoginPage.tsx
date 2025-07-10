import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../data/users";
import { hashPassword } from "../utils/hashPassword";

/**
 * LoginPage Component
 * - Simple, secure login form with client-side password hash comparison
 * - Accessibility: autofocus on username input on load
 * - Dark mode support
 * - Error handling with clear user feedback
 */
const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const usernameRef = useRef<HTMLInputElement>(null);

  // Autofocus username input on mount for better UX & accessibility
  useEffect(() => {
    usernameRef.current?.focus();
  }, []);

  // Handle form submit: validate user & hashed password match
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(""); // Reset error state before validation

    const user = users[username];
    if (!user) {
      setError("ชื่อผู้ใช้ไม่ถูกต้อง");
      return;
    }

    try {
      const inputHash = await hashPassword(password);
      if (inputHash === user.passwordHash) {
        // Save auth info securely (ideally use httpOnly cookie in production)
        localStorage.setItem("authUser", username);
        localStorage.setItem("authRole", user.role);
        navigate("/secret"); // Redirect after successful login
      } else {
        setError("รหัสผ่านไม่ถูกต้อง");
      }
    } catch (err) {
      setError("เกิดข้อผิดพลาดในการเข้าสู่ระบบ กรุณาลองใหม่อีกครั้ง");
      console.error("Login error:", err);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-6 transition-colors duration-300">
      <section
        aria-labelledby="login-title"
        className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
        role="region"
        aria-live="polite"
      >
        <h1
          id="login-title"
          className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white"
        >
          เข้าสู่ระบบ
        </h1>

        {error && (
          <div
            role="alert"
            className="mb-4 text-red-600 dark:text-red-400 text-center font-medium"
          >
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-5" noValidate>
          <label htmlFor="username" className="sr-only">
            ชื่อผู้ใช้
          </label>
          <input
            id="username"
            type="text"
            ref={usernameRef}
            autoComplete="username"
            value={username}
            onChange={(e) => setUsername(e.target.value.trim())}
            required
            aria-required="true"
            aria-describedby={error ? "login-error" : undefined}
            placeholder="ชื่อผู้ใช้"
            className="px-4 py-3 border border-gray-300 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition"
          />

          <label htmlFor="password" className="sr-only">
            รหัสผ่าน
          </label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-required="true"
            placeholder="รหัสผ่าน"
            className="px-4 py-3 border border-gray-300 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition"
          />

          <button
            type="submit"
            className="bg-primary text-primary-contrastText py-3 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-50 transition"
            aria-label="เข้าสู่ระบบ"
          >
            เข้าสู่ระบบ
          </button>
        </form>
      </section>
    </main>
  );
};

export default LoginPage;