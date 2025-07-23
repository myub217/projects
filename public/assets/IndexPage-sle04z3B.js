import {
  r as o,
  j as e,
  m as C,
  F as j,
  d as v,
  e as D,
  f as _,
  g as J,
  h as k,
  i as U,
  k as O,
  l as B,
  n as V,
  o as H,
  p as X,
  q as K,
  s as E,
  t as Q,
  v as Z,
  w as G,
  x as Y,
  y as W,
  z as ee,
  A as te,
  C as se,
  D as ae,
  E as re,
  G as ie,
  H as M,
  I as ne,
  J as z,
  K as le,
  X as oe,
  L as ce,
} from './vendor-Ccc7z4H6.js'
const b = {
    lineOAID: '@462fqtfc',
    lineUrlDefault: 'https://lin.ee/uhMtuSB',
    facebookPageID: '61573307616115',
    messengerHash: 'AbZf0L5cSZ8XvIYw',
    emailAddress: 'contact@bannerdigital.co',
    phoneNumber: '+6621234567',
    websiteURL: 'https://www.bannerdigital.co',
  },
  u = (t, s) => {
    switch (t) {
      case 'line':
        return s
          ? `https://line.me/R/oaMessage/${b.lineOAID}/?text=${encodeURIComponent(s)}`
          : b.lineUrlDefault
      case 'facebook':
        return `https://www.facebook.com/profile.php?id=${b.facebookPageID}&mibextid=kFxxJD`
      case 'messenger':
        return `https://m.me/${b.facebookPageID}?hash=${b.messengerHash}&source=qr_link_share`
      case 'email':
        return `mailto:${b.emailAddress}`
      case 'phone':
        return `tel:${b.phoneNumber}`
      case 'website':
        return b.websiteURL
      default:
        return '#'
    }
  },
  $ = [
    { label: 'บริการของเรา', to: 'services' },
    { label: 'ตัวอย่างงาน', to: 'feature' },
  ],
  de = () => {
    const [t, s] = o.useState(!1),
      a = o.useRef(null),
      n = o.useRef(null)
    ;(o.useEffect(() => {
      if (!t) return
      const l = i => {
          a.current && !a.current.contains(i.target) && s(!1)
        },
        r = i => {
          i.key === 'Escape' && s(!1)
        }
      return (
        document.addEventListener('mousedown', l),
        document.addEventListener('keydown', r),
        () => {
          ;(document.removeEventListener('mousedown', l),
            document.removeEventListener('keydown', r))
        }
      )
    }, [t]),
      o.useEffect(() => {
        t || n.current?.focus()
      }, [t]))
    const d = () => s(l => !l)
    return e.jsxs('header', {
      className:
        'sticky top-0 z-50 w-full border-b border-base-300 bg-base-100/90 shadow-sm backdrop-blur-md transition-colors duration-300 dark:border-gray-700 dark:bg-gray-900',
      role: 'banner',
      'aria-label': 'ส่วนหัวเว็บไซต์',
      children: [
        e.jsxs('div', {
          className:
            'mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8',
          children: [
            e.jsxs('div', {
              className: 'flex select-none items-center gap-2',
              'aria-label': 'โลโก้ JP - VISUAL & DOCS',
              tabIndex: -1,
              children: [
                e.jsx('img', {
                  src: '/assets/logo.svg',
                  alt: 'โลโก้ JP - VISUAL & DOCS',
                  className: 'h-8 w-8',
                  draggable: !1,
                  loading: 'lazy',
                  decoding: 'async',
                  fetchPriority: 'high',
                }),
                e.jsx('span', {
                  className: 'select-text text-lg font-bold tracking-tight text-primary',
                  children: 'JP - VISUAL & DOCS',
                }),
              ],
            }),
            e.jsx('nav', {
              className: 'hidden items-center gap-6 text-sm font-medium sm:flex',
              'aria-label': 'เมนูนำทางหลัก',
              role: 'navigation',
              children: $.map(({ label: l, to: r }) =>
                e.jsx(
                  C.Link,
                  {
                    to: r,
                    smooth: !0,
                    offset: -80,
                    duration: 500,
                    className:
                      'cursor-pointer rounded text-gray-700 transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary dark:text-gray-300 dark:hover:text-primary',
                    tabIndex: 0,
                    role: 'link',
                    'aria-label': `ไปยังส่วน ${l}`,
                    children: l,
                  },
                  r
                )
              ),
            }),
            e.jsxs('div', {
              className: 'hidden items-center gap-3 sm:flex',
              role: 'region',
              'aria-label': 'ช่องทางติดต่อ',
              children: [
                e.jsx('a', {
                  href: u('line'),
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  'aria-label': 'ติดต่อผ่าน LINE OA',
                  title: 'LINE OA',
                  className:
                    'rounded-full bg-green-500 p-2 text-white shadow transition hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-1',
                  children: e.jsx(j, { className: 'h-5 w-5', 'aria-hidden': 'true' }),
                }),
                e.jsx('a', {
                  href: u('messenger'),
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  'aria-label': 'ติดต่อผ่าน Messenger',
                  title: 'Messenger',
                  className:
                    'rounded-full bg-blue-600 p-2 text-white shadow transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1',
                  children: e.jsx(v, { className: 'h-5 w-5', 'aria-hidden': 'true' }),
                }),
                e.jsxs('a', {
                  href: 'tel:0956636615',
                  title: 'โทรติดต่อ 095-663-6615',
                  className:
                    'flex items-center gap-2 rounded bg-primary px-3 py-1.5 text-sm font-medium text-white shadow transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
                  'aria-label': 'โทรติดต่อ 095-663-6615',
                  children: [
                    e.jsx(D, { className: 'h-4 w-4', 'aria-hidden': 'true' }),
                    e.jsx('span', { children: '095-663-6615' }),
                  ],
                }),
              ],
            }),
            e.jsx('button', {
              ref: n,
              onClick: d,
              className:
                'inline-flex items-center justify-center rounded-md p-2 text-gray-600 transition hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary sm:hidden',
              'aria-label': t ? 'ปิดเมนู' : 'เปิดเมนู',
              'aria-expanded': t,
              'aria-controls': 'mobile-menu',
              type: 'button',
              children: t
                ? e.jsx(_, { className: 'h-5 w-5', 'aria-hidden': 'true' })
                : e.jsx(J, { className: 'h-5 w-5', 'aria-hidden': 'true' }),
            }),
          ],
        }),
        t &&
          e.jsxs('nav', {
            id: 'mobile-menu',
            ref: a,
            className:
              'border-t border-base-300 bg-base-100 px-4 pb-4 pt-2 transition-colors duration-300 dark:border-gray-700 dark:bg-gray-900 sm:hidden',
            role: 'menu',
            'aria-label': 'เมนูนำทางโทรศัพท์มือถือ',
            children: [
              $.map(({ label: l, to: r }) =>
                e.jsx(
                  C.Link,
                  {
                    to: r,
                    smooth: !0,
                    offset: -80,
                    duration: 500,
                    onClick: () => s(!1),
                    className:
                      'block rounded py-2 text-sm font-medium text-gray-700 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary dark:text-gray-200',
                    role: 'menuitem',
                    tabIndex: 0,
                    'aria-label': `ไปยังส่วน ${l}`,
                    children: l,
                  },
                  r
                )
              ),
              e.jsxs('div', {
                className: 'flex items-center gap-3 pt-3',
                role: 'region',
                'aria-label': 'ช่องทางติดต่อมือถือ',
                children: [
                  e.jsx('a', {
                    href: u('line'),
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    title: 'LINE OA',
                    className:
                      'rounded-full bg-green-500 p-2 text-white shadow transition hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400',
                    'aria-label': 'ติดต่อผ่าน LINE OA',
                    children: e.jsx(j, { className: 'h-5 w-5', 'aria-hidden': 'true' }),
                  }),
                  e.jsx('a', {
                    href: u('messenger'),
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    title: 'Messenger',
                    className:
                      'rounded-full bg-blue-600 p-2 text-white shadow transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400',
                    'aria-label': 'ติดต่อผ่าน Messenger',
                    children: e.jsx(v, { className: 'h-5 w-5', 'aria-hidden': 'true' }),
                  }),
                  e.jsxs('a', {
                    href: 'tel:0956636615',
                    title: 'โทรติดต่อ 095-663-6615',
                    className:
                      'flex items-center gap-2 rounded bg-primary px-3 py-1.5 text-sm font-medium text-white shadow transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
                    'aria-label': 'โทรติดต่อ 095-663-6615',
                    children: [
                      e.jsx(D, { className: 'h-4 w-4', 'aria-hidden': 'true' }),
                      e.jsx('span', { children: '095-663-6615' }),
                    ],
                  }),
                ],
              }),
            ],
          }),
      ],
    })
  },
  xe = '/assets/hero-BRaXPQvd.webp',
  me = 'https://lin.ee/BSkkcTR',
  ue = 'https://m.me/JPVisualDocs',
  ge = ({ buttonText: t = 'เข้าสู่ระบบลับ' }) => {
    const s = a => {
      ;(a.preventDefault(), (window.location.href = '/login'))
    }
    return e.jsxs('section', {
      id: 'hero',
      role: 'banner',
      'aria-label': 'ส่วนแนะนำหน้าแรก',
      className:
        'relative flex min-h-[576px] items-center justify-center overflow-hidden px-6 pb-20 pt-24 text-white sm:min-h-screen sm:px-10 sm:pt-32 lg:px-16',
      style: {
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.2)), url(${xe})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        filter: 'brightness(1.05) contrast(1.15)',
      },
      children: [
        e.jsx('div', { className: 'absolute inset-0 z-0 bg-black/40 backdrop-blur-sm' }),
        e.jsxs(k.div, {
          initial: { opacity: 0, y: 40 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.2 },
          className: 'z-10 w-full max-w-3xl text-center',
          children: [
            e.jsx('h1', {
              className:
                'select-text text-3xl font-extrabold leading-tight drop-shadow-xl sm:text-5xl lg:text-6xl',
              children: 'JP Visual & Docs',
            }),
            e.jsx('p', {
              className:
                'mx-auto mt-4 max-w-xl select-text text-base text-white/85 sm:text-lg lg:text-xl',
              children:
                'บริการช่วยจัดการเบื้องหลังทุกเรื่องที่คุณไม่อยากวุ่น — เอกสาร ธุรกิจ และการตลาด พร้อมทำจริง จบไว',
            }),
            e.jsxs(k.button, {
              onClick: s,
              type: 'button',
              className:
                'mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-white/90 px-6 py-3 font-semibold text-gray-900 shadow-xl backdrop-blur-lg transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-gray-300 sm:px-8 sm:py-4',
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.97 },
              'aria-label': 'เข้าสู่ระบบ',
              children: [
                e.jsx(U, { className: 'text-xl sm:text-2xl', 'aria-hidden': 'true' }),
                e.jsx('span', { className: 'text-base sm:text-lg', children: t }),
                e.jsx(O, { className: 'text-xl opacity-70 sm:text-2xl', 'aria-hidden': 'true' }),
              ],
            }),
          ],
        }),
        e.jsxs(k.div, {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.9, duration: 0.6 },
          className:
            'absolute bottom-4 right-4 z-20 flex items-center gap-3 rounded-xl bg-white/90 px-3 py-2 shadow-xl backdrop-blur-md dark:bg-gray-900/80 sm:gap-4 sm:px-4 sm:py-3',
          children: [
            e.jsx(k.a, {
              href: me,
              target: '_blank',
              rel: 'noopener noreferrer',
              title: 'ติดต่อผ่าน LINE',
              className:
                'rounded-full text-green-600 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2',
              whileHover: { scale: 1.1 },
              whileTap: { scale: 0.95 },
              'aria-label': 'ติดต่อผ่าน LINE',
              children: e.jsx(j, { className: 'h-6 w-6 sm:h-7 sm:w-7', 'aria-hidden': 'true' }),
            }),
            e.jsx(k.a, {
              href: ue,
              target: '_blank',
              rel: 'noopener noreferrer',
              title: 'ติดต่อผ่าน Messenger',
              className:
                'rounded-full text-blue-600 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2',
              whileHover: { scale: 1.1 },
              whileTap: { scale: 0.95 },
              'aria-label': 'ติดต่อผ่าน Messenger',
              children: e.jsx(v, { className: 'h-6 w-6 sm:h-7 sm:w-7', 'aria-hidden': 'true' }),
            }),
          ],
        }),
      ],
    })
  },
  A = {
    fullName: '',
    phone: '',
    occupation: '',
    income: '',
    collateralAssets: '',
    businessManagement: '',
    requestedAmount: '',
    legalIssues: '',
    creditIssues: '',
    teamRequirements: '',
  },
  be = () => {
    const [t, s] = o.useState(A),
      [a, n] = o.useState({}),
      [d, l] = o.useState(!1),
      r = () => {
        const c = {}
        return (
          t.fullName.trim() || (c.fullName = 'กรุณากรอกชื่อ-นามสกุล'),
          t.phone.trim()
            ? /^[0-9+() -]{7,20}$/.test(t.phone.trim()) ||
              (c.phone = 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง')
            : (c.phone = 'กรุณากรอกเบอร์โทรศัพท์'),
          t.occupation.trim() || (c.occupation = 'กรุณาระบุอาชีพ'),
          t.income.trim() || (c.income = 'กรุณาระบุรายได้โดยประมาณ'),
          t.collateralAssets.trim() ||
            (c.collateralAssets = 'กรุณาระบุสินทรัพย์ค้ำประกันหรือจำนอง'),
          t.businessManagement.trim() ||
            (c.businessManagement = 'กรุณาระบุสถานะการบริหารธุรกิจหรือการทำงาน'),
          t.requestedAmount.trim() || (c.requestedAmount = 'กรุณาระบุยอดเงินที่ต้องการ'),
          t.legalIssues.trim() || (c.legalIssues = 'กรุณาระบุประวัติการฟ้องร้องใน 3 ปีที่ผ่านมา'),
          t.creditIssues.trim() || (c.creditIssues = 'กรุณาระบุปัญหาบูโรหรือ blacklist หากมี'),
          t.teamRequirements.trim() || (c.teamRequirements = 'กรุณาระบุสิ่งที่ต้องการจากทีมงานเรา'),
          n(c),
          Object.keys(c).length === 0
        )
      },
      i = c => {
        const { name: x, value: h } = c.target
        ;(s(f => ({ ...f, [x]: h })), n(f => ({ ...f, [x]: void 0 })))
      },
      m = () => {
        ;(s(A), n({}), l(!1))
      },
      g = c => {
        if ((c.preventDefault(), !r())) return
        const x = `
ชื่อ-นามสกุล: ${t.fullName}
เบอร์โทรศัพท์: ${t.phone}
ประกอบอาชีพ: ${t.occupation}
รายได้โดยประมาณ: ${t.income}

สินทรัพย์ค้ำประกัน / จำนอง:
${t.collateralAssets}

สถานะบริหารธุรกิจ/การทำงาน:
${t.businessManagement}

ยอดเงินที่ต้องการ: ${t.requestedAmount}

ประวัติการฟ้องร้องใน 3 ปีที่ผ่านมา:
${t.legalIssues}

ปัญหาบูโรหรือ blacklist:
${t.creditIssues}

สิ่งที่ต้องการจากทีมงาน:
${t.teamRequirements}
`.trim(),
          h = `https://line.me/R/msg/text/?${encodeURIComponent(x)}`
        ;(window.open(h, '_blank'), l(!0))
      },
      P = ({ children: c }) =>
        e.jsx('div', { className: 'mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2', children: c }),
      w = ({
        label: c,
        name: x,
        type: h = 'text',
        value: f,
        onChange: p,
        error: y,
        placeholder: T,
        required: I = !1,
        helpText: S,
      }) =>
        e.jsxs('div', {
          children: [
            e.jsxs('label', {
              htmlFor: x,
              className: 'mb-1 block text-sm font-semibold',
              children: [c, ' ', I && e.jsx('span', { className: 'text-red-600', children: '*' })],
            }),
            e.jsx('input', {
              type: h,
              id: x,
              name: x,
              value: f,
              onChange: p,
              placeholder: T,
              required: I,
              className: `w-full rounded-md border px-4 py-2 text-sm transition-all duration-200 focus:outline-none focus:ring-2 ${y ? 'border-red-500 ring-red-300' : 'border-gray-300 focus:ring-blue-400'}`,
              'aria-invalid': !!y,
              'aria-describedby': y ? `${x}-error` : void 0,
            }),
            S && e.jsx('p', { className: 'mt-1 text-xs text-gray-500', children: S }),
            y &&
              e.jsx('p', { className: 'mt-1 text-xs text-red-600', id: `${x}-error`, children: y }),
          ],
        }),
      N = ({
        label: c,
        name: x,
        value: h,
        onChange: f,
        error: p,
        placeholder: y,
        required: T = !1,
        rows: I = 3,
      }) =>
        e.jsxs('div', {
          className: 'mb-5',
          children: [
            e.jsxs('label', {
              htmlFor: x,
              className: 'mb-1 block text-sm font-semibold',
              children: [c, ' ', T && e.jsx('span', { className: 'text-red-600', children: '*' })],
            }),
            e.jsx('textarea', {
              id: x,
              name: x,
              value: h,
              onChange: f,
              placeholder: y,
              rows: I,
              required: T,
              className: `w-full resize-y rounded-md border px-4 py-2 text-sm transition-all duration-200 focus:outline-none focus:ring-2 ${p ? 'border-red-500 ring-red-300' : 'border-gray-300 focus:ring-blue-400'}`,
              'aria-invalid': !!p,
              'aria-describedby': p ? `${x}-error` : void 0,
            }),
            p &&
              e.jsx('p', { className: 'mt-1 text-xs text-red-600', id: `${x}-error`, children: p }),
          ],
        })
    return d
      ? e.jsxs('div', {
          className:
            'mx-auto max-w-2xl rounded-lg border border-green-200 bg-green-50 p-6 text-center text-green-800',
          children: [
            e.jsx('h2', { className: 'mb-3 text-2xl font-bold', children: 'ส่งข้อมูลสำเร็จ' }),
            e.jsx('p', { children: 'ระบบได้เปิดแอป LINE แล้ว กรุณาตรวจสอบข้อความก่อนกดส่ง' }),
            e.jsx('button', {
              onClick: m,
              className:
                'mt-5 rounded bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400',
              type: 'button',
              children: 'ส่งใหม่อีกครั้ง',
            }),
          ],
        })
      : e.jsxs('form', {
          onSubmit: g,
          className: 'mx-auto max-w-3xl rounded-xl bg-white p-6 shadow-lg sm:p-10',
          noValidate: !0,
          'aria-live': 'polite',
          children: [
            e.jsx('h1', {
              className: 'mb-8 text-center text-2xl font-bold sm:text-3xl',
              children: 'ฟอร์มประเมินลูกค้าเบื้องต้น',
            }),
            e.jsxs('fieldset', {
              className: 'mb-8',
              'aria-describedby': 'personal-info-desc',
              children: [
                e.jsx('legend', {
                  className: 'mb-4 text-lg font-semibold',
                  children: 'ข้อมูลส่วนตัว',
                }),
                e.jsx('p', {
                  id: 'personal-info-desc',
                  className: 'sr-only',
                  children: 'กรุณากรอกข้อมูลส่วนตัวให้ครบถ้วน',
                }),
                e.jsxs(P, {
                  children: [
                    e.jsx(w, {
                      label: 'ชื่อ-นามสกุล',
                      name: 'fullName',
                      value: t.fullName,
                      onChange: i,
                      error: a.fullName,
                      required: !0,
                      placeholder: 'กรอกชื่อ-นามสกุล',
                    }),
                    e.jsx(w, {
                      label: 'เบอร์โทรศัพท์',
                      name: 'phone',
                      type: 'tel',
                      value: t.phone,
                      onChange: i,
                      error: a.phone,
                      required: !0,
                      placeholder: '0812345678',
                      helpText: 'กรุณากรอกเบอร์ให้ถูกต้อง',
                    }),
                    e.jsx(w, {
                      label: 'อาชีพ',
                      name: 'occupation',
                      value: t.occupation,
                      onChange: i,
                      error: a.occupation,
                      required: !0,
                      placeholder: 'ระบุอาชีพของท่าน',
                    }),
                    e.jsx(w, {
                      label: 'รายได้โดยประมาณ',
                      name: 'income',
                      value: t.income,
                      onChange: i,
                      error: a.income,
                      required: !0,
                      placeholder: '30,000 บาท/เดือน',
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs('fieldset', {
              className: 'mb-8',
              'aria-describedby': 'business-finance-desc',
              children: [
                e.jsx('legend', {
                  className: 'mb-4 text-lg font-semibold',
                  children: 'ธุรกิจ / การเงิน',
                }),
                e.jsx('p', {
                  id: 'business-finance-desc',
                  className: 'sr-only',
                  children: 'กรุณากรอกข้อมูลเกี่ยวกับธุรกิจและการเงิน',
                }),
                e.jsx(N, {
                  label: 'สินทรัพย์ค้ำประกัน / จำนอง',
                  name: 'collateralAssets',
                  value: t.collateralAssets,
                  onChange: i,
                  error: a.collateralAssets,
                  required: !0,
                  placeholder: 'บ้าน / รถ / ที่ดิน ฯลฯ',
                }),
                e.jsx(N, {
                  label: 'บริหารธุรกิจ/ทำงานอยู่หรือไม่',
                  name: 'businessManagement',
                  value: t.businessManagement,
                  onChange: i,
                  error: a.businessManagement,
                  required: !0,
                  placeholder: 'อธิบายสถานะของคุณ',
                }),
                e.jsx(w, {
                  label: 'ยอดเงินที่ต้องการ',
                  name: 'requestedAmount',
                  value: t.requestedAmount,
                  onChange: i,
                  error: a.requestedAmount,
                  required: !0,
                  placeholder: '100,000 บาท',
                }),
              ],
            }),
            e.jsxs('fieldset', {
              className: 'mb-8',
              'aria-describedby': 'history-needs-desc',
              children: [
                e.jsx('legend', {
                  className: 'mb-4 text-lg font-semibold',
                  children: 'ประวัติและความต้องการ',
                }),
                e.jsx('p', {
                  id: 'history-needs-desc',
                  className: 'sr-only',
                  children: 'กรุณาระบุประวัติและความต้องการของท่าน',
                }),
                e.jsx(N, {
                  label: 'ประวัติการฟ้องร้องใน 3 ปีที่ผ่านมา',
                  name: 'legalIssues',
                  value: t.legalIssues,
                  onChange: i,
                  error: a.legalIssues,
                  required: !0,
                  placeholder: "ใส่ 'ไม่มี' หากไม่มี",
                  rows: 4,
                }),
                e.jsx(N, {
                  label: 'ปัญหาบูโรหรือ blacklist',
                  name: 'creditIssues',
                  value: t.creditIssues,
                  onChange: i,
                  error: a.creditIssues,
                  required: !0,
                  placeholder: "ใส่ 'ไม่มี' หากไม่มี",
                  rows: 4,
                }),
                e.jsx(N, {
                  label: 'สิ่งที่ต้องการจากทีมงาน',
                  name: 'teamRequirements',
                  value: t.teamRequirements,
                  onChange: i,
                  error: a.teamRequirements,
                  required: !0,
                  placeholder: 'ต้องการให้ทีมงานช่วยอะไรบ้าง',
                  rows: 4,
                }),
              ],
            }),
            e.jsx('button', {
              type: 'submit',
              className:
                'w-full rounded bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400',
              'aria-label': 'ส่งข้อมูลประเมิน',
              children: 'ส่งข้อมูลประเมิน',
            }),
          ],
        })
  },
  F = [
    {
      id: 'doc-001',
      name: 'ศรัณย์ พิทักษ์ชาญชัย',
      documentTitle: 'จัดเตรียมเอกสารจำนองที่ดิน',
      receivedDate: '2025-07-09T09:15:00+07:00',
      status: 'เสร็จสมบูรณ์',
    },
    {
      id: 'doc-002',
      name: 'อรินทรา ทองเจริญ',
      documentTitle: 'ขอหนังสือรับรองบริษัทและงบดุล',
      receivedDate: '2025-07-08T10:45:00+07:00',
      status: 'เสร็จสมบูรณ์',
    },
    {
      id: 'doc-003',
      name: 'ณัฐวัฒน์ ชัยวรรณ',
      documentTitle: 'ตรวจสอบโฉนดที่ดินพร้อมแบบบ้าน',
      receivedDate: '2025-07-07T14:20:00+07:00',
      status: 'กำลังดำเนินการ',
    },
    {
      id: 'doc-004',
      name: 'ปรียานุช ศรีทอง',
      documentTitle: 'ยื่นแบบคำร้องเปลี่ยนกรรมสิทธิ์',
      receivedDate: '2025-07-06T11:05:00+07:00',
      status: 'เสร็จสมบูรณ์',
    },
    {
      id: 'doc-005',
      name: 'ธีรภัทร์ เจริญสุข',
      documentTitle: 'ร่างสัญญาซื้อขายและแนบเอกสาร',
      receivedDate: '2025-07-05T15:40:00+07:00',
      status: 'เสร็จสมบูรณ์',
    },
    {
      id: 'doc-006',
      name: 'สุนิสา ไชยพงศ์',
      documentTitle: 'ปรึกษากฎหมายการซื้อขายที่ดิน',
      receivedDate: '2025-07-04T13:25:00+07:00',
      status: 'กำลังดำเนินการ',
    },
    {
      id: 'doc-007',
      name: 'พงศกร วัฒนกิจ',
      documentTitle: 'เตรียมแบบฟอร์มจำนองพร้อมสัญญา',
      receivedDate: '2025-07-03T08:55:00+07:00',
      status: 'เสร็จสมบูรณ์',
    },
    {
      id: 'doc-008',
      name: 'นภัสกร สายทอง',
      documentTitle: 'แปลเอกสารต่างประเทศและรับรอง',
      receivedDate: '2025-07-02T12:10:00+07:00',
      status: 'กำลังดำเนินการ',
    },
    {
      id: 'doc-009',
      name: 'วิษณุ เทพารักษ์',
      documentTitle: 'ตรวจสอบสิทธิ์ในที่ดินก่อนซื้อขาย',
      receivedDate: '2025-07-01T09:30:00+07:00',
      status: 'เสร็จสมบูรณ์',
    },
    {
      id: 'doc-010',
      name: 'กิตติพงษ์ เสริมสุข',
      documentTitle: 'ประสานงานกับสำนักงานที่ดิน',
      receivedDate: '2025-06-30T16:45:00+07:00',
      status: 'เสร็จสมบูรณ์',
    },
    {
      id: 'doc-011',
      name: 'ปริญญา วงศ์ทอง',
      documentTitle: 'รับมอบอำนาจจัดการเรื่องกรรมสิทธิ์',
      receivedDate: '2025-06-29T14:00:00+07:00',
      status: 'กำลังดำเนินการ',
    },
    {
      id: 'doc-012',
      name: 'กนกวรรณ ศรีสวัสดิ์',
      documentTitle: 'ออกแบบแผนผังทรัพย์สินประกอบคำร้อง',
      receivedDate: '2025-06-28T11:20:00+07:00',
      status: 'เสร็จสมบูรณ์',
    },
    {
      id: 'doc-013',
      name: 'อานนท์ บุญมา',
      documentTitle: 'เตรียมสัญญาเช่าระยะยาวพร้อมแนบท้าย',
      receivedDate: '2025-06-27T15:55:00+07:00',
      status: 'เสร็จสมบูรณ์',
    },
    {
      id: 'doc-014',
      name: 'จารุวรรณ เทพสุริยะ',
      documentTitle: 'แนบเอกสารการเงินสำหรับขอกู้แบงก์',
      receivedDate: '2025-06-26T10:10:00+07:00',
      status: 'กำลังดำเนินการ',
    },
    {
      id: 'doc-015',
      name: 'มนูญ แก้วมณี',
      documentTitle: 'ประสานงานราชการเรื่องเอกสารสิทธิ์',
      receivedDate: '2025-06-25T09:45:00+07:00',
      status: 'เสร็จสมบูรณ์',
    },
  ],
  he = t =>
    new Date(t).toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' }),
  fe = {
    เสร็จสมบูรณ์: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    กำลังดำเนินการ: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    ยกเลิกแล้ว: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
  },
  pe = {
    เสร็จสมบูรณ์: e.jsx(K, {
      className: 'inline text-green-600 dark:text-green-400',
      'aria-hidden': 'true',
    }),
    กำลังดำเนินการ: e.jsx(X, {
      className: 'inline text-yellow-500 dark:text-yellow-400',
      'aria-hidden': 'true',
    }),
    ยกเลิกแล้ว: e.jsx(H, {
      className: 'inline text-red-500 dark:text-red-400',
      'aria-hidden': 'true',
    }),
  },
  ye = ({ customer: t, loading: s = !1 }) => {
    if (s)
      return e.jsxs('div', {
        className:
          'w-full animate-pulse rounded-2xl border border-base-300 bg-base-100 p-6 shadow-md dark:border-zinc-700 dark:bg-zinc-900',
        'aria-busy': 'true',
        'aria-label': 'กำลังโหลดข้อมูลลูกค้า',
        children: [
          e.jsx('div', { className: 'mb-4 h-6 w-3/4 rounded bg-base-300 dark:bg-zinc-700' }),
          e.jsxs('div', {
            className: 'space-y-3',
            children: [
              e.jsx('div', { className: 'h-4 w-1/2 rounded bg-base-300 dark:bg-zinc-700' }),
              e.jsx('div', { className: 'h-4 w-2/3 rounded bg-base-300 dark:bg-zinc-700' }),
            ],
          }),
          e.jsx('div', { className: 'mt-5 h-5 w-24 rounded-full bg-base-300 dark:bg-zinc-700' }),
        ],
      })
    if (!t) return null
    const a = fe[t.status] ?? 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
      n = pe[t.status] ?? null
    return e.jsxs('article', {
      className:
        'flex flex-col justify-between rounded-2xl border border-base-300 bg-base-100 p-6 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-700 dark:bg-base-200',
      role: 'group',
      'aria-label': `ลูกค้า: ${t.name}, สถานะ: ${t.status}`,
      tabIndex: 0,
      children: [
        e.jsxs('header', {
          className: 'flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between',
          children: [
            e.jsx('h3', {
              className: 'truncate text-lg font-bold text-primary',
              title: t.name,
              tabIndex: -1,
              children: t.name,
            }),
            e.jsxs('span', {
              className: `inline-flex select-none items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${a}`,
              'aria-live': 'polite',
              'aria-atomic': 'true',
              role: 'status',
              children: [n, ' ', e.jsx('span', { children: t.status })],
            }),
          ],
        }),
        e.jsxs('section', {
          className: 'mt-5 space-y-4 text-sm text-base-content/80',
          children: [
            e.jsxs('div', {
              className: 'flex items-start gap-3',
              children: [
                e.jsx(B, {
                  className: 'mt-1 shrink-0 text-blue-500 dark:text-blue-400',
                  'aria-hidden': 'true',
                }),
                e.jsxs('p', {
                  className: 'break-words leading-snug',
                  children: [
                    e.jsx('strong', { children: 'บริการ:' }),
                    ' ',
                    t.documentTitle || 'จัดการเอกสารทั่วไป',
                  ],
                }),
              ],
            }),
            e.jsxs('div', {
              className: 'flex items-start gap-3',
              children: [
                e.jsx(V, {
                  className: 'mt-1 shrink-0 text-teal-500 dark:text-teal-400',
                  'aria-hidden': 'true',
                }),
                e.jsxs('p', {
                  className: 'break-words leading-snug',
                  children: [
                    e.jsx('strong', { children: 'อัปเดตล่าสุด:' }),
                    ' ',
                    he(t.receivedDate),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    })
  },
  je = () => {
    const [t, s] = o.useState(!1),
      [a, n] = o.useState('ล่าสุด'),
      d = o.useRef(null),
      l = o.useMemo(() => {
        const r = [...F]
        return a === 'สถานะ'
          ? r.sort((i, m) => (i.status === m.status ? 0 : i.status === 'เสร็จสมบูรณ์' ? -1 : 1))
          : r.sort(
              (i, m) => new Date(m.receivedDate).getTime() - new Date(i.receivedDate).getTime()
            )
      }, [a])
    return (
      o.useEffect(() => {
        t && d.current && d.current.focus()
      }, [t]),
      e.jsx('section', {
        id: 'feature',
        'aria-labelledby': 'feature-heading',
        className:
          'bg-gradient-to-br from-base-200 to-base-300 py-20 transition-colors duration-500 dark:from-zinc-900 dark:to-zinc-800',
        role: 'region',
        'aria-live': 'polite',
        'aria-atomic': 'true',
        children: e.jsxs('div', {
          className: 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
          children: [
            e.jsxs('header', {
              className: 'mx-auto mb-12 max-w-2xl text-center',
              children: [
                e.jsx('h2', {
                  id: 'feature-heading',
                  className: 'text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl',
                  children: '📁 งานที่เราได้ดูแลให้ลูกค้าแล้ว',
                }),
                e.jsx('p', {
                  className: 'mt-3 text-base text-zinc-600 dark:text-zinc-400',
                  children:
                    'เราช่วยวางแผน ตรวจเอกสาร และประสานงานกับหน่วยงานต่าง ๆ ให้ลูกค้าตั้งแต่ต้นจนจบ',
                }),
              ],
            }),
            e.jsxs('div', {
              className: 'mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between',
              children: [
                e.jsxs('div', {
                  className:
                    'flex flex-wrap items-center gap-4 text-sm text-zinc-600 dark:text-zinc-300',
                  children: [
                    e.jsxs('div', {
                      className: 'flex items-center gap-2',
                      'aria-live': 'polite',
                      'aria-atomic': 'true',
                      children: [
                        e.jsx(E, { className: 'text-base text-zinc-500', 'aria-hidden': 'true' }),
                        e.jsxs('span', {
                          children: [
                            'ทั้งหมด ',
                            e.jsx('strong', { children: F.length }),
                            ' รายการ',
                          ],
                        }),
                      ],
                    }),
                    e.jsxs('label', {
                      htmlFor: 'sort-order-select',
                      className: 'inline-flex cursor-pointer items-center gap-2',
                      children: [
                        e.jsx(Q, { 'aria-hidden': 'true' }),
                        e.jsxs('select', {
                          id: 'sort-order-select',
                          value: a,
                          onChange: r => n(r.target.value),
                          className:
                            'rounded border border-zinc-300 bg-white px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-800',
                          'aria-label': 'จัดเรียงรายการ',
                          children: [
                            e.jsx('option', { value: 'ล่าสุด', children: 'ล่าสุด' }),
                            e.jsx('option', { value: 'สถานะ', children: 'สถานะ' }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs('div', {
                  className: 'flex flex-wrap justify-start gap-3 sm:justify-end',
                  children: [
                    e.jsxs('button', {
                      onClick: () => s(r => !r),
                      'aria-expanded': t,
                      'aria-controls': 'customer-assessment-form',
                      type: 'button',
                      className:
                        'inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white shadow transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-400',
                      children: [
                        e.jsx(Z, { 'aria-hidden': 'true' }),
                        e.jsx('span', { children: t ? 'ซ่อนแบบฟอร์ม' : 'ส่งคำขอให้เราช่วยดูแล' }),
                        e.jsx('svg', {
                          className: `h-4 w-4 transition-transform duration-300 ${t ? 'rotate-180' : 'rotate-0'}`,
                          fill: 'none',
                          stroke: 'currentColor',
                          strokeWidth: 2,
                          viewBox: '0 0 24 24',
                          'aria-hidden': 'true',
                          children: e.jsx('path', {
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            d: 'M19 9l-7 7-7-7',
                          }),
                        }),
                      ],
                    }),
                    e.jsxs('button', {
                      onClick: () => alert('เปิดดูทั้งหมด'),
                      type: 'button',
                      className:
                        'inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-4 py-2 text-zinc-800 transition hover:bg-zinc-200 focus:outline-none focus:ring-4 focus:ring-zinc-400 dark:bg-zinc-700 dark:text-white dark:hover:bg-zinc-600 dark:focus:ring-zinc-600',
                      children: [
                        e.jsx(E, { 'aria-hidden': 'true' }),
                        e.jsx('span', { children: 'ดูทั้งหมด' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            t
              ? e.jsx('div', {
                  id: 'customer-assessment-form',
                  ref: d,
                  tabIndex: -1,
                  'aria-live': 'polite',
                  'aria-label': 'ฟอร์มส่งคำขอให้ช่วยดูแล',
                  className:
                    'mx-auto max-w-3xl rounded-xl border border-zinc-200 bg-white p-6 shadow-md dark:border-zinc-800 dark:bg-zinc-900',
                  children: e.jsx(be, {}),
                })
              : e.jsx('ul', {
                  className:
                    'grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5',
                  role: 'list',
                  'aria-labelledby': 'feature-heading',
                  children: l.map(r =>
                    e.jsx('li', { className: 'h-full', children: e.jsx(ye, { customer: r }) }, r.id)
                  ),
                }),
          ],
        }),
      })
    )
  },
  ve = [
    {
      label: 'ลูกค้าที่ไว้วางใจ',
      value: '2,450+',
      icon: e.jsx(G, { 'aria-hidden': 'true', className: 'text-primary' }),
    },
    {
      label: 'โปรเจกต์ที่ส่งมอบสำเร็จ',
      value: '1,200+',
      icon: e.jsx(Y, { 'aria-hidden': 'true', className: 'text-primary' }),
    },
    {
      label: 'คะแนนรีวิวเฉลี่ย',
      value: '4.9 / 5.0',
      icon: e.jsx(W, { 'aria-hidden': 'true', className: 'text-primary' }),
    },
  ],
  we = () =>
    e.jsx('section', {
      role: 'region',
      'aria-labelledby': 'stats-title',
      className:
        'w-full bg-gradient-to-br from-base-200 to-base-300 py-16 text-base-content transition-colors duration-300 dark:from-zinc-900 dark:to-zinc-800',
      children: e.jsxs('div', {
        className: 'mx-auto max-w-6xl space-y-10 px-4 text-center',
        children: [
          e.jsxs('header', {
            children: [
              e.jsx('h2', {
                id: 'stats-title',
                className:
                  'mb-2 select-text text-2xl font-bold tracking-tight text-primary sm:text-3xl',
                children: 'สถิติที่สร้างความมั่นใจ',
              }),
              e.jsx('p', {
                className:
                  'mx-auto max-w-xl select-text text-sm text-zinc-600 dark:text-zinc-400 sm:text-base',
                children:
                  'เรามุ่งเน้นการให้บริการอย่างมีมาตรฐาน โปร่งใส และสร้างผลงานที่เชื่อถือได้',
              }),
            ],
          }),
          e.jsx('div', {
            className: 'grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8',
            children: ve.map(({ label: t, value: s, icon: a }, n) =>
              e.jsxs(
                'article',
                {
                  role: 'group',
                  tabIndex: 0,
                  'aria-label': `${t} จำนวน ${s}`,
                  className:
                    'flex flex-col items-center justify-center space-y-3 rounded-xl bg-white p-6 shadow-lg outline-none transition-transform duration-300 ease-in-out hover:scale-105 focus:scale-105 focus:outline focus:outline-2 focus:outline-primary dark:bg-zinc-900',
                  children: [
                    e.jsx('div', { className: 'text-5xl', children: a }),
                    e.jsx('div', {
                      className: 'select-text text-4xl font-extrabold text-primary',
                      children: s,
                    }),
                    e.jsx('p', {
                      className: 'select-text text-sm text-zinc-500 dark:text-zinc-400',
                      children: t,
                    }),
                  ],
                },
                n
              )
            ),
          }),
        ],
      }),
    }),
  Ne = ({
    icon: t,
    title: s,
    description: a,
    link: n,
    imageUrl: d,
    altText: l,
    disabled: r = !1,
  }) =>
    e.jsxs('article', {
      role: 'region',
      'aria-label': `${s}${r ? ' - กำลังจะมาเร็วๆ นี้' : ''}`,
      'aria-disabled': r,
      tabIndex: r ? -1 : 0,
      className: `group flex h-full flex-col justify-between overflow-hidden rounded-3xl border shadow-sm transition-shadow duration-300 ${r ? 'cursor-not-allowed border-yellow-400 bg-yellow-50 opacity-70 dark:border-yellow-600 dark:bg-yellow-900' : 'cursor-pointer border-base-200 bg-base-100 hover:border-primary hover:shadow-xl dark:bg-base-300 dark:hover:border-primary'} select-text text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:text-left`,
      children: [
        d
          ? e.jsx('img', {
              src: d,
              alt: l ?? s,
              loading: 'lazy',
              className:
                'h-40 w-full object-cover object-center transition-transform duration-300 group-hover:scale-105 sm:h-48',
              onError: i => {
                i.currentTarget.style.display = 'none'
              },
              decoding: 'async',
              draggable: !1,
              fetchPriority: 'low',
            })
          : e.jsx('div', {
              className: `mx-auto mb-4 mt-6 flex h-16 w-16 items-center justify-center rounded-full text-4xl sm:mx-0 sm:justify-start ${r ? 'bg-yellow-200 text-yellow-700 dark:bg-yellow-700 dark:text-yellow-300' : 'bg-primary/10 text-primary'}`,
              'aria-hidden': 'true',
              children: e.jsx(t, {}),
            }),
        e.jsxs('div', {
          className: 'flex flex-grow flex-col px-6 pb-6 pt-2 sm:pt-0',
          children: [
            e.jsx('h3', {
              title: s,
              className: `mb-2 truncate text-lg font-extrabold sm:text-xl ${r ? 'text-yellow-700 dark:text-yellow-400' : 'text-base-content'}`,
              children: s,
            }),
            e.jsx('p', {
              className: `mb-4 line-clamp-4 text-sm sm:text-base ${r ? 'text-yellow-800 dark:text-yellow-300' : 'text-base-content/80'}`,
              children: a,
            }),
            n &&
              !r &&
              e.jsx('div', {
                className: 'mt-auto',
                children: e.jsx('a', {
                  href: n,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  'aria-label': `อ่านเพิ่มเติมเกี่ยวกับ ${s}`,
                  className:
                    'hover:text-primary-focus inline-block rounded text-sm font-semibold text-primary transition duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:text-base',
                  children: 'อ่านเพิ่มเติม →',
                }),
              }),
          ],
        }),
      ],
    }),
  L = [
    {
      id: 1,
      title: 'ที่ปรึกษายื่นกู้สินเชื่อ',
      description:
        'บริการดูแลครบวงจร ตั้งแต่การวิเคราะห์เงื่อนไขธนาคาร จัดเตรียมเอกสาร จนถึงยื่นเรื่อง เพิ่มโอกาสอนุมัติจริง',
      price: '4,000 - 300,000 บาท',
      image: '/images/services/service1.webp',
      altText: 'ภาพประกอบบริการที่ปรึกษายื่นกู้สินเชื่อ',
      available: !0,
    },
    {
      id: 2,
      title: 'รับดูแลเอกสารยื่นวีซ่า',
      description:
        'ตรวจสอบและจัดเตรียมเอกสารยื่นวีซ่าแบบมืออาชีพ พร้อมคำแนะนำปรับแต่งให้ตรงตามข้อกำหนด',
      price: 'เริ่มต้น 4,000 บาท',
      image: '/images/services/service2.webp',
      altText: 'ภาพประกอบบริการดูแลเอกสารยื่นวีซ่า',
      available: !0,
    },
    {
      id: 3,
      title: 'แก้ไข / สร้างใหม่ สลิป / เอกสาร',
      description:
        'แก้ไขหรือสร้างเอกสารใหม่แบบเหมือนจริง เหมาะกับงานที่ต้องการความยืดหยุ่นสูง ใช้ฟอนต์และพื้นหลังล่าสุด',
      price: '100 บาท / ใบ',
      image: '/images/services/service3.webp',
      altText: 'ภาพประกอบบริการแก้ไขและสร้างใหม่สลิปเอกสาร',
      available: !0,
    },
    {
      id: 4,
      title: 'แก้ไข - สร้างใหม่ - จัดหาเอกสาร',
      description:
        'ครบทุกขั้นตอน ตั้งแต่แก้ไขจนถึงจัดหาเอกสารพิเศษเฉพาะ เหมาะกับผู้ต้องการความแม่นยำและความรวดเร็ว',
      price: 'เริ่มต้น 400 - 600 บาท',
      image: '/images/services/service4.webp',
      altText: 'ภาพประกอบบริการเอกสารเฉพาะทาง',
      available: !0,
    },
    {
      id: 5,
      title: 'ชิ้นงานจริง บัตรแข็ง / อ่อน',
      description: 'ผลิตบัตรจริงพร้อมลายน้ำและ QR ตรวจสอบ ส่งตรงถึงมือ พร้อมความปลอดภัยขั้นสูงสุด',
      price: 'เริ่มต้น 4,500 บาท',
      image: '/images/services/service5.webp',
      altText: 'ภาพประกอบบริการผลิตบัตรแข็งและบัตรอ่อน',
      available: !0,
    },
    {
      id: 6,
      title: 'ดูแลการตลาดครบวงจร',
      description:
        'วางกลยุทธ์ สร้างคอนเทนต์ ทำโฆษณาให้ครบจบในที่เดียว ทั้งออนไลน์และออฟไลน์ พร้อมรีพอร์ตผลลัพธ์',
      price: '5,000 - 500,000 บาท',
      image: '/images/services/service6.webp',
      altText: 'ภาพประกอบบริการดูแลการตลาดครบวงจร',
      available: !0,
    },
    {
      id: 7,
      title: 'ออกแบบโลโก้ / แบนเนอร์ / ทีม',
      description:
        'สร้างสื่อแบรนด์คุณภาพสูง พร้อมไฟล์ต้นฉบับและไฟล์ใช้งานทุกช่องทาง รองรับการใช้งานจริง',
      price: 'เริ่มต้น 300 บาท',
      image: '/images/services/service7.webp',
      altText: 'ภาพประกอบบริการออกแบบโลโก้และทีม',
      available: !0,
    },
    {
      id: 8,
      title: 'ระบบหลังบ้านธุรกิจ',
      description:
        'ตั้งค่าระบบแจ้งเตือน, Line OA, Telegram, บอทตอบอัตโนมัติ ช่วยคุณบริหารลูกค้าได้ตลอด 24 ชม.',
      price: 'เริ่มต้น 4,000 บาท',
      image: '/images/services/service8.webp',
      altText: 'ภาพประกอบบริการระบบหลังบ้านธุรกิจ',
      available: !0,
    },
    {
      id: 9,
      title: 'โครงการให้น้องได้พักผ่อน',
      description:
        'ระบบจัดการกลุ่มปิดและดึงลูกค้าเข้าระบบแบบอัตโนมัติ พร้อม AI ช่วยดูแลลูกค้าและทีมงาน',
      price: 'เริ่มต้น 5,000 บาท',
      image: '/images/services/service9.webp',
      altText: 'ภาพประกอบบริการระบบดูแลลูกค้าภายใน',
      available: !0,
    },
    {
      id: 10,
      title: 'สร้างภาพลักษณ์ / ทำลายภาพลักษณ์',
      description:
        'บริการรีแบรนด์ทั้งองค์กรหรือบุคคล รองรับทั้งภาพบวกและลบ (ไม่ละเมิดกฎหมาย) อย่างมืออาชีพ',
      price: 'เริ่มต้น 5,000 บาท',
      image: '/images/services/service10.webp',
      altText: 'ภาพประกอบบริการสร้างหรือปรับภาพลักษณ์',
      available: !0,
    },
    {
      id: 11,
      title: 'บริการใหม่กำลังจะมา',
      description: 'เตรียมเปิดตัวบริการใหม่ ที่ตอบโจทย์กลุ่มเป้าหมายมากยิ่งขึ้น',
      price: '-',
      image: '/images/services/service11.webp',
      altText: 'ภาพประกอบบริการใหม่กำลังเปิดตัว',
      available: !1,
      comingSoonNote: 'เปิดตัวเร็ว ๆ นี้',
    },
    {
      id: 12,
      title: 'Coming Soon',
      description: 'กำลังอัปเดตบริการใหม่ โปรดติดตามเร็ว ๆ นี้',
      price: '-',
      image: '/images/services/service12.webp',
      altText: 'ภาพประกอบบริการใหม่ Coming Soon',
      available: !1,
      comingSoonNote: 'ติดตามเร็ว ๆ นี้',
    },
  ],
  R = [ee, te, se, ae, re, ie],
  ke = () =>
    L.length
      ? e.jsx('section', {
          id: 'services',
          role: 'region',
          'aria-labelledby': 'services-heading',
          className:
            'bg-base-100 px-4 py-20 transition-colors duration-500 dark:bg-gray-900 sm:px-6 lg:px-12',
          children: e.jsxs('div', {
            className: 'mx-auto max-w-7xl',
            children: [
              e.jsx('h2', {
                id: 'services-heading',
                className:
                  'mb-6 select-text text-center font-heading text-3xl font-extrabold tracking-tight text-primary sm:text-4xl',
                children: 'บริการของเรา',
              }),
              e.jsx('p', {
                className:
                  'mx-auto mb-14 max-w-3xl select-text text-center text-base text-gray-700 dark:text-gray-300 sm:text-lg',
                children:
                  'บริการหลากหลายที่ออกแบบเพื่อเสริมศักยภาพธุรกิจคุณอย่างมั่นคงและยั่งยืน 🚀',
              }),
              e.jsx('ul', {
                role: 'list',
                'aria-labelledby': 'services-heading',
                className: 'grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3',
                children: L.map((t, s) => {
                  const a = !t.available,
                    n = R[s % R.length]
                  return e.jsxs(
                    'li',
                    {
                      role: 'listitem',
                      'aria-label': `บริการ: ${t.title}${a ? ' (เร็วๆ นี้)' : ''}`,
                      className: 'relative',
                      children: [
                        e.jsx(Ne, {
                          icon: n,
                          title: t.title,
                          description: t.description,
                          link: a ? void 0 : u('line', `สนใจบริการ: ${t.title}`),
                          imageUrl: t.image,
                          altText: t.altText,
                          disabled: a,
                        }),
                        a &&
                          t.comingSoonNote &&
                          e.jsxs('div', {
                            role: 'note',
                            'aria-live': 'polite',
                            className:
                              'absolute right-4 top-4 animate-pulse select-none rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold italic text-yellow-800 shadow-md dark:bg-yellow-900 dark:text-yellow-400',
                            children: ['🚧 ', t.comingSoonNote],
                          }),
                      ],
                    },
                    t.id
                  )
                }),
              }),
              e.jsx('div', {
                className: 'mt-20 text-center',
                children: e.jsxs('p', {
                  className: 'select-text text-sm text-gray-600 dark:text-gray-400',
                  children: [
                    'ต้องการบริการเฉพาะทางหรือไม่พบสิ่งที่ต้องการ?',
                    ' ',
                    e.jsx('a', {
                      href: u('line', 'สอบถามบริการเพิ่มเติม'),
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      className:
                        'text-primary underline underline-offset-2 hover:text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
                      children: 'ติดต่อเรา',
                    }),
                  ],
                }),
              }),
            ],
          }),
        })
      : e.jsx('section', {
          id: 'services',
          role: 'region',
          'aria-labelledby': 'services-heading',
          className:
            'bg-base-100 px-4 py-20 transition-colors duration-500 dark:bg-gray-900 sm:px-6 lg:px-12',
          children: e.jsxs('div', {
            className: 'mx-auto max-w-7xl text-center',
            children: [
              e.jsx('h2', {
                id: 'services-heading',
                className:
                  'mb-6 select-text font-heading text-3xl font-extrabold tracking-tight text-primary sm:text-4xl',
                children: 'บริการของเรา',
              }),
              e.jsx('p', {
                className: 'select-none text-gray-500 dark:text-gray-400',
                children: 'ขณะนี้ยังไม่มีข้อมูลบริการ',
              }),
            ],
          }),
        }),
  Te = '/assets/about-IgS6mAQi.webp',
  Ie = '/assets/signature-BovtCThw.webp',
  Se = () => {
    const t = [
      { icon: e.jsx(j, { 'aria-hidden': 'true' }), label: 'LINE', href: u('line') },
      { icon: e.jsx(M, { 'aria-hidden': 'true' }), label: 'Facebook', href: u('facebook') },
      { icon: e.jsx(v, { 'aria-hidden': 'true' }), label: 'Messenger', href: u('messenger') },
      { icon: e.jsx(ne, { 'aria-hidden': 'true' }), label: 'Email', href: u('email') },
    ]
    return e.jsx('section', {
      id: 'about',
      'aria-labelledby': 'about-heading',
      className:
        'bg-base-100 py-20 text-center transition-colors duration-300 dark:bg-gray-900 sm:py-24 lg:py-32',
      children: e.jsxs('div', {
        className: 'mx-auto max-w-6xl px-4 sm:px-6 lg:px-8',
        children: [
          e.jsx('h2', {
            id: 'about-heading',
            className:
              'mb-12 select-none text-3xl font-extrabold tracking-tight text-primary sm:text-4xl',
            children: 'เกี่ยวกับเรา',
          }),
          e.jsx('div', {
            className: 'mx-auto mb-12 max-w-2xl sm:mb-16',
            children: e.jsx('img', {
              src: Te,
              alt: 'ภาพเกี่ยวกับเรา',
              loading: 'lazy',
              decoding: 'async',
              onError: s => (s.currentTarget.style.display = 'none'),
              draggable: !1,
              className: 'w-full select-none rounded-2xl shadow-xl ring-1 ring-primary/20',
            }),
          }),
          e.jsxs('div', {
            className:
              'mx-auto max-w-3xl space-y-6 text-left leading-relaxed text-gray-700 dark:text-gray-300 sm:text-center sm:text-lg',
            children: [
              e.jsxs('p', {
                children: [
                  e.jsx('strong', { className: 'text-primary', children: 'JP - VISUAL & DOCS' }),
                  e.jsx('br', {}),
                  'ธุรกิจสีเทาที่ออกแบบมาให้ได้มาตรฐานเท่าที่สามารถแสดงได้ เราพร้อมร่วมงานกับทุกสายอาชีพ ทุกวงการ และพร้อมสร้างเครื่องมือที่ตอบโจทย์จริงให้ทุกคน',
                ],
              }),
              e.jsx('p', {
                children:
                  'เรายินดีให้คำปรึกษาแบบตรงไปตรงมา ด้วยข้อมูลจริง พร้อมอธิบายเปอร์เซ็นต์ความเสี่ยงและผลลัพธ์อย่างโปร่งใส — เราไม่ขายฝัน',
              }),
              e.jsx('p', {
                children:
                  'หากคุณมีคำถามเพิ่มเติม หรือรายละเอียดที่ไม่สามารถเปิดเผยได้บนเว็บไซต์ สามารถสอบถามแอดมินของเราได้ตลอด 24 ชั่วโมง',
              }),
              e.jsx('p', {
                children:
                  'หากคุณอยากคุยกับผมโดยตรง บอกแอดมินได้เลย รับรองว่าคุณจะรู้สึกปลอดภัย และสบายใจที่ได้คุยแน่นอน',
              }),
              e.jsxs('p', {
                className: 'select-text font-semibold italic text-gray-600 dark:text-gray-400',
                children: ['ผมไม่ใช่คนที่เก่งที่สุด', e.jsx('br', {}), 'แต่ผมมีทีมงานที่เก่ง'],
              }),
            ],
          }),
          e.jsx('div', {
            className:
              'mt-12 flex flex-wrap justify-center gap-6 text-2xl text-primary sm:text-3xl',
            children: t.map(({ icon: s, label: a, href: n }) =>
              e.jsx(
                'a',
                {
                  href: n,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  'aria-label': `ติดต่อผ่าน ${a}`,
                  className:
                    'rounded transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
                  children: s,
                },
                a
              )
            ),
          }),
          e.jsx('div', {
            className: 'mt-14 flex justify-center',
            children: e.jsx('img', {
              src: Ie,
              alt: 'ลายเซ็น',
              loading: 'lazy',
              decoding: 'async',
              draggable: !1,
              onError: s => (s.currentTarget.style.display = 'none'),
              className: 'pointer-events-none w-32 select-none sm:w-48',
              style: {
                filter: 'brightness(1.4) contrast(1.6) drop-shadow(0 0 4px rgba(255,255,255,0.3))',
              },
            }),
          }),
          e.jsx('p', {
            className: 'mt-10 select-text text-xs text-gray-500 dark:text-gray-400',
            children:
              '* ข้อมูลทั้งหมดเป็นความจริงตามสถานการณ์ปัจจุบัน และไม่มีการเก็บข้อมูลใดๆ โดยไม่ได้รับอนุญาต',
          }),
        ],
      }),
    })
  },
  q = [
    {
      id: 1,
      name: 'คุณแพรว - เจ้าของธุรกิจออนไลน์',
      feedback:
        '“JP ช่วยจัดระบบเอกสารและทำแบรนด์ให้ดูน่าเชื่อถือมากขึ้น ลูกค้าตัดสินใจเร็วขึ้นกว่าเดิมเยอะเลยค่ะ”',
      date: '12 มิ.ย. 2025',
    },
    {
      id: 2,
      name: 'คุณไมค์ - ผู้ก่อตั้ง StartUp',
      feedback:
        '“พวกเขามีความเป็นมืออาชีพสูงมาก ทุกงานเสร็จตรงเวลา และมีความเข้าใจเชิงธุรกิจจริง ๆ”',
      date: '8 พ.ค. 2025',
    },
    {
      id: 3,
      name: 'คุณแอม - เจ้าของร้านความงาม',
      feedback:
        '“ใช้บริการด้านการตลาดครบวงจรของ JP แล้วร้านเราดูโปรขึ้นทันทีเลยค่ะ คนติดตามเพิ่มขึ้นเรื่อย ๆ”',
      date: '24 เม.ย. 2025',
    },
    {
      id: 4,
      name: 'คุณนนท์ - ที่ปรึกษาทางธุรกิจ',
      feedback:
        '“ทีม JP มีความเข้าใจลึกซึ้งในเรื่อง branding และ UX/UI ช่วยให้ presentation ของเรานำเสนอได้อย่างมืออาชีพมากขึ้น”',
      date: '19 เม.ย. 2025',
    },
    {
      id: 5,
      name: 'คุณบี - ผู้จัดการฝ่ายการตลาด',
      feedback: '“ระบบเอกสารที่พวกเขาทำให้เราลดเวลาการทำงานได้เยอะมาก ข้อมูลทุกอย่างหาเจอไวสุด ๆ”',
      date: '3 เม.ย. 2025',
    },
    {
      id: 6,
      name: 'คุณจูน - CEO บริษัทเทคโนโลยี',
      feedback:
        '“เราใช้ JP ในการออกแบบพอร์ตลงทุนและรายงานลูกค้า ทุกอย่างดู modern และน่าเชื่อถือมาก”',
      date: '20 มี.ค. 2025',
    },
    {
      id: 7,
      name: 'คุณต้น - Blogger และนักการตลาด',
      feedback:
        '“เนื้อหาที่ทีม JP ทำออกมาสื่อสารได้ตรงจุด และช่วยสร้างภาพลักษณ์ที่ดีให้แบรนด์เรามากขึ้น”',
      date: '11 มี.ค. 2025',
    },
    {
      id: 8,
      name: 'คุณดาว - เจ้าของโรงแรมบูทีค',
      feedback: '“พวกเขาออกแบบเอกสารแนะนำโรงแรมได้สวยมาก แขกต่างชาติก็ชมว่าดู professional สุด ๆ”',
      date: '22 ก.พ. 2025',
    },
    {
      id: 9,
      name: 'คุณกร - นักพัฒนาอสังหาริมทรัพย์',
      feedback:
        '“เราใช้ JP ทำ proposal เสนอโครงการกับนักลงทุน ได้ผลตอบรับดีมากจนปิดดีลได้ภายในไม่กี่วัน”',
      date: '10 ก.พ. 2025',
    },
    {
      id: 10,
      name: 'คุณเบล - ผู้ก่อตั้งคลินิกทันตกรรม',
      feedback:
        '“งานเอกสารและ presentation ที่ได้รับจาก JP ดู clean และเป็นมืออาชีพมาก ช่วยเพิ่มความน่าเชื่อถือให้คลินิกได้เยอะเลยค่ะ”',
      date: '28 ม.ค. 2025',
    },
    {
      id: 11,
      name: 'คุณเวย์ - ผู้บริหารสายงานไอที',
      feedback:
        '“เอกสาร Technical ของเราดูดีและเข้าใจง่ายขึ้นมาก พรีเซนต์ให้ผู้บริหารเข้าใจเร็วขึ้น”',
      date: '15 ม.ค. 2025',
    },
    {
      id: 12,
      name: 'คุณนิด - ผู้ประกอบการ SME',
      feedback: '“จากที่เคยไม่มีระบบอะไรเลย ตอนนี้มี branding + เอกสารครบดูดี ใช้งานง่าย”',
      date: '30 ธ.ค. 2024',
    },
    {
      id: 13,
      name: 'คุณบอส - เจ้าของคาเฟ่',
      feedback:
        '“ใช้บริการของ JP แล้วทำเมนูร้านใหม่กับโปสเตอร์ร้าน ดูมืออาชีพมาก คนเข้าร้านเพิ่มขึ้นชัดเจน”',
      date: '20 ธ.ค. 2024',
    },
    {
      id: 14,
      name: 'คุณแก้ม - ผู้ก่อตั้งสถาบันสอนภาษา',
      feedback:
        '“เอกสารหลักสูตรและคู่มือที่ JP ออกแบบให้ ใช้งานได้จริง และช่วยให้ดูน่าเชื่อถือขึ้นเยอะเลยค่ะ”',
      date: '9 ธ.ค. 2024',
    },
  ],
  Ce = () =>
    e.jsx('section', {
      id: 'reviews',
      role: 'region',
      'aria-labelledby': 'reviews-heading',
      className:
        'section bg-base-100 px-4 py-20 text-center transition-colors duration-300 dark:bg-gray-900 sm:px-6 lg:px-12',
      children: e.jsxs('div', {
        className: 'mx-auto max-w-7xl',
        children: [
          e.jsx('h2', {
            id: 'reviews-heading',
            className:
              'mb-6 select-text font-heading text-3xl font-extrabold tracking-tight text-primary sm:text-4xl',
            children: 'รีวิวจากลูกค้าของเรา',
          }),
          e.jsx('p', {
            className: 'mx-auto mb-14 max-w-3xl select-text text-base text-muted sm:text-lg',
            children:
              'ความประทับใจของลูกค้าคือหัวใจสำคัญของเรา 🙌 เราใส่ใจทุกรายละเอียด เพื่อบริการที่มั่นใจและน่าเชื่อถือ',
          }),
          e.jsx('div', {
            className: 'hidden gap-10 sm:grid-cols-2 lg:grid lg:grid-cols-3',
            children: q.map((t, s) =>
              e.jsxs(
                'article',
                {
                  className:
                    'group card flex flex-col justify-between rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800',
                  tabIndex: 0,
                  'aria-label': `รีวิวจากคุณ ${t.name}`,
                  children: [
                    e.jsxs('div', {
                      className: 'mb-6 flex items-start gap-4',
                      children: [
                        e.jsx(z, {
                          className:
                            'mt-1 text-2xl text-primary transition-transform duration-300 group-hover:scale-110',
                          'aria-hidden': 'true',
                        }),
                        e.jsx('blockquote', {
                          className:
                            'select-text text-base italic leading-relaxed text-gray-800 dark:text-gray-200',
                          children: t.feedback,
                        }),
                      ],
                    }),
                    e.jsxs('footer', {
                      className: 'mt-auto text-left',
                      children: [
                        e.jsx('p', {
                          className: 'select-text text-sm font-semibold text-primary',
                          children: t.name,
                        }),
                        e.jsx('p', {
                          className: 'select-text text-xs text-muted',
                          children: t.date,
                        }),
                      ],
                    }),
                  ],
                },
                t.id ?? s
              )
            ),
          }),
          e.jsx('div', {
            className:
              'scrollbar-hide mt-8 flex snap-x snap-mandatory space-x-5 overflow-x-auto px-2 lg:hidden',
            children: q.map((t, s) =>
              e.jsxs(
                'article',
                {
                  className:
                    'min-w-[85%] max-w-sm shrink-0 snap-center rounded-3xl border border-gray-200 bg-white p-6 shadow-md transition-transform duration-200 hover:scale-[1.03] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800',
                  tabIndex: 0,
                  'aria-label': `รีวิวจากคุณ ${t.name}`,
                  children: [
                    e.jsxs('div', {
                      className: 'mb-4 flex items-start gap-3',
                      children: [
                        e.jsx(z, { className: 'mt-1 text-xl text-primary', 'aria-hidden': 'true' }),
                        e.jsx('blockquote', {
                          className:
                            'select-text text-sm italic leading-snug text-gray-800 dark:text-gray-200',
                          children: t.feedback,
                        }),
                      ],
                    }),
                    e.jsxs('footer', {
                      className: 'mt-3 text-left',
                      children: [
                        e.jsx('p', {
                          className: 'select-text text-sm font-semibold text-primary',
                          children: t.name,
                        }),
                        e.jsx('p', {
                          className: 'select-text text-xs text-muted',
                          children: t.date,
                        }),
                      ],
                    }),
                  ],
                },
                t.id ?? s
              )
            ),
          }),
        ],
      }),
    }),
  De = () =>
    e.jsxs('section', {
      id: 'cta',
      'aria-labelledby': 'cta-heading',
      className:
        'relative isolate overflow-hidden bg-primary px-4 py-20 text-white sm:px-6 lg:px-8',
      children: [
        e.jsx('div', {
          'aria-hidden': 'true',
          className:
            "absolute inset-0 -z-10 bg-[url('/bg/cta-pattern.svg')] bg-cover bg-center opacity-20",
        }),
        e.jsxs('div', {
          className: 'mx-auto max-w-4xl space-y-6 text-center',
          children: [
            e.jsx('h2', {
              id: 'cta-heading',
              className:
                'font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl',
              children: 'พร้อมเริ่มใช้งานหรือยัง?',
            }),
            e.jsx('p', {
              className: 'mx-auto max-w-2xl text-base text-white/90 sm:text-lg md:text-xl',
              children:
                'ติดต่อเราวันนี้ เพื่อรับคำปรึกษาฟรีและข้อเสนอสุดพิเศษจากทีมงานมืออาชีพของเรา',
            }),
            e.jsxs('div', {
              className: 'flex flex-wrap justify-center gap-4 pt-6',
              children: [
                e.jsx('a', {
                  href: '#contact',
                  className:
                    'hover:text-primary-focus inline-block rounded-xl bg-white px-6 py-3 text-sm font-semibold text-primary shadow transition hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 sm:text-base',
                  children: 'ติดต่อเรา',
                }),
                e.jsxs('a', {
                  href: 'https://line.me/R/ti/p/@jpdocs',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className:
                    'inline-flex items-center gap-2 rounded-xl border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 sm:text-base',
                  children: [
                    e.jsx(j, { className: 'text-lg', 'aria-hidden': 'true' }),
                    e.jsx('span', { children: 'LINE: @462fqrfc' }),
                  ],
                }),
                e.jsxs('a', {
                  href: 'https://www.facebook.com/profile.php?id=61573307616115',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className:
                    'inline-flex items-center gap-2 rounded-xl border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 sm:text-base',
                  children: [
                    e.jsx(M, { className: 'text-lg', 'aria-hidden': 'true' }),
                    e.jsx('span', { children: 'Facebook' }),
                  ],
                }),
                e.jsxs('a', {
                  href: 'https://m.me/61573307616115?hash=AbZf0L5cSZ8XvIYw&source=qr_link_share',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className:
                    'inline-flex items-center gap-2 rounded-xl border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 sm:text-base',
                  children: [
                    e.jsx(v, { className: 'text-lg', 'aria-hidden': 'true' }),
                    e.jsx('span', { children: 'Messenger' }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  Ee = '/assets/jp-logo-CH0zBIqT.webp',
  ze = () =>
    e.jsx('footer', {
      role: 'contentinfo',
      className:
        'select-text border-t border-base-300 bg-base-200 text-gray-700 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-300',
      children: e.jsxs('div', {
        className: 'mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8',
        children: [
          e.jsxs('div', {
            className: 'flex flex-col items-center justify-between gap-6 sm:flex-row sm:gap-0',
            children: [
              e.jsxs('div', {
                className: 'flex items-center gap-3',
                'aria-label': 'แบรนด์ JP Visual & Docs',
                tabIndex: -1,
                children: [
                  e.jsx('img', {
                    src: Ee,
                    alt: 'โลโก้ JP Visual & Docs',
                    className: 'h-10 w-auto select-none',
                    loading: 'lazy',
                    decoding: 'async',
                    fetchPriority: 'low',
                    draggable: !1,
                  }),
                  e.jsx('span', {
                    className: 'select-text text-base font-semibold tracking-tight text-primary',
                    children: 'JP - Visual & Docs',
                  }),
                ],
              }),
              e.jsxs('nav', {
                'aria-label': 'ช่องทางติดต่อโซเชียลมีเดีย',
                className: 'flex gap-6 text-xl text-primary',
                children: [
                  e.jsx('a', {
                    href: 'https://line.me/R/ti/p/@462fqrfc',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    'aria-label': 'ติดต่อเรา ผ่าน LINE',
                    className:
                      'hover:text-primary-focus rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
                    children: e.jsx(j, { 'aria-hidden': 'true' }),
                  }),
                  e.jsx('a', {
                    href: 'https://m.me/yourpage',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    'aria-label': 'ติดต่อเรา ผ่าน Facebook Messenger',
                    className:
                      'hover:text-primary-focus rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
                    children: e.jsx(v, { 'aria-hidden': 'true' }),
                  }),
                ],
              }),
              e.jsxs('div', {
                className: 'select-text text-center text-sm leading-relaxed sm:text-right',
                children: [
                  e.jsx('p', { children: '© 2025 JP - Visual & Docs' }),
                  e.jsx('p', {
                    className: 'opacity-70',
                    children: 'สงวนลิขสิทธิ์ทั้งหมด | All rights reserved',
                  }),
                ],
              }),
            ],
          }),
          e.jsxs('p', {
            className:
              'mx-auto mt-6 max-w-xl select-text text-center text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:mx-0 sm:max-w-none sm:text-left',
            'aria-label': 'คำอธิบายธุรกิจ',
            children: [
              e.jsx('span', {
                className: 'block sm:inline',
                children: 'ผู้ช่วยด้านภาพลักษณ์และเอกสารธุรกิจแบบมืออาชีพ',
              }),
              e.jsx('br', { className: 'sm:hidden' }),
              e.jsx('span', {
                className: 'block sm:inline',
                children: 'เสริมความน่าเชื่อถือให้ธุรกิจของคุณดูโดดเด่นยิ่งขึ้น',
              }),
            ],
          }),
        ],
      }),
    }),
  $e = ({ service: t, onClose: s }) => {
    const a = o.useRef(null)
    ;(o.useEffect(() => {
      if (!t) return
      const d = document.activeElement
      a.current?.focus()
      const l = r => {
        if ((r.key === 'Escape' && (r.preventDefault(), s()), r.key === 'Tab' && a.current)) {
          const i = a.current.querySelectorAll(
            'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
          )
          if (i.length === 0) return
          const m = i[0],
            g = i[i.length - 1]
          r.shiftKey
            ? document.activeElement === m && (r.preventDefault(), g.focus())
            : document.activeElement === g && (r.preventDefault(), m.focus())
        }
      }
      return (
        document.addEventListener('keydown', l),
        () => {
          ;(document.removeEventListener('keydown', l), d?.focus())
        }
      )
    }, [t, s]),
      o.useEffect(
        () => (
          t ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = ''),
          () => {
            document.body.style.overflow = ''
          }
        ),
        [t]
      ))
    const n = o.useCallback(d => {
      d.stopPropagation()
    }, [])
    return t
      ? e.jsx('div', {
          role: 'dialog',
          'aria-modal': 'true',
          'aria-labelledby': 'service-modal-title',
          'aria-describedby': 'service-modal-desc',
          tabIndex: -1,
          onClick: s,
          className:
            'fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6 backdrop-blur-sm transition-opacity duration-300 md:px-6',
          children: e.jsxs('div', {
            tabIndex: 0,
            ref: a,
            onClick: n,
            className:
              'w-full max-w-lg transform space-y-5 rounded-2xl bg-base-100 p-6 shadow-2xl transition-transform duration-300 ease-out focus:outline-none dark:bg-gray-900',
            children: [
              e.jsx('h3', {
                id: 'service-modal-title',
                className: 'text-xl font-bold text-primary',
                tabIndex: -1,
                children: 'ขอใช้บริการจาก JP Visual & Docs',
              }),
              e.jsxs('section', {
                id: 'service-modal-desc',
                className: 'space-y-2 text-sm text-base-content/80 sm:text-base',
                children: [
                  e.jsxs('p', {
                    children: [e.jsx('strong', { children: 'บริการ:' }), ' ', t.title],
                  }),
                  e.jsxs('p', {
                    children: [e.jsx('strong', { children: 'รายละเอียด:' }), ' ', t.description],
                  }),
                  e.jsxs('p', {
                    children: [e.jsx('strong', { children: 'ค่าบริการ:' }), ' ', t.price],
                  }),
                  e.jsx('p', {
                    className: 'mt-2 text-xs text-gray-500 dark:text-gray-400',
                    children: 'ทีมงานสายทำจริง สไตล์มือโปร — เอกสาร ชัด เป๊ะ ขายงานผ่าน',
                  }),
                ],
              }),
              e.jsxs('div', {
                className: 'mt-6 flex flex-col justify-end gap-3 sm:flex-row',
                children: [
                  e.jsx('button', {
                    type: 'button',
                    onClick: s,
                    className:
                      'btn btn-sm rounded border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700',
                    children: 'ปิด',
                  }),
                  e.jsx('a', {
                    href: `https://line.me/ti/p/~jpdocs?text=${encodeURIComponent(`สวัสดีครับ/ค่ะ สนใจใช้บริการ: ${t.title}`)}`,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    onClick: s,
                    className:
                      'btn btn-primary btn-sm rounded text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
                    children: 'ติดต่อผ่าน LINE',
                  }),
                ],
              }),
            ],
          }),
        })
      : null
  },
  Ae =
    'flex items-center justify-between gap-4 p-4 rounded-md border text-sm shadow-md transition-all duration-300 animate-in fade-in slide-in-from-top-4',
  Fe = {
    info: 'bg-blue-100 text-blue-800 border-blue-300',
    success: 'bg-green-100 text-green-800 border-green-300',
    warning: 'bg-yellow-100 text-yellow-900 border-yellow-300',
    error: 'bg-red-100 text-red-800 border-red-300',
  },
  Le = ({
    message: t,
    type: s = 'info',
    icon: a,
    dismissible: n = !0,
    className: d = '',
    duration: l,
  }) => {
    const [r, i] = o.useState(!0)
    o.useEffect(() => {
      if (l && n) {
        const g = setTimeout(() => i(!1), l)
        return () => clearTimeout(g)
      }
    }, [l, n])
    const m = o.useCallback(() => i(!1), [])
    return r
      ? e.jsxs('div', {
          role: 'alert',
          'aria-live': 'polite',
          className: le(Ae, Fe[s], d),
          children: [
            e.jsxs('div', {
              className: 'flex flex-grow select-text items-center gap-2',
              children: [
                a && e.jsx('span', { className: 'shrink-0', children: a }),
                e.jsx('span', { className: 'font-medium', children: t }),
              ],
            }),
            n &&
              e.jsx('button', {
                type: 'button',
                onClick: m,
                'aria-label': 'ปิดการแจ้งเตือน',
                className:
                  'rounded-sm text-inherit hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1',
                children: e.jsx(oe, { className: 'h-4 w-4', 'aria-hidden': 'true' }),
              }),
          ],
        })
      : null
  },
  qe = ({ theme: t, toggleTheme: s }) => {
    const [a, n] = o.useState(null),
      [d, l] = o.useState(!0),
      r = o.useRef(null)
    ;(o.useEffect(() => {
      if (!a) return
      const m = g => {
        g.key === 'Escape' && n(null)
      }
      return (window.addEventListener('keydown', m), () => window.removeEventListener('keydown', m))
    }, [a]),
      o.useEffect(() => {
        a
          ? ((document.body.style.overflow = 'hidden'),
            r.current && (r.current.setAttribute('aria-hidden', 'true'), r.current.blur()))
          : ((document.body.style.overflow = ''),
            r.current && (r.current.removeAttribute('aria-hidden'), r.current.focus()))
      }, [a]))
    const i = o.useCallback(m => n(m), [])
    return e.jsxs('div', {
      'data-theme': t,
      className:
        'flex min-h-screen flex-col bg-base-100 font-sans text-base-content transition-colors duration-300',
      children: [
        e.jsxs('div', {
          className: 'mx-auto flex w-full max-w-screen-xl flex-grow flex-col px-4 sm:px-6 lg:px-16',
          children: [
            d &&
              e.jsx(Le, {
                message: 'อัปเดตสำเร็จ',
                type: 'success',
                icon: e.jsx(ce, { className: 'h-4 w-4' }),
                dismissible: !0,
                className: 'my-4',
                onDismiss: () => l(!1),
              }),
            e.jsx(de, { theme: t, toggleTheme: s }),
            e.jsxs('main', {
              id: 'main-content',
              ref: r,
              role: 'main',
              'aria-label': 'เนื้อหาหลักของเว็บไซต์',
              tabIndex: -1,
              className: 'flex-grow space-y-16 py-10 outline-none sm:space-y-20 md:space-y-24',
              children: [
                e.jsx(ge, {}),
                e.jsx(je, {}),
                e.jsx(we, {}),
                e.jsx(ke, { onRequest: i }),
                e.jsx(Se, {}),
                e.jsx(Ce, {}),
                e.jsx(De, {}),
              ],
            }),
            e.jsx(ze, {}),
          ],
        }),
        e.jsx('button', {
          type: 'button',
          'aria-label': `สลับเป็นโหมด ${t === 'light' ? 'มืด' : 'สว่าง'}`,
          title: `สลับเป็นโหมด ${t === 'light' ? 'มืด' : 'สว่าง'}`,
          onClick: s,
          className:
            'fixed bottom-4 right-4 z-50 rounded-full bg-base-200 p-3 text-base-content shadow-xl backdrop-blur-md transition hover:bg-base-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:bg-neutral dark:text-gray-200 dark:hover:bg-gray-700',
          children:
            t === 'light'
              ? e.jsx('svg', {
                  xmlns: 'http://www.w3.org/2000/svg',
                  className: 'h-6 w-6',
                  fill: 'none',
                  stroke: 'currentColor',
                  strokeWidth: 2,
                  viewBox: '0 0 24 24',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  children: e.jsx('path', {
                    d: 'M12 3v1m0 16v1m8.66-11h-1M4.34 12h-1m15.07 6.07l-.7-.7M6.34 6.34l-.7-.7m12.02 12.02l-.7-.7M6.34 17.66l-.7-.7M12 7a5 5 0 000 10 5 5 0 000-10z',
                  }),
                })
              : e.jsx('svg', {
                  xmlns: 'http://www.w3.org/2000/svg',
                  className: 'h-6 w-6',
                  fill: 'currentColor',
                  viewBox: '0 0 24 24',
                  children: e.jsx('path', { d: 'M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z' }),
                }),
        }),
        e.jsx($e, { service: a, onClose: () => n(null) }),
      ],
    })
  }
export { qe as default }
//# sourceMappingURL=IndexPage-sle04z3B.js.map
