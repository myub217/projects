import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginResponse {
  success: boolean;
  message?: string;
  data?: {
    username: string;
    role: string;
    token: string;
  };
}

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setMessage("");
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result: LoginResponse = await res.json();

      if (res.ok && result.success && result.data) {
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("username", result.data.username);
        localStorage.setItem("role", result.data.role);

        setMessage("✅ เข้าสู่ระบบสำเร็จ กำลังนำทาง...");
        setTimeout(() => {
          navigate("/user"); // นำทางไปหน้า /user
        }, 1000);
      } else {
        setMessage(result.message || "❌ ล็อกอินไม่สำเร็จ");
      }
    } catch (err) {
      console.error("Login error:", err);
      setMessage("🚫 ขัดข้องเชื่อมต่อเซิร์ฟเวอร์");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center p-4 bg-base-100">
      <form
        onSubmit={handleLogin}
        className="max-w-md w-full p-6 border rounded shadow bg-white dark:bg-gray-800"
        aria-label="แบบฟอร์มเข้าสู่ระบบ"
      >
        <h1 className="text-2xl font-bold mb-4 text-center text-primary dark:text-accent">
          เข้าสู่ระบบ
        </h1>

        {message && (
          <div
            role="alert"
            className={`mb-4 text-center ${
              message.startsWith("✅")
                ? "text-green-600"
                : "text-red-600 dark:text-red-400"
            }`}
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
          placeholder="ชื่อผู้ใช้"
          required
          disabled={loading}
          className="input input-bordered w-full mb-3"
          autoComplete="username"
          aria-label="ชื่อผู้ใช้"
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="รหัสผ่าน"
          required
          disabled={loading}
          className="input input-bordered w-full mb-4"
          autoComplete="current-password"
          aria-label="รหัสผ่าน"
        />

        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary w-full"
          aria-busy={loading}
          aria-label="ปุ่มเข้าสู่ระบบ"
        >
          {loading ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"}
        </button>
      </form>
    </section>
  );
};

export default LoginPage;