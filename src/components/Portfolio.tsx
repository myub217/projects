import React, { useEffect, useState, useRef } from "react";

interface WorkItem {
  id: number;
  title: string;
  description: string;
  images: string[];
  moreInfo?: string;
}

const works: WorkItem[] = [
  {
    id: 1,
    title: "การยื่นกู้สำเร็จ",
    description: "ช่วยลูกค้ายื่นกู้ผ่านระบบได้อย่างรวดเร็วและปลอดภัย",
    images: ["/images/portfolio-loan1.jpg", "/images/portfolio-loan2.jpg"],
    moreInfo:
      "โครงการยื่นกู้พร้อมเอกสารครบถ้วนและการติดตามผลอย่างใกล้ชิด ทำให้ได้รับอนุมัติเร็วขึ้นภายใน 14 วัน",
  },
  {
    id: 2,
    title: "วีซ่าแบบพิเศษ",
    description: "บริการยื่นขอวีซ่าระยะยาว พร้อมให้คำปรึกษาแบบตัวต่อตัว",
    images: ["/images/portfolio-visa.jpg"],
    moreInfo:
      "ประสบการณ์ช่วยลูกค้าผ่านกระบวนการวีซ่าต่างประเทศอย่างมืออาชีพ โดยไม่ต้องเดินทางหลายรอบ",
  },
  {
    id: 3,
    title: "จัดทำโปรไฟล์และเอกสาร",
    description: "จัดทำโปรไฟล์ธุรกิจและเอกสารทางการเงินอย่างครบถ้วน",
    images: ["/images/portfolio-docs.jpg", "/images/portfolio-docs2.jpg"],
    moreInfo:
      "ออกแบบเอกสารให้ดูเป็นมืออาชีพ เน้นความชัดเจนและครบถ้วน เพื่อเพิ่มความน่าเชื่อถือในการยื่นเรื่อง",
  },
];

const Portfolio: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const modalRef = useRef<HTMLDivElement>(null);
  const lastFocusedElement = useRef<HTMLElement | null>(null);

  const closeModal = () => {
    setModalOpen(false);
    setSelectedWork(null);
    setCurrentImageIndex(0);
    if (lastFocusedElement.current) lastFocusedElement.current.focus();
  };

  const openModal = (work: WorkItem) => {
    lastFocusedElement.current = document.activeElement as HTMLElement;
    setSelectedWork(work);
    setCurrentImageIndex(0);
    setModalOpen(true);
  };

  // ปุ่ม ESC และลูกศรใน modal
  useEffect(() => {
    if (!modalOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeModal();
      }

      if (!selectedWork) return;

      if (e.key === "ArrowRight") {
        e.preventDefault();
        setCurrentImageIndex((i) =>
          i + 1 < selectedWork.images.length ? i + 1 : 0
        );
      }

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setCurrentImageIndex((i) =>
          i - 1 >= 0 ? i - 1 : selectedWork.images.length - 1
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [modalOpen, selectedWork]);

  // Focus trap ใน modal
  useEffect(() => {
    if (!modalOpen || !modalRef.current) return;

    const focusableSelectors =
      'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable]';
    const focusableElements = Array.from(
      modalRef.current.querySelectorAll<HTMLElement>(focusableSelectors)
    );

    if (focusableElements.length === 0) return;

    const firstEl = focusableElements[0];
    const lastEl = focusableElements[focusableElements.length - 1];

    const trapFocus = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };

    firstEl.focus();
    window.addEventListener("keydown", trapFocus);

    return () => {
      window.removeEventListener("keydown", trapFocus);
    };
  }, [modalOpen]);

  const nextImage = () => {
    if (!selectedWork) return;
    setCurrentImageIndex((i) =>
      i + 1 < selectedWork.images.length ? i + 1 : 0
    );
  };

  const prevImage = () => {
    if (!selectedWork) return;
    setCurrentImageIndex((i) =>
      i - 1 >= 0 ? i - 1 : selectedWork.images.length - 1
    );
  };

  return (
    <section
      id="portfolio"
      className="max-w-6xl mx-auto mt-24 px-6 pb-16"
      aria-label="ผลงานของเรา"
    >
      <h2 className="text-center text-4xl font-extrabold text-red-600 mb-12 tracking-wide">
        ผลงานของเรา
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {works.map((work) => (
          <div
            key={work.id}
            role="button"
            tabIndex={0}
            onClick={() => openModal(work)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") openModal(work);
            }}
            aria-label={`เปิดดูรายละเอียดผลงาน: ${work.title}`}
            className="cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-transform transform hover:scale-[1.03] bg-white dark:bg-gray-900"
          >
            <img
              src={work.images[0]}
              alt={`ภาพผลงาน: ${work.title}`}
              loading="lazy"
              draggable={false}
              className="w-full h-52 object-cover select-none"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {work.title}
              </h3>
              <p className="mt-1 text-gray-700 dark:text-gray-300">
                {work.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && selectedWork && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeModal}
        >
          <div
            ref={modalRef}
            role="document"
            className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              aria-label="ปิดหน้าต่างแสดงตัวอย่าง"
              className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 hover:text-red-600 text-3xl font-bold leading-none focus:outline-none"
            >
              &times;
            </button>

            {/* Carousel */}
            <div className="relative flex-1 flex items-center justify-center bg-black">
              {selectedWork.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    aria-label="ภาพก่อนหน้า"
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-80"
                  >
                    &#8249;
                  </button>
                  <button
                    onClick={nextImage}
                    aria-label="ภาพถัดไป"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-80"
                  >
                    &#8250;
                  </button>
                </>
              )}
              <img
                src={selectedWork.images[currentImageIndex]}
                alt={`ภาพผลงาน: ${selectedWork.title} ภาพที่ ${
                  currentImageIndex + 1
                } จาก ${selectedWork.images.length}`}
                className="max-h-[70vh] w-auto max-w-full select-none"
                draggable={false}
              />
            </div>

            {/* รายละเอียด */}
            <div className="p-6 overflow-y-auto max-h-48">
              <h3
                id="modal-title"
                className="text-2xl font-bold text-red-600 mb-3"
              >
                {selectedWork.title}
              </h3>
              <p className="text-gray-800 dark:text-gray-200 whitespace-pre-line">
                {selectedWork.moreInfo || selectedWork.description}
              </p>
              {selectedWork.images.length > 1 && (
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-center">
                  ภาพที่ {currentImageIndex + 1} จาก{" "}
                  {selectedWork.images.length}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;