// ✅ src/utils/pdfHelper.ts – พร้อมใช้งาน สร้าง/เซฟ PDF ภาษาไทยด้วย @react-pdf/renderer + file-saver

import { saveAs } from 'file-saver';
import {
  pdf,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';
import React from 'react';

// ✅ Register ฟอนต์ภาษาไทย
Font.register({
  family: 'THSarabunNew',
  src: '/assets/fonts/THSarabunNew.ttf',
});

// ✅ สไตล์ PDF
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'THSarabunNew',
    fontSize: 16,
    lineHeight: 1.5,
  },
  section: {
    marginBottom: 12,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  label: {
    fontWeight: 'bold',
  },
  signature: {
    marginTop: 40,
    textAlign: 'right',
  },
});

// ✅ โครงสร้างข้อมูลเอกสาร
export interface CertificateData {
  employeeName: string;
  position: string;
  salary: string;
  issueDate: string;
  companyName: string;
  companyAddress: string;
  signerName: string;
  signerPosition: string;
}

// ✅ Template PDF
const SalaryCertificatePDF: React.FC<CertificateData> = ({
  employeeName,
  position,
  salary,
  issueDate,
  companyName,
  companyAddress,
  signerName,
  signerPosition,
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>หนังสือรับรองเงินเดือน</Text>
      </View>
      <View style={styles.section}>
        <Text>
          <Text style={styles.label}>บริษัท:</Text> {companyName}
        </Text>
        <Text>
          <Text style={styles.label}>ที่อยู่:</Text> {companyAddress}
        </Text>
      </View>
      <View style={styles.section}>
        <Text>
          ข้าพเจ้าในฐานะตัวแทนบริษัท ขอรับรองว่า {employeeName} ปฏิบัติงานในตำแหน่ง {position} และได้รับเงินเดือนประจำเดือนละ {salary} บาท
        </Text>
      </View>
      <View style={styles.section}>
        <Text>
          หนังสือฉบับนี้ออกให้เพื่อใช้เป็นหลักฐานประกอบการดำเนินการต่าง ๆ ตามความจำเป็น
        </Text>
      </View>
      <View style={styles.section}>
        <Text>
          <Text style={styles.label}>วันที่ออกหนังสือ:</Text> {issueDate}
        </Text>
      </View>
      <View style={styles.signature}>
        <Text>ลงชื่อ.....................................................</Text>
        <Text>{signerName}</Text>
        <Text>({signerPosition})</Text>
      </View>
    </Page>
  </Document>
);

// ✅ ฟังก์ชันสร้างและบันทึก PDF
export async function generateSalaryCertificatePDF(
  data: CertificateData,
  fileName: string = 'salary-certificate.pdf'
) {
  const blob = await pdf(<SalaryCertificatePDF {...data} />).toBlob();
  saveAs(blob, fileName);
}