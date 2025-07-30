// src/components/Featurer/data/feature-cards.config.ts

export interface FeatureCard {
  icon: string; // Icon name from lucide-react or custom icons
  title: string;
  description: string;
}

export const featureCards: FeatureCard[] = [
  {
    icon: "ClipboardCheck",
    title: "บริการเอกสารมืออาชีพ",
    description: "จัดเตรียมเอกสาร, แปล และรับรอง ถูกต้องตามมาตรฐาน",
  },
  {
    icon: "UserCheck",
    title: "คำปรึกษาเฉพาะทาง",
    description: "ทีมงานผู้เชี่ยวชาญพร้อมช่วยวางแผนและแก้ไขปัญหาเฉพาะธุรกิจคุณ",
  },
  {
    icon: "ShieldCheck",
    title: "ความปลอดภัยและความน่าเชื่อถือ",
    description: "เก็บข้อมูลและจัดการธุรกิจด้วยความปลอดภัยสูงสุด",
  },
  {
    icon: "TrendingUp",
    title: "เพิ่มยอดขายและภาพลักษณ์",
    description: "วางกลยุทธ์การตลาดและรีแบรนด์ให้ธุรกิจคุณโดดเด่น",
  },
];
