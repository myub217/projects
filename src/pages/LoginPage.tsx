import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { validateUser, users } = useAuth();

  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setMessage("");
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    const username = formData.username.trim();
    const password = formData.password;

    if (!username || !password) {
      setMessage("กรุณากรอกชื่อผู้ใช้และรหัสผ่าน");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const success = validateUser(username, password);

      if (success) {
        const foundUser = users.find((u) => u.username === username);
        const userRole = foundUser?.role;

        setMessage(`🎉 ยินดีต้อนรับ ${username}`);
        setFormData({ username: "", password: "" });

        // นำทางไปหน้าที่เหมาะสมหลัง login สำเร็จ
        if (userRole === "admin") {
          navigate("/admin", { replace: true });
        } else {
          navigate("/secret", { replace: true }); // สำหรับสมาชิกทุกคน (member และอื่นๆ)
        }
      } else {
        setMessage("❌ ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง หรือหมดอายุแล้ว");
      }

      setLoading(false);
    }, 500);
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
        noValidate
      >
        {message && (
          <div
            className={`text-sm font-medium text-left ${
              message.includes("ยินดีต้อนรับ")
                ? "text-green-600 dark:text-green-400"
                : "text-red-600 dark:text-red-400"
            }`}
            role="alert"
            aria-live="assertive"
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
            placeholder="เช่น user01 หรือ admin"
            className="input input-bordered w-full bg-white dark:bg-gray-900 text-gray-800 dark:text-white"
            disabled={loading}
            aria-label="ชื่อผู้ใช้"
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
            disabled={loading}
            aria-label="รหัสผ่าน"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full"
          aria-label="เข้าสู่ระบบ"
          disabled={loading}
        >
          {loading ? "กำลังตรวจสอบ..." : "เข้าสู่ระบบ"}
        </button>
      </form>
    </section>
  );
};

export default LoginPage;