// src/components/DocumentRoom/PDFViewer.tsx

import React, { useRef, useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

interface PDFViewerProps {
  fileUrl: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ fileUrl }) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const viewerRef = useRef<HTMLDivElement>(null);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const nextPage = () => {
    setPageNumber((prev) => Math.min(prev + 1, numPages));
  };

  const prevPage = () => {
    setPageNumber((prev) => Math.max(prev - 1, 1));
  };

  useEffect(() => {
    viewerRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [pageNumber]);

  return (
    <div
      ref={viewerRef}
      className="w-full bg-base-100 p-4 sm:p-6 rounded-xl shadow-md border border-border overflow-hidden"
    >
      <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4">
        📄 ตัวอย่างเอกสาร PDF
      </h2>

      <div className="flex justify-center items-center border border-dashed border-base-300 rounded-lg p-3 bg-base-200 mb-4 overflow-x-auto">
        <Document
          file={fileUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<span className="loading loading-spinner text-primary" />}
          error={<div className="text-error">❌ โหลดไฟล์ PDF ไม่สำเร็จ</div>}
          noData={<div className="text-warning">⚠️ ไม่มีไฟล์ PDF</div>}
        >
          <Page
            pageNumber={pageNumber}
            width={viewerRef.current?.clientWidth ? viewerRef.current.clientWidth - 48 : 320}
            renderTextLayer={true}
            renderAnnotationLayer={true}
          />
        </Document>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-content">
          หน้า {pageNumber} จาก {numPages}
        </div>

        <div className="flex gap-2">
          <button
            onClick={prevPage}
            disabled={pageNumber <= 1}
            className="btn btn-sm btn-outline"
          >
            ⬅️ ก่อนหน้า
          </button>
          <button
            onClick={nextPage}
            disabled={pageNumber >= numPages}
            className="btn btn-sm btn-outline"
          >
            ถัดไป ➡️
          </button>
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;