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

const DocumentSummaryPanel: React.FC<DocumentSummaryPanelProps> = ({ report }) => {
  const {
    documentCount = 0,
    submittedForms = 0,
    pendingRequests = 0,
    lastDocumentStatus = "ไม่ทราบสถานะ",
  } = report;

  return (
    <section
      className="grid sm:grid-cols-2 gap-4 mb-8"
      aria-label="รายงานสรุป"
    >
      <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md shadow">
        <h2 className="font-semibold text-sm text-gray-800 dark:text-white mb-2">
          📊 รายงานสรุปผลการดำเนินงาน
        </h2>
        <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
          <li>จำนวนเอกสารทั้งหมด: {documentCount || "ไม่มีข้อมูล"}</li>
          <li>แบบฟอร์มที่ได้ส่งแล้ว: {submittedForms || "ไม่มีข้อมูล"}</li>
          <li>คำขอที่รอดำเนินการ: {pendingRequests || "ไม่มีข้อมูล"}</li>
          <li>สถานะล่าสุดของเอกสาร: {lastDocumentStatus}</li>
        </ul>
      </div>
    </section>
  );
};

export default DocumentSummaryPanel;