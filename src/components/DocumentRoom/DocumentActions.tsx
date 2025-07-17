// src/components/DocumentRoom/DocumentActions.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

const DocumentActions: React.FC = () => {
  const navigate = useNavigate();

  const handleUploadClick = () => {
    navigate('/documents/form');
  };

  return (
    <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 px-4 sm:px-0">
      <div className="text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-1">
          📁 จัดการเอกสาร
        </h2>
        <p className="text-sm text-muted-content">
          เพิ่มไฟล์ PDF ใหม่ หรือจัดการกับรายการเอกสารของคุณได้จากที่นี่
        </p>
      </div>

      <button
        onClick={handleUploadClick}
        className="btn btn-primary w-full sm:w-auto"
      >
        ➕ เพิ่มเอกสารใหม่
      </button>
    </div>
  );
};

export default DocumentActions;