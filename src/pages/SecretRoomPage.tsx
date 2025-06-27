import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import SEOHelmet from "@/components/SEOHelmet";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { validateUser, users, addUser } = useAuth();

  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [newUser, setNewUser] = useState({ username: "", password: "" });
  const [addingUser, setAddingUser] = useState(false);

  // รับ username/password จาก Hero.tsx ผ่าน URL params ถ้ามี
  useEffect(() => {
    const search = new URLSearchParams(location.search);
    const username = search.get("username") || "";
    const password = search.get("password") || "";
    if (username && password) {
      setFormData({ username, password });
      handleLoginAuto(username, password);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setMessage("");
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    const success = validateUser(formData.username, formData.password);
    setTimeout(() => {
      if (success) {
        navigate("/secretroom");
      } else {
        setMessage("❌ ผู้ใช้หรือรหัสผ่านไม่ถูกต้องหรือหมดอายุ");
      }
      setLoading(false);
    }, 300);
  };

  // กรณี auto login จาก Hero
  const handleLoginAuto = (username: string, password: string) => {
    const success = validateUser(username, password);
    if (success) {
      navigate("/secretroom");
    } else {
      setMessage("❌ ไม่สามารถเข้าสู่ระบบอัตโนมัติ");
    }
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
  };

  return (
    <>
      <SEOHelmet
        title="เข้าสู่ระบบ | JP Visual & Docs"
        description="ล็อกอินเพื่อเข้าถึงบริการและฟีเจอร์พิเศษของคุณ"
        url="https://applicationlubmobile.vercel.app/login"
      />

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
              <button
                type="submit"
                className="btn btn-primary w-full"
                disabled={loading}
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
                onChange={(e) =>
                  setNewUser({ ...newUser, username: e.target.value })
                }
                className="input input-bordered w-full"
                required
              />
              <input
                type="password"
                placeholder="รหัสผ่าน"
                value={newUser.password}
                onChange={(e) =>
                  setNewUser({ ...newUser, password: e.target.value })
                }
                className="input input-bordered w-full"
                required
              />
              <button type="submit" className="btn btn-success w-full">
                เพิ่มผู้ใช้
              </button>

              <button
                type="button"
                className="btn btn-ghost w-full mt-2"
                onClick={() => {
                  setAddingUser(false);
                  setMessage("");
                }}
              >
                กลับไปหน้าเข้าสู่ระบบ
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
};

export default LoginPage;