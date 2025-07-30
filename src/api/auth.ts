// ✅ src/api/auth.ts – Auth API Module (สมบูรณ์ พร้อมใช้งาน)

import apiClient from "./apiClient";

/**
 * 🔐 Login ผู้ใช้งาน (POST: /auth/login)
 * ส่ง username/password เพื่อรับ token
 */
export const login = async (
  username: string,
  password: string,
): Promise<{ token: string }> => {
  return await apiClient.apiFetch("/auth/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

/**
 * 👤 ดึงข้อมูลผู้ใช้งานปัจจุบัน (GET: /user)
 */
export const getCurrentUser = async (): Promise<{
  id: string;
  username: string;
  role: "admin" | "user";
}> => {
  return await apiClient.apiFetch("/user");
};

/**
 * 📦 Unified Export
 */
const authApi = {
  login,
  getCurrentUser,
};

export default authApi;
