// src/components/DocumentRoom/DocumentCard.tsx

import React from 'react';
import { DocumentItem } from '@data/documentsList';

const DocumentCard: React.FC<DocumentItem> = ({
  id,
  title,
  fileUrl,
  issueDate,
  validUntil,
  issuedBy,
  note,
}) => {
  return (
    <a
      href={fileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-base-100 border border-border rounded-xl p-4 hover:shadow-lg transition w-full block"
    >
      <h3 className="text-lg font-semibold text-primary mb-1 line-clamp-2">
        📄 {title}
      </h3>

      <p className="text-xs text-muted-content mb-2">รหัสเอกสาร: <span className="font-medium">{id}</span></p>

      <div className="text-sm text-base-content space-y-1">
        <p>
          🗓️ วันที่ออก: <span className="font-medium">{issueDate}</span>
        </p>
        {validUntil && (
          <p>
            ⏳ ใช้ได้ถึง: <span className="font-medium">{validUntil}</span>
          </p>
        )}
        <p>
          🏢 หน่วยงานผู้ออก: <span className="font-medium">{issuedBy}</span>
        </p>
      </div>

      {note && (
        <p className="text-xs text-muted-content italic mt-3">
          📌 {note}
        </p>
      )}
    </a>
  );
};

export default DocumentCard;