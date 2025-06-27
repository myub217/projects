// src/utils/documentUtils.ts
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const printDocument = () => {
  window.print();
};

export const downloadPdf = async (
  element: HTMLElement,
  filename: string = "document.pdf",
  scale: number = 2
) => {
  try {
    const canvas = await html2canvas(element, {
      scale,
      useCORS: true,
      allowTaint: true,
      scrollY: -window.scrollY,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    const finalWidth = imgWidth * ratio;
    const finalHeight = imgHeight * ratio;

    pdf.addImage(imgData, "PNG", 0, 0, finalWidth, finalHeight);
    pdf.save(filename);
  } catch (error) {
    console.error("Error generating PDF:", error);
    alert("เกิดข้อผิดพลาดในการดาวน์โหลด PDF โปรดลองใหม่อีกครั้ง");
  }
};