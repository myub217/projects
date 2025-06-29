// src/layout/Layout.tsx
import React, { useEffect, useState, useCallback, ReactNode } from "react";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import VisitorCount from "@/components/VisitorCount";

type LayoutProps = {
  children: ReactNode;
  className?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, className = "" }) => {
  // 🧠 State สำหรับควบคุมการแสดง VisitorCount
  const [isScrolled, setIsScrolled] = useState(false);

  // 📦 ใช้ useCallback เพื่อป้องกันการสร้างฟังก์ชันใหม่ทุก render
  const handleScroll = useCallback(() => {
    if (typeof window === "undefined") return; // ป้องกัน SSR error
    const scrolled = window.scrollY > 100;
    setIsScrolled(scrolled);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return; // ป้องกัน SSR error

    // 🎯 ติดตาม scroll ทันทีที่ component mount
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // ตรวจสอบ scroll ตอนแรก

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      className={`min-h-screen flex flex-col bg-white dark:bg-gray-900 ${className}`}
    >
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      {isScrolled && <VisitorCount />}
    </div>
  );
};

export default Layout;