// src/components/CustomerCard.tsx

import React from 'react';
import { CustomerApproval } from '../data/approvedCustomers';
import {
  FaUserCheck,
  FaClock,
  FaTimesCircle,
  FaFileAlt,
  FaCalendarCheck,
} from 'react-icons/fa';

interface CustomerCardProps {
  customer?: CustomerApproval;
  loading?: boolean;
}

const formatDate = (date: string): string =>
  new Date(date).toLocaleDateString('th-TH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

const getStatusBadgeStyle = (status: string): string => {
  switch (status) {
    case 'เสร็จสมบูรณ์':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
    case 'กำลังดำเนินการ':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
    case 'ยกเลิกแล้ว':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
  }
};

const getStatusIcon = (status: string): JSX.Element | null => {
  switch (status) {
    case 'เสร็จสมบูรณ์':
      return <FaUserCheck className="mr-1 inline text-green-600" />;
    case 'กำลังดำเนินการ':
      return <FaClock className="mr-1 inline text-yellow-500" />;
    case 'ยกเลิกแล้ว':
      return <FaTimesCircle className="mr-1 inline text-red-500" />;
    default:
      return null;
  }
};

const CustomerCard: React.FC<CustomerCardProps> = ({ customer, loading = false }) => {
  if (loading) {
    return (
      <div className="animate-pulse rounded-xl border border-gray-200 bg-white p-5 shadow dark:border-gray-700 dark:bg-gray-800">
        <div className="mb-4 h-6 w-3/4 rounded bg-gray-300 dark:bg-gray-600" />
        <div className="space-y-2">
          <div className="h-4 w-1/2 rounded bg-gray-300 dark:bg-gray-600" />
          <div className="h-4 w-2/3 rounded bg-gray-300 dark:bg-gray-600" />
        </div>
        <div className="mt-4 h-5 w-20 rounded-full bg-gray-300 dark:bg-gray-600" />
      </div>
    );
  }

  if (!customer) return null;

  return (
    <div
      className="rounded-xl border border-gray-200 bg-white p-5 shadow transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
      role="group"
      aria-label={`ลูกค้า: ${customer.name}`}
    >
      <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">{customer.name}</h3>

      <div className="mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300">
        <p>
          <FaFileAlt className="mr-1 inline text-blue-500" />
          <strong>บริการ:</strong>{' '}
          <span className="text-base font-semibold">
            {customer.documentTitle || 'จัดการเอกสารทั่วไป'}
          </span>
        </p>
        <p>
          <FaCalendarCheck className="mr-1 inline text-teal-500" />
          <strong>อัปเดตล่าสุด:</strong>{' '}
          <span className="text-base font-medium">{formatDate(customer.receivedDate)}</span>
        </p>
      </div>

      <div className="mt-4">
        <span
          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${getStatusBadgeStyle(
            customer.status
          )}`}
          role="status"
        >
          {getStatusIcon(customer.status)} {customer.status}
        </span>
      </div>
    </div>
  );
};

export default CustomerCard;