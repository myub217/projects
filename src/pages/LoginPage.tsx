import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const ADMIN_CREDENTIAL = { username: "myub25217", password: "25217" };

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { validateUser, users, addUser, loginAs } = useAuth();

  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [addingUser, setAddingUser] = useState(false);
  const [newUser, setNewUser] = useState({ username: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setMessage("");
  };

  const resetForm = () => {
    setFormData({ username: "", password: "" });
    setMessage("");
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    const username = formData.username.trim().toLowerCase();
    const password = formData.password.trim();

    if (!username || !password) {
      setMessage("⚠️ กรุณากรอกชื่อผู้ใช้และรหัสผ่าน");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const isAdmin =
        username === ADMIN_CREDENTIAL.username &&
        password === ADMIN_CREDENTIAL.password;

      const userFromSystem = users.find(
        (u) => u.username.toLowerCase() === username
      );
      const isValid = validateUser(username, password);

      const user = isAdmin
        ? { username, password, role: "admin" }
        : isValid && userFromSystem;

      if (!user) {
        setMessage("❌ ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง หรือบัญชีหมดอายุ");
        setLoading(false);
        return;
      }

      loginAs(user.role);
      resetForm();

      if (user.role === "admin") {
        setAddingUser(true);
      } else {
        navigate("/secretroom", { replace: true });
      }
      setLoading(false);
    }, 400);
  };

  const handleAddUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = newUser.username.trim();
    const password = newUser.password.trim();

    if (!username || !password) {
      setMessage("⚠️ กรอกชื่อและรหัสผ่านของผู้ใช้ใหม่");
      return;
    }

    const exists = users.some((u) => u.username.toLowerCase() === username.toLowerCase());
    if (exists) {
      setMessage(`❌ ผู้ใช้ "${username}" มีอยู่ในระบบแล้ว`);
      return;
    }

    addUser({ username, password, role: "member" });
    setMessage(`✅ เพิ่มผู้ใช้ "${username}" สำเร็จ`);
    setNewUser({ username: "", password: "" });
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-base-100 dark:bg-gray-950 px-4">
      {/* ฟอร์มล็อกอิน */}
      {!addingUser && (
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
              className={`text-sm font-medium text-center ${
                message.includes("ผิด") || message.includes("กรอก") || message.includes("มีอยู่")
                  ? "text-red-600 dark:text-red-400"
                  : "text-green-600 dark:text-green-400"
              }`}
              role="alert"
            >
              {message}
            </div>
          )}

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
              placeholder="myub25217"
            />
          </div>

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

          <button type="submit" disabled={loading} className="btn btn-primary w-full">
            {loading ? "กำลังตรวจสอบ..." : "เข้าสู่ระบบ"}
          </button>
        </form>
      )}

      {/* ฟอร์มเพิ่มผู้ใช้ใหม่ */}
      {addingUser && (
        <form
          onSubmit={handleAddUser}
          className="w-full max-w-md p-8 mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg space-y-5"
        >
          <h2 className="text-2xl font-bold text-center text-primary dark:text-accent mb-4">
            เพิ่มผู้ใช้ใหม่
          </h2>

          {message && (
            <div className="text-sm font-medium text-center text-green-600 dark:text-green-400">
              {message}
            </div>
          )}

          <div className="form-control">
            <label className="label">ชื่อผู้ใช้ใหม่</label>
            <input
              type="text"
              name="username"
              value={newUser.username}
              onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
              className="input input-bordered"
              placeholder="username"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">รหัสผ่าน</label>
            <input
              type="password"
              name="password"
              value={newUser.password}
              onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
              className="input input-bordered"
              placeholder="password"
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-full">
            ✅ เพิ่มผู้ใช้
          </button>
        </form>
      )}
    </section>
  );
};

export default LoginPage;