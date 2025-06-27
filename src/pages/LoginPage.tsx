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
    const user = validateUser(formData.username, formData.password);

    setTimeout(() => {
      if (user) {
        loginAs(user);
        navigate("/secretroom");
      } else {
        setMessage("❌ ผู้ใช้หรือรหัสผ่านไม่ถูกต้องหรือหมดอายุ");
      }
      setLoading(false);
    }, 400);
  };

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    const name = newUser.username.trim();
    const pass = newUser.password.trim();
    if (!name || !pass) {
      setMessage("⚠️ กรอกชื่อและรหัสผ่านให้ครบ");
      return;
    }
    if (users.some((u) => u.username.toLowerCase() === name.toLowerCase())) {
      setMessage(`❌ "${name}" มีอยู่แล้ว`);
      return;
    }

    addUser({ username: name, password: pass, role: "member", expiresMinutes: 60 * 24 });
    setMessage(`✅ เพิ่มผู้ใช้ "${name}" แล้ว`);
    setNewUser({ username: "", password: "" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-base-100 px-4">
      {!addingUser ? (
        <form
          onSubmit={handleLogin}
          className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-8 max-w-sm w-full space-y-5"
        >
          <h1 className="text-3xl font-bold text-center text-primary dark:text-accent">
            เข้าสู่ระบบ
          </h1>

          {message && (
            <div className="text-sm text-center text-red-500">{message}</div>
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
          />
          <button type="submit" className="btn btn-primary w-full" disabled={loading}>
            {loading ? "กำลังตรวจสอบ..." : "เข้าสู่ระบบ"}
          </button>
        </form>
      ) : (
        <form
          onSubmit={handleAddUser}
          className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-8 max-w-sm w-full space-y-5"
        >
          <h2 className="text-2xl font-bold text-center text-primary dark:text-accent">
            เพิ่มผู้ใช้ใหม่
          </h2>
          <input
            type="text"
            placeholder="ชื่อผู้ใช้ใหม่"
            value={newUser.username}
            onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
            className="input input-bordered w-full"
            required
          />
          <input
            type="password"
            placeholder="รหัสผ่าน"
            value={newUser.password}
            onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
            className="input input-bordered w-full"
            required
          />
          <button type="submit" className="btn btn-success w-full">
            เพิ่มผู้ใช้
          </button>
        </form>
      )}
    </section>
  );
};

export default LoginPage;