import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setMessage("");
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, password } = formData;

    if (username === "admin" && password === "25217") {
      setMessage("🎉 เข้าสู่ระบบสำเร็จ");
      // บันทึกสถานะล็อกอิน
      localStorage.setItem("auth", "true");
      // ไปหน้า SecretRoomPage
      navigate("/secret");
    } else {
      setMessage("❌ ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
    }
  };

  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen py-12 px-4 text-center bg-base-100 dark:bg-gray-950"
      aria-labelledby="login-title"
    >
      <h1
        id="login-title"
        className="text-3xl sm:text-4xl font-bold text-primary dark:text-accent mb-6"
      >
        เข้าสู่ระบบ
      </h1>

      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm bg-white dark:bg-gray-800 shadow-lg rounded-2xl px-8 pt-6 pb-8 space-y-4"
      >
        {message && (
          <div
            className={`text-sm font-medium text-left ${
              message.includes("สำเร็จ")
                ? "text-green-600 dark:text-green-400"
                : "text-red-600 dark:text-red-400"
            }`}
          >
            {message}
          </div>
        )}

        <div className="text-left">
          <label
            htmlFor="username"
            className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
          >
            ชื่อผู้ใช้
          </label>
          <input
            id="username"
            name="username"
            type="text"
            required
            autoFocus
            autoComplete="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="username"
            className="input input-bordered w-full bg-white dark:bg-gray-900 text-gray-800 dark:text-white"
          />
        </div>

        <div className="text-left">
          <label
            htmlFor="password"
            className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
          >
            รหัสผ่าน
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            className="input input-bordered w-full bg-white dark:bg-gray-900 text-gray-800 dark:text-white"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full"
          aria-label="เข้าสู่ระบบ"
        >
          เข้าสู่ระบบ
        </button>
      </form>
    </section>
  );
};

export default LoginPage;