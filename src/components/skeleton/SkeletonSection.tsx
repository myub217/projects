// src/components/skeleton/SkeletonSection.tsx
import React from "react";
import { motion } from "framer-motion";

interface SkeletonSectionProps {
  title?: string;
  className?: string; // เพิ่ม option ให้ใส่คลาสเสริมได้
}

const SkeletonSection: React.FC<SkeletonSectionProps> = ({ title, className }) => {
  return (
    <motion.section
      className={`animate-pulse space-y-4 p-6 rounded-xl bg-base-200 shadow ${className ?? ""}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="status"
      aria-busy="true"
      aria-live="polite"
      aria-label={title ? `กำลังโหลดข้อมูลส่วน: ${title}` : "กำลังโหลดเนื้อหา"}
      tabIndex={-1} // ไม่ให้โฟกัส
    >
      {title && (
        <header>
          <div
            className="h-6 w-1/3 bg-base-300 rounded-md mb-4"
            aria-hidden="true" // ไม่จำเป็นต้องให้สกรีนรีดเดอร์อ่าน
          />
        </header>
      )}

      <div className="space-y-3" aria-hidden="true">
        <div className="h-4 w-full bg-base-300 rounded-md" />
        <div className="h-4 w-5/6 bg-base-300 rounded-md" />
        <div className="h-4 w-2/3 bg-base-300 rounded-md" />
        <div className="h-4 w-1/2 bg-base-300 rounded-md" />
      </div>
    </motion.section>
  );
};

export default SkeletonSection;