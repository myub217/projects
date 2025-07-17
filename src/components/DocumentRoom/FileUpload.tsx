// src/components/DocumentRoom/FileUpload.tsx

import React, { useRef, useState } from 'react';

const FileUpload: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== 'application/pdf') {
      setErrorMsg('❌ กรุณาเลือกไฟล์ PDF เท่านั้น');
      setFileName(null);
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setErrorMsg('❌ ไฟล์ใหญ่เกิน 10MB');
      setFileName(null);
      return;
    }

    setErrorMsg(null);
    setFileName(file.name);

    // 🔽 TODO: upload logic here
    console.log('📁 Uploading:', file.name);
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full bg-base-100 p-4 sm:p-6 rounded-xl shadow border border-border">
      <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 text-center sm:text-left">
        📤 อัปโหลดไฟล์ PDF
      </h2>

      <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-4">
        <button
          type="button"
          onClick={triggerFileSelect}
          className="btn btn-primary w-full sm:w-auto"
        >
          เลือกไฟล์ PDF
        </button>

        <input
          type="file"
          accept="application/pdf"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
        />

        {fileName && !errorMsg && (
          <div className="text-sm text-success w-full sm:w-auto truncate">
            ✅ เลือกแล้ว: <span className="font-medium">{fileName}</span>
          </div>
        )}

        {errorMsg && (
          <div className="text-sm text-error w-full sm:w-auto truncate">
            {errorMsg}
          </div>
        )}
      </div>

      <p className="mt-3 text-xs text-muted-content text-center sm:text-left">
        รองรับเฉพาะไฟล์ PDF ขนาดไม่เกิน 10MB
      </p>
    </div>
  );
};

export default FileUpload;