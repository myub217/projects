// src/api/auth.ts

/**
 * ✅ Auth API Module
 * - สำหรับ handle การ login / ตรวจสอบสิทธิ์
 * - ใช้งานร่วมกับ backend /api
 */

import apiClient from './apiClient';

/**
 * 🔐 Login (ส่ง username + password)
 */
export const login = (username: string, password: string) => {
  return apiClient.login(username, password);
};

/**
 * 👤 ดึงข้อมูลผู้ใช้งานปัจจุบัน
 */
export const getCurrentUser = () => {
  return apiClient.getCurrentUser();
};

/**
 * 📦 Unified Export
 */
const authApi = {
  login,
  getCurrentUser,
};

export default authApi;