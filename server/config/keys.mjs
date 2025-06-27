// config/keys.mjs

/**
 * รายการ Access Keys ที่ได้รับอนุญาต
 * โหลดจาก environment variable VALID_ACCESS_KEYS เช่น:
 * VALID_ACCESS_KEYS=JP2025KEY,ADMIN123,SPECIALKEY
 * 
 * ในกรณีที่ไม่ได้กำหนดใน env จะเป็น array ว่าง []
 */
const VALID_ACCESS_KEYS = process.env.VALID_ACCESS_KEYS
  ? process.env.VALID_ACCESS_KEYS.split(",").map(key => key.trim())
  : [];

export { VALID_ACCESS_KEYS };