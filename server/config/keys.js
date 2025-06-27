// config/keys.js

/**
 * รายการ Access Keys ที่ได้รับอนุญาต
 * แนะนำ: เปลี่ยนระบบนี้เป็นโหลดจาก .env หรือ database ใน production จริง
 */
const VALID_ACCESS_KEYS = [
  "JP2025KEY",     // Key สำหรับผู้ใช้งานทั่วไป
  "ADMIN123",      // Key สำหรับผู้ดูแลระบบ
  "SPECIALKEY"     // Key สำหรับสิทธิพิเศษเพิ่มเติม
];

module.exports = {
  VALID_ACCESS_KEYS
};