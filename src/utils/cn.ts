// src/utils/cn.ts
<<<<<<< HEAD
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}
=======
/**
 * ฟังก์ชันช่วยรวม className หลายตัวเป็นสตริงเดียว
 * กรองค่า falsy เช่น undefined, null, false, "" ออกให้
 *
 * ตัวอย่าง:
 * cn("btn", isActive && "btn-active", someClass) => "btn btn-active someClass"
 */
export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
>>>>>>> bbe22dc9 (update)
