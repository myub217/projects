// ✅ src/api/document.ts – Document API Module

import type { CustomerApproval } from '@/data/approvedCustomers';
import type { Service } from '@/data/servicesData';
import apiClient from './apiClient';

/**
 * 🧾 ดึงรายการเอกสารลูกค้าที่ได้รับการอนุมัติ (ใช้ใน Document Center)
 */
export const fetchApprovedDocuments = (): Promise<CustomerApproval[]> =>
  apiClient.apiFetch<CustomerApproval[]>('/documents/approved');

/**
 * 📝 ส่งเอกสารใหม่เข้าสู่ระบบ (admin-only)
 */
export const submitNewDocument = (data: {
  name: string;
  documentTitle: string;
  receivedDate: string;
  status: 'เสร็จสมบูรณ์' | 'กำลังดำเนินการ';
}): Promise<{ success: boolean; id: string }> =>
  apiClient.apiFetch('/documents/new', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

/**
 * 📄 ดึงรายละเอียด Service ตาม ID (สำหรับ modal popup หรือรายละเอียดเพิ่มเติม)
 */
export const fetchServiceDetail = (serviceId: number): Promise<Service> =>
  apiClient.apiFetch<Service>(`/services/${serviceId}`);

/**
 * 📦 Unified Export
 */
const documentApi = {
  fetchApprovedDocuments,
  submitNewDocument,
  fetchServiceDetail,
};

export default documentApi;