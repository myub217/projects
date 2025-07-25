// <src/config/salaryCertificateConfig.ts>
// ✅ config กลางของบริษัท ใช้สำหรับเอกสารใบรับรองเงินเดือน/ราชการ

export interface CompanyInfo {
  name: string;
  logoUrl?: string;
  address: string;
  phone: string;
  taxId: string;
  hrManager: {
    fullName: string;
    email?: string;
    phone?: string;
  };
}

// ✅ ค่าเริ่มต้น mock สำหรับใช้งานแสดงผลจริง
export const defaultCompanyInfo: CompanyInfo = {
  name: 'บริษัท เทคโนโลยีเพื่อธุรกิจ จำกัด',
  logoUrl: '/assets/images/company-logo.png',
  address: `88/8 อาคารเทคโนเซ็นเตอร์ ชั้น 9\nถนนเทคโนโลยี แขวงธุรกิจ เขตไอที\nกรุงเทพมหานคร 10200`,
  phone: '02-888-9999',
  taxId: '0105546099999',
  hrManager: {
    fullName: 'นางสาว สุรีย์พร ทรัพย์เจริญ',
    email: 'hr@techbiz.co.th',
    phone: '02-888-9988',
  },
};
