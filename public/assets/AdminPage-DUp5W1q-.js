import { j as e, r as n } from './vendor-Ccc7z4H6.js'
const c = [
    {
      id: 1,
      title: 'ผู้ใช้งานทั้งหมด',
      value: 1234,
      icon: e.jsx('svg', {
        className: 'h-8 w-8 text-primary',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 2,
        viewBox: '0 0 24 24',
        'aria-hidden': 'true',
        focusable: 'false',
        children: e.jsx('path', {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M17 20h5v-2a3 3 0 00-5.356-1.857M9 20H4v-2a3 3 0 015.356-1.857M15 7a4 4 0 11-8 0 4 4 0 018 0z',
        }),
      }),
      colorClass: 'bg-primary/10 text-primary',
    },
    {
      id: 2,
      title: 'รายการแจ้งเตือน',
      value: 5,
      icon: e.jsx('svg', {
        className: 'h-8 w-8 text-accent',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 2,
        viewBox: '0 0 24 24',
        'aria-hidden': 'true',
        focusable: 'false',
        children: e.jsx('path', {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
        }),
      }),
      colorClass: 'bg-accent/10 text-accent',
    },
    {
      id: 3,
      title: 'สถานะระบบ',
      value: 'ออนไลน์',
      icon: e.jsx('svg', {
        className: 'h-8 w-8 text-green-500',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 2,
        viewBox: '0 0 24 24',
        'aria-hidden': 'true',
        focusable: 'false',
        children: e.jsx('path', {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M5 13l4 4L19 7',
        }),
      }),
      colorClass: 'bg-green-100 text-green-600',
    },
  ],
  d = () =>
    e.jsx('section', {
      role: 'region',
      'aria-label': 'สถิติโดยรวม',
      className: 'grid grid-cols-1 gap-6 sm:grid-cols-3',
      children: c.map(({ id: a, title: l, value: r, icon: i, colorClass: o }) =>
        e.jsxs(
          'article',
          {
            tabIndex: 0,
            'aria-labelledby': `stat-title-${a} stat-value-${a}`,
            className: `card flex items-center gap-4 rounded-xl p-6 shadow-md ${o} select-text focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`,
            children: [
              e.jsx('div', { className: 'icon flex-shrink-0', 'aria-hidden': 'true', children: i }),
              e.jsxs('div', {
                className: 'text flex flex-col',
                children: [
                  e.jsx('span', {
                    id: `stat-title-${a}`,
                    className: 'text-lg font-semibold',
                    children: l,
                  }),
                  e.jsx('span', {
                    id: `stat-value-${a}`,
                    className: 'text-3xl font-bold',
                    children: r,
                  }),
                ],
              }),
            ],
          },
          a
        )
      ),
    }),
  m = [
    { id: 1, name: 'สมชาย ใจดี', email: 'somchai@example.com', role: 'admin', status: 'active' },
    { id: 2, name: 'สมหญิง สวยงาม', email: 'somying@example.com', role: 'user', status: 'active' },
    {
      id: 3,
      name: 'จิตรลดา ใจเย็น',
      email: 'jitrada@example.com',
      role: 'user',
      status: 'inactive',
    },
    {
      id: 4,
      name: 'อนันต์ รักงาน',
      email: 'anan@example.com',
      role: 'moderator',
      status: 'active',
    },
  ],
  x = () =>
    e.jsx('section', {
      role: 'region',
      'aria-label': 'ตารางรายชื่อผู้ใช้งานในระบบ',
      className: 'overflow-x-auto rounded-lg bg-base-200 shadow-md',
      children: e.jsxs('table', {
        className: 'min-w-full divide-y divide-gray-300 dark:divide-gray-700',
        'aria-describedby': 'user-table-desc',
        children: [
          e.jsx('caption', {
            id: 'user-table-desc',
            className: 'sr-only',
            children: 'รายละเอียดรายชื่อผู้ใช้งานในระบบพร้อมสถานะและสิทธิ์การใช้งาน',
          }),
          e.jsx('thead', {
            className: 'select-none bg-gray-100 dark:bg-gray-800',
            children: e.jsxs('tr', {
              children: [
                e.jsx('th', {
                  scope: 'col',
                  className:
                    'px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300',
                  children: 'ชื่อผู้ใช้',
                }),
                e.jsx('th', {
                  scope: 'col',
                  className:
                    'px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300',
                  children: 'อีเมล',
                }),
                e.jsx('th', {
                  scope: 'col',
                  className:
                    'px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300',
                  children: 'สิทธิ์การใช้งาน',
                }),
                e.jsx('th', {
                  scope: 'col',
                  className:
                    'px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300',
                  children: 'สถานะ',
                }),
              ],
            }),
          }),
          e.jsx('tbody', {
            className: 'divide-y divide-gray-200 dark:divide-gray-700',
            children: m.map(a =>
              e.jsxs(
                'tr',
                {
                  tabIndex: 0,
                  'aria-label': `${a.name}, อีเมล: ${a.email}, สิทธิ์: ${a.role}, สถานะ: ${a.status === 'active' ? 'ใช้งานอยู่' : 'ไม่ใช้งาน'}`,
                  className:
                    'cursor-pointer transition-colors hover:bg-base-300 dark:hover:bg-gray-700',
                  children: [
                    e.jsx('td', {
                      className:
                        'whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100',
                      children: a.name,
                    }),
                    e.jsx('td', {
                      className:
                        'whitespace-nowrap px-6 py-4 text-sm text-gray-700 dark:text-gray-300',
                      children: a.email,
                    }),
                    e.jsx('td', {
                      className:
                        'whitespace-nowrap px-6 py-4 text-sm capitalize text-gray-700 dark:text-gray-300',
                      children: a.role,
                    }),
                    e.jsx('td', {
                      className: 'whitespace-nowrap px-6 py-4',
                      children: e.jsx('span', {
                        className: `inline-block select-text rounded-full px-2 py-1 text-xs font-semibold ${a.status === 'active' ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100' : 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'}`,
                        children: a.status === 'active' ? 'ใช้งานอยู่' : 'ไม่ใช้งาน',
                      }),
                    }),
                  ],
                },
                a.id
              )
            ),
          }),
        ],
      }),
    }),
  t = {
    name: 'สมชาย ใจดี',
    avatarUrl: 'https://i.pravatar.cc/150?img=3',
    email: 'somchai@example.com',
    lastOrderDate: '2025-07-15',
    totalSpent: 15800,
  },
  h = () =>
    e.jsxs('article', {
      role: 'region',
      'aria-label': `ข้อมูลลูกค้าเด่น: ${t.name}`,
      className:
        'dark:border-base-700 flex items-center gap-6 rounded-xl border border-base-300 bg-base-200 p-6 shadow-md',
      tabIndex: 0,
      children: [
        e.jsx('img', {
          src: t.avatarUrl,
          alt: `รูปโปรไฟล์ของลูกค้า ${t.name}`,
          className: 'h-20 w-20 rounded-full border-2 border-primary object-cover',
          loading: 'lazy',
          width: 80,
          height: 80,
          decoding: 'async',
          fetchPriority: 'low',
        }),
        e.jsxs('div', {
          className: 'flex-1 space-y-1',
          children: [
            e.jsx('h3', {
              className: 'select-text text-2xl font-semibold text-primary',
              children: t.name,
            }),
            e.jsx('p', { className: 'select-text text-sm text-muted', children: t.email }),
            e.jsxs('p', {
              className: 'text-sm',
              children: [
                'สั่งซื้อครั้งล่าสุด:',
                ' ',
                e.jsx('time', {
                  dateTime: t.lastOrderDate,
                  'aria-label': `สั่งซื้อครั้งล่าสุดเมื่อวันที่ ${t.lastOrderDate}`,
                  children: new Date(t.lastOrderDate).toLocaleDateString('th-TH', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  }),
                }),
              ],
            }),
            e.jsxs('p', {
              className: 'mt-2 text-sm font-medium',
              children: [
                'ยอดรวมการใช้จ่าย:',
                ' ',
                e.jsx('span', {
                  className: 'text-accent',
                  children: t.totalSpent.toLocaleString('th-TH', {
                    style: 'currency',
                    currency: 'THB',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  s = {
    name: 'บริษัท เจพี วิชวล จำกัด',
    address: ['123/45 ถนนสุขุมวิท', 'แขวงคลองเตยเหนือ เขตวัฒนา', 'กรุงเทพมหานคร 10110 ประเทศไทย']
      .join(`
`),
    phone: '02-123-4567',
    taxId: '0105550123456',
    hrManager: {
      fullName: 'นางสาว สุภาพร แซ่ลิ้ม',
      position: 'ผู้จัดการฝ่ายทรัพยากรบุคคล',
      email: 'supaporn.s@jpvisual.co.th',
    },
  },
  p = ({ employee: a }) => {
    const l = r =>
      r.toLocaleDateString('th-TH', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        calendar: 'buddhist',
      })
    return e.jsxs('article', {
      role: 'document',
      'aria-label': `หนังสือรับรองเงินเดือนของ ${a.fullName}`,
      className:
        'mx-auto min-h-[297mm] w-full max-w-[210mm] rounded-md border border-black bg-white p-16 print:border-0 print:p-8 print:shadow-none',
      style: {
        fontFamily: "'TH Sarabun New', serif",
        color: '#000',
        backgroundColor: '#fff',
        boxSizing: 'border-box',
        whiteSpace: 'pre-line',
        lineHeight: 1.6,
      },
      children: [
        e.jsxs('header', {
          className: 'mb-10 text-center print:mb-6',
          style: { lineHeight: 1.6 },
          children: [
            e.jsx('h1', {
              className: 'mb-6 text-4xl font-extrabold print:text-3xl',
              style: { color: '#000' },
              children: 'หนังสือรับรองเงินเดือน',
            }),
            e.jsx('p', { className: 'mb-1 text-lg', style: { color: '#000' }, children: s.name }),
            e.jsx('p', {
              className: 'mb-1 text-sm',
              style: { color: '#000', whiteSpace: 'pre-line', lineHeight: '1.6', marginBottom: 0 },
              children: s.address,
            }),
            e.jsxs('p', {
              className: 'mb-1 text-sm',
              style: { color: '#000' },
              children: ['โทร: ', s.phone],
            }),
            e.jsxs('p', {
              className: 'text-sm',
              style: { color: '#000' },
              children: ['เลขประจำตัวผู้เสียภาษี: ', s.taxId],
            }),
          ],
        }),
        e.jsxs('section', {
          className: 'space-y-6 text-lg leading-relaxed print:text-base print:leading-snug',
          style: { color: '#000', lineHeight: 1.7 },
          children: [
            e.jsx('p', { children: 'เรียน ผู้ที่เกี่ยวข้อง,' }),
            e.jsxs('p', {
              children: [
                'บริษัท ',
                e.jsx('strong', { children: s.name }),
                ' ขอรับรองว่า',
                ' ',
                e.jsx('strong', { children: a.fullName }),
                ' ดำรงตำแหน่ง ',
                e.jsx('strong', { children: a.position }),
                ' ',
                'ในฝ่าย ',
                e.jsx('strong', { children: a.department }),
                ' และได้รับเงินเดือนจำนวน',
                ' ',
                e.jsx('strong', {
                  children: a.salaryAmount.toLocaleString('th-TH', {
                    style: 'currency',
                    currency: 'THB',
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }),
                }),
                ' ',
                'สำหรับเดือน ',
                e.jsx('strong', { children: a.salaryMonth }),
              ],
            }),
            e.jsx('p', {
              children:
                'หนังสือฉบับนี้ออกให้เพื่อใช้เป็นหลักฐานประกอบการดำเนินการตามที่จำเป็น และไม่มีผลผูกพันทางกฎหมายโดยตรง',
            }),
          ],
        }),
        e.jsx('footer', {
          className: 'mt-16 flex justify-end print:mt-12 print:text-sm',
          style: { color: '#000', lineHeight: 1.6 },
          children: e.jsxs('div', {
            className: 'text-right',
            children: [
              e.jsxs('p', { children: ['ออกให้ ณ วันที่ ', l(a.issueDate)] }),
              e.jsx('p', {
                className: 'mt-8 font-bold underline underline-offset-2',
                style: { color: '#000' },
                children: s.hrManager.fullName,
              }),
              e.jsx('p', { children: s.hrManager.position }),
              e.jsx('p', { className: 'mt-1 text-xs', children: s.hrManager.email }),
            ],
          }),
        }),
      ],
    })
  },
  g = () => {
    const a = {
      fullName: 'นายสมชาย ใจดี',
      position: 'วิศวกรซอฟต์แวร์',
      department: 'ฝ่ายพัฒนาระบบ',
      salaryAmount: 45e3,
      salaryMonth: 'กรกฎาคม 2568',
      issueDate: new Date('2025-07-22'),
    }
    return e.jsxs('main', {
      role: 'main',
      'aria-label': 'แดชบอร์ดผู้ดูแลระบบ',
      className:
        'mx-auto min-h-screen max-w-7xl space-y-20 rounded-3xl bg-base-100 p-10 text-base-content shadow-xl print:bg-white print:shadow-none',
      children: [
        e.jsxs('header', {
          className: 'mb-10 text-center print:hidden',
          children: [
            e.jsx('h1', {
              className: 'text-5xl font-extrabold text-primary',
              children: 'แดชบอร์ดผู้ดูแลระบบ',
            }),
            e.jsx('p', {
              className: 'mx-auto mt-4 max-w-4xl text-lg text-muted sm:text-xl',
              children: 'จัดการข้อมูลและดูสถิติที่สำคัญแบบเรียลไทม์เพื่อเพิ่มประสิทธิภาพการทำงาน',
            }),
          ],
        }),
        e.jsxs('section', {
          role: 'region',
          'aria-labelledby': 'stats-panel-heading',
          className: 'space-y-10 print:hidden',
          children: [
            e.jsx('h2', {
              id: 'stats-panel-heading',
              className: 'sr-only',
              children: 'สถิติโดยรวม',
            }),
            e.jsx(d, {}),
          ],
        }),
        e.jsxs('section', {
          role: 'region',
          'aria-labelledby': 'customer-card-heading',
          className: 'space-y-8 print:hidden',
          children: [
            e.jsx('h2', {
              id: 'customer-card-heading',
              className: 'text-2xl font-bold text-primary',
              children: 'ลูกค้าเด่นประจำวัน',
            }),
            e.jsx(h, {
              loading: !1,
              customer: {
                id: 'featured-001',
                name: 'บริษัท ลูกค้า VIP จำกัด',
                status: 'เสร็จสมบูรณ์',
                documentTitle: 'บริการตรวจสอบเอกสาร',
                receivedDate: new Date().toISOString(),
              },
            }),
          ],
        }),
        e.jsxs('section', {
          role: 'region',
          'aria-labelledby': 'user-table-heading',
          className: 'space-y-8 print:hidden',
          children: [
            e.jsx('h2', {
              id: 'user-table-heading',
              className: 'text-2xl font-bold text-primary',
              children: 'รายชื่อผู้ใช้งานในระบบ',
            }),
            e.jsx(x, {}),
          ],
        }),
        e.jsxs('section', {
          role: 'region',
          'aria-labelledby': 'salary-certificate-heading',
          className: 'flex justify-center space-y-8 print:block',
          children: [
            e.jsx('h2', {
              id: 'salary-certificate-heading',
              className: 'text-2xl font-bold text-primary print:hidden',
              children: 'ใบรับรองเงินเดือนตัวอย่าง',
            }),
            e.jsx('div', {
              className:
                'w-full max-w-[210mm] rounded-md border border-gray-300 bg-white p-10 shadow-md print:rounded-none print:border-0 print:p-0 print:shadow-none',
              style: {
                minHeight: '297mm',
                fontFamily: "'TH Sarabun New', serif",
                color: '#1f2937',
                boxSizing: 'border-box',
              },
              children: e.jsx(p, { employee: a }),
            }),
          ],
        }),
      ],
    })
  },
  u = () => {
    const [a, l] = n.useState('ผู้ใช้ระบบ')
    return (
      n.useEffect(() => {
        const r = localStorage.getItem('loggedInUser')?.trim()
        r && l(r)
      }, []),
      e.jsxs('main', {
        role: 'main',
        'aria-label': 'แผงควบคุมผู้ดูแลระบบ',
        className:
          'flex min-h-screen flex-col items-center bg-base-100 px-6 py-12 text-base-content transition-colors duration-300 dark:bg-gray-900',
        tabIndex: -1,
        children: [
          e.jsxs('header', {
            className: 'mb-10 w-full max-w-xl text-center',
            'aria-live': 'polite',
            'aria-atomic': 'true',
            children: [
              e.jsx('h1', {
                className: 'mb-3 text-2xl font-bold text-primary sm:text-3xl md:text-4xl',
                tabIndex: 0,
                children: 'แผงควบคุมผู้ดูแลระบบ',
              }),
              e.jsxs('p', {
                className: 'text-base text-muted sm:text-lg',
                children: [
                  'ยินดีต้อนรับคุณ',
                  ' ',
                  e.jsx('span', {
                    className:
                      'font-semibold underline decoration-primary decoration-2 underline-offset-4',
                    'aria-label': `ชื่อผู้ใช้: ${a}`,
                    tabIndex: 0,
                    children: a,
                  }),
                ],
              }),
            ],
          }),
          e.jsx('section', {
            className: 'w-full max-w-7xl',
            tabIndex: -1,
            'aria-label': 'แดชบอร์ดผู้ดูแลระบบ',
            children: e.jsx(g, {}),
          }),
        ],
      })
    )
  }
export { u as default }
//# sourceMappingURL=AdminPage-DUp5W1q-.js.map
