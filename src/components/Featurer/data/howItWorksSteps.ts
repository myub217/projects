// src/components/Featurer/data/how-it-works.config.ts

export interface Step {
  icon: string; // Icon name from lucide-react
  title: string;
  description: string;
}

export const steps: Step[] = [
  {
    icon: "FileText",
    title: "1. วิเคราะห์และวางแผน",
    description: "ประเมินความต้องการ และวางแผนบริการที่เหมาะสมกับธุรกิจคุณ",
  },
  {
    icon: "Users",
    title: "2. ดำเนินการจัดเตรียมเอกสาร",
    description: "ทีมงานจัดเตรียมเอกสารและให้คำปรึกษาตลอดกระบวนการ",
  },
  {
    icon: "CheckCircle",
    title: "3. ตรวจสอบและส่งมอบ",
    description: "ตรวจสอบคุณภาพงานและส่งมอบพร้อมคำแนะนำหลังการใช้งาน",
  },
  {
    icon: "Rocket",
    title: "4. ติดตามผลและสนับสนุน",
    description: "ติดตามผลและพัฒนาปรับปรุงบริการอย่างต่อเนื่อง",
  },
];
