// downloadHelpers.ts
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

/**
 * ดาวน์โหลดเนื้อหาจาก HTML element เป็นไฟล์ PNG หรือ PDF
 * @param element - อ้างอิงถึง HTMLElement ที่ต้องการจับภาพ
 * @param type - ประเภทไฟล์ที่ต้องการดาวน์โหลด: "png" หรือ "pdf"
 * @param fileName - ชื่อไฟล์ที่ต้องการบันทึก (ไม่ต้องใส่นามสกุล)
 */
export async function downloadElement(
  element: HTMLElement,
  type: "png" | "pdf",
  fileName: string = "document"
): Promise<void> {
  if (!element) {
    console.error("Element to capture not found");
    return;
  }

  try {
    // สร้าง canvas จาก element
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: false, // false เพื่อป้องกันปัญหา CORS และเพิ่มความปลอดภัย
      scrollY: -window.scrollY, // ป้องกันปัญหา scroll เวลา capture
      backgroundColor: "#ffffff", // กำหนดพื้นหลังเป็นสีขาว
    });

    if (type === "png") {
      // สร้างลิงก์ดาวน์โหลด PNG
      const link = document.createElement("a");
      link.download = `${fileName}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
      link.remove();
    } else if (type === "pdf") {
      // แปลง canvas เป็นภาพ
      const imgData = canvas.toDataURL("image/png");

      // สร้าง jsPDF instance ขนาด A4 แนวตั้ง (210x297 mm)
      const pdf = new jsPDF("p", "mm", "a4");

      const pdfWidth = 210;
      const pdfHeight = 297;

      // ขนาดจริงของ canvas
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;

      // คำนวณอัตราส่วนขนาดภาพให้พอดีกับขนาด PDF
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);

      const finalWidth = imgWidth * ratio;
      const finalHeight = imgHeight * ratio;

      // เพิ่มภาพลงใน PDF
      pdf.addImage(imgData, "PNG", 0, 0, finalWidth, finalHeight);

      // บันทึกไฟล์ PDF
      pdf.save(`${fileName}.pdf`);
    } else {
      throw new Error("Unsupported download type");
    }
  } catch (error) {
    console.error("Error during download:", error);
    alert("เกิดข้อผิดพลาดในการดาวน์โหลดเอกสาร โปรดลองอีกครั้ง");
  }
}