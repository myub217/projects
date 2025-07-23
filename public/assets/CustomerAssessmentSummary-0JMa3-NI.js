import { j as e } from './vendor-Ccc7z4H6.js'
const l = ({ label: s, value: t }) =>
    e.jsxs('p', {
      className: 'mb-2 break-words text-sm text-gray-800 sm:text-base',
      children: [
        e.jsxs('strong', { className: 'text-gray-900', children: [s, ':'] }),
        ' ',
        e.jsx('span', { children: t?.trim() || '-' }),
      ],
    }),
  a = ({ label: s, value: t }) =>
    e.jsxs('div', {
      className: 'mb-6',
      children: [
        e.jsxs('p', {
          className: 'mb-1 text-sm font-semibold text-gray-900 sm:text-base',
          children: [s, ':'],
        }),
        e.jsx('p', {
          className:
            'whitespace-pre-wrap break-words rounded-md bg-gray-50 px-4 py-2 text-sm text-gray-800 shadow-inner ring-1 ring-gray-200 sm:text-base',
          children: t?.trim() || '-',
        }),
      ],
    }),
  i = ({ data: s }) =>
    e.jsxs('main', {
      role: 'main',
      'aria-label': 'สรุปข้อมูลประเมินลูกค้า',
      className:
        'mx-auto max-w-3xl rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-200 sm:p-8 print:bg-transparent print:shadow-none',
      tabIndex: -1,
      children: [
        e.jsx('h1', {
          className: 'mb-10 text-center text-2xl font-bold text-gray-900 sm:text-3xl',
          children: 'สรุปข้อมูลประเมินลูกค้า',
        }),
        e.jsxs('section', {
          'aria-labelledby': 'section-personal-info',
          className: 'mb-10',
          children: [
            e.jsx('h2', {
              id: 'section-personal-info',
              className: 'mb-4 text-xl font-semibold text-gray-700 sm:text-2xl',
              children: 'ข้อมูลส่วนตัว',
            }),
            e.jsxs('div', {
              className: 'space-y-2',
              children: [
                e.jsx(l, { label: 'ชื่อ-นามสกุล', value: s.fullName }),
                e.jsx(l, { label: 'เบอร์โทรศัพท์', value: s.phone }),
                e.jsx(l, { label: 'อาชีพ', value: s.occupation }),
                e.jsx(l, { label: 'รายได้โดยประมาณ', value: s.income }),
              ],
            }),
          ],
        }),
        e.jsxs('section', {
          'aria-labelledby': 'section-business-finance',
          className: 'mb-10',
          children: [
            e.jsx('h2', {
              id: 'section-business-finance',
              className: 'mb-4 text-xl font-semibold text-gray-700 sm:text-2xl',
              children: 'ธุรกิจ / การเงิน',
            }),
            e.jsx(a, { label: 'สินทรัพย์ค้ำประกัน / จำนอง', value: s.collateralAssets }),
            e.jsx(a, { label: 'สถานะบริหารธุรกิจ / การทำงาน', value: s.businessManagement }),
            e.jsx(l, { label: 'ยอดเงินที่ต้องการ', value: s.requestedAmount }),
          ],
        }),
        e.jsxs('section', {
          'aria-labelledby': 'section-history-needs',
          children: [
            e.jsx('h2', {
              id: 'section-history-needs',
              className: 'mb-4 text-xl font-semibold text-gray-700 sm:text-2xl',
              children: 'ประวัติและความต้องการ',
            }),
            e.jsx(a, { label: 'ประวัติการฟ้องร้องใน 3 ปีที่ผ่านมา', value: s.legalIssues }),
            e.jsx(a, { label: 'ปัญหาบูโรหรือ Blacklist', value: s.creditIssues }),
            e.jsx(a, { label: 'สิ่งที่ต้องการจากทีมงาน', value: s.teamRequirements }),
          ],
        }),
      ],
    })
export { i as default }
//# sourceMappingURL=CustomerAssessmentSummary-0JMa3-NI.js.map
