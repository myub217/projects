import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { loginAs } = useAuth(); // ลบ validateUser ออก

  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const secretRoomPath = "/secret"; // เส้นทางปลายทางหลังเข้าสู่ระบบ

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setMessage("");
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { username, password } = formData;

    try {
      const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username.trim(), password }),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        loginAs({
          username: result.data.username,
          role: result.data.role,
          token: result.data.token,
          expiresAt: Date.now() + 60 * 60 * 1000, // optional: กำหนดหมดอายุ 1 ชม.
        });

        navigate(secretRoomPath, { replace: true });
      } else {
        setMessage(result.message || "⚠️ ไม่สามารถเข้าสู่ระบบได้");
      }
    } catch (err) {
      console.error("Login error:", err);
      setMessage("🚫 ขัดข้องในการเชื่อมต่อกับเซิร์ฟเวอร์");
    } finally {
      setLoading(false);
    }
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
                message.startsWith("✅")
                  ? "text-green-600"
                  : "text-red-500 dark:text-red-400"
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