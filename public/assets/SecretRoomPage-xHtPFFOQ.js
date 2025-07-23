import {
  r as o,
  j as e,
  U as j,
  P as N,
  Q as h,
  S as w,
  T as y,
  x as p,
  V as u,
  W as k,
  Y as v,
  Z as S,
  _ as C,
  $ as L,
  a0 as $,
  a1 as I,
  a2 as E,
  a3 as z,
} from './vendor-Ccc7z4H6.js'
const P = () => {
    const [a, t] = o.useState('ไม่ระบุชื่อ')
    return (
      o.useEffect(() => {
        const s = localStorage.getItem('loggedInUser')?.trim()
        t(s && s !== '' ? s : 'ไม่ระบุชื่อ')
      }, []),
      e.jsxs('header', {
        role: 'banner',
        'aria-label': 'แถบหัวข้อห้องลับ',
        className:
          'w-full rounded-xl bg-primary p-6 text-center text-primary-content shadow-lg transition-colors duration-300 sm:p-8',
        children: [
          e.jsx('h2', {
            className: 'text-2xl font-bold leading-tight tracking-wide sm:text-3xl',
            children: 'แดชบอร์ดของผู้ใช้งาน',
          }),
          e.jsxs('p', {
            className: 'mx-auto mt-3 max-w-xl text-sm leading-relaxed sm:text-base',
            children: [
              'คุณ',
              ' ',
              e.jsx('strong', {
                className:
                  'underline decoration-primary-content/50 decoration-2 underline-offset-4',
                'aria-label': `ชื่อผู้ใช้งาน: ${a}`,
                children: a,
              }),
              ' ',
              'ได้รับสิทธิเข้าถึง ',
              e.jsx('span', { className: 'font-medium italic', children: 'ห้องลับ' }),
              ' แล้ว',
            ],
          }),
        ],
      })
    )
  },
  U = ({ username: a }) =>
    e.jsxs('section', {
      'aria-label': 'ข้อมูลบัญชีผู้ใช้งานระบบ',
      className:
        'flex select-none items-center gap-5 rounded-xl bg-base-200 px-6 py-4 shadow-md transition-shadow hover:shadow-lg dark:bg-zinc-800',
      children: [
        e.jsx('div', {
          className:
            'flex shrink-0 items-center justify-center rounded-full bg-primary p-3 text-white shadow-inner',
          'aria-hidden': 'true',
          children: e.jsx(j, { className: 'h-6 w-6' }),
        }),
        e.jsxs('div', {
          className: 'flex min-w-0 flex-col overflow-hidden',
          children: [
            e.jsx('span', {
              className: 'truncate text-sm text-base-content/60 dark:text-gray-400',
              'aria-label': 'ป้ายชื่อ',
              children: 'ชื่อผู้ใช้งาน',
            }),
            e.jsx('strong', {
              className:
                'select-text truncate text-lg font-semibold text-base-content dark:text-white',
              title: a || 'ไม่ระบุชื่อผู้ใช้งาน',
              'aria-label': `ชื่อผู้ใช้งาน: ${a || 'ไม่ระบุชื่อผู้ใช้งาน'}`,
              children: a || 'ไม่ระบุชื่อผู้ใช้งาน',
            }),
          ],
        }),
      ],
    }),
  g = [
    {
      id: '1',
      type: 'info',
      message: 'ระบบจะมีการปรับปรุงในวันเสาร์ เวลา 23:00 น.',
      timestamp: '2025-07-21 10:45',
    },
    {
      id: '2',
      type: 'success',
      message: 'อัปเดตข้อมูลผู้ใช้สำเร็จแล้ว',
      timestamp: '2025-07-20 16:30',
    },
    {
      id: '3',
      type: 'error',
      message: 'ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้',
      timestamp: '2025-07-19 08:15',
    },
  ],
  A = {
    info: e.jsx(y, {
      className: 'h-5 w-5 shrink-0 text-blue-500',
      'aria-hidden': 'true',
      focusable: 'false',
    }),
    success: e.jsx(w, {
      className: 'h-5 w-5 shrink-0 text-green-500',
      'aria-hidden': 'true',
      focusable: 'false',
    }),
    warning: e.jsx(h, {
      className: 'h-5 w-5 shrink-0 text-yellow-500',
      'aria-hidden': 'true',
      focusable: 'false',
    }),
    error: e.jsx(h, {
      className: 'h-5 w-5 shrink-0 text-red-500',
      'aria-hidden': 'true',
      focusable: 'false',
    }),
  },
  T = () =>
    e.jsxs('section', {
      'aria-label': 'การแจ้งเตือนระบบ',
      className:
        'space-y-6 rounded-xl bg-base-200 p-6 shadow transition-all dark:bg-zinc-800 sm:p-8',
      children: [
        e.jsxs('header', {
          className: 'mb-4 flex items-center gap-3',
          children: [
            e.jsx(N, { className: 'h-6 w-6 text-primary', 'aria-hidden': 'true' }),
            e.jsx('h2', {
              className: 'select-none text-lg font-bold text-base-content sm:text-xl',
              children: 'การแจ้งเตือน',
            }),
          ],
        }),
        g.length === 0
          ? e.jsx('p', {
              className: 'select-none text-sm text-base-content/60',
              children: 'ไม่มีการแจ้งเตือนใหม่',
            })
          : e.jsx('ul', {
              className: 'space-y-4 text-sm text-base-content/80 sm:text-base',
              children: g.map(a =>
                e.jsxs(
                  'li',
                  {
                    className:
                      'flex items-start gap-3 rounded-lg bg-base-100 p-4 shadow-sm transition-all hover:shadow dark:bg-zinc-700',
                    'aria-label': `การแจ้งเตือนประเภท ${a.type} - ${a.message}`,
                    children: [
                      A[a.type],
                      e.jsxs('div', {
                        className: 'flex flex-col',
                        children: [
                          e.jsx('p', {
                            className: 'font-medium text-base-content',
                            children: a.message,
                          }),
                          e.jsx('time', {
                            dateTime: a.timestamp,
                            className: 'mt-1 text-xs text-gray-500 dark:text-gray-400',
                            children: a.timestamp,
                          }),
                        ],
                      }),
                    ],
                  },
                  a.id
                )
              ),
            }),
      ],
    }),
  B = () => {
    const [a, t] = o.useState(navigator.onLine),
      [s, n] = o.useState(!1)
    o.useEffect(() => {
      const l = () => {
          try {
            const i = '__storage_test__'
            ;(localStorage.setItem(i, i), localStorage.removeItem(i), n(!0))
          } catch {
            n(!1)
          }
        },
        r = () => t(navigator.onLine)
      return (
        l(),
        window.addEventListener('online', r),
        window.addEventListener('offline', r),
        () => {
          ;(window.removeEventListener('online', r), window.removeEventListener('offline', r))
        }
      )
    }, [])
    const x = [
      {
        key: 'network',
        label: 'การเชื่อมต่ออินเทอร์เน็ต',
        status: a,
        successLabel: 'ออนไลน์',
        failLabel: 'ออฟไลน์',
        icon: l =>
          l
            ? e.jsx(p, {
                className: 'text-2xl text-green-600',
                'aria-label': 'ออนไลน์',
                role: 'img',
                'aria-hidden': !1,
              })
            : e.jsx(u, {
                className: 'text-2xl text-red-600',
                'aria-label': 'ออฟไลน์',
                role: 'img',
                'aria-hidden': !1,
              }),
      },
      {
        key: 'storage',
        label: 'LocalStorage',
        status: s,
        successLabel: 'พร้อมใช้งาน',
        failLabel: 'ไม่พร้อมใช้งาน',
        icon: l =>
          l
            ? e.jsx(p, {
                className: 'text-2xl text-green-600',
                'aria-label': 'LocalStorage พร้อมใช้งาน',
                role: 'img',
                'aria-hidden': !1,
              })
            : e.jsx(u, {
                className: 'text-2xl text-red-600',
                'aria-label': 'LocalStorage ไม่พร้อมใช้งาน',
                role: 'img',
                'aria-hidden': !1,
              }),
      },
    ]
    return e.jsxs('section', {
      'aria-label': 'สถานะการตรวจสอบระบบ',
      tabIndex: -1,
      role: 'region',
      className:
        'dark:border-base-700 space-y-6 rounded-xl border border-base-300 bg-base-100 p-6 shadow-md transition-shadow duration-200 ease-in-out focus-within:shadow-lg dark:bg-zinc-800',
      children: [
        e.jsx('h3', {
          className: 'select-none text-xl font-bold text-primary',
          children: 'สถานะระบบ',
        }),
        e.jsx('ul', {
          className: 'grid gap-6 sm:grid-cols-2',
          role: 'list',
          children: x.map(
            ({ key: l, label: r, status: i, successLabel: m, failLabel: c, icon: b }) =>
              e.jsxs(
                'li',
                {
                  className: 'flex select-text items-center gap-4',
                  role: 'listitem',
                  'aria-live': 'polite',
                  'aria-atomic': 'true',
                  children: [
                    e.jsx('span', {
                      'aria-label': `${r}: ${i ? m : c}`,
                      role: 'img',
                      children: b(i),
                    }),
                    e.jsxs('div', {
                      className: 'font-medium text-base-content',
                      children: [
                        r,
                        ':',
                        ' ',
                        e.jsx('span', {
                          className: `font-semibold ${i ? 'text-green-700' : 'text-red-600'}`,
                          children: i ? m : c,
                        }),
                      ],
                    }),
                  ],
                },
                l
              )
          ),
        }),
      ],
    })
  },
  M = () => {
    const a = [
      {
        id: 'cpu',
        label: 'การใช้ CPU',
        value: '32%',
        icon: e.jsx(k, { className: 'h-6 w-6', 'aria-hidden': 'true', focusable: 'false' }),
        color: 'text-rose-500',
      },
      {
        id: 'memory',
        label: 'การใช้ RAM',
        value: '68%',
        icon: e.jsx(v, { className: 'h-6 w-6', 'aria-hidden': 'true', focusable: 'false' }),
        color: 'text-blue-500',
      },
      {
        id: 'storage',
        label: 'พื้นที่ใช้งาน',
        value: '140GB / 250GB',
        icon: e.jsx(S, { className: 'h-6 w-6', 'aria-hidden': 'true', focusable: 'false' }),
        color: 'text-green-600',
      },
      {
        id: 'uptime',
        label: 'ระยะเวลาทำงาน',
        value: '3 วัน 4 ชม.',
        icon: e.jsx(C, { className: 'h-6 w-6', 'aria-hidden': 'true', focusable: 'false' }),
        color: 'text-yellow-500',
      },
    ]
    return e.jsx('section', {
      'aria-label': 'สถิติประสิทธิภาพระบบ',
      className: 'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4',
      children: a.map(({ id: t, label: s, value: n, icon: x, color: l }) =>
        e.jsxs(
          'article',
          {
            tabIndex: 0,
            role: 'region',
            'aria-label': `${s}: ${n}`,
            className:
              'rounded-xl bg-base-200 p-5 shadow outline-none transition-shadow duration-200 focus-within:shadow-lg hover:shadow-lg dark:bg-zinc-800',
            children: [
              e.jsxs('div', {
                className: `mb-2 flex items-center gap-3 ${l}`,
                'aria-hidden': 'true',
                children: [x, e.jsx('span', { className: 'select-text font-medium', children: s })],
              }),
              e.jsx('p', {
                className: 'select-text text-xl font-bold text-base-content dark:text-white',
                children: n,
              }),
            ],
          },
          t
        )
      ),
    })
  },
  R = ({
    onFileSelect: a,
    accept: t = '*/*',
    multiple: s = !1,
    disabled: n = !1,
    'aria-label': x = 'อัปโหลดไฟล์',
  }) => {
    const [l, r] = o.useState([]),
      i = m => {
        const c = m.target.files
        if (!c || c.length === 0) {
          ;(r([]), a(null))
          return
        }
        const b = Array.from(c)
        ;(r(b), a(s ? b : b[0]))
      }
    return e.jsxs('section', {
      'aria-label': x,
      className:
        'mx-auto max-w-md rounded-lg bg-base-200 p-4 shadow-md focus-within:ring-2 focus-within:ring-primary',
      children: [
        e.jsx('label', {
          htmlFor: 'fileUpload',
          className:
            'mb-2 block cursor-pointer select-none font-semibold text-base-content transition-colors hover:text-primary',
          children: 'เลือกไฟล์เอกสาร (PDF, DOCX, JPG, PNG ฯลฯ)',
        }),
        e.jsx('input', {
          id: 'fileUpload',
          type: 'file',
          accept: t,
          multiple: s,
          disabled: n,
          onChange: i,
          className: 'file-input file-input-bordered w-full',
          'aria-describedby': 'fileHelp',
          'aria-multiselectable': s,
        }),
        e.jsx('p', {
          id: 'fileHelp',
          className: 'mt-2 select-text truncate text-sm text-base-content/70',
          'aria-live': 'polite',
          'aria-atomic': 'true',
          children:
            l.length > 0
              ? `📎 ไฟล์ที่เลือก: ${l.map(m => m.name).join(', ')}`
              : 'ยังไม่ได้เลือกไฟล์',
        }),
      ],
    })
  },
  f = [
    { timestamp: '2025-07-22 10:30:00', username: 'JPKYETONKEY201', action: 'เข้าสู่ระบบ' },
    { timestamp: '2025-07-22 10:32:12', username: 'JPKYETONKEY233', action: 'ดาวน์โหลดเอกสาร' },
    { timestamp: '2025-07-22 10:35:45', username: 'JPKYETONKEY299', action: 'ออกจากระบบ' },
  ],
  O = () =>
    e.jsxs('section', {
      'aria-label': 'ตารางบันทึกการเข้าใช้งาน',
      className: 'mx-auto w-full max-w-6xl space-y-6 rounded-2xl bg-base-200 p-6 shadow-xl sm:p-8',
      children: [
        e.jsxs('header', {
          className: 'space-y-1 text-center sm:text-left',
          children: [
            e.jsx('h2', {
              className: 'text-2xl font-bold tracking-tight text-primary sm:text-3xl',
              children: 'บันทึกการเข้าใช้งานระบบ',
            }),
            e.jsxs('p', {
              className: 'text-sm text-base-content/70 sm:text-base',
              children: [
                'กิจกรรมล่าสุดของผู้ใช้งานในระบบ ',
                e.jsx('em', { className: 'font-semibold', children: 'Secret Room' }),
              ],
            }),
          ],
        }),
        e.jsx('div', {
          className:
            'dark:border-base-700 overflow-x-auto rounded-xl border border-base-300 shadow-inner',
          children: e.jsxs('table', {
            role: 'table',
            className: 'w-full table-auto border-collapse text-sm sm:text-base',
            children: [
              e.jsx('thead', {
                className: 'select-none bg-primary text-primary-content',
                children: e.jsxs('tr', {
                  children: [
                    e.jsx('th', {
                      scope: 'col',
                      className: 'whitespace-nowrap px-4 py-3 text-left font-semibold',
                      children: 'เวลา',
                    }),
                    e.jsx('th', {
                      scope: 'col',
                      className: 'whitespace-nowrap px-4 py-3 text-left font-semibold',
                      children: 'ผู้ใช้งาน',
                    }),
                    e.jsx('th', {
                      scope: 'col',
                      className: 'whitespace-nowrap px-4 py-3 text-left font-semibold',
                      children: 'กิจกรรม',
                    }),
                  ],
                }),
              }),
              e.jsx('tbody', {
                'aria-live': 'polite',
                'aria-relevant': 'additions removals',
                className: 'select-text',
                children:
                  f.length === 0
                    ? e.jsx('tr', {
                        children: e.jsx('td', {
                          colSpan: 3,
                          className: 'py-6 text-center italic text-base-content/50',
                          children: 'ยังไม่มีบันทึกการเข้าใช้งาน',
                        }),
                      })
                    : f.map(({ timestamp: a, username: t, action: s }, n) =>
                        e.jsxs(
                          'tr',
                          {
                            className: `transition-colors duration-150 ${n % 2 === 0 ? 'bg-base-100' : 'dark:bg-base-700/40 bg-base-300/40'}`,
                            children: [
                              e.jsx('td', {
                                className:
                                  'whitespace-nowrap px-4 py-3 font-mono text-base-content/90',
                                children: a,
                              }),
                              e.jsx('td', {
                                className:
                                  'whitespace-nowrap px-4 py-3 font-mono font-medium text-primary',
                                children: t,
                              }),
                              e.jsx('td', {
                                className: 'whitespace-nowrap px-4 py-3 text-base-content',
                                children: s,
                              }),
                            ],
                          },
                          `${a}-${t}`
                        )
                      ),
              }),
            ],
          }),
        }),
      ],
    }),
  F = () =>
    e.jsxs('section', {
      'aria-label': 'ศูนย์ช่วยเหลือและการติดต่อ',
      className:
        'space-y-6 rounded-xl bg-base-200 p-6 shadow-md transition-colors duration-300 dark:bg-zinc-800 sm:p-8',
      children: [
        e.jsxs('header', {
          className: 'mb-4 flex items-center gap-3',
          children: [
            e.jsx(L, {
              className: 'h-6 w-6 shrink-0 text-primary',
              'aria-hidden': 'true',
              focusable: 'false',
            }),
            e.jsx('h2', {
              className: 'text-lg font-bold text-base-content sm:text-xl',
              children: 'ศูนย์ช่วยเหลือ & การสนับสนุน',
            }),
          ],
        }),
        e.jsxs('ul', {
          className: 'space-y-6 text-sm text-base-content/80 sm:text-base',
          children: [
            e.jsxs('li', {
              className: 'flex items-start gap-3',
              children: [
                e.jsx($, {
                  className: 'mt-1 h-5 w-5 shrink-0 text-blue-500',
                  'aria-hidden': 'true',
                  focusable: 'false',
                }),
                e.jsxs('div', {
                  children: [
                    e.jsx('p', {
                      className: 'mb-1 font-medium text-base-content',
                      children: 'สอบถามด่วนผ่าน LINE',
                    }),
                    e.jsx('a', {
                      href: 'https://line.me/ti/p/~jpdocs',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      className:
                        'hover:text-primary-focus inline-block text-primary underline underline-offset-4 transition-colors',
                      'aria-label': 'เปิดแชท LINE กับทีมงาน',
                      children: 'คลิกที่นี่เพื่อแชทกับทีมงาน',
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs('li', {
              className: 'flex items-start gap-3',
              children: [
                e.jsx(I, {
                  className: 'mt-1 h-5 w-5 shrink-0 text-emerald-500',
                  'aria-hidden': 'true',
                  focusable: 'false',
                }),
                e.jsxs('div', {
                  children: [
                    e.jsx('p', {
                      className: 'mb-1 font-medium text-base-content',
                      children: 'ติดต่อทางอีเมล',
                    }),
                    e.jsx('a', {
                      href: 'mailto:support@jpvisualdocs.com',
                      className:
                        'hover:text-primary-focus inline-block text-primary underline underline-offset-4 transition-colors',
                      'aria-label': 'ส่งอีเมลไปที่ support@jpvisualdocs.com',
                      children: 'support@jpvisualdocs.com',
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        e.jsx('footer', {
          children: e.jsx('p', {
            className: 'mt-4 text-xs text-gray-500 dark:text-gray-400',
            children: 'ทีมงานพร้อมตอบกลับภายใน 1–3 ชั่วโมง ในเวลาทำการ',
          }),
        }),
      ],
    }),
  K = () => {
    const a = o.useRef(null),
      t = o.useRef(null),
      s = 6e6,
      n = 85,
      x = 85,
      l = Math.round(s * (n / 100)),
      r = Math.round(s * (x / 100)),
      i = l + r,
      m = Math.max(s * 2 - i, 0),
      c = [
        { name: 'UOB', amount: l, color: '#0284c7' },
        { name: 'TMB', amount: r, color: '#16a34a' },
        { name: 'KTB (รอผล)', amount: m, color: '#f59e0b' },
      ]
    return (
      o.useEffect(() => {
        const b = a.current?.getContext('2d')
        if (b)
          return (
            t.current?.destroy(),
            (t.current = new E(b, {
              type: 'bar',
              data: {
                labels: c.map(d => d.name),
                datasets: [
                  {
                    label: 'วงเงินอนุมัติ (บาท)',
                    data: c.map(d => d.amount),
                    backgroundColor: c.map(d => d.color),
                    borderRadius: 12,
                    barThickness: 56,
                  },
                ],
              },
              options: {
                responsive: !0,
                animation: { duration: 700, easing: 'easeOutCubic' },
                plugins: {
                  title: {
                    display: !0,
                    text: '📊 สถานะสินเชื่อ: Parinya',
                    color: '#1e293b',
                    font: { size: 20, weight: 'bold' },
                    padding: { bottom: 8 },
                  },
                  subtitle: {
                    display: !0,
                    text: `เป้าหมาย: ${s.toLocaleString()} บาท/ธนาคาร | UOB ${l.toLocaleString()} (${n}%) | TMB ${r.toLocaleString()} (${x}%)`,
                    color: '#475569',
                    font: { size: 14, style: 'italic' },
                    padding: { bottom: 12 },
                  },
                  tooltip: {
                    backgroundColor: '#f9fafb',
                    titleColor: '#0f172a',
                    bodyColor: '#1f2937',
                    borderColor: '#e2e8f0',
                    borderWidth: 1,
                    callbacks: {
                      label: d => ` ${d.label}: ${Number(d.formattedValue).toLocaleString()} บาท`,
                    },
                  },
                  legend: { display: !1 },
                },
                scales: {
                  x: {
                    title: {
                      display: !0,
                      text: 'ธนาคาร',
                      color: '#334155',
                      font: { size: 14, weight: 'bold' },
                    },
                    ticks: { color: '#475569' },
                    grid: { display: !1 },
                  },
                  y: {
                    beginAtZero: !0,
                    suggestedMax: s * 2,
                    title: {
                      display: !0,
                      text: 'จำนวนเงิน (บาท)',
                      color: '#334155',
                      font: { size: 14, weight: 'bold' },
                    },
                    ticks: { color: '#475569', callback: d => `${(+d).toLocaleString()} บาท` },
                    grid: { color: '#f1f5f9', borderDash: [4, 4] },
                  },
                },
                layout: { padding: { top: 12, bottom: 6 } },
              },
            })),
            () => {
              ;(t.current?.destroy(), (t.current = null))
            }
          )
      }, [s, l, r]),
      e.jsx('section', {
        'aria-label': 'กราฟแสดงสถานะสินเชื่อ',
        className: 'mx-auto mt-10 w-full max-w-3xl rounded-2xl bg-white px-6 py-8 shadow-xl',
        tabIndex: -1,
        children: e.jsx('canvas', { ref: a, height: 320 }),
      })
    )
  },
  Y = ({ username: a }) =>
    e.jsxs('main', {
      role: 'main',
      'aria-label': 'แดชบอร์ดห้องลับ',
      tabIndex: -1,
      className:
        'mx-auto flex max-w-7xl flex-col gap-10 rounded-2xl bg-base-200 p-8 shadow-xl transition-shadow hover:shadow-2xl focus-visible:ring-2 focus-visible:ring-primary sm:p-12',
      children: [
        e.jsx(P, {}),
        e.jsxs('section', {
          'aria-label': 'ข้อมูลผู้ใช้และการแจ้งเตือน',
          className: 'grid grid-cols-1 gap-6 md:grid-cols-2',
          children: [e.jsx(U, { username: a }), e.jsx(T, {})],
        }),
        e.jsxs('section', {
          'aria-label': 'สถานะระบบและประสิทธิภาพ',
          className: 'grid grid-cols-1 gap-6 md:grid-cols-2',
          children: [e.jsx(B, {}), e.jsx(M, {})],
        }),
        e.jsx('section', {
          'aria-label': 'สถานะสินเชื่อ',
          tabIndex: -1,
          className:
            'rounded-xl border border-base-300 bg-base-100 p-6 shadow-lg dark:border-zinc-700 dark:bg-zinc-900',
          children: e.jsx(K, {}),
        }),
        e.jsx('section', {
          'aria-label': 'อัปโหลดเอกสาร',
          tabIndex: -1,
          className:
            'dark:border-base-700 mx-auto max-w-lg rounded-xl border border-base-300 bg-base-100 p-6 shadow-inner dark:bg-zinc-800',
          children: e.jsx(R, {
            accept: '.pdf,.doc,.docx,.jpg,.jpeg,.png',
            multiple: !0,
            disabled: !1,
            'aria-disabled': !1,
            onFileSelect: t => {
              if (!t) return
              const s = Array.isArray(t) ? t.map(n => n.name).join(', ') : t.name
              console.log('📁 ไฟล์ที่เลือก:', s)
            },
          }),
        }),
        e.jsx('section', {
          'aria-label': 'ประวัติการใช้งานระบบ',
          tabIndex: -1,
          className:
            'rounded-xl border border-base-300 bg-base-100 p-4 shadow dark:border-zinc-700 dark:bg-zinc-900',
          children: e.jsx(O, {}),
        }),
        e.jsx('section', {
          'aria-label': 'ศูนย์ช่วยเหลือและการติดต่อ',
          tabIndex: -1,
          className:
            'rounded-xl border border-base-300 bg-base-100 p-6 shadow-inner dark:border-zinc-700 dark:bg-zinc-800',
          children: e.jsx(F, {}),
        }),
        e.jsxs('section', {
          'aria-label': 'ข้อกำหนดความปลอดภัย',
          className:
            'space-y-4 rounded-lg border border-warning bg-yellow-100 p-6 text-warning-content shadow-inner dark:border-yellow-600 dark:bg-yellow-900/20',
          children: [
            e.jsxs('div', {
              className:
                'flex items-center gap-2 font-semibold text-yellow-800 dark:text-yellow-200',
              children: [
                e.jsx(z, { className: 'h-5 w-5 shrink-0' }),
                'ระบบออกแบบให้ปลอดภัยทั้งสองฝ่าย',
              ],
            }),
            e.jsxs('div', {
              className:
                'space-y-3 text-sm leading-relaxed text-base-content/80 dark:text-zinc-300',
              children: [
                e.jsxs('p', {
                  children: [
                    e.jsx('strong', { className: 'text-red-500', children: '*' }),
                    ' ',
                    e.jsx('span', { className: 'font-medium', children: 'หมายเหตุ:' }),
                    ' ',
                    'รหัสที่คุณได้รับคือกุญแจเข้าถึงระบบทั้งหมด ',
                    e.jsx('strong', { children: 'ใช้เฉพาะคุณเท่านั้น' }),
                  ],
                }),
                e.jsxs('ul', {
                  className: 'ml-4 list-disc space-y-1',
                  children: [
                    e.jsx('li', {
                      children: 'ห้ามแชร์ User / Password / IP / Token ให้กับบุคคลอื่น',
                    }),
                    e.jsx('li', {
                      children: 'การเข้าระบบจากเครื่องที่ไม่ใช่เครื่องประจำ = บัญชีจะถูกปิดทันที',
                    }),
                    e.jsx('li', { children: 'ละเมิดกฎ = การจ้างงานยกเลิกอัตโนมัติ' }),
                  ],
                }),
                e.jsx('p', {
                  className: 'font-medium',
                  children:
                    'ความลับของคุณจะปลอดภัยหากอยู่กับเรา หากไม่ — เราไม่สามารถรับประกันใด ๆ ได้',
                }),
                e.jsx('p', {
                  className: 'font-semibold text-base-content/90 dark:text-white',
                  children: 'กรุณาเคารพกติกาทั้งสองฝ่าย เพื่อความปลอดภัยของคุณและทีมงาน',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  G = () => {
    const [a, t] = o.useState('ไม่ระบุชื่อผู้ใช้งาน')
    return (
      o.useEffect(() => {
        const s = localStorage.getItem('loggedInUser')?.trim()
        s && s !== '' && t(s)
      }, []),
      e.jsx('main', {
        role: 'main',
        'aria-label': 'หน้าหลักห้องลับ',
        className: 'min-h-screen bg-base-100 px-4 py-10 sm:px-6 lg:px-8',
        tabIndex: -1,
        children: e.jsx(Y, { username: a }),
      })
    )
  }
export { G as default }
//# sourceMappingURL=SecretRoomPage-xHtPFFOQ.js.map
