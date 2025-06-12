import React, { useState } from "react";

interface LoginProps {
  onSuccess: () => void;
}

const SECRET_PASSWORD = "jpdocs123"; // รหัสผ่านง่าย ๆ ตัวอย่าง

const Login: React.FC<LoginProps> = ({ onSuccess }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === SECRET_PASSWORD) {
      setError("");
      setPassword("");  // ล้าง input
      onSuccess();
    } else {
      setError("รหัสผ่านไม่ถูกต้อง ลองใหม่อีกครั้ง");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-6 rounded-md shadow-md max-w-sm w-full"
        noValidate
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">
          กรุณาใส่รหัสผ่านเพื่อเข้าสู่ระบบ
        </h2>
        <input
          type="password"
          placeholder="รหัสผ่าน"
          className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 mb-3 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoFocus
          aria-label="รหัสผ่าน"
        />
        {error && (
          <p
            className="text-red-500 mb-3 text-center"
            role="alert"
            aria-live="assertive"
          >
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={!password.trim()}
          className={`w-full p-3 rounded font-semibold text-white transition
            ${password.trim() ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-300 cursor-not-allowed"}`}
        >
          เข้าสู่ระบบ
        </button>
      </form>
    </div>
  );
};

export default Login;