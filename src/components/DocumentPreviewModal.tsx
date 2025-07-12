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
  id = "document-preview-modal", // default id
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

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

  // โฟกัสปุ่มปิดเมื่อ modal เปิด
  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl max-w-5xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-fade-in"
        role="document"
      >
        {/* Header */}
        <header className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h2
            id={`${id}-title`}
            className="text-xl font-semibold text-gray-900 dark:text-white"
          >
            {title}
          </h2>
          <button
            onClick={onClose}
            ref={closeButtonRef}
            aria-label="ปิดหน้าต่างแสดงตัวอย่างเอกสาร"
            className="text-gray-600 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400 text-xl focus:outline-none focus:ring-2 focus:ring-red-400 rounded"
          >
            &times;
          </button>
        </header>

        {/* Iframe */}
        <main className="flex-1 overflow-auto">
          <iframe
            src={documentUrl}
            title={title}
            className="w-full h-full min-h-[500px] border-0"
            loading="lazy"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
        </main>
      </div>
    </div>
  );
};

export default DocumentPreviewModal;