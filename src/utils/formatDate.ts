// src/utils/formatDate.ts
// Utility to format Date objects or date strings to readable Thai date format

export function formatDate(
  input: Date | string | number,
  options?: Intl.DateTimeFormatOptions,
  locale = 'th-TH'
): string {
  const date = input instanceof Date ? input : new Date(input)
  if (isNaN(date.getTime())) return 'วันที่ไม่ถูกต้อง'

  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  }

  return date.toLocaleDateString(locale, defaultOptions)
}
