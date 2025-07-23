// src/utils/formatDate.ts
// ✅ Utility: แปลงวันที่เป็นรูปแบบไทย พร้อม fallback และปรับแต่งได้

/**
 * แปลงวันที่เป็นข้อความภาษาไทย เช่น "23 กรกฎาคม 2567"
 *
 * @param input - วันที่ในรูปแบบ Date, string หรือ timestamp
 * @param options - ตัวเลือกเสริมของ Intl.DateTimeFormat
 * @param locale - ภาษาที่ใช้ (ค่าเริ่มต้น: 'th-TH')
 * @returns string วันที่ที่แปลงแล้ว หรือ "วันที่ไม่ถูกต้อง" ถ้า input ไม่ถูกต้อง
 */
export function formatDate(
  input: Date | string | number,
  options?: Intl.DateTimeFormatOptions,
  locale = 'th-TH'
): string {
  const date = input instanceof Date ? input : new Date(input)

  if (isNaN(date.getTime())) return 'วันที่ไม่ถูกต้อง'

  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  }

  return date.toLocaleDateString(locale, defaultOptions)
}
