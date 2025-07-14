import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../data/users";
import { hashPassword } from "../utils/hashPassword";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loginAttempts, setLoginAttempts] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const usernameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    usernameRef.current?.focus();
  }, []);

  useEffect(() => {
    if (error) {
      usernameRef.current?.focus();
    }
  }, [error]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setError("");
    setIsSubmitting(true);

    const trimmedUsername = username.trim();
    if (!trimmedUsername) {
      setError("กรุณากรอกชื่อผู้ใช้");
      setIsSubmitting(false);
      return;
    }

    const user = users[trimmedUsername];
    if (!user) {
      setError("ชื่อผู้ใช้ไม่ถูกต้อง");
      setLoginAttempts((prev) => prev + 1);
      setIsSubmitting(false);
      return;
    }

    try {
      const inputHash = await hashPassword(password);
      if (inputHash === user.passwordHash) {
        localStorage.setItem("authUser", trimmedUsername);
        localStorage.setItem("authRole", user.role);
        navigate("/secret");
      } else {
        setError("รหัสผ่านไม่ถูกต้อง");
        setLoginAttempts((prev) => prev + 1);
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("เกิดข้อผิดพลาดในการเข้าสู่ระบบ กรุณาลองใหม่อีกครั้ง");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isDisabled = isSubmitting || loginAttempts >= 5;

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 p-6 transition-colors duration-300 dark:bg-gray-900">
      <section
        role="region"
        aria-labelledby="login-title"
        aria-live="polite"
        className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800"
      >
        <h1
          id="login-title"
          className="mb-6 text-center text-2xl font-bold text-gray-900 dark:text-white"
        >
          เข้าสู่ระบบ
        </h1>

        {error && (
          <div
            id="login-error"
            role="alert"
            aria-live="assertive"
            className="mb-4 text-center font-medium text-red-600 dark:text-red-400"
          >
            {error}
          </div>
        )}

        {loginAttempts >= 5 && (
          <div
            role="alert"
            aria-live="assertive"
            className="mb-4 text-center font-semibold text-yellow-700 dark:text-yellow-400"
          >
            เกินจำนวนครั้งที่อนุญาต กรุณาลองใหม่ภายหลัง
          </div>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-5" noValidate>
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
            disabled={isDisabled}
            className={`rounded-md border bg-white px-4 py-3 text-gray-900 placeholder-gray-500 transition focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 ${
              isDisabled ? "cursor-not-allowed border-gray-400" : "border-gray-300"
            }`}
          />

          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
            aria-required="true"
            placeholder="รหัสผ่าน"
            disabled={isDisabled}
            className={`rounded-md border bg-white px-4 py-3 text-gray-900 placeholder-gray-500 transition focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 ${
              isDisabled ? "cursor-not-allowed border-gray-400" : "border-gray-300"
            }`}
          />

          <button
            type="submit"
            aria-label="เข้าสู่ระบบ"
            disabled={isDisabled}
            className={`rounded-md bg-primary py-3 text-primary-contrastText transition hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-50 ${
              isDisabled ? "cursor-not-allowed opacity-50 hover:bg-primary" : ""
            }`}
          >
            เข้าสู่ระบบ
          </button>
        </form>
      </section>
    </main>
  );
};

export default LoginPage;