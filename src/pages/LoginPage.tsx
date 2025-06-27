// src/pages/LoginPage.tsx import React, { useState } from "react"; import { useNavigate } from "react-router-dom"; import { useAuth } from "@/context/AuthContext";

const DEFAULT_KEYS = [ { username: "jpkey", password: "JP2025KEY", role: "member" }, { username: "admin", password: "25217", role: "admin" }, ];

const LoginPage: React.FC = () => { const navigate = useNavigate(); const { validateUser, users, loginAs } = useAuth();

const [formData, setFormData] = useState({ username: "", password: "", });

const [message, setMessage] = useState(""); const [loading, setLoading] = useState(false);

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value })); setMessage(""); };

const handleLogin = (e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); if (loading) return;

const { username, password } = formData;
const trimmedUser = username.trim();

if (!trimmedUser || !password) {
  setMessage("⚠️ กรุณากรอกชื่อผู้ใช้และรหัสผ่าน");
  return;
}

setLoading(true);

setTimeout(() => {
  const defaultMatch = DEFAULT_KEYS.find(
    (key) => key.username === trimmedUser && key.password === password
  );

  if (defaultMatch) {
    loginAs(defaultMatch.role as any);
    setMessage(`🔑 เข้าระบบด้วย access key: ${defaultMatch.username}`);
    navigate("/secret", { replace: true });
    setLoading(false);
    return;
  }

  const success = validateUser(trimmedUser, password);
  const user = users.find((u) => u.username === trimmedUser);

  if (success && user) {
    setMessage(`✅ ยินดีต้อนรับ ${user.username}`);
    setFormData({ username: "", password: "" });
    navigate("/secret", { replace: true });
  } else {
    setMessage("❌ ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง หรือบัญชีหมดอายุ");
  }

  setLoading(false);
}, 400);

};

return ( <section className="flex items-center justify-center min-h-screen bg-base-100 dark:bg-gray-950 px-4"> <form
onSubmit={handleLogin}
className="w-full max-w-sm p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl space-y-5"
aria-labelledby="login-heading"
noValidate
> <h1
id="login-heading"
className="text-3xl font-bold text-center text-primary dark:text-accent mb-4"
> เข้าสู่ระบบ </h1>

{message && (
      <div
        className={`text-sm font-medium text-left ${
          message.includes("ยินดีต้อนรับ") || message.includes("access key")
            ? "text-green-600 dark:text-green-400"
            : "text-red-600 dark:text-red-400"
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
        placeholder="admin หรือ jpkey"
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

    <button
      type="submit"
      disabled={loading}
      className="btn btn-primary w-full"
    >
      {loading ? "กำลังตรวจสอบ..." : "เข้าสู่ระบบ"}
    </button>
  </form>
</section>

); };

export default LoginPage;