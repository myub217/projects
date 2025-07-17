// src/api/document.ts

/**
 * ✅ Document API Module
 * - สำหรับดึงข้อมูลเอกสารจาก backend
 * - ใช้ร่วมกับระบบแสดงเอกสารลูกค้า / ฝ่ายดูแลเอกสาร
 */

import type { CustomerApproval } from '@/data/approvedCustomers';
import type { Service } from '@/data/servicesData';
import apiClient from './apiClient';

/**
 * 🧾 ดึงเอกสารลูกค้าที่ได้รับการอนุมัติ
 */
export const fetchApprovedDocuments = (): Promise<CustomerApproval[]> =>
  apiClientFetch<CustomerApproval[]>('/documents/approved');

/**
 * 📝 เพิ่มเอกสารใหม่เข้าสู่ระบบ (admin เท่านั้น)
 */
export const submitNewDocument = (data: {
  name: string;
  documentTitle: string;
  receivedDate: string;
  status: 'เสร็จสมบูรณ์' | 'กำลังดำเนินการ';
}): Promise<{ success: boolean; id: string }> =>
  apiClientFetch('/documents/new', {
    method: 'POST',
    body: JSON.stringify(data),
  });

/**
 * 📄 ดึงข้อมูล service สำหรับ Modal
 */
export const fetchServiceDetail = (serviceId: number): Promise<Service> =>
  apiClientFetch<Service>(`/services/${serviceId}`);

/**
 * 🌐 ใช้ wrapper จาก apiClient
 */
function apiClientFetch<T>(...args: Parameters<typeof apiClient['getCurrentUser']>): Promise<T> {
  return (apiClient as any).apiFetch(...args);
}

/**
 * 📦 Unified Export
 */
const documentApi = {
  fetchApprovedDocuments,
  submitNewDocument,
  fetchServiceDetail,
};

export default documentApi;