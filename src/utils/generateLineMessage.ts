import { Service } from "../data/services";

const LINE_ID = "462FQTFC"; // ลบเครื่องหมาย @ ออกจาก LINE ID
const BASE_URL = `https://line.me/R/ti/p/${LINE_ID}`;

/**
 * สร้างลิงก์ LINE พร้อมข้อความพรีฟิลด์
 * @param service รายละเอียดบริการ
 * @returns ลิงก์ที่สามารถเปิดแชท LINE พร้อมข้อความที่กรอกไว้ล่วงหน้า
 */
export function generateLineMessage(service: Service): string {
  const title = sanitize(service.title, "ไม่ระบุชื่อบริการ");
  const description = sanitize(service.description, "ไม่มีคำอธิบาย");
  const price = sanitize(service.price, "กรุณาสอบถามราคา");

  const message = [
    `💬 สนใจบริการ: ${title}`,
    "",
    `🔎 รายละเอียดโดยย่อ:\n${description}`,
    "",
    `💰 ราคา: ${price}`,
    "",
    `📩 สนใจรายละเอียดเพิ่มเติม ติดต่อกลับได้เลยครับ 🙏`,
  ].join("\n");

  return `${BASE_URL}?text=${encodeURIComponent(message)}`;
}

/**
 * ฟังก์ชันสำหรับตรวจสอบและจัดการข้อความว่าง
 * @param value ข้อความที่ต้องการตรวจสอบ
 * @param fallback ข้อความสำรองหากว่าง
 */
function sanitize(value?: string, fallback = ""): string {
  return value?.trim() || fallback;
}