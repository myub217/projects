import React from "react";
import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import VisitorCount from "@/components/VisitorCount";
import heroBg from "@/assets/hero.webp";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[572px] sm:min-h-[75vh] flex items-center justify-center text-white overflow-hidden"
    >
      {/* พื้นหลังภาพเบลอและขยับขึ้นเล็กน้อยให้โลโก้ชัดเจน */}
      <div
        className="absolute inset-0 bg-cover bg-[center_top_20%] opacity-25 blur-sm"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* เนื้อหาหลัก */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* โลโก้แยกบรรทัด */}
        <div className="mb-6">
          <h1 className="text-6xl sm:text-7xl font-extrabold drop-shadow-xl tracking-tight leading-tight">
            JP
          </h1>
          <p className="text-xl sm:text-2xl text-white/80 tracking-widest font-light uppercase">
            Visual & Docs
          </p>
        </div>

        {/* คำอธิบาย */}
        <div className="max-w-2xl mx-auto">
          <p className="mt-1 text-lg sm:text-xl text-white/90 font-light">
            ทำให้เรื่องเอกสารและการจัดการระบบของคุณง่ายขึ้น
          </p>
          <p className="mt-2 text-sm sm:text-base text-white/80">
            ศูนย์บริการเอกสาร การเงิน โปรไฟล์ และระบบหลังบ้านครบวงจร
          </p>
        </div>

        {/* ปุ่มเข้าสู่ระบบลับ */}
        <div className="mt-10">
          <Link
            to="/login"
            className="inline-flex items-center gap-2 bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            <FaLock className="text-lg" />
            เข้าสู่ระบบลับ
          </Link>
          <p className="mt-2 text-xs text-white/60">สำหรับผู้ใช้งานพิเศษ</p>
        </div>

        {/* จำนวนผู้เยี่ยมชม */}
        <div className="mt-6">
          <VisitorCount min={1200} max={3000} />
        </div>
      </div>
    </section>
  );
};

export default Hero;