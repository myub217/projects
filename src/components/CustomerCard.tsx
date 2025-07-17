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
      <div className="w-full animate-pulse rounded-2xl border border-base-300 bg-base-100 p-6 shadow-md">
        <div className="mb-4 h-6 w-3/4 rounded bg-base-300" />
        <div className="space-y-3">
          <div className="h-4 w-1/2 rounded bg-base-300" />
          <div className="h-4 w-2/3 rounded bg-base-300" />
        </div>
        <div className="mt-5 h-5 w-24 rounded-full bg-base-300" />
      </div>
    );
  }

  if (!customer) return null;

  return (
    <div
      className="flex flex-col justify-between rounded-2xl border border-base-300 bg-base-100 p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-base-200"
      role="group"
      aria-label={`ลูกค้า: ${customer.name}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <h3 className="text-lg font-bold text-primary truncate">{customer.name}</h3>
        <span
          className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${getStatusBadgeStyle(
            customer.status
          )}`}
          role="status"
        >
          {getStatusIcon(customer.status)} {customer.status}
        </span>
      </div>

      <div className="mt-5 space-y-4 text-sm text-base-content/80">
        <div className="flex items-start gap-3">
          <FaFileAlt className="mt-1 shrink-0 text-blue-500" />
          <p className="leading-snug break-words">
            <span className="font-semibold">บริการ:</span>{' '}
            {customer.documentTitle || 'จัดการเอกสารทั่วไป'}
          </p>
        </div>

        <div className="flex items-start gap-3">
          <FaCalendarCheck className="mt-1 shrink-0 text-teal-500" />
          <p className="leading-snug break-words">
            <span className="font-semibold">อัปเดตล่าสุด:</span>{' '}
            {formatDate(customer.receivedDate)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;