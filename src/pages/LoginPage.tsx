import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const DEFAULT_KEYS = [
  { username: "jpkey", password: "JP2025KEY", role: "member" },
  { username: "admin", password: "25217", role: "admin" },
  { username: "Myub25217", password: "22584566", role: "admin" },
];

const ADMIN_SECONDARY_CODE = "85208";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { validateUser, users, loginAs } = useAuth();

  const [formData, setFormData] = useState({ username: "", password: "" });
  const [secondCode, setSecondCode] = useState("");
  const [redirectTo, setRedirectTo] = useState<"/admin" | "/secretroom">("/secretroom");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setMessage("");
  };

  const resetForm = () => {
    setFormData({ username: "", password: "" });
    setSecondCode("");
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
      const defaultUser = DEFAULT_KEYS.find(
        (u) => u.username.toLowerCase() === username.toLowerCase() && u.password === password
      );

      const userFromSystem = users.find(
        (u) => u.username.toLowerCase() === username.toLowerCase()
      );
      const isValid = validateUser(username.toLowerCase(), password);

      const user = defaultUser || (isValid && userFromSystem);

      if (!user) {
        setMessage("❌ ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง หรือบัญชีหมดอายุ");
        setLoading(false);
        return;
      }

      if (user.role === "admin" && secondCode !== ADMIN_SECONDARY_CODE) {
        setMessage("🔐 กรุณากรอกรหัสยืนยัน 5 หลักสำหรับผู้ดูแลระบบ");
        setLoading(false);
        return;
      }

      loginAs(user.role);
      resetForm();

      // ไปยังเส้นทางที่เลือก (admin เลือกได้)
      navigate(user.role === "admin" ? redirectTo : "/secretroom", { replace: true });
    }, 400);
  };

  const isAdminInput = ["admin", "myub25217"].includes(formData.username.trim().toLowerCase());

  return (
    <section className="flex items-center justify-center min-h-screen bg-base-100 dark:bg-gray-950 px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl space-y-5"
        noValidate
      >
        <h1 className="text-3xl font-bold text-center text-primary dark:text-accent mb-4">
          เข้าสู่ระบบ
        </h1>

        {message && (
          <div
            className={`text-sm font-medium ${
              message.includes("ผิด") || message.includes("กรอก")
                ? "text-red-600 dark:text-red-400"
                : "text-green-600 dark:text-green-400"
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

        {/* 2FA */}
        {isAdminInput && (
          <>
            <div className="form-control">
              <label htmlFor="secondCode" className="label text-sm font-semibold text-gray-700 dark:text-gray-300">
                รหัสยืนยัน (5 หลัก)
              </label>
              <input
                id="secondCode"
                name="secondCode"
                type="password"
                inputMode="numeric"
                maxLength={5}
                disabled={loading}
                value={secondCode}
                onChange={(e) => setSecondCode(e.target.value)}
                className="input input-bordered bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                placeholder="852085"
              />
            </div>

            <div className="form-control">
              <label htmlFor="redirectTo" className="label text-sm font-semibold text-gray-700 dark:text-gray-300">
                เข้าสู่หน้าหลังล็อกอิน
              </label>
              <select
                id="redirectTo"
                value={redirectTo}
                onChange={(e) => setRedirectTo(e.target.value as "/admin" | "/secretroom")}
                className="select select-bordered bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              >
                <option value="/admin">📋 หน้าผู้ดูแลระบบ (/admin)</option>
                <option value="/secretroom">🔐 ห้องลับผู้ใช้ (/secretroom)</option>
              </select>
            </div>
          </>
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