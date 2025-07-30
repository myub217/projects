// ✅ src/api/auth.ts – Auth API Module (สมบูรณ์ พร้อมใช้งาน)

<<<<<<< HEAD
import apiClient from './apiClient';
=======
import apiClient from "./apiClient";
>>>>>>> bbe22dc9 (update)

/**
 * 🔐 Login ผู้ใช้งาน (POST: /auth/login)
 * ส่ง username/password เพื่อรับ token
 */
export const login = async (
  username: string,
  password: string,
): Promise<{ token: string }> => {
<<<<<<< HEAD
  return await apiClient.apiFetch('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: {
      'Content-Type': 'application/json',
=======
  return await apiClient.apiFetch("/auth/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: {
      "Content-Type": "application/json",
>>>>>>> bbe22dc9 (update)
    },
  });
};

/**
 * 👤 ดึงข้อมูลผู้ใช้งานปัจจุบัน (GET: /user)
 */
export const getCurrentUser = async (): Promise<{
  id: string;
  username: string;
<<<<<<< HEAD
  role: 'admin' | 'user';
}> => {
  return await apiClient.apiFetch('/user');
=======
  role: "admin" | "user";
}> => {
  return await apiClient.apiFetch("/user");
>>>>>>> bbe22dc9 (update)
};

/**
 * 📦 Unified Export
 */
const authApi = {
  login,
  getCurrentUser,
};

export default authApi;
