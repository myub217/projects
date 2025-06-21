import { Service } from "../data/services";

const LINE_ID = "@462FQTFC";
const BASE_URL = `https://line.me/R/ti/p/${LINE_ID}`;

/**
 * สร้างลิงก์ LINE พร้อมข้อความพรีฟิลด์
 * @param service รายละเอียดบริการ
 * @returns ลิงก์ที่สามารถเปิดแชท LINE พร้อมข้อความที่กรอกไว้ล่วงหน้า
 */
export function generateLineMessage(service: Service): string {
  const title = service.title?.trim() || "ไม่ระบุชื่อบริการ";
  const description = service.description?.trim() || "ไม่มีคำอธิบาย";
  const price = service.price?.trim() || "กรุณาสอบถามราคา";

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