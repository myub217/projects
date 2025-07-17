// ✅ src/components/DocumentItem.tsx – Card แสดง PDF พร้อมปุ่มดู / ดาวน์โหลด

import React from 'react';
import { PDFDoc } from '@/types/pdfDoc';

type Props = {
  doc: PDFDoc;
};

const DocumentItem: React.FC<Props> = ({ doc }) => {
  return (
    <div className="card bg-base-200 shadow-md p-4 rounded-xl flex flex-col gap-2">
      <h3 className="text-lg font-semibold text-primary">{doc.name}</h3>
      <p className="text-xs text-gray-500">📅 {doc.uploadedAt}</p>
      <div className="flex gap-2 mt-auto">
        <a
          href={doc.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm btn-outline"
        >
          👁️‍🗨️ ดู
        </a>
        <a href={doc.url} download className="btn btn-sm btn-primary">
          ⬇️ ดาวน์โหลด
        </a>
      </div>
    </div>
  );
};

export default DocumentItem;