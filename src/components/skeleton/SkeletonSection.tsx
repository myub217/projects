import React from "react";
import { motion } from "framer-motion";

interface SkeletonSectionProps {
  title?: string;
  className?: string; // ใส่คลาสเสริมได้
  style?: React.CSSProperties; // ใส่สไตล์เพิ่มเติมได้
  titleHeight?: string; // กำหนดความสูง skeleton title (เช่น "1.5rem")
  children?: React.ReactNode; // ถ้าอยากส่ง skeleton content เอง
}

const SkeletonSection: React.FC<SkeletonSectionProps> = ({
  title,
  className = "",
  style,
  titleHeight = "1.5rem",
  children,
}) => {
  return (
    <motion.section
      className={`animate-pulse space-y-4 p-6 rounded-xl bg-base-200 shadow ${className}`.trim()}
      style={style}
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
            className="bg-base-300 rounded-md mb-4"
            style={{ height: titleHeight, width: "33%" }}
            aria-hidden="true"
          />
        </header>
      )}

      <div aria-hidden="true" className="space-y-3">
        {children ?? (
          <>
            <div className="h-4 w-full bg-base-300 rounded-md" />
            <div className="h-4 w-5/6 bg-base-300 rounded-md" />
            <div className="h-4 w-2/3 bg-base-300 rounded-md" />
            <div className="h-4 w-1/2 bg-base-300 rounded-md" />
          </>
        )}
      </div>
    </motion.section>
  );
};

export default SkeletonSection;