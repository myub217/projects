// src/pages/LoginPage.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const DEFAULT_KEYS = [
  { username: "jpkey", password: "JP2025KEY", role: "member" },
  { username: "admin", password: "25217", role: "admin" },
];

const ADMIN_SECONDARY_CODE = "852085"; // 🔐 รหัส 2FA สำหรับ admin

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { validateUser, users, loginAs } = useAuth();

  const [formData, setFormData] = useState({ username: "", password: "" });
  const [secondCode, setSecondCode] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const isAdmin = formData.username.trim().toLowerCase() === "admin";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setMessage("");
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    const username = formData.username.trim();
    const password = formData.password;

    if (!username || !password) {
      setMessage("⚠️ กรุณากรอกชื่อผู้ใช้และรหัสผ่าน");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      // 🔐 ตรวจสอบ Default Key
      const defaultUser = DEFAULT_KEYS.find(
        (key) => key.username === username && key.password === password
      );

      if (defaultUser) {
        if (defaultUser.role === "admin" && secondCode !== ADMIN_SECONDARY_CODE) {
          setMessage("🔐 กรุณากรอกรหัสยืนยัน 5 หลักสำหรับผู้ดูแลระบบ");
          setLoading(false);
          return;
        }

        loginAs(defaultUser.role);
        setMessage(`🔑 เข้าสู่ระบบสำเร็จในชื่อ ${defaultUser.username}`);
        navigate("/secretroom", { replace: true });
        setLoading(false);
        return;
      }

      // 🔐 ตรวจสอบผู้ใช้จากระบบ
      const isValid = validateUser(username, password);
      const user = users.find((u) => u.username === username);

      if (isValid && user) {
        if (user.role === "admin" && secondCode !== ADMIN_SECONDARY_CODE) {
          setMessage("🔐 กรุณากรอกรหัสยืนยัน 5 หลักสำหรับผู้ดูแลระบบ");
          setLoading(false);
          return;
        }

        loginAs(user.role);
        setMessage(`✅ ยินดีต้อนรับ ${user.username}`);
        setFormData({ username: "", password: "" });
        setSecondCode("");
        navigate("/secretroom", { replace: true });
      } else {
        setMessage("❌ ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง หรือบัญชีหมดอายุ");
      }

      setLoading(false);
    }, 400);
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-base-100 dark:bg-gray-950 px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl space-y-5"
        aria-labelledby="login-heading"
        noValidate
      >
        <h1
          id="login-heading"
          className="text-3xl font-bold text-center text-primary dark:text-accent mb-4"
        >
          เข้าสู่ระบบ
        </h1>

        {message && (
          <div
            className={`text-sm font-medium ${
              message.includes("ยินดีต้อนรับ") || message.includes("สำเร็จ")
                ? "text-green-600 dark:text-green-400"
                : "text-red-600 dark:text-red-400"
            }`}
            role="alert"
          >
            {message}
          </div>
        )}

        {/* Username */}
        <div className="form-control">
          <label htmlFor="username" className="label text-sm font-semibold text-gray-700 dark:text-gray-300">
            ชื่อผู้ใช้
          </label>
          <input
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            required
            disabled={loading}
            value={formData.username}
            onChange={handleChange}
            className="input input-bordered bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            placeholder="admin หรือ jpkey"
          />
        </div>

        {/* Password */}
        <div className="form-control">
          <label htmlFor="password" className="label text-sm font-semibold text-gray-700 dark:text-gray-300">
            รหัสผ่าน
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            disabled={loading}
            value={formData.password}
            onChange={handleChange}
            className="input input-bordered bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            placeholder="••••••••"
          />
        </div>

        {/* 2FA สำหรับ admin */}
        {isAdmin && (
          <div className="form-control">
            <label htmlFor="secondCode" className="label text-sm font-semibold text-gray-700 dark:text-gray-300">
              รหัสยืนยัน (5 หลัก)
            </label>
            <input
              id="secondCode"
              name="secondCode"
              type="password"
              inputMode="numeric"
              pattern="\d{5}"
              maxLength={5}
              required
              disabled={loading}
              value={secondCode}
              onChange={(e) => setSecondCode(e.target.value)}
              className="input input-bordered bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              placeholder="852085"
            />
          </div>
        )}

        {/* Submit */}
        <button type="submit" disabled={loading} className="btn btn-primary w-full">
          {loading ? "กำลังตรวจสอบ..." : "เข้าสู่ระบบ"}
        </button>
      </form>
    </section>
  );
};

export default LoginPage;