import React from "react";
import aboutImg from "../assets/about-us.jpg";

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-base-200 scroll-mt-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-3xl font-bold text-primary mb-6 text-center">เกี่ยวกับเรา</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-base-content space-y-4">
            <p>
              <strong>JP Visual & Docs</strong> คือผู้เชี่ยวชาญด้านการให้คำปรึกษาและบริการเอกสารครบวงจร
              เราช่วยลูกค้าด้านการยื่นกู้ วีซ่า การเงิน โปรไฟล์ และการจัดทำระบบหลังบ้าน
              เพื่อให้คุณพร้อมเดินหน้าในทุกเป้าหมายที่สำคัญ
            </p>
            <p>
              ด้วยประสบการณ์จริงและผลงานที่พิสูจน์ได้ ทีมของเรามุ่งเน้นความแม่นยำ รวดเร็ว
              และใส่ใจในทุกรายละเอียดเพื่อผลลัพธ์ที่ดีที่สุดสำหรับลูกค้า
            </p>
            <p>
              บริการของเราครอบคลุมทั้งลูกค้าทั่วไป ผู้ประกอบการ รวมถึงธุรกิจที่ต้องการความพร้อมด้านเอกสาร
              และภาพลักษณ์ระดับมืออาชีพ
            </p>
          </div>
          <div>
            <img
              src={aboutImg}
              alt="เกี่ยวกับ JP Visual & Docs"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;