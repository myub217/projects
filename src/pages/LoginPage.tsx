import React from "react";
import Layout from "../layout/Layout";
import SEOHelmet from "../components/SEOHelmet";
import { useNavigate, useLocation } from "react-router-dom";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // ดึงตำแหน่งที่ user จะถูกส่งกลับหลัง login สำเร็จ (default /secret)
  const from = (location.state as any)?.from?.pathname || "/secret";

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // จำลองล็อกอิน: ตั้งค่าใน localStorage
    localStorage.setItem("auth", "true");

    // เปลี่ยนเส้นทางไปยังหน้าที่ต้องการหลัง login
    navigate(from, { replace: true });
  };

  return (
    <Layout>
      <SEOHelmet title="เข้าสู่ระบบ" />
      <section
        className="flex flex-col items-center justify-center min-h-[60vh] py-12 px-4 text-center bg-base-100 dark:bg-gray-950"
        aria-labelledby="login-title"
      >
        <h1
          id="login-title"
          className="text-3xl sm:text-4xl font-bold text-primary dark:text-accent mb-4"
        >
          เข้าสู่ระบบ
        </h1>
        <p className="text-base text-gray-600 dark:text-gray-400 mb-6 max-w-md leading-relaxed">
          โปรดเข้าสู่ระบบเพื่อเข้าถึงฟีเจอร์พิเศษของเว็บไซต์
        </p>

        <form
          className="w-full max-w-sm bg-white dark:bg-gray-800 shadow-md rounded-xl px-8 pt-6 pb-8 mb-4"
          onSubmit={handleLogin}
        >
          <div className="mb-4 text-left">
            <label
              htmlFor="username"
              className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2"
            >
              ชื่อผู้ใช้
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              autoComplete="username"
              placeholder="username"
              className="shadow-sm appearance-none border border-gray-300 dark:border-gray-600 rounded w-full py-2 px-3 text-gray-700 dark:text-white bg-white dark:bg-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="mb-6 text-left">
            <label
              htmlFor="password"
              className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2"
            >
              รหัสผ่าน
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              placeholder="••••••••"
              className="shadow-sm appearance-none border border-gray-300 dark:border-gray-600 rounded w-full py-2 px-3 text-gray-700 dark:text-white bg-white dark:bg-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="btn btn-primary w-full"
              aria-label="เข้าสู่ระบบ"
            >
              เข้าสู่ระบบ
            </button>
          </div>
        </form>
      </section>
    </Layout>
  );
};

export default LoginPage;