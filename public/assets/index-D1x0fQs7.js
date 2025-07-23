const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/IndexPage-sle04z3B.js',
      'assets/vendor-Ccc7z4H6.js',
      'assets/LoginPage-CgZY00-e.js',
      'assets/SecretRoomPage-xHtPFFOQ.js',
      'assets/AdminPage-DUp5W1q-.js',
      'assets/CustomerAssessmentSummary-0JMa3-NI.js',
      'assets/NotFoundPage-CCfNB7ix.js',
    ])
) => i.map(i => d[i])
import {
  r as n,
  j as e,
  u as P,
  N as R,
  O as w,
  R as L,
  a as m,
  b as S,
  c as O,
  B as T,
} from './vendor-Ccc7z4H6.js'
;(function () {
  const s = document.createElement('link').relList
  if (s && s.supports && s.supports('modulepreload')) return
  for (const t of document.querySelectorAll('link[rel="modulepreload"]')) d(t)
  new MutationObserver(t => {
    for (const r of t)
      if (r.type === 'childList')
        for (const c of r.addedNodes) c.tagName === 'LINK' && c.rel === 'modulepreload' && d(c)
  }).observe(document, { childList: !0, subtree: !0 })
  function o(t) {
    const r = {}
    return (
      t.integrity && (r.integrity = t.integrity),
      t.referrerPolicy && (r.referrerPolicy = t.referrerPolicy),
      t.crossOrigin === 'use-credentials'
        ? (r.credentials = 'include')
        : t.crossOrigin === 'anonymous'
          ? (r.credentials = 'omit')
          : (r.credentials = 'same-origin'),
      r
    )
  }
  function d(t) {
    if (t.ep) return
    t.ep = !0
    const r = o(t)
    fetch(t.href, r)
  }
})()
const y = n.createContext(void 0),
  b = ({ children: l }) => {
    const [s, o] = n.useState('light')
    ;(n.useEffect(() => {
      try {
        const t = localStorage.getItem('theme'),
          r = window.matchMedia?.('(prefers-color-scheme: dark)').matches
        o(t === 'light' || t === 'dark' ? t : r ? 'dark' : 'light')
      } catch {
        o('light')
      }
    }, []),
      n.useEffect(() => {
        const t = document.documentElement
        s === 'dark' ? t.classList.add('dark') : t.classList.remove('dark')
        try {
          localStorage.setItem('theme', s)
        } catch {}
      }, [s]))
    const d = n.useCallback(() => {
      o(t => (t === 'light' ? 'dark' : 'light'))
    }, [])
    return e.jsx(y.Provider, { value: { theme: s, toggleTheme: d }, children: l })
  },
  A = () => {
    const l = n.useContext(y)
    if (!l) throw new Error('useTheme must be used within ThemeProvider')
    return l
  },
  k = 'modulepreload',
  I = function (l) {
    return '/' + l
  },
  x = {},
  f = function (s, o, d) {
    let t = Promise.resolve()
    if (o && o.length > 0) {
      let _ = function (a) {
        return Promise.all(
          a.map(h =>
            Promise.resolve(h).then(
              p => ({ status: 'fulfilled', value: p }),
              p => ({ status: 'rejected', reason: p })
            )
          )
        )
      }
      document.getElementsByTagName('link')
      const c = document.querySelector('meta[property=csp-nonce]'),
        i = c?.nonce || c?.getAttribute('nonce')
      t = _(
        o.map(a => {
          if (((a = I(a)), a in x)) return
          x[a] = !0
          const h = a.endsWith('.css'),
            p = h ? '[rel="stylesheet"]' : ''
          if (document.querySelector(`link[href="${a}"]${p}`)) return
          const u = document.createElement('link')
          if (
            ((u.rel = h ? 'stylesheet' : k),
            h || (u.as = 'script'),
            (u.crossOrigin = ''),
            (u.href = a),
            i && u.setAttribute('nonce', i),
            document.head.appendChild(u),
            h)
          )
            return new Promise((v, E) => {
              ;(u.addEventListener('load', v),
                u.addEventListener('error', () => E(new Error(`Unable to preload CSS for ${a}`))))
            })
        })
      )
    }
    function r(c) {
      const i = new Event('vite:preloadError', { cancelable: !0 })
      if (((i.payload = c), window.dispatchEvent(i), !i.defaultPrevented)) throw c
    }
    return t.then(c => {
      for (const i of c || []) i.status === 'rejected' && r(i.reason)
      return s().catch(r)
    })
  },
  N = ['user', 'admin'],
  C = () => {
    const l = P()
    let s = null,
      o = null
    try {
      ;((s = localStorage.getItem('loggedInUser')?.trim() || null),
        (o = localStorage.getItem('userRole')?.trim() || null))
    } catch (r) {
      ;(console.error('🔐 Error accessing localStorage:', r), (s = null), (o = null))
    }
    const d = !!s,
      t = o !== null && N.includes(o)
    return !d || !t
      ? e.jsx(R, { to: '/login', replace: !0, state: { from: l.pathname } })
      : e.jsx(w, {})
  },
  j = () =>
    e.jsxs('div', {
      role: 'status',
      'aria-live': 'polite',
      'aria-busy': 'true',
      className: 'flex flex-col items-center justify-center py-10',
      children: [
        e.jsxs('svg', {
          className: 'h-10 w-10 animate-spin text-primary',
          xmlns: 'http://www.w3.org/2000/svg',
          fill: 'none',
          viewBox: '0 0 24 24',
          'aria-hidden': 'true',
          children: [
            e.jsx('circle', {
              className: 'opacity-25',
              cx: '12',
              cy: '12',
              r: '10',
              stroke: 'currentColor',
              strokeWidth: '4',
            }),
            e.jsx('path', {
              className: 'opacity-75',
              fill: 'currentColor',
              d: 'M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z',
            }),
          ],
        }),
        e.jsx('span', {
          className: 'mt-3 select-none text-sm font-medium text-gray-700 dark:text-gray-300',
          children: 'กำลังโหลด...',
        }),
      ],
    }),
  z = n.lazy(() => f(() => import('./IndexPage-sle04z3B.js'), __vite__mapDeps([0, 1]))),
  D = n.lazy(() => f(() => import('./LoginPage-CgZY00-e.js'), __vite__mapDeps([2, 1]))),
  B = n.lazy(() => f(() => import('./SecretRoomPage-xHtPFFOQ.js'), __vite__mapDeps([3, 1]))),
  M = n.lazy(() => f(() => import('./AdminPage-DUp5W1q-.js'), __vite__mapDeps([4, 1]))),
  V = n.lazy(() =>
    f(() => import('./CustomerAssessmentSummary-0JMa3-NI.js'), __vite__mapDeps([5, 1]))
  ),
  U = n.lazy(() => f(() => import('./NotFoundPage-CCfNB7ix.js'), __vite__mapDeps([6, 1]))),
  q = () => {
    const { theme: l, toggleTheme: s } = A()
    return e.jsx(n.Suspense, {
      fallback: e.jsx(j, {}),
      children: e.jsxs(L, {
        children: [
          e.jsx(m, { index: !0, element: e.jsx(z, { theme: l, toggleTheme: s }) }),
          e.jsx(m, { path: '/login', element: e.jsx(D, {}) }),
          e.jsxs(m, {
            element: e.jsx(C, {}),
            children: [
              e.jsx(m, { path: '/secret', element: e.jsx(B, {}) }),
              e.jsx(m, { path: '/admin', element: e.jsx(M, {}) }),
              e.jsx(m, { path: '/customer-assessment-summary', element: e.jsx(V, {}) }),
            ],
          }),
          e.jsx(m, { path: '*', element: e.jsx(U, {}) }),
        ],
      }),
    })
  },
  F = () =>
    e.jsx(O.StrictMode, {
      children: e.jsx(b, {
        children: e.jsx(T, {
          basename: '/',
          children: e.jsx(n.Suspense, { fallback: e.jsx(j, {}), children: e.jsx(q, {}) }),
        }),
      }),
    }),
  g = document.getElementById('root')
g
  ? S.createRoot(g).render(e.jsx(F, {}))
  : console.error('❌ <div id="root"> not found in index.html')
//# sourceMappingURL=index-D1x0fQs7.js.map
