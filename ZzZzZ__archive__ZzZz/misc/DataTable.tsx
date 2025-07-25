// ✅ src/components/DataTable.tsx
// 📌 ตารางข้อมูลเรียบง่าย รองรับ TailwindCSS, Responsive และ Optional Action Column
// ✨ ปรับปรุงเพิ่ม accessibility, performance, และโค้ด readability

import React, { MouseEvent, KeyboardEvent } from 'react';

export interface TableColumn<T> {
  key: keyof T;
  label: string;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
  className?: string;
  headerClassName?: string;
  sortable?: boolean; // สำหรับอนาคต ถ้าจะเพิ่ม sort
}

interface DataTableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  onRowClick?: (row: T) => void;
  actionColumn?: (row: T) => React.ReactNode;
  className?: string;
  tableId?: string; // สำหรับ accessibility, id ของ table
}

const DataTable = <T,>({
  data,
  columns,
  onRowClick,
  actionColumn,
  className = '',
  tableId,
}: DataTableProps<T>) => {
  const handleRowClick = (e: MouseEvent<HTMLTableRowElement>, row: T) => {
    e.preventDefault();
    onRowClick?.(row);
  };

  const handleRowKeyDown = (e: KeyboardEvent<HTMLTableRowElement>, row: T) => {
    if (onRowClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onRowClick(row);
    }
  };

  return (
    <div
      className={`overflow-x-auto ${className}`}
      role="region"
      aria-labelledby={tableId ? `${tableId}-label` : undefined}
    >
      {tableId && (
        <span id={`${tableId}-label`} className="sr-only">
          ตารางข้อมูล
        </span>
      )}
      <table
        id={tableId}
        className="table table-zebra w-full rounded-md border border-gray-200 text-sm dark:border-gray-700"
        role="table"
      >
        <thead>
          <tr>
            {columns.map(({ key, label, headerClassName }) => (
              <th
                key={String(key)}
                className={`select-none px-3 py-2 text-left font-medium text-gray-700 dark:text-gray-300 ${
                  headerClassName || ''
                }`}
                scope="col"
              >
                {label}
              </th>
            ))}
            {actionColumn && (
              <th
                className="select-none px-3 py-2 text-center font-medium text-gray-700 dark:text-gray-300"
                scope="col"
              >
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length + (actionColumn ? 1 : 0)}
                className="p-4 text-center text-gray-500 dark:text-gray-400"
              >
                ไม่มีข้อมูล
              </td>
            </tr>
          ) : (
            data.map((row, idx) => (
              <tr
                key={idx}
                className={`${
                  onRowClick
                    ? 'cursor-pointer hover:bg-base-200 dark:hover:bg-gray-800'
                    : ''
                }`}
                tabIndex={onRowClick ? 0 : undefined}
                onClick={(e) => handleRowClick(e, row)}
                onKeyDown={(e) => handleRowKeyDown(e, row)}
                role={onRowClick ? 'button' : undefined}
                aria-label={onRowClick ? `เลือกแถวที่ ${idx + 1}` : undefined}
              >
                {columns.map(({ key, render, className: tdClass }) => (
                  <td
                    key={String(key)}
                    className={`px-3 py-2 align-top ${tdClass || ''}`}
                  >
                    {render ? render(row[key], row) : String(row[key] ?? '')}
                  </td>
                ))}
                {actionColumn && (
                  <td className="px-3 py-2 text-center align-top">
                    {actionColumn(row)}
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
