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
      className="bg-base-100 border border-base-300 rounded-xl p-4 hover:shadow-md transition w-full block"
    >
      <h3 className="text-base font-semibold text-primary mb-1 line-clamp-2">{title}</h3>
      <p className="text-xs text-muted-content truncate">รหัส: {id}</p>

      <div className="mt-2 text-xs space-y-1 text-base-content">
        <p>
          🗓️ ออกเมื่อ: <span className="font-medium">{issueDate}</span>
        </p>
        {validUntil && (
          <p>
            📅 ใช้ได้ถึง: <span className="font-medium">{validUntil}</span>
          </p>
        )}
        <p>
          🏢 ออกโดย: <span className="font-medium">{issuedBy}</span>
        </p>
        {note && (
          <p className="text-muted-content mt-1 italic">📌 {note}</p>
        )}
      </div>
    </a>
  );
};

export default DocumentCard;