// ✅ src/api/auth.ts

/**
 * ✅ Auth API Module
 * - ใช้สำหรับ login และดึงข้อมูลผู้ใช้งาน
 * - เชื่อมต่อกับ backend /api ผ่าน apiClient
 */

import apiClient from './apiClient';

/**
 * 🔐 Login (POST: /api/login)
 * @param username - ชื่อผู้ใช้
 * @param password - รหัสผ่าน
 */
export const login = async (username: string, password: string) => {
  return await apiClient.post('/login', { username, password });
};

/**
 * 👤 Get current user (GET: /api/user)
 */
export const getCurrentUser = async () => {
  return await apiClient.get('/user');
};

/**
 * 📦 Unified Export
 */
const authApi = {
  login,
  getCurrentUser,
};

export default authApi;