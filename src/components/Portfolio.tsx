import React, { useEffect, useState } from "react";

const Portfolio: React.FC = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  // กด Escape เพื่อปิด preview/modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsPreviewOpen(false);
      }
    };

    if (isPreviewOpen) {
      document.body.style.overflow = "hidden"; // ป้องกัน scroll เมื่อเปิด modal
    } else {
      document.body.style.overflow = "";
    }

    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isPreviewOpen]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">ผลงานของเรา</h2>

      {/* ปุ่มเปิด preview */}
      <button
        onClick={() => setIsPreviewOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        ดูตัวอย่างผลงาน
      </button>

      {/* Modal Preview */}
      {isPreviewOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="preview-title"
          className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center overflow-y-auto"
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-xl w-full relative animate-fade-in transition-all">
            {/* ปุ่มปิด */}
            <button
              onClick={() => setIsPreviewOpen(false)}
              aria-label="ปิดหน้าต่างแสดงตัวอย่าง"
              className="absolute top-2 right-2 text-gray-600 dark:text-gray-300 hover:text-red-500 text-2xl"
            >
              &times;
            </button>

            <h3 id="preview-title" className="text-lg font-semibold mb-2">
              ตัวอย่างผลงาน
            </h3>
            <p className="text-gray-700 dark:text-gray-200">
              นี่คือตัวอย่างผลงานที่คุณสามารถแสดงได้ใน modal หรือ preview เช่น ภาพ, วิดีโอ, รายละเอียดโครงการ หรือรีวิวจากลูกค้า
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;