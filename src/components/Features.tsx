import React from "react";

const features = [
  {
    id: 1,
    title: "เชี่ยวชาญด้านเอกสารสำคัญ",
    desc: "ดูแลการจัดทำ แก้ไข และเตรียมเอกสารที่ตรงข้อกำหนด ใช้งานจริงได้จริง",
  },
  {
    id: 2,
    title: "ยื่นวีซ่า-สินเชื่อครบวงจร",
    desc: "วิเคราะห์ เตรียม และส่งเอกสารให้ตรงใจเจ้าหน้าที่ เพิ่มโอกาสผ่านสูง",
  },
  {
    id: 3,
    title: "ทีมดีไซน์ & การตลาดมืออาชีพ",
    desc: "สร้างภาพลักษณ์ จัดการแคมเปญ และออกแบบสื่อให้ตอบโจทย์กลุ่มเป้าหมาย",
  },
  {
    id: 4,
    title: "ระบบอัตโนมัติช่วยลดงานซ้ำ",
    desc: "ใช้บอทและระบบแจ้งเตือนหลังบ้านช่วยจัดการลูกค้าแบบมืออาชีพ 24 ชม.",
  },
  {
    id: 5,
    title: "ทำงานไว ไฟล์พร้อมใช้",
    desc: "ลูกค้าได้รับงานคุณภาพ ส่งตรงเวลา พร้อมไฟล์ที่สามารถใช้งานได้ทันที",
  },
  {
    id: 6,
    title: "ให้คำปรึกษาฟรี & เป็นกันเอง",
    desc: "ไม่ว่าคุณจะเริ่มต้นใหม่หรือกำลังมีปัญหา เรายินดีช่วยเหลือทุกขั้นตอน",
  },
];

const Features: React.FC = () => {
  return (
    <section
      className="py-16 bg-base-200 text-base-content"
      aria-labelledby="features-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2
            id="features-heading"
            className="text-3xl sm:text-4xl font-bold text-primary"
          >
            จุดแข็งของ Applicationlubmobile
          </h2>
          <p className="mt-3 text-base-content/70 dark:text-base-content/50">
            ทำไมลูกค้าหลายพันคนถึงเลือกเรา
          </p>
        </div>

        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left text-sm"
          role="list"
        >
          {features.map(({ id, title, desc }) => (
            <li
              key={id}
              className="bg-base-100 text-base-content shadow-md rounded-xl p-6 transition duration-300 hover:shadow-lg
                         dark:bg-base-300 dark:text-base-content"
              tabIndex={0}
              aria-labelledby={`feature-${id}-title feature-${id}-desc`}
              role="listitem"
            >
              <h3
                id={`feature-${id}-title`}
                className="text-lg font-semibold text-secondary mb-2"
              >
                {title}
              </h3>
              <p id={`feature-${id}-desc`} className="opacity-80 dark:opacity-90">
                {desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;