// src/pages/LoginPage.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { validateUser, loginAs, users, addUser } = useAuth();

  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [newUser, setNewUser] = useState({ username: "", password: "" });
  const [addingUser, setAddingUser] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setMessage("");
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const user = validateUser(formData.username, formData.password);

    setTimeout(() => {
      if (user) {
        loginAs(user);
        navigate("/secret"); // ✅ แก้ตรงนี้
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

    addUser({ username: name, password: pass, role: "member", expiresMinutes: 60 * 24 });
    setMessage(`✅ เพิ่มผู้ใช้ "${name}" เรียบร้อยแล้ว`);
    setNewUser({ username: "", password: "" });
    setAddingUser(false);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-base-100 px-4">
      <div className="max-w-sm w-full">
        {!addingUser ? (
          <form
            onSubmit={handleLogin}
            className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-8 space-y-5"
          >
            <h1 className="text-3xl font-bold text-center text-primary dark:text-accent">
              เข้าสู่ระบบ
            </h1>

            {message && (
              <div
                className={`text-sm text-center ${
                  message.startsWith("❌") || message.startsWith("⚠️")
                    ? "text-red-500"
                    : "text-green-600"
                }`}
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
            />
            <button type="submit" className="btn btn-primary w-full" disabled={loading}>
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
          >
            <h2 className="text-2xl font-bold text-center text-primary dark:text-accent">
              เพิ่มผู้ใช้ใหม่
            </h2>

            {message && (
              <div
                className={`text-sm text-center ${
                  message.startsWith("❌") || message.startsWith("⚠️")
                    ? "text-red-500"
                    : "text-green-600"
                }`}
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
            />
            <input
              type="password"
              placeholder="รหัสผ่าน"
              value={newUser.password}
              onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
              className="input input-bordered w-full"
              required
              disabled={loading}
            />
            <button type="submit" className="btn btn-success w-full" disabled={loading}>
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