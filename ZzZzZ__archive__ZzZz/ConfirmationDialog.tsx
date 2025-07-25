// src/components/ConfirmationDialog.tsx
// ✅ Accessible, theme-aware confirmation dialog (Tailwind + DaisyUI)
// Props: open, title, message, onConfirm, onCancel, loading state, customizable buttons

import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';

interface ConfirmationDialogProps {
  open: boolean;
  title?: string;
  message: string | React.ReactNode;
  loading?: boolean;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  open,
  title = 'ยืนยัน',
  message,
  loading = false,
  confirmText = 'ตกลง',
  cancelText = 'ยกเลิก',
  onConfirm,
  onCancel,
}) => {
  const cancelButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open && cancelButtonRef.current) {
      cancelButtonRef.current.focus();
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirmation-dialog-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onCancel}
    >
      <div
        className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900"
        onClick={(e) => e.stopPropagation()}
      >
        <h2
          id="confirmation-dialog-title"
          className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100"
        >
          {title}
        </h2>

        <div className="mb-6 text-gray-700 dark:text-gray-300">{message}</div>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            className={clsx(
              'btn btn-outline btn-sm',
              loading
                ? 'cursor-not-allowed opacity-50'
                : 'hover:bg-gray-100 dark:hover:bg-gray-800',
            )}
            onClick={onCancel}
            disabled={loading}
            ref={cancelButtonRef}
          >
            {cancelText}
          </button>
          <button
            type="button"
            className={clsx(
              'btn btn-primary btn-sm',
              loading ? 'loading cursor-not-allowed' : '',
            )}
            onClick={onConfirm}
            disabled={loading}
            aria-disabled={loading}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
