import React from "react";

interface Report {
  documentCount: number;
  submittedForms: number;
  pendingRequests: number;
  lastDocumentStatus: string;
}

interface DocumentSummaryPanelProps {
  report: Report;
}

/**
 * Component: รายงานสรุปผลการดำเนินงานเอกสาร
 * แสดงสถิติเอกสารในระบบ พร้อมสถานะล่าสุด
 * 
 * Accessibility:
 * - ใช้ aria-label เพื่อระบุชัดเจนสำหรับผู้ใช้ screen reader
 * - โครงสร้างชัดเจน มีหัวข้อและรายการ
 * 
 * Design:
 * - ใช้ TailwindCSS รองรับ dark mode
 * - แสดงข้อความ fallback หากข้อมูลว่าง
 * - ปรับปรุงการจัด layout ให้รองรับ grid อย่างเหมาะสมสำหรับ responsive
 * 
 * Performance:
 * - ไม่มี state หรือ side-effect ภายใน component ทำให้ render ได้รวดเร็ว
 */
const DocumentSummaryPanel: React.FC<DocumentSummaryPanelProps> = ({ report }) => {
  // กำหนดค่า default fallback สำหรับข้อมูลที่อาจเป็น 0 หรือ undefined
  const documentCount = report.documentCount ?? 0;
  const submittedForms = report.submittedForms ?? 0;
  const pendingRequests = report.pendingRequests ?? 0;
  const lastDocumentStatus = report.lastDocumentStatus || "ไม่ทราบสถานะ";

  return (
    <section
      className="mb-8 grid gap-4 sm:grid-cols-2"
      aria-label="รายงานสรุปผลการดำเนินงานเอกสาร"
    >
      <div
        className="rounded-md bg-gray-100 p-4 shadow transition-colors duration-300 dark:bg-gray-700"
        role="region"
        aria-live="polite"
      >
        <h2 className="mb-2 text-sm font-semibold text-gray-800 dark:text-white">
          📊 รายงานสรุปผลการดำเนินงาน
        </h2>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <li>
            จำนวนเอกสารทั้งหมด:{" "}
            {documentCount > 0 ? documentCount : <span className="italic text-gray-500">ไม่มีข้อมูล</span>}
          </li>
          <li>
            แบบฟอร์มที่ได้ส่งแล้ว:{" "}
            {submittedForms > 0 ? submittedForms : <span className="italic text-gray-500">ไม่มีข้อมูล</span>}
          </li>
          <li>
            คำขอที่รอดำเนินการ:{" "}
            {pendingRequests > 0 ? pendingRequests : <span className="italic text-gray-500">ไม่มีข้อมูล</span>}
          </li>
          <li>
            สถานะล่าสุดของเอกสาร:{" "}
            <span className="font-medium">{lastDocumentStatus}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default DocumentSummaryPanel;