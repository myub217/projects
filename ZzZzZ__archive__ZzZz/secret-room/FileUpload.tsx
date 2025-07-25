// src/components/common/FileUpload.tsx
// ✅ คอมโพเนนต์อัปโหลดไฟล์ พร้อมแสดงชื่อไฟล์ที่เลือก รองรับ multiple และ accessibility ครบถ้วน

import React, { useState } from 'react';

interface FileUploadProps {
  'onFileSelect': (files: File[] | File | null) => void;
  'accept'?: string;
  'multiple'?: boolean;
  'disabled'?: boolean;
  'aria-label'?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  onFileSelect,
  accept = '*/*',
  multiple = false,
  disabled = false,
  'aria-label': ariaLabel = 'อัปโหลดไฟล์',
}) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) {
      setSelectedFiles([]);
      onFileSelect(null);
      return;
    }

    const filesArray = Array.from(files);
    setSelectedFiles(filesArray);
    onFileSelect(multiple ? filesArray : filesArray[0]);
  };

  return (
    <section
      aria-label={ariaLabel}
      className="mx-auto max-w-md rounded-lg bg-base-200 p-4 shadow-md focus-within:ring-2 focus-within:ring-primary"
    >
      <label
        htmlFor="fileUpload"
        className="mb-2 block cursor-pointer select-none font-semibold text-base-content transition-colors hover:text-primary"
      >
        เลือกไฟล์เอกสาร (PDF, DOCX, JPG, PNG ฯลฯ)
      </label>

      <input
        id="fileUpload"
        type="file"
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        onChange={handleFileChange}
        className="file-input file-input-bordered w-full"
        aria-describedby="fileHelp"
        aria-multiselectable={multiple}
      />

      <p
        id="fileHelp"
        className="mt-2 select-text truncate text-sm text-base-content/70"
        aria-live="polite"
        aria-atomic="true"
      >
        {selectedFiles.length > 0
          ? `📎 ไฟล์ที่เลือก: ${selectedFiles.map((f) => f.name).join(', ')}`
          : 'ยังไม่ได้เลือกไฟล์'}
      </p>
    </section>
  );
};

export default FileUpload;
