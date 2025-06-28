// src/pages/LoginPage.tsx
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

interface NewUser {
  username: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { validateUser, loginAs, users, addUser } = useAuth();

  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [newUser, setNewUser] = useState<NewUser>({ username: "", password: "" });
  const [addingUser, setAddingUser] = useState(false);

  const defaultPath = "/services"; // เส้นทางทั่วไป
  const adminPath = "/admin";      // เส้นทางสำหรับ admin
  const from = (location.state as any)?.from?.pathname || defaultPath;

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

    const user = validateUser(username, password);

    setTimeout(() => {
      if (user) {
        loginAs(user);

        // หากชื่อผู้ใช้เป็น myub25217 → ไปที่ /admin
        if (username.toLowerCase() === "myub25217") {
          navigate(adminPath, { replace: true });
        } else {
          navigate(from, { replace: true });
        }
      } else {
        setMessage("❌ ผู้ใช้หรือรหัสผ่านไม่ถูกต้องหรือหมดอายุ");
      }
      setLoading(false);
    }, 400);
  };

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    const name = newUser.username.trim();
    const pass = newUser.password.trim();

    if (!name || !pass) {
      setMessage("⚠️ กรุณากรอกชื่อและรหัสผ่านให้ครบ");
      return;
    }

    if (users.some((u) => u.username.toLowerCase() === name.toLowerCase())) {
      setMessage(`❌ ผู้ใช้ชื่อ "${name}" มีอยู่แล้ว`);
      return;
    }

    addUser({
      username: name,
      password: pass,
      role: "member",
      expiresMinutes: 60 * 24,
    });

    setMessage(`✅ เพิ่มผู้ใช้ "${name}" เรียบร้อยแล้ว`);
    setNewUser({ username: "", password: "" });
    setAddingUser(false);
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-base-100 px-4"
      aria-label="หน้าล็อกอิน JP Visual & Docs"
    >
      <div className="max-w-sm w-full">
        {!addingUser ? (
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
                  message.startsWith("❌") || message.startsWith("⚠️")
                    ? "text-red-500"
                    : "text-green-600"
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

            <button
              type="button"
              className="btn btn-ghost w-full mt-2"
              onClick={() => {
                setAddingUser(true);
                setMessage("");
              }}
              disabled={loading}
            >
              เพิ่มผู้ใช้ใหม่
            </button>
          </form>
        ) : (
          <form
            onSubmit={handleAddUser}
            className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-8 space-y-5"
            aria-describedby="adduser-message"
          >
            <h2 className="text-2xl font-bold text-center text-primary dark:text-accent">
              เพิ่มผู้ใช้ใหม่
            </h2>

            {message && (
              <div
                id="adduser-message"
                className={`text-sm text-center ${
                  message.startsWith("❌") || message.startsWith("⚠️")
                    ? "text-red-500"
                    : "text-green-600"
                }`}
                role="alert"
                aria-live="assertive"
              >
                {message}
              </div>
            )}

            <input
              type="text"
              placeholder="ชื่อผู้ใช้ใหม่"
              value={newUser.username}
              onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
              className="input input-bordered w-full"
              required
              disabled={loading}
              aria-label="ชื่อผู้ใช้ใหม่"
              autoComplete="username"
            />
            <input
              type="password"
              placeholder="รหัสผ่าน"
              value={newUser.password}
              onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
              className="input input-bordered w-full"
              required
              disabled={loading}
              aria-label="รหัสผ่านใหม่"
              autoComplete="new-password"
            />
            <button
              type="submit"
              className="btn btn-success w-full"
              disabled={loading}
              aria-disabled={loading}
              aria-busy={loading}
            >
              เพิ่มผู้ใช้
            </button>

            <button
              type="button"
              className="btn btn-ghost w-full mt-2"
              onClick={() => {
                setAddingUser(false);
                setMessage("");
              }}
              disabled={loading}
            >
              กลับไปหน้าเข้าสู่ระบบ
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default LoginPage;