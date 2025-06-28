// src/pages/LoginPage.tsx
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { validateUser, loginAs } = useAuth();

  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // เส้นทางปลายทางหลังล็อกอินสำเร็จ
  const secretRoomPath = "/secret-room";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setMessage("");
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const username = formData.username.trim();
    const password = formData.password;

    // ตรวจสอบ user กับระบบ
    const user = validateUser(username, password);

    setTimeout(() => {
      if (user) {
        loginAs(user);
        // ทุกคนล็อกอินแล้วจะไป SecretRoomPage
        navigate(secretRoomPath, { replace: true });
      } else {
        setMessage("❌ ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้องหรือหมดอายุ");
      }
      setLoading(false);
    }, 400);
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-base-100 px-4"
      aria-label="หน้าล็อกอิน JP Visual & Docs"
    >
      <div className="max-w-sm w-full">
        <form
          onSubmit={handleLogin}
          className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-8 space-y-5"
          aria-describedby="login-message"
        >
          <h1 className="text-3xl font-bold text-center text-primary dark:text-accent">
            เข้าสู่ระบบ
          </h1>

          {message && (
            <div
              id="login-message"
              className={`text-sm text-center ${
                message.startsWith("❌") ? "text-red-500" : "text-green-600"
              }`}
              role="alert"
              aria-live="assertive"
            >
              {message}
            </div>
          )}

          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="ชื่อผู้ใช้"
            autoComplete="username"
            required
            disabled={loading}
            aria-label="ชื่อผู้ใช้"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="รหัสผ่าน"
            autoComplete="current-password"
            required
            disabled={loading}
            aria-label="รหัสผ่าน"
          />
          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={loading}
            aria-disabled={loading}
            aria-busy={loading}
          >
            {loading ? "กำลังตรวจสอบ..." : "เข้าสู่ระบบ"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;