import { M as p, r as l, j as e } from './vendor-Ccc7z4H6.js'
const x = {
  admin2517: {
    passwordHash: '46c883f81adcbad298233e4fc0b3d84c66a4ad686d2af7153f888663f6c1d84b',
    role: 'admin',
  },
  JPKYETONKEY201: {
    passwordHash: '22becba9ac05f53d1dea3afb1cf9e7c71096598e3e138b678746ee33e53e3111',
    role: 'user',
  },
  JPKYETONKEY222: {
    passwordHash: '1c8d401732c1f993d2602ca537f7c40bc95ec90cfe96b5efb7fb8c5f4ddbbd37',
    role: 'user',
  },
  JPKYETONKEY233: {
    passwordHash: 'e867bba904e46f9e17a91d9dc319420f5fce59e40a5be31ddc97185f501ee10b',
    role: 'user',
  },
  JPKYETONKEY244: {
    passwordHash: 'fcbd99454edac0060823fc0dc73f62fe9d6c77ff1f554638e91477ebf3009551',
    role: 'user',
  },
  JPKYETONKEY255: {
    passwordHash: '496a06b7f065c12dae0449d1edaf56d4e0ee8a5d3a42fa89b5ee5e28d87d2614',
    role: 'user',
  },
  JPKYETONKEY266: {
    passwordHash: '72c725742b0a3577c7553d25ffc1711cc3dd05cf30b469409382153ee66dd7a4',
    role: 'user',
  },
  JPKYETONKEY277: {
    passwordHash: '224c1d62c70bd7de1352449b4a447fe4bc4af85f10a06d46d313dfb57e847610',
    role: 'user',
  },
  JPKYETONKEY288: {
    passwordHash: 'bd9334e1fe94a3fd642afd8b4832d637c4640095110d6efd26bc70d10c383f86',
    role: 'user',
  },
  JPKYETONKEY299: {
    passwordHash: '0e16c8432679bc51d23bdc7c9417008c126dcda3d5868b5fb878e6daac716d16',
    role: 'user',
  },
  JPKYETONKEY300: {
    passwordHash: '42adc3026e068b28392cbdee6a70394c03a3a60caa94f94a42fe8e51032770a8',
    role: 'user',
  },
  JPusertest01: {
    passwordHash: 'd5154a7beb5c6f9948a8dffdc9c6748e47ce9a40be9744e2296123d7e1347f88',
    role: 'user',
  },
}
async function w(n) {
  const b = new TextEncoder().encode(n),
    t = await crypto.subtle.digest('SHA-256', b)
  return Array.from(new Uint8Array(t))
    .map(s => s.toString(16).padStart(2, '0'))
    .join('')
}
const N = '/assets/login-DUzPWDzB.webp',
  j = () => {
    const n = p(),
      [i, b] = l.useState(''),
      [t, c] = l.useState(''),
      [f, s] = l.useState(''),
      [a, r] = l.useState(!1),
      h = async d => {
        if ((d.preventDefault(), a)) return
        ;(s(''), r(!0))
        const u = i.trim(),
          m = t.trim()
        if (!u || !m) {
          ;(s('กรุณากรอกข้อมูลให้ครบ'), r(!1))
          return
        }
        const o = x[u]
        if (!o) {
          ;(s('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง'), c(''), r(!1))
          return
        }
        try {
          if ((await w(m)) !== o.passwordHash) {
            ;(s('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง'), c(''), r(!1))
            return
          }
        } catch {
          ;(s('เกิดข้อผิดพลาดในการตรวจสอบรหัสผ่าน'), r(!1))
          return
        }
        ;(localStorage.setItem('loggedInUser', u),
          localStorage.setItem('userRole', o.role),
          r(!1),
          n(o.role === 'admin' ? '/admin' : '/secret', { replace: !0 }))
      }
    return e.jsx('main', {
      role: 'main',
      'aria-label': 'หน้าเข้าสู่ระบบ',
      className: 'flex min-h-screen items-center justify-center bg-base-100 px-4',
      children: e.jsxs('form', {
        onSubmit: h,
        'aria-label': 'ฟอร์มเข้าสู่ระบบ',
        className: 'w-full max-w-sm space-y-6 rounded-xl bg-base-200 p-6 shadow-xl',
        noValidate: !0,
        children: [
          e.jsx('h1', {
            className: 'select-none text-center text-3xl font-bold text-primary',
            children: 'เข้าสู่ระบบ',
          }),
          f &&
            e.jsxs('div', {
              role: 'alert',
              'aria-live': 'assertive',
              className:
                'flex flex-col items-center gap-3 rounded border border-error bg-error/10 p-4 text-center text-sm font-semibold text-error',
              tabIndex: -1,
              children: [
                e.jsx('img', {
                  src: N,
                  alt: 'คำเตือนการเข้าสู่ระบบ',
                  className: 'mx-auto max-h-20 object-contain',
                  'aria-hidden': 'true',
                }),
                e.jsx('span', { children: f }),
              ],
            }),
          e.jsxs('div', {
            className: 'form-control',
            children: [
              e.jsx('label', {
                htmlFor: 'username',
                className: 'label',
                children: e.jsx('span', {
                  className: 'label-text font-medium',
                  children: 'ชื่อผู้ใช้',
                }),
              }),
              e.jsx('input', {
                id: 'username',
                type: 'text',
                className: 'input input-bordered',
                value: i,
                onChange: d => b(d.target.value),
                autoComplete: 'username',
                required: !0,
                placeholder: 'กรอกชื่อผู้ใช้',
                disabled: a,
                'aria-disabled': a,
                'aria-required': 'true',
                'aria-describedby': 'username-desc',
              }),
              e.jsx('small', {
                id: 'username-desc',
                className: 'text-muted',
                children: 'กรอกชื่อผู้ใช้ที่ลงทะเบียนไว้',
              }),
            ],
          }),
          e.jsxs('div', {
            className: 'form-control',
            children: [
              e.jsx('label', {
                htmlFor: 'password',
                className: 'label',
                children: e.jsx('span', {
                  className: 'label-text font-medium',
                  children: 'รหัสผ่าน',
                }),
              }),
              e.jsx('input', {
                id: 'password',
                type: 'password',
                className: 'input input-bordered',
                value: t,
                onChange: d => c(d.target.value),
                autoComplete: 'current-password',
                required: !0,
                placeholder: 'กรอกรหัสผ่าน',
                disabled: a,
                'aria-disabled': a,
                'aria-required': 'true',
                'aria-describedby': 'password-desc',
              }),
              e.jsx('small', {
                id: 'password-desc',
                className: 'text-muted',
                children: 'รหัสผ่านต้องตรงกับบัญชีผู้ใช้ของคุณ',
              }),
            ],
          }),
          e.jsx('button', {
            type: 'submit',
            className: 'btn btn-primary w-full',
            'aria-label': 'ปุ่มเข้าสู่ระบบ',
            disabled: a,
            'aria-busy': a,
            children: a ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ',
          }),
        ],
      }),
    })
  }
export { j as default }
//# sourceMappingURL=LoginPage-CgZY00-e.js.map
