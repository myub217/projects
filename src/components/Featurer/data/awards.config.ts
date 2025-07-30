// src/components/Featurer/data/awards.config.ts
export interface AwardItem {
  title: string;
  description: string;
  icon: string; // ชื่อไอคอนจาก lucide-react ที่มีใน iconMap
}

export const awards: AwardItem[] = [
  {
    title: "รางวัลยอดนิยม",
    description: "บริการยอดนิยมที่ลูกค้าเลือกใช้ซ้ำสูงสุดในกลุ่มธุรกิจเอกสาร",
    icon: "Star",
  },
  {
    title: "ความพึงพอใจสูงสุด",
    description: "คะแนนรีวิวจากลูกค้าเกิน 4.9/5 อย่างต่อเนื่อง",
    icon: "ThumbsUp",
  },
  {
    title: "รับรองความถูกต้อง",
    description: "เอกสารที่ดำเนินการผ่านการตรวจสอบและรับรองโดยมืออาชีพ",
    icon: "ShieldCheck",
  },
  {
    title: "บริการที่รวดเร็ว",
    description: "การจัดส่งเอกสารภายใน 24 ชั่วโมง สำหรับบริการเร่งด่วน",
    icon: "Clock",
  },
];
