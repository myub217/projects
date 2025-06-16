import React from "react";
import { motion, MotionProps } from "framer-motion";

interface SkeletonSectionProps extends Partial<MotionProps> {
  title?: string;
  className?: string;
  style?: React.CSSProperties;
  titleHeight?: string;
  titleWidth?: string;
  children?: React.ReactNode;
  /**
   * ค่า aria-live สำหรับ screen reader,
   * ค่าเริ่มต้นคือ polite,
   * ถ้าต้องการให้รีบแจ้ง (assertive) ก็ส่ง 'assertive' มาได้
   */
  ariaLive?: "off" | "polite" | "assertive";
  /**
   * เปิด/ปิด animation pulse,
   * ถ้า false จะเป็นสถานะ static
   */
  pulse?: boolean;
}

const SkeletonSection: React.FC<SkeletonSectionProps> = ({
  title,
  className = "",
  style,
  titleHeight = "1.5rem",
  titleWidth = "33%",
  children,
  ariaLive = "polite",
  pulse = true,
  initial,
  animate,
  exit,
  ...motionProps
}) => {
  // ค่าเริ่มต้น motion animation (ถ้าไม่ส่งมา)
  const defaultMotion = {
    initial: initial ?? { opacity: 0 },
    animate: animate ?? { opacity: 1 },
    exit: exit ?? { opacity: 0 },
  };

  return (
    <motion.section
      className={`
        ${pulse ? "animate-pulse" : ""}
        space-y-4 p-6 rounded-xl
        bg-base-200 dark:bg-base-700
        shadow
        ${className}
      `.trim()}
      style={style}
      role="status"
      aria-busy="true"
      aria-live={ariaLive}
      aria-label={title ? `กำลังโหลดข้อมูลส่วน: ${title}` : "กำลังโหลดเนื้อหา"}
      tabIndex={-1}
      {...defaultMotion}
      {...motionProps}
    >
      {title && (
        <header>
          <div
            className="bg-base-300 dark:bg-base-500 rounded-md mb-4"
            style={{ height: titleHeight, width: titleWidth }}
            aria-hidden="true"
          />
        </header>
      )}

      <div aria-hidden="true" className="space-y-3">
        {children ?? (
          <>
            <div className="h-4 w-full bg-base-300 dark:bg-base-500 rounded-md" />
            <div className="h-4 w-5/6 bg-base-300 dark:bg-base-500 rounded-md" />
            <div className="h-4 w-2/3 bg-base-300 dark:bg-base-500 rounded-md" />
            <div className="h-4 w-1/2 bg-base-300 dark:bg-base-500 rounded-md" />
          </>
        )}
      </div>
    </motion.section>
  );
};

export default SkeletonSection;