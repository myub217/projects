import React, { useEffect, useRef } from "react";

interface DocumentPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  documentUrl: string;
  title: string;
  id?: string;
}

const DocumentPreviewModal: React.FC<DocumentPreviewModalProps> = ({
  isOpen,
  onClose,
  documentUrl,
  title,
  id,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // ปิด modal เมื่อกด Escape
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // โฟกัสแรกเมื่อ modal เปิด
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={`${id}-title`}
      tabIndex={-1}
      ref={modalRef}
      id={id}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      onClick={(e) => {
        // ปิด modal เมื่อคลิกรอบๆ
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden">
        <header className="flex justify-between items-center p-4 border-b border-gray-300 dark:border-gray-700">
          <h3 id={`${id}-title`} className="text-lg font-semibold">
            {title}
          </h3>
          <button
            onClick={onClose}
            aria-label="ปิด"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            ✕
          </button>
        </header>
        <main className="flex-1 overflow-auto">
          <iframe
            src={documentUrl}
            title={title}
            className="w-full h-full border-0"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
        </main>
      </div>
    </div>
  );
};

export default DocumentPreviewModal;