// src/components/Feature.tsx

import React, { useState, useMemo } from 'react';
import CustomerAssessmentForm from './CustomerAssessmentForm';
import { approvedCustomers, CustomerApproval } from '../data/approvedCustomers';
import CustomerCard from './CustomerCard';
import { FaSortAmountDownAlt, FaListUl, FaFileSignature } from 'react-icons/fa';

type SortOrder = 'ล่าสุด' | 'สถานะ';

const Feature: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [sortOrder, setSortOrder] = useState<SortOrder>('ล่าสุด');

  const customers = approvedCustomers;

  const sortedCustomers = useMemo(() => {
    const copy = [...customers];
    switch (sortOrder) {
      case 'สถานะ':
        return copy.sort((a, b) =>
          a.status === b.status ? 0 : a.status === 'เสร็จสมบูรณ์' ? -1 : 1
        );
      case 'ล่าสุด':
      default:
        return copy.sort(
          (a, b) => new Date(b.receivedDate).getTime() - new Date(a.receivedDate).getTime()
        );
    }
  }, [customers, sortOrder]);

  return (
    <section
      id="feature"
      aria-labelledby="feature-heading"
      className="bg-gradient-to-br from-base-200 to-base-300 py-20 transition-colors dark:from-zinc-900 dark:to-zinc-800"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-12 max-w-2xl text-center">
          <h2
            id="feature-heading"
            className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl"
          >
            📁 งานที่เราได้ดูแลให้ลูกค้าแล้ว
          </h2>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
            เราช่วยวางแผน ตรวจเอกสาร และประสานงานกับหน่วยงานต่าง ๆ ให้ลูกค้าตั้งแต่ต้นจนจบ
          </p>
        </header>

        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* 🔸 Left Filter */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-600 dark:text-zinc-300">
            <div className="flex items-center gap-2">
              <FaListUl className="text-base text-zinc-500" />
              <span>
                ทั้งหมด <strong>{customers.length}</strong> รายการ
              </span>
            </div>

            <label className="inline-flex items-center gap-2">
              <FaSortAmountDownAlt />
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as SortOrder)}
                className="rounded border border-zinc-300 bg-white px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-800"
                aria-label="จัดเรียงรายการ"
              >
                <option value="ล่าสุด">ล่าสุด</option>
                <option value="สถานะ">สถานะ</option>
              </select>
            </label>
          </div>

          {/* 🔹 Right Buttons */}
          <div className="flex flex-wrap justify-start sm:justify-end gap-3">
            <button
              onClick={() => setShowForm((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white shadow transition hover:bg-blue-700 focus:ring-4 focus:ring-blue-400"
              aria-expanded={showForm}
              aria-controls="customer-assessment-form"
              type="button"
            >
              <FaFileSignature />
              {showForm ? 'ซ่อนแบบฟอร์ม' : 'ส่งคำขอให้เราช่วยดูแล'}
              <svg
                className={`h-4 w-4 transition-transform ${showForm ? 'rotate-180' : 'rotate-0'}`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <button
              onClick={() => alert('เปิดดูทั้งหมด')}
              className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-4 py-2 text-zinc-800 transition hover:bg-zinc-200 focus:ring-4 focus:ring-zinc-400 dark:bg-zinc-700 dark:text-white dark:hover:bg-zinc-600 dark:focus:ring-zinc-600"
              type="button"
            >
              <FaListUl />
              ดูทั้งหมด
            </button>
          </div>
        </div>

        {showForm ? (
          <div
            id="customer-assessment-form"
            className="mx-auto max-w-3xl rounded-xl border border-zinc-200 bg-white p-6 shadow-md dark:border-zinc-800 dark:bg-zinc-900"
            aria-live="polite"
            tabIndex={-1}
          >
            <CustomerAssessmentForm />
          </div>
        ) : (
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {sortedCustomers.map((customer) => (
              <li key={customer.id} className="h-full">
                <CustomerCard customer={customer} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Feature;