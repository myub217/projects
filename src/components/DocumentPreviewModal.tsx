// src/components/DocumentPreviewModal.tsx

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
  id = "document-preview-modal",
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
      if (event.key === "Tab") {
        const focusables = modalRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables || focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (event.shiftKey) {
          if (document.activeElement === first) {
            event.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            event.preventDefault();
            first.focus();
          }
        }
      }
    }

    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && closeButtonRef.current) closeButtonRef.current.focus();
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      id={id}
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`${id}-title`}
      tabIndex={-1}
      className="modal-overlay"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        role="document"
        className="animate-fade-in modal-box max-h-[90vh] w-full max-w-5xl"
      >
        {/* Header */}
        <header className="modal-header">
          <h2 id={`${id}-title`}>{title}</h2>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="ปิดหน้าต่างแสดงตัวอย่างเอกสาร"
            className="modal-close-button"
          >
            &times;
          </button>
        </header>

        {/* Content */}
        <main className="modal-content">
          <iframe
            src={documentUrl}
            title={title}
            className="h-full min-h-[500px] w-full"
            loading="lazy"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
        </main>
      </div>
    </div>
  );
};

export default DocumentPreviewModal;