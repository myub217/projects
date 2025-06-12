import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

interface LoginProps {
  onSuccess: () => void;
}

const SECRET_PASSWORD = "jpdocs123";

const Login: React.FC<LoginProps> = ({ onSuccess }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === SECRET_PASSWORD) {
      setError("");
      setPassword("");
      onSuccess();
    } else {
      setError("รหัสผ่านไม่ถูกต้อง ลองใหม่อีกครั้ง");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4 transition-colors">
      <Helmet>
        <title>เข้าสู่ระบบ | JP Visual & Docs</title>
        <meta name="description" content="เข้าสู่ระบบเพื่อดูข้อมูลของ JP Visual & Docs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full space-y-4"
        noValidate
        aria-labelledby="login-title"
      >
        <h2
          id="login-title"
          className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100"
        >
          เข้าสู่ระบบ
        </h2>
        <p className="text-sm text-center text-gray-600 dark:text-gray-400">
          โปรดกรอกรหัสผ่านเพื่อเข้าถึงเนื้อหาพิเศษ
        </p>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="รหัสผ่าน"
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
            aria-label="รหัสผ่าน"
            aria-invalid={!!error}
            aria-describedby={error ? "password-error" : undefined}
            onPaste={(e) => e.preventDefault()} // ป้องกัน paste
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-blue-500 hover:underline focus:outline-none"
            aria-label={showPassword ? "ซ่อนรหัสผ่าน" : "แสดงรหัสผ่าน"}
          >
            {showPassword ? "ซ่อน" : "แสดง"}
          </button>
        </div>

        {error && (
          <p
            id="password-error"
            className="text-red-500 text-center text-sm"
            role="alert"
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={!password.trim()}
          className={`w-full p-3 rounded font-semibold text-white transition
            ${
              password.trim()
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-blue-300 cursor-not-allowed"
            }`}
        >
          เข้าสู่ระบบ
        </button>
      </form>
    </div>
  );
};

export default Login;