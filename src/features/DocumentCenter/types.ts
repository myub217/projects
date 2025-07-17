// ✅ src/types/pdfDoc.ts – Interface สำหรับจัดการเอกสาร PDF ที่อัปโหลด

export interface PDFDoc {
  id: string; // 🔐 ใช้สำหรับ key และการจัดการเฉพาะเอกสาร
  name: string;
  file: File;
  url: string;
  uploadedAt: string; // 📅 วันที่อัปโหลด (ISO format)
}