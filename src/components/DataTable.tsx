// src/components/DataTable.tsx
// ✅ Reusable, accessible data table with sorting, pagination, responsive & theme-aware (Tailwind + DaisyUI)

import React, { useState, useMemo } from 'react'
import clsx from 'clsx'

interface Column<T> {
  key: keyof T
  label: string
  sortable?: boolean
  width?: string | number
  render?: (item: T) => React.ReactNode
}

interface DataTableProps<T> {
  data: T[]
  columns: Column<T>[]
  initialSortKey?: keyof T
  initialSortOrder?: 'asc' | 'desc'
  rowsPerPageOptions?: number[]
  defaultRowsPerPage?: number
  className?: string
}

function DataTable<T extends Record<string, any>>({
  data,
  columns,
  initialSortKey,
  initialSortOrder = 'asc',
  rowsPerPageOptions = [5, 10, 25],
  defaultRowsPerPage = 10,
  className,
}: DataTableProps<T>) {
  const [sortKey, setSortKey] = useState<keyof T | undefined>(initialSortKey)
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>(initialSortOrder)
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage)

  const sortedData = useMemo(() => {
    if (!sortKey) return data

    const sorted = [...data].sort((a, b) => {
      const aValue = a[sortKey]
      const bValue = b[sortKey]

      if (aValue == null) return 1
      if (bValue == null) return -1

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortOrder === 'asc' ? aValue - bValue : bValue - aValue
      }

      return sortOrder === 'asc'
        ? String(aValue).localeCompare(String(bValue))
        : String(bValue).localeCompare(String(aValue))
    })

    return sorted
  }, [data, sortKey, sortOrder])

  const totalPages = Math.max(1, Math.ceil(sortedData.length / rowsPerPage))

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage
    return sortedData.slice(start, start + rowsPerPage)
  }, [sortedData, currentPage, rowsPerPage])

  const handleSort = (key: keyof T) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortKey(key)
      setSortOrder('asc')
    }
    setCurrentPage(1)
  }

  return (
    <div className={clsx('overflow-x-auto', className)}>
      <table className="min-w-full table-auto border-collapse border border-gray-200 dark:border-gray-700">
        <thead className="bg-base-200 dark:bg-base-300">
          <tr>
            {columns.map(({ key, label, sortable, width }) => (
              <th
                key={String(key)}
                scope="col"
                style={{ width }}
                className={clsx(
                  'cursor-pointer select-none whitespace-nowrap px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-200',
                  sortable && 'hover:text-primary'
                )}
                onClick={sortable ? () => handleSort(key) : undefined}
                aria-sort={
                  sortKey === key ? (sortOrder === 'asc' ? 'ascending' : 'descending') : 'none'
                }
                tabIndex={sortable ? 0 : undefined}
                onKeyDown={e => {
                  if (sortable && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault()
                    handleSort(key)
                  }
                }}
              >
                <div className="flex items-center gap-1">
                  <span>{label}</span>
                  {sortable && sortKey === key && (
                    <svg
                      className={clsx('h-4 w-4', {
                        'rotate-180': sortOrder === 'desc',
                      })}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.length === 0 && (
            <tr>
              <td
                colSpan={columns.length}
                className="select-none px-4 py-6 text-center text-sm text-gray-500 dark:text-gray-400"
              >
                ไม่มีข้อมูล
              </td>
            </tr>
          )}
          {paginatedData.map((item, idx) => (
            <tr
              key={idx}
              className={clsx(
                idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-base-100 dark:bg-gray-700',
                'border-b border-gray-200 dark:border-gray-600'
              )}
            >
              {columns.map(({ key, render }) => (
                <td
                  key={String(key)}
                  className="whitespace-nowrap px-4 py-2 text-sm text-gray-700 dark:text-gray-200"
                >
                  {render ? render(item) : String(item[key] ?? '')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination controls */}
      <div className="mt-3 flex flex-col items-center justify-between gap-3 sm:flex-row">
        <div className="select-none text-sm text-gray-600 dark:text-gray-300">
          หน้า {currentPage} จาก {totalPages}
        </div>

        <div className="flex items-center gap-2">
          <button
            className="btn btn-outline btn-primary btn-sm disabled:opacity-50"
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            aria-label="ย้อนกลับหน้า"
          >
            ก่อนหน้า
          </button>
          <button
            className="btn btn-outline btn-primary btn-sm disabled:opacity-50"
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            aria-label="ถัดไปหน้า"
          >
            ถัดไป
          </button>
        </div>

        <div className="flex select-none items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
          <label htmlFor="rowsPerPage" className="cursor-pointer select-none">
            แถวต่อหน้า:
          </label>
          <select
            id="rowsPerPage"
            className="input input-sm max-w-[5rem] cursor-pointer border border-gray-300 bg-white px-2 py-1 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
            value={rowsPerPage}
            onChange={e => {
              setRowsPerPage(Number(e.target.value))
              setCurrentPage(1)
            }}
            aria-label="เลือกจำนวนแถวต่อหน้า"
          >
            {rowsPerPageOptions.map(opt => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default DataTable
