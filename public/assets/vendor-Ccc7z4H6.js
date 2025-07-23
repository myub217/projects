function m_(e, t) {
  for (var n = 0; n < t.length; n++) {
    const i = t[n]
    if (typeof i != 'string' && !Array.isArray(i)) {
      for (const s in i)
        if (s !== 'default' && !(s in e)) {
          const a = Object.getOwnPropertyDescriptor(i, s)
          a && Object.defineProperty(e, s, a.get ? a : { enumerable: !0, get: () => i[s] })
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }))
}
var pa =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof global < 'u'
        ? global
        : typeof self < 'u'
          ? self
          : {}
function R1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e
}
var Mc = { exports: {} },
  ys = {},
  Tc = { exports: {} },
  _t = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bm
function g_() {
  if (bm) return _t
  bm = 1
  var e = Symbol.for('react.element'),
    t = Symbol.for('react.portal'),
    n = Symbol.for('react.fragment'),
    i = Symbol.for('react.strict_mode'),
    s = Symbol.for('react.profiler'),
    a = Symbol.for('react.provider'),
    l = Symbol.for('react.context'),
    u = Symbol.for('react.forward_ref'),
    f = Symbol.for('react.suspense'),
    h = Symbol.for('react.memo'),
    p = Symbol.for('react.lazy'),
    m = Symbol.iterator
  function y(L) {
    return L === null || typeof L != 'object'
      ? null
      : ((L = (m && L[m]) || L['@@iterator']), typeof L == 'function' ? L : null)
  }
  var x = {
      isMounted: function () {
        return !1
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    _ = Object.assign,
    w = {}
  function S(L, H, lt) {
    ;((this.props = L), (this.context = H), (this.refs = w), (this.updater = lt || x))
  }
  ;((S.prototype.isReactComponent = {}),
    (S.prototype.setState = function (L, H) {
      if (typeof L != 'object' && typeof L != 'function' && L != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        )
      this.updater.enqueueSetState(this, L, H, 'setState')
    }),
    (S.prototype.forceUpdate = function (L) {
      this.updater.enqueueForceUpdate(this, L, 'forceUpdate')
    }))
  function k() {}
  k.prototype = S.prototype
  function P(L, H, lt) {
    ;((this.props = L), (this.context = H), (this.refs = w), (this.updater = lt || x))
  }
  var C = (P.prototype = new k())
  ;((C.constructor = P), _(C, S.prototype), (C.isPureReactComponent = !0))
  var T = Array.isArray,
    E = Object.prototype.hasOwnProperty,
    R = { current: null },
    A = { key: !0, ref: !0, __self: !0, __source: !0 }
  function V(L, H, lt) {
    var ut,
      gt = {},
      dt = null,
      xt = null
    if (H != null)
      for (ut in (H.ref !== void 0 && (xt = H.ref), H.key !== void 0 && (dt = '' + H.key), H))
        E.call(H, ut) && !A.hasOwnProperty(ut) && (gt[ut] = H[ut])
    var ct = arguments.length - 2
    if (ct === 1) gt.children = lt
    else if (1 < ct) {
      for (var vt = Array(ct), Et = 0; Et < ct; Et++) vt[Et] = arguments[Et + 2]
      gt.children = vt
    }
    if (L && L.defaultProps)
      for (ut in ((ct = L.defaultProps), ct)) gt[ut] === void 0 && (gt[ut] = ct[ut])
    return { $$typeof: e, type: L, key: dt, ref: xt, props: gt, _owner: R.current }
  }
  function j(L, H) {
    return { $$typeof: e, type: L.type, key: H, ref: L.ref, props: L.props, _owner: L._owner }
  }
  function W(L) {
    return typeof L == 'object' && L !== null && L.$$typeof === e
  }
  function N(L) {
    var H = { '=': '=0', ':': '=2' }
    return (
      '$' +
      L.replace(/[=:]/g, function (lt) {
        return H[lt]
      })
    )
  }
  var F = /\/+/g
  function q(L, H) {
    return typeof L == 'object' && L !== null && L.key != null ? N('' + L.key) : H.toString(36)
  }
  function $(L, H, lt, ut, gt) {
    var dt = typeof L
    ;(dt === 'undefined' || dt === 'boolean') && (L = null)
    var xt = !1
    if (L === null) xt = !0
    else
      switch (dt) {
        case 'string':
        case 'number':
          xt = !0
          break
        case 'object':
          switch (L.$$typeof) {
            case e:
            case t:
              xt = !0
          }
      }
    if (xt)
      return (
        (xt = L),
        (gt = gt(xt)),
        (L = ut === '' ? '.' + q(xt, 0) : ut),
        T(gt)
          ? ((lt = ''),
            L != null && (lt = L.replace(F, '$&/') + '/'),
            $(gt, H, lt, '', function (Et) {
              return Et
            }))
          : gt != null &&
            (W(gt) &&
              (gt = j(
                gt,
                lt +
                  (!gt.key || (xt && xt.key === gt.key)
                    ? ''
                    : ('' + gt.key).replace(F, '$&/') + '/') +
                  L
              )),
            H.push(gt)),
        1
      )
    if (((xt = 0), (ut = ut === '' ? '.' : ut + ':'), T(L)))
      for (var ct = 0; ct < L.length; ct++) {
        dt = L[ct]
        var vt = ut + q(dt, ct)
        xt += $(dt, H, lt, vt, gt)
      }
    else if (((vt = y(L)), typeof vt == 'function'))
      for (L = vt.call(L), ct = 0; !(dt = L.next()).done; )
        ((dt = dt.value), (vt = ut + q(dt, ct++)), (xt += $(dt, H, lt, vt, gt)))
    else if (dt === 'object')
      throw (
        (H = String(L)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (H === '[object Object]' ? 'object with keys {' + Object.keys(L).join(', ') + '}' : H) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      )
    return xt
  }
  function st(L, H, lt) {
    if (L == null) return L
    var ut = [],
      gt = 0
    return (
      $(L, ut, '', '', function (dt) {
        return H.call(lt, dt, gt++)
      }),
      ut
    )
  }
  function tt(L) {
    if (L._status === -1) {
      var H = L._result
      ;((H = H()),
        H.then(
          function (lt) {
            ;(L._status === 0 || L._status === -1) && ((L._status = 1), (L._result = lt))
          },
          function (lt) {
            ;(L._status === 0 || L._status === -1) && ((L._status = 2), (L._result = lt))
          }
        ),
        L._status === -1 && ((L._status = 0), (L._result = H)))
    }
    if (L._status === 1) return L._result.default
    throw L._result
  }
  var rt = { current: null },
    K = { transition: null },
    J = { ReactCurrentDispatcher: rt, ReactCurrentBatchConfig: K, ReactCurrentOwner: R }
  function Z() {
    throw Error('act(...) is not supported in production builds of React.')
  }
  return (
    (_t.Children = {
      map: st,
      forEach: function (L, H, lt) {
        st(
          L,
          function () {
            H.apply(this, arguments)
          },
          lt
        )
      },
      count: function (L) {
        var H = 0
        return (
          st(L, function () {
            H++
          }),
          H
        )
      },
      toArray: function (L) {
        return (
          st(L, function (H) {
            return H
          }) || []
        )
      },
      only: function (L) {
        if (!W(L))
          throw Error('React.Children.only expected to receive a single React element child.')
        return L
      },
    }),
    (_t.Component = S),
    (_t.Fragment = n),
    (_t.Profiler = s),
    (_t.PureComponent = P),
    (_t.StrictMode = i),
    (_t.Suspense = f),
    (_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = J),
    (_t.act = Z),
    (_t.cloneElement = function (L, H, lt) {
      if (L == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' + L + '.'
        )
      var ut = _({}, L.props),
        gt = L.key,
        dt = L.ref,
        xt = L._owner
      if (H != null) {
        if (
          (H.ref !== void 0 && ((dt = H.ref), (xt = R.current)),
          H.key !== void 0 && (gt = '' + H.key),
          L.type && L.type.defaultProps)
        )
          var ct = L.type.defaultProps
        for (vt in H)
          E.call(H, vt) &&
            !A.hasOwnProperty(vt) &&
            (ut[vt] = H[vt] === void 0 && ct !== void 0 ? ct[vt] : H[vt])
      }
      var vt = arguments.length - 2
      if (vt === 1) ut.children = lt
      else if (1 < vt) {
        ct = Array(vt)
        for (var Et = 0; Et < vt; Et++) ct[Et] = arguments[Et + 2]
        ut.children = ct
      }
      return { $$typeof: e, type: L.type, key: gt, ref: dt, props: ut, _owner: xt }
    }),
    (_t.createContext = function (L) {
      return (
        (L = {
          $$typeof: l,
          _currentValue: L,
          _currentValue2: L,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (L.Provider = { $$typeof: a, _context: L }),
        (L.Consumer = L)
      )
    }),
    (_t.createElement = V),
    (_t.createFactory = function (L) {
      var H = V.bind(null, L)
      return ((H.type = L), H)
    }),
    (_t.createRef = function () {
      return { current: null }
    }),
    (_t.forwardRef = function (L) {
      return { $$typeof: u, render: L }
    }),
    (_t.isValidElement = W),
    (_t.lazy = function (L) {
      return { $$typeof: p, _payload: { _status: -1, _result: L }, _init: tt }
    }),
    (_t.memo = function (L, H) {
      return { $$typeof: h, type: L, compare: H === void 0 ? null : H }
    }),
    (_t.startTransition = function (L) {
      var H = K.transition
      K.transition = {}
      try {
        L()
      } finally {
        K.transition = H
      }
    }),
    (_t.unstable_act = Z),
    (_t.useCallback = function (L, H) {
      return rt.current.useCallback(L, H)
    }),
    (_t.useContext = function (L) {
      return rt.current.useContext(L)
    }),
    (_t.useDebugValue = function () {}),
    (_t.useDeferredValue = function (L) {
      return rt.current.useDeferredValue(L)
    }),
    (_t.useEffect = function (L, H) {
      return rt.current.useEffect(L, H)
    }),
    (_t.useId = function () {
      return rt.current.useId()
    }),
    (_t.useImperativeHandle = function (L, H, lt) {
      return rt.current.useImperativeHandle(L, H, lt)
    }),
    (_t.useInsertionEffect = function (L, H) {
      return rt.current.useInsertionEffect(L, H)
    }),
    (_t.useLayoutEffect = function (L, H) {
      return rt.current.useLayoutEffect(L, H)
    }),
    (_t.useMemo = function (L, H) {
      return rt.current.useMemo(L, H)
    }),
    (_t.useReducer = function (L, H, lt) {
      return rt.current.useReducer(L, H, lt)
    }),
    (_t.useRef = function (L) {
      return rt.current.useRef(L)
    }),
    (_t.useState = function (L) {
      return rt.current.useState(L)
    }),
    (_t.useSyncExternalStore = function (L, H, lt) {
      return rt.current.useSyncExternalStore(L, H, lt)
    }),
    (_t.useTransition = function () {
      return rt.current.useTransition()
    }),
    (_t.version = '18.3.1'),
    _t
  )
}
var km
function En() {
  return (km || ((km = 1), (Tc.exports = g_())), Tc.exports)
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pm
function y_() {
  if (Pm) return ys
  Pm = 1
  var e = En(),
    t = Symbol.for('react.element'),
    n = Symbol.for('react.fragment'),
    i = Object.prototype.hasOwnProperty,
    s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    a = { key: !0, ref: !0, __self: !0, __source: !0 }
  function l(u, f, h) {
    var p,
      m = {},
      y = null,
      x = null
    ;(h !== void 0 && (y = '' + h),
      f.key !== void 0 && (y = '' + f.key),
      f.ref !== void 0 && (x = f.ref))
    for (p in f) i.call(f, p) && !a.hasOwnProperty(p) && (m[p] = f[p])
    if (u && u.defaultProps) for (p in ((f = u.defaultProps), f)) m[p] === void 0 && (m[p] = f[p])
    return { $$typeof: t, type: u, key: y, ref: x, props: m, _owner: s.current }
  }
  return ((ys.Fragment = n), (ys.jsx = l), (ys.jsxs = l), ys)
}
var Cm
function v_() {
  return (Cm || ((Cm = 1), (Mc.exports = y_())), Mc.exports)
}
var zT = v_(),
  U = En()
const an = R1(U),
  x_ = m_({ __proto__: null, default: an }, [U])
var ma = {},
  Ec = { exports: {} },
  Ce = {},
  Oc = { exports: {} },
  Lc = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mm
function __() {
  return (
    Mm ||
      ((Mm = 1),
      (function (e) {
        function t(K, J) {
          var Z = K.length
          K.push(J)
          t: for (; 0 < Z; ) {
            var L = (Z - 1) >>> 1,
              H = K[L]
            if (0 < s(H, J)) ((K[L] = J), (K[Z] = H), (Z = L))
            else break t
          }
        }
        function n(K) {
          return K.length === 0 ? null : K[0]
        }
        function i(K) {
          if (K.length === 0) return null
          var J = K[0],
            Z = K.pop()
          if (Z !== J) {
            K[0] = Z
            t: for (var L = 0, H = K.length, lt = H >>> 1; L < lt; ) {
              var ut = 2 * (L + 1) - 1,
                gt = K[ut],
                dt = ut + 1,
                xt = K[dt]
              if (0 > s(gt, Z))
                dt < H && 0 > s(xt, gt)
                  ? ((K[L] = xt), (K[dt] = Z), (L = dt))
                  : ((K[L] = gt), (K[ut] = Z), (L = ut))
              else if (dt < H && 0 > s(xt, Z)) ((K[L] = xt), (K[dt] = Z), (L = dt))
              else break t
            }
          }
          return J
        }
        function s(K, J) {
          var Z = K.sortIndex - J.sortIndex
          return Z !== 0 ? Z : K.id - J.id
        }
        if (typeof performance == 'object' && typeof performance.now == 'function') {
          var a = performance
          e.unstable_now = function () {
            return a.now()
          }
        } else {
          var l = Date,
            u = l.now()
          e.unstable_now = function () {
            return l.now() - u
          }
        }
        var f = [],
          h = [],
          p = 1,
          m = null,
          y = 3,
          x = !1,
          _ = !1,
          w = !1,
          S = typeof setTimeout == 'function' ? setTimeout : null,
          k = typeof clearTimeout == 'function' ? clearTimeout : null,
          P = typeof setImmediate < 'u' ? setImmediate : null
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling)
        function C(K) {
          for (var J = n(h); J !== null; ) {
            if (J.callback === null) i(h)
            else if (J.startTime <= K) (i(h), (J.sortIndex = J.expirationTime), t(f, J))
            else break
            J = n(h)
          }
        }
        function T(K) {
          if (((w = !1), C(K), !_))
            if (n(f) !== null) ((_ = !0), tt(E))
            else {
              var J = n(h)
              J !== null && rt(T, J.startTime - K)
            }
        }
        function E(K, J) {
          ;((_ = !1), w && ((w = !1), k(V), (V = -1)), (x = !0))
          var Z = y
          try {
            for (C(J), m = n(f); m !== null && (!(m.expirationTime > J) || (K && !N())); ) {
              var L = m.callback
              if (typeof L == 'function') {
                ;((m.callback = null), (y = m.priorityLevel))
                var H = L(m.expirationTime <= J)
                ;((J = e.unstable_now()),
                  typeof H == 'function' ? (m.callback = H) : m === n(f) && i(f),
                  C(J))
              } else i(f)
              m = n(f)
            }
            if (m !== null) var lt = !0
            else {
              var ut = n(h)
              ;(ut !== null && rt(T, ut.startTime - J), (lt = !1))
            }
            return lt
          } finally {
            ;((m = null), (y = Z), (x = !1))
          }
        }
        var R = !1,
          A = null,
          V = -1,
          j = 5,
          W = -1
        function N() {
          return !(e.unstable_now() - W < j)
        }
        function F() {
          if (A !== null) {
            var K = e.unstable_now()
            W = K
            var J = !0
            try {
              J = A(!0, K)
            } finally {
              J ? q() : ((R = !1), (A = null))
            }
          } else R = !1
        }
        var q
        if (typeof P == 'function')
          q = function () {
            P(F)
          }
        else if (typeof MessageChannel < 'u') {
          var $ = new MessageChannel(),
            st = $.port2
          ;(($.port1.onmessage = F),
            (q = function () {
              st.postMessage(null)
            }))
        } else
          q = function () {
            S(F, 0)
          }
        function tt(K) {
          ;((A = K), R || ((R = !0), q()))
        }
        function rt(K, J) {
          V = S(function () {
            K(e.unstable_now())
          }, J)
        }
        ;((e.unstable_IdlePriority = 5),
          (e.unstable_ImmediatePriority = 1),
          (e.unstable_LowPriority = 4),
          (e.unstable_NormalPriority = 3),
          (e.unstable_Profiling = null),
          (e.unstable_UserBlockingPriority = 2),
          (e.unstable_cancelCallback = function (K) {
            K.callback = null
          }),
          (e.unstable_continueExecution = function () {
            _ || x || ((_ = !0), tt(E))
          }),
          (e.unstable_forceFrameRate = function (K) {
            0 > K || 125 < K
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (j = 0 < K ? Math.floor(1e3 / K) : 5)
          }),
          (e.unstable_getCurrentPriorityLevel = function () {
            return y
          }),
          (e.unstable_getFirstCallbackNode = function () {
            return n(f)
          }),
          (e.unstable_next = function (K) {
            switch (y) {
              case 1:
              case 2:
              case 3:
                var J = 3
                break
              default:
                J = y
            }
            var Z = y
            y = J
            try {
              return K()
            } finally {
              y = Z
            }
          }),
          (e.unstable_pauseExecution = function () {}),
          (e.unstable_requestPaint = function () {}),
          (e.unstable_runWithPriority = function (K, J) {
            switch (K) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break
              default:
                K = 3
            }
            var Z = y
            y = K
            try {
              return J()
            } finally {
              y = Z
            }
          }),
          (e.unstable_scheduleCallback = function (K, J, Z) {
            var L = e.unstable_now()
            switch (
              (typeof Z == 'object' && Z !== null
                ? ((Z = Z.delay), (Z = typeof Z == 'number' && 0 < Z ? L + Z : L))
                : (Z = L),
              K)
            ) {
              case 1:
                var H = -1
                break
              case 2:
                H = 250
                break
              case 5:
                H = 1073741823
                break
              case 4:
                H = 1e4
                break
              default:
                H = 5e3
            }
            return (
              (H = Z + H),
              (K = {
                id: p++,
                callback: J,
                priorityLevel: K,
                startTime: Z,
                expirationTime: H,
                sortIndex: -1,
              }),
              Z > L
                ? ((K.sortIndex = Z),
                  t(h, K),
                  n(f) === null && K === n(h) && (w ? (k(V), (V = -1)) : (w = !0), rt(T, Z - L)))
                : ((K.sortIndex = H), t(f, K), _ || x || ((_ = !0), tt(E))),
              K
            )
          }),
          (e.unstable_shouldYield = N),
          (e.unstable_wrapCallback = function (K) {
            var J = y
            return function () {
              var Z = y
              y = J
              try {
                return K.apply(this, arguments)
              } finally {
                y = Z
              }
            }
          }))
      })(Lc)),
    Lc
  )
}
var Tm
function w_() {
  return (Tm || ((Tm = 1), (Oc.exports = __())), Oc.exports)
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Em
function S_() {
  if (Em) return Ce
  Em = 1
  var e = En(),
    t = w_()
  function n(r) {
    for (
      var o = 'https://reactjs.org/docs/error-decoder.html?invariant=' + r, c = 1;
      c < arguments.length;
      c++
    )
      o += '&args[]=' + encodeURIComponent(arguments[c])
    return (
      'Minified React error #' +
      r +
      '; visit ' +
      o +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    )
  }
  var i = new Set(),
    s = {}
  function a(r, o) {
    ;(l(r, o), l(r + 'Capture', o))
  }
  function l(r, o) {
    for (s[r] = o, r = 0; r < o.length; r++) i.add(o[r])
  }
  var u = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    f = Object.prototype.hasOwnProperty,
    h =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    p = {},
    m = {}
  function y(r) {
    return f.call(m, r) ? !0 : f.call(p, r) ? !1 : h.test(r) ? (m[r] = !0) : ((p[r] = !0), !1)
  }
  function x(r, o, c, d) {
    if (c !== null && c.type === 0) return !1
    switch (typeof o) {
      case 'function':
      case 'symbol':
        return !0
      case 'boolean':
        return d
          ? !1
          : c !== null
            ? !c.acceptsBooleans
            : ((r = r.toLowerCase().slice(0, 5)), r !== 'data-' && r !== 'aria-')
      default:
        return !1
    }
  }
  function _(r, o, c, d) {
    if (o === null || typeof o > 'u' || x(r, o, c, d)) return !0
    if (d) return !1
    if (c !== null)
      switch (c.type) {
        case 3:
          return !o
        case 4:
          return o === !1
        case 5:
          return isNaN(o)
        case 6:
          return isNaN(o) || 1 > o
      }
    return !1
  }
  function w(r, o, c, d, g, v, b) {
    ;((this.acceptsBooleans = o === 2 || o === 3 || o === 4),
      (this.attributeName = d),
      (this.attributeNamespace = g),
      (this.mustUseProperty = c),
      (this.propertyName = r),
      (this.type = o),
      (this.sanitizeURL = v),
      (this.removeEmptyString = b))
  }
  var S = {}
  ;('children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (r) {
      S[r] = new w(r, 0, !1, r, null, !1, !1)
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (r) {
      var o = r[0]
      S[o] = new w(o, 1, !1, r[1], null, !1, !1)
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (r) {
      S[r] = new w(r, 2, !1, r.toLowerCase(), null, !1, !1)
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
      function (r) {
        S[r] = new w(r, 2, !1, r, null, !1, !1)
      }
    ),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (r) {
        S[r] = new w(r, 3, !1, r.toLowerCase(), null, !1, !1)
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (r) {
      S[r] = new w(r, 3, !0, r, null, !1, !1)
    }),
    ['capture', 'download'].forEach(function (r) {
      S[r] = new w(r, 4, !1, r, null, !1, !1)
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (r) {
      S[r] = new w(r, 6, !1, r, null, !1, !1)
    }),
    ['rowSpan', 'start'].forEach(function (r) {
      S[r] = new w(r, 5, !1, r.toLowerCase(), null, !1, !1)
    }))
  var k = /[\-:]([a-z])/g
  function P(r) {
    return r[1].toUpperCase()
  }
  ;('accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (r) {
      var o = r.replace(k, P)
      S[o] = new w(o, 1, !1, r, null, !1, !1)
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (r) {
        var o = r.replace(k, P)
        S[o] = new w(o, 1, !1, r, 'http://www.w3.org/1999/xlink', !1, !1)
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (r) {
      var o = r.replace(k, P)
      S[o] = new w(o, 1, !1, r, 'http://www.w3.org/XML/1998/namespace', !1, !1)
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (r) {
      S[r] = new w(r, 1, !1, r.toLowerCase(), null, !1, !1)
    }),
    (S.xlinkHref = new w('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (r) {
      S[r] = new w(r, 1, !1, r.toLowerCase(), null, !0, !0)
    }))
  function C(r, o, c, d) {
    var g = S.hasOwnProperty(o) ? S[o] : null
    ;(g !== null
      ? g.type !== 0
      : d || !(2 < o.length) || (o[0] !== 'o' && o[0] !== 'O') || (o[1] !== 'n' && o[1] !== 'N')) &&
      (_(o, c, g, d) && (c = null),
      d || g === null
        ? y(o) && (c === null ? r.removeAttribute(o) : r.setAttribute(o, '' + c))
        : g.mustUseProperty
          ? (r[g.propertyName] = c === null ? (g.type === 3 ? !1 : '') : c)
          : ((o = g.attributeName),
            (d = g.attributeNamespace),
            c === null
              ? r.removeAttribute(o)
              : ((g = g.type),
                (c = g === 3 || (g === 4 && c === !0) ? '' : '' + c),
                d ? r.setAttributeNS(d, o, c) : r.setAttribute(o, c))))
  }
  var T = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    E = Symbol.for('react.element'),
    R = Symbol.for('react.portal'),
    A = Symbol.for('react.fragment'),
    V = Symbol.for('react.strict_mode'),
    j = Symbol.for('react.profiler'),
    W = Symbol.for('react.provider'),
    N = Symbol.for('react.context'),
    F = Symbol.for('react.forward_ref'),
    q = Symbol.for('react.suspense'),
    $ = Symbol.for('react.suspense_list'),
    st = Symbol.for('react.memo'),
    tt = Symbol.for('react.lazy'),
    rt = Symbol.for('react.offscreen'),
    K = Symbol.iterator
  function J(r) {
    return r === null || typeof r != 'object'
      ? null
      : ((r = (K && r[K]) || r['@@iterator']), typeof r == 'function' ? r : null)
  }
  var Z = Object.assign,
    L
  function H(r) {
    if (L === void 0)
      try {
        throw Error()
      } catch (c) {
        var o = c.stack.trim().match(/\n( *(at )?)/)
        L = (o && o[1]) || ''
      }
    return (
      `
` +
      L +
      r
    )
  }
  var lt = !1
  function ut(r, o) {
    if (!r || lt) return ''
    lt = !0
    var c = Error.prepareStackTrace
    Error.prepareStackTrace = void 0
    try {
      if (o)
        if (
          ((o = function () {
            throw Error()
          }),
          Object.defineProperty(o.prototype, 'props', {
            set: function () {
              throw Error()
            },
          }),
          typeof Reflect == 'object' && Reflect.construct)
        ) {
          try {
            Reflect.construct(o, [])
          } catch (B) {
            var d = B
          }
          Reflect.construct(r, [], o)
        } else {
          try {
            o.call()
          } catch (B) {
            d = B
          }
          r.call(o.prototype)
        }
      else {
        try {
          throw Error()
        } catch (B) {
          d = B
        }
        r()
      }
    } catch (B) {
      if (B && d && typeof B.stack == 'string') {
        for (
          var g = B.stack.split(`
`),
            v = d.stack.split(`
`),
            b = g.length - 1,
            M = v.length - 1;
          1 <= b && 0 <= M && g[b] !== v[M];

        )
          M--
        for (; 1 <= b && 0 <= M; b--, M--)
          if (g[b] !== v[M]) {
            if (b !== 1 || M !== 1)
              do
                if ((b--, M--, 0 > M || g[b] !== v[M])) {
                  var O =
                    `
` + g[b].replace(' at new ', ' at ')
                  return (
                    r.displayName &&
                      O.includes('<anonymous>') &&
                      (O = O.replace('<anonymous>', r.displayName)),
                    O
                  )
                }
              while (1 <= b && 0 <= M)
            break
          }
      }
    } finally {
      ;((lt = !1), (Error.prepareStackTrace = c))
    }
    return (r = r ? r.displayName || r.name : '') ? H(r) : ''
  }
  function gt(r) {
    switch (r.tag) {
      case 5:
        return H(r.type)
      case 16:
        return H('Lazy')
      case 13:
        return H('Suspense')
      case 19:
        return H('SuspenseList')
      case 0:
      case 2:
      case 15:
        return ((r = ut(r.type, !1)), r)
      case 11:
        return ((r = ut(r.type.render, !1)), r)
      case 1:
        return ((r = ut(r.type, !0)), r)
      default:
        return ''
    }
  }
  function dt(r) {
    if (r == null) return null
    if (typeof r == 'function') return r.displayName || r.name || null
    if (typeof r == 'string') return r
    switch (r) {
      case A:
        return 'Fragment'
      case R:
        return 'Portal'
      case j:
        return 'Profiler'
      case V:
        return 'StrictMode'
      case q:
        return 'Suspense'
      case $:
        return 'SuspenseList'
    }
    if (typeof r == 'object')
      switch (r.$$typeof) {
        case N:
          return (r.displayName || 'Context') + '.Consumer'
        case W:
          return (r._context.displayName || 'Context') + '.Provider'
        case F:
          var o = r.render
          return (
            (r = r.displayName),
            r ||
              ((r = o.displayName || o.name || ''),
              (r = r !== '' ? 'ForwardRef(' + r + ')' : 'ForwardRef')),
            r
          )
        case st:
          return ((o = r.displayName || null), o !== null ? o : dt(r.type) || 'Memo')
        case tt:
          ;((o = r._payload), (r = r._init))
          try {
            return dt(r(o))
          } catch {}
      }
    return null
  }
  function xt(r) {
    var o = r.type
    switch (r.tag) {
      case 24:
        return 'Cache'
      case 9:
        return (o.displayName || 'Context') + '.Consumer'
      case 10:
        return (o._context.displayName || 'Context') + '.Provider'
      case 18:
        return 'DehydratedFragment'
      case 11:
        return (
          (r = o.render),
          (r = r.displayName || r.name || ''),
          o.displayName || (r !== '' ? 'ForwardRef(' + r + ')' : 'ForwardRef')
        )
      case 7:
        return 'Fragment'
      case 5:
        return o
      case 4:
        return 'Portal'
      case 3:
        return 'Root'
      case 6:
        return 'Text'
      case 16:
        return dt(o)
      case 8:
        return o === V ? 'StrictMode' : 'Mode'
      case 22:
        return 'Offscreen'
      case 12:
        return 'Profiler'
      case 21:
        return 'Scope'
      case 13:
        return 'Suspense'
      case 19:
        return 'SuspenseList'
      case 25:
        return 'TracingMarker'
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof o == 'function') return o.displayName || o.name || null
        if (typeof o == 'string') return o
    }
    return null
  }
  function ct(r) {
    switch (typeof r) {
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return r
      case 'object':
        return r
      default:
        return ''
    }
  }
  function vt(r) {
    var o = r.type
    return (r = r.nodeName) && r.toLowerCase() === 'input' && (o === 'checkbox' || o === 'radio')
  }
  function Et(r) {
    var o = vt(r) ? 'checked' : 'value',
      c = Object.getOwnPropertyDescriptor(r.constructor.prototype, o),
      d = '' + r[o]
    if (
      !r.hasOwnProperty(o) &&
      typeof c < 'u' &&
      typeof c.get == 'function' &&
      typeof c.set == 'function'
    ) {
      var g = c.get,
        v = c.set
      return (
        Object.defineProperty(r, o, {
          configurable: !0,
          get: function () {
            return g.call(this)
          },
          set: function (b) {
            ;((d = '' + b), v.call(this, b))
          },
        }),
        Object.defineProperty(r, o, { enumerable: c.enumerable }),
        {
          getValue: function () {
            return d
          },
          setValue: function (b) {
            d = '' + b
          },
          stopTracking: function () {
            ;((r._valueTracker = null), delete r[o])
          },
        }
      )
    }
  }
  function ee(r) {
    r._valueTracker || (r._valueTracker = Et(r))
  }
  function Lr(r) {
    if (!r) return !1
    var o = r._valueTracker
    if (!o) return !0
    var c = o.getValue(),
      d = ''
    return (
      r && (d = vt(r) ? (r.checked ? 'true' : 'false') : r.value),
      (r = d),
      r !== c ? (o.setValue(r), !0) : !1
    )
  }
  function ro(r) {
    if (((r = r || (typeof document < 'u' ? document : void 0)), typeof r > 'u')) return null
    try {
      return r.activeElement || r.body
    } catch {
      return r.body
    }
  }
  function Rl(r, o) {
    var c = o.checked
    return Z({}, o, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: c ?? r._wrapperState.initialChecked,
    })
  }
  function Oh(r, o) {
    var c = o.defaultValue == null ? '' : o.defaultValue,
      d = o.checked != null ? o.checked : o.defaultChecked
    ;((c = ct(o.value != null ? o.value : c)),
      (r._wrapperState = {
        initialChecked: d,
        initialValue: c,
        controlled:
          o.type === 'checkbox' || o.type === 'radio' ? o.checked != null : o.value != null,
      }))
  }
  function Lh(r, o) {
    ;((o = o.checked), o != null && C(r, 'checked', o, !1))
  }
  function Fl(r, o) {
    Lh(r, o)
    var c = ct(o.value),
      d = o.type
    if (c != null)
      d === 'number'
        ? ((c === 0 && r.value === '') || r.value != c) && (r.value = '' + c)
        : r.value !== '' + c && (r.value = '' + c)
    else if (d === 'submit' || d === 'reset') {
      r.removeAttribute('value')
      return
    }
    ;(o.hasOwnProperty('value')
      ? Il(r, o.type, c)
      : o.hasOwnProperty('defaultValue') && Il(r, o.type, ct(o.defaultValue)),
      o.checked == null && o.defaultChecked != null && (r.defaultChecked = !!o.defaultChecked))
  }
  function Dh(r, o, c) {
    if (o.hasOwnProperty('value') || o.hasOwnProperty('defaultValue')) {
      var d = o.type
      if (!((d !== 'submit' && d !== 'reset') || (o.value !== void 0 && o.value !== null))) return
      ;((o = '' + r._wrapperState.initialValue),
        c || o === r.value || (r.value = o),
        (r.defaultValue = o))
    }
    ;((c = r.name),
      c !== '' && (r.name = ''),
      (r.defaultChecked = !!r._wrapperState.initialChecked),
      c !== '' && (r.name = c))
  }
  function Il(r, o, c) {
    ;(o !== 'number' || ro(r.ownerDocument) !== r) &&
      (c == null
        ? (r.defaultValue = '' + r._wrapperState.initialValue)
        : r.defaultValue !== '' + c && (r.defaultValue = '' + c))
  }
  var Dr = Array.isArray
  function Yi(r, o, c, d) {
    if (((r = r.options), o)) {
      o = {}
      for (var g = 0; g < c.length; g++) o['$' + c[g]] = !0
      for (c = 0; c < r.length; c++)
        ((g = o.hasOwnProperty('$' + r[c].value)),
          r[c].selected !== g && (r[c].selected = g),
          g && d && (r[c].defaultSelected = !0))
    } else {
      for (c = '' + ct(c), o = null, g = 0; g < r.length; g++) {
        if (r[g].value === c) {
          ;((r[g].selected = !0), d && (r[g].defaultSelected = !0))
          return
        }
        o !== null || r[g].disabled || (o = r[g])
      }
      o !== null && (o.selected = !0)
    }
  }
  function Vl(r, o) {
    if (o.dangerouslySetInnerHTML != null) throw Error(n(91))
    return Z({}, o, {
      value: void 0,
      defaultValue: void 0,
      children: '' + r._wrapperState.initialValue,
    })
  }
  function Ah(r, o) {
    var c = o.value
    if (c == null) {
      if (((c = o.children), (o = o.defaultValue), c != null)) {
        if (o != null) throw Error(n(92))
        if (Dr(c)) {
          if (1 < c.length) throw Error(n(93))
          c = c[0]
        }
        o = c
      }
      ;(o == null && (o = ''), (c = o))
    }
    r._wrapperState = { initialValue: ct(c) }
  }
  function Rh(r, o) {
    var c = ct(o.value),
      d = ct(o.defaultValue)
    ;(c != null &&
      ((c = '' + c),
      c !== r.value && (r.value = c),
      o.defaultValue == null && r.defaultValue !== c && (r.defaultValue = c)),
      d != null && (r.defaultValue = '' + d))
  }
  function Fh(r) {
    var o = r.textContent
    o === r._wrapperState.initialValue && o !== '' && o !== null && (r.value = o)
  }
  function Ih(r) {
    switch (r) {
      case 'svg':
        return 'http://www.w3.org/2000/svg'
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML'
      default:
        return 'http://www.w3.org/1999/xhtml'
    }
  }
  function zl(r, o) {
    return r == null || r === 'http://www.w3.org/1999/xhtml'
      ? Ih(o)
      : r === 'http://www.w3.org/2000/svg' && o === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : r
  }
  var so,
    Vh = (function (r) {
      return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
        ? function (o, c, d, g) {
            MSApp.execUnsafeLocalFunction(function () {
              return r(o, c, d, g)
            })
          }
        : r
    })(function (r, o) {
      if (r.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in r) r.innerHTML = o
      else {
        for (
          so = so || document.createElement('div'),
            so.innerHTML = '<svg>' + o.valueOf().toString() + '</svg>',
            o = so.firstChild;
          r.firstChild;

        )
          r.removeChild(r.firstChild)
        for (; o.firstChild; ) r.appendChild(o.firstChild)
      }
    })
  function Ar(r, o) {
    if (o) {
      var c = r.firstChild
      if (c && c === r.lastChild && c.nodeType === 3) {
        c.nodeValue = o
        return
      }
    }
    r.textContent = o
  }
  var Rr = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    x2 = ['Webkit', 'ms', 'Moz', 'O']
  Object.keys(Rr).forEach(function (r) {
    x2.forEach(function (o) {
      ;((o = o + r.charAt(0).toUpperCase() + r.substring(1)), (Rr[o] = Rr[r]))
    })
  })
  function zh(r, o, c) {
    return o == null || typeof o == 'boolean' || o === ''
      ? ''
      : c || typeof o != 'number' || o === 0 || (Rr.hasOwnProperty(r) && Rr[r])
        ? ('' + o).trim()
        : o + 'px'
  }
  function Bh(r, o) {
    r = r.style
    for (var c in o)
      if (o.hasOwnProperty(c)) {
        var d = c.indexOf('--') === 0,
          g = zh(c, o[c], d)
        ;(c === 'float' && (c = 'cssFloat'), d ? r.setProperty(c, g) : (r[c] = g))
      }
  }
  var _2 = Z(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  )
  function Bl(r, o) {
    if (o) {
      if (_2[r] && (o.children != null || o.dangerouslySetInnerHTML != null)) throw Error(n(137, r))
      if (o.dangerouslySetInnerHTML != null) {
        if (o.children != null) throw Error(n(60))
        if (
          typeof o.dangerouslySetInnerHTML != 'object' ||
          !('__html' in o.dangerouslySetInnerHTML)
        )
          throw Error(n(61))
      }
      if (o.style != null && typeof o.style != 'object') throw Error(n(62))
    }
  }
  function Nl(r, o) {
    if (r.indexOf('-') === -1) return typeof o.is == 'string'
    switch (r) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1
      default:
        return !0
    }
  }
  var jl = null
  function Hl(r) {
    return (
      (r = r.target || r.srcElement || window),
      r.correspondingUseElement && (r = r.correspondingUseElement),
      r.nodeType === 3 ? r.parentNode : r
    )
  }
  var Wl = null,
    Xi = null,
    Ki = null
  function Nh(r) {
    if ((r = ns(r))) {
      if (typeof Wl != 'function') throw Error(n(280))
      var o = r.stateNode
      o && ((o = Eo(o)), Wl(r.stateNode, r.type, o))
    }
  }
  function jh(r) {
    Xi ? (Ki ? Ki.push(r) : (Ki = [r])) : (Xi = r)
  }
  function Hh() {
    if (Xi) {
      var r = Xi,
        o = Ki
      if (((Ki = Xi = null), Nh(r), o)) for (r = 0; r < o.length; r++) Nh(o[r])
    }
  }
  function Wh(r, o) {
    return r(o)
  }
  function Uh() {}
  var Ul = !1
  function $h(r, o, c) {
    if (Ul) return r(o, c)
    Ul = !0
    try {
      return Wh(r, o, c)
    } finally {
      ;((Ul = !1), (Xi !== null || Ki !== null) && (Uh(), Hh()))
    }
  }
  function Fr(r, o) {
    var c = r.stateNode
    if (c === null) return null
    var d = Eo(c)
    if (d === null) return null
    c = d[o]
    t: switch (o) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        ;((d = !d.disabled) ||
          ((r = r.type),
          (d = !(r === 'button' || r === 'input' || r === 'select' || r === 'textarea'))),
          (r = !d))
        break t
      default:
        r = !1
    }
    if (r) return null
    if (c && typeof c != 'function') throw Error(n(231, o, typeof c))
    return c
  }
  var $l = !1
  if (u)
    try {
      var Ir = {}
      ;(Object.defineProperty(Ir, 'passive', {
        get: function () {
          $l = !0
        },
      }),
        window.addEventListener('test', Ir, Ir),
        window.removeEventListener('test', Ir, Ir))
    } catch {
      $l = !1
    }
  function w2(r, o, c, d, g, v, b, M, O) {
    var B = Array.prototype.slice.call(arguments, 3)
    try {
      o.apply(c, B)
    } catch (X) {
      this.onError(X)
    }
  }
  var Vr = !1,
    oo = null,
    ao = !1,
    Yl = null,
    S2 = {
      onError: function (r) {
        ;((Vr = !0), (oo = r))
      },
    }
  function b2(r, o, c, d, g, v, b, M, O) {
    ;((Vr = !1), (oo = null), w2.apply(S2, arguments))
  }
  function k2(r, o, c, d, g, v, b, M, O) {
    if ((b2.apply(this, arguments), Vr)) {
      if (Vr) {
        var B = oo
        ;((Vr = !1), (oo = null))
      } else throw Error(n(198))
      ao || ((ao = !0), (Yl = B))
    }
  }
  function mi(r) {
    var o = r,
      c = r
    if (r.alternate) for (; o.return; ) o = o.return
    else {
      r = o
      do ((o = r), (o.flags & 4098) !== 0 && (c = o.return), (r = o.return))
      while (r)
    }
    return o.tag === 3 ? c : null
  }
  function Yh(r) {
    if (r.tag === 13) {
      var o = r.memoizedState
      if ((o === null && ((r = r.alternate), r !== null && (o = r.memoizedState)), o !== null))
        return o.dehydrated
    }
    return null
  }
  function Xh(r) {
    if (mi(r) !== r) throw Error(n(188))
  }
  function P2(r) {
    var o = r.alternate
    if (!o) {
      if (((o = mi(r)), o === null)) throw Error(n(188))
      return o !== r ? null : r
    }
    for (var c = r, d = o; ; ) {
      var g = c.return
      if (g === null) break
      var v = g.alternate
      if (v === null) {
        if (((d = g.return), d !== null)) {
          c = d
          continue
        }
        break
      }
      if (g.child === v.child) {
        for (v = g.child; v; ) {
          if (v === c) return (Xh(g), r)
          if (v === d) return (Xh(g), o)
          v = v.sibling
        }
        throw Error(n(188))
      }
      if (c.return !== d.return) ((c = g), (d = v))
      else {
        for (var b = !1, M = g.child; M; ) {
          if (M === c) {
            ;((b = !0), (c = g), (d = v))
            break
          }
          if (M === d) {
            ;((b = !0), (d = g), (c = v))
            break
          }
          M = M.sibling
        }
        if (!b) {
          for (M = v.child; M; ) {
            if (M === c) {
              ;((b = !0), (c = v), (d = g))
              break
            }
            if (M === d) {
              ;((b = !0), (d = v), (c = g))
              break
            }
            M = M.sibling
          }
          if (!b) throw Error(n(189))
        }
      }
      if (c.alternate !== d) throw Error(n(190))
    }
    if (c.tag !== 3) throw Error(n(188))
    return c.stateNode.current === c ? r : o
  }
  function Kh(r) {
    return ((r = P2(r)), r !== null ? Gh(r) : null)
  }
  function Gh(r) {
    if (r.tag === 5 || r.tag === 6) return r
    for (r = r.child; r !== null; ) {
      var o = Gh(r)
      if (o !== null) return o
      r = r.sibling
    }
    return null
  }
  var qh = t.unstable_scheduleCallback,
    Qh = t.unstable_cancelCallback,
    C2 = t.unstable_shouldYield,
    M2 = t.unstable_requestPaint,
    $t = t.unstable_now,
    T2 = t.unstable_getCurrentPriorityLevel,
    Xl = t.unstable_ImmediatePriority,
    Zh = t.unstable_UserBlockingPriority,
    lo = t.unstable_NormalPriority,
    E2 = t.unstable_LowPriority,
    Jh = t.unstable_IdlePriority,
    uo = null,
    Je = null
  function O2(r) {
    if (Je && typeof Je.onCommitFiberRoot == 'function')
      try {
        Je.onCommitFiberRoot(uo, r, void 0, (r.current.flags & 128) === 128)
      } catch {}
  }
  var $e = Math.clz32 ? Math.clz32 : A2,
    L2 = Math.log,
    D2 = Math.LN2
  function A2(r) {
    return ((r >>>= 0), r === 0 ? 32 : (31 - ((L2(r) / D2) | 0)) | 0)
  }
  var co = 64,
    fo = 4194304
  function zr(r) {
    switch (r & -r) {
      case 1:
        return 1
      case 2:
        return 2
      case 4:
        return 4
      case 8:
        return 8
      case 16:
        return 16
      case 32:
        return 32
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r & 4194240
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return r & 130023424
      case 134217728:
        return 134217728
      case 268435456:
        return 268435456
      case 536870912:
        return 536870912
      case 1073741824:
        return 1073741824
      default:
        return r
    }
  }
  function ho(r, o) {
    var c = r.pendingLanes
    if (c === 0) return 0
    var d = 0,
      g = r.suspendedLanes,
      v = r.pingedLanes,
      b = c & 268435455
    if (b !== 0) {
      var M = b & ~g
      M !== 0 ? (d = zr(M)) : ((v &= b), v !== 0 && (d = zr(v)))
    } else ((b = c & ~g), b !== 0 ? (d = zr(b)) : v !== 0 && (d = zr(v)))
    if (d === 0) return 0
    if (
      o !== 0 &&
      o !== d &&
      (o & g) === 0 &&
      ((g = d & -d), (v = o & -o), g >= v || (g === 16 && (v & 4194240) !== 0))
    )
      return o
    if (((d & 4) !== 0 && (d |= c & 16), (o = r.entangledLanes), o !== 0))
      for (r = r.entanglements, o &= d; 0 < o; )
        ((c = 31 - $e(o)), (g = 1 << c), (d |= r[c]), (o &= ~g))
    return d
  }
  function R2(r, o) {
    switch (r) {
      case 1:
      case 2:
      case 4:
        return o + 250
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return o + 5e3
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1
      default:
        return -1
    }
  }
  function F2(r, o) {
    for (
      var c = r.suspendedLanes, d = r.pingedLanes, g = r.expirationTimes, v = r.pendingLanes;
      0 < v;

    ) {
      var b = 31 - $e(v),
        M = 1 << b,
        O = g[b]
      ;(O === -1
        ? ((M & c) === 0 || (M & d) !== 0) && (g[b] = R2(M, o))
        : O <= o && (r.expiredLanes |= M),
        (v &= ~M))
    }
  }
  function Kl(r) {
    return ((r = r.pendingLanes & -1073741825), r !== 0 ? r : r & 1073741824 ? 1073741824 : 0)
  }
  function td() {
    var r = co
    return ((co <<= 1), (co & 4194240) === 0 && (co = 64), r)
  }
  function Gl(r) {
    for (var o = [], c = 0; 31 > c; c++) o.push(r)
    return o
  }
  function Br(r, o, c) {
    ;((r.pendingLanes |= o),
      o !== 536870912 && ((r.suspendedLanes = 0), (r.pingedLanes = 0)),
      (r = r.eventTimes),
      (o = 31 - $e(o)),
      (r[o] = c))
  }
  function I2(r, o) {
    var c = r.pendingLanes & ~o
    ;((r.pendingLanes = o),
      (r.suspendedLanes = 0),
      (r.pingedLanes = 0),
      (r.expiredLanes &= o),
      (r.mutableReadLanes &= o),
      (r.entangledLanes &= o),
      (o = r.entanglements))
    var d = r.eventTimes
    for (r = r.expirationTimes; 0 < c; ) {
      var g = 31 - $e(c),
        v = 1 << g
      ;((o[g] = 0), (d[g] = -1), (r[g] = -1), (c &= ~v))
    }
  }
  function ql(r, o) {
    var c = (r.entangledLanes |= o)
    for (r = r.entanglements; c; ) {
      var d = 31 - $e(c),
        g = 1 << d
      ;((g & o) | (r[d] & o) && (r[d] |= o), (c &= ~g))
    }
  }
  var Ct = 0
  function ed(r) {
    return ((r &= -r), 1 < r ? (4 < r ? ((r & 268435455) !== 0 ? 16 : 536870912) : 4) : 1)
  }
  var nd,
    Ql,
    id,
    rd,
    sd,
    Zl = !1,
    po = [],
    Dn = null,
    An = null,
    Rn = null,
    Nr = new Map(),
    jr = new Map(),
    Fn = [],
    V2 =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' '
      )
  function od(r, o) {
    switch (r) {
      case 'focusin':
      case 'focusout':
        Dn = null
        break
      case 'dragenter':
      case 'dragleave':
        An = null
        break
      case 'mouseover':
      case 'mouseout':
        Rn = null
        break
      case 'pointerover':
      case 'pointerout':
        Nr.delete(o.pointerId)
        break
      case 'gotpointercapture':
      case 'lostpointercapture':
        jr.delete(o.pointerId)
    }
  }
  function Hr(r, o, c, d, g, v) {
    return r === null || r.nativeEvent !== v
      ? ((r = {
          blockedOn: o,
          domEventName: c,
          eventSystemFlags: d,
          nativeEvent: v,
          targetContainers: [g],
        }),
        o !== null && ((o = ns(o)), o !== null && Ql(o)),
        r)
      : ((r.eventSystemFlags |= d),
        (o = r.targetContainers),
        g !== null && o.indexOf(g) === -1 && o.push(g),
        r)
  }
  function z2(r, o, c, d, g) {
    switch (o) {
      case 'focusin':
        return ((Dn = Hr(Dn, r, o, c, d, g)), !0)
      case 'dragenter':
        return ((An = Hr(An, r, o, c, d, g)), !0)
      case 'mouseover':
        return ((Rn = Hr(Rn, r, o, c, d, g)), !0)
      case 'pointerover':
        var v = g.pointerId
        return (Nr.set(v, Hr(Nr.get(v) || null, r, o, c, d, g)), !0)
      case 'gotpointercapture':
        return ((v = g.pointerId), jr.set(v, Hr(jr.get(v) || null, r, o, c, d, g)), !0)
    }
    return !1
  }
  function ad(r) {
    var o = gi(r.target)
    if (o !== null) {
      var c = mi(o)
      if (c !== null) {
        if (((o = c.tag), o === 13)) {
          if (((o = Yh(c)), o !== null)) {
            ;((r.blockedOn = o),
              sd(r.priority, function () {
                id(c)
              }))
            return
          }
        } else if (o === 3 && c.stateNode.current.memoizedState.isDehydrated) {
          r.blockedOn = c.tag === 3 ? c.stateNode.containerInfo : null
          return
        }
      }
    }
    r.blockedOn = null
  }
  function mo(r) {
    if (r.blockedOn !== null) return !1
    for (var o = r.targetContainers; 0 < o.length; ) {
      var c = tu(r.domEventName, r.eventSystemFlags, o[0], r.nativeEvent)
      if (c === null) {
        c = r.nativeEvent
        var d = new c.constructor(c.type, c)
        ;((jl = d), c.target.dispatchEvent(d), (jl = null))
      } else return ((o = ns(c)), o !== null && Ql(o), (r.blockedOn = c), !1)
      o.shift()
    }
    return !0
  }
  function ld(r, o, c) {
    mo(r) && c.delete(o)
  }
  function B2() {
    ;((Zl = !1),
      Dn !== null && mo(Dn) && (Dn = null),
      An !== null && mo(An) && (An = null),
      Rn !== null && mo(Rn) && (Rn = null),
      Nr.forEach(ld),
      jr.forEach(ld))
  }
  function Wr(r, o) {
    r.blockedOn === o &&
      ((r.blockedOn = null),
      Zl || ((Zl = !0), t.unstable_scheduleCallback(t.unstable_NormalPriority, B2)))
  }
  function Ur(r) {
    function o(g) {
      return Wr(g, r)
    }
    if (0 < po.length) {
      Wr(po[0], r)
      for (var c = 1; c < po.length; c++) {
        var d = po[c]
        d.blockedOn === r && (d.blockedOn = null)
      }
    }
    for (
      Dn !== null && Wr(Dn, r),
        An !== null && Wr(An, r),
        Rn !== null && Wr(Rn, r),
        Nr.forEach(o),
        jr.forEach(o),
        c = 0;
      c < Fn.length;
      c++
    )
      ((d = Fn[c]), d.blockedOn === r && (d.blockedOn = null))
    for (; 0 < Fn.length && ((c = Fn[0]), c.blockedOn === null); )
      (ad(c), c.blockedOn === null && Fn.shift())
  }
  var Gi = T.ReactCurrentBatchConfig,
    go = !0
  function N2(r, o, c, d) {
    var g = Ct,
      v = Gi.transition
    Gi.transition = null
    try {
      ;((Ct = 1), Jl(r, o, c, d))
    } finally {
      ;((Ct = g), (Gi.transition = v))
    }
  }
  function j2(r, o, c, d) {
    var g = Ct,
      v = Gi.transition
    Gi.transition = null
    try {
      ;((Ct = 4), Jl(r, o, c, d))
    } finally {
      ;((Ct = g), (Gi.transition = v))
    }
  }
  function Jl(r, o, c, d) {
    if (go) {
      var g = tu(r, o, c, d)
      if (g === null) (yu(r, o, d, yo, c), od(r, d))
      else if (z2(g, r, o, c, d)) d.stopPropagation()
      else if ((od(r, d), o & 4 && -1 < V2.indexOf(r))) {
        for (; g !== null; ) {
          var v = ns(g)
          if (
            (v !== null && nd(v), (v = tu(r, o, c, d)), v === null && yu(r, o, d, yo, c), v === g)
          )
            break
          g = v
        }
        g !== null && d.stopPropagation()
      } else yu(r, o, d, null, c)
    }
  }
  var yo = null
  function tu(r, o, c, d) {
    if (((yo = null), (r = Hl(d)), (r = gi(r)), r !== null))
      if (((o = mi(r)), o === null)) r = null
      else if (((c = o.tag), c === 13)) {
        if (((r = Yh(o)), r !== null)) return r
        r = null
      } else if (c === 3) {
        if (o.stateNode.current.memoizedState.isDehydrated)
          return o.tag === 3 ? o.stateNode.containerInfo : null
        r = null
      } else o !== r && (r = null)
    return ((yo = r), null)
  }
  function ud(r) {
    switch (r) {
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 1
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'toggle':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 4
      case 'message':
        switch (T2()) {
          case Xl:
            return 1
          case Zh:
            return 4
          case lo:
          case E2:
            return 16
          case Jh:
            return 536870912
          default:
            return 16
        }
      default:
        return 16
    }
  }
  var In = null,
    eu = null,
    vo = null
  function cd() {
    if (vo) return vo
    var r,
      o = eu,
      c = o.length,
      d,
      g = 'value' in In ? In.value : In.textContent,
      v = g.length
    for (r = 0; r < c && o[r] === g[r]; r++);
    var b = c - r
    for (d = 1; d <= b && o[c - d] === g[v - d]; d++);
    return (vo = g.slice(r, 1 < d ? 1 - d : void 0))
  }
  function xo(r) {
    var o = r.keyCode
    return (
      'charCode' in r ? ((r = r.charCode), r === 0 && o === 13 && (r = 13)) : (r = o),
      r === 10 && (r = 13),
      32 <= r || r === 13 ? r : 0
    )
  }
  function _o() {
    return !0
  }
  function fd() {
    return !1
  }
  function Oe(r) {
    function o(c, d, g, v, b) {
      ;((this._reactName = c),
        (this._targetInst = g),
        (this.type = d),
        (this.nativeEvent = v),
        (this.target = b),
        (this.currentTarget = null))
      for (var M in r) r.hasOwnProperty(M) && ((c = r[M]), (this[M] = c ? c(v) : v[M]))
      return (
        (this.isDefaultPrevented = (
          v.defaultPrevented != null ? v.defaultPrevented : v.returnValue === !1
        )
          ? _o
          : fd),
        (this.isPropagationStopped = fd),
        this
      )
    }
    return (
      Z(o.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0
          var c = this.nativeEvent
          c &&
            (c.preventDefault
              ? c.preventDefault()
              : typeof c.returnValue != 'unknown' && (c.returnValue = !1),
            (this.isDefaultPrevented = _o))
        },
        stopPropagation: function () {
          var c = this.nativeEvent
          c &&
            (c.stopPropagation
              ? c.stopPropagation()
              : typeof c.cancelBubble != 'unknown' && (c.cancelBubble = !0),
            (this.isPropagationStopped = _o))
        },
        persist: function () {},
        isPersistent: _o,
      }),
      o
    )
  }
  var qi = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (r) {
        return r.timeStamp || Date.now()
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    nu = Oe(qi),
    $r = Z({}, qi, { view: 0, detail: 0 }),
    H2 = Oe($r),
    iu,
    ru,
    Yr,
    wo = Z({}, $r, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: ou,
      button: 0,
      buttons: 0,
      relatedTarget: function (r) {
        return r.relatedTarget === void 0
          ? r.fromElement === r.srcElement
            ? r.toElement
            : r.fromElement
          : r.relatedTarget
      },
      movementX: function (r) {
        return 'movementX' in r
          ? r.movementX
          : (r !== Yr &&
              (Yr && r.type === 'mousemove'
                ? ((iu = r.screenX - Yr.screenX), (ru = r.screenY - Yr.screenY))
                : (ru = iu = 0),
              (Yr = r)),
            iu)
      },
      movementY: function (r) {
        return 'movementY' in r ? r.movementY : ru
      },
    }),
    hd = Oe(wo),
    W2 = Z({}, wo, { dataTransfer: 0 }),
    U2 = Oe(W2),
    $2 = Z({}, $r, { relatedTarget: 0 }),
    su = Oe($2),
    Y2 = Z({}, qi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    X2 = Oe(Y2),
    K2 = Z({}, qi, {
      clipboardData: function (r) {
        return 'clipboardData' in r ? r.clipboardData : window.clipboardData
      },
    }),
    G2 = Oe(K2),
    q2 = Z({}, qi, { data: 0 }),
    dd = Oe(q2),
    Q2 = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    Z2 = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    J2 = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
  function tx(r) {
    var o = this.nativeEvent
    return o.getModifierState ? o.getModifierState(r) : (r = J2[r]) ? !!o[r] : !1
  }
  function ou() {
    return tx
  }
  var ex = Z({}, $r, {
      key: function (r) {
        if (r.key) {
          var o = Q2[r.key] || r.key
          if (o !== 'Unidentified') return o
        }
        return r.type === 'keypress'
          ? ((r = xo(r)), r === 13 ? 'Enter' : String.fromCharCode(r))
          : r.type === 'keydown' || r.type === 'keyup'
            ? Z2[r.keyCode] || 'Unidentified'
            : ''
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ou,
      charCode: function (r) {
        return r.type === 'keypress' ? xo(r) : 0
      },
      keyCode: function (r) {
        return r.type === 'keydown' || r.type === 'keyup' ? r.keyCode : 0
      },
      which: function (r) {
        return r.type === 'keypress'
          ? xo(r)
          : r.type === 'keydown' || r.type === 'keyup'
            ? r.keyCode
            : 0
      },
    }),
    nx = Oe(ex),
    ix = Z({}, wo, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    pd = Oe(ix),
    rx = Z({}, $r, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ou,
    }),
    sx = Oe(rx),
    ox = Z({}, qi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ax = Oe(ox),
    lx = Z({}, wo, {
      deltaX: function (r) {
        return 'deltaX' in r ? r.deltaX : 'wheelDeltaX' in r ? -r.wheelDeltaX : 0
      },
      deltaY: function (r) {
        return 'deltaY' in r
          ? r.deltaY
          : 'wheelDeltaY' in r
            ? -r.wheelDeltaY
            : 'wheelDelta' in r
              ? -r.wheelDelta
              : 0
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    ux = Oe(lx),
    cx = [9, 13, 27, 32],
    au = u && 'CompositionEvent' in window,
    Xr = null
  u && 'documentMode' in document && (Xr = document.documentMode)
  var fx = u && 'TextEvent' in window && !Xr,
    md = u && (!au || (Xr && 8 < Xr && 11 >= Xr)),
    gd = ' ',
    yd = !1
  function vd(r, o) {
    switch (r) {
      case 'keyup':
        return cx.indexOf(o.keyCode) !== -1
      case 'keydown':
        return o.keyCode !== 229
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0
      default:
        return !1
    }
  }
  function xd(r) {
    return ((r = r.detail), typeof r == 'object' && 'data' in r ? r.data : null)
  }
  var Qi = !1
  function hx(r, o) {
    switch (r) {
      case 'compositionend':
        return xd(o)
      case 'keypress':
        return o.which !== 32 ? null : ((yd = !0), gd)
      case 'textInput':
        return ((r = o.data), r === gd && yd ? null : r)
      default:
        return null
    }
  }
  function dx(r, o) {
    if (Qi)
      return r === 'compositionend' || (!au && vd(r, o))
        ? ((r = cd()), (vo = eu = In = null), (Qi = !1), r)
        : null
    switch (r) {
      case 'paste':
        return null
      case 'keypress':
        if (!(o.ctrlKey || o.altKey || o.metaKey) || (o.ctrlKey && o.altKey)) {
          if (o.char && 1 < o.char.length) return o.char
          if (o.which) return String.fromCharCode(o.which)
        }
        return null
      case 'compositionend':
        return md && o.locale !== 'ko' ? null : o.data
      default:
        return null
    }
  }
  var px = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  }
  function _d(r) {
    var o = r && r.nodeName && r.nodeName.toLowerCase()
    return o === 'input' ? !!px[r.type] : o === 'textarea'
  }
  function wd(r, o, c, d) {
    ;(jh(d),
      (o = Co(o, 'onChange')),
      0 < o.length &&
        ((c = new nu('onChange', 'change', null, c, d)), r.push({ event: c, listeners: o })))
  }
  var Kr = null,
    Gr = null
  function mx(r) {
    Bd(r, 0)
  }
  function So(r) {
    var o = nr(r)
    if (Lr(o)) return r
  }
  function gx(r, o) {
    if (r === 'change') return o
  }
  var Sd = !1
  if (u) {
    var lu
    if (u) {
      var uu = 'oninput' in document
      if (!uu) {
        var bd = document.createElement('div')
        ;(bd.setAttribute('oninput', 'return;'), (uu = typeof bd.oninput == 'function'))
      }
      lu = uu
    } else lu = !1
    Sd = lu && (!document.documentMode || 9 < document.documentMode)
  }
  function kd() {
    Kr && (Kr.detachEvent('onpropertychange', Pd), (Gr = Kr = null))
  }
  function Pd(r) {
    if (r.propertyName === 'value' && So(Gr)) {
      var o = []
      ;(wd(o, Gr, r, Hl(r)), $h(mx, o))
    }
  }
  function yx(r, o, c) {
    r === 'focusin'
      ? (kd(), (Kr = o), (Gr = c), Kr.attachEvent('onpropertychange', Pd))
      : r === 'focusout' && kd()
  }
  function vx(r) {
    if (r === 'selectionchange' || r === 'keyup' || r === 'keydown') return So(Gr)
  }
  function xx(r, o) {
    if (r === 'click') return So(o)
  }
  function _x(r, o) {
    if (r === 'input' || r === 'change') return So(o)
  }
  function wx(r, o) {
    return (r === o && (r !== 0 || 1 / r === 1 / o)) || (r !== r && o !== o)
  }
  var Ye = typeof Object.is == 'function' ? Object.is : wx
  function qr(r, o) {
    if (Ye(r, o)) return !0
    if (typeof r != 'object' || r === null || typeof o != 'object' || o === null) return !1
    var c = Object.keys(r),
      d = Object.keys(o)
    if (c.length !== d.length) return !1
    for (d = 0; d < c.length; d++) {
      var g = c[d]
      if (!f.call(o, g) || !Ye(r[g], o[g])) return !1
    }
    return !0
  }
  function Cd(r) {
    for (; r && r.firstChild; ) r = r.firstChild
    return r
  }
  function Md(r, o) {
    var c = Cd(r)
    r = 0
    for (var d; c; ) {
      if (c.nodeType === 3) {
        if (((d = r + c.textContent.length), r <= o && d >= o)) return { node: c, offset: o - r }
        r = d
      }
      t: {
        for (; c; ) {
          if (c.nextSibling) {
            c = c.nextSibling
            break t
          }
          c = c.parentNode
        }
        c = void 0
      }
      c = Cd(c)
    }
  }
  function Td(r, o) {
    return r && o
      ? r === o
        ? !0
        : r && r.nodeType === 3
          ? !1
          : o && o.nodeType === 3
            ? Td(r, o.parentNode)
            : 'contains' in r
              ? r.contains(o)
              : r.compareDocumentPosition
                ? !!(r.compareDocumentPosition(o) & 16)
                : !1
      : !1
  }
  function Ed() {
    for (var r = window, o = ro(); o instanceof r.HTMLIFrameElement; ) {
      try {
        var c = typeof o.contentWindow.location.href == 'string'
      } catch {
        c = !1
      }
      if (c) r = o.contentWindow
      else break
      o = ro(r.document)
    }
    return o
  }
  function cu(r) {
    var o = r && r.nodeName && r.nodeName.toLowerCase()
    return (
      o &&
      ((o === 'input' &&
        (r.type === 'text' ||
          r.type === 'search' ||
          r.type === 'tel' ||
          r.type === 'url' ||
          r.type === 'password')) ||
        o === 'textarea' ||
        r.contentEditable === 'true')
    )
  }
  function Sx(r) {
    var o = Ed(),
      c = r.focusedElem,
      d = r.selectionRange
    if (o !== c && c && c.ownerDocument && Td(c.ownerDocument.documentElement, c)) {
      if (d !== null && cu(c)) {
        if (((o = d.start), (r = d.end), r === void 0 && (r = o), 'selectionStart' in c))
          ((c.selectionStart = o), (c.selectionEnd = Math.min(r, c.value.length)))
        else if (
          ((r = ((o = c.ownerDocument || document) && o.defaultView) || window), r.getSelection)
        ) {
          r = r.getSelection()
          var g = c.textContent.length,
            v = Math.min(d.start, g)
          ;((d = d.end === void 0 ? v : Math.min(d.end, g)),
            !r.extend && v > d && ((g = d), (d = v), (v = g)),
            (g = Md(c, v)))
          var b = Md(c, d)
          g &&
            b &&
            (r.rangeCount !== 1 ||
              r.anchorNode !== g.node ||
              r.anchorOffset !== g.offset ||
              r.focusNode !== b.node ||
              r.focusOffset !== b.offset) &&
            ((o = o.createRange()),
            o.setStart(g.node, g.offset),
            r.removeAllRanges(),
            v > d
              ? (r.addRange(o), r.extend(b.node, b.offset))
              : (o.setEnd(b.node, b.offset), r.addRange(o)))
        }
      }
      for (o = [], r = c; (r = r.parentNode); )
        r.nodeType === 1 && o.push({ element: r, left: r.scrollLeft, top: r.scrollTop })
      for (typeof c.focus == 'function' && c.focus(), c = 0; c < o.length; c++)
        ((r = o[c]), (r.element.scrollLeft = r.left), (r.element.scrollTop = r.top))
    }
  }
  var bx = u && 'documentMode' in document && 11 >= document.documentMode,
    Zi = null,
    fu = null,
    Qr = null,
    hu = !1
  function Od(r, o, c) {
    var d = c.window === c ? c.document : c.nodeType === 9 ? c : c.ownerDocument
    hu ||
      Zi == null ||
      Zi !== ro(d) ||
      ((d = Zi),
      'selectionStart' in d && cu(d)
        ? (d = { start: d.selectionStart, end: d.selectionEnd })
        : ((d = ((d.ownerDocument && d.ownerDocument.defaultView) || window).getSelection()),
          (d = {
            anchorNode: d.anchorNode,
            anchorOffset: d.anchorOffset,
            focusNode: d.focusNode,
            focusOffset: d.focusOffset,
          })),
      (Qr && qr(Qr, d)) ||
        ((Qr = d),
        (d = Co(fu, 'onSelect')),
        0 < d.length &&
          ((o = new nu('onSelect', 'select', null, o, c)),
          r.push({ event: o, listeners: d }),
          (o.target = Zi))))
  }
  function bo(r, o) {
    var c = {}
    return (
      (c[r.toLowerCase()] = o.toLowerCase()),
      (c['Webkit' + r] = 'webkit' + o),
      (c['Moz' + r] = 'moz' + o),
      c
    )
  }
  var Ji = {
      animationend: bo('Animation', 'AnimationEnd'),
      animationiteration: bo('Animation', 'AnimationIteration'),
      animationstart: bo('Animation', 'AnimationStart'),
      transitionend: bo('Transition', 'TransitionEnd'),
    },
    du = {},
    Ld = {}
  u &&
    ((Ld = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Ji.animationend.animation,
      delete Ji.animationiteration.animation,
      delete Ji.animationstart.animation),
    'TransitionEvent' in window || delete Ji.transitionend.transition)
  function ko(r) {
    if (du[r]) return du[r]
    if (!Ji[r]) return r
    var o = Ji[r],
      c
    for (c in o) if (o.hasOwnProperty(c) && c in Ld) return (du[r] = o[c])
    return r
  }
  var Dd = ko('animationend'),
    Ad = ko('animationiteration'),
    Rd = ko('animationstart'),
    Fd = ko('transitionend'),
    Id = new Map(),
    Vd =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      )
  function Vn(r, o) {
    ;(Id.set(r, o), a(o, [r]))
  }
  for (var pu = 0; pu < Vd.length; pu++) {
    var mu = Vd[pu],
      kx = mu.toLowerCase(),
      Px = mu[0].toUpperCase() + mu.slice(1)
    Vn(kx, 'on' + Px)
  }
  ;(Vn(Dd, 'onAnimationEnd'),
    Vn(Ad, 'onAnimationIteration'),
    Vn(Rd, 'onAnimationStart'),
    Vn('dblclick', 'onDoubleClick'),
    Vn('focusin', 'onFocus'),
    Vn('focusout', 'onBlur'),
    Vn(Fd, 'onTransitionEnd'),
    l('onMouseEnter', ['mouseout', 'mouseover']),
    l('onMouseLeave', ['mouseout', 'mouseover']),
    l('onPointerEnter', ['pointerout', 'pointerover']),
    l('onPointerLeave', ['pointerout', 'pointerover']),
    a('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    a(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    a('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    a('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    a(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    a(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    ))
  var Zr =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    Cx = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Zr))
  function zd(r, o, c) {
    var d = r.type || 'unknown-event'
    ;((r.currentTarget = c), k2(d, o, void 0, r), (r.currentTarget = null))
  }
  function Bd(r, o) {
    o = (o & 4) !== 0
    for (var c = 0; c < r.length; c++) {
      var d = r[c],
        g = d.event
      d = d.listeners
      t: {
        var v = void 0
        if (o)
          for (var b = d.length - 1; 0 <= b; b--) {
            var M = d[b],
              O = M.instance,
              B = M.currentTarget
            if (((M = M.listener), O !== v && g.isPropagationStopped())) break t
            ;(zd(g, M, B), (v = O))
          }
        else
          for (b = 0; b < d.length; b++) {
            if (
              ((M = d[b]),
              (O = M.instance),
              (B = M.currentTarget),
              (M = M.listener),
              O !== v && g.isPropagationStopped())
            )
              break t
            ;(zd(g, M, B), (v = O))
          }
      }
    }
    if (ao) throw ((r = Yl), (ao = !1), (Yl = null), r)
  }
  function Dt(r, o) {
    var c = o[bu]
    c === void 0 && (c = o[bu] = new Set())
    var d = r + '__bubble'
    c.has(d) || (Nd(o, r, 2, !1), c.add(d))
  }
  function gu(r, o, c) {
    var d = 0
    ;(o && (d |= 4), Nd(c, r, d, o))
  }
  var Po = '_reactListening' + Math.random().toString(36).slice(2)
  function Jr(r) {
    if (!r[Po]) {
      ;((r[Po] = !0),
        i.forEach(function (c) {
          c !== 'selectionchange' && (Cx.has(c) || gu(c, !1, r), gu(c, !0, r))
        }))
      var o = r.nodeType === 9 ? r : r.ownerDocument
      o === null || o[Po] || ((o[Po] = !0), gu('selectionchange', !1, o))
    }
  }
  function Nd(r, o, c, d) {
    switch (ud(o)) {
      case 1:
        var g = N2
        break
      case 4:
        g = j2
        break
      default:
        g = Jl
    }
    ;((c = g.bind(null, o, c, r)),
      (g = void 0),
      !$l || (o !== 'touchstart' && o !== 'touchmove' && o !== 'wheel') || (g = !0),
      d
        ? g !== void 0
          ? r.addEventListener(o, c, { capture: !0, passive: g })
          : r.addEventListener(o, c, !0)
        : g !== void 0
          ? r.addEventListener(o, c, { passive: g })
          : r.addEventListener(o, c, !1))
  }
  function yu(r, o, c, d, g) {
    var v = d
    if ((o & 1) === 0 && (o & 2) === 0 && d !== null)
      t: for (;;) {
        if (d === null) return
        var b = d.tag
        if (b === 3 || b === 4) {
          var M = d.stateNode.containerInfo
          if (M === g || (M.nodeType === 8 && M.parentNode === g)) break
          if (b === 4)
            for (b = d.return; b !== null; ) {
              var O = b.tag
              if (
                (O === 3 || O === 4) &&
                ((O = b.stateNode.containerInfo),
                O === g || (O.nodeType === 8 && O.parentNode === g))
              )
                return
              b = b.return
            }
          for (; M !== null; ) {
            if (((b = gi(M)), b === null)) return
            if (((O = b.tag), O === 5 || O === 6)) {
              d = v = b
              continue t
            }
            M = M.parentNode
          }
        }
        d = d.return
      }
    $h(function () {
      var B = v,
        X = Hl(c),
        G = []
      t: {
        var Y = Id.get(r)
        if (Y !== void 0) {
          var et = nu,
            it = r
          switch (r) {
            case 'keypress':
              if (xo(c) === 0) break t
            case 'keydown':
            case 'keyup':
              et = nx
              break
            case 'focusin':
              ;((it = 'focus'), (et = su))
              break
            case 'focusout':
              ;((it = 'blur'), (et = su))
              break
            case 'beforeblur':
            case 'afterblur':
              et = su
              break
            case 'click':
              if (c.button === 2) break t
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              et = hd
              break
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              et = U2
              break
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              et = sx
              break
            case Dd:
            case Ad:
            case Rd:
              et = X2
              break
            case Fd:
              et = ax
              break
            case 'scroll':
              et = H2
              break
            case 'wheel':
              et = ux
              break
            case 'copy':
            case 'cut':
            case 'paste':
              et = G2
              break
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              et = pd
          }
          var ot = (o & 4) !== 0,
            Yt = !ot && r === 'scroll',
            I = ot ? (Y !== null ? Y + 'Capture' : null) : Y
          ot = []
          for (var D = B, z; D !== null; ) {
            z = D
            var Q = z.stateNode
            if (
              (z.tag === 5 &&
                Q !== null &&
                ((z = Q), I !== null && ((Q = Fr(D, I)), Q != null && ot.push(ts(D, Q, z)))),
              Yt)
            )
              break
            D = D.return
          }
          0 < ot.length && ((Y = new et(Y, it, null, c, X)), G.push({ event: Y, listeners: ot }))
        }
      }
      if ((o & 7) === 0) {
        t: {
          if (
            ((Y = r === 'mouseover' || r === 'pointerover'),
            (et = r === 'mouseout' || r === 'pointerout'),
            Y && c !== jl && (it = c.relatedTarget || c.fromElement) && (gi(it) || it[cn]))
          )
            break t
          if (
            (et || Y) &&
            ((Y =
              X.window === X
                ? X
                : (Y = X.ownerDocument)
                  ? Y.defaultView || Y.parentWindow
                  : window),
            et
              ? ((it = c.relatedTarget || c.toElement),
                (et = B),
                (it = it ? gi(it) : null),
                it !== null &&
                  ((Yt = mi(it)), it !== Yt || (it.tag !== 5 && it.tag !== 6)) &&
                  (it = null))
              : ((et = null), (it = B)),
            et !== it)
          ) {
            if (
              ((ot = hd),
              (Q = 'onMouseLeave'),
              (I = 'onMouseEnter'),
              (D = 'mouse'),
              (r === 'pointerout' || r === 'pointerover') &&
                ((ot = pd), (Q = 'onPointerLeave'), (I = 'onPointerEnter'), (D = 'pointer')),
              (Yt = et == null ? Y : nr(et)),
              (z = it == null ? Y : nr(it)),
              (Y = new ot(Q, D + 'leave', et, c, X)),
              (Y.target = Yt),
              (Y.relatedTarget = z),
              (Q = null),
              gi(X) === B &&
                ((ot = new ot(I, D + 'enter', it, c, X)),
                (ot.target = z),
                (ot.relatedTarget = Yt),
                (Q = ot)),
              (Yt = Q),
              et && it)
            )
              e: {
                for (ot = et, I = it, D = 0, z = ot; z; z = tr(z)) D++
                for (z = 0, Q = I; Q; Q = tr(Q)) z++
                for (; 0 < D - z; ) ((ot = tr(ot)), D--)
                for (; 0 < z - D; ) ((I = tr(I)), z--)
                for (; D--; ) {
                  if (ot === I || (I !== null && ot === I.alternate)) break e
                  ;((ot = tr(ot)), (I = tr(I)))
                }
                ot = null
              }
            else ot = null
            ;(et !== null && jd(G, Y, et, ot, !1),
              it !== null && Yt !== null && jd(G, Yt, it, ot, !0))
          }
        }
        t: {
          if (
            ((Y = B ? nr(B) : window),
            (et = Y.nodeName && Y.nodeName.toLowerCase()),
            et === 'select' || (et === 'input' && Y.type === 'file'))
          )
            var at = gx
          else if (_d(Y))
            if (Sd) at = _x
            else {
              at = vx
              var ft = yx
            }
          else
            (et = Y.nodeName) &&
              et.toLowerCase() === 'input' &&
              (Y.type === 'checkbox' || Y.type === 'radio') &&
              (at = xx)
          if (at && (at = at(r, B))) {
            wd(G, at, c, X)
            break t
          }
          ;(ft && ft(r, Y, B),
            r === 'focusout' &&
              (ft = Y._wrapperState) &&
              ft.controlled &&
              Y.type === 'number' &&
              Il(Y, 'number', Y.value))
        }
        switch (((ft = B ? nr(B) : window), r)) {
          case 'focusin':
            ;(_d(ft) || ft.contentEditable === 'true') && ((Zi = ft), (fu = B), (Qr = null))
            break
          case 'focusout':
            Qr = fu = Zi = null
            break
          case 'mousedown':
            hu = !0
            break
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ;((hu = !1), Od(G, c, X))
            break
          case 'selectionchange':
            if (bx) break
          case 'keydown':
          case 'keyup':
            Od(G, c, X)
        }
        var ht
        if (au)
          t: {
            switch (r) {
              case 'compositionstart':
                var mt = 'onCompositionStart'
                break t
              case 'compositionend':
                mt = 'onCompositionEnd'
                break t
              case 'compositionupdate':
                mt = 'onCompositionUpdate'
                break t
            }
            mt = void 0
          }
        else
          Qi
            ? vd(r, c) && (mt = 'onCompositionEnd')
            : r === 'keydown' && c.keyCode === 229 && (mt = 'onCompositionStart')
        ;(mt &&
          (md &&
            c.locale !== 'ko' &&
            (Qi || mt !== 'onCompositionStart'
              ? mt === 'onCompositionEnd' && Qi && (ht = cd())
              : ((In = X), (eu = 'value' in In ? In.value : In.textContent), (Qi = !0))),
          (ft = Co(B, mt)),
          0 < ft.length &&
            ((mt = new dd(mt, r, null, c, X)),
            G.push({ event: mt, listeners: ft }),
            ht ? (mt.data = ht) : ((ht = xd(c)), ht !== null && (mt.data = ht)))),
          (ht = fx ? hx(r, c) : dx(r, c)) &&
            ((B = Co(B, 'onBeforeInput')),
            0 < B.length &&
              ((X = new dd('onBeforeInput', 'beforeinput', null, c, X)),
              G.push({ event: X, listeners: B }),
              (X.data = ht))))
      }
      Bd(G, o)
    })
  }
  function ts(r, o, c) {
    return { instance: r, listener: o, currentTarget: c }
  }
  function Co(r, o) {
    for (var c = o + 'Capture', d = []; r !== null; ) {
      var g = r,
        v = g.stateNode
      ;(g.tag === 5 &&
        v !== null &&
        ((g = v),
        (v = Fr(r, c)),
        v != null && d.unshift(ts(r, v, g)),
        (v = Fr(r, o)),
        v != null && d.push(ts(r, v, g))),
        (r = r.return))
    }
    return d
  }
  function tr(r) {
    if (r === null) return null
    do r = r.return
    while (r && r.tag !== 5)
    return r || null
  }
  function jd(r, o, c, d, g) {
    for (var v = o._reactName, b = []; c !== null && c !== d; ) {
      var M = c,
        O = M.alternate,
        B = M.stateNode
      if (O !== null && O === d) break
      ;(M.tag === 5 &&
        B !== null &&
        ((M = B),
        g
          ? ((O = Fr(c, v)), O != null && b.unshift(ts(c, O, M)))
          : g || ((O = Fr(c, v)), O != null && b.push(ts(c, O, M)))),
        (c = c.return))
    }
    b.length !== 0 && r.push({ event: o, listeners: b })
  }
  var Mx = /\r\n?/g,
    Tx = /\u0000|\uFFFD/g
  function Hd(r) {
    return (typeof r == 'string' ? r : '' + r)
      .replace(
        Mx,
        `
`
      )
      .replace(Tx, '')
  }
  function Mo(r, o, c) {
    if (((o = Hd(o)), Hd(r) !== o && c)) throw Error(n(425))
  }
  function To() {}
  var vu = null,
    xu = null
  function _u(r, o) {
    return (
      r === 'textarea' ||
      r === 'noscript' ||
      typeof o.children == 'string' ||
      typeof o.children == 'number' ||
      (typeof o.dangerouslySetInnerHTML == 'object' &&
        o.dangerouslySetInnerHTML !== null &&
        o.dangerouslySetInnerHTML.__html != null)
    )
  }
  var wu = typeof setTimeout == 'function' ? setTimeout : void 0,
    Ex = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Wd = typeof Promise == 'function' ? Promise : void 0,
    Ox =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Wd < 'u'
          ? function (r) {
              return Wd.resolve(null).then(r).catch(Lx)
            }
          : wu
  function Lx(r) {
    setTimeout(function () {
      throw r
    })
  }
  function Su(r, o) {
    var c = o,
      d = 0
    do {
      var g = c.nextSibling
      if ((r.removeChild(c), g && g.nodeType === 8))
        if (((c = g.data), c === '/$')) {
          if (d === 0) {
            ;(r.removeChild(g), Ur(o))
            return
          }
          d--
        } else (c !== '$' && c !== '$?' && c !== '$!') || d++
      c = g
    } while (c)
    Ur(o)
  }
  function zn(r) {
    for (; r != null; r = r.nextSibling) {
      var o = r.nodeType
      if (o === 1 || o === 3) break
      if (o === 8) {
        if (((o = r.data), o === '$' || o === '$!' || o === '$?')) break
        if (o === '/$') return null
      }
    }
    return r
  }
  function Ud(r) {
    r = r.previousSibling
    for (var o = 0; r; ) {
      if (r.nodeType === 8) {
        var c = r.data
        if (c === '$' || c === '$!' || c === '$?') {
          if (o === 0) return r
          o--
        } else c === '/$' && o++
      }
      r = r.previousSibling
    }
    return null
  }
  var er = Math.random().toString(36).slice(2),
    tn = '__reactFiber$' + er,
    es = '__reactProps$' + er,
    cn = '__reactContainer$' + er,
    bu = '__reactEvents$' + er,
    Dx = '__reactListeners$' + er,
    Ax = '__reactHandles$' + er
  function gi(r) {
    var o = r[tn]
    if (o) return o
    for (var c = r.parentNode; c; ) {
      if ((o = c[cn] || c[tn])) {
        if (((c = o.alternate), o.child !== null || (c !== null && c.child !== null)))
          for (r = Ud(r); r !== null; ) {
            if ((c = r[tn])) return c
            r = Ud(r)
          }
        return o
      }
      ;((r = c), (c = r.parentNode))
    }
    return null
  }
  function ns(r) {
    return (
      (r = r[tn] || r[cn]),
      !r || (r.tag !== 5 && r.tag !== 6 && r.tag !== 13 && r.tag !== 3) ? null : r
    )
  }
  function nr(r) {
    if (r.tag === 5 || r.tag === 6) return r.stateNode
    throw Error(n(33))
  }
  function Eo(r) {
    return r[es] || null
  }
  var ku = [],
    ir = -1
  function Bn(r) {
    return { current: r }
  }
  function At(r) {
    0 > ir || ((r.current = ku[ir]), (ku[ir] = null), ir--)
  }
  function Ot(r, o) {
    ;(ir++, (ku[ir] = r.current), (r.current = o))
  }
  var Nn = {},
    le = Bn(Nn),
    we = Bn(!1),
    yi = Nn
  function rr(r, o) {
    var c = r.type.contextTypes
    if (!c) return Nn
    var d = r.stateNode
    if (d && d.__reactInternalMemoizedUnmaskedChildContext === o)
      return d.__reactInternalMemoizedMaskedChildContext
    var g = {},
      v
    for (v in c) g[v] = o[v]
    return (
      d &&
        ((r = r.stateNode),
        (r.__reactInternalMemoizedUnmaskedChildContext = o),
        (r.__reactInternalMemoizedMaskedChildContext = g)),
      g
    )
  }
  function Se(r) {
    return ((r = r.childContextTypes), r != null)
  }
  function Oo() {
    ;(At(we), At(le))
  }
  function $d(r, o, c) {
    if (le.current !== Nn) throw Error(n(168))
    ;(Ot(le, o), Ot(we, c))
  }
  function Yd(r, o, c) {
    var d = r.stateNode
    if (((o = o.childContextTypes), typeof d.getChildContext != 'function')) return c
    d = d.getChildContext()
    for (var g in d) if (!(g in o)) throw Error(n(108, xt(r) || 'Unknown', g))
    return Z({}, c, d)
  }
  function Lo(r) {
    return (
      (r = ((r = r.stateNode) && r.__reactInternalMemoizedMergedChildContext) || Nn),
      (yi = le.current),
      Ot(le, r),
      Ot(we, we.current),
      !0
    )
  }
  function Xd(r, o, c) {
    var d = r.stateNode
    if (!d) throw Error(n(169))
    ;(c
      ? ((r = Yd(r, o, yi)),
        (d.__reactInternalMemoizedMergedChildContext = r),
        At(we),
        At(le),
        Ot(le, r))
      : At(we),
      Ot(we, c))
  }
  var fn = null,
    Do = !1,
    Pu = !1
  function Kd(r) {
    fn === null ? (fn = [r]) : fn.push(r)
  }
  function Rx(r) {
    ;((Do = !0), Kd(r))
  }
  function jn() {
    if (!Pu && fn !== null) {
      Pu = !0
      var r = 0,
        o = Ct
      try {
        var c = fn
        for (Ct = 1; r < c.length; r++) {
          var d = c[r]
          do d = d(!0)
          while (d !== null)
        }
        ;((fn = null), (Do = !1))
      } catch (g) {
        throw (fn !== null && (fn = fn.slice(r + 1)), qh(Xl, jn), g)
      } finally {
        ;((Ct = o), (Pu = !1))
      }
    }
    return null
  }
  var sr = [],
    or = 0,
    Ao = null,
    Ro = 0,
    Ie = [],
    Ve = 0,
    vi = null,
    hn = 1,
    dn = ''
  function xi(r, o) {
    ;((sr[or++] = Ro), (sr[or++] = Ao), (Ao = r), (Ro = o))
  }
  function Gd(r, o, c) {
    ;((Ie[Ve++] = hn), (Ie[Ve++] = dn), (Ie[Ve++] = vi), (vi = r))
    var d = hn
    r = dn
    var g = 32 - $e(d) - 1
    ;((d &= ~(1 << g)), (c += 1))
    var v = 32 - $e(o) + g
    if (30 < v) {
      var b = g - (g % 5)
      ;((v = (d & ((1 << b) - 1)).toString(32)),
        (d >>= b),
        (g -= b),
        (hn = (1 << (32 - $e(o) + g)) | (c << g) | d),
        (dn = v + r))
    } else ((hn = (1 << v) | (c << g) | d), (dn = r))
  }
  function Cu(r) {
    r.return !== null && (xi(r, 1), Gd(r, 1, 0))
  }
  function Mu(r) {
    for (; r === Ao; ) ((Ao = sr[--or]), (sr[or] = null), (Ro = sr[--or]), (sr[or] = null))
    for (; r === vi; )
      ((vi = Ie[--Ve]),
        (Ie[Ve] = null),
        (dn = Ie[--Ve]),
        (Ie[Ve] = null),
        (hn = Ie[--Ve]),
        (Ie[Ve] = null))
  }
  var Le = null,
    De = null,
    It = !1,
    Xe = null
  function qd(r, o) {
    var c = je(5, null, null, 0)
    ;((c.elementType = 'DELETED'),
      (c.stateNode = o),
      (c.return = r),
      (o = r.deletions),
      o === null ? ((r.deletions = [c]), (r.flags |= 16)) : o.push(c))
  }
  function Qd(r, o) {
    switch (r.tag) {
      case 5:
        var c = r.type
        return (
          (o = o.nodeType !== 1 || c.toLowerCase() !== o.nodeName.toLowerCase() ? null : o),
          o !== null ? ((r.stateNode = o), (Le = r), (De = zn(o.firstChild)), !0) : !1
        )
      case 6:
        return (
          (o = r.pendingProps === '' || o.nodeType !== 3 ? null : o),
          o !== null ? ((r.stateNode = o), (Le = r), (De = null), !0) : !1
        )
      case 13:
        return (
          (o = o.nodeType !== 8 ? null : o),
          o !== null
            ? ((c = vi !== null ? { id: hn, overflow: dn } : null),
              (r.memoizedState = { dehydrated: o, treeContext: c, retryLane: 1073741824 }),
              (c = je(18, null, null, 0)),
              (c.stateNode = o),
              (c.return = r),
              (r.child = c),
              (Le = r),
              (De = null),
              !0)
            : !1
        )
      default:
        return !1
    }
  }
  function Tu(r) {
    return (r.mode & 1) !== 0 && (r.flags & 128) === 0
  }
  function Eu(r) {
    if (It) {
      var o = De
      if (o) {
        var c = o
        if (!Qd(r, o)) {
          if (Tu(r)) throw Error(n(418))
          o = zn(c.nextSibling)
          var d = Le
          o && Qd(r, o) ? qd(d, c) : ((r.flags = (r.flags & -4097) | 2), (It = !1), (Le = r))
        }
      } else {
        if (Tu(r)) throw Error(n(418))
        ;((r.flags = (r.flags & -4097) | 2), (It = !1), (Le = r))
      }
    }
  }
  function Zd(r) {
    for (r = r.return; r !== null && r.tag !== 5 && r.tag !== 3 && r.tag !== 13; ) r = r.return
    Le = r
  }
  function Fo(r) {
    if (r !== Le) return !1
    if (!It) return (Zd(r), (It = !0), !1)
    var o
    if (
      ((o = r.tag !== 3) &&
        !(o = r.tag !== 5) &&
        ((o = r.type), (o = o !== 'head' && o !== 'body' && !_u(r.type, r.memoizedProps))),
      o && (o = De))
    ) {
      if (Tu(r)) throw (Jd(), Error(n(418)))
      for (; o; ) (qd(r, o), (o = zn(o.nextSibling)))
    }
    if ((Zd(r), r.tag === 13)) {
      if (((r = r.memoizedState), (r = r !== null ? r.dehydrated : null), !r)) throw Error(n(317))
      t: {
        for (r = r.nextSibling, o = 0; r; ) {
          if (r.nodeType === 8) {
            var c = r.data
            if (c === '/$') {
              if (o === 0) {
                De = zn(r.nextSibling)
                break t
              }
              o--
            } else (c !== '$' && c !== '$!' && c !== '$?') || o++
          }
          r = r.nextSibling
        }
        De = null
      }
    } else De = Le ? zn(r.stateNode.nextSibling) : null
    return !0
  }
  function Jd() {
    for (var r = De; r; ) r = zn(r.nextSibling)
  }
  function ar() {
    ;((De = Le = null), (It = !1))
  }
  function Ou(r) {
    Xe === null ? (Xe = [r]) : Xe.push(r)
  }
  var Fx = T.ReactCurrentBatchConfig
  function is(r, o, c) {
    if (((r = c.ref), r !== null && typeof r != 'function' && typeof r != 'object')) {
      if (c._owner) {
        if (((c = c._owner), c)) {
          if (c.tag !== 1) throw Error(n(309))
          var d = c.stateNode
        }
        if (!d) throw Error(n(147, r))
        var g = d,
          v = '' + r
        return o !== null && o.ref !== null && typeof o.ref == 'function' && o.ref._stringRef === v
          ? o.ref
          : ((o = function (b) {
              var M = g.refs
              b === null ? delete M[v] : (M[v] = b)
            }),
            (o._stringRef = v),
            o)
      }
      if (typeof r != 'string') throw Error(n(284))
      if (!c._owner) throw Error(n(290, r))
    }
    return r
  }
  function Io(r, o) {
    throw (
      (r = Object.prototype.toString.call(o)),
      Error(
        n(31, r === '[object Object]' ? 'object with keys {' + Object.keys(o).join(', ') + '}' : r)
      )
    )
  }
  function tp(r) {
    var o = r._init
    return o(r._payload)
  }
  function ep(r) {
    function o(I, D) {
      if (r) {
        var z = I.deletions
        z === null ? ((I.deletions = [D]), (I.flags |= 16)) : z.push(D)
      }
    }
    function c(I, D) {
      if (!r) return null
      for (; D !== null; ) (o(I, D), (D = D.sibling))
      return null
    }
    function d(I, D) {
      for (I = new Map(); D !== null; )
        (D.key !== null ? I.set(D.key, D) : I.set(D.index, D), (D = D.sibling))
      return I
    }
    function g(I, D) {
      return ((I = Gn(I, D)), (I.index = 0), (I.sibling = null), I)
    }
    function v(I, D, z) {
      return (
        (I.index = z),
        r
          ? ((z = I.alternate),
            z !== null ? ((z = z.index), z < D ? ((I.flags |= 2), D) : z) : ((I.flags |= 2), D))
          : ((I.flags |= 1048576), D)
      )
    }
    function b(I) {
      return (r && I.alternate === null && (I.flags |= 2), I)
    }
    function M(I, D, z, Q) {
      return D === null || D.tag !== 6
        ? ((D = wc(z, I.mode, Q)), (D.return = I), D)
        : ((D = g(D, z)), (D.return = I), D)
    }
    function O(I, D, z, Q) {
      var at = z.type
      return at === A
        ? X(I, D, z.props.children, Q, z.key)
        : D !== null &&
            (D.elementType === at ||
              (typeof at == 'object' && at !== null && at.$$typeof === tt && tp(at) === D.type))
          ? ((Q = g(D, z.props)), (Q.ref = is(I, D, z)), (Q.return = I), Q)
          : ((Q = oa(z.type, z.key, z.props, null, I.mode, Q)),
            (Q.ref = is(I, D, z)),
            (Q.return = I),
            Q)
    }
    function B(I, D, z, Q) {
      return D === null ||
        D.tag !== 4 ||
        D.stateNode.containerInfo !== z.containerInfo ||
        D.stateNode.implementation !== z.implementation
        ? ((D = Sc(z, I.mode, Q)), (D.return = I), D)
        : ((D = g(D, z.children || [])), (D.return = I), D)
    }
    function X(I, D, z, Q, at) {
      return D === null || D.tag !== 7
        ? ((D = Mi(z, I.mode, Q, at)), (D.return = I), D)
        : ((D = g(D, z)), (D.return = I), D)
    }
    function G(I, D, z) {
      if ((typeof D == 'string' && D !== '') || typeof D == 'number')
        return ((D = wc('' + D, I.mode, z)), (D.return = I), D)
      if (typeof D == 'object' && D !== null) {
        switch (D.$$typeof) {
          case E:
            return (
              (z = oa(D.type, D.key, D.props, null, I.mode, z)),
              (z.ref = is(I, null, D)),
              (z.return = I),
              z
            )
          case R:
            return ((D = Sc(D, I.mode, z)), (D.return = I), D)
          case tt:
            var Q = D._init
            return G(I, Q(D._payload), z)
        }
        if (Dr(D) || J(D)) return ((D = Mi(D, I.mode, z, null)), (D.return = I), D)
        Io(I, D)
      }
      return null
    }
    function Y(I, D, z, Q) {
      var at = D !== null ? D.key : null
      if ((typeof z == 'string' && z !== '') || typeof z == 'number')
        return at !== null ? null : M(I, D, '' + z, Q)
      if (typeof z == 'object' && z !== null) {
        switch (z.$$typeof) {
          case E:
            return z.key === at ? O(I, D, z, Q) : null
          case R:
            return z.key === at ? B(I, D, z, Q) : null
          case tt:
            return ((at = z._init), Y(I, D, at(z._payload), Q))
        }
        if (Dr(z) || J(z)) return at !== null ? null : X(I, D, z, Q, null)
        Io(I, z)
      }
      return null
    }
    function et(I, D, z, Q, at) {
      if ((typeof Q == 'string' && Q !== '') || typeof Q == 'number')
        return ((I = I.get(z) || null), M(D, I, '' + Q, at))
      if (typeof Q == 'object' && Q !== null) {
        switch (Q.$$typeof) {
          case E:
            return ((I = I.get(Q.key === null ? z : Q.key) || null), O(D, I, Q, at))
          case R:
            return ((I = I.get(Q.key === null ? z : Q.key) || null), B(D, I, Q, at))
          case tt:
            var ft = Q._init
            return et(I, D, z, ft(Q._payload), at)
        }
        if (Dr(Q) || J(Q)) return ((I = I.get(z) || null), X(D, I, Q, at, null))
        Io(D, Q)
      }
      return null
    }
    function it(I, D, z, Q) {
      for (
        var at = null, ft = null, ht = D, mt = (D = 0), re = null;
        ht !== null && mt < z.length;
        mt++
      ) {
        ht.index > mt ? ((re = ht), (ht = null)) : (re = ht.sibling)
        var kt = Y(I, ht, z[mt], Q)
        if (kt === null) {
          ht === null && (ht = re)
          break
        }
        ;(r && ht && kt.alternate === null && o(I, ht),
          (D = v(kt, D, mt)),
          ft === null ? (at = kt) : (ft.sibling = kt),
          (ft = kt),
          (ht = re))
      }
      if (mt === z.length) return (c(I, ht), It && xi(I, mt), at)
      if (ht === null) {
        for (; mt < z.length; mt++)
          ((ht = G(I, z[mt], Q)),
            ht !== null &&
              ((D = v(ht, D, mt)), ft === null ? (at = ht) : (ft.sibling = ht), (ft = ht)))
        return (It && xi(I, mt), at)
      }
      for (ht = d(I, ht); mt < z.length; mt++)
        ((re = et(ht, I, mt, z[mt], Q)),
          re !== null &&
            (r && re.alternate !== null && ht.delete(re.key === null ? mt : re.key),
            (D = v(re, D, mt)),
            ft === null ? (at = re) : (ft.sibling = re),
            (ft = re)))
      return (
        r &&
          ht.forEach(function (qn) {
            return o(I, qn)
          }),
        It && xi(I, mt),
        at
      )
    }
    function ot(I, D, z, Q) {
      var at = J(z)
      if (typeof at != 'function') throw Error(n(150))
      if (((z = at.call(z)), z == null)) throw Error(n(151))
      for (
        var ft = (at = null), ht = D, mt = (D = 0), re = null, kt = z.next();
        ht !== null && !kt.done;
        mt++, kt = z.next()
      ) {
        ht.index > mt ? ((re = ht), (ht = null)) : (re = ht.sibling)
        var qn = Y(I, ht, kt.value, Q)
        if (qn === null) {
          ht === null && (ht = re)
          break
        }
        ;(r && ht && qn.alternate === null && o(I, ht),
          (D = v(qn, D, mt)),
          ft === null ? (at = qn) : (ft.sibling = qn),
          (ft = qn),
          (ht = re))
      }
      if (kt.done) return (c(I, ht), It && xi(I, mt), at)
      if (ht === null) {
        for (; !kt.done; mt++, kt = z.next())
          ((kt = G(I, kt.value, Q)),
            kt !== null &&
              ((D = v(kt, D, mt)), ft === null ? (at = kt) : (ft.sibling = kt), (ft = kt)))
        return (It && xi(I, mt), at)
      }
      for (ht = d(I, ht); !kt.done; mt++, kt = z.next())
        ((kt = et(ht, I, mt, kt.value, Q)),
          kt !== null &&
            (r && kt.alternate !== null && ht.delete(kt.key === null ? mt : kt.key),
            (D = v(kt, D, mt)),
            ft === null ? (at = kt) : (ft.sibling = kt),
            (ft = kt)))
      return (
        r &&
          ht.forEach(function (p_) {
            return o(I, p_)
          }),
        It && xi(I, mt),
        at
      )
    }
    function Yt(I, D, z, Q) {
      if (
        (typeof z == 'object' &&
          z !== null &&
          z.type === A &&
          z.key === null &&
          (z = z.props.children),
        typeof z == 'object' && z !== null)
      ) {
        switch (z.$$typeof) {
          case E:
            t: {
              for (var at = z.key, ft = D; ft !== null; ) {
                if (ft.key === at) {
                  if (((at = z.type), at === A)) {
                    if (ft.tag === 7) {
                      ;(c(I, ft.sibling), (D = g(ft, z.props.children)), (D.return = I), (I = D))
                      break t
                    }
                  } else if (
                    ft.elementType === at ||
                    (typeof at == 'object' &&
                      at !== null &&
                      at.$$typeof === tt &&
                      tp(at) === ft.type)
                  ) {
                    ;(c(I, ft.sibling),
                      (D = g(ft, z.props)),
                      (D.ref = is(I, ft, z)),
                      (D.return = I),
                      (I = D))
                    break t
                  }
                  c(I, ft)
                  break
                } else o(I, ft)
                ft = ft.sibling
              }
              z.type === A
                ? ((D = Mi(z.props.children, I.mode, Q, z.key)), (D.return = I), (I = D))
                : ((Q = oa(z.type, z.key, z.props, null, I.mode, Q)),
                  (Q.ref = is(I, D, z)),
                  (Q.return = I),
                  (I = Q))
            }
            return b(I)
          case R:
            t: {
              for (ft = z.key; D !== null; ) {
                if (D.key === ft)
                  if (
                    D.tag === 4 &&
                    D.stateNode.containerInfo === z.containerInfo &&
                    D.stateNode.implementation === z.implementation
                  ) {
                    ;(c(I, D.sibling), (D = g(D, z.children || [])), (D.return = I), (I = D))
                    break t
                  } else {
                    c(I, D)
                    break
                  }
                else o(I, D)
                D = D.sibling
              }
              ;((D = Sc(z, I.mode, Q)), (D.return = I), (I = D))
            }
            return b(I)
          case tt:
            return ((ft = z._init), Yt(I, D, ft(z._payload), Q))
        }
        if (Dr(z)) return it(I, D, z, Q)
        if (J(z)) return ot(I, D, z, Q)
        Io(I, z)
      }
      return (typeof z == 'string' && z !== '') || typeof z == 'number'
        ? ((z = '' + z),
          D !== null && D.tag === 6
            ? (c(I, D.sibling), (D = g(D, z)), (D.return = I), (I = D))
            : (c(I, D), (D = wc(z, I.mode, Q)), (D.return = I), (I = D)),
          b(I))
        : c(I, D)
    }
    return Yt
  }
  var lr = ep(!0),
    np = ep(!1),
    Vo = Bn(null),
    zo = null,
    ur = null,
    Lu = null
  function Du() {
    Lu = ur = zo = null
  }
  function Au(r) {
    var o = Vo.current
    ;(At(Vo), (r._currentValue = o))
  }
  function Ru(r, o, c) {
    for (; r !== null; ) {
      var d = r.alternate
      if (
        ((r.childLanes & o) !== o
          ? ((r.childLanes |= o), d !== null && (d.childLanes |= o))
          : d !== null && (d.childLanes & o) !== o && (d.childLanes |= o),
        r === c)
      )
        break
      r = r.return
    }
  }
  function cr(r, o) {
    ;((zo = r),
      (Lu = ur = null),
      (r = r.dependencies),
      r !== null &&
        r.firstContext !== null &&
        ((r.lanes & o) !== 0 && (be = !0), (r.firstContext = null)))
  }
  function ze(r) {
    var o = r._currentValue
    if (Lu !== r)
      if (((r = { context: r, memoizedValue: o, next: null }), ur === null)) {
        if (zo === null) throw Error(n(308))
        ;((ur = r), (zo.dependencies = { lanes: 0, firstContext: r }))
      } else ur = ur.next = r
    return o
  }
  var _i = null
  function Fu(r) {
    _i === null ? (_i = [r]) : _i.push(r)
  }
  function ip(r, o, c, d) {
    var g = o.interleaved
    return (
      g === null ? ((c.next = c), Fu(o)) : ((c.next = g.next), (g.next = c)),
      (o.interleaved = c),
      pn(r, d)
    )
  }
  function pn(r, o) {
    r.lanes |= o
    var c = r.alternate
    for (c !== null && (c.lanes |= o), c = r, r = r.return; r !== null; )
      ((r.childLanes |= o),
        (c = r.alternate),
        c !== null && (c.childLanes |= o),
        (c = r),
        (r = r.return))
    return c.tag === 3 ? c.stateNode : null
  }
  var Hn = !1
  function Iu(r) {
    r.updateQueue = {
      baseState: r.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    }
  }
  function rp(r, o) {
    ;((r = r.updateQueue),
      o.updateQueue === r &&
        (o.updateQueue = {
          baseState: r.baseState,
          firstBaseUpdate: r.firstBaseUpdate,
          lastBaseUpdate: r.lastBaseUpdate,
          shared: r.shared,
          effects: r.effects,
        }))
  }
  function mn(r, o) {
    return { eventTime: r, lane: o, tag: 0, payload: null, callback: null, next: null }
  }
  function Wn(r, o, c) {
    var d = r.updateQueue
    if (d === null) return null
    if (((d = d.shared), (bt & 2) !== 0)) {
      var g = d.pending
      return (
        g === null ? (o.next = o) : ((o.next = g.next), (g.next = o)),
        (d.pending = o),
        pn(r, c)
      )
    }
    return (
      (g = d.interleaved),
      g === null ? ((o.next = o), Fu(d)) : ((o.next = g.next), (g.next = o)),
      (d.interleaved = o),
      pn(r, c)
    )
  }
  function Bo(r, o, c) {
    if (((o = o.updateQueue), o !== null && ((o = o.shared), (c & 4194240) !== 0))) {
      var d = o.lanes
      ;((d &= r.pendingLanes), (c |= d), (o.lanes = c), ql(r, c))
    }
  }
  function sp(r, o) {
    var c = r.updateQueue,
      d = r.alternate
    if (d !== null && ((d = d.updateQueue), c === d)) {
      var g = null,
        v = null
      if (((c = c.firstBaseUpdate), c !== null)) {
        do {
          var b = {
            eventTime: c.eventTime,
            lane: c.lane,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null,
          }
          ;(v === null ? (g = v = b) : (v = v.next = b), (c = c.next))
        } while (c !== null)
        v === null ? (g = v = o) : (v = v.next = o)
      } else g = v = o
      ;((c = {
        baseState: d.baseState,
        firstBaseUpdate: g,
        lastBaseUpdate: v,
        shared: d.shared,
        effects: d.effects,
      }),
        (r.updateQueue = c))
      return
    }
    ;((r = c.lastBaseUpdate),
      r === null ? (c.firstBaseUpdate = o) : (r.next = o),
      (c.lastBaseUpdate = o))
  }
  function No(r, o, c, d) {
    var g = r.updateQueue
    Hn = !1
    var v = g.firstBaseUpdate,
      b = g.lastBaseUpdate,
      M = g.shared.pending
    if (M !== null) {
      g.shared.pending = null
      var O = M,
        B = O.next
      ;((O.next = null), b === null ? (v = B) : (b.next = B), (b = O))
      var X = r.alternate
      X !== null &&
        ((X = X.updateQueue),
        (M = X.lastBaseUpdate),
        M !== b && (M === null ? (X.firstBaseUpdate = B) : (M.next = B), (X.lastBaseUpdate = O)))
    }
    if (v !== null) {
      var G = g.baseState
      ;((b = 0), (X = B = O = null), (M = v))
      do {
        var Y = M.lane,
          et = M.eventTime
        if ((d & Y) === Y) {
          X !== null &&
            (X = X.next =
              {
                eventTime: et,
                lane: 0,
                tag: M.tag,
                payload: M.payload,
                callback: M.callback,
                next: null,
              })
          t: {
            var it = r,
              ot = M
            switch (((Y = o), (et = c), ot.tag)) {
              case 1:
                if (((it = ot.payload), typeof it == 'function')) {
                  G = it.call(et, G, Y)
                  break t
                }
                G = it
                break t
              case 3:
                it.flags = (it.flags & -65537) | 128
              case 0:
                if (
                  ((it = ot.payload),
                  (Y = typeof it == 'function' ? it.call(et, G, Y) : it),
                  Y == null)
                )
                  break t
                G = Z({}, G, Y)
                break t
              case 2:
                Hn = !0
            }
          }
          M.callback !== null &&
            M.lane !== 0 &&
            ((r.flags |= 64), (Y = g.effects), Y === null ? (g.effects = [M]) : Y.push(M))
        } else
          ((et = {
            eventTime: et,
            lane: Y,
            tag: M.tag,
            payload: M.payload,
            callback: M.callback,
            next: null,
          }),
            X === null ? ((B = X = et), (O = G)) : (X = X.next = et),
            (b |= Y))
        if (((M = M.next), M === null)) {
          if (((M = g.shared.pending), M === null)) break
          ;((Y = M),
            (M = Y.next),
            (Y.next = null),
            (g.lastBaseUpdate = Y),
            (g.shared.pending = null))
        }
      } while (!0)
      if (
        (X === null && (O = G),
        (g.baseState = O),
        (g.firstBaseUpdate = B),
        (g.lastBaseUpdate = X),
        (o = g.shared.interleaved),
        o !== null)
      ) {
        g = o
        do ((b |= g.lane), (g = g.next))
        while (g !== o)
      } else v === null && (g.shared.lanes = 0)
      ;((bi |= b), (r.lanes = b), (r.memoizedState = G))
    }
  }
  function op(r, o, c) {
    if (((r = o.effects), (o.effects = null), r !== null))
      for (o = 0; o < r.length; o++) {
        var d = r[o],
          g = d.callback
        if (g !== null) {
          if (((d.callback = null), (d = c), typeof g != 'function')) throw Error(n(191, g))
          g.call(d)
        }
      }
  }
  var rs = {},
    en = Bn(rs),
    ss = Bn(rs),
    os = Bn(rs)
  function wi(r) {
    if (r === rs) throw Error(n(174))
    return r
  }
  function Vu(r, o) {
    switch ((Ot(os, o), Ot(ss, r), Ot(en, rs), (r = o.nodeType), r)) {
      case 9:
      case 11:
        o = (o = o.documentElement) ? o.namespaceURI : zl(null, '')
        break
      default:
        ;((r = r === 8 ? o.parentNode : o),
          (o = r.namespaceURI || null),
          (r = r.tagName),
          (o = zl(o, r)))
    }
    ;(At(en), Ot(en, o))
  }
  function fr() {
    ;(At(en), At(ss), At(os))
  }
  function ap(r) {
    wi(os.current)
    var o = wi(en.current),
      c = zl(o, r.type)
    o !== c && (Ot(ss, r), Ot(en, c))
  }
  function zu(r) {
    ss.current === r && (At(en), At(ss))
  }
  var Nt = Bn(0)
  function jo(r) {
    for (var o = r; o !== null; ) {
      if (o.tag === 13) {
        var c = o.memoizedState
        if (c !== null && ((c = c.dehydrated), c === null || c.data === '$?' || c.data === '$!'))
          return o
      } else if (o.tag === 19 && o.memoizedProps.revealOrder !== void 0) {
        if ((o.flags & 128) !== 0) return o
      } else if (o.child !== null) {
        ;((o.child.return = o), (o = o.child))
        continue
      }
      if (o === r) break
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === r) return null
        o = o.return
      }
      ;((o.sibling.return = o.return), (o = o.sibling))
    }
    return null
  }
  var Bu = []
  function Nu() {
    for (var r = 0; r < Bu.length; r++) Bu[r]._workInProgressVersionPrimary = null
    Bu.length = 0
  }
  var Ho = T.ReactCurrentDispatcher,
    ju = T.ReactCurrentBatchConfig,
    Si = 0,
    jt = null,
    Zt = null,
    ne = null,
    Wo = !1,
    as = !1,
    ls = 0,
    Ix = 0
  function ue() {
    throw Error(n(321))
  }
  function Hu(r, o) {
    if (o === null) return !1
    for (var c = 0; c < o.length && c < r.length; c++) if (!Ye(r[c], o[c])) return !1
    return !0
  }
  function Wu(r, o, c, d, g, v) {
    if (
      ((Si = v),
      (jt = o),
      (o.memoizedState = null),
      (o.updateQueue = null),
      (o.lanes = 0),
      (Ho.current = r === null || r.memoizedState === null ? Nx : jx),
      (r = c(d, g)),
      as)
    ) {
      v = 0
      do {
        if (((as = !1), (ls = 0), 25 <= v)) throw Error(n(301))
        ;((v += 1), (ne = Zt = null), (o.updateQueue = null), (Ho.current = Hx), (r = c(d, g)))
      } while (as)
    }
    if (
      ((Ho.current = Yo),
      (o = Zt !== null && Zt.next !== null),
      (Si = 0),
      (ne = Zt = jt = null),
      (Wo = !1),
      o)
    )
      throw Error(n(300))
    return r
  }
  function Uu() {
    var r = ls !== 0
    return ((ls = 0), r)
  }
  function nn() {
    var r = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }
    return (ne === null ? (jt.memoizedState = ne = r) : (ne = ne.next = r), ne)
  }
  function Be() {
    if (Zt === null) {
      var r = jt.alternate
      r = r !== null ? r.memoizedState : null
    } else r = Zt.next
    var o = ne === null ? jt.memoizedState : ne.next
    if (o !== null) ((ne = o), (Zt = r))
    else {
      if (r === null) throw Error(n(310))
      ;((Zt = r),
        (r = {
          memoizedState: Zt.memoizedState,
          baseState: Zt.baseState,
          baseQueue: Zt.baseQueue,
          queue: Zt.queue,
          next: null,
        }),
        ne === null ? (jt.memoizedState = ne = r) : (ne = ne.next = r))
    }
    return ne
  }
  function us(r, o) {
    return typeof o == 'function' ? o(r) : o
  }
  function $u(r) {
    var o = Be(),
      c = o.queue
    if (c === null) throw Error(n(311))
    c.lastRenderedReducer = r
    var d = Zt,
      g = d.baseQueue,
      v = c.pending
    if (v !== null) {
      if (g !== null) {
        var b = g.next
        ;((g.next = v.next), (v.next = b))
      }
      ;((d.baseQueue = g = v), (c.pending = null))
    }
    if (g !== null) {
      ;((v = g.next), (d = d.baseState))
      var M = (b = null),
        O = null,
        B = v
      do {
        var X = B.lane
        if ((Si & X) === X)
          (O !== null &&
            (O = O.next =
              {
                lane: 0,
                action: B.action,
                hasEagerState: B.hasEagerState,
                eagerState: B.eagerState,
                next: null,
              }),
            (d = B.hasEagerState ? B.eagerState : r(d, B.action)))
        else {
          var G = {
            lane: X,
            action: B.action,
            hasEagerState: B.hasEagerState,
            eagerState: B.eagerState,
            next: null,
          }
          ;(O === null ? ((M = O = G), (b = d)) : (O = O.next = G), (jt.lanes |= X), (bi |= X))
        }
        B = B.next
      } while (B !== null && B !== v)
      ;(O === null ? (b = d) : (O.next = M),
        Ye(d, o.memoizedState) || (be = !0),
        (o.memoizedState = d),
        (o.baseState = b),
        (o.baseQueue = O),
        (c.lastRenderedState = d))
    }
    if (((r = c.interleaved), r !== null)) {
      g = r
      do ((v = g.lane), (jt.lanes |= v), (bi |= v), (g = g.next))
      while (g !== r)
    } else g === null && (c.lanes = 0)
    return [o.memoizedState, c.dispatch]
  }
  function Yu(r) {
    var o = Be(),
      c = o.queue
    if (c === null) throw Error(n(311))
    c.lastRenderedReducer = r
    var d = c.dispatch,
      g = c.pending,
      v = o.memoizedState
    if (g !== null) {
      c.pending = null
      var b = (g = g.next)
      do ((v = r(v, b.action)), (b = b.next))
      while (b !== g)
      ;(Ye(v, o.memoizedState) || (be = !0),
        (o.memoizedState = v),
        o.baseQueue === null && (o.baseState = v),
        (c.lastRenderedState = v))
    }
    return [v, d]
  }
  function lp() {}
  function up(r, o) {
    var c = jt,
      d = Be(),
      g = o(),
      v = !Ye(d.memoizedState, g)
    if (
      (v && ((d.memoizedState = g), (be = !0)),
      (d = d.queue),
      Xu(hp.bind(null, c, d, r), [r]),
      d.getSnapshot !== o || v || (ne !== null && ne.memoizedState.tag & 1))
    ) {
      if (((c.flags |= 2048), cs(9, fp.bind(null, c, d, g, o), void 0, null), ie === null))
        throw Error(n(349))
      ;(Si & 30) !== 0 || cp(c, o, g)
    }
    return g
  }
  function cp(r, o, c) {
    ;((r.flags |= 16384),
      (r = { getSnapshot: o, value: c }),
      (o = jt.updateQueue),
      o === null
        ? ((o = { lastEffect: null, stores: null }), (jt.updateQueue = o), (o.stores = [r]))
        : ((c = o.stores), c === null ? (o.stores = [r]) : c.push(r)))
  }
  function fp(r, o, c, d) {
    ;((o.value = c), (o.getSnapshot = d), dp(o) && pp(r))
  }
  function hp(r, o, c) {
    return c(function () {
      dp(o) && pp(r)
    })
  }
  function dp(r) {
    var o = r.getSnapshot
    r = r.value
    try {
      var c = o()
      return !Ye(r, c)
    } catch {
      return !0
    }
  }
  function pp(r) {
    var o = pn(r, 1)
    o !== null && Qe(o, r, 1, -1)
  }
  function mp(r) {
    var o = nn()
    return (
      typeof r == 'function' && (r = r()),
      (o.memoizedState = o.baseState = r),
      (r = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: us,
        lastRenderedState: r,
      }),
      (o.queue = r),
      (r = r.dispatch = Bx.bind(null, jt, r)),
      [o.memoizedState, r]
    )
  }
  function cs(r, o, c, d) {
    return (
      (r = { tag: r, create: o, destroy: c, deps: d, next: null }),
      (o = jt.updateQueue),
      o === null
        ? ((o = { lastEffect: null, stores: null }),
          (jt.updateQueue = o),
          (o.lastEffect = r.next = r))
        : ((c = o.lastEffect),
          c === null
            ? (o.lastEffect = r.next = r)
            : ((d = c.next), (c.next = r), (r.next = d), (o.lastEffect = r))),
      r
    )
  }
  function gp() {
    return Be().memoizedState
  }
  function Uo(r, o, c, d) {
    var g = nn()
    ;((jt.flags |= r), (g.memoizedState = cs(1 | o, c, void 0, d === void 0 ? null : d)))
  }
  function $o(r, o, c, d) {
    var g = Be()
    d = d === void 0 ? null : d
    var v = void 0
    if (Zt !== null) {
      var b = Zt.memoizedState
      if (((v = b.destroy), d !== null && Hu(d, b.deps))) {
        g.memoizedState = cs(o, c, v, d)
        return
      }
    }
    ;((jt.flags |= r), (g.memoizedState = cs(1 | o, c, v, d)))
  }
  function yp(r, o) {
    return Uo(8390656, 8, r, o)
  }
  function Xu(r, o) {
    return $o(2048, 8, r, o)
  }
  function vp(r, o) {
    return $o(4, 2, r, o)
  }
  function xp(r, o) {
    return $o(4, 4, r, o)
  }
  function _p(r, o) {
    if (typeof o == 'function')
      return (
        (r = r()),
        o(r),
        function () {
          o(null)
        }
      )
    if (o != null)
      return (
        (r = r()),
        (o.current = r),
        function () {
          o.current = null
        }
      )
  }
  function wp(r, o, c) {
    return ((c = c != null ? c.concat([r]) : null), $o(4, 4, _p.bind(null, o, r), c))
  }
  function Ku() {}
  function Sp(r, o) {
    var c = Be()
    o = o === void 0 ? null : o
    var d = c.memoizedState
    return d !== null && o !== null && Hu(o, d[1]) ? d[0] : ((c.memoizedState = [r, o]), r)
  }
  function bp(r, o) {
    var c = Be()
    o = o === void 0 ? null : o
    var d = c.memoizedState
    return d !== null && o !== null && Hu(o, d[1])
      ? d[0]
      : ((r = r()), (c.memoizedState = [r, o]), r)
  }
  function kp(r, o, c) {
    return (Si & 21) === 0
      ? (r.baseState && ((r.baseState = !1), (be = !0)), (r.memoizedState = c))
      : (Ye(c, o) || ((c = td()), (jt.lanes |= c), (bi |= c), (r.baseState = !0)), o)
  }
  function Vx(r, o) {
    var c = Ct
    ;((Ct = c !== 0 && 4 > c ? c : 4), r(!0))
    var d = ju.transition
    ju.transition = {}
    try {
      ;(r(!1), o())
    } finally {
      ;((Ct = c), (ju.transition = d))
    }
  }
  function Pp() {
    return Be().memoizedState
  }
  function zx(r, o, c) {
    var d = Xn(r)
    if (((c = { lane: d, action: c, hasEagerState: !1, eagerState: null, next: null }), Cp(r)))
      Mp(o, c)
    else if (((c = ip(r, o, c, d)), c !== null)) {
      var g = ve()
      ;(Qe(c, r, d, g), Tp(c, o, d))
    }
  }
  function Bx(r, o, c) {
    var d = Xn(r),
      g = { lane: d, action: c, hasEagerState: !1, eagerState: null, next: null }
    if (Cp(r)) Mp(o, g)
    else {
      var v = r.alternate
      if (
        r.lanes === 0 &&
        (v === null || v.lanes === 0) &&
        ((v = o.lastRenderedReducer), v !== null)
      )
        try {
          var b = o.lastRenderedState,
            M = v(b, c)
          if (((g.hasEagerState = !0), (g.eagerState = M), Ye(M, b))) {
            var O = o.interleaved
            ;(O === null ? ((g.next = g), Fu(o)) : ((g.next = O.next), (O.next = g)),
              (o.interleaved = g))
            return
          }
        } catch {
        } finally {
        }
      ;((c = ip(r, o, g, d)), c !== null && ((g = ve()), Qe(c, r, d, g), Tp(c, o, d)))
    }
  }
  function Cp(r) {
    var o = r.alternate
    return r === jt || (o !== null && o === jt)
  }
  function Mp(r, o) {
    as = Wo = !0
    var c = r.pending
    ;(c === null ? (o.next = o) : ((o.next = c.next), (c.next = o)), (r.pending = o))
  }
  function Tp(r, o, c) {
    if ((c & 4194240) !== 0) {
      var d = o.lanes
      ;((d &= r.pendingLanes), (c |= d), (o.lanes = c), ql(r, c))
    }
  }
  var Yo = {
      readContext: ze,
      useCallback: ue,
      useContext: ue,
      useEffect: ue,
      useImperativeHandle: ue,
      useInsertionEffect: ue,
      useLayoutEffect: ue,
      useMemo: ue,
      useReducer: ue,
      useRef: ue,
      useState: ue,
      useDebugValue: ue,
      useDeferredValue: ue,
      useTransition: ue,
      useMutableSource: ue,
      useSyncExternalStore: ue,
      useId: ue,
      unstable_isNewReconciler: !1,
    },
    Nx = {
      readContext: ze,
      useCallback: function (r, o) {
        return ((nn().memoizedState = [r, o === void 0 ? null : o]), r)
      },
      useContext: ze,
      useEffect: yp,
      useImperativeHandle: function (r, o, c) {
        return ((c = c != null ? c.concat([r]) : null), Uo(4194308, 4, _p.bind(null, o, r), c))
      },
      useLayoutEffect: function (r, o) {
        return Uo(4194308, 4, r, o)
      },
      useInsertionEffect: function (r, o) {
        return Uo(4, 2, r, o)
      },
      useMemo: function (r, o) {
        var c = nn()
        return ((o = o === void 0 ? null : o), (r = r()), (c.memoizedState = [r, o]), r)
      },
      useReducer: function (r, o, c) {
        var d = nn()
        return (
          (o = c !== void 0 ? c(o) : o),
          (d.memoizedState = d.baseState = o),
          (r = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: r,
            lastRenderedState: o,
          }),
          (d.queue = r),
          (r = r.dispatch = zx.bind(null, jt, r)),
          [d.memoizedState, r]
        )
      },
      useRef: function (r) {
        var o = nn()
        return ((r = { current: r }), (o.memoizedState = r))
      },
      useState: mp,
      useDebugValue: Ku,
      useDeferredValue: function (r) {
        return (nn().memoizedState = r)
      },
      useTransition: function () {
        var r = mp(!1),
          o = r[0]
        return ((r = Vx.bind(null, r[1])), (nn().memoizedState = r), [o, r])
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (r, o, c) {
        var d = jt,
          g = nn()
        if (It) {
          if (c === void 0) throw Error(n(407))
          c = c()
        } else {
          if (((c = o()), ie === null)) throw Error(n(349))
          ;(Si & 30) !== 0 || cp(d, o, c)
        }
        g.memoizedState = c
        var v = { value: c, getSnapshot: o }
        return (
          (g.queue = v),
          yp(hp.bind(null, d, v, r), [r]),
          (d.flags |= 2048),
          cs(9, fp.bind(null, d, v, c, o), void 0, null),
          c
        )
      },
      useId: function () {
        var r = nn(),
          o = ie.identifierPrefix
        if (It) {
          var c = dn,
            d = hn
          ;((c = (d & ~(1 << (32 - $e(d) - 1))).toString(32) + c),
            (o = ':' + o + 'R' + c),
            (c = ls++),
            0 < c && (o += 'H' + c.toString(32)),
            (o += ':'))
        } else ((c = Ix++), (o = ':' + o + 'r' + c.toString(32) + ':'))
        return (r.memoizedState = o)
      },
      unstable_isNewReconciler: !1,
    },
    jx = {
      readContext: ze,
      useCallback: Sp,
      useContext: ze,
      useEffect: Xu,
      useImperativeHandle: wp,
      useInsertionEffect: vp,
      useLayoutEffect: xp,
      useMemo: bp,
      useReducer: $u,
      useRef: gp,
      useState: function () {
        return $u(us)
      },
      useDebugValue: Ku,
      useDeferredValue: function (r) {
        var o = Be()
        return kp(o, Zt.memoizedState, r)
      },
      useTransition: function () {
        var r = $u(us)[0],
          o = Be().memoizedState
        return [r, o]
      },
      useMutableSource: lp,
      useSyncExternalStore: up,
      useId: Pp,
      unstable_isNewReconciler: !1,
    },
    Hx = {
      readContext: ze,
      useCallback: Sp,
      useContext: ze,
      useEffect: Xu,
      useImperativeHandle: wp,
      useInsertionEffect: vp,
      useLayoutEffect: xp,
      useMemo: bp,
      useReducer: Yu,
      useRef: gp,
      useState: function () {
        return Yu(us)
      },
      useDebugValue: Ku,
      useDeferredValue: function (r) {
        var o = Be()
        return Zt === null ? (o.memoizedState = r) : kp(o, Zt.memoizedState, r)
      },
      useTransition: function () {
        var r = Yu(us)[0],
          o = Be().memoizedState
        return [r, o]
      },
      useMutableSource: lp,
      useSyncExternalStore: up,
      useId: Pp,
      unstable_isNewReconciler: !1,
    }
  function Ke(r, o) {
    if (r && r.defaultProps) {
      ;((o = Z({}, o)), (r = r.defaultProps))
      for (var c in r) o[c] === void 0 && (o[c] = r[c])
      return o
    }
    return o
  }
  function Gu(r, o, c, d) {
    ;((o = r.memoizedState),
      (c = c(d, o)),
      (c = c == null ? o : Z({}, o, c)),
      (r.memoizedState = c),
      r.lanes === 0 && (r.updateQueue.baseState = c))
  }
  var Xo = {
    isMounted: function (r) {
      return (r = r._reactInternals) ? mi(r) === r : !1
    },
    enqueueSetState: function (r, o, c) {
      r = r._reactInternals
      var d = ve(),
        g = Xn(r),
        v = mn(d, g)
      ;((v.payload = o),
        c != null && (v.callback = c),
        (o = Wn(r, v, g)),
        o !== null && (Qe(o, r, g, d), Bo(o, r, g)))
    },
    enqueueReplaceState: function (r, o, c) {
      r = r._reactInternals
      var d = ve(),
        g = Xn(r),
        v = mn(d, g)
      ;((v.tag = 1),
        (v.payload = o),
        c != null && (v.callback = c),
        (o = Wn(r, v, g)),
        o !== null && (Qe(o, r, g, d), Bo(o, r, g)))
    },
    enqueueForceUpdate: function (r, o) {
      r = r._reactInternals
      var c = ve(),
        d = Xn(r),
        g = mn(c, d)
      ;((g.tag = 2),
        o != null && (g.callback = o),
        (o = Wn(r, g, d)),
        o !== null && (Qe(o, r, d, c), Bo(o, r, d)))
    },
  }
  function Ep(r, o, c, d, g, v, b) {
    return (
      (r = r.stateNode),
      typeof r.shouldComponentUpdate == 'function'
        ? r.shouldComponentUpdate(d, v, b)
        : o.prototype && o.prototype.isPureReactComponent
          ? !qr(c, d) || !qr(g, v)
          : !0
    )
  }
  function Op(r, o, c) {
    var d = !1,
      g = Nn,
      v = o.contextType
    return (
      typeof v == 'object' && v !== null
        ? (v = ze(v))
        : ((g = Se(o) ? yi : le.current),
          (d = o.contextTypes),
          (v = (d = d != null) ? rr(r, g) : Nn)),
      (o = new o(c, v)),
      (r.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
      (o.updater = Xo),
      (r.stateNode = o),
      (o._reactInternals = r),
      d &&
        ((r = r.stateNode),
        (r.__reactInternalMemoizedUnmaskedChildContext = g),
        (r.__reactInternalMemoizedMaskedChildContext = v)),
      o
    )
  }
  function Lp(r, o, c, d) {
    ;((r = o.state),
      typeof o.componentWillReceiveProps == 'function' && o.componentWillReceiveProps(c, d),
      typeof o.UNSAFE_componentWillReceiveProps == 'function' &&
        o.UNSAFE_componentWillReceiveProps(c, d),
      o.state !== r && Xo.enqueueReplaceState(o, o.state, null))
  }
  function qu(r, o, c, d) {
    var g = r.stateNode
    ;((g.props = c), (g.state = r.memoizedState), (g.refs = {}), Iu(r))
    var v = o.contextType
    ;(typeof v == 'object' && v !== null
      ? (g.context = ze(v))
      : ((v = Se(o) ? yi : le.current), (g.context = rr(r, v))),
      (g.state = r.memoizedState),
      (v = o.getDerivedStateFromProps),
      typeof v == 'function' && (Gu(r, o, v, c), (g.state = r.memoizedState)),
      typeof o.getDerivedStateFromProps == 'function' ||
        typeof g.getSnapshotBeforeUpdate == 'function' ||
        (typeof g.UNSAFE_componentWillMount != 'function' &&
          typeof g.componentWillMount != 'function') ||
        ((o = g.state),
        typeof g.componentWillMount == 'function' && g.componentWillMount(),
        typeof g.UNSAFE_componentWillMount == 'function' && g.UNSAFE_componentWillMount(),
        o !== g.state && Xo.enqueueReplaceState(g, g.state, null),
        No(r, c, g, d),
        (g.state = r.memoizedState)),
      typeof g.componentDidMount == 'function' && (r.flags |= 4194308))
  }
  function hr(r, o) {
    try {
      var c = '',
        d = o
      do ((c += gt(d)), (d = d.return))
      while (d)
      var g = c
    } catch (v) {
      g =
        `
Error generating stack: ` +
        v.message +
        `
` +
        v.stack
    }
    return { value: r, source: o, stack: g, digest: null }
  }
  function Qu(r, o, c) {
    return { value: r, source: null, stack: c ?? null, digest: o ?? null }
  }
  function Zu(r, o) {
    try {
      console.error(o.value)
    } catch (c) {
      setTimeout(function () {
        throw c
      })
    }
  }
  var Wx = typeof WeakMap == 'function' ? WeakMap : Map
  function Dp(r, o, c) {
    ;((c = mn(-1, c)), (c.tag = 3), (c.payload = { element: null }))
    var d = o.value
    return (
      (c.callback = function () {
        ;(ta || ((ta = !0), (dc = d)), Zu(r, o))
      }),
      c
    )
  }
  function Ap(r, o, c) {
    ;((c = mn(-1, c)), (c.tag = 3))
    var d = r.type.getDerivedStateFromError
    if (typeof d == 'function') {
      var g = o.value
      ;((c.payload = function () {
        return d(g)
      }),
        (c.callback = function () {
          Zu(r, o)
        }))
    }
    var v = r.stateNode
    return (
      v !== null &&
        typeof v.componentDidCatch == 'function' &&
        (c.callback = function () {
          ;(Zu(r, o),
            typeof d != 'function' && ($n === null ? ($n = new Set([this])) : $n.add(this)))
          var b = o.stack
          this.componentDidCatch(o.value, { componentStack: b !== null ? b : '' })
        }),
      c
    )
  }
  function Rp(r, o, c) {
    var d = r.pingCache
    if (d === null) {
      d = r.pingCache = new Wx()
      var g = new Set()
      d.set(o, g)
    } else ((g = d.get(o)), g === void 0 && ((g = new Set()), d.set(o, g)))
    g.has(c) || (g.add(c), (r = i_.bind(null, r, o, c)), o.then(r, r))
  }
  function Fp(r) {
    do {
      var o
      if (
        ((o = r.tag === 13) &&
          ((o = r.memoizedState), (o = o !== null ? o.dehydrated !== null : !0)),
        o)
      )
        return r
      r = r.return
    } while (r !== null)
    return null
  }
  function Ip(r, o, c, d, g) {
    return (r.mode & 1) === 0
      ? (r === o
          ? (r.flags |= 65536)
          : ((r.flags |= 128),
            (c.flags |= 131072),
            (c.flags &= -52805),
            c.tag === 1 &&
              (c.alternate === null ? (c.tag = 17) : ((o = mn(-1, 1)), (o.tag = 2), Wn(c, o, 1))),
            (c.lanes |= 1)),
        r)
      : ((r.flags |= 65536), (r.lanes = g), r)
  }
  var Ux = T.ReactCurrentOwner,
    be = !1
  function ye(r, o, c, d) {
    o.child = r === null ? np(o, null, c, d) : lr(o, r.child, c, d)
  }
  function Vp(r, o, c, d, g) {
    c = c.render
    var v = o.ref
    return (
      cr(o, g),
      (d = Wu(r, o, c, d, v, g)),
      (c = Uu()),
      r !== null && !be
        ? ((o.updateQueue = r.updateQueue), (o.flags &= -2053), (r.lanes &= ~g), gn(r, o, g))
        : (It && c && Cu(o), (o.flags |= 1), ye(r, o, d, g), o.child)
    )
  }
  function zp(r, o, c, d, g) {
    if (r === null) {
      var v = c.type
      return typeof v == 'function' &&
        !_c(v) &&
        v.defaultProps === void 0 &&
        c.compare === null &&
        c.defaultProps === void 0
        ? ((o.tag = 15), (o.type = v), Bp(r, o, v, d, g))
        : ((r = oa(c.type, null, d, o, o.mode, g)), (r.ref = o.ref), (r.return = o), (o.child = r))
    }
    if (((v = r.child), (r.lanes & g) === 0)) {
      var b = v.memoizedProps
      if (((c = c.compare), (c = c !== null ? c : qr), c(b, d) && r.ref === o.ref))
        return gn(r, o, g)
    }
    return ((o.flags |= 1), (r = Gn(v, d)), (r.ref = o.ref), (r.return = o), (o.child = r))
  }
  function Bp(r, o, c, d, g) {
    if (r !== null) {
      var v = r.memoizedProps
      if (qr(v, d) && r.ref === o.ref)
        if (((be = !1), (o.pendingProps = d = v), (r.lanes & g) !== 0))
          (r.flags & 131072) !== 0 && (be = !0)
        else return ((o.lanes = r.lanes), gn(r, o, g))
    }
    return Ju(r, o, c, d, g)
  }
  function Np(r, o, c) {
    var d = o.pendingProps,
      g = d.children,
      v = r !== null ? r.memoizedState : null
    if (d.mode === 'hidden')
      if ((o.mode & 1) === 0)
        ((o.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          Ot(pr, Ae),
          (Ae |= c))
      else {
        if ((c & 1073741824) === 0)
          return (
            (r = v !== null ? v.baseLanes | c : c),
            (o.lanes = o.childLanes = 1073741824),
            (o.memoizedState = { baseLanes: r, cachePool: null, transitions: null }),
            (o.updateQueue = null),
            Ot(pr, Ae),
            (Ae |= r),
            null
          )
        ;((o.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (d = v !== null ? v.baseLanes : c),
          Ot(pr, Ae),
          (Ae |= d))
      }
    else
      (v !== null ? ((d = v.baseLanes | c), (o.memoizedState = null)) : (d = c),
        Ot(pr, Ae),
        (Ae |= d))
    return (ye(r, o, g, c), o.child)
  }
  function jp(r, o) {
    var c = o.ref
    ;((r === null && c !== null) || (r !== null && r.ref !== c)) &&
      ((o.flags |= 512), (o.flags |= 2097152))
  }
  function Ju(r, o, c, d, g) {
    var v = Se(c) ? yi : le.current
    return (
      (v = rr(o, v)),
      cr(o, g),
      (c = Wu(r, o, c, d, v, g)),
      (d = Uu()),
      r !== null && !be
        ? ((o.updateQueue = r.updateQueue), (o.flags &= -2053), (r.lanes &= ~g), gn(r, o, g))
        : (It && d && Cu(o), (o.flags |= 1), ye(r, o, c, g), o.child)
    )
  }
  function Hp(r, o, c, d, g) {
    if (Se(c)) {
      var v = !0
      Lo(o)
    } else v = !1
    if ((cr(o, g), o.stateNode === null)) (Go(r, o), Op(o, c, d), qu(o, c, d, g), (d = !0))
    else if (r === null) {
      var b = o.stateNode,
        M = o.memoizedProps
      b.props = M
      var O = b.context,
        B = c.contextType
      typeof B == 'object' && B !== null
        ? (B = ze(B))
        : ((B = Se(c) ? yi : le.current), (B = rr(o, B)))
      var X = c.getDerivedStateFromProps,
        G = typeof X == 'function' || typeof b.getSnapshotBeforeUpdate == 'function'
      ;(G ||
        (typeof b.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof b.componentWillReceiveProps != 'function') ||
        ((M !== d || O !== B) && Lp(o, b, d, B)),
        (Hn = !1))
      var Y = o.memoizedState
      ;((b.state = Y),
        No(o, d, b, g),
        (O = o.memoizedState),
        M !== d || Y !== O || we.current || Hn
          ? (typeof X == 'function' && (Gu(o, c, X, d), (O = o.memoizedState)),
            (M = Hn || Ep(o, c, M, d, Y, O, B))
              ? (G ||
                  (typeof b.UNSAFE_componentWillMount != 'function' &&
                    typeof b.componentWillMount != 'function') ||
                  (typeof b.componentWillMount == 'function' && b.componentWillMount(),
                  typeof b.UNSAFE_componentWillMount == 'function' &&
                    b.UNSAFE_componentWillMount()),
                typeof b.componentDidMount == 'function' && (o.flags |= 4194308))
              : (typeof b.componentDidMount == 'function' && (o.flags |= 4194308),
                (o.memoizedProps = d),
                (o.memoizedState = O)),
            (b.props = d),
            (b.state = O),
            (b.context = B),
            (d = M))
          : (typeof b.componentDidMount == 'function' && (o.flags |= 4194308), (d = !1)))
    } else {
      ;((b = o.stateNode),
        rp(r, o),
        (M = o.memoizedProps),
        (B = o.type === o.elementType ? M : Ke(o.type, M)),
        (b.props = B),
        (G = o.pendingProps),
        (Y = b.context),
        (O = c.contextType),
        typeof O == 'object' && O !== null
          ? (O = ze(O))
          : ((O = Se(c) ? yi : le.current), (O = rr(o, O))))
      var et = c.getDerivedStateFromProps
      ;((X = typeof et == 'function' || typeof b.getSnapshotBeforeUpdate == 'function') ||
        (typeof b.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof b.componentWillReceiveProps != 'function') ||
        ((M !== G || Y !== O) && Lp(o, b, d, O)),
        (Hn = !1),
        (Y = o.memoizedState),
        (b.state = Y),
        No(o, d, b, g))
      var it = o.memoizedState
      M !== G || Y !== it || we.current || Hn
        ? (typeof et == 'function' && (Gu(o, c, et, d), (it = o.memoizedState)),
          (B = Hn || Ep(o, c, B, d, Y, it, O) || !1)
            ? (X ||
                (typeof b.UNSAFE_componentWillUpdate != 'function' &&
                  typeof b.componentWillUpdate != 'function') ||
                (typeof b.componentWillUpdate == 'function' && b.componentWillUpdate(d, it, O),
                typeof b.UNSAFE_componentWillUpdate == 'function' &&
                  b.UNSAFE_componentWillUpdate(d, it, O)),
              typeof b.componentDidUpdate == 'function' && (o.flags |= 4),
              typeof b.getSnapshotBeforeUpdate == 'function' && (o.flags |= 1024))
            : (typeof b.componentDidUpdate != 'function' ||
                (M === r.memoizedProps && Y === r.memoizedState) ||
                (o.flags |= 4),
              typeof b.getSnapshotBeforeUpdate != 'function' ||
                (M === r.memoizedProps && Y === r.memoizedState) ||
                (o.flags |= 1024),
              (o.memoizedProps = d),
              (o.memoizedState = it)),
          (b.props = d),
          (b.state = it),
          (b.context = O),
          (d = B))
        : (typeof b.componentDidUpdate != 'function' ||
            (M === r.memoizedProps && Y === r.memoizedState) ||
            (o.flags |= 4),
          typeof b.getSnapshotBeforeUpdate != 'function' ||
            (M === r.memoizedProps && Y === r.memoizedState) ||
            (o.flags |= 1024),
          (d = !1))
    }
    return tc(r, o, c, d, v, g)
  }
  function tc(r, o, c, d, g, v) {
    jp(r, o)
    var b = (o.flags & 128) !== 0
    if (!d && !b) return (g && Xd(o, c, !1), gn(r, o, v))
    ;((d = o.stateNode), (Ux.current = o))
    var M = b && typeof c.getDerivedStateFromError != 'function' ? null : d.render()
    return (
      (o.flags |= 1),
      r !== null && b
        ? ((o.child = lr(o, r.child, null, v)), (o.child = lr(o, null, M, v)))
        : ye(r, o, M, v),
      (o.memoizedState = d.state),
      g && Xd(o, c, !0),
      o.child
    )
  }
  function Wp(r) {
    var o = r.stateNode
    ;(o.pendingContext
      ? $d(r, o.pendingContext, o.pendingContext !== o.context)
      : o.context && $d(r, o.context, !1),
      Vu(r, o.containerInfo))
  }
  function Up(r, o, c, d, g) {
    return (ar(), Ou(g), (o.flags |= 256), ye(r, o, c, d), o.child)
  }
  var ec = { dehydrated: null, treeContext: null, retryLane: 0 }
  function nc(r) {
    return { baseLanes: r, cachePool: null, transitions: null }
  }
  function $p(r, o, c) {
    var d = o.pendingProps,
      g = Nt.current,
      v = !1,
      b = (o.flags & 128) !== 0,
      M
    if (
      ((M = b) || (M = r !== null && r.memoizedState === null ? !1 : (g & 2) !== 0),
      M ? ((v = !0), (o.flags &= -129)) : (r === null || r.memoizedState !== null) && (g |= 1),
      Ot(Nt, g & 1),
      r === null)
    )
      return (
        Eu(o),
        (r = o.memoizedState),
        r !== null && ((r = r.dehydrated), r !== null)
          ? ((o.mode & 1) === 0
              ? (o.lanes = 1)
              : r.data === '$!'
                ? (o.lanes = 8)
                : (o.lanes = 1073741824),
            null)
          : ((b = d.children),
            (r = d.fallback),
            v
              ? ((d = o.mode),
                (v = o.child),
                (b = { mode: 'hidden', children: b }),
                (d & 1) === 0 && v !== null
                  ? ((v.childLanes = 0), (v.pendingProps = b))
                  : (v = aa(b, d, 0, null)),
                (r = Mi(r, d, c, null)),
                (v.return = o),
                (r.return = o),
                (v.sibling = r),
                (o.child = v),
                (o.child.memoizedState = nc(c)),
                (o.memoizedState = ec),
                r)
              : ic(o, b))
      )
    if (((g = r.memoizedState), g !== null && ((M = g.dehydrated), M !== null)))
      return $x(r, o, b, d, M, g, c)
    if (v) {
      ;((v = d.fallback), (b = o.mode), (g = r.child), (M = g.sibling))
      var O = { mode: 'hidden', children: d.children }
      return (
        (b & 1) === 0 && o.child !== g
          ? ((d = o.child), (d.childLanes = 0), (d.pendingProps = O), (o.deletions = null))
          : ((d = Gn(g, O)), (d.subtreeFlags = g.subtreeFlags & 14680064)),
        M !== null ? (v = Gn(M, v)) : ((v = Mi(v, b, c, null)), (v.flags |= 2)),
        (v.return = o),
        (d.return = o),
        (d.sibling = v),
        (o.child = d),
        (d = v),
        (v = o.child),
        (b = r.child.memoizedState),
        (b =
          b === null
            ? nc(c)
            : { baseLanes: b.baseLanes | c, cachePool: null, transitions: b.transitions }),
        (v.memoizedState = b),
        (v.childLanes = r.childLanes & ~c),
        (o.memoizedState = ec),
        d
      )
    }
    return (
      (v = r.child),
      (r = v.sibling),
      (d = Gn(v, { mode: 'visible', children: d.children })),
      (o.mode & 1) === 0 && (d.lanes = c),
      (d.return = o),
      (d.sibling = null),
      r !== null &&
        ((c = o.deletions), c === null ? ((o.deletions = [r]), (o.flags |= 16)) : c.push(r)),
      (o.child = d),
      (o.memoizedState = null),
      d
    )
  }
  function ic(r, o) {
    return (
      (o = aa({ mode: 'visible', children: o }, r.mode, 0, null)),
      (o.return = r),
      (r.child = o)
    )
  }
  function Ko(r, o, c, d) {
    return (
      d !== null && Ou(d),
      lr(o, r.child, null, c),
      (r = ic(o, o.pendingProps.children)),
      (r.flags |= 2),
      (o.memoizedState = null),
      r
    )
  }
  function $x(r, o, c, d, g, v, b) {
    if (c)
      return o.flags & 256
        ? ((o.flags &= -257), (d = Qu(Error(n(422)))), Ko(r, o, b, d))
        : o.memoizedState !== null
          ? ((o.child = r.child), (o.flags |= 128), null)
          : ((v = d.fallback),
            (g = o.mode),
            (d = aa({ mode: 'visible', children: d.children }, g, 0, null)),
            (v = Mi(v, g, b, null)),
            (v.flags |= 2),
            (d.return = o),
            (v.return = o),
            (d.sibling = v),
            (o.child = d),
            (o.mode & 1) !== 0 && lr(o, r.child, null, b),
            (o.child.memoizedState = nc(b)),
            (o.memoizedState = ec),
            v)
    if ((o.mode & 1) === 0) return Ko(r, o, b, null)
    if (g.data === '$!') {
      if (((d = g.nextSibling && g.nextSibling.dataset), d)) var M = d.dgst
      return ((d = M), (v = Error(n(419))), (d = Qu(v, d, void 0)), Ko(r, o, b, d))
    }
    if (((M = (b & r.childLanes) !== 0), be || M)) {
      if (((d = ie), d !== null)) {
        switch (b & -b) {
          case 4:
            g = 2
            break
          case 16:
            g = 8
            break
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            g = 32
            break
          case 536870912:
            g = 268435456
            break
          default:
            g = 0
        }
        ;((g = (g & (d.suspendedLanes | b)) !== 0 ? 0 : g),
          g !== 0 && g !== v.retryLane && ((v.retryLane = g), pn(r, g), Qe(d, r, g, -1)))
      }
      return (xc(), (d = Qu(Error(n(421)))), Ko(r, o, b, d))
    }
    return g.data === '$?'
      ? ((o.flags |= 128), (o.child = r.child), (o = r_.bind(null, r)), (g._reactRetry = o), null)
      : ((r = v.treeContext),
        (De = zn(g.nextSibling)),
        (Le = o),
        (It = !0),
        (Xe = null),
        r !== null &&
          ((Ie[Ve++] = hn),
          (Ie[Ve++] = dn),
          (Ie[Ve++] = vi),
          (hn = r.id),
          (dn = r.overflow),
          (vi = o)),
        (o = ic(o, d.children)),
        (o.flags |= 4096),
        o)
  }
  function Yp(r, o, c) {
    r.lanes |= o
    var d = r.alternate
    ;(d !== null && (d.lanes |= o), Ru(r.return, o, c))
  }
  function rc(r, o, c, d, g) {
    var v = r.memoizedState
    v === null
      ? (r.memoizedState = {
          isBackwards: o,
          rendering: null,
          renderingStartTime: 0,
          last: d,
          tail: c,
          tailMode: g,
        })
      : ((v.isBackwards = o),
        (v.rendering = null),
        (v.renderingStartTime = 0),
        (v.last = d),
        (v.tail = c),
        (v.tailMode = g))
  }
  function Xp(r, o, c) {
    var d = o.pendingProps,
      g = d.revealOrder,
      v = d.tail
    if ((ye(r, o, d.children, c), (d = Nt.current), (d & 2) !== 0))
      ((d = (d & 1) | 2), (o.flags |= 128))
    else {
      if (r !== null && (r.flags & 128) !== 0)
        t: for (r = o.child; r !== null; ) {
          if (r.tag === 13) r.memoizedState !== null && Yp(r, c, o)
          else if (r.tag === 19) Yp(r, c, o)
          else if (r.child !== null) {
            ;((r.child.return = r), (r = r.child))
            continue
          }
          if (r === o) break t
          for (; r.sibling === null; ) {
            if (r.return === null || r.return === o) break t
            r = r.return
          }
          ;((r.sibling.return = r.return), (r = r.sibling))
        }
      d &= 1
    }
    if ((Ot(Nt, d), (o.mode & 1) === 0)) o.memoizedState = null
    else
      switch (g) {
        case 'forwards':
          for (c = o.child, g = null; c !== null; )
            ((r = c.alternate), r !== null && jo(r) === null && (g = c), (c = c.sibling))
          ;((c = g),
            c === null ? ((g = o.child), (o.child = null)) : ((g = c.sibling), (c.sibling = null)),
            rc(o, !1, g, c, v))
          break
        case 'backwards':
          for (c = null, g = o.child, o.child = null; g !== null; ) {
            if (((r = g.alternate), r !== null && jo(r) === null)) {
              o.child = g
              break
            }
            ;((r = g.sibling), (g.sibling = c), (c = g), (g = r))
          }
          rc(o, !0, c, null, v)
          break
        case 'together':
          rc(o, !1, null, null, void 0)
          break
        default:
          o.memoizedState = null
      }
    return o.child
  }
  function Go(r, o) {
    ;(o.mode & 1) === 0 &&
      r !== null &&
      ((r.alternate = null), (o.alternate = null), (o.flags |= 2))
  }
  function gn(r, o, c) {
    if (
      (r !== null && (o.dependencies = r.dependencies), (bi |= o.lanes), (c & o.childLanes) === 0)
    )
      return null
    if (r !== null && o.child !== r.child) throw Error(n(153))
    if (o.child !== null) {
      for (r = o.child, c = Gn(r, r.pendingProps), o.child = c, c.return = o; r.sibling !== null; )
        ((r = r.sibling), (c = c.sibling = Gn(r, r.pendingProps)), (c.return = o))
      c.sibling = null
    }
    return o.child
  }
  function Yx(r, o, c) {
    switch (o.tag) {
      case 3:
        ;(Wp(o), ar())
        break
      case 5:
        ap(o)
        break
      case 1:
        Se(o.type) && Lo(o)
        break
      case 4:
        Vu(o, o.stateNode.containerInfo)
        break
      case 10:
        var d = o.type._context,
          g = o.memoizedProps.value
        ;(Ot(Vo, d._currentValue), (d._currentValue = g))
        break
      case 13:
        if (((d = o.memoizedState), d !== null))
          return d.dehydrated !== null
            ? (Ot(Nt, Nt.current & 1), (o.flags |= 128), null)
            : (c & o.child.childLanes) !== 0
              ? $p(r, o, c)
              : (Ot(Nt, Nt.current & 1), (r = gn(r, o, c)), r !== null ? r.sibling : null)
        Ot(Nt, Nt.current & 1)
        break
      case 19:
        if (((d = (c & o.childLanes) !== 0), (r.flags & 128) !== 0)) {
          if (d) return Xp(r, o, c)
          o.flags |= 128
        }
        if (
          ((g = o.memoizedState),
          g !== null && ((g.rendering = null), (g.tail = null), (g.lastEffect = null)),
          Ot(Nt, Nt.current),
          d)
        )
          break
        return null
      case 22:
      case 23:
        return ((o.lanes = 0), Np(r, o, c))
    }
    return gn(r, o, c)
  }
  var Kp, sc, Gp, qp
  ;((Kp = function (r, o) {
    for (var c = o.child; c !== null; ) {
      if (c.tag === 5 || c.tag === 6) r.appendChild(c.stateNode)
      else if (c.tag !== 4 && c.child !== null) {
        ;((c.child.return = c), (c = c.child))
        continue
      }
      if (c === o) break
      for (; c.sibling === null; ) {
        if (c.return === null || c.return === o) return
        c = c.return
      }
      ;((c.sibling.return = c.return), (c = c.sibling))
    }
  }),
    (sc = function () {}),
    (Gp = function (r, o, c, d) {
      var g = r.memoizedProps
      if (g !== d) {
        ;((r = o.stateNode), wi(en.current))
        var v = null
        switch (c) {
          case 'input':
            ;((g = Rl(r, g)), (d = Rl(r, d)), (v = []))
            break
          case 'select':
            ;((g = Z({}, g, { value: void 0 })), (d = Z({}, d, { value: void 0 })), (v = []))
            break
          case 'textarea':
            ;((g = Vl(r, g)), (d = Vl(r, d)), (v = []))
            break
          default:
            typeof g.onClick != 'function' && typeof d.onClick == 'function' && (r.onclick = To)
        }
        Bl(c, d)
        var b
        c = null
        for (B in g)
          if (!d.hasOwnProperty(B) && g.hasOwnProperty(B) && g[B] != null)
            if (B === 'style') {
              var M = g[B]
              for (b in M) M.hasOwnProperty(b) && (c || (c = {}), (c[b] = ''))
            } else
              B !== 'dangerouslySetInnerHTML' &&
                B !== 'children' &&
                B !== 'suppressContentEditableWarning' &&
                B !== 'suppressHydrationWarning' &&
                B !== 'autoFocus' &&
                (s.hasOwnProperty(B) ? v || (v = []) : (v = v || []).push(B, null))
        for (B in d) {
          var O = d[B]
          if (((M = g?.[B]), d.hasOwnProperty(B) && O !== M && (O != null || M != null)))
            if (B === 'style')
              if (M) {
                for (b in M)
                  !M.hasOwnProperty(b) || (O && O.hasOwnProperty(b)) || (c || (c = {}), (c[b] = ''))
                for (b in O) O.hasOwnProperty(b) && M[b] !== O[b] && (c || (c = {}), (c[b] = O[b]))
              } else (c || (v || (v = []), v.push(B, c)), (c = O))
            else
              B === 'dangerouslySetInnerHTML'
                ? ((O = O ? O.__html : void 0),
                  (M = M ? M.__html : void 0),
                  O != null && M !== O && (v = v || []).push(B, O))
                : B === 'children'
                  ? (typeof O != 'string' && typeof O != 'number') || (v = v || []).push(B, '' + O)
                  : B !== 'suppressContentEditableWarning' &&
                    B !== 'suppressHydrationWarning' &&
                    (s.hasOwnProperty(B)
                      ? (O != null && B === 'onScroll' && Dt('scroll', r), v || M === O || (v = []))
                      : (v = v || []).push(B, O))
        }
        c && (v = v || []).push('style', c)
        var B = v
        ;(o.updateQueue = B) && (o.flags |= 4)
      }
    }),
    (qp = function (r, o, c, d) {
      c !== d && (o.flags |= 4)
    }))
  function fs(r, o) {
    if (!It)
      switch (r.tailMode) {
        case 'hidden':
          o = r.tail
          for (var c = null; o !== null; ) (o.alternate !== null && (c = o), (o = o.sibling))
          c === null ? (r.tail = null) : (c.sibling = null)
          break
        case 'collapsed':
          c = r.tail
          for (var d = null; c !== null; ) (c.alternate !== null && (d = c), (c = c.sibling))
          d === null
            ? o || r.tail === null
              ? (r.tail = null)
              : (r.tail.sibling = null)
            : (d.sibling = null)
      }
  }
  function ce(r) {
    var o = r.alternate !== null && r.alternate.child === r.child,
      c = 0,
      d = 0
    if (o)
      for (var g = r.child; g !== null; )
        ((c |= g.lanes | g.childLanes),
          (d |= g.subtreeFlags & 14680064),
          (d |= g.flags & 14680064),
          (g.return = r),
          (g = g.sibling))
    else
      for (g = r.child; g !== null; )
        ((c |= g.lanes | g.childLanes),
          (d |= g.subtreeFlags),
          (d |= g.flags),
          (g.return = r),
          (g = g.sibling))
    return ((r.subtreeFlags |= d), (r.childLanes = c), o)
  }
  function Xx(r, o, c) {
    var d = o.pendingProps
    switch ((Mu(o), o.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (ce(o), null)
      case 1:
        return (Se(o.type) && Oo(), ce(o), null)
      case 3:
        return (
          (d = o.stateNode),
          fr(),
          At(we),
          At(le),
          Nu(),
          d.pendingContext && ((d.context = d.pendingContext), (d.pendingContext = null)),
          (r === null || r.child === null) &&
            (Fo(o)
              ? (o.flags |= 4)
              : r === null ||
                (r.memoizedState.isDehydrated && (o.flags & 256) === 0) ||
                ((o.flags |= 1024), Xe !== null && (gc(Xe), (Xe = null)))),
          sc(r, o),
          ce(o),
          null
        )
      case 5:
        zu(o)
        var g = wi(os.current)
        if (((c = o.type), r !== null && o.stateNode != null))
          (Gp(r, o, c, d, g), r.ref !== o.ref && ((o.flags |= 512), (o.flags |= 2097152)))
        else {
          if (!d) {
            if (o.stateNode === null) throw Error(n(166))
            return (ce(o), null)
          }
          if (((r = wi(en.current)), Fo(o))) {
            ;((d = o.stateNode), (c = o.type))
            var v = o.memoizedProps
            switch (((d[tn] = o), (d[es] = v), (r = (o.mode & 1) !== 0), c)) {
              case 'dialog':
                ;(Dt('cancel', d), Dt('close', d))
                break
              case 'iframe':
              case 'object':
              case 'embed':
                Dt('load', d)
                break
              case 'video':
              case 'audio':
                for (g = 0; g < Zr.length; g++) Dt(Zr[g], d)
                break
              case 'source':
                Dt('error', d)
                break
              case 'img':
              case 'image':
              case 'link':
                ;(Dt('error', d), Dt('load', d))
                break
              case 'details':
                Dt('toggle', d)
                break
              case 'input':
                ;(Oh(d, v), Dt('invalid', d))
                break
              case 'select':
                ;((d._wrapperState = { wasMultiple: !!v.multiple }), Dt('invalid', d))
                break
              case 'textarea':
                ;(Ah(d, v), Dt('invalid', d))
            }
            ;(Bl(c, v), (g = null))
            for (var b in v)
              if (v.hasOwnProperty(b)) {
                var M = v[b]
                b === 'children'
                  ? typeof M == 'string'
                    ? d.textContent !== M &&
                      (v.suppressHydrationWarning !== !0 && Mo(d.textContent, M, r),
                      (g = ['children', M]))
                    : typeof M == 'number' &&
                      d.textContent !== '' + M &&
                      (v.suppressHydrationWarning !== !0 && Mo(d.textContent, M, r),
                      (g = ['children', '' + M]))
                  : s.hasOwnProperty(b) && M != null && b === 'onScroll' && Dt('scroll', d)
              }
            switch (c) {
              case 'input':
                ;(ee(d), Dh(d, v, !0))
                break
              case 'textarea':
                ;(ee(d), Fh(d))
                break
              case 'select':
              case 'option':
                break
              default:
                typeof v.onClick == 'function' && (d.onclick = To)
            }
            ;((d = g), (o.updateQueue = d), d !== null && (o.flags |= 4))
          } else {
            ;((b = g.nodeType === 9 ? g : g.ownerDocument),
              r === 'http://www.w3.org/1999/xhtml' && (r = Ih(c)),
              r === 'http://www.w3.org/1999/xhtml'
                ? c === 'script'
                  ? ((r = b.createElement('div')),
                    (r.innerHTML = '<script><\/script>'),
                    (r = r.removeChild(r.firstChild)))
                  : typeof d.is == 'string'
                    ? (r = b.createElement(c, { is: d.is }))
                    : ((r = b.createElement(c)),
                      c === 'select' &&
                        ((b = r), d.multiple ? (b.multiple = !0) : d.size && (b.size = d.size)))
                : (r = b.createElementNS(r, c)),
              (r[tn] = o),
              (r[es] = d),
              Kp(r, o, !1, !1),
              (o.stateNode = r))
            t: {
              switch (((b = Nl(c, d)), c)) {
                case 'dialog':
                  ;(Dt('cancel', r), Dt('close', r), (g = d))
                  break
                case 'iframe':
                case 'object':
                case 'embed':
                  ;(Dt('load', r), (g = d))
                  break
                case 'video':
                case 'audio':
                  for (g = 0; g < Zr.length; g++) Dt(Zr[g], r)
                  g = d
                  break
                case 'source':
                  ;(Dt('error', r), (g = d))
                  break
                case 'img':
                case 'image':
                case 'link':
                  ;(Dt('error', r), Dt('load', r), (g = d))
                  break
                case 'details':
                  ;(Dt('toggle', r), (g = d))
                  break
                case 'input':
                  ;(Oh(r, d), (g = Rl(r, d)), Dt('invalid', r))
                  break
                case 'option':
                  g = d
                  break
                case 'select':
                  ;((r._wrapperState = { wasMultiple: !!d.multiple }),
                    (g = Z({}, d, { value: void 0 })),
                    Dt('invalid', r))
                  break
                case 'textarea':
                  ;(Ah(r, d), (g = Vl(r, d)), Dt('invalid', r))
                  break
                default:
                  g = d
              }
              ;(Bl(c, g), (M = g))
              for (v in M)
                if (M.hasOwnProperty(v)) {
                  var O = M[v]
                  v === 'style'
                    ? Bh(r, O)
                    : v === 'dangerouslySetInnerHTML'
                      ? ((O = O ? O.__html : void 0), O != null && Vh(r, O))
                      : v === 'children'
                        ? typeof O == 'string'
                          ? (c !== 'textarea' || O !== '') && Ar(r, O)
                          : typeof O == 'number' && Ar(r, '' + O)
                        : v !== 'suppressContentEditableWarning' &&
                          v !== 'suppressHydrationWarning' &&
                          v !== 'autoFocus' &&
                          (s.hasOwnProperty(v)
                            ? O != null && v === 'onScroll' && Dt('scroll', r)
                            : O != null && C(r, v, O, b))
                }
              switch (c) {
                case 'input':
                  ;(ee(r), Dh(r, d, !1))
                  break
                case 'textarea':
                  ;(ee(r), Fh(r))
                  break
                case 'option':
                  d.value != null && r.setAttribute('value', '' + ct(d.value))
                  break
                case 'select':
                  ;((r.multiple = !!d.multiple),
                    (v = d.value),
                    v != null
                      ? Yi(r, !!d.multiple, v, !1)
                      : d.defaultValue != null && Yi(r, !!d.multiple, d.defaultValue, !0))
                  break
                default:
                  typeof g.onClick == 'function' && (r.onclick = To)
              }
              switch (c) {
                case 'button':
                case 'input':
                case 'select':
                case 'textarea':
                  d = !!d.autoFocus
                  break t
                case 'img':
                  d = !0
                  break t
                default:
                  d = !1
              }
            }
            d && (o.flags |= 4)
          }
          o.ref !== null && ((o.flags |= 512), (o.flags |= 2097152))
        }
        return (ce(o), null)
      case 6:
        if (r && o.stateNode != null) qp(r, o, r.memoizedProps, d)
        else {
          if (typeof d != 'string' && o.stateNode === null) throw Error(n(166))
          if (((c = wi(os.current)), wi(en.current), Fo(o))) {
            if (
              ((d = o.stateNode),
              (c = o.memoizedProps),
              (d[tn] = o),
              (v = d.nodeValue !== c) && ((r = Le), r !== null))
            )
              switch (r.tag) {
                case 3:
                  Mo(d.nodeValue, c, (r.mode & 1) !== 0)
                  break
                case 5:
                  r.memoizedProps.suppressHydrationWarning !== !0 &&
                    Mo(d.nodeValue, c, (r.mode & 1) !== 0)
              }
            v && (o.flags |= 4)
          } else
            ((d = (c.nodeType === 9 ? c : c.ownerDocument).createTextNode(d)),
              (d[tn] = o),
              (o.stateNode = d))
        }
        return (ce(o), null)
      case 13:
        if (
          (At(Nt),
          (d = o.memoizedState),
          r === null || (r.memoizedState !== null && r.memoizedState.dehydrated !== null))
        ) {
          if (It && De !== null && (o.mode & 1) !== 0 && (o.flags & 128) === 0)
            (Jd(), ar(), (o.flags |= 98560), (v = !1))
          else if (((v = Fo(o)), d !== null && d.dehydrated !== null)) {
            if (r === null) {
              if (!v) throw Error(n(318))
              if (((v = o.memoizedState), (v = v !== null ? v.dehydrated : null), !v))
                throw Error(n(317))
              v[tn] = o
            } else (ar(), (o.flags & 128) === 0 && (o.memoizedState = null), (o.flags |= 4))
            ;(ce(o), (v = !1))
          } else (Xe !== null && (gc(Xe), (Xe = null)), (v = !0))
          if (!v) return o.flags & 65536 ? o : null
        }
        return (o.flags & 128) !== 0
          ? ((o.lanes = c), o)
          : ((d = d !== null),
            d !== (r !== null && r.memoizedState !== null) &&
              d &&
              ((o.child.flags |= 8192),
              (o.mode & 1) !== 0 &&
                (r === null || (Nt.current & 1) !== 0 ? Jt === 0 && (Jt = 3) : xc())),
            o.updateQueue !== null && (o.flags |= 4),
            ce(o),
            null)
      case 4:
        return (fr(), sc(r, o), r === null && Jr(o.stateNode.containerInfo), ce(o), null)
      case 10:
        return (Au(o.type._context), ce(o), null)
      case 17:
        return (Se(o.type) && Oo(), ce(o), null)
      case 19:
        if ((At(Nt), (v = o.memoizedState), v === null)) return (ce(o), null)
        if (((d = (o.flags & 128) !== 0), (b = v.rendering), b === null))
          if (d) fs(v, !1)
          else {
            if (Jt !== 0 || (r !== null && (r.flags & 128) !== 0))
              for (r = o.child; r !== null; ) {
                if (((b = jo(r)), b !== null)) {
                  for (
                    o.flags |= 128,
                      fs(v, !1),
                      d = b.updateQueue,
                      d !== null && ((o.updateQueue = d), (o.flags |= 4)),
                      o.subtreeFlags = 0,
                      d = c,
                      c = o.child;
                    c !== null;

                  )
                    ((v = c),
                      (r = d),
                      (v.flags &= 14680066),
                      (b = v.alternate),
                      b === null
                        ? ((v.childLanes = 0),
                          (v.lanes = r),
                          (v.child = null),
                          (v.subtreeFlags = 0),
                          (v.memoizedProps = null),
                          (v.memoizedState = null),
                          (v.updateQueue = null),
                          (v.dependencies = null),
                          (v.stateNode = null))
                        : ((v.childLanes = b.childLanes),
                          (v.lanes = b.lanes),
                          (v.child = b.child),
                          (v.subtreeFlags = 0),
                          (v.deletions = null),
                          (v.memoizedProps = b.memoizedProps),
                          (v.memoizedState = b.memoizedState),
                          (v.updateQueue = b.updateQueue),
                          (v.type = b.type),
                          (r = b.dependencies),
                          (v.dependencies =
                            r === null ? null : { lanes: r.lanes, firstContext: r.firstContext })),
                      (c = c.sibling))
                  return (Ot(Nt, (Nt.current & 1) | 2), o.child)
                }
                r = r.sibling
              }
            v.tail !== null &&
              $t() > mr &&
              ((o.flags |= 128), (d = !0), fs(v, !1), (o.lanes = 4194304))
          }
        else {
          if (!d)
            if (((r = jo(b)), r !== null)) {
              if (
                ((o.flags |= 128),
                (d = !0),
                (c = r.updateQueue),
                c !== null && ((o.updateQueue = c), (o.flags |= 4)),
                fs(v, !0),
                v.tail === null && v.tailMode === 'hidden' && !b.alternate && !It)
              )
                return (ce(o), null)
            } else
              2 * $t() - v.renderingStartTime > mr &&
                c !== 1073741824 &&
                ((o.flags |= 128), (d = !0), fs(v, !1), (o.lanes = 4194304))
          v.isBackwards
            ? ((b.sibling = o.child), (o.child = b))
            : ((c = v.last), c !== null ? (c.sibling = b) : (o.child = b), (v.last = b))
        }
        return v.tail !== null
          ? ((o = v.tail),
            (v.rendering = o),
            (v.tail = o.sibling),
            (v.renderingStartTime = $t()),
            (o.sibling = null),
            (c = Nt.current),
            Ot(Nt, d ? (c & 1) | 2 : c & 1),
            o)
          : (ce(o), null)
      case 22:
      case 23:
        return (
          vc(),
          (d = o.memoizedState !== null),
          r !== null && (r.memoizedState !== null) !== d && (o.flags |= 8192),
          d && (o.mode & 1) !== 0
            ? (Ae & 1073741824) !== 0 && (ce(o), o.subtreeFlags & 6 && (o.flags |= 8192))
            : ce(o),
          null
        )
      case 24:
        return null
      case 25:
        return null
    }
    throw Error(n(156, o.tag))
  }
  function Kx(r, o) {
    switch ((Mu(o), o.tag)) {
      case 1:
        return (
          Se(o.type) && Oo(),
          (r = o.flags),
          r & 65536 ? ((o.flags = (r & -65537) | 128), o) : null
        )
      case 3:
        return (
          fr(),
          At(we),
          At(le),
          Nu(),
          (r = o.flags),
          (r & 65536) !== 0 && (r & 128) === 0 ? ((o.flags = (r & -65537) | 128), o) : null
        )
      case 5:
        return (zu(o), null)
      case 13:
        if ((At(Nt), (r = o.memoizedState), r !== null && r.dehydrated !== null)) {
          if (o.alternate === null) throw Error(n(340))
          ar()
        }
        return ((r = o.flags), r & 65536 ? ((o.flags = (r & -65537) | 128), o) : null)
      case 19:
        return (At(Nt), null)
      case 4:
        return (fr(), null)
      case 10:
        return (Au(o.type._context), null)
      case 22:
      case 23:
        return (vc(), null)
      case 24:
        return null
      default:
        return null
    }
  }
  var qo = !1,
    fe = !1,
    Gx = typeof WeakSet == 'function' ? WeakSet : Set,
    nt = null
  function dr(r, o) {
    var c = r.ref
    if (c !== null)
      if (typeof c == 'function')
        try {
          c(null)
        } catch (d) {
          Wt(r, o, d)
        }
      else c.current = null
  }
  function oc(r, o, c) {
    try {
      c()
    } catch (d) {
      Wt(r, o, d)
    }
  }
  var Qp = !1
  function qx(r, o) {
    if (((vu = go), (r = Ed()), cu(r))) {
      if ('selectionStart' in r) var c = { start: r.selectionStart, end: r.selectionEnd }
      else
        t: {
          c = ((c = r.ownerDocument) && c.defaultView) || window
          var d = c.getSelection && c.getSelection()
          if (d && d.rangeCount !== 0) {
            c = d.anchorNode
            var g = d.anchorOffset,
              v = d.focusNode
            d = d.focusOffset
            try {
              ;(c.nodeType, v.nodeType)
            } catch {
              c = null
              break t
            }
            var b = 0,
              M = -1,
              O = -1,
              B = 0,
              X = 0,
              G = r,
              Y = null
            e: for (;;) {
              for (
                var et;
                G !== c || (g !== 0 && G.nodeType !== 3) || (M = b + g),
                  G !== v || (d !== 0 && G.nodeType !== 3) || (O = b + d),
                  G.nodeType === 3 && (b += G.nodeValue.length),
                  (et = G.firstChild) !== null;

              )
                ((Y = G), (G = et))
              for (;;) {
                if (G === r) break e
                if (
                  (Y === c && ++B === g && (M = b),
                  Y === v && ++X === d && (O = b),
                  (et = G.nextSibling) !== null)
                )
                  break
                ;((G = Y), (Y = G.parentNode))
              }
              G = et
            }
            c = M === -1 || O === -1 ? null : { start: M, end: O }
          } else c = null
        }
      c = c || { start: 0, end: 0 }
    } else c = null
    for (xu = { focusedElem: r, selectionRange: c }, go = !1, nt = o; nt !== null; )
      if (((o = nt), (r = o.child), (o.subtreeFlags & 1028) !== 0 && r !== null))
        ((r.return = o), (nt = r))
      else
        for (; nt !== null; ) {
          o = nt
          try {
            var it = o.alternate
            if ((o.flags & 1024) !== 0)
              switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  break
                case 1:
                  if (it !== null) {
                    var ot = it.memoizedProps,
                      Yt = it.memoizedState,
                      I = o.stateNode,
                      D = I.getSnapshotBeforeUpdate(
                        o.elementType === o.type ? ot : Ke(o.type, ot),
                        Yt
                      )
                    I.__reactInternalSnapshotBeforeUpdate = D
                  }
                  break
                case 3:
                  var z = o.stateNode.containerInfo
                  z.nodeType === 1
                    ? (z.textContent = '')
                    : z.nodeType === 9 && z.documentElement && z.removeChild(z.documentElement)
                  break
                case 5:
                case 6:
                case 4:
                case 17:
                  break
                default:
                  throw Error(n(163))
              }
          } catch (Q) {
            Wt(o, o.return, Q)
          }
          if (((r = o.sibling), r !== null)) {
            ;((r.return = o.return), (nt = r))
            break
          }
          nt = o.return
        }
    return ((it = Qp), (Qp = !1), it)
  }
  function hs(r, o, c) {
    var d = o.updateQueue
    if (((d = d !== null ? d.lastEffect : null), d !== null)) {
      var g = (d = d.next)
      do {
        if ((g.tag & r) === r) {
          var v = g.destroy
          ;((g.destroy = void 0), v !== void 0 && oc(o, c, v))
        }
        g = g.next
      } while (g !== d)
    }
  }
  function Qo(r, o) {
    if (((o = o.updateQueue), (o = o !== null ? o.lastEffect : null), o !== null)) {
      var c = (o = o.next)
      do {
        if ((c.tag & r) === r) {
          var d = c.create
          c.destroy = d()
        }
        c = c.next
      } while (c !== o)
    }
  }
  function ac(r) {
    var o = r.ref
    if (o !== null) {
      var c = r.stateNode
      switch (r.tag) {
        case 5:
          r = c
          break
        default:
          r = c
      }
      typeof o == 'function' ? o(r) : (o.current = r)
    }
  }
  function Zp(r) {
    var o = r.alternate
    ;(o !== null && ((r.alternate = null), Zp(o)),
      (r.child = null),
      (r.deletions = null),
      (r.sibling = null),
      r.tag === 5 &&
        ((o = r.stateNode),
        o !== null && (delete o[tn], delete o[es], delete o[bu], delete o[Dx], delete o[Ax])),
      (r.stateNode = null),
      (r.return = null),
      (r.dependencies = null),
      (r.memoizedProps = null),
      (r.memoizedState = null),
      (r.pendingProps = null),
      (r.stateNode = null),
      (r.updateQueue = null))
  }
  function Jp(r) {
    return r.tag === 5 || r.tag === 3 || r.tag === 4
  }
  function tm(r) {
    t: for (;;) {
      for (; r.sibling === null; ) {
        if (r.return === null || Jp(r.return)) return null
        r = r.return
      }
      for (
        r.sibling.return = r.return, r = r.sibling;
        r.tag !== 5 && r.tag !== 6 && r.tag !== 18;

      ) {
        if (r.flags & 2 || r.child === null || r.tag === 4) continue t
        ;((r.child.return = r), (r = r.child))
      }
      if (!(r.flags & 2)) return r.stateNode
    }
  }
  function lc(r, o, c) {
    var d = r.tag
    if (d === 5 || d === 6)
      ((r = r.stateNode),
        o
          ? c.nodeType === 8
            ? c.parentNode.insertBefore(r, o)
            : c.insertBefore(r, o)
          : (c.nodeType === 8
              ? ((o = c.parentNode), o.insertBefore(r, c))
              : ((o = c), o.appendChild(r)),
            (c = c._reactRootContainer),
            c != null || o.onclick !== null || (o.onclick = To)))
    else if (d !== 4 && ((r = r.child), r !== null))
      for (lc(r, o, c), r = r.sibling; r !== null; ) (lc(r, o, c), (r = r.sibling))
  }
  function uc(r, o, c) {
    var d = r.tag
    if (d === 5 || d === 6) ((r = r.stateNode), o ? c.insertBefore(r, o) : c.appendChild(r))
    else if (d !== 4 && ((r = r.child), r !== null))
      for (uc(r, o, c), r = r.sibling; r !== null; ) (uc(r, o, c), (r = r.sibling))
  }
  var oe = null,
    Ge = !1
  function Un(r, o, c) {
    for (c = c.child; c !== null; ) (em(r, o, c), (c = c.sibling))
  }
  function em(r, o, c) {
    if (Je && typeof Je.onCommitFiberUnmount == 'function')
      try {
        Je.onCommitFiberUnmount(uo, c)
      } catch {}
    switch (c.tag) {
      case 5:
        fe || dr(c, o)
      case 6:
        var d = oe,
          g = Ge
        ;((oe = null),
          Un(r, o, c),
          (oe = d),
          (Ge = g),
          oe !== null &&
            (Ge
              ? ((r = oe),
                (c = c.stateNode),
                r.nodeType === 8 ? r.parentNode.removeChild(c) : r.removeChild(c))
              : oe.removeChild(c.stateNode)))
        break
      case 18:
        oe !== null &&
          (Ge
            ? ((r = oe),
              (c = c.stateNode),
              r.nodeType === 8 ? Su(r.parentNode, c) : r.nodeType === 1 && Su(r, c),
              Ur(r))
            : Su(oe, c.stateNode))
        break
      case 4:
        ;((d = oe),
          (g = Ge),
          (oe = c.stateNode.containerInfo),
          (Ge = !0),
          Un(r, o, c),
          (oe = d),
          (Ge = g))
        break
      case 0:
      case 11:
      case 14:
      case 15:
        if (!fe && ((d = c.updateQueue), d !== null && ((d = d.lastEffect), d !== null))) {
          g = d = d.next
          do {
            var v = g,
              b = v.destroy
            ;((v = v.tag),
              b !== void 0 && ((v & 2) !== 0 || (v & 4) !== 0) && oc(c, o, b),
              (g = g.next))
          } while (g !== d)
        }
        Un(r, o, c)
        break
      case 1:
        if (!fe && (dr(c, o), (d = c.stateNode), typeof d.componentWillUnmount == 'function'))
          try {
            ;((d.props = c.memoizedProps), (d.state = c.memoizedState), d.componentWillUnmount())
          } catch (M) {
            Wt(c, o, M)
          }
        Un(r, o, c)
        break
      case 21:
        Un(r, o, c)
        break
      case 22:
        c.mode & 1
          ? ((fe = (d = fe) || c.memoizedState !== null), Un(r, o, c), (fe = d))
          : Un(r, o, c)
        break
      default:
        Un(r, o, c)
    }
  }
  function nm(r) {
    var o = r.updateQueue
    if (o !== null) {
      r.updateQueue = null
      var c = r.stateNode
      ;(c === null && (c = r.stateNode = new Gx()),
        o.forEach(function (d) {
          var g = s_.bind(null, r, d)
          c.has(d) || (c.add(d), d.then(g, g))
        }))
    }
  }
  function qe(r, o) {
    var c = o.deletions
    if (c !== null)
      for (var d = 0; d < c.length; d++) {
        var g = c[d]
        try {
          var v = r,
            b = o,
            M = b
          t: for (; M !== null; ) {
            switch (M.tag) {
              case 5:
                ;((oe = M.stateNode), (Ge = !1))
                break t
              case 3:
                ;((oe = M.stateNode.containerInfo), (Ge = !0))
                break t
              case 4:
                ;((oe = M.stateNode.containerInfo), (Ge = !0))
                break t
            }
            M = M.return
          }
          if (oe === null) throw Error(n(160))
          ;(em(v, b, g), (oe = null), (Ge = !1))
          var O = g.alternate
          ;(O !== null && (O.return = null), (g.return = null))
        } catch (B) {
          Wt(g, o, B)
        }
      }
    if (o.subtreeFlags & 12854) for (o = o.child; o !== null; ) (im(o, r), (o = o.sibling))
  }
  function im(r, o) {
    var c = r.alternate,
      d = r.flags
    switch (r.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((qe(o, r), rn(r), d & 4)) {
          try {
            ;(hs(3, r, r.return), Qo(3, r))
          } catch (ot) {
            Wt(r, r.return, ot)
          }
          try {
            hs(5, r, r.return)
          } catch (ot) {
            Wt(r, r.return, ot)
          }
        }
        break
      case 1:
        ;(qe(o, r), rn(r), d & 512 && c !== null && dr(c, c.return))
        break
      case 5:
        if ((qe(o, r), rn(r), d & 512 && c !== null && dr(c, c.return), r.flags & 32)) {
          var g = r.stateNode
          try {
            Ar(g, '')
          } catch (ot) {
            Wt(r, r.return, ot)
          }
        }
        if (d & 4 && ((g = r.stateNode), g != null)) {
          var v = r.memoizedProps,
            b = c !== null ? c.memoizedProps : v,
            M = r.type,
            O = r.updateQueue
          if (((r.updateQueue = null), O !== null))
            try {
              ;(M === 'input' && v.type === 'radio' && v.name != null && Lh(g, v), Nl(M, b))
              var B = Nl(M, v)
              for (b = 0; b < O.length; b += 2) {
                var X = O[b],
                  G = O[b + 1]
                X === 'style'
                  ? Bh(g, G)
                  : X === 'dangerouslySetInnerHTML'
                    ? Vh(g, G)
                    : X === 'children'
                      ? Ar(g, G)
                      : C(g, X, G, B)
              }
              switch (M) {
                case 'input':
                  Fl(g, v)
                  break
                case 'textarea':
                  Rh(g, v)
                  break
                case 'select':
                  var Y = g._wrapperState.wasMultiple
                  g._wrapperState.wasMultiple = !!v.multiple
                  var et = v.value
                  et != null
                    ? Yi(g, !!v.multiple, et, !1)
                    : Y !== !!v.multiple &&
                      (v.defaultValue != null
                        ? Yi(g, !!v.multiple, v.defaultValue, !0)
                        : Yi(g, !!v.multiple, v.multiple ? [] : '', !1))
              }
              g[es] = v
            } catch (ot) {
              Wt(r, r.return, ot)
            }
        }
        break
      case 6:
        if ((qe(o, r), rn(r), d & 4)) {
          if (r.stateNode === null) throw Error(n(162))
          ;((g = r.stateNode), (v = r.memoizedProps))
          try {
            g.nodeValue = v
          } catch (ot) {
            Wt(r, r.return, ot)
          }
        }
        break
      case 3:
        if ((qe(o, r), rn(r), d & 4 && c !== null && c.memoizedState.isDehydrated))
          try {
            Ur(o.containerInfo)
          } catch (ot) {
            Wt(r, r.return, ot)
          }
        break
      case 4:
        ;(qe(o, r), rn(r))
        break
      case 13:
        ;(qe(o, r),
          rn(r),
          (g = r.child),
          g.flags & 8192 &&
            ((v = g.memoizedState !== null),
            (g.stateNode.isHidden = v),
            !v || (g.alternate !== null && g.alternate.memoizedState !== null) || (hc = $t())),
          d & 4 && nm(r))
        break
      case 22:
        if (
          ((X = c !== null && c.memoizedState !== null),
          r.mode & 1 ? ((fe = (B = fe) || X), qe(o, r), (fe = B)) : qe(o, r),
          rn(r),
          d & 8192)
        ) {
          if (
            ((B = r.memoizedState !== null), (r.stateNode.isHidden = B) && !X && (r.mode & 1) !== 0)
          )
            for (nt = r, X = r.child; X !== null; ) {
              for (G = nt = X; nt !== null; ) {
                switch (((Y = nt), (et = Y.child), Y.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    hs(4, Y, Y.return)
                    break
                  case 1:
                    dr(Y, Y.return)
                    var it = Y.stateNode
                    if (typeof it.componentWillUnmount == 'function') {
                      ;((d = Y), (c = Y.return))
                      try {
                        ;((o = d),
                          (it.props = o.memoizedProps),
                          (it.state = o.memoizedState),
                          it.componentWillUnmount())
                      } catch (ot) {
                        Wt(d, c, ot)
                      }
                    }
                    break
                  case 5:
                    dr(Y, Y.return)
                    break
                  case 22:
                    if (Y.memoizedState !== null) {
                      om(G)
                      continue
                    }
                }
                et !== null ? ((et.return = Y), (nt = et)) : om(G)
              }
              X = X.sibling
            }
          t: for (X = null, G = r; ; ) {
            if (G.tag === 5) {
              if (X === null) {
                X = G
                try {
                  ;((g = G.stateNode),
                    B
                      ? ((v = g.style),
                        typeof v.setProperty == 'function'
                          ? v.setProperty('display', 'none', 'important')
                          : (v.display = 'none'))
                      : ((M = G.stateNode),
                        (O = G.memoizedProps.style),
                        (b = O != null && O.hasOwnProperty('display') ? O.display : null),
                        (M.style.display = zh('display', b))))
                } catch (ot) {
                  Wt(r, r.return, ot)
                }
              }
            } else if (G.tag === 6) {
              if (X === null)
                try {
                  G.stateNode.nodeValue = B ? '' : G.memoizedProps
                } catch (ot) {
                  Wt(r, r.return, ot)
                }
            } else if (
              ((G.tag !== 22 && G.tag !== 23) || G.memoizedState === null || G === r) &&
              G.child !== null
            ) {
              ;((G.child.return = G), (G = G.child))
              continue
            }
            if (G === r) break t
            for (; G.sibling === null; ) {
              if (G.return === null || G.return === r) break t
              ;(X === G && (X = null), (G = G.return))
            }
            ;(X === G && (X = null), (G.sibling.return = G.return), (G = G.sibling))
          }
        }
        break
      case 19:
        ;(qe(o, r), rn(r), d & 4 && nm(r))
        break
      case 21:
        break
      default:
        ;(qe(o, r), rn(r))
    }
  }
  function rn(r) {
    var o = r.flags
    if (o & 2) {
      try {
        t: {
          for (var c = r.return; c !== null; ) {
            if (Jp(c)) {
              var d = c
              break t
            }
            c = c.return
          }
          throw Error(n(160))
        }
        switch (d.tag) {
          case 5:
            var g = d.stateNode
            d.flags & 32 && (Ar(g, ''), (d.flags &= -33))
            var v = tm(r)
            uc(r, v, g)
            break
          case 3:
          case 4:
            var b = d.stateNode.containerInfo,
              M = tm(r)
            lc(r, M, b)
            break
          default:
            throw Error(n(161))
        }
      } catch (O) {
        Wt(r, r.return, O)
      }
      r.flags &= -3
    }
    o & 4096 && (r.flags &= -4097)
  }
  function Qx(r, o, c) {
    ;((nt = r), rm(r))
  }
  function rm(r, o, c) {
    for (var d = (r.mode & 1) !== 0; nt !== null; ) {
      var g = nt,
        v = g.child
      if (g.tag === 22 && d) {
        var b = g.memoizedState !== null || qo
        if (!b) {
          var M = g.alternate,
            O = (M !== null && M.memoizedState !== null) || fe
          M = qo
          var B = fe
          if (((qo = b), (fe = O) && !B))
            for (nt = g; nt !== null; )
              ((b = nt),
                (O = b.child),
                b.tag === 22 && b.memoizedState !== null
                  ? am(g)
                  : O !== null
                    ? ((O.return = b), (nt = O))
                    : am(g))
          for (; v !== null; ) ((nt = v), rm(v), (v = v.sibling))
          ;((nt = g), (qo = M), (fe = B))
        }
        sm(r)
      } else (g.subtreeFlags & 8772) !== 0 && v !== null ? ((v.return = g), (nt = v)) : sm(r)
    }
  }
  function sm(r) {
    for (; nt !== null; ) {
      var o = nt
      if ((o.flags & 8772) !== 0) {
        var c = o.alternate
        try {
          if ((o.flags & 8772) !== 0)
            switch (o.tag) {
              case 0:
              case 11:
              case 15:
                fe || Qo(5, o)
                break
              case 1:
                var d = o.stateNode
                if (o.flags & 4 && !fe)
                  if (c === null) d.componentDidMount()
                  else {
                    var g = o.elementType === o.type ? c.memoizedProps : Ke(o.type, c.memoizedProps)
                    d.componentDidUpdate(g, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate)
                  }
                var v = o.updateQueue
                v !== null && op(o, v, d)
                break
              case 3:
                var b = o.updateQueue
                if (b !== null) {
                  if (((c = null), o.child !== null))
                    switch (o.child.tag) {
                      case 5:
                        c = o.child.stateNode
                        break
                      case 1:
                        c = o.child.stateNode
                    }
                  op(o, b, c)
                }
                break
              case 5:
                var M = o.stateNode
                if (c === null && o.flags & 4) {
                  c = M
                  var O = o.memoizedProps
                  switch (o.type) {
                    case 'button':
                    case 'input':
                    case 'select':
                    case 'textarea':
                      O.autoFocus && c.focus()
                      break
                    case 'img':
                      O.src && (c.src = O.src)
                  }
                }
                break
              case 6:
                break
              case 4:
                break
              case 12:
                break
              case 13:
                if (o.memoizedState === null) {
                  var B = o.alternate
                  if (B !== null) {
                    var X = B.memoizedState
                    if (X !== null) {
                      var G = X.dehydrated
                      G !== null && Ur(G)
                    }
                  }
                }
                break
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break
              default:
                throw Error(n(163))
            }
          fe || (o.flags & 512 && ac(o))
        } catch (Y) {
          Wt(o, o.return, Y)
        }
      }
      if (o === r) {
        nt = null
        break
      }
      if (((c = o.sibling), c !== null)) {
        ;((c.return = o.return), (nt = c))
        break
      }
      nt = o.return
    }
  }
  function om(r) {
    for (; nt !== null; ) {
      var o = nt
      if (o === r) {
        nt = null
        break
      }
      var c = o.sibling
      if (c !== null) {
        ;((c.return = o.return), (nt = c))
        break
      }
      nt = o.return
    }
  }
  function am(r) {
    for (; nt !== null; ) {
      var o = nt
      try {
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            var c = o.return
            try {
              Qo(4, o)
            } catch (O) {
              Wt(o, c, O)
            }
            break
          case 1:
            var d = o.stateNode
            if (typeof d.componentDidMount == 'function') {
              var g = o.return
              try {
                d.componentDidMount()
              } catch (O) {
                Wt(o, g, O)
              }
            }
            var v = o.return
            try {
              ac(o)
            } catch (O) {
              Wt(o, v, O)
            }
            break
          case 5:
            var b = o.return
            try {
              ac(o)
            } catch (O) {
              Wt(o, b, O)
            }
        }
      } catch (O) {
        Wt(o, o.return, O)
      }
      if (o === r) {
        nt = null
        break
      }
      var M = o.sibling
      if (M !== null) {
        ;((M.return = o.return), (nt = M))
        break
      }
      nt = o.return
    }
  }
  var Zx = Math.ceil,
    Zo = T.ReactCurrentDispatcher,
    cc = T.ReactCurrentOwner,
    Ne = T.ReactCurrentBatchConfig,
    bt = 0,
    ie = null,
    qt = null,
    ae = 0,
    Ae = 0,
    pr = Bn(0),
    Jt = 0,
    ds = null,
    bi = 0,
    Jo = 0,
    fc = 0,
    ps = null,
    ke = null,
    hc = 0,
    mr = 1 / 0,
    yn = null,
    ta = !1,
    dc = null,
    $n = null,
    ea = !1,
    Yn = null,
    na = 0,
    ms = 0,
    pc = null,
    ia = -1,
    ra = 0
  function ve() {
    return (bt & 6) !== 0 ? $t() : ia !== -1 ? ia : (ia = $t())
  }
  function Xn(r) {
    return (r.mode & 1) === 0
      ? 1
      : (bt & 2) !== 0 && ae !== 0
        ? ae & -ae
        : Fx.transition !== null
          ? (ra === 0 && (ra = td()), ra)
          : ((r = Ct), r !== 0 || ((r = window.event), (r = r === void 0 ? 16 : ud(r.type))), r)
  }
  function Qe(r, o, c, d) {
    if (50 < ms) throw ((ms = 0), (pc = null), Error(n(185)))
    ;(Br(r, c, d),
      ((bt & 2) === 0 || r !== ie) &&
        (r === ie && ((bt & 2) === 0 && (Jo |= c), Jt === 4 && Kn(r, ae)),
        Pe(r, d),
        c === 1 && bt === 0 && (o.mode & 1) === 0 && ((mr = $t() + 500), Do && jn())))
  }
  function Pe(r, o) {
    var c = r.callbackNode
    F2(r, o)
    var d = ho(r, r === ie ? ae : 0)
    if (d === 0) (c !== null && Qh(c), (r.callbackNode = null), (r.callbackPriority = 0))
    else if (((o = d & -d), r.callbackPriority !== o)) {
      if ((c != null && Qh(c), o === 1))
        (r.tag === 0 ? Rx(um.bind(null, r)) : Kd(um.bind(null, r)),
          Ox(function () {
            ;(bt & 6) === 0 && jn()
          }),
          (c = null))
      else {
        switch (ed(d)) {
          case 1:
            c = Xl
            break
          case 4:
            c = Zh
            break
          case 16:
            c = lo
            break
          case 536870912:
            c = Jh
            break
          default:
            c = lo
        }
        c = ym(c, lm.bind(null, r))
      }
      ;((r.callbackPriority = o), (r.callbackNode = c))
    }
  }
  function lm(r, o) {
    if (((ia = -1), (ra = 0), (bt & 6) !== 0)) throw Error(n(327))
    var c = r.callbackNode
    if (gr() && r.callbackNode !== c) return null
    var d = ho(r, r === ie ? ae : 0)
    if (d === 0) return null
    if ((d & 30) !== 0 || (d & r.expiredLanes) !== 0 || o) o = sa(r, d)
    else {
      o = d
      var g = bt
      bt |= 2
      var v = fm()
      ;(ie !== r || ae !== o) && ((yn = null), (mr = $t() + 500), Pi(r, o))
      do
        try {
          e_()
          break
        } catch (M) {
          cm(r, M)
        }
      while (!0)
      ;(Du(), (Zo.current = v), (bt = g), qt !== null ? (o = 0) : ((ie = null), (ae = 0), (o = Jt)))
    }
    if (o !== 0) {
      if ((o === 2 && ((g = Kl(r)), g !== 0 && ((d = g), (o = mc(r, g)))), o === 1))
        throw ((c = ds), Pi(r, 0), Kn(r, d), Pe(r, $t()), c)
      if (o === 6) Kn(r, d)
      else {
        if (
          ((g = r.current.alternate),
          (d & 30) === 0 &&
            !Jx(g) &&
            ((o = sa(r, d)),
            o === 2 && ((v = Kl(r)), v !== 0 && ((d = v), (o = mc(r, v)))),
            o === 1))
        )
          throw ((c = ds), Pi(r, 0), Kn(r, d), Pe(r, $t()), c)
        switch (((r.finishedWork = g), (r.finishedLanes = d), o)) {
          case 0:
          case 1:
            throw Error(n(345))
          case 2:
            Ci(r, ke, yn)
            break
          case 3:
            if ((Kn(r, d), (d & 130023424) === d && ((o = hc + 500 - $t()), 10 < o))) {
              if (ho(r, 0) !== 0) break
              if (((g = r.suspendedLanes), (g & d) !== d)) {
                ;(ve(), (r.pingedLanes |= r.suspendedLanes & g))
                break
              }
              r.timeoutHandle = wu(Ci.bind(null, r, ke, yn), o)
              break
            }
            Ci(r, ke, yn)
            break
          case 4:
            if ((Kn(r, d), (d & 4194240) === d)) break
            for (o = r.eventTimes, g = -1; 0 < d; ) {
              var b = 31 - $e(d)
              ;((v = 1 << b), (b = o[b]), b > g && (g = b), (d &= ~v))
            }
            if (
              ((d = g),
              (d = $t() - d),
              (d =
                (120 > d
                  ? 120
                  : 480 > d
                    ? 480
                    : 1080 > d
                      ? 1080
                      : 1920 > d
                        ? 1920
                        : 3e3 > d
                          ? 3e3
                          : 4320 > d
                            ? 4320
                            : 1960 * Zx(d / 1960)) - d),
              10 < d)
            ) {
              r.timeoutHandle = wu(Ci.bind(null, r, ke, yn), d)
              break
            }
            Ci(r, ke, yn)
            break
          case 5:
            Ci(r, ke, yn)
            break
          default:
            throw Error(n(329))
        }
      }
    }
    return (Pe(r, $t()), r.callbackNode === c ? lm.bind(null, r) : null)
  }
  function mc(r, o) {
    var c = ps
    return (
      r.current.memoizedState.isDehydrated && (Pi(r, o).flags |= 256),
      (r = sa(r, o)),
      r !== 2 && ((o = ke), (ke = c), o !== null && gc(o)),
      r
    )
  }
  function gc(r) {
    ke === null ? (ke = r) : ke.push.apply(ke, r)
  }
  function Jx(r) {
    for (var o = r; ; ) {
      if (o.flags & 16384) {
        var c = o.updateQueue
        if (c !== null && ((c = c.stores), c !== null))
          for (var d = 0; d < c.length; d++) {
            var g = c[d],
              v = g.getSnapshot
            g = g.value
            try {
              if (!Ye(v(), g)) return !1
            } catch {
              return !1
            }
          }
      }
      if (((c = o.child), o.subtreeFlags & 16384 && c !== null)) ((c.return = o), (o = c))
      else {
        if (o === r) break
        for (; o.sibling === null; ) {
          if (o.return === null || o.return === r) return !0
          o = o.return
        }
        ;((o.sibling.return = o.return), (o = o.sibling))
      }
    }
    return !0
  }
  function Kn(r, o) {
    for (
      o &= ~fc, o &= ~Jo, r.suspendedLanes |= o, r.pingedLanes &= ~o, r = r.expirationTimes;
      0 < o;

    ) {
      var c = 31 - $e(o),
        d = 1 << c
      ;((r[c] = -1), (o &= ~d))
    }
  }
  function um(r) {
    if ((bt & 6) !== 0) throw Error(n(327))
    gr()
    var o = ho(r, 0)
    if ((o & 1) === 0) return (Pe(r, $t()), null)
    var c = sa(r, o)
    if (r.tag !== 0 && c === 2) {
      var d = Kl(r)
      d !== 0 && ((o = d), (c = mc(r, d)))
    }
    if (c === 1) throw ((c = ds), Pi(r, 0), Kn(r, o), Pe(r, $t()), c)
    if (c === 6) throw Error(n(345))
    return (
      (r.finishedWork = r.current.alternate),
      (r.finishedLanes = o),
      Ci(r, ke, yn),
      Pe(r, $t()),
      null
    )
  }
  function yc(r, o) {
    var c = bt
    bt |= 1
    try {
      return r(o)
    } finally {
      ;((bt = c), bt === 0 && ((mr = $t() + 500), Do && jn()))
    }
  }
  function ki(r) {
    Yn !== null && Yn.tag === 0 && (bt & 6) === 0 && gr()
    var o = bt
    bt |= 1
    var c = Ne.transition,
      d = Ct
    try {
      if (((Ne.transition = null), (Ct = 1), r)) return r()
    } finally {
      ;((Ct = d), (Ne.transition = c), (bt = o), (bt & 6) === 0 && jn())
    }
  }
  function vc() {
    ;((Ae = pr.current), At(pr))
  }
  function Pi(r, o) {
    ;((r.finishedWork = null), (r.finishedLanes = 0))
    var c = r.timeoutHandle
    if ((c !== -1 && ((r.timeoutHandle = -1), Ex(c)), qt !== null))
      for (c = qt.return; c !== null; ) {
        var d = c
        switch ((Mu(d), d.tag)) {
          case 1:
            ;((d = d.type.childContextTypes), d != null && Oo())
            break
          case 3:
            ;(fr(), At(we), At(le), Nu())
            break
          case 5:
            zu(d)
            break
          case 4:
            fr()
            break
          case 13:
            At(Nt)
            break
          case 19:
            At(Nt)
            break
          case 10:
            Au(d.type._context)
            break
          case 22:
          case 23:
            vc()
        }
        c = c.return
      }
    if (
      ((ie = r),
      (qt = r = Gn(r.current, null)),
      (ae = Ae = o),
      (Jt = 0),
      (ds = null),
      (fc = Jo = bi = 0),
      (ke = ps = null),
      _i !== null)
    ) {
      for (o = 0; o < _i.length; o++)
        if (((c = _i[o]), (d = c.interleaved), d !== null)) {
          c.interleaved = null
          var g = d.next,
            v = c.pending
          if (v !== null) {
            var b = v.next
            ;((v.next = g), (d.next = b))
          }
          c.pending = d
        }
      _i = null
    }
    return r
  }
  function cm(r, o) {
    do {
      var c = qt
      try {
        if ((Du(), (Ho.current = Yo), Wo)) {
          for (var d = jt.memoizedState; d !== null; ) {
            var g = d.queue
            ;(g !== null && (g.pending = null), (d = d.next))
          }
          Wo = !1
        }
        if (
          ((Si = 0),
          (ne = Zt = jt = null),
          (as = !1),
          (ls = 0),
          (cc.current = null),
          c === null || c.return === null)
        ) {
          ;((Jt = 1), (ds = o), (qt = null))
          break
        }
        t: {
          var v = r,
            b = c.return,
            M = c,
            O = o
          if (
            ((o = ae),
            (M.flags |= 32768),
            O !== null && typeof O == 'object' && typeof O.then == 'function')
          ) {
            var B = O,
              X = M,
              G = X.tag
            if ((X.mode & 1) === 0 && (G === 0 || G === 11 || G === 15)) {
              var Y = X.alternate
              Y
                ? ((X.updateQueue = Y.updateQueue),
                  (X.memoizedState = Y.memoizedState),
                  (X.lanes = Y.lanes))
                : ((X.updateQueue = null), (X.memoizedState = null))
            }
            var et = Fp(b)
            if (et !== null) {
              ;((et.flags &= -257),
                Ip(et, b, M, v, o),
                et.mode & 1 && Rp(v, B, o),
                (o = et),
                (O = B))
              var it = o.updateQueue
              if (it === null) {
                var ot = new Set()
                ;(ot.add(O), (o.updateQueue = ot))
              } else it.add(O)
              break t
            } else {
              if ((o & 1) === 0) {
                ;(Rp(v, B, o), xc())
                break t
              }
              O = Error(n(426))
            }
          } else if (It && M.mode & 1) {
            var Yt = Fp(b)
            if (Yt !== null) {
              ;((Yt.flags & 65536) === 0 && (Yt.flags |= 256), Ip(Yt, b, M, v, o), Ou(hr(O, M)))
              break t
            }
          }
          ;((v = O = hr(O, M)),
            Jt !== 4 && (Jt = 2),
            ps === null ? (ps = [v]) : ps.push(v),
            (v = b))
          do {
            switch (v.tag) {
              case 3:
                ;((v.flags |= 65536), (o &= -o), (v.lanes |= o))
                var I = Dp(v, O, o)
                sp(v, I)
                break t
              case 1:
                M = O
                var D = v.type,
                  z = v.stateNode
                if (
                  (v.flags & 128) === 0 &&
                  (typeof D.getDerivedStateFromError == 'function' ||
                    (z !== null &&
                      typeof z.componentDidCatch == 'function' &&
                      ($n === null || !$n.has(z))))
                ) {
                  ;((v.flags |= 65536), (o &= -o), (v.lanes |= o))
                  var Q = Ap(v, M, o)
                  sp(v, Q)
                  break t
                }
            }
            v = v.return
          } while (v !== null)
        }
        dm(c)
      } catch (at) {
        ;((o = at), qt === c && c !== null && (qt = c = c.return))
        continue
      }
      break
    } while (!0)
  }
  function fm() {
    var r = Zo.current
    return ((Zo.current = Yo), r === null ? Yo : r)
  }
  function xc() {
    ;((Jt === 0 || Jt === 3 || Jt === 2) && (Jt = 4),
      ie === null || ((bi & 268435455) === 0 && (Jo & 268435455) === 0) || Kn(ie, ae))
  }
  function sa(r, o) {
    var c = bt
    bt |= 2
    var d = fm()
    ;(ie !== r || ae !== o) && ((yn = null), Pi(r, o))
    do
      try {
        t_()
        break
      } catch (g) {
        cm(r, g)
      }
    while (!0)
    if ((Du(), (bt = c), (Zo.current = d), qt !== null)) throw Error(n(261))
    return ((ie = null), (ae = 0), Jt)
  }
  function t_() {
    for (; qt !== null; ) hm(qt)
  }
  function e_() {
    for (; qt !== null && !C2(); ) hm(qt)
  }
  function hm(r) {
    var o = gm(r.alternate, r, Ae)
    ;((r.memoizedProps = r.pendingProps), o === null ? dm(r) : (qt = o), (cc.current = null))
  }
  function dm(r) {
    var o = r
    do {
      var c = o.alternate
      if (((r = o.return), (o.flags & 32768) === 0)) {
        if (((c = Xx(c, o, Ae)), c !== null)) {
          qt = c
          return
        }
      } else {
        if (((c = Kx(c, o)), c !== null)) {
          ;((c.flags &= 32767), (qt = c))
          return
        }
        if (r !== null) ((r.flags |= 32768), (r.subtreeFlags = 0), (r.deletions = null))
        else {
          ;((Jt = 6), (qt = null))
          return
        }
      }
      if (((o = o.sibling), o !== null)) {
        qt = o
        return
      }
      qt = o = r
    } while (o !== null)
    Jt === 0 && (Jt = 5)
  }
  function Ci(r, o, c) {
    var d = Ct,
      g = Ne.transition
    try {
      ;((Ne.transition = null), (Ct = 1), n_(r, o, c, d))
    } finally {
      ;((Ne.transition = g), (Ct = d))
    }
    return null
  }
  function n_(r, o, c, d) {
    do gr()
    while (Yn !== null)
    if ((bt & 6) !== 0) throw Error(n(327))
    c = r.finishedWork
    var g = r.finishedLanes
    if (c === null) return null
    if (((r.finishedWork = null), (r.finishedLanes = 0), c === r.current)) throw Error(n(177))
    ;((r.callbackNode = null), (r.callbackPriority = 0))
    var v = c.lanes | c.childLanes
    if (
      (I2(r, v),
      r === ie && ((qt = ie = null), (ae = 0)),
      ((c.subtreeFlags & 2064) === 0 && (c.flags & 2064) === 0) ||
        ea ||
        ((ea = !0),
        ym(lo, function () {
          return (gr(), null)
        })),
      (v = (c.flags & 15990) !== 0),
      (c.subtreeFlags & 15990) !== 0 || v)
    ) {
      ;((v = Ne.transition), (Ne.transition = null))
      var b = Ct
      Ct = 1
      var M = bt
      ;((bt |= 4),
        (cc.current = null),
        qx(r, c),
        im(c, r),
        Sx(xu),
        (go = !!vu),
        (xu = vu = null),
        (r.current = c),
        Qx(c),
        M2(),
        (bt = M),
        (Ct = b),
        (Ne.transition = v))
    } else r.current = c
    if (
      (ea && ((ea = !1), (Yn = r), (na = g)),
      (v = r.pendingLanes),
      v === 0 && ($n = null),
      O2(c.stateNode),
      Pe(r, $t()),
      o !== null)
    )
      for (d = r.onRecoverableError, c = 0; c < o.length; c++)
        ((g = o[c]), d(g.value, { componentStack: g.stack, digest: g.digest }))
    if (ta) throw ((ta = !1), (r = dc), (dc = null), r)
    return (
      (na & 1) !== 0 && r.tag !== 0 && gr(),
      (v = r.pendingLanes),
      (v & 1) !== 0 ? (r === pc ? ms++ : ((ms = 0), (pc = r))) : (ms = 0),
      jn(),
      null
    )
  }
  function gr() {
    if (Yn !== null) {
      var r = ed(na),
        o = Ne.transition,
        c = Ct
      try {
        if (((Ne.transition = null), (Ct = 16 > r ? 16 : r), Yn === null)) var d = !1
        else {
          if (((r = Yn), (Yn = null), (na = 0), (bt & 6) !== 0)) throw Error(n(331))
          var g = bt
          for (bt |= 4, nt = r.current; nt !== null; ) {
            var v = nt,
              b = v.child
            if ((nt.flags & 16) !== 0) {
              var M = v.deletions
              if (M !== null) {
                for (var O = 0; O < M.length; O++) {
                  var B = M[O]
                  for (nt = B; nt !== null; ) {
                    var X = nt
                    switch (X.tag) {
                      case 0:
                      case 11:
                      case 15:
                        hs(8, X, v)
                    }
                    var G = X.child
                    if (G !== null) ((G.return = X), (nt = G))
                    else
                      for (; nt !== null; ) {
                        X = nt
                        var Y = X.sibling,
                          et = X.return
                        if ((Zp(X), X === B)) {
                          nt = null
                          break
                        }
                        if (Y !== null) {
                          ;((Y.return = et), (nt = Y))
                          break
                        }
                        nt = et
                      }
                  }
                }
                var it = v.alternate
                if (it !== null) {
                  var ot = it.child
                  if (ot !== null) {
                    it.child = null
                    do {
                      var Yt = ot.sibling
                      ;((ot.sibling = null), (ot = Yt))
                    } while (ot !== null)
                  }
                }
                nt = v
              }
            }
            if ((v.subtreeFlags & 2064) !== 0 && b !== null) ((b.return = v), (nt = b))
            else
              t: for (; nt !== null; ) {
                if (((v = nt), (v.flags & 2048) !== 0))
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      hs(9, v, v.return)
                  }
                var I = v.sibling
                if (I !== null) {
                  ;((I.return = v.return), (nt = I))
                  break t
                }
                nt = v.return
              }
          }
          var D = r.current
          for (nt = D; nt !== null; ) {
            b = nt
            var z = b.child
            if ((b.subtreeFlags & 2064) !== 0 && z !== null) ((z.return = b), (nt = z))
            else
              t: for (b = D; nt !== null; ) {
                if (((M = nt), (M.flags & 2048) !== 0))
                  try {
                    switch (M.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Qo(9, M)
                    }
                  } catch (at) {
                    Wt(M, M.return, at)
                  }
                if (M === b) {
                  nt = null
                  break t
                }
                var Q = M.sibling
                if (Q !== null) {
                  ;((Q.return = M.return), (nt = Q))
                  break t
                }
                nt = M.return
              }
          }
          if (((bt = g), jn(), Je && typeof Je.onPostCommitFiberRoot == 'function'))
            try {
              Je.onPostCommitFiberRoot(uo, r)
            } catch {}
          d = !0
        }
        return d
      } finally {
        ;((Ct = c), (Ne.transition = o))
      }
    }
    return !1
  }
  function pm(r, o, c) {
    ;((o = hr(c, o)),
      (o = Dp(r, o, 1)),
      (r = Wn(r, o, 1)),
      (o = ve()),
      r !== null && (Br(r, 1, o), Pe(r, o)))
  }
  function Wt(r, o, c) {
    if (r.tag === 3) pm(r, r, c)
    else
      for (; o !== null; ) {
        if (o.tag === 3) {
          pm(o, r, c)
          break
        } else if (o.tag === 1) {
          var d = o.stateNode
          if (
            typeof o.type.getDerivedStateFromError == 'function' ||
            (typeof d.componentDidCatch == 'function' && ($n === null || !$n.has(d)))
          ) {
            ;((r = hr(c, r)),
              (r = Ap(o, r, 1)),
              (o = Wn(o, r, 1)),
              (r = ve()),
              o !== null && (Br(o, 1, r), Pe(o, r)))
            break
          }
        }
        o = o.return
      }
  }
  function i_(r, o, c) {
    var d = r.pingCache
    ;(d !== null && d.delete(o),
      (o = ve()),
      (r.pingedLanes |= r.suspendedLanes & c),
      ie === r &&
        (ae & c) === c &&
        (Jt === 4 || (Jt === 3 && (ae & 130023424) === ae && 500 > $t() - hc)
          ? Pi(r, 0)
          : (fc |= c)),
      Pe(r, o))
  }
  function mm(r, o) {
    o === 0 &&
      ((r.mode & 1) === 0
        ? (o = 1)
        : ((o = fo), (fo <<= 1), (fo & 130023424) === 0 && (fo = 4194304)))
    var c = ve()
    ;((r = pn(r, o)), r !== null && (Br(r, o, c), Pe(r, c)))
  }
  function r_(r) {
    var o = r.memoizedState,
      c = 0
    ;(o !== null && (c = o.retryLane), mm(r, c))
  }
  function s_(r, o) {
    var c = 0
    switch (r.tag) {
      case 13:
        var d = r.stateNode,
          g = r.memoizedState
        g !== null && (c = g.retryLane)
        break
      case 19:
        d = r.stateNode
        break
      default:
        throw Error(n(314))
    }
    ;(d !== null && d.delete(o), mm(r, c))
  }
  var gm
  gm = function (r, o, c) {
    if (r !== null)
      if (r.memoizedProps !== o.pendingProps || we.current) be = !0
      else {
        if ((r.lanes & c) === 0 && (o.flags & 128) === 0) return ((be = !1), Yx(r, o, c))
        be = (r.flags & 131072) !== 0
      }
    else ((be = !1), It && (o.flags & 1048576) !== 0 && Gd(o, Ro, o.index))
    switch (((o.lanes = 0), o.tag)) {
      case 2:
        var d = o.type
        ;(Go(r, o), (r = o.pendingProps))
        var g = rr(o, le.current)
        ;(cr(o, c), (g = Wu(null, o, d, r, g, c)))
        var v = Uu()
        return (
          (o.flags |= 1),
          typeof g == 'object' &&
          g !== null &&
          typeof g.render == 'function' &&
          g.$$typeof === void 0
            ? ((o.tag = 1),
              (o.memoizedState = null),
              (o.updateQueue = null),
              Se(d) ? ((v = !0), Lo(o)) : (v = !1),
              (o.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null),
              Iu(o),
              (g.updater = Xo),
              (o.stateNode = g),
              (g._reactInternals = o),
              qu(o, d, r, c),
              (o = tc(null, o, d, !0, v, c)))
            : ((o.tag = 0), It && v && Cu(o), ye(null, o, g, c), (o = o.child)),
          o
        )
      case 16:
        d = o.elementType
        t: {
          switch (
            (Go(r, o),
            (r = o.pendingProps),
            (g = d._init),
            (d = g(d._payload)),
            (o.type = d),
            (g = o.tag = a_(d)),
            (r = Ke(d, r)),
            g)
          ) {
            case 0:
              o = Ju(null, o, d, r, c)
              break t
            case 1:
              o = Hp(null, o, d, r, c)
              break t
            case 11:
              o = Vp(null, o, d, r, c)
              break t
            case 14:
              o = zp(null, o, d, Ke(d.type, r), c)
              break t
          }
          throw Error(n(306, d, ''))
        }
        return o
      case 0:
        return (
          (d = o.type),
          (g = o.pendingProps),
          (g = o.elementType === d ? g : Ke(d, g)),
          Ju(r, o, d, g, c)
        )
      case 1:
        return (
          (d = o.type),
          (g = o.pendingProps),
          (g = o.elementType === d ? g : Ke(d, g)),
          Hp(r, o, d, g, c)
        )
      case 3:
        t: {
          if ((Wp(o), r === null)) throw Error(n(387))
          ;((d = o.pendingProps),
            (v = o.memoizedState),
            (g = v.element),
            rp(r, o),
            No(o, d, null, c))
          var b = o.memoizedState
          if (((d = b.element), v.isDehydrated))
            if (
              ((v = {
                element: d,
                isDehydrated: !1,
                cache: b.cache,
                pendingSuspenseBoundaries: b.pendingSuspenseBoundaries,
                transitions: b.transitions,
              }),
              (o.updateQueue.baseState = v),
              (o.memoizedState = v),
              o.flags & 256)
            ) {
              ;((g = hr(Error(n(423)), o)), (o = Up(r, o, d, c, g)))
              break t
            } else if (d !== g) {
              ;((g = hr(Error(n(424)), o)), (o = Up(r, o, d, c, g)))
              break t
            } else
              for (
                De = zn(o.stateNode.containerInfo.firstChild),
                  Le = o,
                  It = !0,
                  Xe = null,
                  c = np(o, null, d, c),
                  o.child = c;
                c;

              )
                ((c.flags = (c.flags & -3) | 4096), (c = c.sibling))
          else {
            if ((ar(), d === g)) {
              o = gn(r, o, c)
              break t
            }
            ye(r, o, d, c)
          }
          o = o.child
        }
        return o
      case 5:
        return (
          ap(o),
          r === null && Eu(o),
          (d = o.type),
          (g = o.pendingProps),
          (v = r !== null ? r.memoizedProps : null),
          (b = g.children),
          _u(d, g) ? (b = null) : v !== null && _u(d, v) && (o.flags |= 32),
          jp(r, o),
          ye(r, o, b, c),
          o.child
        )
      case 6:
        return (r === null && Eu(o), null)
      case 13:
        return $p(r, o, c)
      case 4:
        return (
          Vu(o, o.stateNode.containerInfo),
          (d = o.pendingProps),
          r === null ? (o.child = lr(o, null, d, c)) : ye(r, o, d, c),
          o.child
        )
      case 11:
        return (
          (d = o.type),
          (g = o.pendingProps),
          (g = o.elementType === d ? g : Ke(d, g)),
          Vp(r, o, d, g, c)
        )
      case 7:
        return (ye(r, o, o.pendingProps, c), o.child)
      case 8:
        return (ye(r, o, o.pendingProps.children, c), o.child)
      case 12:
        return (ye(r, o, o.pendingProps.children, c), o.child)
      case 10:
        t: {
          if (
            ((d = o.type._context),
            (g = o.pendingProps),
            (v = o.memoizedProps),
            (b = g.value),
            Ot(Vo, d._currentValue),
            (d._currentValue = b),
            v !== null)
          )
            if (Ye(v.value, b)) {
              if (v.children === g.children && !we.current) {
                o = gn(r, o, c)
                break t
              }
            } else
              for (v = o.child, v !== null && (v.return = o); v !== null; ) {
                var M = v.dependencies
                if (M !== null) {
                  b = v.child
                  for (var O = M.firstContext; O !== null; ) {
                    if (O.context === d) {
                      if (v.tag === 1) {
                        ;((O = mn(-1, c & -c)), (O.tag = 2))
                        var B = v.updateQueue
                        if (B !== null) {
                          B = B.shared
                          var X = B.pending
                          ;(X === null ? (O.next = O) : ((O.next = X.next), (X.next = O)),
                            (B.pending = O))
                        }
                      }
                      ;((v.lanes |= c),
                        (O = v.alternate),
                        O !== null && (O.lanes |= c),
                        Ru(v.return, c, o),
                        (M.lanes |= c))
                      break
                    }
                    O = O.next
                  }
                } else if (v.tag === 10) b = v.type === o.type ? null : v.child
                else if (v.tag === 18) {
                  if (((b = v.return), b === null)) throw Error(n(341))
                  ;((b.lanes |= c),
                    (M = b.alternate),
                    M !== null && (M.lanes |= c),
                    Ru(b, c, o),
                    (b = v.sibling))
                } else b = v.child
                if (b !== null) b.return = v
                else
                  for (b = v; b !== null; ) {
                    if (b === o) {
                      b = null
                      break
                    }
                    if (((v = b.sibling), v !== null)) {
                      ;((v.return = b.return), (b = v))
                      break
                    }
                    b = b.return
                  }
                v = b
              }
          ;(ye(r, o, g.children, c), (o = o.child))
        }
        return o
      case 9:
        return (
          (g = o.type),
          (d = o.pendingProps.children),
          cr(o, c),
          (g = ze(g)),
          (d = d(g)),
          (o.flags |= 1),
          ye(r, o, d, c),
          o.child
        )
      case 14:
        return ((d = o.type), (g = Ke(d, o.pendingProps)), (g = Ke(d.type, g)), zp(r, o, d, g, c))
      case 15:
        return Bp(r, o, o.type, o.pendingProps, c)
      case 17:
        return (
          (d = o.type),
          (g = o.pendingProps),
          (g = o.elementType === d ? g : Ke(d, g)),
          Go(r, o),
          (o.tag = 1),
          Se(d) ? ((r = !0), Lo(o)) : (r = !1),
          cr(o, c),
          Op(o, d, g),
          qu(o, d, g, c),
          tc(null, o, d, !0, r, c)
        )
      case 19:
        return Xp(r, o, c)
      case 22:
        return Np(r, o, c)
    }
    throw Error(n(156, o.tag))
  }
  function ym(r, o) {
    return qh(r, o)
  }
  function o_(r, o, c, d) {
    ;((this.tag = r),
      (this.key = c),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = o),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = d),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null))
  }
  function je(r, o, c, d) {
    return new o_(r, o, c, d)
  }
  function _c(r) {
    return ((r = r.prototype), !(!r || !r.isReactComponent))
  }
  function a_(r) {
    if (typeof r == 'function') return _c(r) ? 1 : 0
    if (r != null) {
      if (((r = r.$$typeof), r === F)) return 11
      if (r === st) return 14
    }
    return 2
  }
  function Gn(r, o) {
    var c = r.alternate
    return (
      c === null
        ? ((c = je(r.tag, o, r.key, r.mode)),
          (c.elementType = r.elementType),
          (c.type = r.type),
          (c.stateNode = r.stateNode),
          (c.alternate = r),
          (r.alternate = c))
        : ((c.pendingProps = o),
          (c.type = r.type),
          (c.flags = 0),
          (c.subtreeFlags = 0),
          (c.deletions = null)),
      (c.flags = r.flags & 14680064),
      (c.childLanes = r.childLanes),
      (c.lanes = r.lanes),
      (c.child = r.child),
      (c.memoizedProps = r.memoizedProps),
      (c.memoizedState = r.memoizedState),
      (c.updateQueue = r.updateQueue),
      (o = r.dependencies),
      (c.dependencies = o === null ? null : { lanes: o.lanes, firstContext: o.firstContext }),
      (c.sibling = r.sibling),
      (c.index = r.index),
      (c.ref = r.ref),
      c
    )
  }
  function oa(r, o, c, d, g, v) {
    var b = 2
    if (((d = r), typeof r == 'function')) _c(r) && (b = 1)
    else if (typeof r == 'string') b = 5
    else
      t: switch (r) {
        case A:
          return Mi(c.children, g, v, o)
        case V:
          ;((b = 8), (g |= 8))
          break
        case j:
          return ((r = je(12, c, o, g | 2)), (r.elementType = j), (r.lanes = v), r)
        case q:
          return ((r = je(13, c, o, g)), (r.elementType = q), (r.lanes = v), r)
        case $:
          return ((r = je(19, c, o, g)), (r.elementType = $), (r.lanes = v), r)
        case rt:
          return aa(c, g, v, o)
        default:
          if (typeof r == 'object' && r !== null)
            switch (r.$$typeof) {
              case W:
                b = 10
                break t
              case N:
                b = 9
                break t
              case F:
                b = 11
                break t
              case st:
                b = 14
                break t
              case tt:
                ;((b = 16), (d = null))
                break t
            }
          throw Error(n(130, r == null ? r : typeof r, ''))
      }
    return ((o = je(b, c, o, g)), (o.elementType = r), (o.type = d), (o.lanes = v), o)
  }
  function Mi(r, o, c, d) {
    return ((r = je(7, r, d, o)), (r.lanes = c), r)
  }
  function aa(r, o, c, d) {
    return (
      (r = je(22, r, d, o)),
      (r.elementType = rt),
      (r.lanes = c),
      (r.stateNode = { isHidden: !1 }),
      r
    )
  }
  function wc(r, o, c) {
    return ((r = je(6, r, null, o)), (r.lanes = c), r)
  }
  function Sc(r, o, c) {
    return (
      (o = je(4, r.children !== null ? r.children : [], r.key, o)),
      (o.lanes = c),
      (o.stateNode = {
        containerInfo: r.containerInfo,
        pendingChildren: null,
        implementation: r.implementation,
      }),
      o
    )
  }
  function l_(r, o, c, d, g) {
    ;((this.tag = o),
      (this.containerInfo = r),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Gl(0)),
      (this.expirationTimes = Gl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Gl(0)),
      (this.identifierPrefix = d),
      (this.onRecoverableError = g),
      (this.mutableSourceEagerHydrationData = null))
  }
  function bc(r, o, c, d, g, v, b, M, O) {
    return (
      (r = new l_(r, o, c, M, O)),
      o === 1 ? ((o = 1), v === !0 && (o |= 8)) : (o = 0),
      (v = je(3, null, null, o)),
      (r.current = v),
      (v.stateNode = r),
      (v.memoizedState = {
        element: d,
        isDehydrated: c,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Iu(v),
      r
    )
  }
  function u_(r, o, c) {
    var d = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
    return {
      $$typeof: R,
      key: d == null ? null : '' + d,
      children: r,
      containerInfo: o,
      implementation: c,
    }
  }
  function vm(r) {
    if (!r) return Nn
    r = r._reactInternals
    t: {
      if (mi(r) !== r || r.tag !== 1) throw Error(n(170))
      var o = r
      do {
        switch (o.tag) {
          case 3:
            o = o.stateNode.context
            break t
          case 1:
            if (Se(o.type)) {
              o = o.stateNode.__reactInternalMemoizedMergedChildContext
              break t
            }
        }
        o = o.return
      } while (o !== null)
      throw Error(n(171))
    }
    if (r.tag === 1) {
      var c = r.type
      if (Se(c)) return Yd(r, c, o)
    }
    return o
  }
  function xm(r, o, c, d, g, v, b, M, O) {
    return (
      (r = bc(c, d, !0, r, g, v, b, M, O)),
      (r.context = vm(null)),
      (c = r.current),
      (d = ve()),
      (g = Xn(c)),
      (v = mn(d, g)),
      (v.callback = o ?? null),
      Wn(c, v, g),
      (r.current.lanes = g),
      Br(r, g, d),
      Pe(r, d),
      r
    )
  }
  function la(r, o, c, d) {
    var g = o.current,
      v = ve(),
      b = Xn(g)
    return (
      (c = vm(c)),
      o.context === null ? (o.context = c) : (o.pendingContext = c),
      (o = mn(v, b)),
      (o.payload = { element: r }),
      (d = d === void 0 ? null : d),
      d !== null && (o.callback = d),
      (r = Wn(g, o, b)),
      r !== null && (Qe(r, g, b, v), Bo(r, g, b)),
      b
    )
  }
  function ua(r) {
    if (((r = r.current), !r.child)) return null
    switch (r.child.tag) {
      case 5:
        return r.child.stateNode
      default:
        return r.child.stateNode
    }
  }
  function _m(r, o) {
    if (((r = r.memoizedState), r !== null && r.dehydrated !== null)) {
      var c = r.retryLane
      r.retryLane = c !== 0 && c < o ? c : o
    }
  }
  function kc(r, o) {
    ;(_m(r, o), (r = r.alternate) && _m(r, o))
  }
  function c_() {
    return null
  }
  var wm =
    typeof reportError == 'function'
      ? reportError
      : function (r) {
          console.error(r)
        }
  function Pc(r) {
    this._internalRoot = r
  }
  ;((ca.prototype.render = Pc.prototype.render =
    function (r) {
      var o = this._internalRoot
      if (o === null) throw Error(n(409))
      la(r, o, null, null)
    }),
    (ca.prototype.unmount = Pc.prototype.unmount =
      function () {
        var r = this._internalRoot
        if (r !== null) {
          this._internalRoot = null
          var o = r.containerInfo
          ;(ki(function () {
            la(null, r, null, null)
          }),
            (o[cn] = null))
        }
      }))
  function ca(r) {
    this._internalRoot = r
  }
  ca.prototype.unstable_scheduleHydration = function (r) {
    if (r) {
      var o = rd()
      r = { blockedOn: null, target: r, priority: o }
      for (var c = 0; c < Fn.length && o !== 0 && o < Fn[c].priority; c++);
      ;(Fn.splice(c, 0, r), c === 0 && ad(r))
    }
  }
  function Cc(r) {
    return !(!r || (r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11))
  }
  function fa(r) {
    return !(
      !r ||
      (r.nodeType !== 1 &&
        r.nodeType !== 9 &&
        r.nodeType !== 11 &&
        (r.nodeType !== 8 || r.nodeValue !== ' react-mount-point-unstable '))
    )
  }
  function Sm() {}
  function f_(r, o, c, d, g) {
    if (g) {
      if (typeof d == 'function') {
        var v = d
        d = function () {
          var B = ua(b)
          v.call(B)
        }
      }
      var b = xm(o, d, r, 0, null, !1, !1, '', Sm)
      return (
        (r._reactRootContainer = b),
        (r[cn] = b.current),
        Jr(r.nodeType === 8 ? r.parentNode : r),
        ki(),
        b
      )
    }
    for (; (g = r.lastChild); ) r.removeChild(g)
    if (typeof d == 'function') {
      var M = d
      d = function () {
        var B = ua(O)
        M.call(B)
      }
    }
    var O = bc(r, 0, !1, null, null, !1, !1, '', Sm)
    return (
      (r._reactRootContainer = O),
      (r[cn] = O.current),
      Jr(r.nodeType === 8 ? r.parentNode : r),
      ki(function () {
        la(o, O, c, d)
      }),
      O
    )
  }
  function ha(r, o, c, d, g) {
    var v = c._reactRootContainer
    if (v) {
      var b = v
      if (typeof g == 'function') {
        var M = g
        g = function () {
          var O = ua(b)
          M.call(O)
        }
      }
      la(o, b, r, g)
    } else b = f_(c, o, r, g, d)
    return ua(b)
  }
  ;((nd = function (r) {
    switch (r.tag) {
      case 3:
        var o = r.stateNode
        if (o.current.memoizedState.isDehydrated) {
          var c = zr(o.pendingLanes)
          c !== 0 && (ql(o, c | 1), Pe(o, $t()), (bt & 6) === 0 && ((mr = $t() + 500), jn()))
        }
        break
      case 13:
        ;(ki(function () {
          var d = pn(r, 1)
          if (d !== null) {
            var g = ve()
            Qe(d, r, 1, g)
          }
        }),
          kc(r, 1))
    }
  }),
    (Ql = function (r) {
      if (r.tag === 13) {
        var o = pn(r, 134217728)
        if (o !== null) {
          var c = ve()
          Qe(o, r, 134217728, c)
        }
        kc(r, 134217728)
      }
    }),
    (id = function (r) {
      if (r.tag === 13) {
        var o = Xn(r),
          c = pn(r, o)
        if (c !== null) {
          var d = ve()
          Qe(c, r, o, d)
        }
        kc(r, o)
      }
    }),
    (rd = function () {
      return Ct
    }),
    (sd = function (r, o) {
      var c = Ct
      try {
        return ((Ct = r), o())
      } finally {
        Ct = c
      }
    }),
    (Wl = function (r, o, c) {
      switch (o) {
        case 'input':
          if ((Fl(r, c), (o = c.name), c.type === 'radio' && o != null)) {
            for (c = r; c.parentNode; ) c = c.parentNode
            for (
              c = c.querySelectorAll('input[name=' + JSON.stringify('' + o) + '][type="radio"]'),
                o = 0;
              o < c.length;
              o++
            ) {
              var d = c[o]
              if (d !== r && d.form === r.form) {
                var g = Eo(d)
                if (!g) throw Error(n(90))
                ;(Lr(d), Fl(d, g))
              }
            }
          }
          break
        case 'textarea':
          Rh(r, c)
          break
        case 'select':
          ;((o = c.value), o != null && Yi(r, !!c.multiple, o, !1))
      }
    }),
    (Wh = yc),
    (Uh = ki))
  var h_ = { usingClientEntryPoint: !1, Events: [ns, nr, Eo, jh, Hh, yc] },
    gs = {
      findFiberByHostInstance: gi,
      bundleType: 0,
      version: '18.3.1',
      rendererPackageName: 'react-dom',
    },
    d_ = {
      bundleType: gs.bundleType,
      version: gs.version,
      rendererPackageName: gs.rendererPackageName,
      rendererConfig: gs.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: T.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (r) {
        return ((r = Kh(r)), r === null ? null : r.stateNode)
      },
      findFiberByHostInstance: gs.findFiberByHostInstance || c_,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
    }
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var da = __REACT_DEVTOOLS_GLOBAL_HOOK__
    if (!da.isDisabled && da.supportsFiber)
      try {
        ;((uo = da.inject(d_)), (Je = da))
      } catch {}
  }
  return (
    (Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = h_),
    (Ce.createPortal = function (r, o) {
      var c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
      if (!Cc(o)) throw Error(n(200))
      return u_(r, o, null, c)
    }),
    (Ce.createRoot = function (r, o) {
      if (!Cc(r)) throw Error(n(299))
      var c = !1,
        d = '',
        g = wm
      return (
        o != null &&
          (o.unstable_strictMode === !0 && (c = !0),
          o.identifierPrefix !== void 0 && (d = o.identifierPrefix),
          o.onRecoverableError !== void 0 && (g = o.onRecoverableError)),
        (o = bc(r, 1, !1, null, null, c, !1, d, g)),
        (r[cn] = o.current),
        Jr(r.nodeType === 8 ? r.parentNode : r),
        new Pc(o)
      )
    }),
    (Ce.findDOMNode = function (r) {
      if (r == null) return null
      if (r.nodeType === 1) return r
      var o = r._reactInternals
      if (o === void 0)
        throw typeof r.render == 'function'
          ? Error(n(188))
          : ((r = Object.keys(r).join(',')), Error(n(268, r)))
      return ((r = Kh(o)), (r = r === null ? null : r.stateNode), r)
    }),
    (Ce.flushSync = function (r) {
      return ki(r)
    }),
    (Ce.hydrate = function (r, o, c) {
      if (!fa(o)) throw Error(n(200))
      return ha(null, r, o, !0, c)
    }),
    (Ce.hydrateRoot = function (r, o, c) {
      if (!Cc(r)) throw Error(n(405))
      var d = (c != null && c.hydratedSources) || null,
        g = !1,
        v = '',
        b = wm
      if (
        (c != null &&
          (c.unstable_strictMode === !0 && (g = !0),
          c.identifierPrefix !== void 0 && (v = c.identifierPrefix),
          c.onRecoverableError !== void 0 && (b = c.onRecoverableError)),
        (o = xm(o, null, r, 1, c ?? null, g, !1, v, b)),
        (r[cn] = o.current),
        Jr(r),
        d)
      )
        for (r = 0; r < d.length; r++)
          ((c = d[r]),
            (g = c._getVersion),
            (g = g(c._source)),
            o.mutableSourceEagerHydrationData == null
              ? (o.mutableSourceEagerHydrationData = [c, g])
              : o.mutableSourceEagerHydrationData.push(c, g))
      return new ca(o)
    }),
    (Ce.render = function (r, o, c) {
      if (!fa(o)) throw Error(n(200))
      return ha(null, r, o, !1, c)
    }),
    (Ce.unmountComponentAtNode = function (r) {
      if (!fa(r)) throw Error(n(40))
      return r._reactRootContainer
        ? (ki(function () {
            ha(null, null, r, !1, function () {
              ;((r._reactRootContainer = null), (r[cn] = null))
            })
          }),
          !0)
        : !1
    }),
    (Ce.unstable_batchedUpdates = yc),
    (Ce.unstable_renderSubtreeIntoContainer = function (r, o, c, d) {
      if (!fa(c)) throw Error(n(200))
      if (r == null || r._reactInternals === void 0) throw Error(n(38))
      return ha(r, o, c, !1, d)
    }),
    (Ce.version = '18.3.1-next-f1338f8080-20240426'),
    Ce
  )
}
var Om
function pl() {
  if (Om) return Ec.exports
  Om = 1
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
      } catch (t) {
        console.error(t)
      }
  }
  return (e(), (Ec.exports = S_()), Ec.exports)
}
var Lm
function b_() {
  if (Lm) return ma
  Lm = 1
  var e = pl()
  return ((ma.createRoot = e.createRoot), (ma.hydrateRoot = e.hydrateRoot), ma)
}
var k_ = b_()
const BT = R1(k_)
pl()
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Bs() {
  return (
    (Bs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
          }
          return e
        }),
    Bs.apply(this, arguments)
  )
}
var Jn
;(function (e) {
  ;((e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE'))
})(Jn || (Jn = {}))
const Dm = 'popstate'
function P_(e) {
  e === void 0 && (e = {})
  function t(i, s) {
    let { pathname: a, search: l, hash: u } = i.location
    return ff(
      '',
      { pathname: a, search: l, hash: u },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || 'default'
    )
  }
  function n(i, s) {
    return typeof s == 'string' ? s : Qa(s)
  }
  return M_(t, n, null, e)
}
function Gt(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t)
}
function F1(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t)
    try {
      throw new Error(t)
    } catch {}
  }
}
function C_() {
  return Math.random().toString(36).substr(2, 8)
}
function Am(e, t) {
  return { usr: e.state, key: e.key, idx: t }
}
function ff(e, t, n, i) {
  return (
    n === void 0 && (n = null),
    Bs(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? Er(t) : t,
      { state: n, key: (t && t.key) || i || C_() }
    )
  )
}
function Qa(e) {
  let { pathname: t = '/', search: n = '', hash: i = '' } = e
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    i && i !== '#' && (t += i.charAt(0) === '#' ? i : '#' + i),
    t
  )
}
function Er(e) {
  let t = {}
  if (e) {
    let n = e.indexOf('#')
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)))
    let i = e.indexOf('?')
    ;(i >= 0 && ((t.search = e.substr(i)), (e = e.substr(0, i))), e && (t.pathname = e))
  }
  return t
}
function M_(e, t, n, i) {
  i === void 0 && (i = {})
  let { window: s = document.defaultView, v5Compat: a = !1 } = i,
    l = s.history,
    u = Jn.Pop,
    f = null,
    h = p()
  h == null && ((h = 0), l.replaceState(Bs({}, l.state, { idx: h }), ''))
  function p() {
    return (l.state || { idx: null }).idx
  }
  function m() {
    u = Jn.Pop
    let S = p(),
      k = S == null ? null : S - h
    ;((h = S), f && f({ action: u, location: w.location, delta: k }))
  }
  function y(S, k) {
    u = Jn.Push
    let P = ff(w.location, S, k)
    h = p() + 1
    let C = Am(P, h),
      T = w.createHref(P)
    try {
      l.pushState(C, '', T)
    } catch (E) {
      if (E instanceof DOMException && E.name === 'DataCloneError') throw E
      s.location.assign(T)
    }
    a && f && f({ action: u, location: w.location, delta: 1 })
  }
  function x(S, k) {
    u = Jn.Replace
    let P = ff(w.location, S, k)
    h = p()
    let C = Am(P, h),
      T = w.createHref(P)
    ;(l.replaceState(C, '', T), a && f && f({ action: u, location: w.location, delta: 0 }))
  }
  function _(S) {
    let k = s.location.origin !== 'null' ? s.location.origin : s.location.href,
      P = typeof S == 'string' ? S : Qa(S)
    return (
      (P = P.replace(/ $/, '%20')),
      Gt(k, 'No window.location.(origin|href) available to create URL for href: ' + P),
      new URL(P, k)
    )
  }
  let w = {
    get action() {
      return u
    },
    get location() {
      return e(s, l)
    },
    listen(S) {
      if (f) throw new Error('A history only accepts one active listener')
      return (
        s.addEventListener(Dm, m),
        (f = S),
        () => {
          ;(s.removeEventListener(Dm, m), (f = null))
        }
      )
    },
    createHref(S) {
      return t(s, S)
    },
    createURL: _,
    encodeLocation(S) {
      let k = _(S)
      return { pathname: k.pathname, search: k.search, hash: k.hash }
    },
    push: y,
    replace: x,
    go(S) {
      return l.go(S)
    },
  }
  return w
}
var Rm
;(function (e) {
  ;((e.data = 'data'), (e.deferred = 'deferred'), (e.redirect = 'redirect'), (e.error = 'error'))
})(Rm || (Rm = {}))
function T_(e, t, n) {
  return (n === void 0 && (n = '/'), E_(e, t, n))
}
function E_(e, t, n, i) {
  let s = typeof t == 'string' ? Er(t) : t,
    a = zf(s.pathname || '/', n)
  if (a == null) return null
  let l = I1(e)
  O_(l)
  let u = null
  for (let f = 0; u == null && f < l.length; ++f) {
    let h = H_(a)
    u = B_(l[f], h)
  }
  return u
}
function I1(e, t, n, i) {
  ;(t === void 0 && (t = []), n === void 0 && (n = []), i === void 0 && (i = ''))
  let s = (a, l, u) => {
    let f = {
      relativePath: u === void 0 ? a.path || '' : u,
      caseSensitive: a.caseSensitive === !0,
      childrenIndex: l,
      route: a,
    }
    f.relativePath.startsWith('/') &&
      (Gt(
        f.relativePath.startsWith(i),
        'Absolute route path "' +
          f.relativePath +
          '" nested under path ' +
          ('"' + i + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (f.relativePath = f.relativePath.slice(i.length)))
    let h = ii([i, f.relativePath]),
      p = n.concat(f)
    ;(a.children &&
      a.children.length > 0 &&
      (Gt(
        a.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + h + '".')
      ),
      I1(a.children, t, p, h)),
      !(a.path == null && !a.index) && t.push({ path: h, score: V_(h, a.index), routesMeta: p }))
  }
  return (
    e.forEach((a, l) => {
      var u
      if (a.path === '' || !((u = a.path) != null && u.includes('?'))) s(a, l)
      else for (let f of V1(a.path)) s(a, l, f)
    }),
    t
  )
}
function V1(e) {
  let t = e.split('/')
  if (t.length === 0) return []
  let [n, ...i] = t,
    s = n.endsWith('?'),
    a = n.replace(/\?$/, '')
  if (i.length === 0) return s ? [a, ''] : [a]
  let l = V1(i.join('/')),
    u = []
  return (
    u.push(...l.map(f => (f === '' ? a : [a, f].join('/')))),
    s && u.push(...l),
    u.map(f => (e.startsWith('/') && f === '' ? '/' : f))
  )
}
function O_(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : z_(
          t.routesMeta.map(i => i.childrenIndex),
          n.routesMeta.map(i => i.childrenIndex)
        )
  )
}
const L_ = /^:[\w-]+$/,
  D_ = 3,
  A_ = 2,
  R_ = 1,
  F_ = 10,
  I_ = -2,
  Fm = e => e === '*'
function V_(e, t) {
  let n = e.split('/'),
    i = n.length
  return (
    n.some(Fm) && (i += I_),
    t && (i += A_),
    n.filter(s => !Fm(s)).reduce((s, a) => s + (L_.test(a) ? D_ : a === '' ? R_ : F_), i)
  )
}
function z_(e, t) {
  return e.length === t.length && e.slice(0, -1).every((i, s) => i === t[s])
    ? e[e.length - 1] - t[t.length - 1]
    : 0
}
function B_(e, t, n) {
  let { routesMeta: i } = e,
    s = {},
    a = '/',
    l = []
  for (let u = 0; u < i.length; ++u) {
    let f = i[u],
      h = u === i.length - 1,
      p = a === '/' ? t : t.slice(a.length) || '/',
      m = N_({ path: f.relativePath, caseSensitive: f.caseSensitive, end: h }, p),
      y = f.route
    if (!m) return null
    ;(Object.assign(s, m.params),
      l.push({
        params: s,
        pathname: ii([a, m.pathname]),
        pathnameBase: Y_(ii([a, m.pathnameBase])),
        route: y,
      }),
      m.pathnameBase !== '/' && (a = ii([a, m.pathnameBase])))
  }
  return l
}
function N_(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 })
  let [n, i] = j_(e.path, e.caseSensitive, e.end),
    s = t.match(n)
  if (!s) return null
  let a = s[0],
    l = a.replace(/(.)\/+$/, '$1'),
    u = s.slice(1)
  return {
    params: i.reduce((h, p, m) => {
      let { paramName: y, isOptional: x } = p
      if (y === '*') {
        let w = u[m] || ''
        l = a.slice(0, a.length - w.length).replace(/(.)\/+$/, '$1')
      }
      const _ = u[m]
      return (x && !_ ? (h[y] = void 0) : (h[y] = (_ || '').replace(/%2F/g, '/')), h)
    }, {}),
    pathname: a,
    pathnameBase: l,
    pattern: e,
  }
}
function j_(e, t, n) {
  ;(t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    F1(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    ))
  let i = [],
    s =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (l, u, f) => (
            i.push({ paramName: u, isOptional: f != null }),
            f ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        )
  return (
    e.endsWith('*')
      ? (i.push({ paramName: '*' }), (s += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
        ? (s += '\\/*$')
        : e !== '' && e !== '/' && (s += '(?:(?=\\/|$))'),
    [new RegExp(s, t ? void 0 : 'i'), i]
  )
}
function H_(e) {
  try {
    return e
      .split('/')
      .map(t => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/')
  } catch (t) {
    return (
      F1(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    )
  }
}
function zf(e, t) {
  if (t === '/') return e
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    i = e.charAt(n)
  return i && i !== '/' ? null : e.slice(n) || '/'
}
function W_(e, t) {
  t === void 0 && (t = '/')
  let { pathname: n, search: i = '', hash: s = '' } = typeof e == 'string' ? Er(e) : e
  return { pathname: n ? (n.startsWith('/') ? n : U_(n, t)) : t, search: X_(i), hash: K_(s) }
}
function U_(e, t) {
  let n = t.replace(/\/+$/, '').split('/')
  return (
    e.split('/').forEach(s => {
      s === '..' ? n.length > 1 && n.pop() : s !== '.' && n.push(s)
    }),
    n.length > 1 ? n.join('/') : '/'
  )
}
function Dc(e, t, n, i) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' + t + '` field [' + JSON.stringify(i) + '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  )
}
function $_(e) {
  return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0))
}
function Bf(e, t) {
  let n = $_(e)
  return t
    ? n.map((i, s) => (s === n.length - 1 ? i.pathname : i.pathnameBase))
    : n.map(i => i.pathnameBase)
}
function Nf(e, t, n, i) {
  i === void 0 && (i = !1)
  let s
  typeof e == 'string'
    ? (s = Er(e))
    : ((s = Bs({}, e)),
      Gt(!s.pathname || !s.pathname.includes('?'), Dc('?', 'pathname', 'search', s)),
      Gt(!s.pathname || !s.pathname.includes('#'), Dc('#', 'pathname', 'hash', s)),
      Gt(!s.search || !s.search.includes('#'), Dc('#', 'search', 'hash', s)))
  let a = e === '' || s.pathname === '',
    l = a ? '/' : s.pathname,
    u
  if (l == null) u = n
  else {
    let m = t.length - 1
    if (!i && l.startsWith('..')) {
      let y = l.split('/')
      for (; y[0] === '..'; ) (y.shift(), (m -= 1))
      s.pathname = y.join('/')
    }
    u = m >= 0 ? t[m] : '/'
  }
  let f = W_(s, u),
    h = l && l !== '/' && l.endsWith('/'),
    p = (a || l === '.') && n.endsWith('/')
  return (!f.pathname.endsWith('/') && (h || p) && (f.pathname += '/'), f)
}
const ii = e => e.join('/').replace(/\/\/+/g, '/'),
  Y_ = e => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  X_ = e => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  K_ = e => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e)
function G_(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  )
}
const z1 = ['post', 'put', 'patch', 'delete']
new Set(z1)
const q_ = ['get', ...z1]
new Set(q_)
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ns() {
  return (
    (Ns = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
          }
          return e
        }),
    Ns.apply(this, arguments)
  )
}
const jf = U.createContext(null),
  Q_ = U.createContext(null),
  fi = U.createContext(null),
  ml = U.createContext(null),
  On = U.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  B1 = U.createContext(null)
function Z_(e, t) {
  let { relative: n } = t === void 0 ? {} : t
  Or() || Gt(!1)
  let { basename: i, navigator: s } = U.useContext(fi),
    { hash: a, pathname: l, search: u } = H1(e, { relative: n }),
    f = l
  return (
    i !== '/' && (f = l === '/' ? i : ii([i, l])),
    s.createHref({ pathname: f, search: u, hash: a })
  )
}
function Or() {
  return U.useContext(ml) != null
}
function Qs() {
  return (Or() || Gt(!1), U.useContext(ml).location)
}
function N1(e) {
  U.useContext(fi).static || U.useLayoutEffect(e)
}
function j1() {
  let { isDataRoute: e } = U.useContext(On)
  return e ? dw() : J_()
}
function J_() {
  Or() || Gt(!1)
  let e = U.useContext(jf),
    { basename: t, future: n, navigator: i } = U.useContext(fi),
    { matches: s } = U.useContext(On),
    { pathname: a } = Qs(),
    l = JSON.stringify(Bf(s, n.v7_relativeSplatPath)),
    u = U.useRef(!1)
  return (
    N1(() => {
      u.current = !0
    }),
    U.useCallback(
      function (h, p) {
        if ((p === void 0 && (p = {}), !u.current)) return
        if (typeof h == 'number') {
          i.go(h)
          return
        }
        let m = Nf(h, JSON.parse(l), a, p.relative === 'path')
        ;(e == null && t !== '/' && (m.pathname = m.pathname === '/' ? t : ii([t, m.pathname])),
          (p.replace ? i.replace : i.push)(m, p.state, p))
      },
      [t, i, l, a, e]
    )
  )
}
const tw = U.createContext(null)
function ew(e) {
  let t = U.useContext(On).outlet
  return t && U.createElement(tw.Provider, { value: e }, t)
}
function H1(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: i } = U.useContext(fi),
    { matches: s } = U.useContext(On),
    { pathname: a } = Qs(),
    l = JSON.stringify(Bf(s, i.v7_relativeSplatPath))
  return U.useMemo(() => Nf(e, JSON.parse(l), a, n === 'path'), [e, l, a, n])
}
function nw(e, t) {
  return iw(e, t)
}
function iw(e, t, n, i) {
  Or() || Gt(!1)
  let { navigator: s } = U.useContext(fi),
    { matches: a } = U.useContext(On),
    l = a[a.length - 1],
    u = l ? l.params : {}
  l && l.pathname
  let f = l ? l.pathnameBase : '/'
  l && l.route
  let h = Qs(),
    p
  if (t) {
    var m
    let S = typeof t == 'string' ? Er(t) : t
    ;(f === '/' || ((m = S.pathname) != null && m.startsWith(f)) || Gt(!1), (p = S))
  } else p = h
  let y = p.pathname || '/',
    x = y
  if (f !== '/') {
    let S = f.replace(/^\//, '').split('/')
    x = '/' + y.replace(/^\//, '').split('/').slice(S.length).join('/')
  }
  let _ = T_(e, { pathname: x }),
    w = lw(
      _ &&
        _.map(S =>
          Object.assign({}, S, {
            params: Object.assign({}, u, S.params),
            pathname: ii([
              f,
              s.encodeLocation ? s.encodeLocation(S.pathname).pathname : S.pathname,
            ]),
            pathnameBase:
              S.pathnameBase === '/'
                ? f
                : ii([
                    f,
                    s.encodeLocation ? s.encodeLocation(S.pathnameBase).pathname : S.pathnameBase,
                  ]),
          })
        ),
      a,
      n,
      i
    )
  return t && w
    ? U.createElement(
        ml.Provider,
        {
          value: {
            location: Ns({ pathname: '/', search: '', hash: '', state: null, key: 'default' }, p),
            navigationType: Jn.Pop,
          },
        },
        w
      )
    : w
}
function rw() {
  let e = hw(),
    t = G_(e) ? e.status + ' ' + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    s = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' }
  return U.createElement(
    U.Fragment,
    null,
    U.createElement('h2', null, 'Unexpected Application Error!'),
    U.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? U.createElement('pre', { style: s }, n) : null,
    null
  )
}
const sw = U.createElement(rw, null)
class ow extends U.Component {
  constructor(t) {
    ;(super(t),
      (this.state = { location: t.location, revalidation: t.revalidation, error: t.error }))
  }
  static getDerivedStateFromError(t) {
    return { error: t }
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location || (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        }
  }
  componentDidCatch(t, n) {
    console.error('React Router caught the following error during render', t, n)
  }
  render() {
    return this.state.error !== void 0
      ? U.createElement(
          On.Provider,
          { value: this.props.routeContext },
          U.createElement(B1.Provider, { value: this.state.error, children: this.props.component })
        )
      : this.props.children
  }
}
function aw(e) {
  let { routeContext: t, match: n, children: i } = e,
    s = U.useContext(jf)
  return (
    s &&
      s.static &&
      s.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = n.route.id),
    U.createElement(On.Provider, { value: t }, i)
  )
}
function lw(e, t, n, i) {
  var s
  if (
    (t === void 0 && (t = []), n === void 0 && (n = null), i === void 0 && (i = null), e == null)
  ) {
    var a
    if (!n) return null
    if (n.errors) e = n.matches
    else if (
      (a = i) != null &&
      a.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches
    else return null
  }
  let l = e,
    u = (s = n) == null ? void 0 : s.errors
  if (u != null) {
    let p = l.findIndex(m => m.route.id && u?.[m.route.id] !== void 0)
    ;(p >= 0 || Gt(!1), (l = l.slice(0, Math.min(l.length, p + 1))))
  }
  let f = !1,
    h = -1
  if (n && i && i.v7_partialHydration)
    for (let p = 0; p < l.length; p++) {
      let m = l[p]
      if (((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (h = p), m.route.id)) {
        let { loaderData: y, errors: x } = n,
          _ = m.route.loader && y[m.route.id] === void 0 && (!x || x[m.route.id] === void 0)
        if (m.route.lazy || _) {
          ;((f = !0), h >= 0 ? (l = l.slice(0, h + 1)) : (l = [l[0]]))
          break
        }
      }
    }
  return l.reduceRight((p, m, y) => {
    let x,
      _ = !1,
      w = null,
      S = null
    n &&
      ((x = u && m.route.id ? u[m.route.id] : void 0),
      (w = m.route.errorElement || sw),
      f &&
        (h < 0 && y === 0
          ? (pw('route-fallback'), (_ = !0), (S = null))
          : h === y && ((_ = !0), (S = m.route.hydrateFallbackElement || null))))
    let k = t.concat(l.slice(0, y + 1)),
      P = () => {
        let C
        return (
          x
            ? (C = w)
            : _
              ? (C = S)
              : m.route.Component
                ? (C = U.createElement(m.route.Component, null))
                : m.route.element
                  ? (C = m.route.element)
                  : (C = p),
          U.createElement(aw, {
            match: m,
            routeContext: { outlet: p, matches: k, isDataRoute: n != null },
            children: C,
          })
        )
      }
    return n && (m.route.ErrorBoundary || m.route.errorElement || y === 0)
      ? U.createElement(ow, {
          location: n.location,
          revalidation: n.revalidation,
          component: w,
          error: x,
          children: P(),
          routeContext: { outlet: null, matches: k, isDataRoute: !0 },
        })
      : P()
  }, null)
}
var W1 = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    )
  })(W1 || {}),
  U1 = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    )
  })(U1 || {})
function uw(e) {
  let t = U.useContext(jf)
  return (t || Gt(!1), t)
}
function cw(e) {
  let t = U.useContext(Q_)
  return (t || Gt(!1), t)
}
function fw(e) {
  let t = U.useContext(On)
  return (t || Gt(!1), t)
}
function $1(e) {
  let t = fw(),
    n = t.matches[t.matches.length - 1]
  return (n.route.id || Gt(!1), n.route.id)
}
function hw() {
  var e
  let t = U.useContext(B1),
    n = cw(),
    i = $1()
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[i]
}
function dw() {
  let { router: e } = uw(W1.UseNavigateStable),
    t = $1(U1.UseNavigateStable),
    n = U.useRef(!1)
  return (
    N1(() => {
      n.current = !0
    }),
    U.useCallback(
      function (s, a) {
        ;(a === void 0 && (a = {}),
          n.current &&
            (typeof s == 'number' ? e.navigate(s) : e.navigate(s, Ns({ fromRouteId: t }, a))))
      },
      [e, t]
    )
  )
}
const Im = {}
function pw(e, t, n) {
  Im[e] || (Im[e] = !0)
}
function mw(e, t) {
  ;(e?.v7_startTransition, e?.v7_relativeSplatPath)
}
function NT(e) {
  let { to: t, replace: n, state: i, relative: s } = e
  Or() || Gt(!1)
  let { future: a, static: l } = U.useContext(fi),
    { matches: u } = U.useContext(On),
    { pathname: f } = Qs(),
    h = j1(),
    p = Nf(t, Bf(u, a.v7_relativeSplatPath), f, s === 'path'),
    m = JSON.stringify(p)
  return (
    U.useEffect(() => h(JSON.parse(m), { replace: n, state: i, relative: s }), [h, m, s, n, i]),
    null
  )
}
function jT(e) {
  return ew(e.context)
}
function gw(e) {
  Gt(!1)
}
function yw(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: i,
    navigationType: s = Jn.Pop,
    navigator: a,
    static: l = !1,
    future: u,
  } = e
  Or() && Gt(!1)
  let f = t.replace(/^\/*/, '/'),
    h = U.useMemo(
      () => ({ basename: f, navigator: a, static: l, future: Ns({ v7_relativeSplatPath: !1 }, u) }),
      [f, u, a, l]
    )
  typeof i == 'string' && (i = Er(i))
  let { pathname: p = '/', search: m = '', hash: y = '', state: x = null, key: _ = 'default' } = i,
    w = U.useMemo(() => {
      let S = zf(p, f)
      return S == null
        ? null
        : { location: { pathname: S, search: m, hash: y, state: x, key: _ }, navigationType: s }
    }, [f, p, m, y, x, _, s])
  return w == null
    ? null
    : U.createElement(
        fi.Provider,
        { value: h },
        U.createElement(ml.Provider, { children: n, value: w })
      )
}
function HT(e) {
  let { children: t, location: n } = e
  return nw(hf(t), n)
}
new Promise(() => {})
function hf(e, t) {
  t === void 0 && (t = [])
  let n = []
  return (
    U.Children.forEach(e, (i, s) => {
      if (!U.isValidElement(i)) return
      let a = [...t, s]
      if (i.type === U.Fragment) {
        n.push.apply(n, hf(i.props.children, a))
        return
      }
      ;(i.type !== gw && Gt(!1), !i.props.index || !i.props.children || Gt(!1))
      let l = {
        id: i.props.id || a.join('-'),
        caseSensitive: i.props.caseSensitive,
        element: i.props.element,
        Component: i.props.Component,
        index: i.props.index,
        path: i.props.path,
        loader: i.props.loader,
        action: i.props.action,
        errorElement: i.props.errorElement,
        ErrorBoundary: i.props.ErrorBoundary,
        hasErrorBoundary: i.props.ErrorBoundary != null || i.props.errorElement != null,
        shouldRevalidate: i.props.shouldRevalidate,
        handle: i.props.handle,
        lazy: i.props.lazy,
      }
      ;(i.props.children && (l.children = hf(i.props.children, a)), n.push(l))
    }),
    n
  )
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function df() {
  return (
    (df = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
          }
          return e
        }),
    df.apply(this, arguments)
  )
}
function vw(e, t) {
  if (e == null) return {}
  var n = {},
    i = Object.keys(e),
    s,
    a
  for (a = 0; a < i.length; a++) ((s = i[a]), !(t.indexOf(s) >= 0) && (n[s] = e[s]))
  return n
}
function xw(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function _w(e, t) {
  return e.button === 0 && (!t || t === '_self') && !xw(e)
}
const ww = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
    'viewTransition',
  ],
  Sw = '6'
try {
  window.__reactRouterVersion = Sw
} catch {}
const bw = 'startTransition',
  Vm = x_[bw]
function WT(e) {
  let { basename: t, children: n, future: i, window: s } = e,
    a = U.useRef()
  a.current == null && (a.current = P_({ window: s, v5Compat: !0 }))
  let l = a.current,
    [u, f] = U.useState({ action: l.action, location: l.location }),
    { v7_startTransition: h } = i || {},
    p = U.useCallback(
      m => {
        h && Vm ? Vm(() => f(m)) : f(m)
      },
      [f, h]
    )
  return (
    U.useLayoutEffect(() => l.listen(p), [l, p]),
    U.useEffect(() => mw(i), [i]),
    U.createElement(yw, {
      basename: t,
      children: n,
      location: u.location,
      navigationType: u.action,
      navigator: l,
      future: i,
    })
  )
}
const kw =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  Pw = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  UT = U.forwardRef(function (t, n) {
    let {
        onClick: i,
        relative: s,
        reloadDocument: a,
        replace: l,
        state: u,
        target: f,
        to: h,
        preventScrollReset: p,
        viewTransition: m,
      } = t,
      y = vw(t, ww),
      { basename: x } = U.useContext(fi),
      _,
      w = !1
    if (typeof h == 'string' && Pw.test(h) && ((_ = h), kw))
      try {
        let C = new URL(window.location.href),
          T = h.startsWith('//') ? new URL(C.protocol + h) : new URL(h),
          E = zf(T.pathname, x)
        T.origin === C.origin && E != null ? (h = E + T.search + T.hash) : (w = !0)
      } catch {}
    let S = Z_(h, { relative: s }),
      k = Cw(h, {
        replace: l,
        state: u,
        target: f,
        preventScrollReset: p,
        relative: s,
        viewTransition: m,
      })
    function P(C) {
      ;(i && i(C), C.defaultPrevented || k(C))
    }
    return U.createElement(
      'a',
      df({}, y, { href: _ || S, onClick: w || a ? i : P, ref: n, target: f })
    )
  })
var zm
;(function (e) {
  ;((e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState'))
})(zm || (zm = {}))
var Bm
;(function (e) {
  ;((e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration'))
})(Bm || (Bm = {}))
function Cw(e, t) {
  let {
      target: n,
      replace: i,
      state: s,
      preventScrollReset: a,
      relative: l,
      viewTransition: u,
    } = t === void 0 ? {} : t,
    f = j1(),
    h = Qs(),
    p = H1(e, { relative: l })
  return U.useCallback(
    m => {
      if (_w(m, n)) {
        m.preventDefault()
        let y = i !== void 0 ? i : Qa(h) === Qa(p)
        f(e, { replace: y, state: s, preventScrollReset: a, relative: l, viewTransition: u })
      }
    },
    [h, f, p, i, s, n, e, a, l, u]
  )
}
var Vt = {},
  ga = {},
  ya = {},
  va = {},
  Ac,
  Nm
function Mw() {
  if (Nm) return Ac
  Nm = 1
  var e = 'Expected a function',
    t = NaN,
    n = '[object Symbol]',
    i = /^\s+|\s+$/g,
    s = /^[-+]0x[0-9a-f]+$/i,
    a = /^0b[01]+$/i,
    l = /^0o[0-7]+$/i,
    u = parseInt,
    f = typeof pa == 'object' && pa && pa.Object === Object && pa,
    h = typeof self == 'object' && self && self.Object === Object && self,
    p = f || h || Function('return this')(),
    m = Object.prototype,
    y = m.toString,
    x = Math.max,
    _ = Math.min,
    w = function () {
      return p.Date.now()
    }
  function S(R, A, V) {
    var j,
      W,
      N,
      F,
      q,
      $,
      st = 0,
      tt = !1,
      rt = !1,
      K = !0
    if (typeof R != 'function') throw new TypeError(e)
    ;((A = E(A) || 0),
      P(V) &&
        ((tt = !!V.leading),
        (rt = 'maxWait' in V),
        (N = rt ? x(E(V.maxWait) || 0, A) : N),
        (K = 'trailing' in V ? !!V.trailing : K)))
    function J(ct) {
      var vt = j,
        Et = W
      return ((j = W = void 0), (st = ct), (F = R.apply(Et, vt)), F)
    }
    function Z(ct) {
      return ((st = ct), (q = setTimeout(lt, A)), tt ? J(ct) : F)
    }
    function L(ct) {
      var vt = ct - $,
        Et = ct - st,
        ee = A - vt
      return rt ? _(ee, N - Et) : ee
    }
    function H(ct) {
      var vt = ct - $,
        Et = ct - st
      return $ === void 0 || vt >= A || vt < 0 || (rt && Et >= N)
    }
    function lt() {
      var ct = w()
      if (H(ct)) return ut(ct)
      q = setTimeout(lt, L(ct))
    }
    function ut(ct) {
      return ((q = void 0), K && j ? J(ct) : ((j = W = void 0), F))
    }
    function gt() {
      ;(q !== void 0 && clearTimeout(q), (st = 0), (j = $ = W = q = void 0))
    }
    function dt() {
      return q === void 0 ? F : ut(w())
    }
    function xt() {
      var ct = w(),
        vt = H(ct)
      if (((j = arguments), (W = this), ($ = ct), vt)) {
        if (q === void 0) return Z($)
        if (rt) return ((q = setTimeout(lt, A)), J($))
      }
      return (q === void 0 && (q = setTimeout(lt, A)), F)
    }
    return ((xt.cancel = gt), (xt.flush = dt), xt)
  }
  function k(R, A, V) {
    var j = !0,
      W = !0
    if (typeof R != 'function') throw new TypeError(e)
    return (
      P(V) && ((j = 'leading' in V ? !!V.leading : j), (W = 'trailing' in V ? !!V.trailing : W)),
      S(R, A, { leading: j, maxWait: A, trailing: W })
    )
  }
  function P(R) {
    var A = typeof R
    return !!R && (A == 'object' || A == 'function')
  }
  function C(R) {
    return !!R && typeof R == 'object'
  }
  function T(R) {
    return typeof R == 'symbol' || (C(R) && y.call(R) == n)
  }
  function E(R) {
    if (typeof R == 'number') return R
    if (T(R)) return t
    if (P(R)) {
      var A = typeof R.valueOf == 'function' ? R.valueOf() : R
      R = P(A) ? A + '' : A
    }
    if (typeof R != 'string') return R === 0 ? R : +R
    R = R.replace(i, '')
    var V = a.test(R)
    return V || l.test(R) ? u(R.slice(2), V ? 2 : 8) : s.test(R) ? t : +R
  }
  return ((Ac = k), Ac)
}
var vs = {},
  jm
function Hf() {
  return (
    jm ||
      ((jm = 1),
      Object.defineProperty(vs, '__esModule', { value: !0 }),
      (vs.addPassiveEventListener = function (t, n, i) {
        var s = (function () {
          var a = !1
          try {
            var l = Object.defineProperty({}, 'passive', {
              get: function () {
                a = !0
              },
            })
            window.addEventListener('test', null, l)
          } catch {}
          return a
        })()
        t.addEventListener(n, i, s ? { passive: !0 } : !1)
      }),
      (vs.removePassiveEventListener = function (t, n, i) {
        t.removeEventListener(n, i)
      })),
    vs
  )
}
var Hm
function Wf() {
  if (Hm) return va
  ;((Hm = 1), Object.defineProperty(va, '__esModule', { value: !0 }))
  var e = Mw(),
    t = i(e),
    n = Hf()
  function i(l) {
    return l && l.__esModule ? l : { default: l }
  }
  var s = function (u) {
      var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 66
      return (0, t.default)(u, f)
    },
    a = {
      spyCallbacks: [],
      spySetState: [],
      scrollSpyContainers: [],
      mount: function (u, f) {
        if (u) {
          var h = s(function (p) {
            a.scrollHandler(u)
          }, f)
          ;(a.scrollSpyContainers.push(u), (0, n.addPassiveEventListener)(u, 'scroll', h))
        }
      },
      isMounted: function (u) {
        return a.scrollSpyContainers.indexOf(u) !== -1
      },
      currentPositionX: function (u) {
        if (u === document) {
          var f = window.pageYOffset !== void 0,
            h = (document.compatMode || '') === 'CSS1Compat'
          return f
            ? window.pageXOffset
            : h
              ? document.documentElement.scrollLeft
              : document.body.scrollLeft
        } else return u.scrollLeft
      },
      currentPositionY: function (u) {
        if (u === document) {
          var f = window.pageXOffset !== void 0,
            h = (document.compatMode || '') === 'CSS1Compat'
          return f
            ? window.pageYOffset
            : h
              ? document.documentElement.scrollTop
              : document.body.scrollTop
        } else return u.scrollTop
      },
      scrollHandler: function (u) {
        var f = a.scrollSpyContainers[a.scrollSpyContainers.indexOf(u)].spyCallbacks || []
        f.forEach(function (h) {
          return h(a.currentPositionX(u), a.currentPositionY(u))
        })
      },
      addStateHandler: function (u) {
        a.spySetState.push(u)
      },
      addSpyHandler: function (u, f) {
        var h = a.scrollSpyContainers[a.scrollSpyContainers.indexOf(f)]
        ;(h.spyCallbacks || (h.spyCallbacks = []),
          h.spyCallbacks.push(u),
          u(a.currentPositionX(f), a.currentPositionY(f)))
      },
      updateStates: function () {
        a.spySetState.forEach(function (u) {
          return u()
        })
      },
      unmount: function (u, f) {
        ;(a.scrollSpyContainers.forEach(function (h) {
          return (
            h.spyCallbacks &&
            h.spyCallbacks.length &&
            h.spyCallbacks.indexOf(f) > -1 &&
            h.spyCallbacks.splice(h.spyCallbacks.indexOf(f), 1)
          )
        }),
          a.spySetState &&
            a.spySetState.length &&
            a.spySetState.indexOf(u) > -1 &&
            a.spySetState.splice(a.spySetState.indexOf(u), 1),
          document.removeEventListener('scroll', a.scrollHandler))
      },
      update: function () {
        return a.scrollSpyContainers.forEach(function (u) {
          return a.scrollHandler(u)
        })
      },
    }
  return ((va.default = a), va)
}
var xa = {},
  _a = {},
  Wm
function gl() {
  if (Wm) return _a
  ;((Wm = 1), Object.defineProperty(_a, '__esModule', { value: !0 }))
  var e = function (u, f) {
      var h = u.indexOf('#') === 0 ? u.substring(1) : u,
        p = h ? '#' + h : '',
        m = window && window.location,
        y = p ? m.pathname + m.search + p : m.pathname + m.search
      f ? history.pushState(history.state, '', y) : history.replaceState(history.state, '', y)
    },
    t = function () {
      return window.location.hash.replace(/^#/, '')
    },
    n = function (u) {
      return function (f) {
        return u.contains ? u != f && u.contains(f) : !!(u.compareDocumentPosition(f) & 16)
      }
    },
    i = function (u) {
      return getComputedStyle(u).position !== 'static'
    },
    s = function (u, f) {
      for (var h = u.offsetTop, p = u.offsetParent; p && !f(p); )
        ((h += p.offsetTop), (p = p.offsetParent))
      return { offsetTop: h, offsetParent: p }
    },
    a = function (u, f, h) {
      if (h)
        return u === document
          ? f.getBoundingClientRect().left + (window.scrollX || window.pageXOffset)
          : getComputedStyle(u).position !== 'static'
            ? f.offsetLeft
            : f.offsetLeft - u.offsetLeft
      if (u === document)
        return f.getBoundingClientRect().top + (window.scrollY || window.pageYOffset)
      if (i(u)) {
        if (f.offsetParent !== u) {
          var p = function (S) {
              return S === u || S === document
            },
            m = s(f, p),
            y = m.offsetTop,
            x = m.offsetParent
          if (x !== u) throw new Error('Seems containerElement is not an ancestor of the Element')
          return y
        }
        return f.offsetTop
      }
      if (f.offsetParent === u.offsetParent) return f.offsetTop - u.offsetTop
      var _ = function (S) {
        return S === document
      }
      return s(f, _).offsetTop - s(u, _).offsetTop
    }
  return (
    (_a.default = { updateHash: e, getHash: t, filterElementInContainer: n, scrollOffset: a }),
    _a
  )
}
var wa = {},
  Sa = {},
  Um
function Tw() {
  return (
    Um ||
      ((Um = 1),
      Object.defineProperty(Sa, '__esModule', { value: !0 }),
      (Sa.default = {
        defaultEasing: function (t) {
          return t < 0.5 ? Math.pow(t * 2, 2) / 2 : 1 - Math.pow((1 - t) * 2, 2) / 2
        },
        linear: function (t) {
          return t
        },
        easeInQuad: function (t) {
          return t * t
        },
        easeOutQuad: function (t) {
          return t * (2 - t)
        },
        easeInOutQuad: function (t) {
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
        },
        easeInCubic: function (t) {
          return t * t * t
        },
        easeOutCubic: function (t) {
          return --t * t * t + 1
        },
        easeInOutCubic: function (t) {
          return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
        },
        easeInQuart: function (t) {
          return t * t * t * t
        },
        easeOutQuart: function (t) {
          return 1 - --t * t * t * t
        },
        easeInOutQuart: function (t) {
          return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t
        },
        easeInQuint: function (t) {
          return t * t * t * t * t
        },
        easeOutQuint: function (t) {
          return 1 + --t * t * t * t * t
        },
        easeInOutQuint: function (t) {
          return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
        },
      })),
    Sa
  )
}
var ba = {},
  $m
function Ew() {
  if ($m) return ba
  ;(($m = 1), Object.defineProperty(ba, '__esModule', { value: !0 }))
  var e = Hf(),
    t = ['mousedown', 'mousewheel', 'touchmove', 'keydown']
  return (
    (ba.default = {
      subscribe: function (i) {
        return (
          typeof document < 'u' &&
          t.forEach(function (s) {
            return (0, e.addPassiveEventListener)(document, s, i)
          })
        )
      },
    }),
    ba
  )
}
var ka = {},
  Ym
function Uf() {
  if (Ym) return ka
  ;((Ym = 1), Object.defineProperty(ka, '__esModule', { value: !0 }))
  var e = {
    registered: {},
    scrollEvent: {
      register: function (n, i) {
        e.registered[n] = i
      },
      remove: function (n) {
        e.registered[n] = null
      },
    },
  }
  return ((ka.default = e), ka)
}
var Xm
function Y1() {
  if (Xm) return wa
  ;((Xm = 1), Object.defineProperty(wa, '__esModule', { value: !0 }))
  var e =
      Object.assign ||
      function (W) {
        for (var N = 1; N < arguments.length; N++) {
          var F = arguments[N]
          for (var q in F) Object.prototype.hasOwnProperty.call(F, q) && (W[q] = F[q])
        }
        return W
      },
    t = gl()
  f(t)
  var n = Tw(),
    i = f(n),
    s = Ew(),
    a = f(s),
    l = Uf(),
    u = f(l)
  function f(W) {
    return W && W.__esModule ? W : { default: W }
  }
  var h = function (N) {
      return i.default[N.smooth] || i.default.defaultEasing
    },
    p = function (N) {
      return typeof N == 'function'
        ? N
        : function () {
            return N
          }
    },
    m = function () {
      if (typeof window < 'u')
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame
    },
    y = (function () {
      return (
        m() ||
        function (W, N, F) {
          window.setTimeout(W, F || 1e3 / 60, new Date().getTime())
        }
      )
    })(),
    x = function () {
      return {
        currentPosition: 0,
        startPosition: 0,
        targetPosition: 0,
        progress: 0,
        duration: 0,
        cancel: !1,
        target: null,
        containerElement: null,
        to: null,
        start: null,
        delta: null,
        percent: null,
        delayTimeout: null,
      }
    },
    _ = function (N) {
      var F = N.data.containerElement
      if (F && F !== document && F !== document.body) return F.scrollLeft
      var q = window.pageXOffset !== void 0,
        $ = (document.compatMode || '') === 'CSS1Compat'
      return q
        ? window.pageXOffset
        : $
          ? document.documentElement.scrollLeft
          : document.body.scrollLeft
    },
    w = function (N) {
      var F = N.data.containerElement
      if (F && F !== document && F !== document.body) return F.scrollTop
      var q = window.pageXOffset !== void 0,
        $ = (document.compatMode || '') === 'CSS1Compat'
      return q
        ? window.pageYOffset
        : $
          ? document.documentElement.scrollTop
          : document.body.scrollTop
    },
    S = function (N) {
      var F = N.data.containerElement
      if (F && F !== document && F !== document.body) return F.scrollWidth - F.offsetWidth
      var q = document.body,
        $ = document.documentElement
      return Math.max(q.scrollWidth, q.offsetWidth, $.clientWidth, $.scrollWidth, $.offsetWidth)
    },
    k = function (N) {
      var F = N.data.containerElement
      if (F && F !== document && F !== document.body) return F.scrollHeight - F.offsetHeight
      var q = document.body,
        $ = document.documentElement
      return Math.max(
        q.scrollHeight,
        q.offsetHeight,
        $.clientHeight,
        $.scrollHeight,
        $.offsetHeight
      )
    },
    P = function W(N, F, q) {
      var $ = F.data
      if (!F.ignoreCancelEvents && $.cancel) {
        u.default.registered.end && u.default.registered.end($.to, $.target, $.currentPositionY)
        return
      }
      if (
        (($.delta = Math.round($.targetPosition - $.startPosition)),
        $.start === null && ($.start = q),
        ($.progress = q - $.start),
        ($.percent = $.progress >= $.duration ? 1 : N($.progress / $.duration)),
        ($.currentPosition = $.startPosition + Math.ceil($.delta * $.percent)),
        $.containerElement &&
        $.containerElement !== document &&
        $.containerElement !== document.body
          ? F.horizontal
            ? ($.containerElement.scrollLeft = $.currentPosition)
            : ($.containerElement.scrollTop = $.currentPosition)
          : F.horizontal
            ? window.scrollTo($.currentPosition, 0)
            : window.scrollTo(0, $.currentPosition),
        $.percent < 1)
      ) {
        var st = W.bind(null, N, F)
        y.call(window, st)
        return
      }
      u.default.registered.end && u.default.registered.end($.to, $.target, $.currentPosition)
    },
    C = function (N) {
      N.data.containerElement = N
        ? N.containerId
          ? document.getElementById(N.containerId)
          : N.container && N.container.nodeType
            ? N.container
            : document
        : null
    },
    T = function (N, F, q, $) {
      if (
        ((F.data = F.data || x()),
        window.clearTimeout(F.data.delayTimeout),
        a.default.subscribe(function () {
          F.data.cancel = !0
        }),
        C(F),
        (F.data.start = null),
        (F.data.cancel = !1),
        (F.data.startPosition = F.horizontal ? _(F) : w(F)),
        (F.data.targetPosition = F.absolute ? N : N + F.data.startPosition),
        F.data.startPosition === F.data.targetPosition)
      ) {
        u.default.registered.end &&
          u.default.registered.end(F.data.to, F.data.target, F.data.currentPosition)
        return
      }
      ;((F.data.delta = Math.round(F.data.targetPosition - F.data.startPosition)),
        (F.data.duration = p(F.duration)(F.data.delta)),
        (F.data.duration = isNaN(parseFloat(F.data.duration)) ? 1e3 : parseFloat(F.data.duration)),
        (F.data.to = q),
        (F.data.target = $))
      var st = h(F),
        tt = P.bind(null, st, F)
      if (F && F.delay > 0) {
        F.data.delayTimeout = window.setTimeout(function () {
          ;(u.default.registered.begin && u.default.registered.begin(F.data.to, F.data.target),
            y.call(window, tt))
        }, F.delay)
        return
      }
      ;(u.default.registered.begin && u.default.registered.begin(F.data.to, F.data.target),
        y.call(window, tt))
    },
    E = function (N) {
      return ((N = e({}, N)), (N.data = N.data || x()), (N.absolute = !0), N)
    },
    R = function (N) {
      T(0, E(N))
    },
    A = function (N, F) {
      T(N, E(F))
    },
    V = function (N) {
      ;((N = E(N)), C(N), T(N.horizontal ? S(N) : k(N), N))
    },
    j = function (N, F) {
      ;((F = E(F)), C(F))
      var q = F.horizontal ? _(F) : w(F)
      T(N + q, F)
    }
  return (
    (wa.default = {
      animateTopScroll: T,
      getAnimationType: h,
      scrollToTop: R,
      scrollToBottom: V,
      scrollTo: A,
      scrollMore: j,
    }),
    wa
  )
}
var Km
function yl() {
  if (Km) return xa
  ;((Km = 1), Object.defineProperty(xa, '__esModule', { value: !0 }))
  var e =
      Object.assign ||
      function (p) {
        for (var m = 1; m < arguments.length; m++) {
          var y = arguments[m]
          for (var x in y) Object.prototype.hasOwnProperty.call(y, x) && (p[x] = y[x])
        }
        return p
      },
    t = gl(),
    n = u(t),
    i = Y1(),
    s = u(i),
    a = Uf(),
    l = u(a)
  function u(p) {
    return p && p.__esModule ? p : { default: p }
  }
  var f = {},
    h = void 0
  return (
    (xa.default = {
      unmount: function () {
        f = {}
      },
      register: function (m, y) {
        f[m] = y
      },
      unregister: function (m) {
        delete f[m]
      },
      get: function (m) {
        return (
          f[m] ||
          document.getElementById(m) ||
          document.getElementsByName(m)[0] ||
          document.getElementsByClassName(m)[0]
        )
      },
      setActiveLink: function (m) {
        return (h = m)
      },
      getActiveLink: function () {
        return h
      },
      scrollTo: function (m, y) {
        var x = this.get(m)
        if (!x) {
          console.warn('target Element not found')
          return
        }
        y = e({}, y, { absolute: !1 })
        var _ = y.containerId,
          w = y.container,
          S = void 0
        ;(_ ? (S = document.getElementById(_)) : w && w.nodeType ? (S = w) : (S = document),
          (y.absolute = !0))
        var k = y.horizontal,
          P = n.default.scrollOffset(S, x, k) + (y.offset || 0)
        if (!y.smooth) {
          ;(l.default.registered.begin && l.default.registered.begin(m, x),
            S === document
              ? y.horizontal
                ? window.scrollTo(P, 0)
                : window.scrollTo(0, P)
              : (S.scrollTop = P),
            l.default.registered.end && l.default.registered.end(m, x))
          return
        }
        s.default.animateTopScroll(P, y, m, x)
      },
    }),
    xa
  )
}
var Rc = { exports: {} },
  Fc,
  Gm
function Ow() {
  if (Gm) return Fc
  Gm = 1
  var e = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
  return ((Fc = e), Fc)
}
var Ic, qm
function Lw() {
  if (qm) return Ic
  qm = 1
  var e = Ow()
  function t() {}
  function n() {}
  return (
    (n.resetWarningCache = t),
    (Ic = function () {
      function i(l, u, f, h, p, m) {
        if (m !== e) {
          var y = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
          )
          throw ((y.name = 'Invariant Violation'), y)
        }
      }
      i.isRequired = i
      function s() {
        return i
      }
      var a = {
        array: i,
        bigint: i,
        bool: i,
        func: i,
        number: i,
        object: i,
        string: i,
        symbol: i,
        any: i,
        arrayOf: s,
        element: i,
        elementType: i,
        instanceOf: s,
        node: i,
        objectOf: s,
        oneOf: s,
        oneOfType: s,
        shape: s,
        exact: s,
        checkPropTypes: n,
        resetWarningCache: t,
      }
      return ((a.PropTypes = a), a)
    }),
    Ic
  )
}
var Qm
function vl() {
  return (Qm || ((Qm = 1), (Rc.exports = Lw()())), Rc.exports)
}
var Pa = {},
  Zm
function X1() {
  if (Zm) return Pa
  ;((Zm = 1), Object.defineProperty(Pa, '__esModule', { value: !0 }), Hf())
  var e = gl(),
    t = n(e)
  function n(s) {
    return s && s.__esModule ? s : { default: s }
  }
  var i = {
    mountFlag: !1,
    initialized: !1,
    scroller: null,
    containers: {},
    mount: function (a) {
      ;((this.scroller = a),
        (this.handleHashChange = this.handleHashChange.bind(this)),
        window.addEventListener('hashchange', this.handleHashChange),
        this.initStateFromHash(),
        (this.mountFlag = !0))
    },
    mapContainer: function (a, l) {
      this.containers[a] = l
    },
    isMounted: function () {
      return this.mountFlag
    },
    isInitialized: function () {
      return this.initialized
    },
    initStateFromHash: function () {
      var a = this,
        l = this.getHash()
      l
        ? window.setTimeout(function () {
            ;(a.scrollTo(l, !0), (a.initialized = !0))
          }, 10)
        : (this.initialized = !0)
    },
    scrollTo: function (a, l) {
      var u = this.scroller,
        f = u.get(a)
      if (f && (l || a !== u.getActiveLink())) {
        var h = this.containers[a] || document
        u.scrollTo(a, { container: h })
      }
    },
    getHash: function () {
      return t.default.getHash()
    },
    changeHash: function (a, l) {
      this.isInitialized() && t.default.getHash() !== a && t.default.updateHash(a, l)
    },
    handleHashChange: function () {
      this.scrollTo(this.getHash())
    },
    unmount: function () {
      ;((this.scroller = null),
        (this.containers = null),
        window.removeEventListener('hashchange', this.handleHashChange))
    },
  }
  return ((Pa.default = i), Pa)
}
var Jm
function $f() {
  if (Jm) return ya
  ;((Jm = 1), Object.defineProperty(ya, '__esModule', { value: !0 }))
  var e =
      Object.assign ||
      function (k) {
        for (var P = 1; P < arguments.length; P++) {
          var C = arguments[P]
          for (var T in C) Object.prototype.hasOwnProperty.call(C, T) && (k[T] = C[T])
        }
        return k
      },
    t = (function () {
      function k(P, C) {
        for (var T = 0; T < C.length; T++) {
          var E = C[T]
          ;((E.enumerable = E.enumerable || !1),
            (E.configurable = !0),
            'value' in E && (E.writable = !0),
            Object.defineProperty(P, E.key, E))
        }
      }
      return function (P, C, T) {
        return (C && k(P.prototype, C), T && k(P, T), P)
      }
    })(),
    n = En(),
    i = y(n),
    s = Wf(),
    a = y(s),
    l = yl(),
    u = y(l),
    f = vl(),
    h = y(f),
    p = X1(),
    m = y(p)
  function y(k) {
    return k && k.__esModule ? k : { default: k }
  }
  function x(k, P) {
    if (!(k instanceof P)) throw new TypeError('Cannot call a class as a function')
  }
  function _(k, P) {
    if (!k) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
    return P && (typeof P == 'object' || typeof P == 'function') ? P : k
  }
  function w(k, P) {
    if (typeof P != 'function' && P !== null)
      throw new TypeError('Super expression must either be null or a function, not ' + typeof P)
    ;((k.prototype = Object.create(P && P.prototype, {
      constructor: { value: k, enumerable: !1, writable: !0, configurable: !0 },
    })),
      P && (Object.setPrototypeOf ? Object.setPrototypeOf(k, P) : (k.__proto__ = P)))
  }
  var S = {
    to: h.default.string.isRequired,
    containerId: h.default.string,
    container: h.default.object,
    activeClass: h.default.string,
    activeStyle: h.default.object,
    spy: h.default.bool,
    horizontal: h.default.bool,
    smooth: h.default.oneOfType([h.default.bool, h.default.string]),
    offset: h.default.number,
    delay: h.default.number,
    isDynamic: h.default.bool,
    onClick: h.default.func,
    duration: h.default.oneOfType([h.default.number, h.default.func]),
    absolute: h.default.bool,
    onSetActive: h.default.func,
    onSetInactive: h.default.func,
    ignoreCancelEvents: h.default.bool,
    hashSpy: h.default.bool,
    saveHashHistory: h.default.bool,
    spyThrottle: h.default.number,
  }
  return (
    (ya.default = function (k, P) {
      var C = P || u.default,
        T = (function (R) {
          w(A, R)
          function A(V) {
            x(this, A)
            var j = _(this, (A.__proto__ || Object.getPrototypeOf(A)).call(this, V))
            return (E.call(j), (j.state = { active: !1 }), j)
          }
          return (
            t(A, [
              {
                key: 'getScrollSpyContainer',
                value: function () {
                  var j = this.props.containerId,
                    W = this.props.container
                  return j && !W ? document.getElementById(j) : W && W.nodeType ? W : document
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  if (this.props.spy || this.props.hashSpy) {
                    var j = this.getScrollSpyContainer()
                    ;(a.default.isMounted(j) || a.default.mount(j, this.props.spyThrottle),
                      this.props.hashSpy &&
                        (m.default.isMounted() || m.default.mount(C),
                        m.default.mapContainer(this.props.to, j)),
                      a.default.addSpyHandler(this.spyHandler, j),
                      this.setState({ container: j }))
                  }
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  a.default.unmount(this.stateHandler, this.spyHandler)
                },
              },
              {
                key: 'render',
                value: function () {
                  var j = ''
                  this.state && this.state.active
                    ? (j = (
                        (this.props.className || '') +
                        ' ' +
                        (this.props.activeClass || 'active')
                      ).trim())
                    : (j = this.props.className)
                  var W = {}
                  this.state && this.state.active
                    ? (W = e({}, this.props.style, this.props.activeStyle))
                    : (W = e({}, this.props.style))
                  var N = e({}, this.props)
                  for (var F in S) N.hasOwnProperty(F) && delete N[F]
                  return (
                    (N.className = j),
                    (N.style = W),
                    (N.onClick = this.handleClick),
                    i.default.createElement(k, N)
                  )
                },
              },
            ]),
            A
          )
        })(i.default.PureComponent),
        E = function () {
          var A = this
          ;((this.scrollTo = function (V, j) {
            C.scrollTo(V, e({}, A.state, j))
          }),
            (this.handleClick = function (V) {
              ;(A.props.onClick && A.props.onClick(V),
                V.stopPropagation && V.stopPropagation(),
                V.preventDefault && V.preventDefault(),
                A.scrollTo(A.props.to, A.props))
            }),
            (this.spyHandler = function (V, j) {
              var W = A.getScrollSpyContainer()
              if (!(m.default.isMounted() && !m.default.isInitialized())) {
                var N = A.props.horizontal,
                  F = A.props.to,
                  q = null,
                  $ = void 0,
                  st = void 0
                if (N) {
                  var tt = 0,
                    rt = 0,
                    K = 0
                  if (W.getBoundingClientRect) {
                    var J = W.getBoundingClientRect()
                    K = J.left
                  }
                  if (!q || A.props.isDynamic) {
                    if (((q = C.get(F)), !q)) return
                    var Z = q.getBoundingClientRect()
                    ;((tt = Z.left - K + V), (rt = tt + Z.width))
                  }
                  var L = V - A.props.offset
                  ;(($ = L >= Math.floor(tt) && L < Math.floor(rt)),
                    (st = L < Math.floor(tt) || L >= Math.floor(rt)))
                } else {
                  var H = 0,
                    lt = 0,
                    ut = 0
                  if (W.getBoundingClientRect) {
                    var gt = W.getBoundingClientRect()
                    ut = gt.top
                  }
                  if (!q || A.props.isDynamic) {
                    if (((q = C.get(F)), !q)) return
                    var dt = q.getBoundingClientRect()
                    ;((H = dt.top - ut + j), (lt = H + dt.height))
                  }
                  var xt = j - A.props.offset
                  ;(($ = xt >= Math.floor(H) && xt < Math.floor(lt)),
                    (st = xt < Math.floor(H) || xt >= Math.floor(lt)))
                }
                var ct = C.getActiveLink()
                if (st) {
                  if (
                    (F === ct && C.setActiveLink(void 0),
                    A.props.hashSpy && m.default.getHash() === F)
                  ) {
                    var vt = A.props.saveHashHistory,
                      Et = vt === void 0 ? !1 : vt
                    m.default.changeHash('', Et)
                  }
                  A.props.spy &&
                    A.state.active &&
                    (A.setState({ active: !1 }),
                    A.props.onSetInactive && A.props.onSetInactive(F, q))
                }
                if ($ && (ct !== F || A.state.active === !1)) {
                  C.setActiveLink(F)
                  var ee = A.props.saveHashHistory,
                    Lr = ee === void 0 ? !1 : ee
                  ;(A.props.hashSpy && m.default.changeHash(F, Lr),
                    A.props.spy &&
                      (A.setState({ active: !0 }),
                      A.props.onSetActive && A.props.onSetActive(F, q)))
                }
              }
            }))
        }
      return ((T.propTypes = S), (T.defaultProps = { offset: 0 }), T)
    }),
    ya
  )
}
var tg
function Dw() {
  if (tg) return ga
  ;((tg = 1), Object.defineProperty(ga, '__esModule', { value: !0 }))
  var e = En(),
    t = s(e),
    n = $f(),
    i = s(n)
  function s(h) {
    return h && h.__esModule ? h : { default: h }
  }
  function a(h, p) {
    if (!(h instanceof p)) throw new TypeError('Cannot call a class as a function')
  }
  function l(h, p) {
    if (!h) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
    return p && (typeof p == 'object' || typeof p == 'function') ? p : h
  }
  function u(h, p) {
    if (typeof p != 'function' && p !== null)
      throw new TypeError('Super expression must either be null or a function, not ' + typeof p)
    ;((h.prototype = Object.create(p && p.prototype, {
      constructor: { value: h, enumerable: !1, writable: !0, configurable: !0 },
    })),
      p && (Object.setPrototypeOf ? Object.setPrototypeOf(h, p) : (h.__proto__ = p)))
  }
  var f = (function (h) {
    u(p, h)
    function p() {
      var m, y, x, _
      a(this, p)
      for (var w = arguments.length, S = Array(w), k = 0; k < w; k++) S[k] = arguments[k]
      return (
        (_ =
          ((y =
            ((x = l(
              this,
              (m = p.__proto__ || Object.getPrototypeOf(p)).call.apply(m, [this].concat(S))
            )),
            x)),
          (x.render = function () {
            return t.default.createElement('a', x.props, x.props.children)
          }),
          y)),
        l(x, _)
      )
    }
    return p
  })(t.default.Component)
  return ((ga.default = (0, i.default)(f)), ga)
}
var Ca = {},
  eg
function Aw() {
  if (eg) return Ca
  ;((eg = 1), Object.defineProperty(Ca, '__esModule', { value: !0 }))
  var e = (function () {
      function p(m, y) {
        for (var x = 0; x < y.length; x++) {
          var _ = y[x]
          ;((_.enumerable = _.enumerable || !1),
            (_.configurable = !0),
            'value' in _ && (_.writable = !0),
            Object.defineProperty(m, _.key, _))
        }
      }
      return function (m, y, x) {
        return (y && p(m.prototype, y), x && p(m, x), m)
      }
    })(),
    t = En(),
    n = a(t),
    i = $f(),
    s = a(i)
  function a(p) {
    return p && p.__esModule ? p : { default: p }
  }
  function l(p, m) {
    if (!(p instanceof m)) throw new TypeError('Cannot call a class as a function')
  }
  function u(p, m) {
    if (!p) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
    return m && (typeof m == 'object' || typeof m == 'function') ? m : p
  }
  function f(p, m) {
    if (typeof m != 'function' && m !== null)
      throw new TypeError('Super expression must either be null or a function, not ' + typeof m)
    ;((p.prototype = Object.create(m && m.prototype, {
      constructor: { value: p, enumerable: !1, writable: !0, configurable: !0 },
    })),
      m && (Object.setPrototypeOf ? Object.setPrototypeOf(p, m) : (p.__proto__ = m)))
  }
  var h = (function (p) {
    f(m, p)
    function m() {
      return (l(this, m), u(this, (m.__proto__ || Object.getPrototypeOf(m)).apply(this, arguments)))
    }
    return (
      e(m, [
        {
          key: 'render',
          value: function () {
            return n.default.createElement('input', this.props, this.props.children)
          },
        },
      ]),
      m
    )
  })(n.default.Component)
  return ((Ca.default = (0, s.default)(h)), Ca)
}
var Ma = {},
  Ta = {},
  ng
function K1() {
  if (ng) return Ta
  ;((ng = 1), Object.defineProperty(Ta, '__esModule', { value: !0 }))
  var e =
      Object.assign ||
      function (x) {
        for (var _ = 1; _ < arguments.length; _++) {
          var w = arguments[_]
          for (var S in w) Object.prototype.hasOwnProperty.call(w, S) && (x[S] = w[S])
        }
        return x
      },
    t = (function () {
      function x(_, w) {
        for (var S = 0; S < w.length; S++) {
          var k = w[S]
          ;((k.enumerable = k.enumerable || !1),
            (k.configurable = !0),
            'value' in k && (k.writable = !0),
            Object.defineProperty(_, k.key, k))
        }
      }
      return function (_, w, S) {
        return (w && x(_.prototype, w), S && x(_, S), _)
      }
    })(),
    n = En(),
    i = h(n),
    s = pl()
  h(s)
  var a = yl(),
    l = h(a),
    u = vl(),
    f = h(u)
  function h(x) {
    return x && x.__esModule ? x : { default: x }
  }
  function p(x, _) {
    if (!(x instanceof _)) throw new TypeError('Cannot call a class as a function')
  }
  function m(x, _) {
    if (!x) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
    return _ && (typeof _ == 'object' || typeof _ == 'function') ? _ : x
  }
  function y(x, _) {
    if (typeof _ != 'function' && _ !== null)
      throw new TypeError('Super expression must either be null or a function, not ' + typeof _)
    ;((x.prototype = Object.create(_ && _.prototype, {
      constructor: { value: x, enumerable: !1, writable: !0, configurable: !0 },
    })),
      _ && (Object.setPrototypeOf ? Object.setPrototypeOf(x, _) : (x.__proto__ = _)))
  }
  return (
    (Ta.default = function (x) {
      var _ = (function (w) {
        y(S, w)
        function S(k) {
          p(this, S)
          var P = m(this, (S.__proto__ || Object.getPrototypeOf(S)).call(this, k))
          return ((P.childBindings = { domNode: null }), P)
        }
        return (
          t(S, [
            {
              key: 'componentDidMount',
              value: function () {
                if (typeof window > 'u') return !1
                this.registerElems(this.props.name)
              },
            },
            {
              key: 'componentDidUpdate',
              value: function (P) {
                this.props.name !== P.name && this.registerElems(this.props.name)
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                if (typeof window > 'u') return !1
                l.default.unregister(this.props.name)
              },
            },
            {
              key: 'registerElems',
              value: function (P) {
                l.default.register(P, this.childBindings.domNode)
              },
            },
            {
              key: 'render',
              value: function () {
                return i.default.createElement(
                  x,
                  e({}, this.props, { parentBindings: this.childBindings })
                )
              },
            },
          ]),
          S
        )
      })(i.default.Component)
      return ((_.propTypes = { name: f.default.string, id: f.default.string }), _)
    }),
    Ta
  )
}
var ig
function Rw() {
  if (ig) return Ma
  ;((ig = 1), Object.defineProperty(Ma, '__esModule', { value: !0 }))
  var e =
      Object.assign ||
      function (x) {
        for (var _ = 1; _ < arguments.length; _++) {
          var w = arguments[_]
          for (var S in w) Object.prototype.hasOwnProperty.call(w, S) && (x[S] = w[S])
        }
        return x
      },
    t = (function () {
      function x(_, w) {
        for (var S = 0; S < w.length; S++) {
          var k = w[S]
          ;((k.enumerable = k.enumerable || !1),
            (k.configurable = !0),
            'value' in k && (k.writable = !0),
            Object.defineProperty(_, k.key, k))
        }
      }
      return function (_, w, S) {
        return (w && x(_.prototype, w), S && x(_, S), _)
      }
    })(),
    n = En(),
    i = f(n),
    s = K1(),
    a = f(s),
    l = vl(),
    u = f(l)
  function f(x) {
    return x && x.__esModule ? x : { default: x }
  }
  function h(x, _) {
    if (!(x instanceof _)) throw new TypeError('Cannot call a class as a function')
  }
  function p(x, _) {
    if (!x) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
    return _ && (typeof _ == 'object' || typeof _ == 'function') ? _ : x
  }
  function m(x, _) {
    if (typeof _ != 'function' && _ !== null)
      throw new TypeError('Super expression must either be null or a function, not ' + typeof _)
    ;((x.prototype = Object.create(_ && _.prototype, {
      constructor: { value: x, enumerable: !1, writable: !0, configurable: !0 },
    })),
      _ && (Object.setPrototypeOf ? Object.setPrototypeOf(x, _) : (x.__proto__ = _)))
  }
  var y = (function (x) {
    m(_, x)
    function _() {
      return (h(this, _), p(this, (_.__proto__ || Object.getPrototypeOf(_)).apply(this, arguments)))
    }
    return (
      t(_, [
        {
          key: 'render',
          value: function () {
            var S = this,
              k = e({}, this.props)
            return (
              k.parentBindings && delete k.parentBindings,
              i.default.createElement(
                'div',
                e({}, k, {
                  ref: function (C) {
                    S.props.parentBindings.domNode = C
                  },
                }),
                this.props.children
              )
            )
          },
        },
      ]),
      _
    )
  })(i.default.Component)
  return (
    (y.propTypes = { name: u.default.string, id: u.default.string }),
    (Ma.default = (0, a.default)(y)),
    Ma
  )
}
var Vc, rg
function Fw() {
  if (rg) return Vc
  rg = 1
  var e =
      Object.assign ||
      function (y) {
        for (var x = 1; x < arguments.length; x++) {
          var _ = arguments[x]
          for (var w in _) Object.prototype.hasOwnProperty.call(_, w) && (y[w] = _[w])
        }
        return y
      },
    t = (function () {
      function y(x, _) {
        for (var w = 0; w < _.length; w++) {
          var S = _[w]
          ;((S.enumerable = S.enumerable || !1),
            (S.configurable = !0),
            'value' in S && (S.writable = !0),
            Object.defineProperty(x, S.key, S))
        }
      }
      return function (x, _, w) {
        return (_ && y(x.prototype, _), w && y(x, w), x)
      }
    })()
  function n(y, x) {
    if (!(y instanceof x)) throw new TypeError('Cannot call a class as a function')
  }
  function i(y, x) {
    if (!y) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
    return x && (typeof x == 'object' || typeof x == 'function') ? x : y
  }
  function s(y, x) {
    if (typeof x != 'function' && x !== null)
      throw new TypeError('Super expression must either be null or a function, not ' + typeof x)
    ;((y.prototype = Object.create(x && x.prototype, {
      constructor: { value: y, enumerable: !1, writable: !0, configurable: !0 },
    })),
      x && (Object.setPrototypeOf ? Object.setPrototypeOf(y, x) : (y.__proto__ = x)))
  }
  var a = En()
  ;(pl(), gl())
  var l = Wf(),
    u = yl(),
    f = vl(),
    h = X1(),
    p = {
      to: f.string.isRequired,
      containerId: f.string,
      container: f.object,
      activeClass: f.string,
      spy: f.bool,
      smooth: f.oneOfType([f.bool, f.string]),
      offset: f.number,
      delay: f.number,
      isDynamic: f.bool,
      onClick: f.func,
      duration: f.oneOfType([f.number, f.func]),
      absolute: f.bool,
      onSetActive: f.func,
      onSetInactive: f.func,
      ignoreCancelEvents: f.bool,
      hashSpy: f.bool,
      spyThrottle: f.number,
    },
    m = {
      Scroll: function (x, _) {
        console.warn('Helpers.Scroll is deprecated since v1.7.0')
        var w = _ || u,
          S = (function (P) {
            s(C, P)
            function C(T) {
              n(this, C)
              var E = i(this, (C.__proto__ || Object.getPrototypeOf(C)).call(this, T))
              return (k.call(E), (E.state = { active: !1 }), E)
            }
            return (
              t(C, [
                {
                  key: 'getScrollSpyContainer',
                  value: function () {
                    var E = this.props.containerId,
                      R = this.props.container
                    return E ? document.getElementById(E) : R && R.nodeType ? R : document
                  },
                },
                {
                  key: 'componentDidMount',
                  value: function () {
                    if (this.props.spy || this.props.hashSpy) {
                      var E = this.getScrollSpyContainer()
                      ;(l.isMounted(E) || l.mount(E, this.props.spyThrottle),
                        this.props.hashSpy &&
                          (h.isMounted() || h.mount(w), h.mapContainer(this.props.to, E)),
                        this.props.spy && l.addStateHandler(this.stateHandler),
                        l.addSpyHandler(this.spyHandler, E),
                        this.setState({ container: E }))
                    }
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    l.unmount(this.stateHandler, this.spyHandler)
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var E = ''
                    this.state && this.state.active
                      ? (E = (
                          (this.props.className || '') +
                          ' ' +
                          (this.props.activeClass || 'active')
                        ).trim())
                      : (E = this.props.className)
                    var R = e({}, this.props)
                    for (var A in p) R.hasOwnProperty(A) && delete R[A]
                    return (
                      (R.className = E),
                      (R.onClick = this.handleClick),
                      a.createElement(x, R)
                    )
                  },
                },
              ]),
              C
            )
          })(a.Component),
          k = function () {
            var C = this
            ;((this.scrollTo = function (T, E) {
              w.scrollTo(T, e({}, C.state, E))
            }),
              (this.handleClick = function (T) {
                ;(C.props.onClick && C.props.onClick(T),
                  T.stopPropagation && T.stopPropagation(),
                  T.preventDefault && T.preventDefault(),
                  C.scrollTo(C.props.to, C.props))
              }),
              (this.stateHandler = function () {
                w.getActiveLink() !== C.props.to &&
                  (C.state !== null &&
                    C.state.active &&
                    C.props.onSetInactive &&
                    C.props.onSetInactive(),
                  C.setState({ active: !1 }))
              }),
              (this.spyHandler = function (T) {
                var E = C.getScrollSpyContainer()
                if (!(h.isMounted() && !h.isInitialized())) {
                  var R = C.props.to,
                    A = null,
                    V = 0,
                    j = 0,
                    W = 0
                  if (E.getBoundingClientRect) {
                    var N = E.getBoundingClientRect()
                    W = N.top
                  }
                  if (!A || C.props.isDynamic) {
                    if (((A = w.get(R)), !A)) return
                    var F = A.getBoundingClientRect()
                    ;((V = F.top - W + T), (j = V + F.height))
                  }
                  var q = T - C.props.offset,
                    $ = q >= Math.floor(V) && q < Math.floor(j),
                    st = q < Math.floor(V) || q >= Math.floor(j),
                    tt = w.getActiveLink()
                  if (st)
                    return (
                      R === tt && w.setActiveLink(void 0),
                      C.props.hashSpy && h.getHash() === R && h.changeHash(),
                      C.props.spy &&
                        C.state.active &&
                        (C.setState({ active: !1 }),
                        C.props.onSetInactive && C.props.onSetInactive()),
                      l.updateStates()
                    )
                  if ($ && tt !== R)
                    return (
                      w.setActiveLink(R),
                      C.props.hashSpy && h.changeHash(R),
                      C.props.spy &&
                        (C.setState({ active: !0 }), C.props.onSetActive && C.props.onSetActive(R)),
                      l.updateStates()
                    )
                }
              }))
          }
        return ((S.propTypes = p), (S.defaultProps = { offset: 0 }), S)
      },
      Element: function (x) {
        console.warn('Helpers.Element is deprecated since v1.7.0')
        var _ = (function (w) {
          s(S, w)
          function S(k) {
            n(this, S)
            var P = i(this, (S.__proto__ || Object.getPrototypeOf(S)).call(this, k))
            return ((P.childBindings = { domNode: null }), P)
          }
          return (
            t(S, [
              {
                key: 'componentDidMount',
                value: function () {
                  if (typeof window > 'u') return !1
                  this.registerElems(this.props.name)
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (P) {
                  this.props.name !== P.name && this.registerElems(this.props.name)
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  if (typeof window > 'u') return !1
                  u.unregister(this.props.name)
                },
              },
              {
                key: 'registerElems',
                value: function (P) {
                  u.register(P, this.childBindings.domNode)
                },
              },
              {
                key: 'render',
                value: function () {
                  return a.createElement(
                    x,
                    e({}, this.props, { parentBindings: this.childBindings })
                  )
                },
              },
            ]),
            S
          )
        })(a.Component)
        return ((_.propTypes = { name: f.string, id: f.string }), _)
      },
    }
  return ((Vc = m), Vc)
}
var sg
function Iw() {
  if (sg) return Vt
  ;((sg = 1),
    Object.defineProperty(Vt, '__esModule', { value: !0 }),
    (Vt.Helpers =
      Vt.ScrollElement =
      Vt.ScrollLink =
      Vt.animateScroll =
      Vt.scrollSpy =
      Vt.Events =
      Vt.scroller =
      Vt.Element =
      Vt.Button =
      Vt.Link =
        void 0))
  var e = Dw(),
    t = T(e),
    n = Aw(),
    i = T(n),
    s = Rw(),
    a = T(s),
    l = yl(),
    u = T(l),
    f = Uf(),
    h = T(f),
    p = Wf(),
    m = T(p),
    y = Y1(),
    x = T(y),
    _ = $f(),
    w = T(_),
    S = K1(),
    k = T(S),
    P = Fw(),
    C = T(P)
  function T(E) {
    return E && E.__esModule ? E : { default: E }
  }
  return (
    (Vt.Link = t.default),
    (Vt.Button = i.default),
    (Vt.Element = a.default),
    (Vt.scroller = u.default),
    (Vt.Events = h.default),
    (Vt.scrollSpy = m.default),
    (Vt.animateScroll = x.default),
    (Vt.ScrollLink = w.default),
    (Vt.ScrollElement = k.default),
    (Vt.Helpers = C.default),
    (Vt.default = {
      Link: t.default,
      Button: i.default,
      Element: a.default,
      scroller: u.default,
      Events: h.default,
      scrollSpy: m.default,
      animateScroll: x.default,
      ScrollLink: w.default,
      ScrollElement: k.default,
      Helpers: C.default,
    }),
    Vt
  )
}
var $T = Iw(),
  G1 = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
  og = an.createContext && an.createContext(G1),
  ri = function () {
    return (
      (ri =
        Object.assign ||
        function (e) {
          for (var t, n = 1, i = arguments.length; n < i; n++) {
            t = arguments[n]
            for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s])
          }
          return e
        }),
      ri.apply(this, arguments)
    )
  },
  Vw = function (e, t) {
    var n = {}
    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i])
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var s = 0, i = Object.getOwnPropertySymbols(e); s < i.length; s++)
        t.indexOf(i[s]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, i[s]) &&
          (n[i[s]] = e[i[s]])
    return n
  }
function q1(e) {
  return (
    e &&
    e.map(function (t, n) {
      return an.createElement(t.tag, ri({ key: n }, t.attr), q1(t.child))
    })
  )
}
function Tt(e) {
  return function (t) {
    return an.createElement(zw, ri({ attr: ri({}, e.attr) }, t), q1(e.child))
  }
}
function zw(e) {
  var t = function (n) {
    var i = e.attr,
      s = e.size,
      a = e.title,
      l = Vw(e, ['attr', 'size', 'title']),
      u = s || n.size || '1em',
      f
    return (
      n.className && (f = n.className),
      e.className && (f = (f ? f + ' ' : '') + e.className),
      an.createElement(
        'svg',
        ri({ stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' }, n.attr, i, l, {
          className: f,
          style: ri(ri({ color: e.color || n.color }, n.style), e.style),
          height: u,
          width: u,
          xmlns: 'http://www.w3.org/2000/svg',
        }),
        a && an.createElement('title', null, a),
        e.children
      )
    )
  }
  return og !== void 0
    ? an.createElement(og.Consumer, null, function (n) {
        return t(n)
      })
    : t(G1)
}
function YT(e) {
  return Tt({
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z',
        },
      },
    ],
  })(e)
}
function XT(e) {
  return Tt({
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z',
        },
      },
    ],
  })(e)
}
function KT(e) {
  return Tt({
    attr: { viewBox: '0 0 448 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M272.1 204.2v71.1c0 1.8-1.4 3.2-3.2 3.2h-11.4c-1.1 0-2.1-.6-2.6-1.3l-32.6-44v42.2c0 1.8-1.4 3.2-3.2 3.2h-11.4c-1.8 0-3.2-1.4-3.2-3.2v-71.1c0-1.8 1.4-3.2 3.2-3.2H219c1 0 2.1.5 2.6 1.4l32.6 44v-42.2c0-1.8 1.4-3.2 3.2-3.2h11.4c1.8-.1 3.3 1.4 3.3 3.1zm-82-3.2h-11.4c-1.8 0-3.2 1.4-3.2 3.2v71.1c0 1.8 1.4 3.2 3.2 3.2h11.4c1.8 0 3.2-1.4 3.2-3.2v-71.1c0-1.7-1.4-3.2-3.2-3.2zm-27.5 59.6h-31.1v-56.4c0-1.8-1.4-3.2-3.2-3.2h-11.4c-1.8 0-3.2 1.4-3.2 3.2v71.1c0 .9.3 1.6.9 2.2.6.5 1.3.9 2.2.9h45.7c1.8 0 3.2-1.4 3.2-3.2v-11.4c0-1.7-1.4-3.2-3.1-3.2zM332.1 201h-45.7c-1.7 0-3.2 1.4-3.2 3.2v71.1c0 1.7 1.4 3.2 3.2 3.2h45.7c1.8 0 3.2-1.4 3.2-3.2v-11.4c0-1.8-1.4-3.2-3.2-3.2H301v-12h31.1c1.8 0 3.2-1.4 3.2-3.2V234c0-1.8-1.4-3.2-3.2-3.2H301v-12h31.1c1.8 0 3.2-1.4 3.2-3.2v-11.4c-.1-1.7-1.5-3.2-3.2-3.2zM448 113.7V399c-.1 44.8-36.8 81.1-81.7 81H81c-44.8-.1-81.1-36.9-81-81.7V113c.1-44.8 36.9-81.1 81.7-81H367c44.8.1 81.1 36.8 81 81.7zm-61.6 122.6c0-73-73.2-132.4-163.1-132.4-89.9 0-163.1 59.4-163.1 132.4 0 65.4 58 120.2 136.4 130.6 19.1 4.1 16.9 11.1 12.6 36.8-.7 4.1-3.3 16.1 14.1 8.8 17.4-7.3 93.9-55.3 128.2-94.7 23.6-26 34.9-52.3 34.9-81.5z',
        },
      },
    ],
  })(e)
}
function GT(e) {
  return Tt({
    attr: { viewBox: '0 0 448 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z',
        },
      },
    ],
  })(e)
}
function qT(e) {
  return Tt({
    attr: { viewBox: '0 0 448 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M436 160H12c-6.627 0-12-5.373-12-12v-36c0-26.51 21.49-48 48-48h48V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h128V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h48c26.51 0 48 21.49 48 48v36c0 6.627-5.373 12-12 12zM12 192h424c6.627 0 12 5.373 12 12v260c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V204c0-6.627 5.373-12 12-12zm333.296 95.947l-28.169-28.398c-4.667-4.705-12.265-4.736-16.97-.068L194.12 364.665l-45.98-46.352c-4.667-4.705-12.266-4.736-16.971-.068l-28.397 28.17c-4.705 4.667-4.736 12.265-.068 16.97l82.601 83.269c4.667 4.705 12.265 4.736 16.97.068l142.953-141.805c4.705-4.667 4.736-12.265.068-16.97z',
        },
      },
    ],
  })(e)
}
function QT(e) {
  return Tt({
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z',
        },
      },
    ],
  })(e)
}
function ZT(e) {
  return Tt({
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z',
        },
      },
    ],
  })(e)
}
function JT(e) {
  return Tt({
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z',
        },
      },
    ],
  })(e)
}
function t5(e) {
  return Tt({
    attr: { viewBox: '0 0 640 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z',
        },
      },
    ],
  })(e)
}
function e5(e) {
  return Tt({
    attr: { viewBox: '0 0 640 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M624 448h-80V113.45C544 86.19 522.47 64 496 64H384v64h96v384h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM312.24 1.01l-192 49.74C105.99 54.44 96 67.7 96 82.92V448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h336V33.18c0-21.58-19.56-37.41-39.76-32.17zM264 288c-13.25 0-24-14.33-24-32s10.75-32 24-32 24 14.33 24 32-10.75 32-24 32z',
        },
      },
    ],
  })(e)
}
function n5(e) {
  return Tt({
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z',
        },
      },
    ],
  })(e)
}
function i5(e) {
  return Tt({
    attr: { viewBox: '0 0 576 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z',
        },
      },
    ],
  })(e)
}
function r5(e) {
  return Tt({
    attr: { viewBox: '0 0 384 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z',
        },
      },
    ],
  })(e)
}
function s5(e) {
  return Tt({
    attr: { viewBox: '0 0 576 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M218.17 424.14c-2.95-5.92-8.09-6.52-10.17-6.52s-7.22.59-10.02 6.19l-7.67 15.34c-6.37 12.78-25.03 11.37-29.48-2.09L144 386.59l-10.61 31.88c-5.89 17.66-22.38 29.53-41 29.53H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h12.39c4.83 0 9.11-3.08 10.64-7.66l18.19-54.64c3.3-9.81 12.44-16.41 22.78-16.41s19.48 6.59 22.77 16.41l13.88 41.64c19.75-16.19 54.06-9.7 66 14.16 1.89 3.78 5.49 5.95 9.36 6.26v-82.12l128-127.09V160H248c-13.2 0-24-10.8-24-24V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24v-40l-128-.11c-16.12-.31-30.58-9.28-37.83-23.75zM384 121.9c0-6.3-2.5-12.4-7-16.9L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1zm-96 225.06V416h68.99l161.68-162.78-67.88-67.88L288 346.96zm280.54-179.63l-31.87-31.87c-9.94-9.94-26.07-9.94-36.01 0l-27.25 27.25 67.88 67.88 27.25-27.25c9.95-9.94 9.95-26.07 0-36.01z',
        },
      },
    ],
  })(e)
}
function o5(e) {
  return Tt({
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z',
        },
      },
    ],
  })(e)
}
function a5(e) {
  return Tt({
    attr: { viewBox: '0 0 448 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z',
        },
      },
    ],
  })(e)
}
function l5(e) {
  return Tt({
    attr: { viewBox: '0 0 320 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z',
        },
      },
    ],
  })(e)
}
function u5(e) {
  return Tt({
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M167.02 309.34c-40.12 2.58-76.53 17.86-97.19 72.3-2.35 6.21-8 9.98-14.59 9.98-11.11 0-45.46-27.67-55.25-34.35C0 439.62 37.93 512 128 512c75.86 0 128-43.77 128-120.19 0-3.11-.65-6.08-.97-9.13l-88.01-73.34zM457.89 0c-15.16 0-29.37 6.71-40.21 16.45C213.27 199.05 192 203.34 192 257.09c0 13.7 3.25 26.76 8.73 38.7l63.82 53.18c7.21 1.8 14.64 3.03 22.39 3.03 62.11 0 98.11-45.47 211.16-256.46 7.38-14.35 13.9-29.85 13.9-45.99C512 20.64 486 0 457.89 0z',
        },
      },
    ],
  })(e)
}
function c5(e) {
  return Tt({
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z',
        },
      },
    ],
  })(e)
}
function f5(e) {
  return Tt({
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z',
        },
      },
    ],
  })(e)
}
function h5(e) {
  return Tt({
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z',
        },
      },
    ],
  })(e)
}
function d5(e) {
  return Tt({
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M240 96h64a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm0 128h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm256 192H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-256-64h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm-64 0h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.37 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352z',
        },
      },
    ],
  })(e)
}
function p5(e) {
  return Tt({
    attr: { viewBox: '0 0 576 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z',
        },
      },
    ],
  })(e)
}
function m5(e) {
  return Tt({
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z',
        },
      },
    ],
  })(e)
}
function g5(e) {
  return Tt({
    attr: { viewBox: '0 0 352 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z',
        },
      },
    ],
  })(e)
}
function y5(e) {
  return Tt({
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z',
        },
      },
    ],
  })(e)
}
function v5(e) {
  return Tt({
    attr: { viewBox: '0 0 640 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zm323-128.4l-27.8-28.1c-4.6-4.7-12.1-4.7-16.8-.1l-104.8 104-45.5-45.8c-4.6-4.7-12.1-4.7-16.8-.1l-28.1 27.9c-4.7 4.6-4.7 12.1-.1 16.8l81.7 82.3c4.6 4.7 12.1 4.7 16.8.1l141.3-140.2c4.6-4.7 4.7-12.2.1-16.8z',
        },
      },
    ],
  })(e)
}
function x5(e) {
  return Tt({
    attr: { viewBox: '0 0 640 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z',
        },
      },
    ],
  })(e)
}
const Q1 = U.createContext({ transformPagePoint: e => e, isStatic: !1, reducedMotion: 'never' }),
  xl = U.createContext({}),
  Yf = U.createContext(null),
  _l = typeof document < 'u',
  Bw = _l ? U.useLayoutEffect : U.useEffect,
  Z1 = U.createContext({ strict: !1 }),
  Xf = e => e.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(),
  Nw = 'framerAppearId',
  J1 = 'data-' + Xf(Nw)
function jw(e, t, n, i) {
  const { visualElement: s } = U.useContext(xl),
    a = U.useContext(Z1),
    l = U.useContext(Yf),
    u = U.useContext(Q1).reducedMotion,
    f = U.useRef()
  ;((i = i || a.renderer),
    !f.current &&
      i &&
      (f.current = i(e, {
        visualState: t,
        parent: s,
        props: n,
        presenceContext: l,
        blockInitialAnimation: l ? l.initial === !1 : !1,
        reducedMotionConfig: u,
      })))
  const h = f.current
  U.useInsertionEffect(() => {
    h && h.update(n, l)
  })
  const p = U.useRef(!!(n[J1] && !window.HandoffComplete))
  return (
    Bw(() => {
      h && (h.render(), p.current && h.animationState && h.animationState.animateChanges())
    }),
    U.useEffect(() => {
      h &&
        (h.updateFeatures(),
        !p.current && h.animationState && h.animationState.animateChanges(),
        p.current && ((p.current = !1), (window.HandoffComplete = !0)))
    }),
    h
  )
}
function xr(e) {
  return e && typeof e == 'object' && Object.prototype.hasOwnProperty.call(e, 'current')
}
function Hw(e, t, n) {
  return U.useCallback(
    i => {
      ;(i && e.mount && e.mount(i),
        t && (i ? t.mount(i) : t.unmount()),
        n && (typeof n == 'function' ? n(i) : xr(n) && (n.current = i)))
    },
    [t]
  )
}
function js(e) {
  return typeof e == 'string' || Array.isArray(e)
}
function wl(e) {
  return e !== null && typeof e == 'object' && typeof e.start == 'function'
}
const Kf = ['animate', 'whileInView', 'whileFocus', 'whileHover', 'whileTap', 'whileDrag', 'exit'],
  Gf = ['initial', ...Kf]
function Sl(e) {
  return wl(e.animate) || Gf.some(t => js(e[t]))
}
function ty(e) {
  return !!(Sl(e) || e.variants)
}
function Ww(e, t) {
  if (Sl(e)) {
    const { initial: n, animate: i } = e
    return { initial: n === !1 || js(n) ? n : void 0, animate: js(i) ? i : void 0 }
  }
  return e.inherit !== !1 ? t : {}
}
function Uw(e) {
  const { initial: t, animate: n } = Ww(e, U.useContext(xl))
  return U.useMemo(() => ({ initial: t, animate: n }), [ag(t), ag(n)])
}
function ag(e) {
  return Array.isArray(e) ? e.join(' ') : e
}
const lg = {
    animation: [
      'animate',
      'variants',
      'whileHover',
      'whileTap',
      'exit',
      'whileInView',
      'whileFocus',
      'whileDrag',
    ],
    exit: ['exit'],
    drag: ['drag', 'dragControls'],
    focus: ['whileFocus'],
    hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
    tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
    pan: ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
    inView: ['whileInView', 'onViewportEnter', 'onViewportLeave'],
    layout: ['layout', 'layoutId'],
  },
  Hs = {}
for (const e in lg) Hs[e] = { isEnabled: t => lg[e].some(n => !!t[n]) }
function $w(e) {
  for (const t in e) Hs[t] = { ...Hs[t], ...e[t] }
}
const ey = U.createContext({}),
  ny = U.createContext({}),
  Yw = Symbol.for('motionComponentSymbol')
function Xw({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: i,
  Component: s,
}) {
  e && $w(e)
  function a(u, f) {
    let h
    const p = { ...U.useContext(Q1), ...u, layoutId: Kw(u) },
      { isStatic: m } = p,
      y = Uw(u),
      x = i(u, m)
    if (!m && _l) {
      y.visualElement = jw(s, x, p, t)
      const _ = U.useContext(ny),
        w = U.useContext(Z1).strict
      y.visualElement && (h = y.visualElement.loadFeatures(p, w, e, _))
    }
    return U.createElement(
      xl.Provider,
      { value: y },
      h && y.visualElement ? U.createElement(h, { visualElement: y.visualElement, ...p }) : null,
      n(s, u, Hw(x, y.visualElement, f), x, m, y.visualElement)
    )
  }
  const l = U.forwardRef(a)
  return ((l[Yw] = s), l)
}
function Kw({ layoutId: e }) {
  const t = U.useContext(ey).id
  return t && e !== void 0 ? t + '-' + e : e
}
function Gw(e) {
  function t(i, s = {}) {
    return Xw(e(i, s))
  }
  if (typeof Proxy > 'u') return t
  const n = new Map()
  return new Proxy(t, { get: (i, s) => (n.has(s) || n.set(s, t(s)), n.get(s)) })
}
const qw = [
  'animate',
  'circle',
  'defs',
  'desc',
  'ellipse',
  'g',
  'image',
  'line',
  'filter',
  'marker',
  'mask',
  'metadata',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'rect',
  'stop',
  'switch',
  'symbol',
  'svg',
  'text',
  'tspan',
  'use',
  'view',
]
function qf(e) {
  return typeof e != 'string' || e.includes('-') ? !1 : !!(qw.indexOf(e) > -1 || /[A-Z]/.test(e))
}
const Za = {}
function Qw(e) {
  Object.assign(Za, e)
}
const Zs = [
    'transformPerspective',
    'x',
    'y',
    'z',
    'translateX',
    'translateY',
    'translateZ',
    'scale',
    'scaleX',
    'scaleY',
    'rotate',
    'rotateX',
    'rotateY',
    'rotateZ',
    'skew',
    'skewX',
    'skewY',
  ],
  Wi = new Set(Zs)
function iy(e, { layout: t, layoutId: n }) {
  return (
    Wi.has(e) || e.startsWith('origin') || ((t || n !== void 0) && (!!Za[e] || e === 'opacity'))
  )
}
const Ee = e => !!(e && e.getVelocity),
  Zw = { x: 'translateX', y: 'translateY', z: 'translateZ', transformPerspective: 'perspective' },
  Jw = Zs.length
function tS(e, { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 }, i, s) {
  let a = ''
  for (let l = 0; l < Jw; l++) {
    const u = Zs[l]
    if (e[u] !== void 0) {
      const f = Zw[u] || u
      a += `${f}(${e[u]}) `
    }
  }
  return (
    t && !e.z && (a += 'translateZ(0)'),
    (a = a.trim()),
    s ? (a = s(e, i ? '' : a)) : n && i && (a = 'none'),
    a
  )
}
const ry = e => t => typeof t == 'string' && t.startsWith(e),
  sy = ry('--'),
  pf = ry('var(--'),
  eS = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
  nS = (e, t) => (t && typeof e == 'number' ? t.transform(e) : e),
  ai = (e, t, n) => Math.min(Math.max(n, e), t),
  Ui = { test: e => typeof e == 'number', parse: parseFloat, transform: e => e },
  Ls = { ...Ui, transform: e => ai(0, 1, e) },
  Ea = { ...Ui, default: 1 },
  Ds = e => Math.round(e * 1e5) / 1e5,
  bl = /(-)?([\d]*\.?[\d])+/g,
  oy =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  iS =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i
function Js(e) {
  return typeof e == 'string'
}
const to = e => ({
    test: t => Js(t) && t.endsWith(e) && t.split(' ').length === 1,
    parse: parseFloat,
    transform: t => `${t}${e}`,
  }),
  Qn = to('deg'),
  ln = to('%'),
  pt = to('px'),
  rS = to('vh'),
  sS = to('vw'),
  ug = { ...ln, parse: e => ln.parse(e) / 100, transform: e => ln.transform(e * 100) },
  cg = { ...Ui, transform: Math.round },
  ay = {
    borderWidth: pt,
    borderTopWidth: pt,
    borderRightWidth: pt,
    borderBottomWidth: pt,
    borderLeftWidth: pt,
    borderRadius: pt,
    radius: pt,
    borderTopLeftRadius: pt,
    borderTopRightRadius: pt,
    borderBottomRightRadius: pt,
    borderBottomLeftRadius: pt,
    width: pt,
    maxWidth: pt,
    height: pt,
    maxHeight: pt,
    size: pt,
    top: pt,
    right: pt,
    bottom: pt,
    left: pt,
    padding: pt,
    paddingTop: pt,
    paddingRight: pt,
    paddingBottom: pt,
    paddingLeft: pt,
    margin: pt,
    marginTop: pt,
    marginRight: pt,
    marginBottom: pt,
    marginLeft: pt,
    rotate: Qn,
    rotateX: Qn,
    rotateY: Qn,
    rotateZ: Qn,
    scale: Ea,
    scaleX: Ea,
    scaleY: Ea,
    scaleZ: Ea,
    skew: Qn,
    skewX: Qn,
    skewY: Qn,
    distance: pt,
    translateX: pt,
    translateY: pt,
    translateZ: pt,
    x: pt,
    y: pt,
    z: pt,
    perspective: pt,
    transformPerspective: pt,
    opacity: Ls,
    originX: ug,
    originY: ug,
    originZ: pt,
    zIndex: cg,
    fillOpacity: Ls,
    strokeOpacity: Ls,
    numOctaves: cg,
  }
function Qf(e, t, n, i) {
  const { style: s, vars: a, transform: l, transformOrigin: u } = e
  let f = !1,
    h = !1,
    p = !0
  for (const m in t) {
    const y = t[m]
    if (sy(m)) {
      a[m] = y
      continue
    }
    const x = ay[m],
      _ = nS(y, x)
    if (Wi.has(m)) {
      if (((f = !0), (l[m] = _), !p)) continue
      y !== (x.default || 0) && (p = !1)
    } else m.startsWith('origin') ? ((h = !0), (u[m] = _)) : (s[m] = _)
  }
  if (
    (t.transform ||
      (f || i ? (s.transform = tS(e.transform, n, p, i)) : s.transform && (s.transform = 'none')),
    h)
  ) {
    const { originX: m = '50%', originY: y = '50%', originZ: x = 0 } = u
    s.transformOrigin = `${m} ${y} ${x}`
  }
}
const Zf = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} })
function ly(e, t, n) {
  for (const i in t) !Ee(t[i]) && !iy(i, n) && (e[i] = t[i])
}
function oS({ transformTemplate: e }, t, n) {
  return U.useMemo(() => {
    const i = Zf()
    return (Qf(i, t, { enableHardwareAcceleration: !n }, e), Object.assign({}, i.vars, i.style))
  }, [t])
}
function aS(e, t, n) {
  const i = e.style || {},
    s = {}
  return (ly(s, i, e), Object.assign(s, oS(e, t, n)), e.transformValues ? e.transformValues(s) : s)
}
function lS(e, t, n) {
  const i = {},
    s = aS(e, t, n)
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((i.draggable = !1),
      (s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = 'none'),
      (s.touchAction = e.drag === !0 ? 'none' : `pan-${e.drag === 'x' ? 'y' : 'x'}`)),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (i.tabIndex = 0),
    (i.style = s),
    i
  )
}
const uS = new Set([
  'animate',
  'exit',
  'variants',
  'initial',
  'style',
  'values',
  'variants',
  'transition',
  'transformTemplate',
  'transformValues',
  'custom',
  'inherit',
  'onBeforeLayoutMeasure',
  'onAnimationStart',
  'onAnimationComplete',
  'onUpdate',
  'onDragStart',
  'onDrag',
  'onDragEnd',
  'onMeasureDragConstraints',
  'onDirectionLock',
  'onDragTransitionEnd',
  '_dragX',
  '_dragY',
  'onHoverStart',
  'onHoverEnd',
  'onViewportEnter',
  'onViewportLeave',
  'globalTapTarget',
  'ignoreStrict',
  'viewport',
])
function Ja(e) {
  return (
    e.startsWith('while') ||
    (e.startsWith('drag') && e !== 'draggable') ||
    e.startsWith('layout') ||
    e.startsWith('onTap') ||
    e.startsWith('onPan') ||
    e.startsWith('onLayout') ||
    uS.has(e)
  )
}
let uy = e => !Ja(e)
function cS(e) {
  e && (uy = t => (t.startsWith('on') ? !Ja(t) : e(t)))
}
try {
  cS(require('@emotion/is-prop-valid').default)
} catch {}
function fS(e, t, n) {
  const i = {}
  for (const s in e)
    (s === 'values' && typeof e.values == 'object') ||
      ((uy(s) ||
        (n === !0 && Ja(s)) ||
        (!t && !Ja(s)) ||
        (e.draggable && s.startsWith('onDrag'))) &&
        (i[s] = e[s]))
  return i
}
function fg(e, t, n) {
  return typeof e == 'string' ? e : pt.transform(t + n * e)
}
function hS(e, t, n) {
  const i = fg(t, e.x, e.width),
    s = fg(n, e.y, e.height)
  return `${i} ${s}`
}
const dS = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
  pS = { offset: 'strokeDashoffset', array: 'strokeDasharray' }
function mS(e, t, n = 1, i = 0, s = !0) {
  e.pathLength = 1
  const a = s ? dS : pS
  e[a.offset] = pt.transform(-i)
  const l = pt.transform(t),
    u = pt.transform(n)
  e[a.array] = `${l} ${u}`
}
function Jf(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: i,
    originX: s,
    originY: a,
    pathLength: l,
    pathSpacing: u = 1,
    pathOffset: f = 0,
    ...h
  },
  p,
  m,
  y
) {
  if ((Qf(e, h, p, y), m)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox)
    return
  }
  ;((e.attrs = e.style), (e.style = {}))
  const { attrs: x, style: _, dimensions: w } = e
  ;(x.transform && (w && (_.transform = x.transform), delete x.transform),
    w &&
      (s !== void 0 || a !== void 0 || _.transform) &&
      (_.transformOrigin = hS(w, s !== void 0 ? s : 0.5, a !== void 0 ? a : 0.5)),
    t !== void 0 && (x.x = t),
    n !== void 0 && (x.y = n),
    i !== void 0 && (x.scale = i),
    l !== void 0 && mS(x, l, u, f, !1))
}
const cy = () => ({ ...Zf(), attrs: {} }),
  th = e => typeof e == 'string' && e.toLowerCase() === 'svg'
function gS(e, t, n, i) {
  const s = U.useMemo(() => {
    const a = cy()
    return (
      Jf(a, t, { enableHardwareAcceleration: !1 }, th(i), e.transformTemplate),
      { ...a.attrs, style: { ...a.style } }
    )
  }, [t])
  if (e.style) {
    const a = {}
    ;(ly(a, e.style, e), (s.style = { ...a, ...s.style }))
  }
  return s
}
function yS(e = !1) {
  return (n, i, s, { latestValues: a }, l) => {
    const f = (qf(n) ? gS : lS)(i, a, l, n),
      p = { ...fS(i, typeof n == 'string', e), ...f, ref: s },
      { children: m } = i,
      y = U.useMemo(() => (Ee(m) ? m.get() : m), [m])
    return U.createElement(n, { ...p, children: y })
  }
}
function fy(e, { style: t, vars: n }, i, s) {
  Object.assign(e.style, t, s && s.getProjectionStyles(i))
  for (const a in n) e.style.setProperty(a, n[a])
}
const hy = new Set([
  'baseFrequency',
  'diffuseConstant',
  'kernelMatrix',
  'kernelUnitLength',
  'keySplines',
  'keyTimes',
  'limitingConeAngle',
  'markerHeight',
  'markerWidth',
  'numOctaves',
  'targetX',
  'targetY',
  'surfaceScale',
  'specularConstant',
  'specularExponent',
  'stdDeviation',
  'tableValues',
  'viewBox',
  'gradientTransform',
  'pathLength',
  'startOffset',
  'textLength',
  'lengthAdjust',
])
function dy(e, t, n, i) {
  fy(e, t, void 0, i)
  for (const s in t.attrs) e.setAttribute(hy.has(s) ? s : Xf(s), t.attrs[s])
}
function eh(e, t) {
  const { style: n } = e,
    i = {}
  for (const s in n) (Ee(n[s]) || (t.style && Ee(t.style[s])) || iy(s, e)) && (i[s] = n[s])
  return i
}
function py(e, t) {
  const n = eh(e, t)
  for (const i in e)
    if (Ee(e[i]) || Ee(t[i])) {
      const s = Zs.indexOf(i) !== -1 ? 'attr' + i.charAt(0).toUpperCase() + i.substring(1) : i
      n[s] = e[i]
    }
  return n
}
function nh(e, t, n, i = {}, s = {}) {
  return (
    typeof t == 'function' && (t = t(n !== void 0 ? n : e.custom, i, s)),
    typeof t == 'string' && (t = e.variants && e.variants[t]),
    typeof t == 'function' && (t = t(n !== void 0 ? n : e.custom, i, s)),
    t
  )
}
function vS(e) {
  const t = U.useRef(null)
  return (t.current === null && (t.current = e()), t.current)
}
const tl = e => Array.isArray(e),
  xS = e => !!(e && typeof e == 'object' && e.mix && e.toValue),
  _S = e => (tl(e) ? e[e.length - 1] || 0 : e)
function Xa(e) {
  const t = Ee(e) ? e.get() : e
  return xS(t) ? t.toValue() : t
}
function wS({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, i, s, a) {
  const l = { latestValues: SS(i, s, a, e), renderState: t() }
  return (n && (l.mount = u => n(i, u, l)), l)
}
const my = e => (t, n) => {
  const i = U.useContext(xl),
    s = U.useContext(Yf),
    a = () => wS(e, t, i, s)
  return n ? a() : vS(a)
}
function SS(e, t, n, i) {
  const s = {},
    a = i(e, {})
  for (const y in a) s[y] = Xa(a[y])
  let { initial: l, animate: u } = e
  const f = Sl(e),
    h = ty(e)
  t &&
    h &&
    !f &&
    e.inherit !== !1 &&
    (l === void 0 && (l = t.initial), u === void 0 && (u = t.animate))
  let p = n ? n.initial === !1 : !1
  p = p || l === !1
  const m = p ? u : l
  return (
    m &&
      typeof m != 'boolean' &&
      !wl(m) &&
      (Array.isArray(m) ? m : [m]).forEach(x => {
        const _ = nh(e, x)
        if (!_) return
        const { transitionEnd: w, transition: S, ...k } = _
        for (const P in k) {
          let C = k[P]
          if (Array.isArray(C)) {
            const T = p ? C.length - 1 : 0
            C = C[T]
          }
          C !== null && (s[P] = C)
        }
        for (const P in w) s[P] = w[P]
      }),
    s
  )
}
const Xt = e => e
class hg {
  constructor() {
    ;((this.order = []), (this.scheduled = new Set()))
  }
  add(t) {
    if (!this.scheduled.has(t)) return (this.scheduled.add(t), this.order.push(t), !0)
  }
  remove(t) {
    const n = this.order.indexOf(t)
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t))
  }
  clear() {
    ;((this.order.length = 0), this.scheduled.clear())
  }
}
function bS(e) {
  let t = new hg(),
    n = new hg(),
    i = 0,
    s = !1,
    a = !1
  const l = new WeakSet(),
    u = {
      schedule: (f, h = !1, p = !1) => {
        const m = p && s,
          y = m ? t : n
        return (h && l.add(f), y.add(f) && m && s && (i = t.order.length), f)
      },
      cancel: f => {
        ;(n.remove(f), l.delete(f))
      },
      process: f => {
        if (s) {
          a = !0
          return
        }
        if (((s = !0), ([t, n] = [n, t]), n.clear(), (i = t.order.length), i))
          for (let h = 0; h < i; h++) {
            const p = t.order[h]
            ;(p(f), l.has(p) && (u.schedule(p), e()))
          }
        ;((s = !1), a && ((a = !1), u.process(f)))
      },
    }
  return u
}
const Oa = ['prepare', 'read', 'update', 'preRender', 'render', 'postRender'],
  kS = 40
function PS(e, t) {
  let n = !1,
    i = !0
  const s = { delta: 0, timestamp: 0, isProcessing: !1 },
    a = Oa.reduce((m, y) => ((m[y] = bS(() => (n = !0))), m), {}),
    l = m => a[m].process(s),
    u = () => {
      const m = performance.now()
      ;((n = !1),
        (s.delta = i ? 1e3 / 60 : Math.max(Math.min(m - s.timestamp, kS), 1)),
        (s.timestamp = m),
        (s.isProcessing = !0),
        Oa.forEach(l),
        (s.isProcessing = !1),
        n && t && ((i = !1), e(u)))
    },
    f = () => {
      ;((n = !0), (i = !0), s.isProcessing || e(u))
    }
  return {
    schedule: Oa.reduce((m, y) => {
      const x = a[y]
      return ((m[y] = (_, w = !1, S = !1) => (n || f(), x.schedule(_, w, S))), m)
    }, {}),
    cancel: m => Oa.forEach(y => a[y].cancel(m)),
    state: s,
    steps: a,
  }
}
const {
    schedule: Rt,
    cancel: Tn,
    state: he,
    steps: zc,
  } = PS(typeof requestAnimationFrame < 'u' ? requestAnimationFrame : Xt, !0),
  CS = {
    useVisualState: my({
      scrapeMotionValuesFromProps: py,
      createRenderState: cy,
      onMount: (e, t, { renderState: n, latestValues: i }) => {
        ;(Rt.read(() => {
          try {
            n.dimensions = typeof t.getBBox == 'function' ? t.getBBox() : t.getBoundingClientRect()
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 }
          }
        }),
          Rt.render(() => {
            ;(Jf(n, i, { enableHardwareAcceleration: !1 }, th(t.tagName), e.transformTemplate),
              dy(t, n))
          }))
      },
    }),
  },
  MS = { useVisualState: my({ scrapeMotionValuesFromProps: eh, createRenderState: Zf }) }
function TS(e, { forwardMotionProps: t = !1 }, n, i) {
  return {
    ...(qf(e) ? CS : MS),
    preloadedFeatures: n,
    useRender: yS(t),
    createVisualElement: i,
    Component: e,
  }
}
function Sn(e, t, n, i = { passive: !0 }) {
  return (e.addEventListener(t, n, i), () => e.removeEventListener(t, n))
}
const gy = e =>
  e.pointerType === 'mouse' ? typeof e.button != 'number' || e.button <= 0 : e.isPrimary !== !1
function kl(e, t = 'page') {
  return { point: { x: e[t + 'X'], y: e[t + 'Y'] } }
}
const ES = e => t => gy(t) && e(t, kl(t))
function Cn(e, t, n, i) {
  return Sn(e, t, ES(n), i)
}
const OS = (e, t) => n => t(e(n)),
  si = (...e) => e.reduce(OS)
function yy(e) {
  let t = null
  return () => {
    const n = () => {
      t = null
    }
    return t === null ? ((t = e), n) : !1
  }
}
const dg = yy('dragHorizontal'),
  pg = yy('dragVertical')
function vy(e) {
  let t = !1
  if (e === 'y') t = pg()
  else if (e === 'x') t = dg()
  else {
    const n = dg(),
      i = pg()
    n && i
      ? (t = () => {
          ;(n(), i())
        })
      : (n && n(), i && i())
  }
  return t
}
function xy() {
  const e = vy(!0)
  return e ? (e(), !1) : !0
}
class hi {
  constructor(t) {
    ;((this.isMounted = !1), (this.node = t))
  }
  update() {}
}
function mg(e, t) {
  const n = 'pointer' + (t ? 'enter' : 'leave'),
    i = 'onHover' + (t ? 'Start' : 'End'),
    s = (a, l) => {
      if (a.pointerType === 'touch' || xy()) return
      const u = e.getProps()
      ;(e.animationState && u.whileHover && e.animationState.setActive('whileHover', t),
        u[i] && Rt.update(() => u[i](a, l)))
    }
  return Cn(e.current, n, s, { passive: !e.getProps()[i] })
}
class LS extends hi {
  mount() {
    this.unmount = si(mg(this.node, !0), mg(this.node, !1))
  }
  unmount() {}
}
class DS extends hi {
  constructor() {
    ;(super(...arguments), (this.isActive = !1))
  }
  onFocus() {
    let t = !1
    try {
      t = this.node.current.matches(':focus-visible')
    } catch {
      t = !0
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !0), (this.isActive = !0))
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !1), (this.isActive = !1))
  }
  mount() {
    this.unmount = si(
      Sn(this.node.current, 'focus', () => this.onFocus()),
      Sn(this.node.current, 'blur', () => this.onBlur())
    )
  }
  unmount() {}
}
const _y = (e, t) => (t ? (e === t ? !0 : _y(e, t.parentElement)) : !1)
function Bc(e, t) {
  if (!t) return
  const n = new PointerEvent('pointer' + e)
  t(n, kl(n))
}
class AS extends hi {
  constructor() {
    ;(super(...arguments),
      (this.removeStartListeners = Xt),
      (this.removeEndListeners = Xt),
      (this.removeAccessibleListeners = Xt),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return
        this.removeEndListeners()
        const i = this.node.getProps(),
          a = Cn(
            window,
            'pointerup',
            (u, f) => {
              if (!this.checkPressEnd()) return
              const { onTap: h, onTapCancel: p, globalTapTarget: m } = this.node.getProps()
              Rt.update(() => {
                !m && !_y(this.node.current, u.target) ? p && p(u, f) : h && h(u, f)
              })
            },
            { passive: !(i.onTap || i.onPointerUp) }
          ),
          l = Cn(window, 'pointercancel', (u, f) => this.cancelPress(u, f), {
            passive: !(i.onTapCancel || i.onPointerCancel),
          })
        ;((this.removeEndListeners = si(a, l)), this.startPress(t, n))
      }),
      (this.startAccessiblePress = () => {
        const t = a => {
            if (a.key !== 'Enter' || this.isPressing) return
            const l = u => {
              u.key !== 'Enter' ||
                !this.checkPressEnd() ||
                Bc('up', (f, h) => {
                  const { onTap: p } = this.node.getProps()
                  p && Rt.update(() => p(f, h))
                })
            }
            ;(this.removeEndListeners(),
              (this.removeEndListeners = Sn(this.node.current, 'keyup', l)),
              Bc('down', (u, f) => {
                this.startPress(u, f)
              }))
          },
          n = Sn(this.node.current, 'keydown', t),
          i = () => {
            this.isPressing && Bc('cancel', (a, l) => this.cancelPress(a, l))
          },
          s = Sn(this.node.current, 'blur', i)
        this.removeAccessibleListeners = si(n, s)
      }))
  }
  startPress(t, n) {
    this.isPressing = !0
    const { onTapStart: i, whileTap: s } = this.node.getProps()
    ;(s && this.node.animationState && this.node.animationState.setActive('whileTap', !0),
      i && Rt.update(() => i(t, n)))
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive('whileTap', !1),
      !xy()
    )
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return
    const { onTapCancel: i } = this.node.getProps()
    i && Rt.update(() => i(t, n))
  }
  mount() {
    const t = this.node.getProps(),
      n = Cn(
        t.globalTapTarget ? window : this.node.current,
        'pointerdown',
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) }
      ),
      i = Sn(this.node.current, 'focus', this.startAccessiblePress)
    this.removeStartListeners = si(n, i)
  }
  unmount() {
    ;(this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners())
  }
}
const mf = new WeakMap(),
  Nc = new WeakMap(),
  RS = e => {
    const t = mf.get(e.target)
    t && t(e)
  },
  FS = e => {
    e.forEach(RS)
  }
function IS({ root: e, ...t }) {
  const n = e || document
  Nc.has(n) || Nc.set(n, {})
  const i = Nc.get(n),
    s = JSON.stringify(t)
  return (i[s] || (i[s] = new IntersectionObserver(FS, { root: e, ...t })), i[s])
}
function VS(e, t, n) {
  const i = IS(t)
  return (
    mf.set(e, n),
    i.observe(e),
    () => {
      ;(mf.delete(e), i.unobserve(e))
    }
  )
}
const zS = { some: 0, all: 1 }
class BS extends hi {
  constructor() {
    ;(super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1))
  }
  startObserver() {
    this.unmount()
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: i, amount: s = 'some', once: a } = t,
      l = {
        root: n ? n.current : void 0,
        rootMargin: i,
        threshold: typeof s == 'number' ? s : zS[s],
      },
      u = f => {
        const { isIntersecting: h } = f
        if (this.isInView === h || ((this.isInView = h), a && !h && this.hasEnteredView)) return
        ;(h && (this.hasEnteredView = !0),
          this.node.animationState && this.node.animationState.setActive('whileInView', h))
        const { onViewportEnter: p, onViewportLeave: m } = this.node.getProps(),
          y = h ? p : m
        y && y(f)
      }
    return VS(this.node.current, l, u)
  }
  mount() {
    this.startObserver()
  }
  update() {
    if (typeof IntersectionObserver > 'u') return
    const { props: t, prevProps: n } = this.node
    ;['amount', 'margin', 'root'].some(NS(t, n)) && this.startObserver()
  }
  unmount() {}
}
function NS({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return n => e[n] !== t[n]
}
const jS = {
  inView: { Feature: BS },
  tap: { Feature: AS },
  focus: { Feature: DS },
  hover: { Feature: LS },
}
function wy(e, t) {
  if (!Array.isArray(t)) return !1
  const n = t.length
  if (n !== e.length) return !1
  for (let i = 0; i < n; i++) if (t[i] !== e[i]) return !1
  return !0
}
function HS(e) {
  const t = {}
  return (e.values.forEach((n, i) => (t[i] = n.get())), t)
}
function WS(e) {
  const t = {}
  return (e.values.forEach((n, i) => (t[i] = n.getVelocity())), t)
}
function Pl(e, t, n) {
  const i = e.getProps()
  return nh(i, t, n !== void 0 ? n : i.custom, HS(e), WS(e))
}
let ih = Xt
const zi = e => e * 1e3,
  Mn = e => e / 1e3,
  US = { current: !1 },
  Sy = e => Array.isArray(e) && typeof e[0] == 'number'
function by(e) {
  return !!(!e || (typeof e == 'string' && ky[e]) || Sy(e) || (Array.isArray(e) && e.every(by)))
}
const Cs = ([e, t, n, i]) => `cubic-bezier(${e}, ${t}, ${n}, ${i})`,
  ky = {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    circIn: Cs([0, 0.65, 0.55, 1]),
    circOut: Cs([0.55, 0, 1, 0.45]),
    backIn: Cs([0.31, 0.01, 0.66, -0.59]),
    backOut: Cs([0.33, 1.53, 0.69, 0.99]),
  }
function Py(e) {
  if (e) return Sy(e) ? Cs(e) : Array.isArray(e) ? e.map(Py) : ky[e]
}
function $S(
  e,
  t,
  n,
  { delay: i = 0, duration: s, repeat: a = 0, repeatType: l = 'loop', ease: u, times: f } = {}
) {
  const h = { [t]: n }
  f && (h.offset = f)
  const p = Py(u)
  return (
    Array.isArray(p) && (h.easing = p),
    e.animate(h, {
      delay: i,
      duration: s,
      easing: Array.isArray(p) ? 'linear' : p,
      fill: 'both',
      iterations: a + 1,
      direction: l === 'reverse' ? 'alternate' : 'normal',
    })
  )
}
function YS(e, { repeat: t, repeatType: n = 'loop' }) {
  const i = t && n !== 'loop' && t % 2 === 1 ? 0 : e.length - 1
  return e[i]
}
const Cy = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  XS = 1e-7,
  KS = 12
function GS(e, t, n, i, s) {
  let a,
    l,
    u = 0
  do ((l = t + (n - t) / 2), (a = Cy(l, i, s) - e), a > 0 ? (n = l) : (t = l))
  while (Math.abs(a) > XS && ++u < KS)
  return l
}
function eo(e, t, n, i) {
  if (e === t && n === i) return Xt
  const s = a => GS(a, 0, 1, e, n)
  return a => (a === 0 || a === 1 ? a : Cy(s(a), t, i))
}
const qS = eo(0.42, 0, 1, 1),
  QS = eo(0, 0, 0.58, 1),
  My = eo(0.42, 0, 0.58, 1),
  ZS = e => Array.isArray(e) && typeof e[0] != 'number',
  Ty = e => t => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  Ey = e => t => 1 - e(1 - t),
  rh = e => 1 - Math.sin(Math.acos(e)),
  Oy = Ey(rh),
  JS = Ty(rh),
  Ly = eo(0.33, 1.53, 0.69, 0.99),
  sh = Ey(Ly),
  tb = Ty(sh),
  eb = e => ((e *= 2) < 1 ? 0.5 * sh(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1)))),
  nb = {
    linear: Xt,
    easeIn: qS,
    easeInOut: My,
    easeOut: QS,
    circIn: rh,
    circInOut: JS,
    circOut: Oy,
    backIn: sh,
    backInOut: tb,
    backOut: Ly,
    anticipate: eb,
  },
  gg = e => {
    if (Array.isArray(e)) {
      ih(e.length === 4)
      const [t, n, i, s] = e
      return eo(t, n, i, s)
    } else if (typeof e == 'string') return nb[e]
    return e
  },
  oh = (e, t) => n =>
    !!(
      (Js(n) && iS.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Dy = (e, t, n) => i => {
    if (!Js(i)) return i
    const [s, a, l, u] = i.match(bl)
    return {
      [e]: parseFloat(s),
      [t]: parseFloat(a),
      [n]: parseFloat(l),
      alpha: u !== void 0 ? parseFloat(u) : 1,
    }
  },
  ib = e => ai(0, 255, e),
  jc = { ...Ui, transform: e => Math.round(ib(e)) },
  Vi = {
    test: oh('rgb', 'red'),
    parse: Dy('red', 'green', 'blue'),
    transform: ({ red: e, green: t, blue: n, alpha: i = 1 }) =>
      'rgba(' +
      jc.transform(e) +
      ', ' +
      jc.transform(t) +
      ', ' +
      jc.transform(n) +
      ', ' +
      Ds(Ls.transform(i)) +
      ')',
  }
function rb(e) {
  let t = '',
    n = '',
    i = '',
    s = ''
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (i = e.substring(5, 7)),
        (s = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (i = e.substring(3, 4)),
        (s = e.substring(4, 5)),
        (t += t),
        (n += n),
        (i += i),
        (s += s)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(i, 16),
      alpha: s ? parseInt(s, 16) / 255 : 1,
    }
  )
}
const gf = { test: oh('#'), parse: rb, transform: Vi.transform },
  _r = {
    test: oh('hsl', 'hue'),
    parse: Dy('hue', 'saturation', 'lightness'),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: i = 1 }) =>
      'hsla(' +
      Math.round(e) +
      ', ' +
      ln.transform(Ds(t)) +
      ', ' +
      ln.transform(Ds(n)) +
      ', ' +
      Ds(Ls.transform(i)) +
      ')',
  },
  xe = {
    test: e => Vi.test(e) || gf.test(e) || _r.test(e),
    parse: e => (Vi.test(e) ? Vi.parse(e) : _r.test(e) ? _r.parse(e) : gf.parse(e)),
    transform: e => (Js(e) ? e : e.hasOwnProperty('red') ? Vi.transform(e) : _r.transform(e)),
  },
  Ht = (e, t, n) => -n * e + n * t + e
function Hc(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  )
}
function sb({ hue: e, saturation: t, lightness: n, alpha: i }) {
  ;((e /= 360), (t /= 100), (n /= 100))
  let s = 0,
    a = 0,
    l = 0
  if (!t) s = a = l = n
  else {
    const u = n < 0.5 ? n * (1 + t) : n + t - n * t,
      f = 2 * n - u
    ;((s = Hc(f, u, e + 1 / 3)), (a = Hc(f, u, e)), (l = Hc(f, u, e - 1 / 3)))
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(a * 255),
    blue: Math.round(l * 255),
    alpha: i,
  }
}
const Wc = (e, t, n) => {
    const i = e * e
    return Math.sqrt(Math.max(0, n * (t * t - i) + i))
  },
  ob = [gf, Vi, _r],
  ab = e => ob.find(t => t.test(e))
function yg(e) {
  const t = ab(e)
  let n = t.parse(e)
  return (t === _r && (n = sb(n)), n)
}
const Ay = (e, t) => {
  const n = yg(e),
    i = yg(t),
    s = { ...n }
  return a => (
    (s.red = Wc(n.red, i.red, a)),
    (s.green = Wc(n.green, i.green, a)),
    (s.blue = Wc(n.blue, i.blue, a)),
    (s.alpha = Ht(n.alpha, i.alpha, a)),
    Vi.transform(s)
  )
}
function lb(e) {
  var t, n
  return (
    isNaN(e) &&
    Js(e) &&
    (((t = e.match(bl)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(oy)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  )
}
const Ry = { regex: eS, countKey: 'Vars', token: '${v}', parse: Xt },
  Fy = { regex: oy, countKey: 'Colors', token: '${c}', parse: xe.parse },
  Iy = { regex: bl, countKey: 'Numbers', token: '${n}', parse: Ui.parse }
function Uc(e, { regex: t, countKey: n, token: i, parse: s }) {
  const a = e.tokenised.match(t)
  a &&
    ((e['num' + n] = a.length),
    (e.tokenised = e.tokenised.replace(t, i)),
    e.values.push(...a.map(s)))
}
function el(e) {
  const t = e.toString(),
    n = { value: t, tokenised: t, values: [], numVars: 0, numColors: 0, numNumbers: 0 }
  return (n.value.includes('var(--') && Uc(n, Ry), Uc(n, Fy), Uc(n, Iy), n)
}
function Vy(e) {
  return el(e).values
}
function zy(e) {
  const { values: t, numColors: n, numVars: i, tokenised: s } = el(e),
    a = t.length
  return l => {
    let u = s
    for (let f = 0; f < a; f++)
      f < i
        ? (u = u.replace(Ry.token, l[f]))
        : f < i + n
          ? (u = u.replace(Fy.token, xe.transform(l[f])))
          : (u = u.replace(Iy.token, Ds(l[f])))
    return u
  }
}
const ub = e => (typeof e == 'number' ? 0 : e)
function cb(e) {
  const t = Vy(e)
  return zy(e)(t.map(ub))
}
const li = { test: lb, parse: Vy, createTransformer: zy, getAnimatableNone: cb },
  By = (e, t) => n => `${n > 0 ? t : e}`
function Ny(e, t) {
  return typeof e == 'number'
    ? n => Ht(e, t, n)
    : xe.test(e)
      ? Ay(e, t)
      : e.startsWith('var(')
        ? By(e, t)
        : Hy(e, t)
}
const jy = (e, t) => {
    const n = [...e],
      i = n.length,
      s = e.map((a, l) => Ny(a, t[l]))
    return a => {
      for (let l = 0; l < i; l++) n[l] = s[l](a)
      return n
    }
  },
  fb = (e, t) => {
    const n = { ...e, ...t },
      i = {}
    for (const s in n) e[s] !== void 0 && t[s] !== void 0 && (i[s] = Ny(e[s], t[s]))
    return s => {
      for (const a in i) n[a] = i[a](s)
      return n
    }
  },
  Hy = (e, t) => {
    const n = li.createTransformer(t),
      i = el(e),
      s = el(t)
    return i.numVars === s.numVars && i.numColors === s.numColors && i.numNumbers >= s.numNumbers
      ? si(jy(i.values, s.values), n)
      : By(e, t)
  },
  Ws = (e, t, n) => {
    const i = t - e
    return i === 0 ? 1 : (n - e) / i
  },
  vg = (e, t) => n => Ht(e, t, n)
function hb(e) {
  return typeof e == 'number'
    ? vg
    : typeof e == 'string'
      ? xe.test(e)
        ? Ay
        : Hy
      : Array.isArray(e)
        ? jy
        : typeof e == 'object'
          ? fb
          : vg
}
function db(e, t, n) {
  const i = [],
    s = n || hb(e[0]),
    a = e.length - 1
  for (let l = 0; l < a; l++) {
    let u = s(e[l], e[l + 1])
    if (t) {
      const f = Array.isArray(t) ? t[l] || Xt : t
      u = si(f, u)
    }
    i.push(u)
  }
  return i
}
function Wy(e, t, { clamp: n = !0, ease: i, mixer: s } = {}) {
  const a = e.length
  if ((ih(a === t.length), a === 1)) return () => t[0]
  e[0] > e[a - 1] && ((e = [...e].reverse()), (t = [...t].reverse()))
  const l = db(t, i, s),
    u = l.length,
    f = h => {
      let p = 0
      if (u > 1) for (; p < e.length - 2 && !(h < e[p + 1]); p++);
      const m = Ws(e[p], e[p + 1], h)
      return l[p](m)
    }
  return n ? h => f(ai(e[0], e[a - 1], h)) : f
}
function pb(e, t) {
  const n = e[e.length - 1]
  for (let i = 1; i <= t; i++) {
    const s = Ws(0, t, i)
    e.push(Ht(n, 1, s))
  }
}
function mb(e) {
  const t = [0]
  return (pb(t, e.length - 1), t)
}
function gb(e, t) {
  return e.map(n => n * t)
}
function yb(e, t) {
  return e.map(() => t || My).splice(0, e.length - 1)
}
function nl({ duration: e = 300, keyframes: t, times: n, ease: i = 'easeInOut' }) {
  const s = ZS(i) ? i.map(gg) : gg(i),
    a = { done: !1, value: t[0] },
    l = gb(n && n.length === t.length ? n : mb(t), e),
    u = Wy(l, t, { ease: Array.isArray(s) ? s : yb(t, s) })
  return { calculatedDuration: e, next: f => ((a.value = u(f)), (a.done = f >= e), a) }
}
function Uy(e, t) {
  return t ? e * (1e3 / t) : 0
}
const vb = 5
function $y(e, t, n) {
  const i = Math.max(t - vb, 0)
  return Uy(n - e(i), t - i)
}
const $c = 0.001,
  xb = 0.01,
  _b = 10,
  wb = 0.05,
  Sb = 1
function bb({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: i = 1 }) {
  let s,
    a,
    l = 1 - t
  ;((l = ai(wb, Sb, l)),
    (e = ai(xb, _b, Mn(e))),
    l < 1
      ? ((s = h => {
          const p = h * l,
            m = p * e,
            y = p - n,
            x = yf(h, l),
            _ = Math.exp(-m)
          return $c - (y / x) * _
        }),
        (a = h => {
          const m = h * l * e,
            y = m * n + n,
            x = Math.pow(l, 2) * Math.pow(h, 2) * e,
            _ = Math.exp(-m),
            w = yf(Math.pow(h, 2), l)
          return ((-s(h) + $c > 0 ? -1 : 1) * ((y - x) * _)) / w
        }))
      : ((s = h => {
          const p = Math.exp(-h * e),
            m = (h - n) * e + 1
          return -$c + p * m
        }),
        (a = h => {
          const p = Math.exp(-h * e),
            m = (n - h) * (e * e)
          return p * m
        })))
  const u = 5 / e,
    f = Pb(s, a, u)
  if (((e = zi(e)), isNaN(f))) return { stiffness: 100, damping: 10, duration: e }
  {
    const h = Math.pow(f, 2) * i
    return { stiffness: h, damping: l * 2 * Math.sqrt(i * h), duration: e }
  }
}
const kb = 12
function Pb(e, t, n) {
  let i = n
  for (let s = 1; s < kb; s++) i = i - e(i) / t(i)
  return i
}
function yf(e, t) {
  return e * Math.sqrt(1 - t * t)
}
const Cb = ['duration', 'bounce'],
  Mb = ['stiffness', 'damping', 'mass']
function xg(e, t) {
  return t.some(n => e[n] !== void 0)
}
function Tb(e) {
  let t = { velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1, ...e }
  if (!xg(e, Mb) && xg(e, Cb)) {
    const n = bb(e)
    ;((t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0))
  }
  return t
}
function Yy({ keyframes: e, restDelta: t, restSpeed: n, ...i }) {
  const s = e[0],
    a = e[e.length - 1],
    l = { done: !1, value: s },
    {
      stiffness: u,
      damping: f,
      mass: h,
      duration: p,
      velocity: m,
      isResolvedFromDuration: y,
    } = Tb({ ...i, velocity: -Mn(i.velocity || 0) }),
    x = m || 0,
    _ = f / (2 * Math.sqrt(u * h)),
    w = a - s,
    S = Mn(Math.sqrt(u / h)),
    k = Math.abs(w) < 5
  ;(n || (n = k ? 0.01 : 2), t || (t = k ? 0.005 : 0.5))
  let P
  if (_ < 1) {
    const C = yf(S, _)
    P = T => {
      const E = Math.exp(-_ * S * T)
      return a - E * (((x + _ * S * w) / C) * Math.sin(C * T) + w * Math.cos(C * T))
    }
  } else if (_ === 1) P = C => a - Math.exp(-S * C) * (w + (x + S * w) * C)
  else {
    const C = S * Math.sqrt(_ * _ - 1)
    P = T => {
      const E = Math.exp(-_ * S * T),
        R = Math.min(C * T, 300)
      return a - (E * ((x + _ * S * w) * Math.sinh(R) + C * w * Math.cosh(R))) / C
    }
  }
  return {
    calculatedDuration: (y && p) || null,
    next: C => {
      const T = P(C)
      if (y) l.done = C >= p
      else {
        let E = x
        C !== 0 && (_ < 1 ? (E = $y(P, C, T)) : (E = 0))
        const R = Math.abs(E) <= n,
          A = Math.abs(a - T) <= t
        l.done = R && A
      }
      return ((l.value = l.done ? a : T), l)
    },
  }
}
function _g({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: i = 325,
  bounceDamping: s = 10,
  bounceStiffness: a = 500,
  modifyTarget: l,
  min: u,
  max: f,
  restDelta: h = 0.5,
  restSpeed: p,
}) {
  const m = e[0],
    y = { done: !1, value: m },
    x = V => (u !== void 0 && V < u) || (f !== void 0 && V > f),
    _ = V => (u === void 0 ? f : f === void 0 || Math.abs(u - V) < Math.abs(f - V) ? u : f)
  let w = n * t
  const S = m + w,
    k = l === void 0 ? S : l(S)
  k !== S && (w = k - m)
  const P = V => -w * Math.exp(-V / i),
    C = V => k + P(V),
    T = V => {
      const j = P(V),
        W = C(V)
      ;((y.done = Math.abs(j) <= h), (y.value = y.done ? k : W))
    }
  let E, R
  const A = V => {
    x(y.value) &&
      ((E = V),
      (R = Yy({
        keyframes: [y.value, _(y.value)],
        velocity: $y(C, V, y.value),
        damping: s,
        stiffness: a,
        restDelta: h,
        restSpeed: p,
      })))
  }
  return (
    A(0),
    {
      calculatedDuration: null,
      next: V => {
        let j = !1
        return (
          !R && E === void 0 && ((j = !0), T(V), A(V)),
          E !== void 0 && V > E ? R.next(V - E) : (!j && T(V), y)
        )
      },
    }
  )
}
const Eb = e => {
    const t = ({ timestamp: n }) => e(n)
    return {
      start: () => Rt.update(t, !0),
      stop: () => Tn(t),
      now: () => (he.isProcessing ? he.timestamp : performance.now()),
    }
  },
  wg = 2e4
function Sg(e) {
  let t = 0
  const n = 50
  let i = e.next(t)
  for (; !i.done && t < wg; ) ((t += n), (i = e.next(t)))
  return t >= wg ? 1 / 0 : t
}
const Ob = { decay: _g, inertia: _g, tween: nl, keyframes: nl, spring: Yy }
function il({
  autoplay: e = !0,
  delay: t = 0,
  driver: n = Eb,
  keyframes: i,
  type: s = 'keyframes',
  repeat: a = 0,
  repeatDelay: l = 0,
  repeatType: u = 'loop',
  onPlay: f,
  onStop: h,
  onComplete: p,
  onUpdate: m,
  ...y
}) {
  let x = 1,
    _ = !1,
    w,
    S
  const k = () => {
    S = new Promise(L => {
      w = L
    })
  }
  k()
  let P
  const C = Ob[s] || nl
  let T
  C !== nl && typeof i[0] != 'number' && ((T = Wy([0, 100], i, { clamp: !1 })), (i = [0, 100]))
  const E = C({ ...y, keyframes: i })
  let R
  u === 'mirror' && (R = C({ ...y, keyframes: [...i].reverse(), velocity: -(y.velocity || 0) }))
  let A = 'idle',
    V = null,
    j = null,
    W = null
  E.calculatedDuration === null && a && (E.calculatedDuration = Sg(E))
  const { calculatedDuration: N } = E
  let F = 1 / 0,
    q = 1 / 0
  N !== null && ((F = N + l), (q = F * (a + 1) - l))
  let $ = 0
  const st = L => {
      if (j === null) return
      ;(x > 0 && (j = Math.min(j, L)),
        x < 0 && (j = Math.min(L - q / x, j)),
        V !== null ? ($ = V) : ($ = Math.round(L - j) * x))
      const H = $ - t * (x >= 0 ? 1 : -1),
        lt = x >= 0 ? H < 0 : H > q
      ;(($ = Math.max(H, 0)), A === 'finished' && V === null && ($ = q))
      let ut = $,
        gt = E
      if (a) {
        const vt = Math.min($, q) / F
        let Et = Math.floor(vt),
          ee = vt % 1
        ;(!ee && vt >= 1 && (ee = 1),
          ee === 1 && Et--,
          (Et = Math.min(Et, a + 1)),
          !!(Et % 2) &&
            (u === 'reverse' ? ((ee = 1 - ee), l && (ee -= l / F)) : u === 'mirror' && (gt = R)),
          (ut = ai(0, 1, ee) * F))
      }
      const dt = lt ? { done: !1, value: i[0] } : gt.next(ut)
      T && (dt.value = T(dt.value))
      let { done: xt } = dt
      !lt && N !== null && (xt = x >= 0 ? $ >= q : $ <= 0)
      const ct = V === null && (A === 'finished' || (A === 'running' && xt))
      return (m && m(dt.value), ct && K(), dt)
    },
    tt = () => {
      ;(P && P.stop(), (P = void 0))
    },
    rt = () => {
      ;((A = 'idle'), tt(), w(), k(), (j = W = null))
    },
    K = () => {
      ;((A = 'finished'), p && p(), tt(), w())
    },
    J = () => {
      if (_) return
      P || (P = n(st))
      const L = P.now()
      ;(f && f(),
        V !== null ? (j = L - V) : (!j || A === 'finished') && (j = L),
        A === 'finished' && k(),
        (W = j),
        (V = null),
        (A = 'running'),
        P.start())
    }
  e && J()
  const Z = {
    then(L, H) {
      return S.then(L, H)
    },
    get time() {
      return Mn($)
    },
    set time(L) {
      ;((L = zi(L)), ($ = L), V !== null || !P || x === 0 ? (V = L) : (j = P.now() - L / x))
    },
    get duration() {
      const L = E.calculatedDuration === null ? Sg(E) : E.calculatedDuration
      return Mn(L)
    },
    get speed() {
      return x
    },
    set speed(L) {
      L === x || !P || ((x = L), (Z.time = Mn($)))
    },
    get state() {
      return A
    },
    play: J,
    pause: () => {
      ;((A = 'paused'), (V = $))
    },
    stop: () => {
      ;((_ = !0), A !== 'idle' && ((A = 'idle'), h && h(), rt()))
    },
    cancel: () => {
      ;(W !== null && st(W), rt())
    },
    complete: () => {
      A = 'finished'
    },
    sample: L => ((j = 0), st(L)),
  }
  return Z
}
function Lb(e) {
  let t
  return () => (t === void 0 && (t = e()), t)
}
const Db = Lb(() => Object.hasOwnProperty.call(Element.prototype, 'animate')),
  Ab = new Set(['opacity', 'clipPath', 'filter', 'transform', 'backgroundColor']),
  La = 10,
  Rb = 2e4,
  Fb = (e, t) => t.type === 'spring' || e === 'backgroundColor' || !by(t.ease)
function Ib(e, t, { onUpdate: n, onComplete: i, ...s }) {
  if (
    !(
      Db() &&
      Ab.has(t) &&
      !s.repeatDelay &&
      s.repeatType !== 'mirror' &&
      s.damping !== 0 &&
      s.type !== 'inertia'
    )
  )
    return !1
  let l = !1,
    u,
    f,
    h = !1
  const p = () => {
    f = new Promise(C => {
      u = C
    })
  }
  p()
  let { keyframes: m, duration: y = 300, ease: x, times: _ } = s
  if (Fb(t, s)) {
    const C = il({ ...s, repeat: 0, delay: 0 })
    let T = { done: !1, value: m[0] }
    const E = []
    let R = 0
    for (; !T.done && R < Rb; ) ((T = C.sample(R)), E.push(T.value), (R += La))
    ;((_ = void 0), (m = E), (y = R - La), (x = 'linear'))
  }
  const w = $S(e.owner.current, t, m, { ...s, duration: y, ease: x, times: _ }),
    S = () => {
      ;((h = !1), w.cancel())
    },
    k = () => {
      ;((h = !0), Rt.update(S), u(), p())
    }
  return (
    (w.onfinish = () => {
      h || (e.set(YS(m, s)), i && i(), k())
    }),
    {
      then(C, T) {
        return f.then(C, T)
      },
      attachTimeline(C) {
        return ((w.timeline = C), (w.onfinish = null), Xt)
      },
      get time() {
        return Mn(w.currentTime || 0)
      },
      set time(C) {
        w.currentTime = zi(C)
      },
      get speed() {
        return w.playbackRate
      },
      set speed(C) {
        w.playbackRate = C
      },
      get duration() {
        return Mn(y)
      },
      play: () => {
        l || (w.play(), Tn(S))
      },
      pause: () => w.pause(),
      stop: () => {
        if (((l = !0), w.playState === 'idle')) return
        const { currentTime: C } = w
        if (C) {
          const T = il({ ...s, autoplay: !1 })
          e.setWithVelocity(T.sample(C - La).value, T.sample(C).value, La)
        }
        k()
      },
      complete: () => {
        h || w.finish()
      },
      cancel: k,
    }
  )
}
function Vb({ keyframes: e, delay: t, onUpdate: n, onComplete: i }) {
  const s = () => (
    n && n(e[e.length - 1]),
    i && i(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: Xt,
      pause: Xt,
      stop: Xt,
      then: a => (a(), Promise.resolve()),
      cancel: Xt,
      complete: Xt,
    }
  )
  return t ? il({ keyframes: [0, 1], duration: 0, delay: t, onComplete: s }) : s()
}
const zb = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
  Bb = e => ({
    type: 'spring',
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Nb = { type: 'keyframes', duration: 0.8 },
  jb = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Hb = (e, { keyframes: t }) =>
    t.length > 2 ? Nb : Wi.has(e) ? (e.startsWith('scale') ? Bb(t[1]) : zb) : jb,
  vf = (e, t) =>
    e === 'zIndex'
      ? !1
      : !!(
          typeof t == 'number' ||
          Array.isArray(t) ||
          (typeof t == 'string' && (li.test(t) || t === '0') && !t.startsWith('url('))
        ),
  Wb = new Set(['brightness', 'contrast', 'saturate', 'opacity'])
function Ub(e) {
  const [t, n] = e.slice(0, -1).split('(')
  if (t === 'drop-shadow') return e
  const [i] = n.match(bl) || []
  if (!i) return e
  const s = n.replace(i, '')
  let a = Wb.has(t) ? 1 : 0
  return (i !== n && (a *= 100), t + '(' + a + s + ')')
}
const $b = /([a-z-]*)\(.*?\)/g,
  xf = {
    ...li,
    getAnimatableNone: e => {
      const t = e.match($b)
      return t ? t.map(Ub).join(' ') : e
    },
  },
  Yb = {
    ...ay,
    color: xe,
    backgroundColor: xe,
    outlineColor: xe,
    fill: xe,
    stroke: xe,
    borderColor: xe,
    borderTopColor: xe,
    borderRightColor: xe,
    borderBottomColor: xe,
    borderLeftColor: xe,
    filter: xf,
    WebkitFilter: xf,
  },
  ah = e => Yb[e]
function Xy(e, t) {
  let n = ah(e)
  return (n !== xf && (n = li), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0)
}
const Ky = e => /^0[^.\s]+$/.test(e)
function Xb(e) {
  if (typeof e == 'number') return e === 0
  if (e !== null) return e === 'none' || e === '0' || Ky(e)
}
function Kb(e, t, n, i) {
  const s = vf(t, n)
  let a
  Array.isArray(n) ? (a = [...n]) : (a = [null, n])
  const l = i.from !== void 0 ? i.from : e.get()
  let u
  const f = []
  for (let h = 0; h < a.length; h++)
    (a[h] === null && (a[h] = h === 0 ? l : a[h - 1]),
      Xb(a[h]) && f.push(h),
      typeof a[h] == 'string' && a[h] !== 'none' && a[h] !== '0' && (u = a[h]))
  if (s && f.length && u)
    for (let h = 0; h < f.length; h++) {
      const p = f[h]
      a[p] = Xy(t, u)
    }
  return a
}
function Gb({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: i,
  staggerDirection: s,
  repeat: a,
  repeatType: l,
  repeatDelay: u,
  from: f,
  elapsed: h,
  ...p
}) {
  return !!Object.keys(p).length
}
function lh(e, t) {
  return e[t] || e.default || e
}
const qb = { skipAnimations: !1 },
  uh =
    (e, t, n, i = {}) =>
    s => {
      const a = lh(i, e) || {},
        l = a.delay || i.delay || 0
      let { elapsed: u = 0 } = i
      u = u - zi(l)
      const f = Kb(t, e, n, a),
        h = f[0],
        p = f[f.length - 1],
        m = vf(e, h),
        y = vf(e, p)
      let x = {
        keyframes: f,
        velocity: t.getVelocity(),
        ease: 'easeOut',
        ...a,
        delay: -u,
        onUpdate: _ => {
          ;(t.set(_), a.onUpdate && a.onUpdate(_))
        },
        onComplete: () => {
          ;(s(), a.onComplete && a.onComplete())
        },
      }
      if (
        (Gb(a) || (x = { ...x, ...Hb(e, x) }),
        x.duration && (x.duration = zi(x.duration)),
        x.repeatDelay && (x.repeatDelay = zi(x.repeatDelay)),
        !m || !y || US.current || a.type === !1 || qb.skipAnimations)
      )
        return Vb(x)
      if (
        !i.isHandoff &&
        t.owner &&
        t.owner.current instanceof HTMLElement &&
        !t.owner.getProps().onUpdate
      ) {
        const _ = Ib(t, e, x)
        if (_) return _
      }
      return il(x)
    }
function rl(e) {
  return !!(Ee(e) && e.add)
}
const Gy = e => /^\-?\d*\.?\d+$/.test(e)
function ch(e, t) {
  e.indexOf(t) === -1 && e.push(t)
}
function fh(e, t) {
  const n = e.indexOf(t)
  n > -1 && e.splice(n, 1)
}
class hh {
  constructor() {
    this.subscriptions = []
  }
  add(t) {
    return (ch(this.subscriptions, t), () => fh(this.subscriptions, t))
  }
  notify(t, n, i) {
    const s = this.subscriptions.length
    if (s)
      if (s === 1) this.subscriptions[0](t, n, i)
      else
        for (let a = 0; a < s; a++) {
          const l = this.subscriptions[a]
          l && l(t, n, i)
        }
  }
  getSize() {
    return this.subscriptions.length
  }
  clear() {
    this.subscriptions.length = 0
  }
}
const Qb = e => !isNaN(parseFloat(e))
class Zb {
  constructor(t, n = {}) {
    ;((this.version = '10.18.0'),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (i, s = !0) => {
        ;((this.prev = this.current), (this.current = i))
        const { delta: a, timestamp: l } = he
        ;(this.lastUpdated !== l &&
          ((this.timeDelta = a), (this.lastUpdated = l), Rt.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()),
          s && this.events.renderRequest && this.events.renderRequest.notify(this.current))
      }),
      (this.scheduleVelocityCheck = () => Rt.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: i }) => {
        i !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = t),
      (this.canTrackVelocity = Qb(this.current)),
      (this.owner = n.owner))
  }
  onChange(t) {
    return this.on('change', t)
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new hh())
    const i = this.events[t].add(n)
    return t === 'change'
      ? () => {
          ;(i(),
            Rt.read(() => {
              this.events.change.getSize() || this.stop()
            }))
        }
      : i
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear()
  }
  attach(t, n) {
    ;((this.passiveEffect = t), (this.stopPassiveEffect = n))
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify)
  }
  setWithVelocity(t, n, i) {
    ;(this.set(n), (this.prev = t), (this.timeDelta = i))
  }
  jump(t) {
    ;(this.updateAndNotify(t),
      (this.prev = t),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect())
  }
  get() {
    return this.current
  }
  getPrevious() {
    return this.prev
  }
  getVelocity() {
    return this.canTrackVelocity
      ? Uy(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      : 0
  }
  start(t) {
    return (
      this.stop(),
      new Promise(n => {
        ;((this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify())
      }).then(() => {
        ;(this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation())
      })
    )
  }
  stop() {
    ;(this.animation &&
      (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation())
  }
  isAnimating() {
    return !!this.animation
  }
  clearAnimation() {
    delete this.animation
  }
  destroy() {
    ;(this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect())
  }
}
function kr(e, t) {
  return new Zb(e, t)
}
const qy = e => t => t.test(e),
  Jb = { test: e => e === 'auto', parse: e => e },
  Qy = [Ui, pt, ln, Qn, sS, rS, Jb],
  xs = e => Qy.find(qy(e)),
  t4 = [...Qy, xe, li],
  e4 = e => t4.find(qy(e))
function n4(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, kr(n))
}
function i4(e, t) {
  const n = Pl(e, t)
  let { transitionEnd: i = {}, transition: s = {}, ...a } = n ? e.makeTargetAnimatable(n, !1) : {}
  a = { ...a, ...i }
  for (const l in a) {
    const u = _S(a[l])
    n4(e, l, u)
  }
}
function r4(e, t, n) {
  var i, s
  const a = Object.keys(t).filter(u => !e.hasValue(u)),
    l = a.length
  if (l)
    for (let u = 0; u < l; u++) {
      const f = a[u],
        h = t[f]
      let p = null
      ;(Array.isArray(h) && (p = h[0]),
        p === null &&
          (p =
            (s = (i = n[f]) !== null && i !== void 0 ? i : e.readValue(f)) !== null && s !== void 0
              ? s
              : t[f]),
        p != null &&
          (typeof p == 'string' && (Gy(p) || Ky(p))
            ? (p = parseFloat(p))
            : !e4(p) && li.test(h) && (p = Xy(f, h)),
          e.addValue(f, kr(p, { owner: e })),
          n[f] === void 0 && (n[f] = p),
          p !== null && e.setBaseTarget(f, p)))
    }
}
function s4(e, t) {
  return t ? (t[e] || t.default || t).from : void 0
}
function o4(e, t, n) {
  const i = {}
  for (const s in e) {
    const a = s4(s, t)
    if (a !== void 0) i[s] = a
    else {
      const l = n.getValue(s)
      l && (i[s] = l.get())
    }
  }
  return i
}
function a4({ protectedKeys: e, needsAnimating: t }, n) {
  const i = e.hasOwnProperty(n) && t[n] !== !0
  return ((t[n] = !1), i)
}
function l4(e, t) {
  const n = e.get()
  if (Array.isArray(t)) {
    for (let i = 0; i < t.length; i++) if (t[i] !== n) return !0
  } else return n !== t
}
function Zy(e, t, { delay: n = 0, transitionOverride: i, type: s } = {}) {
  let {
    transition: a = e.getDefaultTransition(),
    transitionEnd: l,
    ...u
  } = e.makeTargetAnimatable(t)
  const f = e.getValue('willChange')
  i && (a = i)
  const h = [],
    p = s && e.animationState && e.animationState.getState()[s]
  for (const m in u) {
    const y = e.getValue(m),
      x = u[m]
    if (!y || x === void 0 || (p && a4(p, m))) continue
    const _ = { delay: n, elapsed: 0, ...lh(a || {}, m) }
    if (window.HandoffAppearAnimations) {
      const k = e.getProps()[J1]
      if (k) {
        const P = window.HandoffAppearAnimations(k, m, y, Rt)
        P !== null && ((_.elapsed = P), (_.isHandoff = !0))
      }
    }
    let w = !_.isHandoff && !l4(y, x)
    if (
      (_.type === 'spring' && (y.getVelocity() || _.velocity) && (w = !1),
      y.animation && (w = !1),
      w)
    )
      continue
    y.start(uh(m, y, x, e.shouldReduceMotion && Wi.has(m) ? { type: !1 } : _))
    const S = y.animation
    ;(rl(f) && (f.add(m), S.then(() => f.remove(m))), h.push(S))
  }
  return (
    l &&
      Promise.all(h).then(() => {
        l && i4(e, l)
      }),
    h
  )
}
function _f(e, t, n = {}) {
  const i = Pl(e, t, n.custom)
  let { transition: s = e.getDefaultTransition() || {} } = i || {}
  n.transitionOverride && (s = n.transitionOverride)
  const a = i ? () => Promise.all(Zy(e, i, n)) : () => Promise.resolve(),
    l =
      e.variantChildren && e.variantChildren.size
        ? (f = 0) => {
            const { delayChildren: h = 0, staggerChildren: p, staggerDirection: m } = s
            return u4(e, t, h + f, p, m, n)
          }
        : () => Promise.resolve(),
    { when: u } = s
  if (u) {
    const [f, h] = u === 'beforeChildren' ? [a, l] : [l, a]
    return f().then(() => h())
  } else return Promise.all([a(), l(n.delay)])
}
function u4(e, t, n = 0, i = 0, s = 1, a) {
  const l = [],
    u = (e.variantChildren.size - 1) * i,
    f = s === 1 ? (h = 0) => h * i : (h = 0) => u - h * i
  return (
    Array.from(e.variantChildren)
      .sort(c4)
      .forEach((h, p) => {
        ;(h.notify('AnimationStart', t),
          l.push(_f(h, t, { ...a, delay: n + f(p) }).then(() => h.notify('AnimationComplete', t))))
      }),
    Promise.all(l)
  )
}
function c4(e, t) {
  return e.sortNodePosition(t)
}
function f4(e, t, n = {}) {
  e.notify('AnimationStart', t)
  let i
  if (Array.isArray(t)) {
    const s = t.map(a => _f(e, a, n))
    i = Promise.all(s)
  } else if (typeof t == 'string') i = _f(e, t, n)
  else {
    const s = typeof t == 'function' ? Pl(e, t, n.custom) : t
    i = Promise.all(Zy(e, s, n))
  }
  return i.then(() => e.notify('AnimationComplete', t))
}
const h4 = [...Kf].reverse(),
  d4 = Kf.length
function p4(e) {
  return t => Promise.all(t.map(({ animation: n, options: i }) => f4(e, n, i)))
}
function m4(e) {
  let t = p4(e)
  const n = y4()
  let i = !0
  const s = (f, h) => {
    const p = Pl(e, h)
    if (p) {
      const { transition: m, transitionEnd: y, ...x } = p
      f = { ...f, ...x, ...y }
    }
    return f
  }
  function a(f) {
    t = f(e)
  }
  function l(f, h) {
    const p = e.getProps(),
      m = e.getVariantContext(!0) || {},
      y = [],
      x = new Set()
    let _ = {},
      w = 1 / 0
    for (let k = 0; k < d4; k++) {
      const P = h4[k],
        C = n[P],
        T = p[P] !== void 0 ? p[P] : m[P],
        E = js(T),
        R = P === h ? C.isActive : null
      R === !1 && (w = k)
      let A = T === m[P] && T !== p[P] && E
      if (
        (A && i && e.manuallyAnimateOnMount && (A = !1),
        (C.protectedKeys = { ..._ }),
        (!C.isActive && R === null) || (!T && !C.prevProp) || wl(T) || typeof T == 'boolean')
      )
        continue
      let j = g4(C.prevProp, T) || (P === h && C.isActive && !A && E) || (k > w && E),
        W = !1
      const N = Array.isArray(T) ? T : [T]
      let F = N.reduce(s, {})
      R === !1 && (F = {})
      const { prevResolvedValues: q = {} } = C,
        $ = { ...q, ...F },
        st = tt => {
          ;((j = !0), x.has(tt) && ((W = !0), x.delete(tt)), (C.needsAnimating[tt] = !0))
        }
      for (const tt in $) {
        const rt = F[tt],
          K = q[tt]
        if (_.hasOwnProperty(tt)) continue
        let J = !1
        ;(tl(rt) && tl(K) ? (J = !wy(rt, K)) : (J = rt !== K),
          J
            ? rt !== void 0
              ? st(tt)
              : x.add(tt)
            : rt !== void 0 && x.has(tt)
              ? st(tt)
              : (C.protectedKeys[tt] = !0))
      }
      ;((C.prevProp = T),
        (C.prevResolvedValues = F),
        C.isActive && (_ = { ..._, ...F }),
        i && e.blockInitialAnimation && (j = !1),
        j && (!A || W) && y.push(...N.map(tt => ({ animation: tt, options: { type: P, ...f } }))))
    }
    if (x.size) {
      const k = {}
      ;(x.forEach(P => {
        const C = e.getBaseTarget(P)
        C !== void 0 && (k[P] = C)
      }),
        y.push({ animation: k }))
    }
    let S = !!y.length
    return (
      i && (p.initial === !1 || p.initial === p.animate) && !e.manuallyAnimateOnMount && (S = !1),
      (i = !1),
      S ? t(y) : Promise.resolve()
    )
  }
  function u(f, h, p) {
    var m
    if (n[f].isActive === h) return Promise.resolve()
    ;((m = e.variantChildren) === null ||
      m === void 0 ||
      m.forEach(x => {
        var _
        return (_ = x.animationState) === null || _ === void 0 ? void 0 : _.setActive(f, h)
      }),
      (n[f].isActive = h))
    const y = l(p, f)
    for (const x in n) n[x].protectedKeys = {}
    return y
  }
  return { animateChanges: l, setActive: u, setAnimateFunction: a, getState: () => n }
}
function g4(e, t) {
  return typeof t == 'string' ? t !== e : Array.isArray(t) ? !wy(t, e) : !1
}
function Ti(e = !1) {
  return { isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} }
}
function y4() {
  return {
    animate: Ti(!0),
    whileInView: Ti(),
    whileHover: Ti(),
    whileTap: Ti(),
    whileDrag: Ti(),
    whileFocus: Ti(),
    exit: Ti(),
  }
}
class v4 extends hi {
  constructor(t) {
    ;(super(t), t.animationState || (t.animationState = m4(t)))
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps()
    ;(this.unmount(), wl(t) && (this.unmount = t.subscribe(this.node)))
  }
  mount() {
    this.updateAnimationControlsSubscription()
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {}
    t !== n && this.updateAnimationControlsSubscription()
  }
  unmount() {}
}
let x4 = 0
class _4 extends hi {
  constructor() {
    ;(super(...arguments), (this.id = x4++))
  }
  update() {
    if (!this.node.presenceContext) return
    const { isPresent: t, onExitComplete: n, custom: i } = this.node.presenceContext,
      { isPresent: s } = this.node.prevPresenceContext || {}
    if (!this.node.animationState || t === s) return
    const a = this.node.animationState.setActive('exit', !t, {
      custom: i ?? this.node.getProps().custom,
    })
    n && !t && a.then(() => n(this.id))
  }
  mount() {
    const { register: t } = this.node.presenceContext || {}
    t && (this.unmount = t(this.id))
  }
  unmount() {}
}
const w4 = { animation: { Feature: v4 }, exit: { Feature: _4 } },
  bg = (e, t) => Math.abs(e - t)
function S4(e, t) {
  const n = bg(e.x, t.x),
    i = bg(e.y, t.y)
  return Math.sqrt(n ** 2 + i ** 2)
}
class Jy {
  constructor(t, n, { transformPagePoint: i, contextWindow: s, dragSnapToOrigin: a = !1 } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return
        const m = Xc(this.lastMoveEventInfo, this.history),
          y = this.startEvent !== null,
          x = S4(m.offset, { x: 0, y: 0 }) >= 3
        if (!y && !x) return
        const { point: _ } = m,
          { timestamp: w } = he
        this.history.push({ ..._, timestamp: w })
        const { onStart: S, onMove: k } = this.handlers
        ;(y || (S && S(this.lastMoveEvent, m), (this.startEvent = this.lastMoveEvent)),
          k && k(this.lastMoveEvent, m))
      }),
      (this.handlePointerMove = (m, y) => {
        ;((this.lastMoveEvent = m),
          (this.lastMoveEventInfo = Yc(y, this.transformPagePoint)),
          Rt.update(this.updatePoint, !0))
      }),
      (this.handlePointerUp = (m, y) => {
        this.end()
        const { onEnd: x, onSessionEnd: _, resumeAnimation: w } = this.handlers
        if ((this.dragSnapToOrigin && w && w(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
          return
        const S = Xc(
          m.type === 'pointercancel' ? this.lastMoveEventInfo : Yc(y, this.transformPagePoint),
          this.history
        )
        ;(this.startEvent && x && x(m, S), _ && _(m, S))
      }),
      !gy(t))
    )
      return
    ;((this.dragSnapToOrigin = a),
      (this.handlers = n),
      (this.transformPagePoint = i),
      (this.contextWindow = s || window))
    const l = kl(t),
      u = Yc(l, this.transformPagePoint),
      { point: f } = u,
      { timestamp: h } = he
    this.history = [{ ...f, timestamp: h }]
    const { onSessionStart: p } = n
    ;(p && p(t, Xc(u, this.history)),
      (this.removeListeners = si(
        Cn(this.contextWindow, 'pointermove', this.handlePointerMove),
        Cn(this.contextWindow, 'pointerup', this.handlePointerUp),
        Cn(this.contextWindow, 'pointercancel', this.handlePointerUp)
      )))
  }
  updateHandlers(t) {
    this.handlers = t
  }
  end() {
    ;(this.removeListeners && this.removeListeners(), Tn(this.updatePoint))
  }
}
function Yc(e, t) {
  return t ? { point: t(e.point) } : e
}
function kg(e, t) {
  return { x: e.x - t.x, y: e.y - t.y }
}
function Xc({ point: e }, t) {
  return { point: e, delta: kg(e, tv(t)), offset: kg(e, b4(t)), velocity: k4(t, 0.1) }
}
function b4(e) {
  return e[0]
}
function tv(e) {
  return e[e.length - 1]
}
function k4(e, t) {
  if (e.length < 2) return { x: 0, y: 0 }
  let n = e.length - 1,
    i = null
  const s = tv(e)
  for (; n >= 0 && ((i = e[n]), !(s.timestamp - i.timestamp > zi(t))); ) n--
  if (!i) return { x: 0, y: 0 }
  const a = Mn(s.timestamp - i.timestamp)
  if (a === 0) return { x: 0, y: 0 }
  const l = { x: (s.x - i.x) / a, y: (s.y - i.y) / a }
  return (l.x === 1 / 0 && (l.x = 0), l.y === 1 / 0 && (l.y = 0), l)
}
function Fe(e) {
  return e.max - e.min
}
function wf(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n
}
function Pg(e, t, n, i = 0.5) {
  ;((e.origin = i),
    (e.originPoint = Ht(t.min, t.max, e.origin)),
    (e.scale = Fe(n) / Fe(t)),
    (wf(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = Ht(n.min, n.max, e.origin) - e.originPoint),
    (wf(e.translate) || isNaN(e.translate)) && (e.translate = 0))
}
function As(e, t, n, i) {
  ;(Pg(e.x, t.x, n.x, i ? i.originX : void 0), Pg(e.y, t.y, n.y, i ? i.originY : void 0))
}
function Cg(e, t, n) {
  ;((e.min = n.min + t.min), (e.max = e.min + Fe(t)))
}
function P4(e, t, n) {
  ;(Cg(e.x, t.x, n.x), Cg(e.y, t.y, n.y))
}
function Mg(e, t, n) {
  ;((e.min = t.min - n.min), (e.max = e.min + Fe(t)))
}
function Rs(e, t, n) {
  ;(Mg(e.x, t.x, n.x), Mg(e.y, t.y, n.y))
}
function C4(e, { min: t, max: n }, i) {
  return (
    t !== void 0 && e < t
      ? (e = i ? Ht(t, e, i.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = i ? Ht(n, e, i.max) : Math.min(e, n)),
    e
  )
}
function Tg(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  }
}
function M4(e, { top: t, left: n, bottom: i, right: s }) {
  return { x: Tg(e.x, n, s), y: Tg(e.y, t, i) }
}
function Eg(e, t) {
  let n = t.min - e.min,
    i = t.max - e.max
  return (t.max - t.min < e.max - e.min && ([n, i] = [i, n]), { min: n, max: i })
}
function T4(e, t) {
  return { x: Eg(e.x, t.x), y: Eg(e.y, t.y) }
}
function E4(e, t) {
  let n = 0.5
  const i = Fe(e),
    s = Fe(t)
  return (
    s > i ? (n = Ws(t.min, t.max - i, e.min)) : i > s && (n = Ws(e.min, e.max - s, t.min)),
    ai(0, 1, n)
  )
}
function O4(e, t) {
  const n = {}
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  )
}
const Sf = 0.35
function L4(e = Sf) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Sf),
    { x: Og(e, 'left', 'right'), y: Og(e, 'top', 'bottom') }
  )
}
function Og(e, t, n) {
  return { min: Lg(e, t), max: Lg(e, n) }
}
function Lg(e, t) {
  return typeof e == 'number' ? e : e[t] || 0
}
const Dg = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  wr = () => ({ x: Dg(), y: Dg() }),
  Ag = () => ({ min: 0, max: 0 }),
  Qt = () => ({ x: Ag(), y: Ag() })
function Ue(e) {
  return [e('x'), e('y')]
}
function ev({ top: e, left: t, right: n, bottom: i }) {
  return { x: { min: t, max: n }, y: { min: e, max: i } }
}
function D4({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min }
}
function A4(e, t) {
  if (!t) return e
  const n = t({ x: e.left, y: e.top }),
    i = t({ x: e.right, y: e.bottom })
  return { top: n.y, left: n.x, bottom: i.y, right: i.x }
}
function Kc(e) {
  return e === void 0 || e === 1
}
function bf({ scale: e, scaleX: t, scaleY: n }) {
  return !Kc(e) || !Kc(t) || !Kc(n)
}
function Ai(e) {
  return bf(e) || nv(e) || e.z || e.rotate || e.rotateX || e.rotateY
}
function nv(e) {
  return Rg(e.x) || Rg(e.y)
}
function Rg(e) {
  return e && e !== '0%'
}
function sl(e, t, n) {
  const i = e - n,
    s = t * i
  return n + s
}
function Fg(e, t, n, i, s) {
  return (s !== void 0 && (e = sl(e, s, i)), sl(e, n, i) + t)
}
function kf(e, t = 0, n = 1, i, s) {
  ;((e.min = Fg(e.min, t, n, i, s)), (e.max = Fg(e.max, t, n, i, s)))
}
function iv(e, { x: t, y: n }) {
  ;(kf(e.x, t.translate, t.scale, t.originPoint), kf(e.y, n.translate, n.scale, n.originPoint))
}
function R4(e, t, n, i = !1) {
  const s = n.length
  if (!s) return
  t.x = t.y = 1
  let a, l
  for (let u = 0; u < s; u++) {
    ;((a = n[u]), (l = a.projectionDelta))
    const f = a.instance
    ;(f && f.style && f.style.display === 'contents') ||
      (i &&
        a.options.layoutScroll &&
        a.scroll &&
        a !== a.root &&
        Sr(e, { x: -a.scroll.offset.x, y: -a.scroll.offset.y }),
      l && ((t.x *= l.x.scale), (t.y *= l.y.scale), iv(e, l)),
      i && Ai(a.latestValues) && Sr(e, a.latestValues))
  }
  ;((t.x = Ig(t.x)), (t.y = Ig(t.y)))
}
function Ig(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1
}
function Zn(e, t) {
  ;((e.min = e.min + t), (e.max = e.max + t))
}
function Vg(e, t, [n, i, s]) {
  const a = t[s] !== void 0 ? t[s] : 0.5,
    l = Ht(e.min, e.max, a)
  kf(e, t[n], t[i], l, t.scale)
}
const F4 = ['x', 'scaleX', 'originX'],
  I4 = ['y', 'scaleY', 'originY']
function Sr(e, t) {
  ;(Vg(e.x, t, F4), Vg(e.y, t, I4))
}
function rv(e, t) {
  return ev(A4(e.getBoundingClientRect(), t))
}
function V4(e, t, n) {
  const i = rv(e, n),
    { scroll: s } = t
  return (s && (Zn(i.x, s.offset.x), Zn(i.y, s.offset.y)), i)
}
const sv = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  z4 = new WeakMap()
class B4 {
  constructor(t) {
    ;((this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Qt()),
      (this.visualElement = t))
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: i } = this.visualElement
    if (i && i.isPresent === !1) return
    const s = p => {
        const { dragSnapToOrigin: m } = this.getProps()
        ;(m ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(kl(p, 'page').point))
      },
      a = (p, m) => {
        const { drag: y, dragPropagation: x, onDragStart: _ } = this.getProps()
        if (
          y &&
          !x &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = vy(y)),
          !this.openGlobalLock)
        )
          return
        ;((this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Ue(S => {
            let k = this.getAxisMotionValue(S).get() || 0
            if (ln.test(k)) {
              const { projection: P } = this.visualElement
              if (P && P.layout) {
                const C = P.layout.layoutBox[S]
                C && (k = Fe(C) * (parseFloat(k) / 100))
              }
            }
            this.originPoint[S] = k
          }),
          _ && Rt.update(() => _(p, m), !1, !0))
        const { animationState: w } = this.visualElement
        w && w.setActive('whileDrag', !0)
      },
      l = (p, m) => {
        const {
          dragPropagation: y,
          dragDirectionLock: x,
          onDirectionLock: _,
          onDrag: w,
        } = this.getProps()
        if (!y && !this.openGlobalLock) return
        const { offset: S } = m
        if (x && this.currentDirection === null) {
          ;((this.currentDirection = N4(S)),
            this.currentDirection !== null && _ && _(this.currentDirection))
          return
        }
        ;(this.updateAxis('x', m.point, S),
          this.updateAxis('y', m.point, S),
          this.visualElement.render(),
          w && w(p, m))
      },
      u = (p, m) => this.stop(p, m),
      f = () =>
        Ue(p => {
          var m
          return (
            this.getAnimationState(p) === 'paused' &&
            ((m = this.getAxisMotionValue(p).animation) === null || m === void 0
              ? void 0
              : m.play())
          )
        }),
      { dragSnapToOrigin: h } = this.getProps()
    this.panSession = new Jy(
      t,
      { onSessionStart: s, onStart: a, onMove: l, onSessionEnd: u, resumeAnimation: f },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: h,
        contextWindow: sv(this.visualElement),
      }
    )
  }
  stop(t, n) {
    const i = this.isDragging
    if ((this.cancel(), !i)) return
    const { velocity: s } = n
    this.startAnimation(s)
    const { onDragEnd: a } = this.getProps()
    a && Rt.update(() => a(t, n))
  }
  cancel() {
    this.isDragging = !1
    const { projection: t, animationState: n } = this.visualElement
    ;(t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0))
    const { dragPropagation: i } = this.getProps()
    ;(!i && this.openGlobalLock && (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive('whileDrag', !1))
  }
  updateAxis(t, n, i) {
    const { drag: s } = this.getProps()
    if (!i || !Da(t, s, this.currentDirection)) return
    const a = this.getAxisMotionValue(t)
    let l = this.originPoint[t] + i[t]
    ;(this.constraints && this.constraints[t] && (l = C4(l, this.constraints[t], this.elastic[t])),
      a.set(l))
  }
  resolveConstraints() {
    var t
    const { dragConstraints: n, dragElastic: i } = this.getProps(),
      s =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
            ? void 0
            : t.layout,
      a = this.constraints
    ;(n && xr(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && s
        ? (this.constraints = M4(s.layoutBox, n))
        : (this.constraints = !1),
      (this.elastic = L4(i)),
      a !== this.constraints &&
        s &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Ue(l => {
          this.getAxisMotionValue(l) &&
            (this.constraints[l] = O4(s.layoutBox[l], this.constraints[l]))
        }))
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps()
    if (!t || !xr(t)) return !1
    const i = t.current,
      { projection: s } = this.visualElement
    if (!s || !s.layout) return !1
    const a = V4(i, s.root, this.visualElement.getTransformPagePoint())
    let l = T4(s.layout.layoutBox, a)
    if (n) {
      const u = n(D4(l))
      ;((this.hasMutatedConstraints = !!u), u && (l = ev(u)))
    }
    return l
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: i,
        dragElastic: s,
        dragTransition: a,
        dragSnapToOrigin: l,
        onDragTransitionEnd: u,
      } = this.getProps(),
      f = this.constraints || {},
      h = Ue(p => {
        if (!Da(p, n, this.currentDirection)) return
        let m = (f && f[p]) || {}
        l && (m = { min: 0, max: 0 })
        const y = s ? 200 : 1e6,
          x = s ? 40 : 1e7,
          _ = {
            type: 'inertia',
            velocity: i ? t[p] : 0,
            bounceStiffness: y,
            bounceDamping: x,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...a,
            ...m,
          }
        return this.startAxisValueAnimation(p, _)
      })
    return Promise.all(h).then(u)
  }
  startAxisValueAnimation(t, n) {
    const i = this.getAxisMotionValue(t)
    return i.start(uh(t, i, 0, n))
  }
  stopAnimation() {
    Ue(t => this.getAxisMotionValue(t).stop())
  }
  pauseAnimation() {
    Ue(t => {
      var n
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause()
    })
  }
  getAnimationState(t) {
    var n
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state
  }
  getAxisMotionValue(t) {
    const n = '_drag' + t.toUpperCase(),
      i = this.visualElement.getProps(),
      s = i[n]
    return s || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
  }
  snapToCursor(t) {
    Ue(n => {
      const { drag: i } = this.getProps()
      if (!Da(n, i, this.currentDirection)) return
      const { projection: s } = this.visualElement,
        a = this.getAxisMotionValue(n)
      if (s && s.layout) {
        const { min: l, max: u } = s.layout.layoutBox[n]
        a.set(t[n] - Ht(l, u, 0.5))
      }
    })
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: i } = this.visualElement
    if (!xr(n) || !i || !this.constraints) return
    this.stopAnimation()
    const s = { x: 0, y: 0 }
    Ue(l => {
      const u = this.getAxisMotionValue(l)
      if (u) {
        const f = u.get()
        s[l] = E4({ min: f, max: f }, this.constraints[l])
      }
    })
    const { transformTemplate: a } = this.visualElement.getProps()
    ;((this.visualElement.current.style.transform = a ? a({}, '') : 'none'),
      i.root && i.root.updateScroll(),
      i.updateLayout(),
      this.resolveConstraints(),
      Ue(l => {
        if (!Da(l, t, null)) return
        const u = this.getAxisMotionValue(l),
          { min: f, max: h } = this.constraints[l]
        u.set(Ht(f, h, s[l]))
      }))
  }
  addListeners() {
    if (!this.visualElement.current) return
    z4.set(this.visualElement, this)
    const t = this.visualElement.current,
      n = Cn(t, 'pointerdown', f => {
        const { drag: h, dragListener: p = !0 } = this.getProps()
        h && p && this.start(f)
      }),
      i = () => {
        const { dragConstraints: f } = this.getProps()
        xr(f) && (this.constraints = this.resolveRefConstraints())
      },
      { projection: s } = this.visualElement,
      a = s.addEventListener('measure', i)
    ;(s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), i())
    const l = Sn(window, 'resize', () => this.scalePositionWithinConstraints()),
      u = s.addEventListener('didUpdate', ({ delta: f, hasLayoutChanged: h }) => {
        this.isDragging &&
          h &&
          (Ue(p => {
            const m = this.getAxisMotionValue(p)
            m && ((this.originPoint[p] += f[p].translate), m.set(m.get() + f[p].translate))
          }),
          this.visualElement.render())
      })
    return () => {
      ;(l(), n(), a(), u && u())
    }
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: i = !1,
        dragPropagation: s = !1,
        dragConstraints: a = !1,
        dragElastic: l = Sf,
        dragMomentum: u = !0,
      } = t
    return {
      ...t,
      drag: n,
      dragDirectionLock: i,
      dragPropagation: s,
      dragConstraints: a,
      dragElastic: l,
      dragMomentum: u,
    }
  }
}
function Da(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e)
}
function N4(e, t = 10) {
  let n = null
  return (Math.abs(e.y) > t ? (n = 'y') : Math.abs(e.x) > t && (n = 'x'), n)
}
class j4 extends hi {
  constructor(t) {
    ;(super(t),
      (this.removeGroupControls = Xt),
      (this.removeListeners = Xt),
      (this.controls = new B4(t)))
  }
  mount() {
    const { dragControls: t } = this.node.getProps()
    ;(t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Xt))
  }
  unmount() {
    ;(this.removeGroupControls(), this.removeListeners())
  }
}
const zg = e => (t, n) => {
  e && Rt.update(() => e(t, n))
}
class H4 extends hi {
  constructor() {
    ;(super(...arguments), (this.removePointerDownListener = Xt))
  }
  onPointerDown(t) {
    this.session = new Jy(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: sv(this.node),
    })
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: i, onPanEnd: s } = this.node.getProps()
    return {
      onSessionStart: zg(t),
      onStart: zg(n),
      onMove: i,
      onEnd: (a, l) => {
        ;(delete this.session, s && Rt.update(() => s(a, l)))
      },
    }
  }
  mount() {
    this.removePointerDownListener = Cn(this.node.current, 'pointerdown', t =>
      this.onPointerDown(t)
    )
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers())
  }
  unmount() {
    ;(this.removePointerDownListener(), this.session && this.session.end())
  }
}
function W4() {
  const e = U.useContext(Yf)
  if (e === null) return [!0, null]
  const { isPresent: t, onExitComplete: n, register: i } = e,
    s = U.useId()
  return (U.useEffect(() => i(s), []), !t && n ? [!1, () => n && n(s)] : [!0])
}
const Ka = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 }
function Bg(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100
}
const _s = {
    correct: (e, t) => {
      if (!t.target) return e
      if (typeof e == 'string')
        if (pt.test(e)) e = parseFloat(e)
        else return e
      const n = Bg(e, t.target.x),
        i = Bg(e, t.target.y)
      return `${n}% ${i}%`
    },
  },
  U4 = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const i = e,
        s = li.parse(e)
      if (s.length > 5) return i
      const a = li.createTransformer(e),
        l = typeof s[0] != 'number' ? 1 : 0,
        u = n.x.scale * t.x,
        f = n.y.scale * t.y
      ;((s[0 + l] /= u), (s[1 + l] /= f))
      const h = Ht(u, f, 0.5)
      return (
        typeof s[2 + l] == 'number' && (s[2 + l] /= h),
        typeof s[3 + l] == 'number' && (s[3 + l] /= h),
        a(s)
      )
    },
  }
class $4 extends an.Component {
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: i, layoutId: s } = this.props,
      { projection: a } = t
    ;(Qw(Y4),
      a &&
        (n.group && n.group.add(a),
        i && i.register && s && i.register(a),
        a.root.didUpdate(),
        a.addEventListener('animationComplete', () => {
          this.safeToRemove()
        }),
        a.setOptions({ ...a.options, onExitComplete: () => this.safeToRemove() })),
      (Ka.hasEverUpdated = !0))
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: i, drag: s, isPresent: a } = this.props,
      l = i.projection
    return (
      l &&
        ((l.isPresent = a),
        s || t.layoutDependency !== n || n === void 0 ? l.willUpdate() : this.safeToRemove(),
        t.isPresent !== a &&
          (a
            ? l.promote()
            : l.relegate() ||
              Rt.postRender(() => {
                const u = l.getStack()
                ;(!u || !u.members.length) && this.safeToRemove()
              }))),
      null
    )
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement
    t &&
      (t.root.didUpdate(),
      queueMicrotask(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove()
      }))
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: i } = this.props,
      { projection: s } = t
    s &&
      (s.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(s),
      i && i.deregister && i.deregister(s))
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props
    t && t()
  }
  render() {
    return null
  }
}
function ov(e) {
  const [t, n] = W4(),
    i = U.useContext(ey)
  return an.createElement($4, {
    ...e,
    layoutGroup: i,
    switchLayoutGroup: U.useContext(ny),
    isPresent: t,
    safeToRemove: n,
  })
}
const Y4 = {
    borderRadius: {
      ..._s,
      applyTo: [
        'borderTopLeftRadius',
        'borderTopRightRadius',
        'borderBottomLeftRadius',
        'borderBottomRightRadius',
      ],
    },
    borderTopLeftRadius: _s,
    borderTopRightRadius: _s,
    borderBottomLeftRadius: _s,
    borderBottomRightRadius: _s,
    boxShadow: U4,
  },
  av = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
  X4 = av.length,
  Ng = e => (typeof e == 'string' ? parseFloat(e) : e),
  jg = e => typeof e == 'number' || pt.test(e)
function K4(e, t, n, i, s, a) {
  s
    ? ((e.opacity = Ht(0, n.opacity !== void 0 ? n.opacity : 1, G4(i))),
      (e.opacityExit = Ht(t.opacity !== void 0 ? t.opacity : 1, 0, q4(i))))
    : a &&
      (e.opacity = Ht(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        i
      ))
  for (let l = 0; l < X4; l++) {
    const u = `border${av[l]}Radius`
    let f = Hg(t, u),
      h = Hg(n, u)
    if (f === void 0 && h === void 0) continue
    ;(f || (f = 0),
      h || (h = 0),
      f === 0 || h === 0 || jg(f) === jg(h)
        ? ((e[u] = Math.max(Ht(Ng(f), Ng(h), i), 0)), (ln.test(h) || ln.test(f)) && (e[u] += '%'))
        : (e[u] = h))
  }
  ;(t.rotate || n.rotate) && (e.rotate = Ht(t.rotate || 0, n.rotate || 0, i))
}
function Hg(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius
}
const G4 = lv(0, 0.5, Oy),
  q4 = lv(0.5, 0.95, Xt)
function lv(e, t, n) {
  return i => (i < e ? 0 : i > t ? 1 : n(Ws(e, t, i)))
}
function Wg(e, t) {
  ;((e.min = t.min), (e.max = t.max))
}
function He(e, t) {
  ;(Wg(e.x, t.x), Wg(e.y, t.y))
}
function Ug(e, t, n, i, s) {
  return ((e -= t), (e = sl(e, 1 / n, i)), s !== void 0 && (e = sl(e, 1 / s, i)), e)
}
function Q4(e, t = 0, n = 1, i = 0.5, s, a = e, l = e) {
  if (
    (ln.test(t) && ((t = parseFloat(t)), (t = Ht(l.min, l.max, t / 100) - l.min)),
    typeof t != 'number')
  )
    return
  let u = Ht(a.min, a.max, i)
  ;(e === a && (u -= t), (e.min = Ug(e.min, t, n, u, s)), (e.max = Ug(e.max, t, n, u, s)))
}
function $g(e, t, [n, i, s], a, l) {
  Q4(e, t[n], t[i], t[s], t.scale, a, l)
}
const Z4 = ['x', 'scaleX', 'originX'],
  J4 = ['y', 'scaleY', 'originY']
function Yg(e, t, n, i) {
  ;($g(e.x, t, Z4, n ? n.x : void 0, i ? i.x : void 0),
    $g(e.y, t, J4, n ? n.y : void 0, i ? i.y : void 0))
}
function Xg(e) {
  return e.translate === 0 && e.scale === 1
}
function uv(e) {
  return Xg(e.x) && Xg(e.y)
}
function tk(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
}
function cv(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  )
}
function Kg(e) {
  return Fe(e.x) / Fe(e.y)
}
class ek {
  constructor() {
    this.members = []
  }
  add(t) {
    ;(ch(this.members, t), t.scheduleRender())
  }
  remove(t) {
    if ((fh(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead)) {
      const n = this.members[this.members.length - 1]
      n && this.promote(n)
    }
  }
  relegate(t) {
    const n = this.members.findIndex(s => t === s)
    if (n === 0) return !1
    let i
    for (let s = n; s >= 0; s--) {
      const a = this.members[s]
      if (a.isPresent !== !1) {
        i = a
        break
      }
    }
    return i ? (this.promote(i), !0) : !1
  }
  promote(t, n) {
    const i = this.lead
    if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
      ;(i.instance && i.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = i),
        n && (t.resumeFrom.preserveOpacity = !0),
        i.snapshot &&
          ((t.snapshot = i.snapshot),
          (t.snapshot.latestValues = i.animationValues || i.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0))
      const { crossfade: s } = t.options
      s === !1 && i.hide()
    }
  }
  exitAnimationComplete() {
    this.members.forEach(t => {
      const { options: n, resumingFrom: i } = t
      ;(n.onExitComplete && n.onExitComplete(),
        i && i.options.onExitComplete && i.options.onExitComplete())
    })
  }
  scheduleRender() {
    this.members.forEach(t => {
      t.instance && t.scheduleRender(!1)
    })
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
  }
}
function Gg(e, t, n) {
  let i = ''
  const s = e.x.translate / t.x,
    a = e.y.translate / t.y
  if (
    ((s || a) && (i = `translate3d(${s}px, ${a}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (i += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const { rotate: f, rotateX: h, rotateY: p } = n
    ;(f && (i += `rotate(${f}deg) `),
      h && (i += `rotateX(${h}deg) `),
      p && (i += `rotateY(${p}deg) `))
  }
  const l = e.x.scale * t.x,
    u = e.y.scale * t.y
  return ((l !== 1 || u !== 1) && (i += `scale(${l}, ${u})`), i || 'none')
}
const nk = (e, t) => e.depth - t.depth
class ik {
  constructor() {
    ;((this.children = []), (this.isDirty = !1))
  }
  add(t) {
    ;(ch(this.children, t), (this.isDirty = !0))
  }
  remove(t) {
    ;(fh(this.children, t), (this.isDirty = !0))
  }
  forEach(t) {
    ;(this.isDirty && this.children.sort(nk), (this.isDirty = !1), this.children.forEach(t))
  }
}
function rk(e, t) {
  const n = performance.now(),
    i = ({ timestamp: s }) => {
      const a = s - n
      a >= t && (Tn(i), e(a - t))
    }
  return (Rt.read(i, !0), () => Tn(i))
}
function sk(e) {
  window.MotionDebug && window.MotionDebug.record(e)
}
function ok(e) {
  return e instanceof SVGElement && e.tagName !== 'svg'
}
function ak(e, t, n) {
  const i = Ee(e) ? e : kr(e)
  return (i.start(uh('', i, t, n)), i.animation)
}
const qg = ['', 'X', 'Y', 'Z'],
  lk = { visibility: 'hidden' },
  Qg = 1e3
let uk = 0
const Ri = {
  type: 'projectionFrame',
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
}
function fv({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: i,
  resetTransform: s,
}) {
  return class {
    constructor(l = {}, u = t?.()) {
      ;((this.id = uk++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots())
        }),
        (this.updateProjection = () => {
          ;((this.projectionUpdateScheduled = !1),
            (Ri.totalNodes = Ri.resolvedTargetDeltas = Ri.recalculatedProjection = 0),
            this.nodes.forEach(hk),
            this.nodes.forEach(yk),
            this.nodes.forEach(vk),
            this.nodes.forEach(dk),
            sk(Ri))
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = l),
        (this.root = u ? u.root || u : this),
        (this.path = u ? [...u.path, u] : []),
        (this.parent = u),
        (this.depth = u ? u.depth + 1 : 0))
      for (let f = 0; f < this.path.length; f++) this.path[f].shouldResetTransform = !0
      this.root === this && (this.nodes = new ik())
    }
    addEventListener(l, u) {
      return (
        this.eventHandlers.has(l) || this.eventHandlers.set(l, new hh()),
        this.eventHandlers.get(l).add(u)
      )
    }
    notifyListeners(l, ...u) {
      const f = this.eventHandlers.get(l)
      f && f.notify(...u)
    }
    hasListeners(l) {
      return this.eventHandlers.has(l)
    }
    mount(l, u = this.root.hasTreeAnimated) {
      if (this.instance) return
      ;((this.isSVG = ok(l)), (this.instance = l))
      const { layoutId: f, layout: h, visualElement: p } = this.options
      if (
        (p && !p.current && p.mount(l),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        u && (h || f) && (this.isLayoutDirty = !0),
        e)
      ) {
        let m
        const y = () => (this.root.updateBlockedByResize = !1)
        e(l, () => {
          ;((this.root.updateBlockedByResize = !0),
            m && m(),
            (m = rk(y, 250)),
            Ka.hasAnimatedSinceResize && ((Ka.hasAnimatedSinceResize = !1), this.nodes.forEach(Jg)))
        })
      }
      ;(f && this.root.registerSharedNode(f, this),
        this.options.animate !== !1 &&
          p &&
          (f || h) &&
          this.addEventListener(
            'didUpdate',
            ({ delta: m, hasLayoutChanged: y, hasRelativeTargetChanged: x, layout: _ }) => {
              if (this.isTreeAnimationBlocked()) {
                ;((this.target = void 0), (this.relativeTarget = void 0))
                return
              }
              const w = this.options.transition || p.getDefaultTransition() || bk,
                { onLayoutAnimationStart: S, onLayoutAnimationComplete: k } = p.getProps(),
                P = !this.targetLayout || !cv(this.targetLayout, _) || x,
                C = !y && x
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                C ||
                (y && (P || !this.currentAnimation))
              ) {
                ;(this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(m, C))
                const T = { ...lh(w, 'layout'), onPlay: S, onComplete: k }
                ;((p.shouldReduceMotion || this.options.layoutRoot) &&
                  ((T.delay = 0), (T.type = !1)),
                  this.startAnimation(T))
              } else
                (y || Jg(this),
                  this.isLead() && this.options.onExitComplete && this.options.onExitComplete())
              this.targetLayout = _
            }
          ))
    }
    unmount() {
      ;(this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this))
      const l = this.getStack()
      ;(l && l.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Tn(this.updateProjection))
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || (this.parent && this.parent.isTreeAnimationBlocked()) || !1
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0), this.nodes && this.nodes.forEach(xk), this.animationId++)
    }
    getTransformTemplate() {
      const { visualElement: l } = this.options
      return l && l.getProps().transformTemplate
    }
    willUpdate(l = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete()
        return
      }
      if ((!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)) return
      this.isLayoutDirty = !0
      for (let p = 0; p < this.path.length; p++) {
        const m = this.path[p]
        ;((m.shouldResetTransform = !0),
          m.updateScroll('snapshot'),
          m.options.layoutRoot && m.willUpdate(!1))
      }
      const { layoutId: u, layout: f } = this.options
      if (u === void 0 && !f) return
      const h = this.getTransformTemplate()
      ;((this.prevTransformTemplateValue = h ? h(this.latestValues, '') : void 0),
        this.updateSnapshot(),
        l && this.notifyListeners('willUpdate'))
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        ;(this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Zg))
        return
      }
      ;(this.isUpdating || this.nodes.forEach(mk),
        (this.isUpdating = !1),
        this.nodes.forEach(gk),
        this.nodes.forEach(ck),
        this.nodes.forEach(fk),
        this.clearAllSnapshots())
      const u = performance.now()
      ;((he.delta = ai(0, 1e3 / 60, u - he.timestamp)),
        (he.timestamp = u),
        (he.isProcessing = !0),
        zc.update.process(he),
        zc.preRender.process(he),
        zc.render.process(he),
        (he.isProcessing = !1))
    }
    didUpdate() {
      this.updateScheduled || ((this.updateScheduled = !0), queueMicrotask(() => this.update()))
    }
    clearAllSnapshots() {
      ;(this.nodes.forEach(pk), this.sharedNodes.forEach(_k))
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0), Rt.preRender(this.updateProjection, !1, !0))
    }
    scheduleCheckAfterUnmount() {
      Rt.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
      })
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure())
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)
      )
        return
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let f = 0; f < this.path.length; f++) this.path[f].updateScroll()
      const l = this.layout
      ;((this.layout = this.measure(!1)),
        (this.layoutCorrected = Qt()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners('measure', this.layout.layoutBox))
      const { visualElement: u } = this.options
      u && u.notify('LayoutMeasure', this.layout.layoutBox, l ? l.layoutBox : void 0)
    }
    updateScroll(l = 'measure') {
      let u = !!(this.options.layoutScroll && this.instance)
      ;(this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === l &&
        (u = !1),
        u &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: l,
            isRoot: i(this.instance),
            offset: n(this.instance),
          }))
    }
    resetTransform() {
      if (!s) return
      const l = this.isLayoutDirty || this.shouldResetTransform,
        u = this.projectionDelta && !uv(this.projectionDelta),
        f = this.getTransformTemplate(),
        h = f ? f(this.latestValues, '') : void 0,
        p = h !== this.prevTransformTemplateValue
      l &&
        (u || Ai(this.latestValues) || p) &&
        (s(this.instance, h), (this.shouldResetTransform = !1), this.scheduleRender())
    }
    measure(l = !0) {
      const u = this.measurePageBox()
      let f = this.removeElementScroll(u)
      return (
        l && (f = this.removeTransform(f)),
        kk(f),
        {
          animationId: this.root.animationId,
          measuredBox: u,
          layoutBox: f,
          latestValues: {},
          source: this.id,
        }
      )
    }
    measurePageBox() {
      const { visualElement: l } = this.options
      if (!l) return Qt()
      const u = l.measureViewportBox(),
        { scroll: f } = this.root
      return (f && (Zn(u.x, f.offset.x), Zn(u.y, f.offset.y)), u)
    }
    removeElementScroll(l) {
      const u = Qt()
      He(u, l)
      for (let f = 0; f < this.path.length; f++) {
        const h = this.path[f],
          { scroll: p, options: m } = h
        if (h !== this.root && p && m.layoutScroll) {
          if (p.isRoot) {
            He(u, l)
            const { scroll: y } = this.root
            y && (Zn(u.x, -y.offset.x), Zn(u.y, -y.offset.y))
          }
          ;(Zn(u.x, p.offset.x), Zn(u.y, p.offset.y))
        }
      }
      return u
    }
    applyTransform(l, u = !1) {
      const f = Qt()
      He(f, l)
      for (let h = 0; h < this.path.length; h++) {
        const p = this.path[h]
        ;(!u &&
          p.options.layoutScroll &&
          p.scroll &&
          p !== p.root &&
          Sr(f, { x: -p.scroll.offset.x, y: -p.scroll.offset.y }),
          Ai(p.latestValues) && Sr(f, p.latestValues))
      }
      return (Ai(this.latestValues) && Sr(f, this.latestValues), f)
    }
    removeTransform(l) {
      const u = Qt()
      He(u, l)
      for (let f = 0; f < this.path.length; f++) {
        const h = this.path[f]
        if (!h.instance || !Ai(h.latestValues)) continue
        bf(h.latestValues) && h.updateSnapshot()
        const p = Qt(),
          m = h.measurePageBox()
        ;(He(p, m), Yg(u, h.latestValues, h.snapshot ? h.snapshot.layoutBox : void 0, p))
      }
      return (Ai(this.latestValues) && Yg(u, this.latestValues), u)
    }
    setTargetDelta(l) {
      ;((this.targetDelta = l), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0))
    }
    setOptions(l) {
      this.options = { ...this.options, ...l, crossfade: l.crossfade !== void 0 ? l.crossfade : !0 }
    }
    clearMeasurements() {
      ;((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1))
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== he.timestamp &&
        this.relativeParent.resolveTargetDelta(!0)
    }
    resolveTargetDelta(l = !1) {
      var u
      const f = this.getLead()
      ;(this.isProjectionDirty || (this.isProjectionDirty = f.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = f.isTransformDirty),
        this.isSharedProjectionDirty || (this.isSharedProjectionDirty = f.isSharedProjectionDirty))
      const h = !!this.resumingFrom || this !== f
      if (
        !(
          l ||
          (h && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((u = this.parent) === null || u === void 0) && u.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return
      const { layout: m, layoutId: y } = this.options
      if (!(!this.layout || !(m || y))) {
        if (
          ((this.resolvedRelativeTargetAt = he.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const x = this.getClosestProjectingParent()
          x && x.layout && this.animationProgress !== 1
            ? ((this.relativeParent = x),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Qt()),
              (this.relativeTargetOrigin = Qt()),
              Rs(this.relativeTargetOrigin, this.layout.layoutBox, x.layout.layoutBox),
              He(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0)
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target || ((this.target = Qt()), (this.targetWithTransforms = Qt())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                P4(this.target, this.relativeTarget, this.relativeParent.target))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : He(this.target, this.layout.layoutBox),
                  iv(this.target, this.targetDelta))
                : He(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1
            const x = this.getClosestProjectingParent()
            x &&
            !!x.resumingFrom == !!this.resumingFrom &&
            !x.options.layoutScroll &&
            x.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = x),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Qt()),
                (this.relativeTargetOrigin = Qt()),
                Rs(this.relativeTargetOrigin, this.target, x.target),
                He(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0)
          }
          Ri.resolvedTargetDeltas++
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || bf(this.parent.latestValues) || nv(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
    }
    calcProjection() {
      var l
      const u = this.getLead(),
        f = !!this.resumingFrom || this !== u
      let h = !0
      if (
        ((this.isProjectionDirty ||
          (!((l = this.parent) === null || l === void 0) && l.isProjectionDirty)) &&
          (h = !1),
        f && (this.isSharedProjectionDirty || this.isTransformDirty) && (h = !1),
        this.resolvedRelativeTargetAt === he.timestamp && (h = !1),
        h)
      )
        return
      const { layout: p, layoutId: m } = this.options
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(p || m))
      )
        return
      He(this.layoutCorrected, this.layout.layoutBox)
      const y = this.treeScale.x,
        x = this.treeScale.y
      ;(R4(this.layoutCorrected, this.treeScale, this.path, f),
        u.layout &&
          !u.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          (u.target = u.layout.layoutBox))
      const { target: _ } = u
      if (!_) {
        this.projectionTransform &&
          ((this.projectionDelta = wr()),
          (this.projectionTransform = 'none'),
          this.scheduleRender())
        return
      }
      this.projectionDelta ||
        ((this.projectionDelta = wr()), (this.projectionDeltaWithTransform = wr()))
      const w = this.projectionTransform
      ;(As(this.projectionDelta, this.layoutCorrected, _, this.latestValues),
        (this.projectionTransform = Gg(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== w || this.treeScale.x !== y || this.treeScale.y !== x) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners('projectionUpdate', _)),
        Ri.recalculatedProjection++)
    }
    hide() {
      this.isVisible = !1
    }
    show() {
      this.isVisible = !0
    }
    scheduleRender(l = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), l)) {
        const u = this.getStack()
        u && u.scheduleRender()
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
    }
    setAnimationOrigin(l, u = !1) {
      const f = this.snapshot,
        h = f ? f.latestValues : {},
        p = { ...this.latestValues },
        m = wr()
      ;((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !u))
      const y = Qt(),
        x = f ? f.source : void 0,
        _ = this.layout ? this.layout.source : void 0,
        w = x !== _,
        S = this.getStack(),
        k = !S || S.members.length <= 1,
        P = !!(w && !k && this.options.crossfade === !0 && !this.path.some(Sk))
      this.animationProgress = 0
      let C
      ;((this.mixTargetDelta = T => {
        const E = T / 1e3
        ;(t0(m.x, l.x, E),
          t0(m.y, l.y, E),
          this.setTargetDelta(m),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Rs(y, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            wk(this.relativeTarget, this.relativeTargetOrigin, y, E),
            C && tk(this.relativeTarget, C) && (this.isProjectionDirty = !1),
            C || (C = Qt()),
            He(C, this.relativeTarget)),
          w && ((this.animationValues = p), K4(p, h, this.latestValues, E, P, k)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = E))
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0))
    }
    startAnimation(l) {
      ;(this.notifyListeners('animationStart'),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation && (Tn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Rt.update(() => {
          ;((Ka.hasAnimatedSinceResize = !0),
            (this.currentAnimation = ak(0, Qg, {
              ...l,
              onUpdate: u => {
                ;(this.mixTargetDelta(u), l.onUpdate && l.onUpdate(u))
              },
              onComplete: () => {
                ;(l.onComplete && l.onComplete(), this.completeAnimation())
              },
            })),
            this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0))
        })))
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0))
      const l = this.getStack()
      ;(l && l.exitAnimationComplete(),
        (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
        this.notifyListeners('animationComplete'))
    }
    finishAnimation() {
      ;(this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Qg), this.currentAnimation.stop()),
        this.completeAnimation())
    }
    applyTransformsToTarget() {
      const l = this.getLead()
      let { targetWithTransforms: u, target: f, layout: h, latestValues: p } = l
      if (!(!u || !f || !h)) {
        if (
          this !== l &&
          this.layout &&
          h &&
          hv(this.options.animationType, this.layout.layoutBox, h.layoutBox)
        ) {
          f = this.target || Qt()
          const m = Fe(this.layout.layoutBox.x)
          ;((f.x.min = l.target.x.min), (f.x.max = f.x.min + m))
          const y = Fe(this.layout.layoutBox.y)
          ;((f.y.min = l.target.y.min), (f.y.max = f.y.min + y))
        }
        ;(He(u, f), Sr(u, p), As(this.projectionDeltaWithTransform, this.layoutCorrected, u, p))
      }
    }
    registerSharedNode(l, u) {
      ;(this.sharedNodes.has(l) || this.sharedNodes.set(l, new ek()),
        this.sharedNodes.get(l).add(u))
      const h = u.options.initialPromotionConfig
      u.promote({
        transition: h ? h.transition : void 0,
        preserveFollowOpacity:
          h && h.shouldPreserveFollowOpacity ? h.shouldPreserveFollowOpacity(u) : void 0,
      })
    }
    isLead() {
      const l = this.getStack()
      return l ? l.lead === this : !0
    }
    getLead() {
      var l
      const { layoutId: u } = this.options
      return u ? ((l = this.getStack()) === null || l === void 0 ? void 0 : l.lead) || this : this
    }
    getPrevLead() {
      var l
      const { layoutId: u } = this.options
      return u ? ((l = this.getStack()) === null || l === void 0 ? void 0 : l.prevLead) : void 0
    }
    getStack() {
      const { layoutId: l } = this.options
      if (l) return this.root.sharedNodes.get(l)
    }
    promote({ needsReset: l, transition: u, preserveFollowOpacity: f } = {}) {
      const h = this.getStack()
      ;(h && h.promote(this, f),
        l && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        u && this.setOptions({ transition: u }))
    }
    relegate() {
      const l = this.getStack()
      return l ? l.relegate(this) : !1
    }
    resetRotation() {
      const { visualElement: l } = this.options
      if (!l) return
      let u = !1
      const { latestValues: f } = l
      if (((f.rotate || f.rotateX || f.rotateY || f.rotateZ) && (u = !0), !u)) return
      const h = {}
      for (let p = 0; p < qg.length; p++) {
        const m = 'rotate' + qg[p]
        f[m] && ((h[m] = f[m]), l.setStaticValue(m, 0))
      }
      l.render()
      for (const p in h) l.setStaticValue(p, h[p])
      l.scheduleRender()
    }
    getProjectionStyles(l) {
      var u, f
      if (!this.instance || this.isSVG) return
      if (!this.isVisible) return lk
      const h = { visibility: '' },
        p = this.getTransformTemplate()
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (h.opacity = ''),
          (h.pointerEvents = Xa(l?.pointerEvents) || ''),
          (h.transform = p ? p(this.latestValues, '') : 'none'),
          h
        )
      const m = this.getLead()
      if (!this.projectionDelta || !this.layout || !m.target) {
        const w = {}
        return (
          this.options.layoutId &&
            ((w.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
            (w.pointerEvents = Xa(l?.pointerEvents) || '')),
          this.hasProjected &&
            !Ai(this.latestValues) &&
            ((w.transform = p ? p({}, '') : 'none'), (this.hasProjected = !1)),
          w
        )
      }
      const y = m.animationValues || m.latestValues
      ;(this.applyTransformsToTarget(),
        (h.transform = Gg(this.projectionDeltaWithTransform, this.treeScale, y)),
        p && (h.transform = p(y, h.transform)))
      const { x, y: _ } = this.projectionDelta
      ;((h.transformOrigin = `${x.origin * 100}% ${_.origin * 100}% 0`),
        m.animationValues
          ? (h.opacity =
              m === this
                ? (f = (u = y.opacity) !== null && u !== void 0 ? u : this.latestValues.opacity) !==
                    null && f !== void 0
                  ? f
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : y.opacityExit)
          : (h.opacity =
              m === this
                ? y.opacity !== void 0
                  ? y.opacity
                  : ''
                : y.opacityExit !== void 0
                  ? y.opacityExit
                  : 0))
      for (const w in Za) {
        if (y[w] === void 0) continue
        const { correct: S, applyTo: k } = Za[w],
          P = h.transform === 'none' ? y[w] : S(y[w], m)
        if (k) {
          const C = k.length
          for (let T = 0; T < C; T++) h[k[T]] = P
        } else h[w] = P
      }
      return (
        this.options.layoutId &&
          (h.pointerEvents = m === this ? Xa(l?.pointerEvents) || '' : 'none'),
        h
      )
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0
    }
    resetTree() {
      ;(this.root.nodes.forEach(l => {
        var u
        return (u = l.currentAnimation) === null || u === void 0 ? void 0 : u.stop()
      }),
        this.root.nodes.forEach(Zg),
        this.root.sharedNodes.clear())
    }
  }
}
function ck(e) {
  e.updateLayout()
}
function fk(e) {
  var t
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot
  if (e.isLead() && e.layout && n && e.hasListeners('didUpdate')) {
    const { layoutBox: i, measuredBox: s } = e.layout,
      { animationType: a } = e.options,
      l = n.source !== e.layout.source
    a === 'size'
      ? Ue(m => {
          const y = l ? n.measuredBox[m] : n.layoutBox[m],
            x = Fe(y)
          ;((y.min = i[m].min), (y.max = y.min + x))
        })
      : hv(a, n.layoutBox, i) &&
        Ue(m => {
          const y = l ? n.measuredBox[m] : n.layoutBox[m],
            x = Fe(i[m])
          ;((y.max = y.min + x),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0), (e.relativeTarget[m].max = e.relativeTarget[m].min + x)))
        })
    const u = wr()
    As(u, i, n.layoutBox)
    const f = wr()
    l ? As(f, e.applyTransform(s, !0), n.measuredBox) : As(f, i, n.layoutBox)
    const h = !uv(u)
    let p = !1
    if (!e.resumeFrom) {
      const m = e.getClosestProjectingParent()
      if (m && !m.resumeFrom) {
        const { snapshot: y, layout: x } = m
        if (y && x) {
          const _ = Qt()
          Rs(_, n.layoutBox, y.layoutBox)
          const w = Qt()
          ;(Rs(w, i, x.layoutBox),
            cv(_, w) || (p = !0),
            m.options.layoutRoot &&
              ((e.relativeTarget = w), (e.relativeTargetOrigin = _), (e.relativeParent = m)))
        }
      }
    }
    e.notifyListeners('didUpdate', {
      layout: i,
      snapshot: n,
      delta: f,
      layoutDelta: u,
      hasLayoutChanged: h,
      hasRelativeTargetChanged: p,
    })
  } else if (e.isLead()) {
    const { onExitComplete: i } = e.options
    i && i()
  }
  e.options.transition = void 0
}
function hk(e) {
  ;(Ri.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty)))
}
function dk(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function pk(e) {
  e.clearSnapshot()
}
function Zg(e) {
  e.clearMeasurements()
}
function mk(e) {
  e.isLayoutDirty = !1
}
function gk(e) {
  const { visualElement: t } = e.options
  ;(t && t.getProps().onBeforeLayoutMeasure && t.notify('BeforeLayoutMeasure'), e.resetTransform())
}
function Jg(e) {
  ;(e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0))
}
function yk(e) {
  e.resolveTargetDelta()
}
function vk(e) {
  e.calcProjection()
}
function xk(e) {
  e.resetRotation()
}
function _k(e) {
  e.removeLeadSnapshot()
}
function t0(e, t, n) {
  ;((e.translate = Ht(t.translate, 0, n)),
    (e.scale = Ht(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint))
}
function e0(e, t, n, i) {
  ;((e.min = Ht(t.min, n.min, i)), (e.max = Ht(t.max, n.max, i)))
}
function wk(e, t, n, i) {
  ;(e0(e.x, t.x, n.x, i), e0(e.y, t.y, n.y, i))
}
function Sk(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0
}
const bk = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  n0 = e => typeof navigator < 'u' && navigator.userAgent.toLowerCase().includes(e),
  i0 = n0('applewebkit/') && !n0('chrome/') ? Math.round : Xt
function r0(e) {
  ;((e.min = i0(e.min)), (e.max = i0(e.max)))
}
function kk(e) {
  ;(r0(e.x), r0(e.y))
}
function hv(e, t, n) {
  return e === 'position' || (e === 'preserve-aspect' && !wf(Kg(t), Kg(n), 0.2))
}
const Pk = fv({
    attachResizeListener: (e, t) => Sn(e, 'resize', t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Gc = { current: void 0 },
  dv = fv({
    measureScroll: e => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Gc.current) {
        const e = new Pk({})
        ;(e.mount(window), e.setOptions({ layoutScroll: !0 }), (Gc.current = e))
      }
      return Gc.current
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : 'none'
    },
    checkIsScrollRoot: e => window.getComputedStyle(e).position === 'fixed',
  }),
  Ck = { pan: { Feature: H4 }, drag: { Feature: j4, ProjectionNode: dv, MeasureLayout: ov } },
  Mk = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/
function Tk(e) {
  const t = Mk.exec(e)
  if (!t) return [,]
  const [, n, i] = t
  return [n, i]
}
function Pf(e, t, n = 1) {
  const [i, s] = Tk(e)
  if (!i) return
  const a = window.getComputedStyle(t).getPropertyValue(i)
  if (a) {
    const l = a.trim()
    return Gy(l) ? parseFloat(l) : l
  } else return pf(s) ? Pf(s, t, n + 1) : s
}
function Ek(e, { ...t }, n) {
  const i = e.current
  if (!(i instanceof Element)) return { target: t, transitionEnd: n }
  ;(n && (n = { ...n }),
    e.values.forEach(s => {
      const a = s.get()
      if (!pf(a)) return
      const l = Pf(a, i)
      l && s.set(l)
    }))
  for (const s in t) {
    const a = t[s]
    if (!pf(a)) continue
    const l = Pf(a, i)
    l && ((t[s] = l), n || (n = {}), n[s] === void 0 && (n[s] = a))
  }
  return { target: t, transitionEnd: n }
}
const Ok = new Set([
    'width',
    'height',
    'top',
    'left',
    'right',
    'bottom',
    'x',
    'y',
    'translateX',
    'translateY',
  ]),
  pv = e => Ok.has(e),
  Lk = e => Object.keys(e).some(pv),
  s0 = e => e === Ui || e === pt,
  o0 = (e, t) => parseFloat(e.split(', ')[t]),
  a0 =
    (e, t) =>
    (n, { transform: i }) => {
      if (i === 'none' || !i) return 0
      const s = i.match(/^matrix3d\((.+)\)$/)
      if (s) return o0(s[1], t)
      {
        const a = i.match(/^matrix\((.+)\)$/)
        return a ? o0(a[1], e) : 0
      }
    },
  Dk = new Set(['x', 'y', 'z']),
  Ak = Zs.filter(e => !Dk.has(e))
function Rk(e) {
  const t = []
  return (
    Ak.forEach(n => {
      const i = e.getValue(n)
      i !== void 0 && (t.push([n, i.get()]), i.set(n.startsWith('scale') ? 1 : 0))
    }),
    t.length && e.render(),
    t
  )
}
const Pr = {
  width: ({ x: e }, { paddingLeft: t = '0', paddingRight: n = '0' }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = '0', paddingBottom: n = '0' }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: a0(4, 13),
  y: a0(5, 14),
}
Pr.translateX = Pr.x
Pr.translateY = Pr.y
const Fk = (e, t, n) => {
    const i = t.measureViewportBox(),
      s = t.current,
      a = getComputedStyle(s),
      { display: l } = a,
      u = {}
    ;(l === 'none' && t.setStaticValue('display', e.display || 'block'),
      n.forEach(h => {
        u[h] = Pr[h](i, a)
      }),
      t.render())
    const f = t.measureViewportBox()
    return (
      n.forEach(h => {
        const p = t.getValue(h)
        ;(p && p.jump(u[h]), (e[h] = Pr[h](f, a)))
      }),
      e
    )
  },
  Ik = (e, t, n = {}, i = {}) => {
    ;((t = { ...t }), (i = { ...i }))
    const s = Object.keys(t).filter(pv)
    let a = [],
      l = !1
    const u = []
    if (
      (s.forEach(f => {
        const h = e.getValue(f)
        if (!e.hasValue(f)) return
        let p = n[f],
          m = xs(p)
        const y = t[f]
        let x
        if (tl(y)) {
          const _ = y.length,
            w = y[0] === null ? 1 : 0
          ;((p = y[w]), (m = xs(p)))
          for (let S = w; S < _ && y[S] !== null; S++) x ? ih(xs(y[S]) === x) : (x = xs(y[S]))
        } else x = xs(y)
        if (m !== x)
          if (s0(m) && s0(x)) {
            const _ = h.get()
            ;(typeof _ == 'string' && h.set(parseFloat(_)),
              typeof y == 'string'
                ? (t[f] = parseFloat(y))
                : Array.isArray(y) && x === pt && (t[f] = y.map(parseFloat)))
          } else
            m?.transform && x?.transform && (p === 0 || y === 0)
              ? p === 0
                ? h.set(x.transform(p))
                : (t[f] = m.transform(y))
              : (l || ((a = Rk(e)), (l = !0)),
                u.push(f),
                (i[f] = i[f] !== void 0 ? i[f] : t[f]),
                h.jump(y))
      }),
      u.length)
    ) {
      const f = u.indexOf('height') >= 0 ? window.pageYOffset : null,
        h = Fk(t, e, u)
      return (
        a.length &&
          a.forEach(([p, m]) => {
            e.getValue(p).set(m)
          }),
        e.render(),
        _l && f !== null && window.scrollTo({ top: f }),
        { target: h, transitionEnd: i }
      )
    } else return { target: t, transitionEnd: i }
  }
function Vk(e, t, n, i) {
  return Lk(t) ? Ik(e, t, n, i) : { target: t, transitionEnd: i }
}
const zk = (e, t, n, i) => {
    const s = Ek(e, t, i)
    return ((t = s.target), (i = s.transitionEnd), Vk(e, t, n, i))
  },
  Cf = { current: null },
  mv = { current: !1 }
function Bk() {
  if (((mv.current = !0), !!_l))
    if (window.matchMedia) {
      const e = window.matchMedia('(prefers-reduced-motion)'),
        t = () => (Cf.current = e.matches)
      ;(e.addListener(t), t())
    } else Cf.current = !1
}
function Nk(e, t, n) {
  const { willChange: i } = t
  for (const s in t) {
    const a = t[s],
      l = n[s]
    if (Ee(a)) (e.addValue(s, a), rl(i) && i.add(s))
    else if (Ee(l)) (e.addValue(s, kr(a, { owner: e })), rl(i) && i.remove(s))
    else if (l !== a)
      if (e.hasValue(s)) {
        const u = e.getValue(s)
        !u.hasAnimated && u.set(a)
      } else {
        const u = e.getStaticValue(s)
        e.addValue(s, kr(u !== void 0 ? u : a, { owner: e }))
      }
  }
  for (const s in n) t[s] === void 0 && e.removeValue(s)
  return t
}
const l0 = new WeakMap(),
  gv = Object.keys(Hs),
  jk = gv.length,
  u0 = [
    'AnimationStart',
    'AnimationComplete',
    'Update',
    'BeforeLayoutMeasure',
    'LayoutMeasure',
    'LayoutAnimationStart',
    'LayoutAnimationComplete',
  ],
  Hk = Gf.length
class Wk {
  constructor(
    { parent: t, props: n, presenceContext: i, reducedMotionConfig: s, visualState: a },
    l = {}
  ) {
    ;((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify('Update', this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
      }),
      (this.scheduleRender = () => Rt.render(this.render, !1, !0)))
    const { latestValues: u, renderState: f } = a
    ;((this.latestValues = u),
      (this.baseTarget = { ...u }),
      (this.initialValues = n.initial ? { ...u } : {}),
      (this.renderState = f),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = i),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = s),
      (this.options = l),
      (this.isControllingVariants = Sl(n)),
      (this.isVariantNode = ty(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current)))
    const { willChange: h, ...p } = this.scrapeMotionValuesFromProps(n, {})
    for (const m in p) {
      const y = p[m]
      u[m] !== void 0 && Ee(y) && (y.set(u[m], !1), rl(h) && h.add(m))
    }
  }
  scrapeMotionValuesFromProps(t, n) {
    return {}
  }
  mount(t) {
    ;((this.current = t),
      l0.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, i) => this.bindToMotionValue(i, n)),
      mv.current || Bk(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === 'never'
          ? !1
          : this.reducedMotionConfig === 'always'
            ? !0
            : Cf.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext))
  }
  unmount() {
    ;(l0.delete(this.current),
      this.projection && this.projection.unmount(),
      Tn(this.notifyUpdate),
      Tn(this.render),
      this.valueSubscriptions.forEach(t => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this))
    for (const t in this.events) this.events[t].clear()
    for (const t in this.features) this.features[t].unmount()
    this.current = null
  }
  bindToMotionValue(t, n) {
    const i = Wi.has(t),
      s = n.on('change', l => {
        ;((this.latestValues[t] = l),
          this.props.onUpdate && Rt.update(this.notifyUpdate, !1, !0),
          i && this.projection && (this.projection.isTransformDirty = !0))
      }),
      a = n.on('renderRequest', this.scheduleRender)
    this.valueSubscriptions.set(t, () => {
      ;(s(), a())
    })
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current)
  }
  loadFeatures({ children: t, ...n }, i, s, a) {
    let l, u
    for (let f = 0; f < jk; f++) {
      const h = gv[f],
        { isEnabled: p, Feature: m, ProjectionNode: y, MeasureLayout: x } = Hs[h]
      ;(y && (l = y),
        p(n) && (!this.features[h] && m && (this.features[h] = new m(this)), x && (u = x)))
    }
    if ((this.type === 'html' || this.type === 'svg') && !this.projection && l) {
      this.projection = new l(this.latestValues, this.parent && this.parent.projection)
      const {
        layoutId: f,
        layout: h,
        drag: p,
        dragConstraints: m,
        layoutScroll: y,
        layoutRoot: x,
      } = n
      this.projection.setOptions({
        layoutId: f,
        layout: h,
        alwaysMeasureLayout: !!p || (m && xr(m)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof h == 'string' ? h : 'both',
        initialPromotionConfig: a,
        layoutScroll: y,
        layoutRoot: x,
      })
    }
    return u
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t]
      n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0))
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props)
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Qt()
  }
  getStaticValue(t) {
    return this.latestValues[t]
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n
  }
  makeTargetAnimatable(t, n = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, n)
  }
  update(t, n) {
    ;((t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n))
    for (let i = 0; i < u0.length; i++) {
      const s = u0[i]
      this.propEventSubscriptions[s] &&
        (this.propEventSubscriptions[s](), delete this.propEventSubscriptions[s])
      const a = t['on' + s]
      a && (this.propEventSubscriptions[s] = this.on(s, a))
    }
    ;((this.prevMotionValues = Nk(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue())
  }
  getProps() {
    return this.props
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0
  }
  getDefaultTransition() {
    return this.props.transition
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0
    if (!this.isControllingVariants) {
      const i = this.parent ? this.parent.getVariantContext() || {} : {}
      return (this.props.initial !== void 0 && (i.initial = this.props.initial), i)
    }
    const n = {}
    for (let i = 0; i < Hk; i++) {
      const s = Gf[i],
        a = this.props[s]
      ;(js(a) || a === !1) && (n[s] = a)
    }
    return n
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode()
    if (n) return (n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t))
  }
  addValue(t, n) {
    ;(n !== this.values.get(t) && (this.removeValue(t), this.bindToMotionValue(t, n)),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()))
  }
  removeValue(t) {
    this.values.delete(t)
    const n = this.valueSubscriptions.get(t)
    ;(n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState))
  }
  hasValue(t) {
    return this.values.has(t)
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t]
    let i = this.values.get(t)
    return (i === void 0 && n !== void 0 && ((i = kr(n, { owner: this })), this.addValue(t, i)), i)
  }
  readValue(t) {
    var n
    return this.latestValues[t] !== void 0 || !this.current
      ? this.latestValues[t]
      : (n = this.getBaseTargetFromProps(this.props, t)) !== null && n !== void 0
        ? n
        : this.readValueFromInstance(this.current, t, this.options)
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n
  }
  getBaseTarget(t) {
    var n
    const { initial: i } = this.props,
      s =
        typeof i == 'string' || typeof i == 'object'
          ? (n = nh(this.props, i)) === null || n === void 0
            ? void 0
            : n[t]
          : void 0
    if (i && s !== void 0) return s
    const a = this.getBaseTargetFromProps(this.props, t)
    return a !== void 0 && !Ee(a)
      ? a
      : this.initialValues[t] !== void 0 && s === void 0
        ? void 0
        : this.baseTarget[t]
  }
  on(t, n) {
    return (this.events[t] || (this.events[t] = new hh()), this.events[t].add(n))
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n)
  }
}
class yv extends Wk {
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0
  }
  removeValueFromRenderState(t, { vars: n, style: i }) {
    ;(delete n[t], delete i[t])
  }
  makeTargetAnimatableFromInstance(
    { transition: t, transitionEnd: n, ...i },
    { transformValues: s },
    a
  ) {
    let l = o4(i, t || {}, this)
    if ((s && (n && (n = s(n)), i && (i = s(i)), l && (l = s(l))), a)) {
      r4(this, i, l)
      const u = zk(this, i, l, n)
      ;((n = u.transitionEnd), (i = u.target))
    }
    return { transition: t, transitionEnd: n, ...i }
  }
}
function Uk(e) {
  return window.getComputedStyle(e)
}
class $k extends yv {
  constructor() {
    ;(super(...arguments), (this.type = 'html'))
  }
  readValueFromInstance(t, n) {
    if (Wi.has(n)) {
      const i = ah(n)
      return (i && i.default) || 0
    } else {
      const i = Uk(t),
        s = (sy(n) ? i.getPropertyValue(n) : i[n]) || 0
      return typeof s == 'string' ? s.trim() : s
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return rv(t, n)
  }
  build(t, n, i, s) {
    Qf(t, n, i, s.transformTemplate)
  }
  scrapeMotionValuesFromProps(t, n) {
    return eh(t, n)
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription)
    const { children: t } = this.props
    Ee(t) &&
      (this.childSubscription = t.on('change', n => {
        this.current && (this.current.textContent = `${n}`)
      }))
  }
  renderInstance(t, n, i, s) {
    fy(t, n, i, s)
  }
}
class Yk extends yv {
  constructor() {
    ;(super(...arguments), (this.type = 'svg'), (this.isSVGTag = !1))
  }
  getBaseTargetFromProps(t, n) {
    return t[n]
  }
  readValueFromInstance(t, n) {
    if (Wi.has(n)) {
      const i = ah(n)
      return (i && i.default) || 0
    }
    return ((n = hy.has(n) ? n : Xf(n)), t.getAttribute(n))
  }
  measureInstanceViewportBox() {
    return Qt()
  }
  scrapeMotionValuesFromProps(t, n) {
    return py(t, n)
  }
  build(t, n, i, s) {
    Jf(t, n, i, this.isSVGTag, s.transformTemplate)
  }
  renderInstance(t, n, i, s) {
    dy(t, n, i, s)
  }
  mount(t) {
    ;((this.isSVGTag = th(t.tagName)), super.mount(t))
  }
}
const Xk = (e, t) =>
    qf(e)
      ? new Yk(t, { enableHardwareAcceleration: !1 })
      : new $k(t, { enableHardwareAcceleration: !0 }),
  Kk = { layout: { ProjectionNode: dv, MeasureLayout: ov } },
  Gk = { ...w4, ...jS, ...Ck, ...Kk },
  w5 = Gw((e, t) => TS(e, t, Gk, Xk))
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qk = e => e.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  Qk = e =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (t, n, i) => (i ? i.toUpperCase() : n.toLowerCase())),
  c0 = e => {
    const t = Qk(e)
    return t.charAt(0).toUpperCase() + t.slice(1)
  },
  vv = (...e) =>
    e
      .filter((t, n, i) => !!t && t.trim() !== '' && i.indexOf(t) === n)
      .join(' ')
      .trim(),
  Zk = e => {
    for (const t in e) if (t.startsWith('aria-') || t === 'role' || t === 'title') return !0
  }
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Jk = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tP = U.forwardRef(
  (
    {
      color: e = 'currentColor',
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: i,
      className: s = '',
      children: a,
      iconNode: l,
      ...u
    },
    f
  ) =>
    U.createElement(
      'svg',
      {
        ref: f,
        ...Jk,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: i ? (Number(n) * 24) / Number(t) : n,
        className: vv('lucide', s),
        ...(!a && !Zk(u) && { 'aria-hidden': 'true' }),
        ...u,
      },
      [...l.map(([h, p]) => U.createElement(h, p)), ...(Array.isArray(a) ? a : [a])]
    )
)
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _e = (e, t) => {
  const n = U.forwardRef(({ className: i, ...s }, a) =>
    U.createElement(tP, {
      ref: a,
      iconNode: t,
      className: vv(`lucide-${qk(c0(e))}`, `lucide-${e}`, i),
      ...s,
    })
  )
  return ((n.displayName = c0(e)), n)
}
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eP = [
    [
      'path',
      {
        d: 'M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2',
        key: '169zse',
      },
    ],
  ],
  S5 = _e('activity', eP)
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nP = [
    ['path', { d: 'M10.268 21a2 2 0 0 0 3.464 0', key: 'vwvbt9' }],
    [
      'path',
      {
        d: 'M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326',
        key: '11g9vi',
      },
    ],
  ],
  b5 = _e('bell', nP)
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const iP = [['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }]],
  k5 = _e('check', iP)
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rP = [
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
    ['line', { x1: '12', x2: '12', y1: '8', y2: '12', key: '1pkeuh' }],
    ['line', { x1: '12', x2: '12.01', y1: '16', y2: '16', key: '4dfq90' }],
  ],
  P5 = _e('circle-alert', rP)
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sP = [
    ['path', { d: 'M21.801 10A10 10 0 1 1 17 3.335', key: 'yps3ct' }],
    ['path', { d: 'm9 11 3 3L22 4', key: '1pflzl' }],
  ],
  C5 = _e('circle-check-big', sP)
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const oP = [
    ['path', { d: 'M12 20v2', key: '1lh1kg' }],
    ['path', { d: 'M12 2v2', key: 'tus03m' }],
    ['path', { d: 'M17 20v2', key: '1rnc9c' }],
    ['path', { d: 'M17 2v2', key: '11trls' }],
    ['path', { d: 'M2 12h2', key: '1t8f8n' }],
    ['path', { d: 'M2 17h2', key: '7oei6x' }],
    ['path', { d: 'M2 7h2', key: 'asdhe0' }],
    ['path', { d: 'M20 12h2', key: '1q8mjw' }],
    ['path', { d: 'M20 17h2', key: '1fpfkl' }],
    ['path', { d: 'M20 7h2', key: '1o8tra' }],
    ['path', { d: 'M7 20v2', key: '4gnj0m' }],
    ['path', { d: 'M7 2v2', key: '1i4yhu' }],
    ['rect', { x: '4', y: '4', width: '16', height: '16', rx: '2', key: '1vbyd7' }],
    ['rect', { x: '8', y: '8', width: '8', height: '8', rx: '1', key: 'z9xiuo' }],
  ],
  M5 = _e('cpu', oP)
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const aP = [
    ['path', { d: 'm12 14 4-4', key: '9kzdfg' }],
    ['path', { d: 'M3.34 19a10 10 0 1 1 17.32 0', key: '19p75a' }],
  ],
  T5 = _e('gauge', aP)
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lP = [
    ['line', { x1: '22', x2: '2', y1: '12', y2: '12', key: '1y58io' }],
    [
      'path',
      {
        d: 'M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z',
        key: 'oot6mr',
      },
    ],
    ['line', { x1: '6', x2: '6.01', y1: '16', y2: '16', key: 'sgf278' }],
    ['line', { x1: '10', x2: '10.01', y1: '16', y2: '16', key: '1l4acy' }],
  ],
  E5 = _e('hard-drive', lP)
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uP = [
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
    ['path', { d: 'M12 16v-4', key: '1dtifu' }],
    ['path', { d: 'M12 8h.01', key: 'e9boi3' }],
  ],
  O5 = _e('info', uP)
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cP = [
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
    ['path', { d: 'm4.93 4.93 4.24 4.24', key: '1ymg45' }],
    ['path', { d: 'm14.83 9.17 4.24-4.24', key: '1cb5xl' }],
    ['path', { d: 'm14.83 14.83 4.24 4.24', key: 'q42g0n' }],
    ['path', { d: 'm9.17 14.83-4.24 4.24', key: 'bqpfvv' }],
    ['circle', { cx: '12', cy: '12', r: '4', key: '4exip2' }],
  ],
  L5 = _e('life-buoy', cP)
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fP = [
    ['path', { d: 'm22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7', key: '132q7q' }],
    ['rect', { x: '2', y: '4', width: '20', height: '16', rx: '2', key: 'izxlao' }],
  ],
  D5 = _e('mail', fP)
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hP = [['path', { d: 'M7.9 20A9 9 0 1 0 4 16.1L2 22Z', key: 'vv11sd' }]],
  A5 = _e('message-circle', hP)
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dP = [
    [
      'path',
      {
        d: 'M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z',
        key: 'oel41y',
      },
    ],
    ['path', { d: 'm9 12 2 2 4-4', key: 'dzmm74' }],
  ],
  R5 = _e('shield-check', dP)
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pP = [
    ['path', { d: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2', key: '975kel' }],
    ['circle', { cx: '12', cy: '7', r: '4', key: '17ys0d' }],
  ],
  F5 = _e('user', pP)
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mP = [
    ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
    ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
  ],
  I5 = _e('x', mP)
function xv(e) {
  var t,
    n,
    i = ''
  if (typeof e == 'string' || typeof e == 'number') i += e
  else if (typeof e == 'object')
    if (Array.isArray(e)) {
      var s = e.length
      for (t = 0; t < s; t++) e[t] && (n = xv(e[t])) && (i && (i += ' '), (i += n))
    } else for (n in e) e[n] && (i && (i += ' '), (i += n))
  return i
}
function V5() {
  for (var e, t, n = 0, i = '', s = arguments.length; n < s; n++)
    (e = arguments[n]) && (t = xv(e)) && (i && (i += ' '), (i += t))
  return i
}
/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */ function no(e) {
  return (e + 0.5) | 0
}
const ti = (e, t, n) => Math.max(Math.min(e, n), t)
function Ms(e) {
  return ti(no(e * 2.55), 0, 255)
}
function oi(e) {
  return ti(no(e * 255), 0, 255)
}
function wn(e) {
  return ti(no(e / 2.55) / 100, 0, 1)
}
function f0(e) {
  return ti(no(e * 100), 0, 100)
}
const We = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  },
  Mf = [...'0123456789ABCDEF'],
  gP = e => Mf[e & 15],
  yP = e => Mf[(e & 240) >> 4] + Mf[e & 15],
  Aa = e => (e & 240) >> 4 === (e & 15),
  vP = e => Aa(e.r) && Aa(e.g) && Aa(e.b) && Aa(e.a)
function xP(e) {
  var t = e.length,
    n
  return (
    e[0] === '#' &&
      (t === 4 || t === 5
        ? (n = {
            r: 255 & (We[e[1]] * 17),
            g: 255 & (We[e[2]] * 17),
            b: 255 & (We[e[3]] * 17),
            a: t === 5 ? We[e[4]] * 17 : 255,
          })
        : (t === 7 || t === 9) &&
          (n = {
            r: (We[e[1]] << 4) | We[e[2]],
            g: (We[e[3]] << 4) | We[e[4]],
            b: (We[e[5]] << 4) | We[e[6]],
            a: t === 9 ? (We[e[7]] << 4) | We[e[8]] : 255,
          })),
    n
  )
}
const _P = (e, t) => (e < 255 ? t(e) : '')
function wP(e) {
  var t = vP(e) ? gP : yP
  return e ? '#' + t(e.r) + t(e.g) + t(e.b) + _P(e.a, t) : void 0
}
const SP =
  /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/
function _v(e, t, n) {
  const i = t * Math.min(n, 1 - n),
    s = (a, l = (a + e / 30) % 12) => n - i * Math.max(Math.min(l - 3, 9 - l, 1), -1)
  return [s(0), s(8), s(4)]
}
function bP(e, t, n) {
  const i = (s, a = (s + e / 60) % 6) => n - n * t * Math.max(Math.min(a, 4 - a, 1), 0)
  return [i(5), i(3), i(1)]
}
function kP(e, t, n) {
  const i = _v(e, 1, 0.5)
  let s
  for (t + n > 1 && ((s = 1 / (t + n)), (t *= s), (n *= s)), s = 0; s < 3; s++)
    ((i[s] *= 1 - t - n), (i[s] += t))
  return i
}
function PP(e, t, n, i, s) {
  return e === s ? (t - n) / i + (t < n ? 6 : 0) : t === s ? (n - e) / i + 2 : (e - t) / i + 4
}
function dh(e) {
  const n = e.r / 255,
    i = e.g / 255,
    s = e.b / 255,
    a = Math.max(n, i, s),
    l = Math.min(n, i, s),
    u = (a + l) / 2
  let f, h, p
  return (
    a !== l &&
      ((p = a - l),
      (h = u > 0.5 ? p / (2 - a - l) : p / (a + l)),
      (f = PP(n, i, s, p, a)),
      (f = f * 60 + 0.5)),
    [f | 0, h || 0, u]
  )
}
function ph(e, t, n, i) {
  return (Array.isArray(t) ? e(t[0], t[1], t[2]) : e(t, n, i)).map(oi)
}
function mh(e, t, n) {
  return ph(_v, e, t, n)
}
function CP(e, t, n) {
  return ph(kP, e, t, n)
}
function MP(e, t, n) {
  return ph(bP, e, t, n)
}
function wv(e) {
  return ((e % 360) + 360) % 360
}
function TP(e) {
  const t = SP.exec(e)
  let n = 255,
    i
  if (!t) return
  t[5] !== i && (n = t[6] ? Ms(+t[5]) : oi(+t[5]))
  const s = wv(+t[2]),
    a = +t[3] / 100,
    l = +t[4] / 100
  return (
    t[1] === 'hwb' ? (i = CP(s, a, l)) : t[1] === 'hsv' ? (i = MP(s, a, l)) : (i = mh(s, a, l)),
    { r: i[0], g: i[1], b: i[2], a: n }
  )
}
function EP(e, t) {
  var n = dh(e)
  ;((n[0] = wv(n[0] + t)), (n = mh(n)), (e.r = n[0]), (e.g = n[1]), (e.b = n[2]))
}
function OP(e) {
  if (!e) return
  const t = dh(e),
    n = t[0],
    i = f0(t[1]),
    s = f0(t[2])
  return e.a < 255 ? `hsla(${n}, ${i}%, ${s}%, ${wn(e.a)})` : `hsl(${n}, ${i}%, ${s}%)`
}
const h0 = {
    x: 'dark',
    Z: 'light',
    Y: 're',
    X: 'blu',
    W: 'gr',
    V: 'medium',
    U: 'slate',
    A: 'ee',
    T: 'ol',
    S: 'or',
    B: 'ra',
    C: 'lateg',
    D: 'ights',
    R: 'in',
    Q: 'turquois',
    E: 'hi',
    P: 'ro',
    O: 'al',
    N: 'le',
    M: 'de',
    L: 'yello',
    F: 'en',
    K: 'ch',
    G: 'arks',
    H: 'ea',
    I: 'ightg',
    J: 'wh',
  },
  d0 = {
    OiceXe: 'f0f8ff',
    antiquewEte: 'faebd7',
    aqua: 'ffff',
    aquamarRe: '7fffd4',
    azuY: 'f0ffff',
    beige: 'f5f5dc',
    bisque: 'ffe4c4',
    black: '0',
    blanKedOmond: 'ffebcd',
    Xe: 'ff',
    XeviTet: '8a2be2',
    bPwn: 'a52a2a',
    burlywood: 'deb887',
    caMtXe: '5f9ea0',
    KartYuse: '7fff00',
    KocTate: 'd2691e',
    cSO: 'ff7f50',
    cSnflowerXe: '6495ed',
    cSnsilk: 'fff8dc',
    crimson: 'dc143c',
    cyan: 'ffff',
    xXe: '8b',
    xcyan: '8b8b',
    xgTMnPd: 'b8860b',
    xWay: 'a9a9a9',
    xgYF: '6400',
    xgYy: 'a9a9a9',
    xkhaki: 'bdb76b',
    xmagFta: '8b008b',
    xTivegYF: '556b2f',
    xSange: 'ff8c00',
    xScEd: '9932cc',
    xYd: '8b0000',
    xsOmon: 'e9967a',
    xsHgYF: '8fbc8f',
    xUXe: '483d8b',
    xUWay: '2f4f4f',
    xUgYy: '2f4f4f',
    xQe: 'ced1',
    xviTet: '9400d3',
    dAppRk: 'ff1493',
    dApskyXe: 'bfff',
    dimWay: '696969',
    dimgYy: '696969',
    dodgerXe: '1e90ff',
    fiYbrick: 'b22222',
    flSOwEte: 'fffaf0',
    foYstWAn: '228b22',
    fuKsia: 'ff00ff',
    gaRsbSo: 'dcdcdc',
    ghostwEte: 'f8f8ff',
    gTd: 'ffd700',
    gTMnPd: 'daa520',
    Way: '808080',
    gYF: '8000',
    gYFLw: 'adff2f',
    gYy: '808080',
    honeyMw: 'f0fff0',
    hotpRk: 'ff69b4',
    RdianYd: 'cd5c5c',
    Rdigo: '4b0082',
    ivSy: 'fffff0',
    khaki: 'f0e68c',
    lavFMr: 'e6e6fa',
    lavFMrXsh: 'fff0f5',
    lawngYF: '7cfc00',
    NmoncEffon: 'fffacd',
    ZXe: 'add8e6',
    ZcSO: 'f08080',
    Zcyan: 'e0ffff',
    ZgTMnPdLw: 'fafad2',
    ZWay: 'd3d3d3',
    ZgYF: '90ee90',
    ZgYy: 'd3d3d3',
    ZpRk: 'ffb6c1',
    ZsOmon: 'ffa07a',
    ZsHgYF: '20b2aa',
    ZskyXe: '87cefa',
    ZUWay: '778899',
    ZUgYy: '778899',
    ZstAlXe: 'b0c4de',
    ZLw: 'ffffe0',
    lime: 'ff00',
    limegYF: '32cd32',
    lRF: 'faf0e6',
    magFta: 'ff00ff',
    maPon: '800000',
    VaquamarRe: '66cdaa',
    VXe: 'cd',
    VScEd: 'ba55d3',
    VpurpN: '9370db',
    VsHgYF: '3cb371',
    VUXe: '7b68ee',
    VsprRggYF: 'fa9a',
    VQe: '48d1cc',
    VviTetYd: 'c71585',
    midnightXe: '191970',
    mRtcYam: 'f5fffa',
    mistyPse: 'ffe4e1',
    moccasR: 'ffe4b5',
    navajowEte: 'ffdead',
    navy: '80',
    Tdlace: 'fdf5e6',
    Tive: '808000',
    TivedBb: '6b8e23',
    Sange: 'ffa500',
    SangeYd: 'ff4500',
    ScEd: 'da70d6',
    pOegTMnPd: 'eee8aa',
    pOegYF: '98fb98',
    pOeQe: 'afeeee',
    pOeviTetYd: 'db7093',
    papayawEp: 'ffefd5',
    pHKpuff: 'ffdab9',
    peru: 'cd853f',
    pRk: 'ffc0cb',
    plum: 'dda0dd',
    powMrXe: 'b0e0e6',
    purpN: '800080',
    YbeccapurpN: '663399',
    Yd: 'ff0000',
    Psybrown: 'bc8f8f',
    PyOXe: '4169e1',
    saddNbPwn: '8b4513',
    sOmon: 'fa8072',
    sandybPwn: 'f4a460',
    sHgYF: '2e8b57',
    sHshell: 'fff5ee',
    siFna: 'a0522d',
    silver: 'c0c0c0',
    skyXe: '87ceeb',
    UXe: '6a5acd',
    UWay: '708090',
    UgYy: '708090',
    snow: 'fffafa',
    sprRggYF: 'ff7f',
    stAlXe: '4682b4',
    tan: 'd2b48c',
    teO: '8080',
    tEstN: 'd8bfd8',
    tomato: 'ff6347',
    Qe: '40e0d0',
    viTet: 'ee82ee',
    JHt: 'f5deb3',
    wEte: 'ffffff',
    wEtesmoke: 'f5f5f5',
    Lw: 'ffff00',
    LwgYF: '9acd32',
  }
function LP() {
  const e = {},
    t = Object.keys(d0),
    n = Object.keys(h0)
  let i, s, a, l, u
  for (i = 0; i < t.length; i++) {
    for (l = u = t[i], s = 0; s < n.length; s++) ((a = n[s]), (u = u.replace(a, h0[a])))
    ;((a = parseInt(d0[l], 16)), (e[u] = [(a >> 16) & 255, (a >> 8) & 255, a & 255]))
  }
  return e
}
let Ra
function DP(e) {
  Ra || ((Ra = LP()), (Ra.transparent = [0, 0, 0, 0]))
  const t = Ra[e.toLowerCase()]
  return t && { r: t[0], g: t[1], b: t[2], a: t.length === 4 ? t[3] : 255 }
}
const AP =
  /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/
function RP(e) {
  const t = AP.exec(e)
  let n = 255,
    i,
    s,
    a
  if (t) {
    if (t[7] !== i) {
      const l = +t[7]
      n = t[8] ? Ms(l) : ti(l * 255, 0, 255)
    }
    return (
      (i = +t[1]),
      (s = +t[3]),
      (a = +t[5]),
      (i = 255 & (t[2] ? Ms(i) : ti(i, 0, 255))),
      (s = 255 & (t[4] ? Ms(s) : ti(s, 0, 255))),
      (a = 255 & (t[6] ? Ms(a) : ti(a, 0, 255))),
      { r: i, g: s, b: a, a: n }
    )
  }
}
function FP(e) {
  return (
    e && (e.a < 255 ? `rgba(${e.r}, ${e.g}, ${e.b}, ${wn(e.a)})` : `rgb(${e.r}, ${e.g}, ${e.b})`)
  )
}
const qc = e => (e <= 0.0031308 ? e * 12.92 : Math.pow(e, 1 / 2.4) * 1.055 - 0.055),
  yr = e => (e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4))
function IP(e, t, n) {
  const i = yr(wn(e.r)),
    s = yr(wn(e.g)),
    a = yr(wn(e.b))
  return {
    r: oi(qc(i + n * (yr(wn(t.r)) - i))),
    g: oi(qc(s + n * (yr(wn(t.g)) - s))),
    b: oi(qc(a + n * (yr(wn(t.b)) - a))),
    a: e.a + n * (t.a - e.a),
  }
}
function Fa(e, t, n) {
  if (e) {
    let i = dh(e)
    ;((i[t] = Math.max(0, Math.min(i[t] + i[t] * n, t === 0 ? 360 : 1))),
      (i = mh(i)),
      (e.r = i[0]),
      (e.g = i[1]),
      (e.b = i[2]))
  }
}
function Sv(e, t) {
  return e && Object.assign(t || {}, e)
}
function p0(e) {
  var t = { r: 0, g: 0, b: 0, a: 255 }
  return (
    Array.isArray(e)
      ? e.length >= 3 &&
        ((t = { r: e[0], g: e[1], b: e[2], a: 255 }), e.length > 3 && (t.a = oi(e[3])))
      : ((t = Sv(e, { r: 0, g: 0, b: 0, a: 1 })), (t.a = oi(t.a))),
    t
  )
}
function VP(e) {
  return e.charAt(0) === 'r' ? RP(e) : TP(e)
}
class Us {
  constructor(t) {
    if (t instanceof Us) return t
    const n = typeof t
    let i
    ;(n === 'object' ? (i = p0(t)) : n === 'string' && (i = xP(t) || DP(t) || VP(t)),
      (this._rgb = i),
      (this._valid = !!i))
  }
  get valid() {
    return this._valid
  }
  get rgb() {
    var t = Sv(this._rgb)
    return (t && (t.a = wn(t.a)), t)
  }
  set rgb(t) {
    this._rgb = p0(t)
  }
  rgbString() {
    return this._valid ? FP(this._rgb) : void 0
  }
  hexString() {
    return this._valid ? wP(this._rgb) : void 0
  }
  hslString() {
    return this._valid ? OP(this._rgb) : void 0
  }
  mix(t, n) {
    if (t) {
      const i = this.rgb,
        s = t.rgb
      let a
      const l = n === a ? 0.5 : n,
        u = 2 * l - 1,
        f = i.a - s.a,
        h = ((u * f === -1 ? u : (u + f) / (1 + u * f)) + 1) / 2
      ;((a = 1 - h),
        (i.r = 255 & (h * i.r + a * s.r + 0.5)),
        (i.g = 255 & (h * i.g + a * s.g + 0.5)),
        (i.b = 255 & (h * i.b + a * s.b + 0.5)),
        (i.a = l * i.a + (1 - l) * s.a),
        (this.rgb = i))
    }
    return this
  }
  interpolate(t, n) {
    return (t && (this._rgb = IP(this._rgb, t._rgb, n)), this)
  }
  clone() {
    return new Us(this.rgb)
  }
  alpha(t) {
    return ((this._rgb.a = oi(t)), this)
  }
  clearer(t) {
    const n = this._rgb
    return ((n.a *= 1 - t), this)
  }
  greyscale() {
    const t = this._rgb,
      n = no(t.r * 0.3 + t.g * 0.59 + t.b * 0.11)
    return ((t.r = t.g = t.b = n), this)
  }
  opaquer(t) {
    const n = this._rgb
    return ((n.a *= 1 + t), this)
  }
  negate() {
    const t = this._rgb
    return ((t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this)
  }
  lighten(t) {
    return (Fa(this._rgb, 2, t), this)
  }
  darken(t) {
    return (Fa(this._rgb, 2, -t), this)
  }
  saturate(t) {
    return (Fa(this._rgb, 1, t), this)
  }
  desaturate(t) {
    return (Fa(this._rgb, 1, -t), this)
  }
  rotate(t) {
    return (EP(this._rgb, t), this)
  }
}
/*!
 * Chart.js v4.5.0
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */ function vn() {}
const zP = (() => {
  let e = 0
  return () => e++
})()
function wt(e) {
  return e == null
}
function zt(e) {
  if (Array.isArray && Array.isArray(e)) return !0
  const t = Object.prototype.toString.call(e)
  return t.slice(0, 7) === '[object' && t.slice(-6) === 'Array]'
}
function St(e) {
  return e !== null && Object.prototype.toString.call(e) === '[object Object]'
}
function Ut(e) {
  return (typeof e == 'number' || e instanceof Number) && isFinite(+e)
}
function Re(e, t) {
  return Ut(e) ? e : t
}
function yt(e, t) {
  return typeof e > 'u' ? t : e
}
const BP = (e, t) => (typeof e == 'string' && e.endsWith('%') ? parseFloat(e) / 100 : +e / t),
  bv = (e, t) => (typeof e == 'string' && e.endsWith('%') ? (parseFloat(e) / 100) * t : +e)
function Lt(e, t, n) {
  if (e && typeof e.call == 'function') return e.apply(n, t)
}
function Mt(e, t, n, i) {
  let s, a, l
  if (zt(e)) for (a = e.length, s = 0; s < a; s++) t.call(n, e[s], s)
  else if (St(e)) for (l = Object.keys(e), a = l.length, s = 0; s < a; s++) t.call(n, e[l[s]], l[s])
}
function ol(e, t) {
  let n, i, s, a
  if (!e || !t || e.length !== t.length) return !1
  for (n = 0, i = e.length; n < i; ++n)
    if (((s = e[n]), (a = t[n]), s.datasetIndex !== a.datasetIndex || s.index !== a.index))
      return !1
  return !0
}
function al(e) {
  if (zt(e)) return e.map(al)
  if (St(e)) {
    const t = Object.create(null),
      n = Object.keys(e),
      i = n.length
    let s = 0
    for (; s < i; ++s) t[n[s]] = al(e[n[s]])
    return t
  }
  return e
}
function kv(e) {
  return ['__proto__', 'prototype', 'constructor'].indexOf(e) === -1
}
function NP(e, t, n, i) {
  if (!kv(e)) return
  const s = t[e],
    a = n[e]
  St(s) && St(a) ? $s(s, a, i) : (t[e] = al(a))
}
function $s(e, t, n) {
  const i = zt(t) ? t : [t],
    s = i.length
  if (!St(e)) return e
  n = n || {}
  const a = n.merger || NP
  let l
  for (let u = 0; u < s; ++u) {
    if (((l = i[u]), !St(l))) continue
    const f = Object.keys(l)
    for (let h = 0, p = f.length; h < p; ++h) a(f[h], e, l, n)
  }
  return e
}
function Fs(e, t) {
  return $s(e, t, { merger: jP })
}
function jP(e, t, n) {
  if (!kv(e)) return
  const i = t[e],
    s = n[e]
  St(i) && St(s) ? Fs(i, s) : Object.prototype.hasOwnProperty.call(t, e) || (t[e] = al(s))
}
const m0 = { '': e => e, x: e => e.x, y: e => e.y }
function HP(e) {
  const t = e.split('.'),
    n = []
  let i = ''
  for (const s of t)
    ((i += s), i.endsWith('\\') ? (i = i.slice(0, -1) + '.') : (n.push(i), (i = '')))
  return n
}
function WP(e) {
  const t = HP(e)
  return n => {
    for (const i of t) {
      if (i === '') break
      n = n && n[i]
    }
    return n
  }
}
function ui(e, t) {
  return (m0[t] || (m0[t] = WP(t)))(e)
}
function gh(e) {
  return e.charAt(0).toUpperCase() + e.slice(1)
}
const Ys = e => typeof e < 'u',
  ci = e => typeof e == 'function',
  g0 = (e, t) => {
    if (e.size !== t.size) return !1
    for (const n of e) if (!t.has(n)) return !1
    return !0
  }
function UP(e) {
  return e.type === 'mouseup' || e.type === 'click' || e.type === 'contextmenu'
}
const Pt = Math.PI,
  Ft = 2 * Pt,
  $P = Ft + Pt,
  ll = Number.POSITIVE_INFINITY,
  YP = Pt / 180,
  Kt = Pt / 2,
  Ei = Pt / 4,
  y0 = (Pt * 2) / 3,
  ei = Math.log10,
  un = Math.sign
function Is(e, t, n) {
  return Math.abs(e - t) < n
}
function v0(e) {
  const t = Math.round(e)
  e = Is(e, t, e / 1e3) ? t : e
  const n = Math.pow(10, Math.floor(ei(e))),
    i = e / n
  return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * n
}
function XP(e) {
  const t = [],
    n = Math.sqrt(e)
  let i
  for (i = 1; i < n; i++) e % i === 0 && (t.push(i), t.push(e / i))
  return (n === (n | 0) && t.push(n), t.sort((s, a) => s - a).pop(), t)
}
function KP(e) {
  return (
    typeof e == 'symbol' ||
    (typeof e == 'object' &&
      e !== null &&
      !(Symbol.toPrimitive in e || 'toString' in e || 'valueOf' in e))
  )
}
function Cr(e) {
  return !KP(e) && !isNaN(parseFloat(e)) && isFinite(e)
}
function GP(e, t) {
  const n = Math.round(e)
  return n - t <= e && n + t >= e
}
function Pv(e, t, n) {
  let i, s, a
  for (i = 0, s = e.length; i < s; i++)
    ((a = e[i][n]), isNaN(a) || ((t.min = Math.min(t.min, a)), (t.max = Math.max(t.max, a))))
}
function Ze(e) {
  return e * (Pt / 180)
}
function yh(e) {
  return e * (180 / Pt)
}
function x0(e) {
  if (!Ut(e)) return
  let t = 1,
    n = 0
  for (; Math.round(e * t) / t !== e; ) ((t *= 10), n++)
  return n
}
function Cv(e, t) {
  const n = t.x - e.x,
    i = t.y - e.y,
    s = Math.sqrt(n * n + i * i)
  let a = Math.atan2(i, n)
  return (a < -0.5 * Pt && (a += Ft), { angle: a, distance: s })
}
function Tf(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
}
function qP(e, t) {
  return ((e - t + $P) % Ft) - Pt
}
function pe(e) {
  return ((e % Ft) + Ft) % Ft
}
function Xs(e, t, n, i) {
  const s = pe(e),
    a = pe(t),
    l = pe(n),
    u = pe(a - s),
    f = pe(l - s),
    h = pe(s - a),
    p = pe(s - l)
  return s === a || s === l || (i && a === l) || (u > f && h < p)
}
function se(e, t, n) {
  return Math.max(t, Math.min(n, e))
}
function QP(e) {
  return se(e, -32768, 32767)
}
function bn(e, t, n, i = 1e-6) {
  return e >= Math.min(t, n) - i && e <= Math.max(t, n) + i
}
function vh(e, t, n) {
  n = n || (l => e[l] < t)
  let i = e.length - 1,
    s = 0,
    a
  for (; i - s > 1; ) ((a = (s + i) >> 1), n(a) ? (s = a) : (i = a))
  return { lo: s, hi: i }
}
const kn = (e, t, n, i) =>
    vh(
      e,
      n,
      i
        ? s => {
            const a = e[s][t]
            return a < n || (a === n && e[s + 1][t] === n)
          }
        : s => e[s][t] < n
    ),
  ZP = (e, t, n) => vh(e, n, i => e[i][t] >= n)
function JP(e, t, n) {
  let i = 0,
    s = e.length
  for (; i < s && e[i] < t; ) i++
  for (; s > i && e[s - 1] > n; ) s--
  return i > 0 || s < e.length ? e.slice(i, s) : e
}
const Mv = ['push', 'pop', 'shift', 'splice', 'unshift']
function t6(e, t) {
  if (e._chartjs) {
    e._chartjs.listeners.push(t)
    return
  }
  ;(Object.defineProperty(e, '_chartjs', {
    configurable: !0,
    enumerable: !1,
    value: { listeners: [t] },
  }),
    Mv.forEach(n => {
      const i = '_onData' + gh(n),
        s = e[n]
      Object.defineProperty(e, n, {
        configurable: !0,
        enumerable: !1,
        value(...a) {
          const l = s.apply(this, a)
          return (
            e._chartjs.listeners.forEach(u => {
              typeof u[i] == 'function' && u[i](...a)
            }),
            l
          )
        },
      })
    }))
}
function _0(e, t) {
  const n = e._chartjs
  if (!n) return
  const i = n.listeners,
    s = i.indexOf(t)
  ;(s !== -1 && i.splice(s, 1),
    !(i.length > 0) &&
      (Mv.forEach(a => {
        delete e[a]
      }),
      delete e._chartjs))
}
function Tv(e) {
  const t = new Set(e)
  return t.size === e.length ? e : Array.from(t)
}
const Ev = (function () {
  return typeof window > 'u'
    ? function (e) {
        return e()
      }
    : window.requestAnimationFrame
})()
function Ov(e, t) {
  let n = [],
    i = !1
  return function (...s) {
    ;((n = s),
      i ||
        ((i = !0),
        Ev.call(window, () => {
          ;((i = !1), e.apply(t, n))
        })))
  }
}
function e6(e, t) {
  let n
  return function (...i) {
    return (t ? (clearTimeout(n), (n = setTimeout(e, t, i))) : e.apply(this, i), t)
  }
}
const xh = e => (e === 'start' ? 'left' : e === 'end' ? 'right' : 'center'),
  de = (e, t, n) => (e === 'start' ? t : e === 'end' ? n : (t + n) / 2),
  n6 = (e, t, n, i) => (e === (i ? 'left' : 'right') ? n : e === 'center' ? (t + n) / 2 : t)
function Lv(e, t, n) {
  const i = t.length
  let s = 0,
    a = i
  if (e._sorted) {
    const { iScale: l, vScale: u, _parsed: f } = e,
      h = e.dataset && e.dataset.options ? e.dataset.options.spanGaps : null,
      p = l.axis,
      { min: m, max: y, minDefined: x, maxDefined: _ } = l.getUserBounds()
    if (x) {
      if (((s = Math.min(kn(f, p, m).lo, n ? i : kn(t, p, l.getPixelForValue(m)).lo)), h)) {
        const w = f
          .slice(0, s + 1)
          .reverse()
          .findIndex(S => !wt(S[u.axis]))
        s -= Math.max(0, w)
      }
      s = se(s, 0, i - 1)
    }
    if (_) {
      let w = Math.max(
        kn(f, l.axis, y, !0).hi + 1,
        n ? 0 : kn(t, p, l.getPixelForValue(y), !0).hi + 1
      )
      if (h) {
        const S = f.slice(w - 1).findIndex(k => !wt(k[u.axis]))
        w += Math.max(0, S)
      }
      a = se(w, s, i) - s
    } else a = i - s
  }
  return { start: s, count: a }
}
function Dv(e) {
  const { xScale: t, yScale: n, _scaleRanges: i } = e,
    s = { xmin: t.min, xmax: t.max, ymin: n.min, ymax: n.max }
  if (!i) return ((e._scaleRanges = s), !0)
  const a = i.xmin !== t.min || i.xmax !== t.max || i.ymin !== n.min || i.ymax !== n.max
  return (Object.assign(i, s), a)
}
const Ia = e => e === 0 || e === 1,
  w0 = (e, t, n) => -(Math.pow(2, 10 * (e -= 1)) * Math.sin(((e - t) * Ft) / n)),
  S0 = (e, t, n) => Math.pow(2, -10 * e) * Math.sin(((e - t) * Ft) / n) + 1,
  Vs = {
    linear: e => e,
    easeInQuad: e => e * e,
    easeOutQuad: e => -e * (e - 2),
    easeInOutQuad: e => ((e /= 0.5) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1)),
    easeInCubic: e => e * e * e,
    easeOutCubic: e => (e -= 1) * e * e + 1,
    easeInOutCubic: e => ((e /= 0.5) < 1 ? 0.5 * e * e * e : 0.5 * ((e -= 2) * e * e + 2)),
    easeInQuart: e => e * e * e * e,
    easeOutQuart: e => -((e -= 1) * e * e * e - 1),
    easeInOutQuart: e => ((e /= 0.5) < 1 ? 0.5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2)),
    easeInQuint: e => e * e * e * e * e,
    easeOutQuint: e => (e -= 1) * e * e * e * e + 1,
    easeInOutQuint: e =>
      (e /= 0.5) < 1 ? 0.5 * e * e * e * e * e : 0.5 * ((e -= 2) * e * e * e * e + 2),
    easeInSine: e => -Math.cos(e * Kt) + 1,
    easeOutSine: e => Math.sin(e * Kt),
    easeInOutSine: e => -0.5 * (Math.cos(Pt * e) - 1),
    easeInExpo: e => (e === 0 ? 0 : Math.pow(2, 10 * (e - 1))),
    easeOutExpo: e => (e === 1 ? 1 : -Math.pow(2, -10 * e) + 1),
    easeInOutExpo: e =>
      Ia(e)
        ? e
        : e < 0.5
          ? 0.5 * Math.pow(2, 10 * (e * 2 - 1))
          : 0.5 * (-Math.pow(2, -10 * (e * 2 - 1)) + 2),
    easeInCirc: e => (e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1)),
    easeOutCirc: e => Math.sqrt(1 - (e -= 1) * e),
    easeInOutCirc: e =>
      (e /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1),
    easeInElastic: e => (Ia(e) ? e : w0(e, 0.075, 0.3)),
    easeOutElastic: e => (Ia(e) ? e : S0(e, 0.075, 0.3)),
    easeInOutElastic(e) {
      return Ia(e)
        ? e
        : e < 0.5
          ? 0.5 * w0(e * 2, 0.1125, 0.45)
          : 0.5 + 0.5 * S0(e * 2 - 1, 0.1125, 0.45)
    },
    easeInBack(e) {
      return e * e * ((1.70158 + 1) * e - 1.70158)
    },
    easeOutBack(e) {
      return (e -= 1) * e * ((1.70158 + 1) * e + 1.70158) + 1
    },
    easeInOutBack(e) {
      let t = 1.70158
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    },
    easeInBounce: e => 1 - Vs.easeOutBounce(1 - e),
    easeOutBounce(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
          : e < 2.5 / 2.75
            ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
            : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375
    },
    easeInOutBounce: e =>
      e < 0.5 ? Vs.easeInBounce(e * 2) * 0.5 : Vs.easeOutBounce(e * 2 - 1) * 0.5 + 0.5,
  }
function _h(e) {
  if (e && typeof e == 'object') {
    const t = e.toString()
    return t === '[object CanvasPattern]' || t === '[object CanvasGradient]'
  }
  return !1
}
function b0(e) {
  return _h(e) ? e : new Us(e)
}
function Qc(e) {
  return _h(e) ? e : new Us(e).saturate(0.5).darken(0.1).hexString()
}
const i6 = ['x', 'y', 'borderWidth', 'radius', 'tension'],
  r6 = ['color', 'borderColor', 'backgroundColor']
function s6(e) {
  ;(e.set('animation', {
    delay: void 0,
    duration: 1e3,
    easing: 'easeOutQuart',
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0,
  }),
    e.describe('animation', {
      _fallback: !1,
      _indexable: !1,
      _scriptable: t => t !== 'onProgress' && t !== 'onComplete' && t !== 'fn',
    }),
    e.set('animations', {
      colors: { type: 'color', properties: r6 },
      numbers: { type: 'number', properties: i6 },
    }),
    e.describe('animations', { _fallback: 'animation' }),
    e.set('transitions', {
      active: { animation: { duration: 400 } },
      resize: { animation: { duration: 0 } },
      show: {
        animations: { colors: { from: 'transparent' }, visible: { type: 'boolean', duration: 0 } },
      },
      hide: {
        animations: {
          colors: { to: 'transparent' },
          visible: { type: 'boolean', easing: 'linear', fn: t => t | 0 },
        },
      },
    }))
}
function o6(e) {
  e.set('layout', { autoPadding: !0, padding: { top: 0, right: 0, bottom: 0, left: 0 } })
}
const k0 = new Map()
function a6(e, t) {
  t = t || {}
  const n = e + JSON.stringify(t)
  let i = k0.get(n)
  return (i || ((i = new Intl.NumberFormat(e, t)), k0.set(n, i)), i)
}
function io(e, t, n) {
  return a6(t, n).format(e)
}
const Av = {
  values(e) {
    return zt(e) ? e : '' + e
  },
  numeric(e, t, n) {
    if (e === 0) return '0'
    const i = this.chart.options.locale
    let s,
      a = e
    if (n.length > 1) {
      const h = Math.max(Math.abs(n[0].value), Math.abs(n[n.length - 1].value))
      ;((h < 1e-4 || h > 1e15) && (s = 'scientific'), (a = l6(e, n)))
    }
    const l = ei(Math.abs(a)),
      u = isNaN(l) ? 1 : Math.max(Math.min(-1 * Math.floor(l), 20), 0),
      f = { notation: s, minimumFractionDigits: u, maximumFractionDigits: u }
    return (Object.assign(f, this.options.ticks.format), io(e, i, f))
  },
  logarithmic(e, t, n) {
    if (e === 0) return '0'
    const i = n[t].significand || e / Math.pow(10, Math.floor(ei(e)))
    return [1, 2, 3, 5, 10, 15].includes(i) || t > 0.8 * n.length
      ? Av.numeric.call(this, e, t, n)
      : ''
  },
}
function l6(e, t) {
  let n = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value
  return (Math.abs(n) >= 1 && e !== Math.floor(e) && (n = e - Math.floor(e)), n)
}
var Cl = { formatters: Av }
function u6(e) {
  ;(e.set('scale', {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: 'ticks',
    clip: !0,
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (t, n) => n.lineWidth,
      tickColor: (t, n) => n.color,
      offset: !1,
    },
    border: { display: !0, dash: [], dashOffset: 0, width: 1 },
    title: { display: !1, text: '', padding: { top: 4, bottom: 4 } },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: '',
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: Cl.formatters.values,
      minor: {},
      major: {},
      align: 'center',
      crossAlign: 'near',
      showLabelBackdrop: !1,
      backdropColor: 'rgba(255, 255, 255, 0.75)',
      backdropPadding: 2,
    },
  }),
    e.route('scale.ticks', 'color', '', 'color'),
    e.route('scale.grid', 'color', '', 'borderColor'),
    e.route('scale.border', 'color', '', 'borderColor'),
    e.route('scale.title', 'color', '', 'color'),
    e.describe('scale', {
      _fallback: !1,
      _scriptable: t =>
        !t.startsWith('before') && !t.startsWith('after') && t !== 'callback' && t !== 'parser',
      _indexable: t => t !== 'borderDash' && t !== 'tickBorderDash' && t !== 'dash',
    }),
    e.describe('scales', { _fallback: 'scale' }),
    e.describe('scale.ticks', {
      _scriptable: t => t !== 'backdropPadding' && t !== 'callback',
      _indexable: t => t !== 'backdropPadding',
    }))
}
const ji = Object.create(null),
  Ef = Object.create(null)
function zs(e, t) {
  if (!t) return e
  const n = t.split('.')
  for (let i = 0, s = n.length; i < s; ++i) {
    const a = n[i]
    e = e[a] || (e[a] = Object.create(null))
  }
  return e
}
function Zc(e, t, n) {
  return typeof t == 'string' ? $s(zs(e, t), n) : $s(zs(e, ''), t)
}
class c6 {
  constructor(t, n) {
    ;((this.animation = void 0),
      (this.backgroundColor = 'rgba(0,0,0,0.1)'),
      (this.borderColor = 'rgba(0,0,0,0.1)'),
      (this.color = '#666'),
      (this.datasets = {}),
      (this.devicePixelRatio = i => i.chart.platform.getDevicePixelRatio()),
      (this.elements = {}),
      (this.events = ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove']),
      (this.font = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 12,
        style: 'normal',
        lineHeight: 1.2,
        weight: null,
      }),
      (this.hover = {}),
      (this.hoverBackgroundColor = (i, s) => Qc(s.backgroundColor)),
      (this.hoverBorderColor = (i, s) => Qc(s.borderColor)),
      (this.hoverColor = (i, s) => Qc(s.color)),
      (this.indexAxis = 'x'),
      (this.interaction = { mode: 'nearest', intersect: !0, includeInvisible: !1 }),
      (this.maintainAspectRatio = !0),
      (this.onHover = null),
      (this.onClick = null),
      (this.parsing = !0),
      (this.plugins = {}),
      (this.responsive = !0),
      (this.scale = void 0),
      (this.scales = {}),
      (this.showLine = !0),
      (this.drawActiveElementsOnTop = !0),
      this.describe(t),
      this.apply(n))
  }
  set(t, n) {
    return Zc(this, t, n)
  }
  get(t) {
    return zs(this, t)
  }
  describe(t, n) {
    return Zc(Ef, t, n)
  }
  override(t, n) {
    return Zc(ji, t, n)
  }
  route(t, n, i, s) {
    const a = zs(this, t),
      l = zs(this, i),
      u = '_' + n
    Object.defineProperties(a, {
      [u]: { value: a[n], writable: !0 },
      [n]: {
        enumerable: !0,
        get() {
          const f = this[u],
            h = l[s]
          return St(f) ? Object.assign({}, h, f) : yt(f, h)
        },
        set(f) {
          this[u] = f
        },
      },
    })
  }
  apply(t) {
    t.forEach(n => n(this))
  }
}
var Bt = new c6(
  {
    _scriptable: e => !e.startsWith('on'),
    _indexable: e => e !== 'events',
    hover: { _fallback: 'interaction' },
    interaction: { _scriptable: !1, _indexable: !1 },
  },
  [s6, o6, u6]
)
function f6(e) {
  return !e || wt(e.size) || wt(e.family)
    ? null
    : (e.style ? e.style + ' ' : '') + (e.weight ? e.weight + ' ' : '') + e.size + 'px ' + e.family
}
function ul(e, t, n, i, s) {
  let a = t[s]
  return (a || ((a = t[s] = e.measureText(s).width), n.push(s)), a > i && (i = a), i)
}
function h6(e, t, n, i) {
  i = i || {}
  let s = (i.data = i.data || {}),
    a = (i.garbageCollect = i.garbageCollect || [])
  ;(i.font !== t && ((s = i.data = {}), (a = i.garbageCollect = []), (i.font = t)),
    e.save(),
    (e.font = t))
  let l = 0
  const u = n.length
  let f, h, p, m, y
  for (f = 0; f < u; f++)
    if (((m = n[f]), m != null && !zt(m))) l = ul(e, s, a, l, m)
    else if (zt(m))
      for (h = 0, p = m.length; h < p; h++)
        ((y = m[h]), y != null && !zt(y) && (l = ul(e, s, a, l, y)))
  e.restore()
  const x = a.length / 2
  if (x > n.length) {
    for (f = 0; f < x; f++) delete s[a[f]]
    a.splice(0, x)
  }
  return l
}
function Oi(e, t, n) {
  const i = e.currentDevicePixelRatio,
    s = n !== 0 ? Math.max(n / 2, 0.5) : 0
  return Math.round((t - s) * i) / i + s
}
function P0(e, t) {
  ;(!t && !e) ||
    ((t = t || e.getContext('2d')),
    t.save(),
    t.resetTransform(),
    t.clearRect(0, 0, e.width, e.height),
    t.restore())
}
function Of(e, t, n, i) {
  Rv(e, t, n, i, null)
}
function Rv(e, t, n, i, s) {
  let a, l, u, f, h, p, m, y
  const x = t.pointStyle,
    _ = t.rotation,
    w = t.radius
  let S = (_ || 0) * YP
  if (
    x &&
    typeof x == 'object' &&
    ((a = x.toString()), a === '[object HTMLImageElement]' || a === '[object HTMLCanvasElement]')
  ) {
    ;(e.save(),
      e.translate(n, i),
      e.rotate(S),
      e.drawImage(x, -x.width / 2, -x.height / 2, x.width, x.height),
      e.restore())
    return
  }
  if (!(isNaN(w) || w <= 0)) {
    switch ((e.beginPath(), x)) {
      default:
        ;(s ? e.ellipse(n, i, s / 2, w, 0, 0, Ft) : e.arc(n, i, w, 0, Ft), e.closePath())
        break
      case 'triangle':
        ;((p = s ? s / 2 : w),
          e.moveTo(n + Math.sin(S) * p, i - Math.cos(S) * w),
          (S += y0),
          e.lineTo(n + Math.sin(S) * p, i - Math.cos(S) * w),
          (S += y0),
          e.lineTo(n + Math.sin(S) * p, i - Math.cos(S) * w),
          e.closePath())
        break
      case 'rectRounded':
        ;((h = w * 0.516),
          (f = w - h),
          (l = Math.cos(S + Ei) * f),
          (m = Math.cos(S + Ei) * (s ? s / 2 - h : f)),
          (u = Math.sin(S + Ei) * f),
          (y = Math.sin(S + Ei) * (s ? s / 2 - h : f)),
          e.arc(n - m, i - u, h, S - Pt, S - Kt),
          e.arc(n + y, i - l, h, S - Kt, S),
          e.arc(n + m, i + u, h, S, S + Kt),
          e.arc(n - y, i + l, h, S + Kt, S + Pt),
          e.closePath())
        break
      case 'rect':
        if (!_) {
          ;((f = Math.SQRT1_2 * w), (p = s ? s / 2 : f), e.rect(n - p, i - f, 2 * p, 2 * f))
          break
        }
        S += Ei
      case 'rectRot':
        ;((m = Math.cos(S) * (s ? s / 2 : w)),
          (l = Math.cos(S) * w),
          (u = Math.sin(S) * w),
          (y = Math.sin(S) * (s ? s / 2 : w)),
          e.moveTo(n - m, i - u),
          e.lineTo(n + y, i - l),
          e.lineTo(n + m, i + u),
          e.lineTo(n - y, i + l),
          e.closePath())
        break
      case 'crossRot':
        S += Ei
      case 'cross':
        ;((m = Math.cos(S) * (s ? s / 2 : w)),
          (l = Math.cos(S) * w),
          (u = Math.sin(S) * w),
          (y = Math.sin(S) * (s ? s / 2 : w)),
          e.moveTo(n - m, i - u),
          e.lineTo(n + m, i + u),
          e.moveTo(n + y, i - l),
          e.lineTo(n - y, i + l))
        break
      case 'star':
        ;((m = Math.cos(S) * (s ? s / 2 : w)),
          (l = Math.cos(S) * w),
          (u = Math.sin(S) * w),
          (y = Math.sin(S) * (s ? s / 2 : w)),
          e.moveTo(n - m, i - u),
          e.lineTo(n + m, i + u),
          e.moveTo(n + y, i - l),
          e.lineTo(n - y, i + l),
          (S += Ei),
          (m = Math.cos(S) * (s ? s / 2 : w)),
          (l = Math.cos(S) * w),
          (u = Math.sin(S) * w),
          (y = Math.sin(S) * (s ? s / 2 : w)),
          e.moveTo(n - m, i - u),
          e.lineTo(n + m, i + u),
          e.moveTo(n + y, i - l),
          e.lineTo(n - y, i + l))
        break
      case 'line':
        ;((l = s ? s / 2 : Math.cos(S) * w),
          (u = Math.sin(S) * w),
          e.moveTo(n - l, i - u),
          e.lineTo(n + l, i + u))
        break
      case 'dash':
        ;(e.moveTo(n, i), e.lineTo(n + Math.cos(S) * (s ? s / 2 : w), i + Math.sin(S) * w))
        break
      case !1:
        e.closePath()
        break
    }
    ;(e.fill(), t.borderWidth > 0 && e.stroke())
  }
}
function Pn(e, t, n) {
  return (
    (n = n || 0.5),
    !t || (e && e.x > t.left - n && e.x < t.right + n && e.y > t.top - n && e.y < t.bottom + n)
  )
}
function Ml(e, t) {
  ;(e.save(), e.beginPath(), e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), e.clip())
}
function Tl(e) {
  e.restore()
}
function d6(e, t, n, i, s) {
  if (!t) return e.lineTo(n.x, n.y)
  if (s === 'middle') {
    const a = (t.x + n.x) / 2
    ;(e.lineTo(a, t.y), e.lineTo(a, n.y))
  } else (s === 'after') != !!i ? e.lineTo(t.x, n.y) : e.lineTo(n.x, t.y)
  e.lineTo(n.x, n.y)
}
function p6(e, t, n, i) {
  if (!t) return e.lineTo(n.x, n.y)
  e.bezierCurveTo(
    i ? t.cp1x : t.cp2x,
    i ? t.cp1y : t.cp2y,
    i ? n.cp2x : n.cp1x,
    i ? n.cp2y : n.cp1y,
    n.x,
    n.y
  )
}
function m6(e, t) {
  ;(t.translation && e.translate(t.translation[0], t.translation[1]),
    wt(t.rotation) || e.rotate(t.rotation),
    t.color && (e.fillStyle = t.color),
    t.textAlign && (e.textAlign = t.textAlign),
    t.textBaseline && (e.textBaseline = t.textBaseline))
}
function g6(e, t, n, i, s) {
  if (s.strikethrough || s.underline) {
    const a = e.measureText(i),
      l = t - a.actualBoundingBoxLeft,
      u = t + a.actualBoundingBoxRight,
      f = n - a.actualBoundingBoxAscent,
      h = n + a.actualBoundingBoxDescent,
      p = s.strikethrough ? (f + h) / 2 : h
    ;((e.strokeStyle = e.fillStyle),
      e.beginPath(),
      (e.lineWidth = s.decorationWidth || 2),
      e.moveTo(l, p),
      e.lineTo(u, p),
      e.stroke())
  }
}
function y6(e, t) {
  const n = e.fillStyle
  ;((e.fillStyle = t.color), e.fillRect(t.left, t.top, t.width, t.height), (e.fillStyle = n))
}
function Hi(e, t, n, i, s, a = {}) {
  const l = zt(t) ? t : [t],
    u = a.strokeWidth > 0 && a.strokeColor !== ''
  let f, h
  for (e.save(), e.font = s.string, m6(e, a), f = 0; f < l.length; ++f)
    ((h = l[f]),
      a.backdrop && y6(e, a.backdrop),
      u &&
        (a.strokeColor && (e.strokeStyle = a.strokeColor),
        wt(a.strokeWidth) || (e.lineWidth = a.strokeWidth),
        e.strokeText(h, n, i, a.maxWidth)),
      e.fillText(h, n, i, a.maxWidth),
      g6(e, n, i, h, a),
      (i += Number(s.lineHeight)))
  e.restore()
}
function Ks(e, t) {
  const { x: n, y: i, w: s, h: a, radius: l } = t
  ;(e.arc(n + l.topLeft, i + l.topLeft, l.topLeft, 1.5 * Pt, Pt, !0),
    e.lineTo(n, i + a - l.bottomLeft),
    e.arc(n + l.bottomLeft, i + a - l.bottomLeft, l.bottomLeft, Pt, Kt, !0),
    e.lineTo(n + s - l.bottomRight, i + a),
    e.arc(n + s - l.bottomRight, i + a - l.bottomRight, l.bottomRight, Kt, 0, !0),
    e.lineTo(n + s, i + l.topRight),
    e.arc(n + s - l.topRight, i + l.topRight, l.topRight, 0, -Kt, !0),
    e.lineTo(n + l.topLeft, i))
}
const v6 = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
  x6 = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/
function _6(e, t) {
  const n = ('' + e).match(v6)
  if (!n || n[1] === 'normal') return t * 1.2
  switch (((e = +n[2]), n[3])) {
    case 'px':
      return e
    case '%':
      e /= 100
      break
  }
  return t * e
}
const w6 = e => +e || 0
function wh(e, t) {
  const n = {},
    i = St(t),
    s = i ? Object.keys(t) : t,
    a = St(e) ? (i ? l => yt(e[l], e[t[l]]) : l => e[l]) : () => e
  for (const l of s) n[l] = w6(a(l))
  return n
}
function Fv(e) {
  return wh(e, { top: 'y', right: 'x', bottom: 'y', left: 'x' })
}
function Bi(e) {
  return wh(e, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'])
}
function ge(e) {
  const t = Fv(e)
  return ((t.width = t.left + t.right), (t.height = t.top + t.bottom), t)
}
function te(e, t) {
  ;((e = e || {}), (t = t || Bt.font))
  let n = yt(e.size, t.size)
  typeof n == 'string' && (n = parseInt(n, 10))
  let i = yt(e.style, t.style)
  i &&
    !('' + i).match(x6) &&
    (console.warn('Invalid font style specified: "' + i + '"'), (i = void 0))
  const s = {
    family: yt(e.family, t.family),
    lineHeight: _6(yt(e.lineHeight, t.lineHeight), n),
    size: n,
    style: i,
    weight: yt(e.weight, t.weight),
    string: '',
  }
  return ((s.string = f6(s)), s)
}
function Ts(e, t, n, i) {
  let s, a, l
  for (s = 0, a = e.length; s < a; ++s) if (((l = e[s]), l !== void 0 && l !== void 0)) return l
}
function S6(e, t, n) {
  const { min: i, max: s } = e,
    a = bv(t, (s - i) / 2),
    l = (u, f) => (n && u === 0 ? 0 : u + f)
  return { min: l(i, -Math.abs(a)), max: l(s, a) }
}
function di(e, t) {
  return Object.assign(Object.create(e), t)
}
function Sh(e, t = [''], n, i, s = () => e[0]) {
  const a = n || e
  typeof i > 'u' && (i = Bv('_fallback', e))
  const l = {
    [Symbol.toStringTag]: 'Object',
    _cacheable: !0,
    _scopes: e,
    _rootScopes: a,
    _fallback: i,
    _getTarget: s,
    override: u => Sh([u, ...e], t, a, i),
  }
  return new Proxy(l, {
    deleteProperty(u, f) {
      return (delete u[f], delete u._keys, delete e[0][f], !0)
    },
    get(u, f) {
      return Vv(u, f, () => O6(f, t, e, u))
    },
    getOwnPropertyDescriptor(u, f) {
      return Reflect.getOwnPropertyDescriptor(u._scopes[0], f)
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(e[0])
    },
    has(u, f) {
      return M0(u).includes(f)
    },
    ownKeys(u) {
      return M0(u)
    },
    set(u, f, h) {
      const p = u._storage || (u._storage = s())
      return ((u[f] = p[f] = h), delete u._keys, !0)
    },
  })
}
function Mr(e, t, n, i) {
  const s = {
    _cacheable: !1,
    _proxy: e,
    _context: t,
    _subProxy: n,
    _stack: new Set(),
    _descriptors: Iv(e, i),
    setContext: a => Mr(e, a, n, i),
    override: a => Mr(e.override(a), t, n, i),
  }
  return new Proxy(s, {
    deleteProperty(a, l) {
      return (delete a[l], delete e[l], !0)
    },
    get(a, l, u) {
      return Vv(a, l, () => k6(a, l, u))
    },
    getOwnPropertyDescriptor(a, l) {
      return a._descriptors.allKeys
        ? Reflect.has(e, l)
          ? { enumerable: !0, configurable: !0 }
          : void 0
        : Reflect.getOwnPropertyDescriptor(e, l)
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(e)
    },
    has(a, l) {
      return Reflect.has(e, l)
    },
    ownKeys() {
      return Reflect.ownKeys(e)
    },
    set(a, l, u) {
      return ((e[l] = u), delete a[l], !0)
    },
  })
}
function Iv(e, t = { scriptable: !0, indexable: !0 }) {
  const { _scriptable: n = t.scriptable, _indexable: i = t.indexable, _allKeys: s = t.allKeys } = e
  return {
    allKeys: s,
    scriptable: n,
    indexable: i,
    isScriptable: ci(n) ? n : () => n,
    isIndexable: ci(i) ? i : () => i,
  }
}
const b6 = (e, t) => (e ? e + gh(t) : t),
  bh = (e, t) =>
    St(t) && e !== 'adapters' && (Object.getPrototypeOf(t) === null || t.constructor === Object)
function Vv(e, t, n) {
  if (Object.prototype.hasOwnProperty.call(e, t) || t === 'constructor') return e[t]
  const i = n()
  return ((e[t] = i), i)
}
function k6(e, t, n) {
  const { _proxy: i, _context: s, _subProxy: a, _descriptors: l } = e
  let u = i[t]
  return (
    ci(u) && l.isScriptable(t) && (u = P6(t, u, e, n)),
    zt(u) && u.length && (u = C6(t, u, e, l.isIndexable)),
    bh(t, u) && (u = Mr(u, s, a && a[t], l)),
    u
  )
}
function P6(e, t, n, i) {
  const { _proxy: s, _context: a, _subProxy: l, _stack: u } = n
  if (u.has(e)) throw new Error('Recursion detected: ' + Array.from(u).join('->') + '->' + e)
  u.add(e)
  let f = t(a, l || i)
  return (u.delete(e), bh(e, f) && (f = kh(s._scopes, s, e, f)), f)
}
function C6(e, t, n, i) {
  const { _proxy: s, _context: a, _subProxy: l, _descriptors: u } = n
  if (typeof a.index < 'u' && i(e)) return t[a.index % t.length]
  if (St(t[0])) {
    const f = t,
      h = s._scopes.filter(p => p !== f)
    t = []
    for (const p of f) {
      const m = kh(h, s, e, p)
      t.push(Mr(m, a, l && l[e], u))
    }
  }
  return t
}
function zv(e, t, n) {
  return ci(e) ? e(t, n) : e
}
const M6 = (e, t) => (e === !0 ? t : typeof e == 'string' ? ui(t, e) : void 0)
function T6(e, t, n, i, s) {
  for (const a of t) {
    const l = M6(n, a)
    if (l) {
      e.add(l)
      const u = zv(l._fallback, n, s)
      if (typeof u < 'u' && u !== n && u !== i) return u
    } else if (l === !1 && typeof i < 'u' && n !== i) return null
  }
  return !1
}
function kh(e, t, n, i) {
  const s = t._rootScopes,
    a = zv(t._fallback, n, i),
    l = [...e, ...s],
    u = new Set()
  u.add(i)
  let f = C0(u, l, n, a || n, i)
  return f === null || (typeof a < 'u' && a !== n && ((f = C0(u, l, a, f, i)), f === null))
    ? !1
    : Sh(Array.from(u), [''], s, a, () => E6(t, n, i))
}
function C0(e, t, n, i, s) {
  for (; n; ) n = T6(e, t, n, i, s)
  return n
}
function E6(e, t, n) {
  const i = e._getTarget()
  t in i || (i[t] = {})
  const s = i[t]
  return zt(s) && St(n) ? n : s || {}
}
function O6(e, t, n, i) {
  let s
  for (const a of t)
    if (((s = Bv(b6(a, e), n)), typeof s < 'u')) return bh(e, s) ? kh(n, i, e, s) : s
}
function Bv(e, t) {
  for (const n of t) {
    if (!n) continue
    const i = n[e]
    if (typeof i < 'u') return i
  }
}
function M0(e) {
  let t = e._keys
  return (t || (t = e._keys = L6(e._scopes)), t)
}
function L6(e) {
  const t = new Set()
  for (const n of e) for (const i of Object.keys(n).filter(s => !s.startsWith('_'))) t.add(i)
  return Array.from(t)
}
function Nv(e, t, n, i) {
  const { iScale: s } = e,
    { key: a = 'r' } = this._parsing,
    l = new Array(i)
  let u, f, h, p
  for (u = 0, f = i; u < f; ++u) ((h = u + n), (p = t[h]), (l[u] = { r: s.parse(ui(p, a), h) }))
  return l
}
const D6 = Number.EPSILON || 1e-14,
  Tr = (e, t) => t < e.length && !e[t].skip && e[t],
  jv = e => (e === 'x' ? 'y' : 'x')
function A6(e, t, n, i) {
  const s = e.skip ? t : e,
    a = t,
    l = n.skip ? t : n,
    u = Tf(a, s),
    f = Tf(l, a)
  let h = u / (u + f),
    p = f / (u + f)
  ;((h = isNaN(h) ? 0 : h), (p = isNaN(p) ? 0 : p))
  const m = i * h,
    y = i * p
  return {
    previous: { x: a.x - m * (l.x - s.x), y: a.y - m * (l.y - s.y) },
    next: { x: a.x + y * (l.x - s.x), y: a.y + y * (l.y - s.y) },
  }
}
function R6(e, t, n) {
  const i = e.length
  let s,
    a,
    l,
    u,
    f,
    h = Tr(e, 0)
  for (let p = 0; p < i - 1; ++p)
    if (((f = h), (h = Tr(e, p + 1)), !(!f || !h))) {
      if (Is(t[p], 0, D6)) {
        n[p] = n[p + 1] = 0
        continue
      }
      ;((s = n[p] / t[p]),
        (a = n[p + 1] / t[p]),
        (u = Math.pow(s, 2) + Math.pow(a, 2)),
        !(u <= 9) && ((l = 3 / Math.sqrt(u)), (n[p] = s * l * t[p]), (n[p + 1] = a * l * t[p])))
    }
}
function F6(e, t, n = 'x') {
  const i = jv(n),
    s = e.length
  let a,
    l,
    u,
    f = Tr(e, 0)
  for (let h = 0; h < s; ++h) {
    if (((l = u), (u = f), (f = Tr(e, h + 1)), !u)) continue
    const p = u[n],
      m = u[i]
    ;(l && ((a = (p - l[n]) / 3), (u[`cp1${n}`] = p - a), (u[`cp1${i}`] = m - a * t[h])),
      f && ((a = (f[n] - p) / 3), (u[`cp2${n}`] = p + a), (u[`cp2${i}`] = m + a * t[h])))
  }
}
function I6(e, t = 'x') {
  const n = jv(t),
    i = e.length,
    s = Array(i).fill(0),
    a = Array(i)
  let l,
    u,
    f,
    h = Tr(e, 0)
  for (l = 0; l < i; ++l)
    if (((u = f), (f = h), (h = Tr(e, l + 1)), !!f)) {
      if (h) {
        const p = h[t] - f[t]
        s[l] = p !== 0 ? (h[n] - f[n]) / p : 0
      }
      a[l] = u ? (h ? (un(s[l - 1]) !== un(s[l]) ? 0 : (s[l - 1] + s[l]) / 2) : s[l - 1]) : s[l]
    }
  ;(R6(e, s, a), F6(e, a, t))
}
function Va(e, t, n) {
  return Math.max(Math.min(e, n), t)
}
function V6(e, t) {
  let n,
    i,
    s,
    a,
    l,
    u = Pn(e[0], t)
  for (n = 0, i = e.length; n < i; ++n)
    ((l = a),
      (a = u),
      (u = n < i - 1 && Pn(e[n + 1], t)),
      a &&
        ((s = e[n]),
        l && ((s.cp1x = Va(s.cp1x, t.left, t.right)), (s.cp1y = Va(s.cp1y, t.top, t.bottom))),
        u && ((s.cp2x = Va(s.cp2x, t.left, t.right)), (s.cp2y = Va(s.cp2y, t.top, t.bottom)))))
}
function z6(e, t, n, i, s) {
  let a, l, u, f
  if ((t.spanGaps && (e = e.filter(h => !h.skip)), t.cubicInterpolationMode === 'monotone'))
    I6(e, s)
  else {
    let h = i ? e[e.length - 1] : e[0]
    for (a = 0, l = e.length; a < l; ++a)
      ((u = e[a]),
        (f = A6(h, u, e[Math.min(a + 1, l - (i ? 0 : 1)) % l], t.tension)),
        (u.cp1x = f.previous.x),
        (u.cp1y = f.previous.y),
        (u.cp2x = f.next.x),
        (u.cp2y = f.next.y),
        (h = u))
  }
  t.capBezierPoints && V6(e, n)
}
function Ph() {
  return typeof window < 'u' && typeof document < 'u'
}
function Ch(e) {
  let t = e.parentNode
  return (t && t.toString() === '[object ShadowRoot]' && (t = t.host), t)
}
function cl(e, t, n) {
  let i
  return (
    typeof e == 'string'
      ? ((i = parseInt(e, 10)), e.indexOf('%') !== -1 && (i = (i / 100) * t.parentNode[n]))
      : (i = e),
    i
  )
}
const El = e => e.ownerDocument.defaultView.getComputedStyle(e, null)
function B6(e, t) {
  return El(e).getPropertyValue(t)
}
const N6 = ['top', 'right', 'bottom', 'left']
function Ni(e, t, n) {
  const i = {}
  n = n ? '-' + n : ''
  for (let s = 0; s < 4; s++) {
    const a = N6[s]
    i[a] = parseFloat(e[t + '-' + a + n]) || 0
  }
  return ((i.width = i.left + i.right), (i.height = i.top + i.bottom), i)
}
const j6 = (e, t, n) => (e > 0 || t > 0) && (!n || !n.shadowRoot)
function H6(e, t) {
  const n = e.touches,
    i = n && n.length ? n[0] : e,
    { offsetX: s, offsetY: a } = i
  let l = !1,
    u,
    f
  if (j6(s, a, e.target)) ((u = s), (f = a))
  else {
    const h = t.getBoundingClientRect()
    ;((u = i.clientX - h.left), (f = i.clientY - h.top), (l = !0))
  }
  return { x: u, y: f, box: l }
}
function Fi(e, t) {
  if ('native' in e) return e
  const { canvas: n, currentDevicePixelRatio: i } = t,
    s = El(n),
    a = s.boxSizing === 'border-box',
    l = Ni(s, 'padding'),
    u = Ni(s, 'border', 'width'),
    { x: f, y: h, box: p } = H6(e, n),
    m = l.left + (p && u.left),
    y = l.top + (p && u.top)
  let { width: x, height: _ } = t
  return (
    a && ((x -= l.width + u.width), (_ -= l.height + u.height)),
    { x: Math.round((((f - m) / x) * n.width) / i), y: Math.round((((h - y) / _) * n.height) / i) }
  )
}
function W6(e, t, n) {
  let i, s
  if (t === void 0 || n === void 0) {
    const a = e && Ch(e)
    if (!a) ((t = e.clientWidth), (n = e.clientHeight))
    else {
      const l = a.getBoundingClientRect(),
        u = El(a),
        f = Ni(u, 'border', 'width'),
        h = Ni(u, 'padding')
      ;((t = l.width - h.width - f.width),
        (n = l.height - h.height - f.height),
        (i = cl(u.maxWidth, a, 'clientWidth')),
        (s = cl(u.maxHeight, a, 'clientHeight')))
    }
  }
  return { width: t, height: n, maxWidth: i || ll, maxHeight: s || ll }
}
const za = e => Math.round(e * 10) / 10
function U6(e, t, n, i) {
  const s = El(e),
    a = Ni(s, 'margin'),
    l = cl(s.maxWidth, e, 'clientWidth') || ll,
    u = cl(s.maxHeight, e, 'clientHeight') || ll,
    f = W6(e, t, n)
  let { width: h, height: p } = f
  if (s.boxSizing === 'content-box') {
    const y = Ni(s, 'border', 'width'),
      x = Ni(s, 'padding')
    ;((h -= x.width + y.width), (p -= x.height + y.height))
  }
  return (
    (h = Math.max(0, h - a.width)),
    (p = Math.max(0, i ? h / i : p - a.height)),
    (h = za(Math.min(h, l, f.maxWidth))),
    (p = za(Math.min(p, u, f.maxHeight))),
    h && !p && (p = za(h / 2)),
    (t !== void 0 || n !== void 0) &&
      i &&
      f.height &&
      p > f.height &&
      ((p = f.height), (h = za(Math.floor(p * i)))),
    { width: h, height: p }
  )
}
function T0(e, t, n) {
  const i = t || 1,
    s = Math.floor(e.height * i),
    a = Math.floor(e.width * i)
  ;((e.height = Math.floor(e.height)), (e.width = Math.floor(e.width)))
  const l = e.canvas
  return (
    l.style &&
      (n || (!l.style.height && !l.style.width)) &&
      ((l.style.height = `${e.height}px`), (l.style.width = `${e.width}px`)),
    e.currentDevicePixelRatio !== i || l.height !== s || l.width !== a
      ? ((e.currentDevicePixelRatio = i),
        (l.height = s),
        (l.width = a),
        e.ctx.setTransform(i, 0, 0, i, 0, 0),
        !0)
      : !1
  )
}
const $6 = (function () {
  let e = !1
  try {
    const t = {
      get passive() {
        return ((e = !0), !1)
      },
    }
    Ph() && (window.addEventListener('test', null, t), window.removeEventListener('test', null, t))
  } catch {}
  return e
})()
function E0(e, t) {
  const n = B6(e, t),
    i = n && n.match(/^(\d+)(\.\d+)?px$/)
  return i ? +i[1] : void 0
}
function Ii(e, t, n, i) {
  return { x: e.x + n * (t.x - e.x), y: e.y + n * (t.y - e.y) }
}
function Y6(e, t, n, i) {
  return {
    x: e.x + n * (t.x - e.x),
    y:
      i === 'middle'
        ? n < 0.5
          ? e.y
          : t.y
        : i === 'after'
          ? n < 1
            ? e.y
            : t.y
          : n > 0
            ? t.y
            : e.y,
  }
}
function X6(e, t, n, i) {
  const s = { x: e.cp2x, y: e.cp2y },
    a = { x: t.cp1x, y: t.cp1y },
    l = Ii(e, s, n),
    u = Ii(s, a, n),
    f = Ii(a, t, n),
    h = Ii(l, u, n),
    p = Ii(u, f, n)
  return Ii(h, p, n)
}
const K6 = function (e, t) {
    return {
      x(n) {
        return e + e + t - n
      },
      setWidth(n) {
        t = n
      },
      textAlign(n) {
        return n === 'center' ? n : n === 'right' ? 'left' : 'right'
      },
      xPlus(n, i) {
        return n - i
      },
      leftForLtr(n, i) {
        return n - i
      },
    }
  },
  G6 = function () {
    return {
      x(e) {
        return e
      },
      setWidth(e) {},
      textAlign(e) {
        return e
      },
      xPlus(e, t) {
        return e + t
      },
      leftForLtr(e, t) {
        return e
      },
    }
  }
function br(e, t, n) {
  return e ? K6(t, n) : G6()
}
function Hv(e, t) {
  let n, i
  ;(t === 'ltr' || t === 'rtl') &&
    ((n = e.canvas.style),
    (i = [n.getPropertyValue('direction'), n.getPropertyPriority('direction')]),
    n.setProperty('direction', t, 'important'),
    (e.prevTextDirection = i))
}
function Wv(e, t) {
  t !== void 0 && (delete e.prevTextDirection, e.canvas.style.setProperty('direction', t[0], t[1]))
}
function Uv(e) {
  return e === 'angle'
    ? { between: Xs, compare: qP, normalize: pe }
    : { between: bn, compare: (t, n) => t - n, normalize: t => t }
}
function O0({ start: e, end: t, count: n, loop: i, style: s }) {
  return { start: e % n, end: t % n, loop: i && (t - e + 1) % n === 0, style: s }
}
function q6(e, t, n) {
  const { property: i, start: s, end: a } = n,
    { between: l, normalize: u } = Uv(i),
    f = t.length
  let { start: h, end: p, loop: m } = e,
    y,
    x
  if (m) {
    for (h += f, p += f, y = 0, x = f; y < x && l(u(t[h % f][i]), s, a); ++y) (h--, p--)
    ;((h %= f), (p %= f))
  }
  return (p < h && (p += f), { start: h, end: p, loop: m, style: e.style })
}
function $v(e, t, n) {
  if (!n) return [e]
  const { property: i, start: s, end: a } = n,
    l = t.length,
    { compare: u, between: f, normalize: h } = Uv(i),
    { start: p, end: m, loop: y, style: x } = q6(e, t, n),
    _ = []
  let w = !1,
    S = null,
    k,
    P,
    C
  const T = () => f(s, C, k) && u(s, C) !== 0,
    E = () => u(a, k) === 0 || f(a, C, k),
    R = () => w || T(),
    A = () => !w || E()
  for (let V = p, j = p; V <= m; ++V)
    ((P = t[V % l]),
      !P.skip &&
        ((k = h(P[i])),
        k !== C &&
          ((w = f(k, s, a)),
          S === null && R() && (S = u(k, s) === 0 ? V : j),
          S !== null &&
            A() &&
            (_.push(O0({ start: S, end: V, loop: y, count: l, style: x })), (S = null)),
          (j = V),
          (C = k))))
  return (S !== null && _.push(O0({ start: S, end: m, loop: y, count: l, style: x })), _)
}
function Yv(e, t) {
  const n = [],
    i = e.segments
  for (let s = 0; s < i.length; s++) {
    const a = $v(i[s], e.points, t)
    a.length && n.push(...a)
  }
  return n
}
function Q6(e, t, n, i) {
  let s = 0,
    a = t - 1
  if (n && !i) for (; s < t && !e[s].skip; ) s++
  for (; s < t && e[s].skip; ) s++
  for (s %= t, n && (a += s); a > s && e[a % t].skip; ) a--
  return ((a %= t), { start: s, end: a })
}
function Z6(e, t, n, i) {
  const s = e.length,
    a = []
  let l = t,
    u = e[t],
    f
  for (f = t + 1; f <= n; ++f) {
    const h = e[f % s]
    ;(h.skip || h.stop
      ? u.skip ||
        ((i = !1), a.push({ start: t % s, end: (f - 1) % s, loop: i }), (t = l = h.stop ? f : null))
      : ((l = f), u.skip && (t = f)),
      (u = h))
  }
  return (l !== null && a.push({ start: t % s, end: l % s, loop: i }), a)
}
function J6(e, t) {
  const n = e.points,
    i = e.options.spanGaps,
    s = n.length
  if (!s) return []
  const a = !!e._loop,
    { start: l, end: u } = Q6(n, s, a, i)
  if (i === !0) return L0(e, [{ start: l, end: u, loop: a }], n, t)
  const f = u < l ? u + s : u,
    h = !!e._fullLoop && l === 0 && u === s - 1
  return L0(e, Z6(n, l, f, h), n, t)
}
function L0(e, t, n, i) {
  return !i || !i.setContext || !n ? t : tC(e, t, n, i)
}
function tC(e, t, n, i) {
  const s = e._chart.getContext(),
    a = D0(e.options),
    {
      _datasetIndex: l,
      options: { spanGaps: u },
    } = e,
    f = n.length,
    h = []
  let p = a,
    m = t[0].start,
    y = m
  function x(_, w, S, k) {
    const P = u ? -1 : 1
    if (_ !== w) {
      for (_ += f; n[_ % f].skip; ) _ -= P
      for (; n[w % f].skip; ) w += P
      _ % f !== w % f &&
        (h.push({ start: _ % f, end: w % f, loop: S, style: k }), (p = k), (m = w % f))
    }
  }
  for (const _ of t) {
    m = u ? m : _.start
    let w = n[m % f],
      S
    for (y = m + 1; y <= _.end; y++) {
      const k = n[y % f]
      ;((S = D0(
        i.setContext(
          di(s, {
            type: 'segment',
            p0: w,
            p1: k,
            p0DataIndex: (y - 1) % f,
            p1DataIndex: y % f,
            datasetIndex: l,
          })
        )
      )),
        eC(S, p) && x(m, y - 1, _.loop, p),
        (w = k),
        (p = S))
    }
    m < y - 1 && x(m, y - 1, _.loop, p)
  }
  return h
}
function D0(e) {
  return {
    backgroundColor: e.backgroundColor,
    borderCapStyle: e.borderCapStyle,
    borderDash: e.borderDash,
    borderDashOffset: e.borderDashOffset,
    borderJoinStyle: e.borderJoinStyle,
    borderWidth: e.borderWidth,
    borderColor: e.borderColor,
  }
}
function eC(e, t) {
  if (!t) return !1
  const n = [],
    i = function (s, a) {
      return _h(a) ? (n.includes(a) || n.push(a), n.indexOf(a)) : a
    }
  return JSON.stringify(e, i) !== JSON.stringify(t, i)
}
function Ba(e, t, n) {
  return e.options.clip ? e[n] : t[n]
}
function nC(e, t) {
  const { xScale: n, yScale: i } = e
  return n && i
    ? {
        left: Ba(n, t, 'left'),
        right: Ba(n, t, 'right'),
        top: Ba(i, t, 'top'),
        bottom: Ba(i, t, 'bottom'),
      }
    : t
}
function Xv(e, t) {
  const n = t._clip
  if (n.disabled) return !1
  const i = nC(t, e.chartArea)
  return {
    left: n.left === !1 ? 0 : i.left - (n.left === !0 ? 0 : n.left),
    right: n.right === !1 ? e.width : i.right + (n.right === !0 ? 0 : n.right),
    top: n.top === !1 ? 0 : i.top - (n.top === !0 ? 0 : n.top),
    bottom: n.bottom === !1 ? e.height : i.bottom + (n.bottom === !0 ? 0 : n.bottom),
  }
}
/*!
 * Chart.js v4.5.0
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */ class iC {
  constructor() {
    ;((this._request = null),
      (this._charts = new Map()),
      (this._running = !1),
      (this._lastDate = void 0))
  }
  _notify(t, n, i, s) {
    const a = n.listeners[s],
      l = n.duration
    a.forEach(u =>
      u({ chart: t, initial: n.initial, numSteps: l, currentStep: Math.min(i - n.start, l) })
    )
  }
  _refresh() {
    this._request ||
      ((this._running = !0),
      (this._request = Ev.call(window, () => {
        ;(this._update(), (this._request = null), this._running && this._refresh())
      })))
  }
  _update(t = Date.now()) {
    let n = 0
    ;(this._charts.forEach((i, s) => {
      if (!i.running || !i.items.length) return
      const a = i.items
      let l = a.length - 1,
        u = !1,
        f
      for (; l >= 0; --l)
        ((f = a[l]),
          f._active
            ? (f._total > i.duration && (i.duration = f._total), f.tick(t), (u = !0))
            : ((a[l] = a[a.length - 1]), a.pop()))
      ;(u && (s.draw(), this._notify(s, i, t, 'progress')),
        a.length || ((i.running = !1), this._notify(s, i, t, 'complete'), (i.initial = !1)),
        (n += a.length))
    }),
      (this._lastDate = t),
      n === 0 && (this._running = !1))
  }
  _getAnims(t) {
    const n = this._charts
    let i = n.get(t)
    return (
      i ||
        ((i = { running: !1, initial: !0, items: [], listeners: { complete: [], progress: [] } }),
        n.set(t, i)),
      i
    )
  }
  listen(t, n, i) {
    this._getAnims(t).listeners[n].push(i)
  }
  add(t, n) {
    !n || !n.length || this._getAnims(t).items.push(...n)
  }
  has(t) {
    return this._getAnims(t).items.length > 0
  }
  start(t) {
    const n = this._charts.get(t)
    n &&
      ((n.running = !0),
      (n.start = Date.now()),
      (n.duration = n.items.reduce((i, s) => Math.max(i, s._duration), 0)),
      this._refresh())
  }
  running(t) {
    if (!this._running) return !1
    const n = this._charts.get(t)
    return !(!n || !n.running || !n.items.length)
  }
  stop(t) {
    const n = this._charts.get(t)
    if (!n || !n.items.length) return
    const i = n.items
    let s = i.length - 1
    for (; s >= 0; --s) i[s].cancel()
    ;((n.items = []), this._notify(t, n, Date.now(), 'complete'))
  }
  remove(t) {
    return this._charts.delete(t)
  }
}
var xn = new iC()
const A0 = 'transparent',
  rC = {
    boolean(e, t, n) {
      return n > 0.5 ? t : e
    },
    color(e, t, n) {
      const i = b0(e || A0),
        s = i.valid && b0(t || A0)
      return s && s.valid ? s.mix(i, n).hexString() : t
    },
    number(e, t, n) {
      return e + (t - e) * n
    },
  }
class sC {
  constructor(t, n, i, s) {
    const a = n[i]
    s = Ts([t.to, s, a, t.from])
    const l = Ts([t.from, a, s])
    ;((this._active = !0),
      (this._fn = t.fn || rC[t.type || typeof l]),
      (this._easing = Vs[t.easing] || Vs.linear),
      (this._start = Math.floor(Date.now() + (t.delay || 0))),
      (this._duration = this._total = Math.floor(t.duration)),
      (this._loop = !!t.loop),
      (this._target = n),
      (this._prop = i),
      (this._from = l),
      (this._to = s),
      (this._promises = void 0))
  }
  active() {
    return this._active
  }
  update(t, n, i) {
    if (this._active) {
      this._notify(!1)
      const s = this._target[this._prop],
        a = i - this._start,
        l = this._duration - a
      ;((this._start = i),
        (this._duration = Math.floor(Math.max(l, t.duration))),
        (this._total += a),
        (this._loop = !!t.loop),
        (this._to = Ts([t.to, n, s, t.from])),
        (this._from = Ts([t.from, s, n])))
    }
  }
  cancel() {
    this._active && (this.tick(Date.now()), (this._active = !1), this._notify(!1))
  }
  tick(t) {
    const n = t - this._start,
      i = this._duration,
      s = this._prop,
      a = this._from,
      l = this._loop,
      u = this._to
    let f
    if (((this._active = a !== u && (l || n < i)), !this._active)) {
      ;((this._target[s] = u), this._notify(!0))
      return
    }
    if (n < 0) {
      this._target[s] = a
      return
    }
    ;((f = (n / i) % 2),
      (f = l && f > 1 ? 2 - f : f),
      (f = this._easing(Math.min(1, Math.max(0, f)))),
      (this._target[s] = this._fn(a, u, f)))
  }
  wait() {
    const t = this._promises || (this._promises = [])
    return new Promise((n, i) => {
      t.push({ res: n, rej: i })
    })
  }
  _notify(t) {
    const n = t ? 'res' : 'rej',
      i = this._promises || []
    for (let s = 0; s < i.length; s++) i[s][n]()
  }
}
class Kv {
  constructor(t, n) {
    ;((this._chart = t), (this._properties = new Map()), this.configure(n))
  }
  configure(t) {
    if (!St(t)) return
    const n = Object.keys(Bt.animation),
      i = this._properties
    Object.getOwnPropertyNames(t).forEach(s => {
      const a = t[s]
      if (!St(a)) return
      const l = {}
      for (const u of n) l[u] = a[u]
      ;((zt(a.properties) && a.properties) || [s]).forEach(u => {
        ;(u === s || !i.has(u)) && i.set(u, l)
      })
    })
  }
  _animateOptions(t, n) {
    const i = n.options,
      s = aC(t, i)
    if (!s) return []
    const a = this._createAnimations(s, i)
    return (
      i.$shared &&
        oC(t.options.$animations, i).then(
          () => {
            t.options = i
          },
          () => {}
        ),
      a
    )
  }
  _createAnimations(t, n) {
    const i = this._properties,
      s = [],
      a = t.$animations || (t.$animations = {}),
      l = Object.keys(n),
      u = Date.now()
    let f
    for (f = l.length - 1; f >= 0; --f) {
      const h = l[f]
      if (h.charAt(0) === '$') continue
      if (h === 'options') {
        s.push(...this._animateOptions(t, n))
        continue
      }
      const p = n[h]
      let m = a[h]
      const y = i.get(h)
      if (m)
        if (y && m.active()) {
          m.update(y, p, u)
          continue
        } else m.cancel()
      if (!y || !y.duration) {
        t[h] = p
        continue
      }
      ;((a[h] = m = new sC(y, t, h, p)), s.push(m))
    }
    return s
  }
  update(t, n) {
    if (this._properties.size === 0) {
      Object.assign(t, n)
      return
    }
    const i = this._createAnimations(t, n)
    if (i.length) return (xn.add(this._chart, i), !0)
  }
}
function oC(e, t) {
  const n = [],
    i = Object.keys(t)
  for (let s = 0; s < i.length; s++) {
    const a = e[i[s]]
    a && a.active() && n.push(a.wait())
  }
  return Promise.all(n)
}
function aC(e, t) {
  if (!t) return
  let n = e.options
  if (!n) {
    e.options = t
    return
  }
  return (n.$shared && (e.options = n = Object.assign({}, n, { $shared: !1, $animations: {} })), n)
}
function R0(e, t) {
  const n = (e && e.options) || {},
    i = n.reverse,
    s = n.min === void 0 ? t : 0,
    a = n.max === void 0 ? t : 0
  return { start: i ? a : s, end: i ? s : a }
}
function lC(e, t, n) {
  if (n === !1) return !1
  const i = R0(e, n),
    s = R0(t, n)
  return { top: s.end, right: i.end, bottom: s.start, left: i.start }
}
function uC(e) {
  let t, n, i, s
  return (
    St(e) ? ((t = e.top), (n = e.right), (i = e.bottom), (s = e.left)) : (t = n = i = s = e),
    { top: t, right: n, bottom: i, left: s, disabled: e === !1 }
  )
}
function Gv(e, t) {
  const n = [],
    i = e._getSortedDatasetMetas(t)
  let s, a
  for (s = 0, a = i.length; s < a; ++s) n.push(i[s].index)
  return n
}
function F0(e, t, n, i = {}) {
  const s = e.keys,
    a = i.mode === 'single'
  let l, u, f, h
  if (t === null) return
  let p = !1
  for (l = 0, u = s.length; l < u; ++l) {
    if (((f = +s[l]), f === n)) {
      if (((p = !0), i.all)) continue
      break
    }
    ;((h = e.values[f]), Ut(h) && (a || t === 0 || un(t) === un(h)) && (t += h))
  }
  return !p && !i.all ? 0 : t
}
function cC(e, t) {
  const { iScale: n, vScale: i } = t,
    s = n.axis === 'x' ? 'x' : 'y',
    a = i.axis === 'x' ? 'x' : 'y',
    l = Object.keys(e),
    u = new Array(l.length)
  let f, h, p
  for (f = 0, h = l.length; f < h; ++f) ((p = l[f]), (u[f] = { [s]: p, [a]: e[p] }))
  return u
}
function Jc(e, t) {
  const n = e && e.options.stacked
  return n || (n === void 0 && t.stack !== void 0)
}
function fC(e, t, n) {
  return `${e.id}.${t.id}.${n.stack || n.type}`
}
function hC(e) {
  const { min: t, max: n, minDefined: i, maxDefined: s } = e.getUserBounds()
  return { min: i ? t : Number.NEGATIVE_INFINITY, max: s ? n : Number.POSITIVE_INFINITY }
}
function dC(e, t, n) {
  const i = e[t] || (e[t] = {})
  return i[n] || (i[n] = {})
}
function I0(e, t, n, i) {
  for (const s of t.getMatchingVisibleMetas(i).reverse()) {
    const a = e[s.index]
    if ((n && a > 0) || (!n && a < 0)) return s.index
  }
  return null
}
function V0(e, t) {
  const { chart: n, _cachedMeta: i } = e,
    s = n._stacks || (n._stacks = {}),
    { iScale: a, vScale: l, index: u } = i,
    f = a.axis,
    h = l.axis,
    p = fC(a, l, i),
    m = t.length
  let y
  for (let x = 0; x < m; ++x) {
    const _ = t[x],
      { [f]: w, [h]: S } = _,
      k = _._stacks || (_._stacks = {})
    ;((y = k[h] = dC(s, p, w)),
      (y[u] = S),
      (y._top = I0(y, l, !0, i.type)),
      (y._bottom = I0(y, l, !1, i.type)))
    const P = y._visualValues || (y._visualValues = {})
    P[u] = S
  }
}
function tf(e, t) {
  const n = e.scales
  return Object.keys(n)
    .filter(i => n[i].axis === t)
    .shift()
}
function pC(e, t) {
  return di(e, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: 'default',
    type: 'dataset',
  })
}
function mC(e, t, n) {
  return di(e, {
    active: !1,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: n,
    index: t,
    mode: 'default',
    type: 'data',
  })
}
function ws(e, t) {
  const n = e.controller.index,
    i = e.vScale && e.vScale.axis
  if (i) {
    t = t || e._parsed
    for (const s of t) {
      const a = s._stacks
      if (!a || a[i] === void 0 || a[i][n] === void 0) return
      ;(delete a[i][n],
        a[i]._visualValues !== void 0 &&
          a[i]._visualValues[n] !== void 0 &&
          delete a[i]._visualValues[n])
    }
  }
}
const ef = e => e === 'reset' || e === 'none',
  z0 = (e, t) => (t ? e : Object.assign({}, e)),
  gC = (e, t, n) => e && !t.hidden && t._stacked && { keys: Gv(n, !0), values: null }
class pi {
  static defaults = {}
  static datasetElementType = null
  static dataElementType = null
  constructor(t, n) {
    ;((this.chart = t),
      (this._ctx = t.ctx),
      (this.index = n),
      (this._cachedDataOpts = {}),
      (this._cachedMeta = this.getMeta()),
      (this._type = this._cachedMeta.type),
      (this.options = void 0),
      (this._parsing = !1),
      (this._data = void 0),
      (this._objectData = void 0),
      (this._sharedOptions = void 0),
      (this._drawStart = void 0),
      (this._drawCount = void 0),
      (this.enableOptionSharing = !1),
      (this.supportsDecimation = !1),
      (this.$context = void 0),
      (this._syncList = []),
      (this.datasetElementType = new.target.datasetElementType),
      (this.dataElementType = new.target.dataElementType),
      this.initialize())
  }
  initialize() {
    const t = this._cachedMeta
    ;(this.configure(),
      this.linkScales(),
      (t._stacked = Jc(t.vScale, t)),
      this.addElements(),
      this.options.fill &&
        !this.chart.isPluginEnabled('filler') &&
        console.warn(
          "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options"
        ))
  }
  updateIndex(t) {
    ;(this.index !== t && ws(this._cachedMeta), (this.index = t))
  }
  linkScales() {
    const t = this.chart,
      n = this._cachedMeta,
      i = this.getDataset(),
      s = (m, y, x, _) => (m === 'x' ? y : m === 'r' ? _ : x),
      a = (n.xAxisID = yt(i.xAxisID, tf(t, 'x'))),
      l = (n.yAxisID = yt(i.yAxisID, tf(t, 'y'))),
      u = (n.rAxisID = yt(i.rAxisID, tf(t, 'r'))),
      f = n.indexAxis,
      h = (n.iAxisID = s(f, a, l, u)),
      p = (n.vAxisID = s(f, l, a, u))
    ;((n.xScale = this.getScaleForId(a)),
      (n.yScale = this.getScaleForId(l)),
      (n.rScale = this.getScaleForId(u)),
      (n.iScale = this.getScaleForId(h)),
      (n.vScale = this.getScaleForId(p)))
  }
  getDataset() {
    return this.chart.data.datasets[this.index]
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index)
  }
  getScaleForId(t) {
    return this.chart.scales[t]
  }
  _getOtherScale(t) {
    const n = this._cachedMeta
    return t === n.iScale ? n.vScale : n.iScale
  }
  reset() {
    this._update('reset')
  }
  _destroy() {
    const t = this._cachedMeta
    ;(this._data && _0(this._data, this), t._stacked && ws(t))
  }
  _dataCheck() {
    const t = this.getDataset(),
      n = t.data || (t.data = []),
      i = this._data
    if (St(n)) {
      const s = this._cachedMeta
      this._data = cC(n, s)
    } else if (i !== n) {
      if (i) {
        _0(i, this)
        const s = this._cachedMeta
        ;(ws(s), (s._parsed = []))
      }
      ;(n && Object.isExtensible(n) && t6(n, this), (this._syncList = []), (this._data = n))
    }
  }
  addElements() {
    const t = this._cachedMeta
    ;(this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType()))
  }
  buildOrUpdateElements(t) {
    const n = this._cachedMeta,
      i = this.getDataset()
    let s = !1
    this._dataCheck()
    const a = n._stacked
    ;((n._stacked = Jc(n.vScale, n)),
      n.stack !== i.stack && ((s = !0), ws(n), (n.stack = i.stack)),
      this._resyncElements(t),
      (s || a !== n._stacked) && (V0(this, n._parsed), (n._stacked = Jc(n.vScale, n))))
  }
  configure() {
    const t = this.chart.config,
      n = t.datasetScopeKeys(this._type),
      i = t.getOptionScopes(this.getDataset(), n, !0)
    ;((this.options = t.createResolver(i, this.getContext())),
      (this._parsing = this.options.parsing),
      (this._cachedDataOpts = {}))
  }
  parse(t, n) {
    const { _cachedMeta: i, _data: s } = this,
      { iScale: a, _stacked: l } = i,
      u = a.axis
    let f = t === 0 && n === s.length ? !0 : i._sorted,
      h = t > 0 && i._parsed[t - 1],
      p,
      m,
      y
    if (this._parsing === !1) ((i._parsed = s), (i._sorted = !0), (y = s))
    else {
      zt(s[t])
        ? (y = this.parseArrayData(i, s, t, n))
        : St(s[t])
          ? (y = this.parseObjectData(i, s, t, n))
          : (y = this.parsePrimitiveData(i, s, t, n))
      const x = () => m[u] === null || (h && m[u] < h[u])
      for (p = 0; p < n; ++p) ((i._parsed[p + t] = m = y[p]), f && (x() && (f = !1), (h = m)))
      i._sorted = f
    }
    l && V0(this, y)
  }
  parsePrimitiveData(t, n, i, s) {
    const { iScale: a, vScale: l } = t,
      u = a.axis,
      f = l.axis,
      h = a.getLabels(),
      p = a === l,
      m = new Array(s)
    let y, x, _
    for (y = 0, x = s; y < x; ++y)
      ((_ = y + i), (m[y] = { [u]: p || a.parse(h[_], _), [f]: l.parse(n[_], _) }))
    return m
  }
  parseArrayData(t, n, i, s) {
    const { xScale: a, yScale: l } = t,
      u = new Array(s)
    let f, h, p, m
    for (f = 0, h = s; f < h; ++f)
      ((p = f + i), (m = n[p]), (u[f] = { x: a.parse(m[0], p), y: l.parse(m[1], p) }))
    return u
  }
  parseObjectData(t, n, i, s) {
    const { xScale: a, yScale: l } = t,
      { xAxisKey: u = 'x', yAxisKey: f = 'y' } = this._parsing,
      h = new Array(s)
    let p, m, y, x
    for (p = 0, m = s; p < m; ++p)
      ((y = p + i), (x = n[y]), (h[p] = { x: a.parse(ui(x, u), y), y: l.parse(ui(x, f), y) }))
    return h
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t]
  }
  getDataElement(t) {
    return this._cachedMeta.data[t]
  }
  applyStack(t, n, i) {
    const s = this.chart,
      a = this._cachedMeta,
      l = n[t.axis],
      u = { keys: Gv(s, !0), values: n._stacks[t.axis]._visualValues }
    return F0(u, l, a.index, { mode: i })
  }
  updateRangeFromParsed(t, n, i, s) {
    const a = i[n.axis]
    let l = a === null ? NaN : a
    const u = s && i._stacks[n.axis]
    ;(s && u && ((s.values = u), (l = F0(s, a, this._cachedMeta.index))),
      (t.min = Math.min(t.min, l)),
      (t.max = Math.max(t.max, l)))
  }
  getMinMax(t, n) {
    const i = this._cachedMeta,
      s = i._parsed,
      a = i._sorted && t === i.iScale,
      l = s.length,
      u = this._getOtherScale(t),
      f = gC(n, i, this.chart),
      h = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
      { min: p, max: m } = hC(u)
    let y, x
    function _() {
      x = s[y]
      const w = x[u.axis]
      return !Ut(x[t.axis]) || p > w || m < w
    }
    for (y = 0; y < l && !(!_() && (this.updateRangeFromParsed(h, t, x, f), a)); ++y);
    if (a) {
      for (y = l - 1; y >= 0; --y)
        if (!_()) {
          this.updateRangeFromParsed(h, t, x, f)
          break
        }
    }
    return h
  }
  getAllParsedValues(t) {
    const n = this._cachedMeta._parsed,
      i = []
    let s, a, l
    for (s = 0, a = n.length; s < a; ++s) ((l = n[s][t.axis]), Ut(l) && i.push(l))
    return i
  }
  getMaxOverflow() {
    return !1
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta,
      i = n.iScale,
      s = n.vScale,
      a = this.getParsed(t)
    return {
      label: i ? '' + i.getLabelForValue(a[i.axis]) : '',
      value: s ? '' + s.getLabelForValue(a[s.axis]) : '',
    }
  }
  _update(t) {
    const n = this._cachedMeta
    ;(this.update(t || 'default'),
      (n._clip = uC(yt(this.options.clip, lC(n.xScale, n.yScale, this.getMaxOverflow())))))
  }
  update(t) {}
  draw() {
    const t = this._ctx,
      n = this.chart,
      i = this._cachedMeta,
      s = i.data || [],
      a = n.chartArea,
      l = [],
      u = this._drawStart || 0,
      f = this._drawCount || s.length - u,
      h = this.options.drawActiveElementsOnTop
    let p
    for (i.dataset && i.dataset.draw(t, a, u, f), p = u; p < u + f; ++p) {
      const m = s[p]
      m.hidden || (m.active && h ? l.push(m) : m.draw(t, a))
    }
    for (p = 0; p < l.length; ++p) l[p].draw(t, a)
  }
  getStyle(t, n) {
    const i = n ? 'active' : 'default'
    return t === void 0 && this._cachedMeta.dataset
      ? this.resolveDatasetElementOptions(i)
      : this.resolveDataElementOptions(t || 0, i)
  }
  getContext(t, n, i) {
    const s = this.getDataset()
    let a
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const l = this._cachedMeta.data[t]
      ;((a = l.$context || (l.$context = mC(this.getContext(), t, l))),
        (a.parsed = this.getParsed(t)),
        (a.raw = s.data[t]),
        (a.index = a.dataIndex = t))
    } else
      ((a = this.$context || (this.$context = pC(this.chart.getContext(), this.index))),
        (a.dataset = s),
        (a.index = a.datasetIndex = this.index))
    return ((a.active = !!n), (a.mode = i), a)
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t)
  }
  resolveDataElementOptions(t, n) {
    return this._resolveElementOptions(this.dataElementType.id, n, t)
  }
  _resolveElementOptions(t, n = 'default', i) {
    const s = n === 'active',
      a = this._cachedDataOpts,
      l = t + '-' + n,
      u = a[l],
      f = this.enableOptionSharing && Ys(i)
    if (u) return z0(u, f)
    const h = this.chart.config,
      p = h.datasetElementScopeKeys(this._type, t),
      m = s ? [`${t}Hover`, 'hover', t, ''] : [t, ''],
      y = h.getOptionScopes(this.getDataset(), p),
      x = Object.keys(Bt.elements[t]),
      _ = () => this.getContext(i, s, n),
      w = h.resolveNamedOptions(y, x, _, m)
    return (w.$shared && ((w.$shared = f), (a[l] = Object.freeze(z0(w, f)))), w)
  }
  _resolveAnimations(t, n, i) {
    const s = this.chart,
      a = this._cachedDataOpts,
      l = `animation-${n}`,
      u = a[l]
    if (u) return u
    let f
    if (s.options.animation !== !1) {
      const p = this.chart.config,
        m = p.datasetAnimationScopeKeys(this._type, n),
        y = p.getOptionScopes(this.getDataset(), m)
      f = p.createResolver(y, this.getContext(t, i, n))
    }
    const h = new Kv(s, f && f.animations)
    return (f && f._cacheable && (a[l] = Object.freeze(h)), h)
  }
  getSharedOptions(t) {
    if (t.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
  }
  includeOptions(t, n) {
    return !n || ef(t) || this.chart._animationsDisabled
  }
  _getSharedOptions(t, n) {
    const i = this.resolveDataElementOptions(t, n),
      s = this._sharedOptions,
      a = this.getSharedOptions(i),
      l = this.includeOptions(n, a) || a !== s
    return (this.updateSharedOptions(a, n, i), { sharedOptions: a, includeOptions: l })
  }
  updateElement(t, n, i, s) {
    ef(s) ? Object.assign(t, i) : this._resolveAnimations(n, s).update(t, i)
  }
  updateSharedOptions(t, n, i) {
    t && !ef(n) && this._resolveAnimations(void 0, n).update(t, i)
  }
  _setStyle(t, n, i, s) {
    t.active = s
    const a = this.getStyle(n, s)
    this._resolveAnimations(n, i, s).update(t, { options: (!s && this.getSharedOptions(a)) || a })
  }
  removeHoverStyle(t, n, i) {
    this._setStyle(t, i, 'active', !1)
  }
  setHoverStyle(t, n, i) {
    this._setStyle(t, i, 'active', !0)
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset
    t && this._setStyle(t, void 0, 'active', !1)
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset
    t && this._setStyle(t, void 0, 'active', !0)
  }
  _resyncElements(t) {
    const n = this._data,
      i = this._cachedMeta.data
    for (const [u, f, h] of this._syncList) this[u](f, h)
    this._syncList = []
    const s = i.length,
      a = n.length,
      l = Math.min(a, s)
    ;(l && this.parse(0, l),
      a > s ? this._insertElements(s, a - s, t) : a < s && this._removeElements(a, s - a))
  }
  _insertElements(t, n, i = !0) {
    const s = this._cachedMeta,
      a = s.data,
      l = t + n
    let u
    const f = h => {
      for (h.length += n, u = h.length - 1; u >= l; u--) h[u] = h[u - n]
    }
    for (f(a), u = t; u < l; ++u) a[u] = new this.dataElementType()
    ;(this._parsing && f(s._parsed), this.parse(t, n), i && this.updateElements(a, t, n, 'reset'))
  }
  updateElements(t, n, i, s) {}
  _removeElements(t, n) {
    const i = this._cachedMeta
    if (this._parsing) {
      const s = i._parsed.splice(t, n)
      i._stacked && ws(i, s)
    }
    i.data.splice(t, n)
  }
  _sync(t) {
    if (this._parsing) this._syncList.push(t)
    else {
      const [n, i, s] = t
      this[n](i, s)
    }
    this.chart._dataChanges.push([this.index, ...t])
  }
  _onDataPush() {
    const t = arguments.length
    this._sync(['_insertElements', this.getDataset().data.length - t, t])
  }
  _onDataPop() {
    this._sync(['_removeElements', this._cachedMeta.data.length - 1, 1])
  }
  _onDataShift() {
    this._sync(['_removeElements', 0, 1])
  }
  _onDataSplice(t, n) {
    n && this._sync(['_removeElements', t, n])
    const i = arguments.length - 2
    i && this._sync(['_insertElements', t, i])
  }
  _onDataUnshift() {
    this._sync(['_insertElements', 0, arguments.length])
  }
}
function yC(e, t) {
  if (!e._cache.$bar) {
    const n = e.getMatchingVisibleMetas(t)
    let i = []
    for (let s = 0, a = n.length; s < a; s++) i = i.concat(n[s].controller.getAllParsedValues(e))
    e._cache.$bar = Tv(i.sort((s, a) => s - a))
  }
  return e._cache.$bar
}
function vC(e) {
  const t = e.iScale,
    n = yC(t, e.type)
  let i = t._length,
    s,
    a,
    l,
    u
  const f = () => {
    l === 32767 || l === -32768 || (Ys(u) && (i = Math.min(i, Math.abs(l - u) || i)), (u = l))
  }
  for (s = 0, a = n.length; s < a; ++s) ((l = t.getPixelForValue(n[s])), f())
  for (u = void 0, s = 0, a = t.ticks.length; s < a; ++s) ((l = t.getPixelForTick(s)), f())
  return i
}
function xC(e, t, n, i) {
  const s = n.barThickness
  let a, l
  return (
    wt(s) ? ((a = t.min * n.categoryPercentage), (l = n.barPercentage)) : ((a = s * i), (l = 1)),
    { chunk: a / i, ratio: l, start: t.pixels[e] - a / 2 }
  )
}
function _C(e, t, n, i) {
  const s = t.pixels,
    a = s[e]
  let l = e > 0 ? s[e - 1] : null,
    u = e < s.length - 1 ? s[e + 1] : null
  const f = n.categoryPercentage
  ;(l === null && (l = a - (u === null ? t.end - t.start : u - a)), u === null && (u = a + a - l))
  const h = a - ((a - Math.min(l, u)) / 2) * f
  return { chunk: ((Math.abs(u - l) / 2) * f) / i, ratio: n.barPercentage, start: h }
}
function wC(e, t, n, i) {
  const s = n.parse(e[0], i),
    a = n.parse(e[1], i),
    l = Math.min(s, a),
    u = Math.max(s, a)
  let f = l,
    h = u
  ;(Math.abs(l) > Math.abs(u) && ((f = u), (h = l)),
    (t[n.axis] = h),
    (t._custom = { barStart: f, barEnd: h, start: s, end: a, min: l, max: u }))
}
function qv(e, t, n, i) {
  return (zt(e) ? wC(e, t, n, i) : (t[n.axis] = n.parse(e, i)), t)
}
function B0(e, t, n, i) {
  const s = e.iScale,
    a = e.vScale,
    l = s.getLabels(),
    u = s === a,
    f = []
  let h, p, m, y
  for (h = n, p = n + i; h < p; ++h)
    ((y = t[h]), (m = {}), (m[s.axis] = u || s.parse(l[h], h)), f.push(qv(y, m, a, h)))
  return f
}
function nf(e) {
  return e && e.barStart !== void 0 && e.barEnd !== void 0
}
function SC(e, t, n) {
  return e !== 0 ? un(e) : (t.isHorizontal() ? 1 : -1) * (t.min >= n ? 1 : -1)
}
function bC(e) {
  let t, n, i, s, a
  return (
    e.horizontal
      ? ((t = e.base > e.x), (n = 'left'), (i = 'right'))
      : ((t = e.base < e.y), (n = 'bottom'), (i = 'top')),
    t ? ((s = 'end'), (a = 'start')) : ((s = 'start'), (a = 'end')),
    { start: n, end: i, reverse: t, top: s, bottom: a }
  )
}
function kC(e, t, n, i) {
  let s = t.borderSkipped
  const a = {}
  if (!s) {
    e.borderSkipped = a
    return
  }
  if (s === !0) {
    e.borderSkipped = { top: !0, right: !0, bottom: !0, left: !0 }
    return
  }
  const { start: l, end: u, reverse: f, top: h, bottom: p } = bC(e)
  ;(s === 'middle' &&
    n &&
    ((e.enableBorderRadius = !0),
    (n._top || 0) === i
      ? (s = h)
      : (n._bottom || 0) === i
        ? (s = p)
        : ((a[N0(p, l, u, f)] = !0), (s = h))),
    (a[N0(s, l, u, f)] = !0),
    (e.borderSkipped = a))
}
function N0(e, t, n, i) {
  return (i ? ((e = PC(e, t, n)), (e = j0(e, n, t))) : (e = j0(e, t, n)), e)
}
function PC(e, t, n) {
  return e === t ? n : e === n ? t : e
}
function j0(e, t, n) {
  return e === 'start' ? t : e === 'end' ? n : e
}
function CC(e, { inflateAmount: t }, n) {
  e.inflateAmount = t === 'auto' ? (n === 1 ? 0.33 : 0) : t
}
class MC extends pi {
  static id = 'bar'
  static defaults = {
    datasetElementType: !1,
    dataElementType: 'bar',
    categoryPercentage: 0.8,
    barPercentage: 0.9,
    grouped: !0,
    animations: { numbers: { type: 'number', properties: ['x', 'y', 'base', 'width', 'height'] } },
  }
  static overrides = {
    scales: {
      _index_: { type: 'category', offset: !0, grid: { offset: !0 } },
      _value_: { type: 'linear', beginAtZero: !0 },
    },
  }
  parsePrimitiveData(t, n, i, s) {
    return B0(t, n, i, s)
  }
  parseArrayData(t, n, i, s) {
    return B0(t, n, i, s)
  }
  parseObjectData(t, n, i, s) {
    const { iScale: a, vScale: l } = t,
      { xAxisKey: u = 'x', yAxisKey: f = 'y' } = this._parsing,
      h = a.axis === 'x' ? u : f,
      p = l.axis === 'x' ? u : f,
      m = []
    let y, x, _, w
    for (y = i, x = i + s; y < x; ++y)
      ((w = n[y]), (_ = {}), (_[a.axis] = a.parse(ui(w, h), y)), m.push(qv(ui(w, p), _, l, y)))
    return m
  }
  updateRangeFromParsed(t, n, i, s) {
    super.updateRangeFromParsed(t, n, i, s)
    const a = i._custom
    a &&
      n === this._cachedMeta.vScale &&
      ((t.min = Math.min(t.min, a.min)), (t.max = Math.max(t.max, a.max)))
  }
  getMaxOverflow() {
    return 0
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta,
      { iScale: i, vScale: s } = n,
      a = this.getParsed(t),
      l = a._custom,
      u = nf(l) ? '[' + l.start + ', ' + l.end + ']' : '' + s.getLabelForValue(a[s.axis])
    return { label: '' + i.getLabelForValue(a[i.axis]), value: u }
  }
  initialize() {
    ;((this.enableOptionSharing = !0), super.initialize())
    const t = this._cachedMeta
    t.stack = this.getDataset().stack
  }
  update(t) {
    const n = this._cachedMeta
    this.updateElements(n.data, 0, n.data.length, t)
  }
  updateElements(t, n, i, s) {
    const a = s === 'reset',
      {
        index: l,
        _cachedMeta: { vScale: u },
      } = this,
      f = u.getBasePixel(),
      h = u.isHorizontal(),
      p = this._getRuler(),
      { sharedOptions: m, includeOptions: y } = this._getSharedOptions(n, s)
    for (let x = n; x < n + i; x++) {
      const _ = this.getParsed(x),
        w = a || wt(_[u.axis]) ? { base: f, head: f } : this._calculateBarValuePixels(x),
        S = this._calculateBarIndexPixels(x, p),
        k = (_._stacks || {})[u.axis],
        P = {
          horizontal: h,
          base: w.base,
          enableBorderRadius: !k || nf(_._custom) || l === k._top || l === k._bottom,
          x: h ? w.head : S.center,
          y: h ? S.center : w.head,
          height: h ? S.size : Math.abs(w.size),
          width: h ? Math.abs(w.size) : S.size,
        }
      y && (P.options = m || this.resolveDataElementOptions(x, t[x].active ? 'active' : s))
      const C = P.options || t[x].options
      ;(kC(P, C, k, l), CC(P, C, p.ratio), this.updateElement(t[x], x, P, s))
    }
  }
  _getStacks(t, n) {
    const { iScale: i } = this._cachedMeta,
      s = i.getMatchingVisibleMetas(this._type).filter(p => p.controller.options.grouped),
      a = i.options.stacked,
      l = [],
      u = this._cachedMeta.controller.getParsed(n),
      f = u && u[i.axis],
      h = p => {
        const m = p._parsed.find(x => x[i.axis] === f),
          y = m && m[p.vScale.axis]
        if (wt(y) || isNaN(y)) return !0
      }
    for (const p of s)
      if (
        !(n !== void 0 && h(p)) &&
        ((a === !1 || l.indexOf(p.stack) === -1 || (a === void 0 && p.stack === void 0)) &&
          l.push(p.stack),
        p.index === t)
      )
        break
    return (l.length || l.push(void 0), l)
  }
  _getStackCount(t) {
    return this._getStacks(void 0, t).length
  }
  _getAxisCount() {
    return this._getAxis().length
  }
  getFirstScaleIdForIndexAxis() {
    const t = this.chart.scales,
      n = this.chart.options.indexAxis
    return Object.keys(t)
      .filter(i => t[i].axis === n)
      .shift()
  }
  _getAxis() {
    const t = {},
      n = this.getFirstScaleIdForIndexAxis()
    for (const i of this.chart.data.datasets)
      t[yt(this.chart.options.indexAxis === 'x' ? i.xAxisID : i.yAxisID, n)] = !0
    return Object.keys(t)
  }
  _getStackIndex(t, n, i) {
    const s = this._getStacks(t, i),
      a = n !== void 0 ? s.indexOf(n) : -1
    return a === -1 ? s.length - 1 : a
  }
  _getRuler() {
    const t = this.options,
      n = this._cachedMeta,
      i = n.iScale,
      s = []
    let a, l
    for (a = 0, l = n.data.length; a < l; ++a)
      s.push(i.getPixelForValue(this.getParsed(a)[i.axis], a))
    const u = t.barThickness
    return {
      min: u || vC(n),
      pixels: s,
      start: i._startPixel,
      end: i._endPixel,
      stackCount: this._getStackCount(),
      scale: i,
      grouped: t.grouped,
      ratio: u ? 1 : t.categoryPercentage * t.barPercentage,
    }
  }
  _calculateBarValuePixels(t) {
    const {
        _cachedMeta: { vScale: n, _stacked: i, index: s },
        options: { base: a, minBarLength: l },
      } = this,
      u = a || 0,
      f = this.getParsed(t),
      h = f._custom,
      p = nf(h)
    let m = f[n.axis],
      y = 0,
      x = i ? this.applyStack(n, f, i) : m,
      _,
      w
    ;(x !== m && ((y = x - m), (x = m)),
      p &&
        ((m = h.barStart),
        (x = h.barEnd - h.barStart),
        m !== 0 && un(m) !== un(h.barEnd) && (y = 0),
        (y += m)))
    const S = !wt(a) && !p ? a : y
    let k = n.getPixelForValue(S)
    if (
      (this.chart.getDataVisibility(t) ? (_ = n.getPixelForValue(y + x)) : (_ = k),
      (w = _ - k),
      Math.abs(w) < l)
    ) {
      ;((w = SC(w, n, u) * l), m === u && (k -= w / 2))
      const P = n.getPixelForDecimal(0),
        C = n.getPixelForDecimal(1),
        T = Math.min(P, C),
        E = Math.max(P, C)
      ;((k = Math.max(Math.min(k, E), T)),
        (_ = k + w),
        i &&
          !p &&
          (f._stacks[n.axis]._visualValues[s] = n.getValueForPixel(_) - n.getValueForPixel(k)))
    }
    if (k === n.getPixelForValue(u)) {
      const P = (un(w) * n.getLineWidthForValue(u)) / 2
      ;((k += P), (w -= P))
    }
    return { size: w, base: k, head: _, center: _ + w / 2 }
  }
  _calculateBarIndexPixels(t, n) {
    const i = n.scale,
      s = this.options,
      a = s.skipNull,
      l = yt(s.maxBarThickness, 1 / 0)
    let u, f
    const h = this._getAxisCount()
    if (n.grouped) {
      const p = a ? this._getStackCount(t) : n.stackCount,
        m = s.barThickness === 'flex' ? _C(t, n, s, p * h) : xC(t, n, s, p * h),
        y =
          this.chart.options.indexAxis === 'x'
            ? this.getDataset().xAxisID
            : this.getDataset().yAxisID,
        x = this._getAxis().indexOf(yt(y, this.getFirstScaleIdForIndexAxis())),
        _ = this._getStackIndex(this.index, this._cachedMeta.stack, a ? t : void 0) + x
      ;((u = m.start + m.chunk * _ + m.chunk / 2), (f = Math.min(l, m.chunk * m.ratio)))
    } else
      ((u = i.getPixelForValue(this.getParsed(t)[i.axis], t)), (f = Math.min(l, n.min * n.ratio)))
    return { base: u - f / 2, head: u + f / 2, center: u, size: f }
  }
  draw() {
    const t = this._cachedMeta,
      n = t.vScale,
      i = t.data,
      s = i.length
    let a = 0
    for (; a < s; ++a) this.getParsed(a)[n.axis] !== null && !i[a].hidden && i[a].draw(this._ctx)
  }
}
class TC extends pi {
  static id = 'bubble'
  static defaults = {
    datasetElementType: !1,
    dataElementType: 'point',
    animations: { numbers: { type: 'number', properties: ['x', 'y', 'borderWidth', 'radius'] } },
  }
  static overrides = { scales: { x: { type: 'linear' }, y: { type: 'linear' } } }
  initialize() {
    ;((this.enableOptionSharing = !0), super.initialize())
  }
  parsePrimitiveData(t, n, i, s) {
    const a = super.parsePrimitiveData(t, n, i, s)
    for (let l = 0; l < a.length; l++) a[l]._custom = this.resolveDataElementOptions(l + i).radius
    return a
  }
  parseArrayData(t, n, i, s) {
    const a = super.parseArrayData(t, n, i, s)
    for (let l = 0; l < a.length; l++) {
      const u = n[i + l]
      a[l]._custom = yt(u[2], this.resolveDataElementOptions(l + i).radius)
    }
    return a
  }
  parseObjectData(t, n, i, s) {
    const a = super.parseObjectData(t, n, i, s)
    for (let l = 0; l < a.length; l++) {
      const u = n[i + l]
      a[l]._custom = yt(u && u.r && +u.r, this.resolveDataElementOptions(l + i).radius)
    }
    return a
  }
  getMaxOverflow() {
    const t = this._cachedMeta.data
    let n = 0
    for (let i = t.length - 1; i >= 0; --i)
      n = Math.max(n, t[i].size(this.resolveDataElementOptions(i)) / 2)
    return n > 0 && n
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta,
      i = this.chart.data.labels || [],
      { xScale: s, yScale: a } = n,
      l = this.getParsed(t),
      u = s.getLabelForValue(l.x),
      f = a.getLabelForValue(l.y),
      h = l._custom
    return { label: i[t] || '', value: '(' + u + ', ' + f + (h ? ', ' + h : '') + ')' }
  }
  update(t) {
    const n = this._cachedMeta.data
    this.updateElements(n, 0, n.length, t)
  }
  updateElements(t, n, i, s) {
    const a = s === 'reset',
      { iScale: l, vScale: u } = this._cachedMeta,
      { sharedOptions: f, includeOptions: h } = this._getSharedOptions(n, s),
      p = l.axis,
      m = u.axis
    for (let y = n; y < n + i; y++) {
      const x = t[y],
        _ = !a && this.getParsed(y),
        w = {},
        S = (w[p] = a ? l.getPixelForDecimal(0.5) : l.getPixelForValue(_[p])),
        k = (w[m] = a ? u.getBasePixel() : u.getPixelForValue(_[m]))
      ;((w.skip = isNaN(S) || isNaN(k)),
        h &&
          ((w.options = f || this.resolveDataElementOptions(y, x.active ? 'active' : s)),
          a && (w.options.radius = 0)),
        this.updateElement(x, y, w, s))
    }
  }
  resolveDataElementOptions(t, n) {
    const i = this.getParsed(t)
    let s = super.resolveDataElementOptions(t, n)
    s.$shared && (s = Object.assign({}, s, { $shared: !1 }))
    const a = s.radius
    return (n !== 'active' && (s.radius = 0), (s.radius += yt(i && i._custom, a)), s)
  }
}
function EC(e, t, n) {
  let i = 1,
    s = 1,
    a = 0,
    l = 0
  if (t < Ft) {
    const u = e,
      f = u + t,
      h = Math.cos(u),
      p = Math.sin(u),
      m = Math.cos(f),
      y = Math.sin(f),
      x = (C, T, E) => (Xs(C, u, f, !0) ? 1 : Math.max(T, T * n, E, E * n)),
      _ = (C, T, E) => (Xs(C, u, f, !0) ? -1 : Math.min(T, T * n, E, E * n)),
      w = x(0, h, m),
      S = x(Kt, p, y),
      k = _(Pt, h, m),
      P = _(Pt + Kt, p, y)
    ;((i = (w - k) / 2), (s = (S - P) / 2), (a = -(w + k) / 2), (l = -(S + P) / 2))
  }
  return { ratioX: i, ratioY: s, offsetX: a, offsetY: l }
}
class Mh extends pi {
  static id = 'doughnut'
  static defaults = {
    datasetElementType: !1,
    dataElementType: 'arc',
    animation: { animateRotate: !0, animateScale: !1 },
    animations: {
      numbers: {
        type: 'number',
        properties: [
          'circumference',
          'endAngle',
          'innerRadius',
          'outerRadius',
          'startAngle',
          'x',
          'y',
          'offset',
          'borderWidth',
          'spacing',
        ],
      },
    },
    cutout: '50%',
    rotation: 0,
    circumference: 360,
    radius: '100%',
    spacing: 0,
    indexAxis: 'r',
  }
  static descriptors = {
    _scriptable: t => t !== 'spacing',
    _indexable: t =>
      t !== 'spacing' && !t.startsWith('borderDash') && !t.startsWith('hoverBorderDash'),
  }
  static overrides = {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels(t) {
            const n = t.data
            if (n.labels.length && n.datasets.length) {
              const {
                labels: { pointStyle: i, color: s },
              } = t.legend.options
              return n.labels.map((a, l) => {
                const f = t.getDatasetMeta(0).controller.getStyle(l)
                return {
                  text: a,
                  fillStyle: f.backgroundColor,
                  strokeStyle: f.borderColor,
                  fontColor: s,
                  lineWidth: f.borderWidth,
                  pointStyle: i,
                  hidden: !t.getDataVisibility(l),
                  index: l,
                }
              })
            }
            return []
          },
        },
        onClick(t, n, i) {
          ;(i.chart.toggleDataVisibility(n.index), i.chart.update())
        },
      },
    },
  }
  constructor(t, n) {
    ;(super(t, n),
      (this.enableOptionSharing = !0),
      (this.innerRadius = void 0),
      (this.outerRadius = void 0),
      (this.offsetX = void 0),
      (this.offsetY = void 0))
  }
  linkScales() {}
  parse(t, n) {
    const i = this.getDataset().data,
      s = this._cachedMeta
    if (this._parsing === !1) s._parsed = i
    else {
      let a = f => +i[f]
      if (St(i[t])) {
        const { key: f = 'value' } = this._parsing
        a = h => +ui(i[h], f)
      }
      let l, u
      for (l = t, u = t + n; l < u; ++l) s._parsed[l] = a(l)
    }
  }
  _getRotation() {
    return Ze(this.options.rotation - 90)
  }
  _getCircumference() {
    return Ze(this.options.circumference)
  }
  _getRotationExtents() {
    let t = Ft,
      n = -Ft
    for (let i = 0; i < this.chart.data.datasets.length; ++i)
      if (this.chart.isDatasetVisible(i) && this.chart.getDatasetMeta(i).type === this._type) {
        const s = this.chart.getDatasetMeta(i).controller,
          a = s._getRotation(),
          l = s._getCircumference()
        ;((t = Math.min(t, a)), (n = Math.max(n, a + l)))
      }
    return { rotation: t, circumference: n - t }
  }
  update(t) {
    const n = this.chart,
      { chartArea: i } = n,
      s = this._cachedMeta,
      a = s.data,
      l = this.getMaxBorderWidth() + this.getMaxOffset(a) + this.options.spacing,
      u = Math.max((Math.min(i.width, i.height) - l) / 2, 0),
      f = Math.min(BP(this.options.cutout, u), 1),
      h = this._getRingWeight(this.index),
      { circumference: p, rotation: m } = this._getRotationExtents(),
      { ratioX: y, ratioY: x, offsetX: _, offsetY: w } = EC(m, p, f),
      S = (i.width - l) / y,
      k = (i.height - l) / x,
      P = Math.max(Math.min(S, k) / 2, 0),
      C = bv(this.options.radius, P),
      T = Math.max(C * f, 0),
      E = (C - T) / this._getVisibleDatasetWeightTotal()
    ;((this.offsetX = _ * C),
      (this.offsetY = w * C),
      (s.total = this.calculateTotal()),
      (this.outerRadius = C - E * this._getRingWeightOffset(this.index)),
      (this.innerRadius = Math.max(this.outerRadius - E * h, 0)),
      this.updateElements(a, 0, a.length, t))
  }
  _circumference(t, n) {
    const i = this.options,
      s = this._cachedMeta,
      a = this._getCircumference()
    return (n && i.animation.animateRotate) ||
      !this.chart.getDataVisibility(t) ||
      s._parsed[t] === null ||
      s.data[t].hidden
      ? 0
      : this.calculateCircumference((s._parsed[t] * a) / Ft)
  }
  updateElements(t, n, i, s) {
    const a = s === 'reset',
      l = this.chart,
      u = l.chartArea,
      h = l.options.animation,
      p = (u.left + u.right) / 2,
      m = (u.top + u.bottom) / 2,
      y = a && h.animateScale,
      x = y ? 0 : this.innerRadius,
      _ = y ? 0 : this.outerRadius,
      { sharedOptions: w, includeOptions: S } = this._getSharedOptions(n, s)
    let k = this._getRotation(),
      P
    for (P = 0; P < n; ++P) k += this._circumference(P, a)
    for (P = n; P < n + i; ++P) {
      const C = this._circumference(P, a),
        T = t[P],
        E = {
          x: p + this.offsetX,
          y: m + this.offsetY,
          startAngle: k,
          endAngle: k + C,
          circumference: C,
          outerRadius: _,
          innerRadius: x,
        }
      ;(S && (E.options = w || this.resolveDataElementOptions(P, T.active ? 'active' : s)),
        (k += C),
        this.updateElement(T, P, E, s))
    }
  }
  calculateTotal() {
    const t = this._cachedMeta,
      n = t.data
    let i = 0,
      s
    for (s = 0; s < n.length; s++) {
      const a = t._parsed[s]
      a !== null &&
        !isNaN(a) &&
        this.chart.getDataVisibility(s) &&
        !n[s].hidden &&
        (i += Math.abs(a))
    }
    return i
  }
  calculateCircumference(t) {
    const n = this._cachedMeta.total
    return n > 0 && !isNaN(t) ? Ft * (Math.abs(t) / n) : 0
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta,
      i = this.chart,
      s = i.data.labels || [],
      a = io(n._parsed[t], i.options.locale)
    return { label: s[t] || '', value: a }
  }
  getMaxBorderWidth(t) {
    let n = 0
    const i = this.chart
    let s, a, l, u, f
    if (!t) {
      for (s = 0, a = i.data.datasets.length; s < a; ++s)
        if (i.isDatasetVisible(s)) {
          ;((l = i.getDatasetMeta(s)), (t = l.data), (u = l.controller))
          break
        }
    }
    if (!t) return 0
    for (s = 0, a = t.length; s < a; ++s)
      ((f = u.resolveDataElementOptions(s)),
        f.borderAlign !== 'inner' && (n = Math.max(n, f.borderWidth || 0, f.hoverBorderWidth || 0)))
    return n
  }
  getMaxOffset(t) {
    let n = 0
    for (let i = 0, s = t.length; i < s; ++i) {
      const a = this.resolveDataElementOptions(i)
      n = Math.max(n, a.offset || 0, a.hoverOffset || 0)
    }
    return n
  }
  _getRingWeightOffset(t) {
    let n = 0
    for (let i = 0; i < t; ++i) this.chart.isDatasetVisible(i) && (n += this._getRingWeight(i))
    return n
  }
  _getRingWeight(t) {
    return Math.max(yt(this.chart.data.datasets[t].weight, 1), 0)
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1
  }
}
class OC extends pi {
  static id = 'line'
  static defaults = {
    datasetElementType: 'line',
    dataElementType: 'point',
    showLine: !0,
    spanGaps: !1,
  }
  static overrides = { scales: { _index_: { type: 'category' }, _value_: { type: 'linear' } } }
  initialize() {
    ;((this.enableOptionSharing = !0), (this.supportsDecimation = !0), super.initialize())
  }
  update(t) {
    const n = this._cachedMeta,
      { dataset: i, data: s = [], _dataset: a } = n,
      l = this.chart._animationsDisabled
    let { start: u, count: f } = Lv(n, s, l)
    ;((this._drawStart = u),
      (this._drawCount = f),
      Dv(n) && ((u = 0), (f = s.length)),
      (i._chart = this.chart),
      (i._datasetIndex = this.index),
      (i._decimated = !!a._decimated),
      (i.points = s))
    const h = this.resolveDatasetElementOptions(t)
    ;(this.options.showLine || (h.borderWidth = 0),
      (h.segment = this.options.segment),
      this.updateElement(i, void 0, { animated: !l, options: h }, t),
      this.updateElements(s, u, f, t))
  }
  updateElements(t, n, i, s) {
    const a = s === 'reset',
      { iScale: l, vScale: u, _stacked: f, _dataset: h } = this._cachedMeta,
      { sharedOptions: p, includeOptions: m } = this._getSharedOptions(n, s),
      y = l.axis,
      x = u.axis,
      { spanGaps: _, segment: w } = this.options,
      S = Cr(_) ? _ : Number.POSITIVE_INFINITY,
      k = this.chart._animationsDisabled || a || s === 'none',
      P = n + i,
      C = t.length
    let T = n > 0 && this.getParsed(n - 1)
    for (let E = 0; E < C; ++E) {
      const R = t[E],
        A = k ? R : {}
      if (E < n || E >= P) {
        A.skip = !0
        continue
      }
      const V = this.getParsed(E),
        j = wt(V[x]),
        W = (A[y] = l.getPixelForValue(V[y], E)),
        N = (A[x] =
          a || j ? u.getBasePixel() : u.getPixelForValue(f ? this.applyStack(u, V, f) : V[x], E))
      ;((A.skip = isNaN(W) || isNaN(N) || j),
        (A.stop = E > 0 && Math.abs(V[y] - T[y]) > S),
        w && ((A.parsed = V), (A.raw = h.data[E])),
        m && (A.options = p || this.resolveDataElementOptions(E, R.active ? 'active' : s)),
        k || this.updateElement(R, E, A, s),
        (T = V))
    }
  }
  getMaxOverflow() {
    const t = this._cachedMeta,
      n = t.dataset,
      i = (n.options && n.options.borderWidth) || 0,
      s = t.data || []
    if (!s.length) return i
    const a = s[0].size(this.resolveDataElementOptions(0)),
      l = s[s.length - 1].size(this.resolveDataElementOptions(s.length - 1))
    return Math.max(i, a, l) / 2
  }
  draw() {
    const t = this._cachedMeta
    ;(t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw())
  }
}
class Qv extends pi {
  static id = 'polarArea'
  static defaults = {
    dataElementType: 'arc',
    animation: { animateRotate: !0, animateScale: !0 },
    animations: {
      numbers: {
        type: 'number',
        properties: ['x', 'y', 'startAngle', 'endAngle', 'innerRadius', 'outerRadius'],
      },
    },
    indexAxis: 'r',
    startAngle: 0,
  }
  static overrides = {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels(t) {
            const n = t.data
            if (n.labels.length && n.datasets.length) {
              const {
                labels: { pointStyle: i, color: s },
              } = t.legend.options
              return n.labels.map((a, l) => {
                const f = t.getDatasetMeta(0).controller.getStyle(l)
                return {
                  text: a,
                  fillStyle: f.backgroundColor,
                  strokeStyle: f.borderColor,
                  fontColor: s,
                  lineWidth: f.borderWidth,
                  pointStyle: i,
                  hidden: !t.getDataVisibility(l),
                  index: l,
                }
              })
            }
            return []
          },
        },
        onClick(t, n, i) {
          ;(i.chart.toggleDataVisibility(n.index), i.chart.update())
        },
      },
    },
    scales: {
      r: {
        type: 'radialLinear',
        angleLines: { display: !1 },
        beginAtZero: !0,
        grid: { circular: !0 },
        pointLabels: { display: !1 },
        startAngle: 0,
      },
    },
  }
  constructor(t, n) {
    ;(super(t, n), (this.innerRadius = void 0), (this.outerRadius = void 0))
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta,
      i = this.chart,
      s = i.data.labels || [],
      a = io(n._parsed[t].r, i.options.locale)
    return { label: s[t] || '', value: a }
  }
  parseObjectData(t, n, i, s) {
    return Nv.bind(this)(t, n, i, s)
  }
  update(t) {
    const n = this._cachedMeta.data
    ;(this._updateRadius(), this.updateElements(n, 0, n.length, t))
  }
  getMinMax() {
    const t = this._cachedMeta,
      n = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY }
    return (
      t.data.forEach((i, s) => {
        const a = this.getParsed(s).r
        !isNaN(a) &&
          this.chart.getDataVisibility(s) &&
          (a < n.min && (n.min = a), a > n.max && (n.max = a))
      }),
      n
    )
  }
  _updateRadius() {
    const t = this.chart,
      n = t.chartArea,
      i = t.options,
      s = Math.min(n.right - n.left, n.bottom - n.top),
      a = Math.max(s / 2, 0),
      l = Math.max(i.cutoutPercentage ? (a / 100) * i.cutoutPercentage : 1, 0),
      u = (a - l) / t.getVisibleDatasetCount()
    ;((this.outerRadius = a - u * this.index), (this.innerRadius = this.outerRadius - u))
  }
  updateElements(t, n, i, s) {
    const a = s === 'reset',
      l = this.chart,
      f = l.options.animation,
      h = this._cachedMeta.rScale,
      p = h.xCenter,
      m = h.yCenter,
      y = h.getIndexAngle(0) - 0.5 * Pt
    let x = y,
      _
    const w = 360 / this.countVisibleElements()
    for (_ = 0; _ < n; ++_) x += this._computeAngle(_, s, w)
    for (_ = n; _ < n + i; _++) {
      const S = t[_]
      let k = x,
        P = x + this._computeAngle(_, s, w),
        C = l.getDataVisibility(_) ? h.getDistanceFromCenterForValue(this.getParsed(_).r) : 0
      ;((x = P), a && (f.animateScale && (C = 0), f.animateRotate && (k = P = y)))
      const T = {
        x: p,
        y: m,
        innerRadius: 0,
        outerRadius: C,
        startAngle: k,
        endAngle: P,
        options: this.resolveDataElementOptions(_, S.active ? 'active' : s),
      }
      this.updateElement(S, _, T, s)
    }
  }
  countVisibleElements() {
    const t = this._cachedMeta
    let n = 0
    return (
      t.data.forEach((i, s) => {
        !isNaN(this.getParsed(s).r) && this.chart.getDataVisibility(s) && n++
      }),
      n
    )
  }
  _computeAngle(t, n, i) {
    return this.chart.getDataVisibility(t) ? Ze(this.resolveDataElementOptions(t, n).angle || i) : 0
  }
}
class LC extends Mh {
  static id = 'pie'
  static defaults = { cutout: 0, rotation: 0, circumference: 360, radius: '100%' }
}
class DC extends pi {
  static id = 'radar'
  static defaults = {
    datasetElementType: 'line',
    dataElementType: 'point',
    indexAxis: 'r',
    showLine: !0,
    elements: { line: { fill: 'start' } },
  }
  static overrides = { aspectRatio: 1, scales: { r: { type: 'radialLinear' } } }
  getLabelAndValue(t) {
    const n = this._cachedMeta.vScale,
      i = this.getParsed(t)
    return { label: n.getLabels()[t], value: '' + n.getLabelForValue(i[n.axis]) }
  }
  parseObjectData(t, n, i, s) {
    return Nv.bind(this)(t, n, i, s)
  }
  update(t) {
    const n = this._cachedMeta,
      i = n.dataset,
      s = n.data || [],
      a = n.iScale.getLabels()
    if (((i.points = s), t !== 'resize')) {
      const l = this.resolveDatasetElementOptions(t)
      this.options.showLine || (l.borderWidth = 0)
      const u = { _loop: !0, _fullLoop: a.length === s.length, options: l }
      this.updateElement(i, void 0, u, t)
    }
    this.updateElements(s, 0, s.length, t)
  }
  updateElements(t, n, i, s) {
    const a = this._cachedMeta.rScale,
      l = s === 'reset'
    for (let u = n; u < n + i; u++) {
      const f = t[u],
        h = this.resolveDataElementOptions(u, f.active ? 'active' : s),
        p = a.getPointPositionForValue(u, this.getParsed(u).r),
        m = l ? a.xCenter : p.x,
        y = l ? a.yCenter : p.y,
        x = { x: m, y, angle: p.angle, skip: isNaN(m) || isNaN(y), options: h }
      this.updateElement(f, u, x, s)
    }
  }
}
class AC extends pi {
  static id = 'scatter'
  static defaults = { datasetElementType: !1, dataElementType: 'point', showLine: !1, fill: !1 }
  static overrides = {
    interaction: { mode: 'point' },
    scales: { x: { type: 'linear' }, y: { type: 'linear' } },
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta,
      i = this.chart.data.labels || [],
      { xScale: s, yScale: a } = n,
      l = this.getParsed(t),
      u = s.getLabelForValue(l.x),
      f = a.getLabelForValue(l.y)
    return { label: i[t] || '', value: '(' + u + ', ' + f + ')' }
  }
  update(t) {
    const n = this._cachedMeta,
      { data: i = [] } = n,
      s = this.chart._animationsDisabled
    let { start: a, count: l } = Lv(n, i, s)
    if (
      ((this._drawStart = a),
      (this._drawCount = l),
      Dv(n) && ((a = 0), (l = i.length)),
      this.options.showLine)
    ) {
      this.datasetElementType || this.addElements()
      const { dataset: u, _dataset: f } = n
      ;((u._chart = this.chart),
        (u._datasetIndex = this.index),
        (u._decimated = !!f._decimated),
        (u.points = i))
      const h = this.resolveDatasetElementOptions(t)
      ;((h.segment = this.options.segment),
        this.updateElement(u, void 0, { animated: !s, options: h }, t))
    } else this.datasetElementType && (delete n.dataset, (this.datasetElementType = !1))
    this.updateElements(i, a, l, t)
  }
  addElements() {
    const { showLine: t } = this.options
    ;(!this.datasetElementType &&
      t &&
      (this.datasetElementType = this.chart.registry.getElement('line')),
      super.addElements())
  }
  updateElements(t, n, i, s) {
    const a = s === 'reset',
      { iScale: l, vScale: u, _stacked: f, _dataset: h } = this._cachedMeta,
      p = this.resolveDataElementOptions(n, s),
      m = this.getSharedOptions(p),
      y = this.includeOptions(s, m),
      x = l.axis,
      _ = u.axis,
      { spanGaps: w, segment: S } = this.options,
      k = Cr(w) ? w : Number.POSITIVE_INFINITY,
      P = this.chart._animationsDisabled || a || s === 'none'
    let C = n > 0 && this.getParsed(n - 1)
    for (let T = n; T < n + i; ++T) {
      const E = t[T],
        R = this.getParsed(T),
        A = P ? E : {},
        V = wt(R[_]),
        j = (A[x] = l.getPixelForValue(R[x], T)),
        W = (A[_] =
          a || V ? u.getBasePixel() : u.getPixelForValue(f ? this.applyStack(u, R, f) : R[_], T))
      ;((A.skip = isNaN(j) || isNaN(W) || V),
        (A.stop = T > 0 && Math.abs(R[x] - C[x]) > k),
        S && ((A.parsed = R), (A.raw = h.data[T])),
        y && (A.options = m || this.resolveDataElementOptions(T, E.active ? 'active' : s)),
        P || this.updateElement(E, T, A, s),
        (C = R))
    }
    this.updateSharedOptions(m, s, p)
  }
  getMaxOverflow() {
    const t = this._cachedMeta,
      n = t.data || []
    if (!this.options.showLine) {
      let u = 0
      for (let f = n.length - 1; f >= 0; --f)
        u = Math.max(u, n[f].size(this.resolveDataElementOptions(f)) / 2)
      return u > 0 && u
    }
    const i = t.dataset,
      s = (i.options && i.options.borderWidth) || 0
    if (!n.length) return s
    const a = n[0].size(this.resolveDataElementOptions(0)),
      l = n[n.length - 1].size(this.resolveDataElementOptions(n.length - 1))
    return Math.max(s, a, l) / 2
  }
}
var RC = Object.freeze({
  __proto__: null,
  BarController: MC,
  BubbleController: TC,
  DoughnutController: Mh,
  LineController: OC,
  PieController: LC,
  PolarAreaController: Qv,
  RadarController: DC,
  ScatterController: AC,
})
function Li() {
  throw new Error('This method is not implemented: Check that a complete date adapter is provided.')
}
class Th {
  static override(t) {
    Object.assign(Th.prototype, t)
  }
  options
  constructor(t) {
    this.options = t || {}
  }
  init() {}
  formats() {
    return Li()
  }
  parse() {
    return Li()
  }
  format() {
    return Li()
  }
  add() {
    return Li()
  }
  diff() {
    return Li()
  }
  startOf() {
    return Li()
  }
  endOf() {
    return Li()
  }
}
var FC = { _date: Th }
function IC(e, t, n, i) {
  const { controller: s, data: a, _sorted: l } = e,
    u = s._cachedMeta.iScale,
    f = e.dataset && e.dataset.options ? e.dataset.options.spanGaps : null
  if (u && t === u.axis && t !== 'r' && l && a.length) {
    const h = u._reversePixels ? ZP : kn
    if (i) {
      if (s._sharedOptions) {
        const p = a[0],
          m = typeof p.getRange == 'function' && p.getRange(t)
        if (m) {
          const y = h(a, t, n - m),
            x = h(a, t, n + m)
          return { lo: y.lo, hi: x.hi }
        }
      }
    } else {
      const p = h(a, t, n)
      if (f) {
        const { vScale: m } = s._cachedMeta,
          { _parsed: y } = e,
          x = y
            .slice(0, p.lo + 1)
            .reverse()
            .findIndex(w => !wt(w[m.axis]))
        p.lo -= Math.max(0, x)
        const _ = y.slice(p.hi).findIndex(w => !wt(w[m.axis]))
        p.hi += Math.max(0, _)
      }
      return p
    }
  }
  return { lo: 0, hi: a.length - 1 }
}
function Ol(e, t, n, i, s) {
  const a = e.getSortedVisibleDatasetMetas(),
    l = n[t]
  for (let u = 0, f = a.length; u < f; ++u) {
    const { index: h, data: p } = a[u],
      { lo: m, hi: y } = IC(a[u], t, l, s)
    for (let x = m; x <= y; ++x) {
      const _ = p[x]
      _.skip || i(_, h, x)
    }
  }
}
function VC(e) {
  const t = e.indexOf('x') !== -1,
    n = e.indexOf('y') !== -1
  return function (i, s) {
    const a = t ? Math.abs(i.x - s.x) : 0,
      l = n ? Math.abs(i.y - s.y) : 0
    return Math.sqrt(Math.pow(a, 2) + Math.pow(l, 2))
  }
}
function rf(e, t, n, i, s) {
  const a = []
  return (
    (!s && !e.isPointInArea(t)) ||
      Ol(
        e,
        n,
        t,
        function (u, f, h) {
          ;(!s && !Pn(u, e.chartArea, 0)) ||
            (u.inRange(t.x, t.y, i) && a.push({ element: u, datasetIndex: f, index: h }))
        },
        !0
      ),
    a
  )
}
function zC(e, t, n, i) {
  let s = []
  function a(l, u, f) {
    const { startAngle: h, endAngle: p } = l.getProps(['startAngle', 'endAngle'], i),
      { angle: m } = Cv(l, { x: t.x, y: t.y })
    Xs(m, h, p) && s.push({ element: l, datasetIndex: u, index: f })
  }
  return (Ol(e, n, t, a), s)
}
function BC(e, t, n, i, s, a) {
  let l = []
  const u = VC(n)
  let f = Number.POSITIVE_INFINITY
  function h(p, m, y) {
    const x = p.inRange(t.x, t.y, s)
    if (i && !x) return
    const _ = p.getCenterPoint(s)
    if (!(!!a || e.isPointInArea(_)) && !x) return
    const S = u(t, _)
    S < f
      ? ((l = [{ element: p, datasetIndex: m, index: y }]), (f = S))
      : S === f && l.push({ element: p, datasetIndex: m, index: y })
  }
  return (Ol(e, n, t, h), l)
}
function sf(e, t, n, i, s, a) {
  return !a && !e.isPointInArea(t) ? [] : n === 'r' && !i ? zC(e, t, n, s) : BC(e, t, n, i, s, a)
}
function H0(e, t, n, i, s) {
  const a = [],
    l = n === 'x' ? 'inXRange' : 'inYRange'
  let u = !1
  return (
    Ol(e, n, t, (f, h, p) => {
      f[l] &&
        f[l](t[n], s) &&
        (a.push({ element: f, datasetIndex: h, index: p }), (u = u || f.inRange(t.x, t.y, s)))
    }),
    i && !u ? [] : a
  )
}
var NC = {
  modes: {
    index(e, t, n, i) {
      const s = Fi(t, e),
        a = n.axis || 'x',
        l = n.includeInvisible || !1,
        u = n.intersect ? rf(e, s, a, i, l) : sf(e, s, a, !1, i, l),
        f = []
      return u.length
        ? (e.getSortedVisibleDatasetMetas().forEach(h => {
            const p = u[0].index,
              m = h.data[p]
            m && !m.skip && f.push({ element: m, datasetIndex: h.index, index: p })
          }),
          f)
        : []
    },
    dataset(e, t, n, i) {
      const s = Fi(t, e),
        a = n.axis || 'xy',
        l = n.includeInvisible || !1
      let u = n.intersect ? rf(e, s, a, i, l) : sf(e, s, a, !1, i, l)
      if (u.length > 0) {
        const f = u[0].datasetIndex,
          h = e.getDatasetMeta(f).data
        u = []
        for (let p = 0; p < h.length; ++p) u.push({ element: h[p], datasetIndex: f, index: p })
      }
      return u
    },
    point(e, t, n, i) {
      const s = Fi(t, e),
        a = n.axis || 'xy',
        l = n.includeInvisible || !1
      return rf(e, s, a, i, l)
    },
    nearest(e, t, n, i) {
      const s = Fi(t, e),
        a = n.axis || 'xy',
        l = n.includeInvisible || !1
      return sf(e, s, a, n.intersect, i, l)
    },
    x(e, t, n, i) {
      const s = Fi(t, e)
      return H0(e, s, 'x', n.intersect, i)
    },
    y(e, t, n, i) {
      const s = Fi(t, e)
      return H0(e, s, 'y', n.intersect, i)
    },
  },
}
const Zv = ['left', 'top', 'right', 'bottom']
function Ss(e, t) {
  return e.filter(n => n.pos === t)
}
function W0(e, t) {
  return e.filter(n => Zv.indexOf(n.pos) === -1 && n.box.axis === t)
}
function bs(e, t) {
  return e.sort((n, i) => {
    const s = t ? i : n,
      a = t ? n : i
    return s.weight === a.weight ? s.index - a.index : s.weight - a.weight
  })
}
function jC(e) {
  const t = []
  let n, i, s, a, l, u
  for (n = 0, i = (e || []).length; n < i; ++n)
    ((s = e[n]),
      ({
        position: a,
        options: { stack: l, stackWeight: u = 1 },
      } = s),
      t.push({
        index: n,
        box: s,
        pos: a,
        horizontal: s.isHorizontal(),
        weight: s.weight,
        stack: l && a + l,
        stackWeight: u,
      }))
  return t
}
function HC(e) {
  const t = {}
  for (const n of e) {
    const { stack: i, pos: s, stackWeight: a } = n
    if (!i || !Zv.includes(s)) continue
    const l = t[i] || (t[i] = { count: 0, placed: 0, weight: 0, size: 0 })
    ;(l.count++, (l.weight += a))
  }
  return t
}
function WC(e, t) {
  const n = HC(e),
    { vBoxMaxWidth: i, hBoxMaxHeight: s } = t
  let a, l, u
  for (a = 0, l = e.length; a < l; ++a) {
    u = e[a]
    const { fullSize: f } = u.box,
      h = n[u.stack],
      p = h && u.stackWeight / h.weight
    u.horizontal
      ? ((u.width = p ? p * i : f && t.availableWidth), (u.height = s))
      : ((u.width = i), (u.height = p ? p * s : f && t.availableHeight))
  }
  return n
}
function UC(e) {
  const t = jC(e),
    n = bs(
      t.filter(h => h.box.fullSize),
      !0
    ),
    i = bs(Ss(t, 'left'), !0),
    s = bs(Ss(t, 'right')),
    a = bs(Ss(t, 'top'), !0),
    l = bs(Ss(t, 'bottom')),
    u = W0(t, 'x'),
    f = W0(t, 'y')
  return {
    fullSize: n,
    leftAndTop: i.concat(a),
    rightAndBottom: s.concat(f).concat(l).concat(u),
    chartArea: Ss(t, 'chartArea'),
    vertical: i.concat(s).concat(f),
    horizontal: a.concat(l).concat(u),
  }
}
function U0(e, t, n, i) {
  return Math.max(e[n], t[n]) + Math.max(e[i], t[i])
}
function Jv(e, t) {
  ;((e.top = Math.max(e.top, t.top)),
    (e.left = Math.max(e.left, t.left)),
    (e.bottom = Math.max(e.bottom, t.bottom)),
    (e.right = Math.max(e.right, t.right)))
}
function $C(e, t, n, i) {
  const { pos: s, box: a } = n,
    l = e.maxPadding
  if (!St(s)) {
    n.size && (e[s] -= n.size)
    const m = i[n.stack] || { size: 0, count: 1 }
    ;((m.size = Math.max(m.size, n.horizontal ? a.height : a.width)),
      (n.size = m.size / m.count),
      (e[s] += n.size))
  }
  a.getPadding && Jv(l, a.getPadding())
  const u = Math.max(0, t.outerWidth - U0(l, e, 'left', 'right')),
    f = Math.max(0, t.outerHeight - U0(l, e, 'top', 'bottom')),
    h = u !== e.w,
    p = f !== e.h
  return ((e.w = u), (e.h = f), n.horizontal ? { same: h, other: p } : { same: p, other: h })
}
function YC(e) {
  const t = e.maxPadding
  function n(i) {
    const s = Math.max(t[i] - e[i], 0)
    return ((e[i] += s), s)
  }
  ;((e.y += n('top')), (e.x += n('left')), n('right'), n('bottom'))
}
function XC(e, t) {
  const n = t.maxPadding
  function i(s) {
    const a = { left: 0, top: 0, right: 0, bottom: 0 }
    return (
      s.forEach(l => {
        a[l] = Math.max(t[l], n[l])
      }),
      a
    )
  }
  return i(e ? ['left', 'right'] : ['top', 'bottom'])
}
function Es(e, t, n, i) {
  const s = []
  let a, l, u, f, h, p
  for (a = 0, l = e.length, h = 0; a < l; ++a) {
    ;((u = e[a]), (f = u.box), f.update(u.width || t.w, u.height || t.h, XC(u.horizontal, t)))
    const { same: m, other: y } = $C(t, n, u, i)
    ;((h |= m && s.length), (p = p || y), f.fullSize || s.push(u))
  }
  return (h && Es(s, t, n, i)) || p
}
function Na(e, t, n, i, s) {
  ;((e.top = n), (e.left = t), (e.right = t + i), (e.bottom = n + s), (e.width = i), (e.height = s))
}
function $0(e, t, n, i) {
  const s = n.padding
  let { x: a, y: l } = t
  for (const u of e) {
    const f = u.box,
      h = i[u.stack] || { placed: 0, weight: 1 },
      p = u.stackWeight / h.weight || 1
    if (u.horizontal) {
      const m = t.w * p,
        y = h.size || f.height
      ;(Ys(h.start) && (l = h.start),
        f.fullSize
          ? Na(f, s.left, l, n.outerWidth - s.right - s.left, y)
          : Na(f, t.left + h.placed, l, m, y),
        (h.start = l),
        (h.placed += m),
        (l = f.bottom))
    } else {
      const m = t.h * p,
        y = h.size || f.width
      ;(Ys(h.start) && (a = h.start),
        f.fullSize
          ? Na(f, a, s.top, y, n.outerHeight - s.bottom - s.top)
          : Na(f, a, t.top + h.placed, y, m),
        (h.start = a),
        (h.placed += m),
        (a = f.right))
    }
  }
  ;((t.x = a), (t.y = l))
}
var me = {
  addBox(e, t) {
    ;(e.boxes || (e.boxes = []),
      (t.fullSize = t.fullSize || !1),
      (t.position = t.position || 'top'),
      (t.weight = t.weight || 0),
      (t._layers =
        t._layers ||
        function () {
          return [
            {
              z: 0,
              draw(n) {
                t.draw(n)
              },
            },
          ]
        }),
      e.boxes.push(t))
  },
  removeBox(e, t) {
    const n = e.boxes ? e.boxes.indexOf(t) : -1
    n !== -1 && e.boxes.splice(n, 1)
  },
  configure(e, t, n) {
    ;((t.fullSize = n.fullSize), (t.position = n.position), (t.weight = n.weight))
  },
  update(e, t, n, i) {
    if (!e) return
    const s = ge(e.options.layout.padding),
      a = Math.max(t - s.width, 0),
      l = Math.max(n - s.height, 0),
      u = UC(e.boxes),
      f = u.vertical,
      h = u.horizontal
    Mt(e.boxes, w => {
      typeof w.beforeLayout == 'function' && w.beforeLayout()
    })
    const p =
        f.reduce((w, S) => (S.box.options && S.box.options.display === !1 ? w : w + 1), 0) || 1,
      m = Object.freeze({
        outerWidth: t,
        outerHeight: n,
        padding: s,
        availableWidth: a,
        availableHeight: l,
        vBoxMaxWidth: a / 2 / p,
        hBoxMaxHeight: l / 2,
      }),
      y = Object.assign({}, s)
    Jv(y, ge(i))
    const x = Object.assign({ maxPadding: y, w: a, h: l, x: s.left, y: s.top }, s),
      _ = WC(f.concat(h), m)
    ;(Es(u.fullSize, x, m, _),
      Es(f, x, m, _),
      Es(h, x, m, _) && Es(f, x, m, _),
      YC(x),
      $0(u.leftAndTop, x, m, _),
      (x.x += x.w),
      (x.y += x.h),
      $0(u.rightAndBottom, x, m, _),
      (e.chartArea = {
        left: x.left,
        top: x.top,
        right: x.left + x.w,
        bottom: x.top + x.h,
        height: x.h,
        width: x.w,
      }),
      Mt(u.chartArea, w => {
        const S = w.box
        ;(Object.assign(S, e.chartArea),
          S.update(x.w, x.h, { left: 0, top: 0, right: 0, bottom: 0 }))
      }))
  },
}
class t2 {
  acquireContext(t, n) {}
  releaseContext(t) {
    return !1
  }
  addEventListener(t, n, i) {}
  removeEventListener(t, n, i) {}
  getDevicePixelRatio() {
    return 1
  }
  getMaximumSize(t, n, i, s) {
    return (
      (n = Math.max(0, n || t.width)),
      (i = i || t.height),
      { width: n, height: Math.max(0, s ? Math.floor(n / s) : i) }
    )
  }
  isAttached(t) {
    return !0
  }
  updateConfig(t) {}
}
class KC extends t2 {
  acquireContext(t) {
    return (t && t.getContext && t.getContext('2d')) || null
  }
  updateConfig(t) {
    t.options.animation = !1
  }
}
const Ga = '$chartjs',
  GC = {
    touchstart: 'mousedown',
    touchmove: 'mousemove',
    touchend: 'mouseup',
    pointerenter: 'mouseenter',
    pointerdown: 'mousedown',
    pointermove: 'mousemove',
    pointerup: 'mouseup',
    pointerleave: 'mouseout',
    pointerout: 'mouseout',
  },
  Y0 = e => e === null || e === ''
function qC(e, t) {
  const n = e.style,
    i = e.getAttribute('height'),
    s = e.getAttribute('width')
  if (
    ((e[Ga] = {
      initial: {
        height: i,
        width: s,
        style: { display: n.display, height: n.height, width: n.width },
      },
    }),
    (n.display = n.display || 'block'),
    (n.boxSizing = n.boxSizing || 'border-box'),
    Y0(s))
  ) {
    const a = E0(e, 'width')
    a !== void 0 && (e.width = a)
  }
  if (Y0(i))
    if (e.style.height === '') e.height = e.width / (t || 2)
    else {
      const a = E0(e, 'height')
      a !== void 0 && (e.height = a)
    }
  return e
}
const e2 = $6 ? { passive: !0 } : !1
function QC(e, t, n) {
  e && e.addEventListener(t, n, e2)
}
function ZC(e, t, n) {
  e && e.canvas && e.canvas.removeEventListener(t, n, e2)
}
function JC(e, t) {
  const n = GC[e.type] || e.type,
    { x: i, y: s } = Fi(e, t)
  return { type: n, chart: t, native: e, x: i !== void 0 ? i : null, y: s !== void 0 ? s : null }
}
function fl(e, t) {
  for (const n of e) if (n === t || n.contains(t)) return !0
}
function t3(e, t, n) {
  const i = e.canvas,
    s = new MutationObserver(a => {
      let l = !1
      for (const u of a) ((l = l || fl(u.addedNodes, i)), (l = l && !fl(u.removedNodes, i)))
      l && n()
    })
  return (s.observe(document, { childList: !0, subtree: !0 }), s)
}
function e3(e, t, n) {
  const i = e.canvas,
    s = new MutationObserver(a => {
      let l = !1
      for (const u of a) ((l = l || fl(u.removedNodes, i)), (l = l && !fl(u.addedNodes, i)))
      l && n()
    })
  return (s.observe(document, { childList: !0, subtree: !0 }), s)
}
const Gs = new Map()
let X0 = 0
function n2() {
  const e = window.devicePixelRatio
  e !== X0 &&
    ((X0 = e),
    Gs.forEach((t, n) => {
      n.currentDevicePixelRatio !== e && t()
    }))
}
function n3(e, t) {
  ;(Gs.size || window.addEventListener('resize', n2), Gs.set(e, t))
}
function i3(e) {
  ;(Gs.delete(e), Gs.size || window.removeEventListener('resize', n2))
}
function r3(e, t, n) {
  const i = e.canvas,
    s = i && Ch(i)
  if (!s) return
  const a = Ov((u, f) => {
      const h = s.clientWidth
      ;(n(u, f), h < s.clientWidth && n())
    }, window),
    l = new ResizeObserver(u => {
      const f = u[0],
        h = f.contentRect.width,
        p = f.contentRect.height
      ;(h === 0 && p === 0) || a(h, p)
    })
  return (l.observe(s), n3(e, a), l)
}
function of(e, t, n) {
  ;(n && n.disconnect(), t === 'resize' && i3(e))
}
function s3(e, t, n) {
  const i = e.canvas,
    s = Ov(a => {
      e.ctx !== null && n(JC(a, e))
    }, e)
  return (QC(i, t, s), s)
}
class o3 extends t2 {
  acquireContext(t, n) {
    const i = t && t.getContext && t.getContext('2d')
    return i && i.canvas === t ? (qC(t, n), i) : null
  }
  releaseContext(t) {
    const n = t.canvas
    if (!n[Ga]) return !1
    const i = n[Ga].initial
    ;['height', 'width'].forEach(a => {
      const l = i[a]
      wt(l) ? n.removeAttribute(a) : n.setAttribute(a, l)
    })
    const s = i.style || {}
    return (
      Object.keys(s).forEach(a => {
        n.style[a] = s[a]
      }),
      (n.width = n.width),
      delete n[Ga],
      !0
    )
  }
  addEventListener(t, n, i) {
    this.removeEventListener(t, n)
    const s = t.$proxies || (t.$proxies = {}),
      l = { attach: t3, detach: e3, resize: r3 }[n] || s3
    s[n] = l(t, n, i)
  }
  removeEventListener(t, n) {
    const i = t.$proxies || (t.$proxies = {}),
      s = i[n]
    if (!s) return
    ;((({ attach: of, detach: of, resize: of })[n] || ZC)(t, n, s), (i[n] = void 0))
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio
  }
  getMaximumSize(t, n, i, s) {
    return U6(t, n, i, s)
  }
  isAttached(t) {
    const n = t && Ch(t)
    return !!(n && n.isConnected)
  }
}
function a3(e) {
  return !Ph() || (typeof OffscreenCanvas < 'u' && e instanceof OffscreenCanvas) ? KC : o3
}
let Ln = class {
  static defaults = {}
  static defaultRoutes = void 0
  x
  y
  active = !1
  options
  $animations
  tooltipPosition(t) {
    const { x: n, y: i } = this.getProps(['x', 'y'], t)
    return { x: n, y: i }
  }
  hasValue() {
    return Cr(this.x) && Cr(this.y)
  }
  getProps(t, n) {
    const i = this.$animations
    if (!n || !i) return this
    const s = {}
    return (
      t.forEach(a => {
        s[a] = i[a] && i[a].active() ? i[a]._to : this[a]
      }),
      s
    )
  }
}
function l3(e, t) {
  const n = e.options.ticks,
    i = u3(e),
    s = Math.min(n.maxTicksLimit || i, i),
    a = n.major.enabled ? f3(t) : [],
    l = a.length,
    u = a[0],
    f = a[l - 1],
    h = []
  if (l > s) return (h3(t, h, a, l / s), h)
  const p = c3(a, t, s)
  if (l > 0) {
    let m, y
    const x = l > 1 ? Math.round((f - u) / (l - 1)) : null
    for (ja(t, h, p, wt(x) ? 0 : u - x, u), m = 0, y = l - 1; m < y; m++)
      ja(t, h, p, a[m], a[m + 1])
    return (ja(t, h, p, f, wt(x) ? t.length : f + x), h)
  }
  return (ja(t, h, p), h)
}
function u3(e) {
  const t = e.options.offset,
    n = e._tickSize(),
    i = e._length / n + (t ? 0 : 1),
    s = e._maxLength / n
  return Math.floor(Math.min(i, s))
}
function c3(e, t, n) {
  const i = d3(e),
    s = t.length / n
  if (!i) return Math.max(s, 1)
  const a = XP(i)
  for (let l = 0, u = a.length - 1; l < u; l++) {
    const f = a[l]
    if (f > s) return f
  }
  return Math.max(s, 1)
}
function f3(e) {
  const t = []
  let n, i
  for (n = 0, i = e.length; n < i; n++) e[n].major && t.push(n)
  return t
}
function h3(e, t, n, i) {
  let s = 0,
    a = n[0],
    l
  for (i = Math.ceil(i), l = 0; l < e.length; l++) l === a && (t.push(e[l]), s++, (a = n[s * i]))
}
function ja(e, t, n, i, s) {
  const a = yt(i, 0),
    l = Math.min(yt(s, e.length), e.length)
  let u = 0,
    f,
    h,
    p
  for (n = Math.ceil(n), s && ((f = s - i), (n = f / Math.floor(f / n))), p = a; p < 0; )
    (u++, (p = Math.round(a + u * n)))
  for (h = Math.max(a, 0); h < l; h++) h === p && (t.push(e[h]), u++, (p = Math.round(a + u * n)))
}
function d3(e) {
  const t = e.length
  let n, i
  if (t < 2) return !1
  for (i = e[0], n = 1; n < t; ++n) if (e[n] - e[n - 1] !== i) return !1
  return i
}
const p3 = e => (e === 'left' ? 'right' : e === 'right' ? 'left' : e),
  K0 = (e, t, n) => (t === 'top' || t === 'left' ? e[t] + n : e[t] - n),
  G0 = (e, t) => Math.min(t || e, e)
function q0(e, t) {
  const n = [],
    i = e.length / t,
    s = e.length
  let a = 0
  for (; a < s; a += i) n.push(e[Math.floor(a)])
  return n
}
function m3(e, t, n) {
  const i = e.ticks.length,
    s = Math.min(t, i - 1),
    a = e._startPixel,
    l = e._endPixel,
    u = 1e-6
  let f = e.getPixelForTick(s),
    h
  if (
    !(
      n &&
      (i === 1
        ? (h = Math.max(f - a, l - f))
        : t === 0
          ? (h = (e.getPixelForTick(1) - f) / 2)
          : (h = (f - e.getPixelForTick(s - 1)) / 2),
      (f += s < t ? h : -h),
      f < a - u || f > l + u)
    )
  )
    return f
}
function g3(e, t) {
  Mt(e, n => {
    const i = n.gc,
      s = i.length / 2
    let a
    if (s > t) {
      for (a = 0; a < s; ++a) delete n.data[i[a]]
      i.splice(0, s)
    }
  })
}
function ks(e) {
  return e.drawTicks ? e.tickLength : 0
}
function Q0(e, t) {
  if (!e.display) return 0
  const n = te(e.font, t),
    i = ge(e.padding)
  return (zt(e.text) ? e.text.length : 1) * n.lineHeight + i.height
}
function y3(e, t) {
  return di(e, { scale: t, type: 'scale' })
}
function v3(e, t, n) {
  return di(e, { tick: n, index: t, type: 'tick' })
}
function x3(e, t, n) {
  let i = xh(e)
  return (((n && t !== 'right') || (!n && t === 'right')) && (i = p3(i)), i)
}
function _3(e, t, n, i) {
  const { top: s, left: a, bottom: l, right: u, chart: f } = e,
    { chartArea: h, scales: p } = f
  let m = 0,
    y,
    x,
    _
  const w = l - s,
    S = u - a
  if (e.isHorizontal()) {
    if (((x = de(i, a, u)), St(n))) {
      const k = Object.keys(n)[0],
        P = n[k]
      _ = p[k].getPixelForValue(P) + w - t
    } else n === 'center' ? (_ = (h.bottom + h.top) / 2 + w - t) : (_ = K0(e, n, t))
    y = u - a
  } else {
    if (St(n)) {
      const k = Object.keys(n)[0],
        P = n[k]
      x = p[k].getPixelForValue(P) - S + t
    } else n === 'center' ? (x = (h.left + h.right) / 2 - S + t) : (x = K0(e, n, t))
    ;((_ = de(i, l, s)), (m = n === 'left' ? -Kt : Kt))
  }
  return { titleX: x, titleY: _, maxWidth: y, rotation: m }
}
class $i extends Ln {
  constructor(t) {
    ;(super(),
      (this.id = t.id),
      (this.type = t.type),
      (this.options = void 0),
      (this.ctx = t.ctx),
      (this.chart = t.chart),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
      (this.maxWidth = void 0),
      (this.maxHeight = void 0),
      (this.paddingTop = void 0),
      (this.paddingBottom = void 0),
      (this.paddingLeft = void 0),
      (this.paddingRight = void 0),
      (this.axis = void 0),
      (this.labelRotation = void 0),
      (this.min = void 0),
      (this.max = void 0),
      (this._range = void 0),
      (this.ticks = []),
      (this._gridLineItems = null),
      (this._labelItems = null),
      (this._labelSizes = null),
      (this._length = 0),
      (this._maxLength = 0),
      (this._longestTextCache = {}),
      (this._startPixel = void 0),
      (this._endPixel = void 0),
      (this._reversePixels = !1),
      (this._userMax = void 0),
      (this._userMin = void 0),
      (this._suggestedMax = void 0),
      (this._suggestedMin = void 0),
      (this._ticksLength = 0),
      (this._borderValue = 0),
      (this._cache = {}),
      (this._dataLimitsCached = !1),
      (this.$context = void 0))
  }
  init(t) {
    ;((this.options = t.setContext(this.getContext())),
      (this.axis = t.axis),
      (this._userMin = this.parse(t.min)),
      (this._userMax = this.parse(t.max)),
      (this._suggestedMin = this.parse(t.suggestedMin)),
      (this._suggestedMax = this.parse(t.suggestedMax)))
  }
  parse(t, n) {
    return t
  }
  getUserBounds() {
    let { _userMin: t, _userMax: n, _suggestedMin: i, _suggestedMax: s } = this
    return (
      (t = Re(t, Number.POSITIVE_INFINITY)),
      (n = Re(n, Number.NEGATIVE_INFINITY)),
      (i = Re(i, Number.POSITIVE_INFINITY)),
      (s = Re(s, Number.NEGATIVE_INFINITY)),
      { min: Re(t, i), max: Re(n, s), minDefined: Ut(t), maxDefined: Ut(n) }
    )
  }
  getMinMax(t) {
    let { min: n, max: i, minDefined: s, maxDefined: a } = this.getUserBounds(),
      l
    if (s && a) return { min: n, max: i }
    const u = this.getMatchingVisibleMetas()
    for (let f = 0, h = u.length; f < h; ++f)
      ((l = u[f].controller.getMinMax(this, t)),
        s || (n = Math.min(n, l.min)),
        a || (i = Math.max(i, l.max)))
    return (
      (n = a && n > i ? i : n),
      (i = s && n > i ? n : i),
      { min: Re(n, Re(i, n)), max: Re(i, Re(n, i)) }
    )
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0,
    }
  }
  getTicks() {
    return this.ticks
  }
  getLabels() {
    const t = this.chart.data
    return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || []
  }
  getLabelItems(t = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(t))
  }
  beforeLayout() {
    ;((this._cache = {}), (this._dataLimitsCached = !1))
  }
  beforeUpdate() {
    Lt(this.options.beforeUpdate, [this])
  }
  update(t, n, i) {
    const { beginAtZero: s, grace: a, ticks: l } = this.options,
      u = l.sampleSize
    ;(this.beforeUpdate(),
      (this.maxWidth = t),
      (this.maxHeight = n),
      (this._margins = i = Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, i)),
      (this.ticks = null),
      (this._labelSizes = null),
      (this._gridLineItems = null),
      (this._labelItems = null),
      this.beforeSetDimensions(),
      this.setDimensions(),
      this.afterSetDimensions(),
      (this._maxLength = this.isHorizontal()
        ? this.width + i.left + i.right
        : this.height + i.top + i.bottom),
      this._dataLimitsCached ||
        (this.beforeDataLimits(),
        this.determineDataLimits(),
        this.afterDataLimits(),
        (this._range = S6(this, a, s)),
        (this._dataLimitsCached = !0)),
      this.beforeBuildTicks(),
      (this.ticks = this.buildTicks() || []),
      this.afterBuildTicks())
    const f = u < this.ticks.length
    ;(this._convertTicksToLabels(f ? q0(this.ticks, u) : this.ticks),
      this.configure(),
      this.beforeCalculateLabelRotation(),
      this.calculateLabelRotation(),
      this.afterCalculateLabelRotation(),
      l.display &&
        (l.autoSkip || l.source === 'auto') &&
        ((this.ticks = l3(this, this.ticks)), (this._labelSizes = null), this.afterAutoSkip()),
      f && this._convertTicksToLabels(this.ticks),
      this.beforeFit(),
      this.fit(),
      this.afterFit(),
      this.afterUpdate())
  }
  configure() {
    let t = this.options.reverse,
      n,
      i
    ;(this.isHorizontal()
      ? ((n = this.left), (i = this.right))
      : ((n = this.top), (i = this.bottom), (t = !t)),
      (this._startPixel = n),
      (this._endPixel = i),
      (this._reversePixels = t),
      (this._length = i - n),
      (this._alignToPixels = this.options.alignToPixels))
  }
  afterUpdate() {
    Lt(this.options.afterUpdate, [this])
  }
  beforeSetDimensions() {
    Lt(this.options.beforeSetDimensions, [this])
  }
  setDimensions() {
    ;(this.isHorizontal()
      ? ((this.width = this.maxWidth), (this.left = 0), (this.right = this.width))
      : ((this.height = this.maxHeight), (this.top = 0), (this.bottom = this.height)),
      (this.paddingLeft = 0),
      (this.paddingTop = 0),
      (this.paddingRight = 0),
      (this.paddingBottom = 0))
  }
  afterSetDimensions() {
    Lt(this.options.afterSetDimensions, [this])
  }
  _callHooks(t) {
    ;(this.chart.notifyPlugins(t, this.getContext()), Lt(this.options[t], [this]))
  }
  beforeDataLimits() {
    this._callHooks('beforeDataLimits')
  }
  determineDataLimits() {}
  afterDataLimits() {
    this._callHooks('afterDataLimits')
  }
  beforeBuildTicks() {
    this._callHooks('beforeBuildTicks')
  }
  buildTicks() {
    return []
  }
  afterBuildTicks() {
    this._callHooks('afterBuildTicks')
  }
  beforeTickToLabelConversion() {
    Lt(this.options.beforeTickToLabelConversion, [this])
  }
  generateTickLabels(t) {
    const n = this.options.ticks
    let i, s, a
    for (i = 0, s = t.length; i < s; i++)
      ((a = t[i]), (a.label = Lt(n.callback, [a.value, i, t], this)))
  }
  afterTickToLabelConversion() {
    Lt(this.options.afterTickToLabelConversion, [this])
  }
  beforeCalculateLabelRotation() {
    Lt(this.options.beforeCalculateLabelRotation, [this])
  }
  calculateLabelRotation() {
    const t = this.options,
      n = t.ticks,
      i = G0(this.ticks.length, t.ticks.maxTicksLimit),
      s = n.minRotation || 0,
      a = n.maxRotation
    let l = s,
      u,
      f,
      h
    if (!this._isVisible() || !n.display || s >= a || i <= 1 || !this.isHorizontal()) {
      this.labelRotation = s
      return
    }
    const p = this._getLabelSizes(),
      m = p.widest.width,
      y = p.highest.height,
      x = se(this.chart.width - m, 0, this.maxWidth)
    ;((u = t.offset ? this.maxWidth / i : x / (i - 1)),
      m + 6 > u &&
        ((u = x / (i - (t.offset ? 0.5 : 1))),
        (f = this.maxHeight - ks(t.grid) - n.padding - Q0(t.title, this.chart.options.font)),
        (h = Math.sqrt(m * m + y * y)),
        (l = yh(
          Math.min(
            Math.asin(se((p.highest.height + 6) / u, -1, 1)),
            Math.asin(se(f / h, -1, 1)) - Math.asin(se(y / h, -1, 1))
          )
        )),
        (l = Math.max(s, Math.min(a, l)))),
      (this.labelRotation = l))
  }
  afterCalculateLabelRotation() {
    Lt(this.options.afterCalculateLabelRotation, [this])
  }
  afterAutoSkip() {}
  beforeFit() {
    Lt(this.options.beforeFit, [this])
  }
  fit() {
    const t = { width: 0, height: 0 },
      {
        chart: n,
        options: { ticks: i, title: s, grid: a },
      } = this,
      l = this._isVisible(),
      u = this.isHorizontal()
    if (l) {
      const f = Q0(s, n.options.font)
      if (
        (u
          ? ((t.width = this.maxWidth), (t.height = ks(a) + f))
          : ((t.height = this.maxHeight), (t.width = ks(a) + f)),
        i.display && this.ticks.length)
      ) {
        const { first: h, last: p, widest: m, highest: y } = this._getLabelSizes(),
          x = i.padding * 2,
          _ = Ze(this.labelRotation),
          w = Math.cos(_),
          S = Math.sin(_)
        if (u) {
          const k = i.mirror ? 0 : S * m.width + w * y.height
          t.height = Math.min(this.maxHeight, t.height + k + x)
        } else {
          const k = i.mirror ? 0 : w * m.width + S * y.height
          t.width = Math.min(this.maxWidth, t.width + k + x)
        }
        this._calculatePadding(h, p, S, w)
      }
    }
    ;(this._handleMargins(),
      u
        ? ((this.width = this._length = n.width - this._margins.left - this._margins.right),
          (this.height = t.height))
        : ((this.width = t.width),
          (this.height = this._length = n.height - this._margins.top - this._margins.bottom)))
  }
  _calculatePadding(t, n, i, s) {
    const {
        ticks: { align: a, padding: l },
        position: u,
      } = this.options,
      f = this.labelRotation !== 0,
      h = u !== 'top' && this.axis === 'x'
    if (this.isHorizontal()) {
      const p = this.getPixelForTick(0) - this.left,
        m = this.right - this.getPixelForTick(this.ticks.length - 1)
      let y = 0,
        x = 0
      ;(f
        ? h
          ? ((y = s * t.width), (x = i * n.height))
          : ((y = i * t.height), (x = s * n.width))
        : a === 'start'
          ? (x = n.width)
          : a === 'end'
            ? (y = t.width)
            : a !== 'inner' && ((y = t.width / 2), (x = n.width / 2)),
        (this.paddingLeft = Math.max(((y - p + l) * this.width) / (this.width - p), 0)),
        (this.paddingRight = Math.max(((x - m + l) * this.width) / (this.width - m), 0)))
    } else {
      let p = n.height / 2,
        m = t.height / 2
      ;(a === 'start' ? ((p = 0), (m = t.height)) : a === 'end' && ((p = n.height), (m = 0)),
        (this.paddingTop = p + l),
        (this.paddingBottom = m + l))
    }
  }
  _handleMargins() {
    this._margins &&
      ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
      (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
      (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
      (this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom)))
  }
  afterFit() {
    Lt(this.options.afterFit, [this])
  }
  isHorizontal() {
    const { axis: t, position: n } = this.options
    return n === 'top' || n === 'bottom' || t === 'x'
  }
  isFullSize() {
    return this.options.fullSize
  }
  _convertTicksToLabels(t) {
    ;(this.beforeTickToLabelConversion(), this.generateTickLabels(t))
    let n, i
    for (n = 0, i = t.length; n < i; n++) wt(t[n].label) && (t.splice(n, 1), i--, n--)
    this.afterTickToLabelConversion()
  }
  _getLabelSizes() {
    let t = this._labelSizes
    if (!t) {
      const n = this.options.ticks.sampleSize
      let i = this.ticks
      ;(n < i.length && (i = q0(i, n)),
        (this._labelSizes = t =
          this._computeLabelSizes(i, i.length, this.options.ticks.maxTicksLimit)))
    }
    return t
  }
  _computeLabelSizes(t, n, i) {
    const { ctx: s, _longestTextCache: a } = this,
      l = [],
      u = [],
      f = Math.floor(n / G0(n, i))
    let h = 0,
      p = 0,
      m,
      y,
      x,
      _,
      w,
      S,
      k,
      P,
      C,
      T,
      E
    for (m = 0; m < n; m += f) {
      if (
        ((_ = t[m].label),
        (w = this._resolveTickFontOptions(m)),
        (s.font = S = w.string),
        (k = a[S] = a[S] || { data: {}, gc: [] }),
        (P = w.lineHeight),
        (C = T = 0),
        !wt(_) && !zt(_))
      )
        ((C = ul(s, k.data, k.gc, C, _)), (T = P))
      else if (zt(_))
        for (y = 0, x = _.length; y < x; ++y)
          ((E = _[y]), !wt(E) && !zt(E) && ((C = ul(s, k.data, k.gc, C, E)), (T += P)))
      ;(l.push(C), u.push(T), (h = Math.max(C, h)), (p = Math.max(T, p)))
    }
    g3(a, n)
    const R = l.indexOf(h),
      A = u.indexOf(p),
      V = j => ({ width: l[j] || 0, height: u[j] || 0 })
    return { first: V(0), last: V(n - 1), widest: V(R), highest: V(A), widths: l, heights: u }
  }
  getLabelForValue(t) {
    return t
  }
  getPixelForValue(t, n) {
    return NaN
  }
  getValueForPixel(t) {}
  getPixelForTick(t) {
    const n = this.ticks
    return t < 0 || t > n.length - 1 ? null : this.getPixelForValue(n[t].value)
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t)
    const n = this._startPixel + t * this._length
    return QP(this._alignToPixels ? Oi(this.chart, n, 0) : n)
  }
  getDecimalForPixel(t) {
    const n = (t - this._startPixel) / this._length
    return this._reversePixels ? 1 - n : n
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue())
  }
  getBaseValue() {
    const { min: t, max: n } = this
    return t < 0 && n < 0 ? n : t > 0 && n > 0 ? t : 0
  }
  getContext(t) {
    const n = this.ticks || []
    if (t >= 0 && t < n.length) {
      const i = n[t]
      return i.$context || (i.$context = v3(this.getContext(), t, i))
    }
    return this.$context || (this.$context = y3(this.chart.getContext(), this))
  }
  _tickSize() {
    const t = this.options.ticks,
      n = Ze(this.labelRotation),
      i = Math.abs(Math.cos(n)),
      s = Math.abs(Math.sin(n)),
      a = this._getLabelSizes(),
      l = t.autoSkipPadding || 0,
      u = a ? a.widest.width + l : 0,
      f = a ? a.highest.height + l : 0
    return this.isHorizontal() ? (f * i > u * s ? u / i : f / s) : f * s < u * i ? f / i : u / s
  }
  _isVisible() {
    const t = this.options.display
    return t !== 'auto' ? !!t : this.getMatchingVisibleMetas().length > 0
  }
  _computeGridLineItems(t) {
    const n = this.axis,
      i = this.chart,
      s = this.options,
      { grid: a, position: l, border: u } = s,
      f = a.offset,
      h = this.isHorizontal(),
      m = this.ticks.length + (f ? 1 : 0),
      y = ks(a),
      x = [],
      _ = u.setContext(this.getContext()),
      w = _.display ? _.width : 0,
      S = w / 2,
      k = function (tt) {
        return Oi(i, tt, w)
      }
    let P, C, T, E, R, A, V, j, W, N, F, q
    if (l === 'top')
      ((P = k(this.bottom)), (A = this.bottom - y), (j = P - S), (N = k(t.top) + S), (q = t.bottom))
    else if (l === 'bottom')
      ((P = k(this.top)), (N = t.top), (q = k(t.bottom) - S), (A = P + S), (j = this.top + y))
    else if (l === 'left')
      ((P = k(this.right)), (R = this.right - y), (V = P - S), (W = k(t.left) + S), (F = t.right))
    else if (l === 'right')
      ((P = k(this.left)), (W = t.left), (F = k(t.right) - S), (R = P + S), (V = this.left + y))
    else if (n === 'x') {
      if (l === 'center') P = k((t.top + t.bottom) / 2 + 0.5)
      else if (St(l)) {
        const tt = Object.keys(l)[0],
          rt = l[tt]
        P = k(this.chart.scales[tt].getPixelForValue(rt))
      }
      ;((N = t.top), (q = t.bottom), (A = P + S), (j = A + y))
    } else if (n === 'y') {
      if (l === 'center') P = k((t.left + t.right) / 2)
      else if (St(l)) {
        const tt = Object.keys(l)[0],
          rt = l[tt]
        P = k(this.chart.scales[tt].getPixelForValue(rt))
      }
      ;((R = P - S), (V = R - y), (W = t.left), (F = t.right))
    }
    const $ = yt(s.ticks.maxTicksLimit, m),
      st = Math.max(1, Math.ceil(m / $))
    for (C = 0; C < m; C += st) {
      const tt = this.getContext(C),
        rt = a.setContext(tt),
        K = u.setContext(tt),
        J = rt.lineWidth,
        Z = rt.color,
        L = K.dash || [],
        H = K.dashOffset,
        lt = rt.tickWidth,
        ut = rt.tickColor,
        gt = rt.tickBorderDash || [],
        dt = rt.tickBorderDashOffset
      ;((T = m3(this, C, f)),
        T !== void 0 &&
          ((E = Oi(i, T, J)),
          h ? (R = V = W = F = E) : (A = j = N = q = E),
          x.push({
            tx1: R,
            ty1: A,
            tx2: V,
            ty2: j,
            x1: W,
            y1: N,
            x2: F,
            y2: q,
            width: J,
            color: Z,
            borderDash: L,
            borderDashOffset: H,
            tickWidth: lt,
            tickColor: ut,
            tickBorderDash: gt,
            tickBorderDashOffset: dt,
          })))
    }
    return ((this._ticksLength = m), (this._borderValue = P), x)
  }
  _computeLabelItems(t) {
    const n = this.axis,
      i = this.options,
      { position: s, ticks: a } = i,
      l = this.isHorizontal(),
      u = this.ticks,
      { align: f, crossAlign: h, padding: p, mirror: m } = a,
      y = ks(i.grid),
      x = y + p,
      _ = m ? -p : x,
      w = -Ze(this.labelRotation),
      S = []
    let k,
      P,
      C,
      T,
      E,
      R,
      A,
      V,
      j,
      W,
      N,
      F,
      q = 'middle'
    if (s === 'top') ((R = this.bottom - _), (A = this._getXAxisLabelAlignment()))
    else if (s === 'bottom') ((R = this.top + _), (A = this._getXAxisLabelAlignment()))
    else if (s === 'left') {
      const st = this._getYAxisLabelAlignment(y)
      ;((A = st.textAlign), (E = st.x))
    } else if (s === 'right') {
      const st = this._getYAxisLabelAlignment(y)
      ;((A = st.textAlign), (E = st.x))
    } else if (n === 'x') {
      if (s === 'center') R = (t.top + t.bottom) / 2 + x
      else if (St(s)) {
        const st = Object.keys(s)[0],
          tt = s[st]
        R = this.chart.scales[st].getPixelForValue(tt) + x
      }
      A = this._getXAxisLabelAlignment()
    } else if (n === 'y') {
      if (s === 'center') E = (t.left + t.right) / 2 - x
      else if (St(s)) {
        const st = Object.keys(s)[0],
          tt = s[st]
        E = this.chart.scales[st].getPixelForValue(tt)
      }
      A = this._getYAxisLabelAlignment(y).textAlign
    }
    n === 'y' && (f === 'start' ? (q = 'top') : f === 'end' && (q = 'bottom'))
    const $ = this._getLabelSizes()
    for (k = 0, P = u.length; k < P; ++k) {
      ;((C = u[k]), (T = C.label))
      const st = a.setContext(this.getContext(k))
      ;((V = this.getPixelForTick(k) + a.labelOffset),
        (j = this._resolveTickFontOptions(k)),
        (W = j.lineHeight),
        (N = zt(T) ? T.length : 1))
      const tt = N / 2,
        rt = st.color,
        K = st.textStrokeColor,
        J = st.textStrokeWidth
      let Z = A
      l
        ? ((E = V),
          A === 'inner' &&
            (k === P - 1
              ? (Z = this.options.reverse ? 'left' : 'right')
              : k === 0
                ? (Z = this.options.reverse ? 'right' : 'left')
                : (Z = 'center')),
          s === 'top'
            ? h === 'near' || w !== 0
              ? (F = -N * W + W / 2)
              : h === 'center'
                ? (F = -$.highest.height / 2 - tt * W + W)
                : (F = -$.highest.height + W / 2)
            : h === 'near' || w !== 0
              ? (F = W / 2)
              : h === 'center'
                ? (F = $.highest.height / 2 - tt * W)
                : (F = $.highest.height - N * W),
          m && (F *= -1),
          w !== 0 && !st.showLabelBackdrop && (E += (W / 2) * Math.sin(w)))
        : ((R = V), (F = ((1 - N) * W) / 2))
      let L
      if (st.showLabelBackdrop) {
        const H = ge(st.backdropPadding),
          lt = $.heights[k],
          ut = $.widths[k]
        let gt = F - H.top,
          dt = 0 - H.left
        switch (q) {
          case 'middle':
            gt -= lt / 2
            break
          case 'bottom':
            gt -= lt
            break
        }
        switch (A) {
          case 'center':
            dt -= ut / 2
            break
          case 'right':
            dt -= ut
            break
          case 'inner':
            k === P - 1 ? (dt -= ut) : k > 0 && (dt -= ut / 2)
            break
        }
        L = {
          left: dt,
          top: gt,
          width: ut + H.width,
          height: lt + H.height,
          color: st.backdropColor,
        }
      }
      S.push({
        label: T,
        font: j,
        textOffset: F,
        options: {
          rotation: w,
          color: rt,
          strokeColor: K,
          strokeWidth: J,
          textAlign: Z,
          textBaseline: q,
          translation: [E, R],
          backdrop: L,
        },
      })
    }
    return S
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: n } = this.options
    if (-Ze(this.labelRotation)) return t === 'top' ? 'left' : 'right'
    let s = 'center'
    return (
      n.align === 'start'
        ? (s = 'left')
        : n.align === 'end'
          ? (s = 'right')
          : n.align === 'inner' && (s = 'inner'),
      s
    )
  }
  _getYAxisLabelAlignment(t) {
    const {
        position: n,
        ticks: { crossAlign: i, mirror: s, padding: a },
      } = this.options,
      l = this._getLabelSizes(),
      u = t + a,
      f = l.widest.width
    let h, p
    return (
      n === 'left'
        ? s
          ? ((p = this.right + a),
            i === 'near'
              ? (h = 'left')
              : i === 'center'
                ? ((h = 'center'), (p += f / 2))
                : ((h = 'right'), (p += f)))
          : ((p = this.right - u),
            i === 'near'
              ? (h = 'right')
              : i === 'center'
                ? ((h = 'center'), (p -= f / 2))
                : ((h = 'left'), (p = this.left)))
        : n === 'right'
          ? s
            ? ((p = this.left + a),
              i === 'near'
                ? (h = 'right')
                : i === 'center'
                  ? ((h = 'center'), (p -= f / 2))
                  : ((h = 'left'), (p -= f)))
            : ((p = this.left + u),
              i === 'near'
                ? (h = 'left')
                : i === 'center'
                  ? ((h = 'center'), (p += f / 2))
                  : ((h = 'right'), (p = this.right)))
          : (h = 'right'),
      { textAlign: h, x: p }
    )
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror) return
    const t = this.chart,
      n = this.options.position
    if (n === 'left' || n === 'right')
      return { top: 0, left: this.left, bottom: t.height, right: this.right }
    if (n === 'top' || n === 'bottom')
      return { top: this.top, left: 0, bottom: this.bottom, right: t.width }
  }
  drawBackground() {
    const {
      ctx: t,
      options: { backgroundColor: n },
      left: i,
      top: s,
      width: a,
      height: l,
    } = this
    n && (t.save(), (t.fillStyle = n), t.fillRect(i, s, a, l), t.restore())
  }
  getLineWidthForValue(t) {
    const n = this.options.grid
    if (!this._isVisible() || !n.display) return 0
    const s = this.ticks.findIndex(a => a.value === t)
    return s >= 0 ? n.setContext(this.getContext(s)).lineWidth : 0
  }
  drawGrid(t) {
    const n = this.options.grid,
      i = this.ctx,
      s = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t))
    let a, l
    const u = (f, h, p) => {
      !p.width ||
        !p.color ||
        (i.save(),
        (i.lineWidth = p.width),
        (i.strokeStyle = p.color),
        i.setLineDash(p.borderDash || []),
        (i.lineDashOffset = p.borderDashOffset),
        i.beginPath(),
        i.moveTo(f.x, f.y),
        i.lineTo(h.x, h.y),
        i.stroke(),
        i.restore())
    }
    if (n.display)
      for (a = 0, l = s.length; a < l; ++a) {
        const f = s[a]
        ;(n.drawOnChartArea && u({ x: f.x1, y: f.y1 }, { x: f.x2, y: f.y2 }, f),
          n.drawTicks &&
            u(
              { x: f.tx1, y: f.ty1 },
              { x: f.tx2, y: f.ty2 },
              {
                color: f.tickColor,
                width: f.tickWidth,
                borderDash: f.tickBorderDash,
                borderDashOffset: f.tickBorderDashOffset,
              }
            ))
      }
  }
  drawBorder() {
    const {
        chart: t,
        ctx: n,
        options: { border: i, grid: s },
      } = this,
      a = i.setContext(this.getContext()),
      l = i.display ? a.width : 0
    if (!l) return
    const u = s.setContext(this.getContext(0)).lineWidth,
      f = this._borderValue
    let h, p, m, y
    ;(this.isHorizontal()
      ? ((h = Oi(t, this.left, l) - l / 2), (p = Oi(t, this.right, u) + u / 2), (m = y = f))
      : ((m = Oi(t, this.top, l) - l / 2), (y = Oi(t, this.bottom, u) + u / 2), (h = p = f)),
      n.save(),
      (n.lineWidth = a.width),
      (n.strokeStyle = a.color),
      n.beginPath(),
      n.moveTo(h, m),
      n.lineTo(p, y),
      n.stroke(),
      n.restore())
  }
  drawLabels(t) {
    if (!this.options.ticks.display) return
    const i = this.ctx,
      s = this._computeLabelArea()
    s && Ml(i, s)
    const a = this.getLabelItems(t)
    for (const l of a) {
      const u = l.options,
        f = l.font,
        h = l.label,
        p = l.textOffset
      Hi(i, h, 0, p, f, u)
    }
    s && Tl(i)
  }
  drawTitle() {
    const {
      ctx: t,
      options: { position: n, title: i, reverse: s },
    } = this
    if (!i.display) return
    const a = te(i.font),
      l = ge(i.padding),
      u = i.align
    let f = a.lineHeight / 2
    n === 'bottom' || n === 'center' || St(n)
      ? ((f += l.bottom), zt(i.text) && (f += a.lineHeight * (i.text.length - 1)))
      : (f += l.top)
    const { titleX: h, titleY: p, maxWidth: m, rotation: y } = _3(this, f, n, u)
    Hi(t, i.text, 0, 0, a, {
      color: i.color,
      maxWidth: m,
      rotation: y,
      textAlign: x3(u, n, s),
      textBaseline: 'middle',
      translation: [h, p],
    })
  }
  draw(t) {
    this._isVisible() &&
      (this.drawBackground(),
      this.drawGrid(t),
      this.drawBorder(),
      this.drawTitle(),
      this.drawLabels(t))
  }
  _layers() {
    const t = this.options,
      n = (t.ticks && t.ticks.z) || 0,
      i = yt(t.grid && t.grid.z, -1),
      s = yt(t.border && t.border.z, 0)
    return !this._isVisible() || this.draw !== $i.prototype.draw
      ? [
          {
            z: n,
            draw: a => {
              this.draw(a)
            },
          },
        ]
      : [
          {
            z: i,
            draw: a => {
              ;(this.drawBackground(), this.drawGrid(a), this.drawTitle())
            },
          },
          {
            z: s,
            draw: () => {
              this.drawBorder()
            },
          },
          {
            z: n,
            draw: a => {
              this.drawLabels(a)
            },
          },
        ]
  }
  getMatchingVisibleMetas(t) {
    const n = this.chart.getSortedVisibleDatasetMetas(),
      i = this.axis + 'AxisID',
      s = []
    let a, l
    for (a = 0, l = n.length; a < l; ++a) {
      const u = n[a]
      u[i] === this.id && (!t || u.type === t) && s.push(u)
    }
    return s
  }
  _resolveTickFontOptions(t) {
    const n = this.options.ticks.setContext(this.getContext(t))
    return te(n.font)
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight
    return (this.isHorizontal() ? this.width : this.height) / t
  }
}
class Ha {
  constructor(t, n, i) {
    ;((this.type = t), (this.scope = n), (this.override = i), (this.items = Object.create(null)))
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype)
  }
  register(t) {
    const n = Object.getPrototypeOf(t)
    let i
    b3(n) && (i = this.register(n))
    const s = this.items,
      a = t.id,
      l = this.scope + '.' + a
    if (!a) throw new Error('class does not have id: ' + t)
    return (a in s || ((s[a] = t), w3(t, l, i), this.override && Bt.override(t.id, t.overrides)), l)
  }
  get(t) {
    return this.items[t]
  }
  unregister(t) {
    const n = this.items,
      i = t.id,
      s = this.scope
    ;(i in n && delete n[i], s && i in Bt[s] && (delete Bt[s][i], this.override && delete ji[i]))
  }
}
function w3(e, t, n) {
  const i = $s(Object.create(null), [n ? Bt.get(n) : {}, Bt.get(t), e.defaults])
  ;(Bt.set(t, i),
    e.defaultRoutes && S3(t, e.defaultRoutes),
    e.descriptors && Bt.describe(t, e.descriptors))
}
function S3(e, t) {
  Object.keys(t).forEach(n => {
    const i = n.split('.'),
      s = i.pop(),
      a = [e].concat(i).join('.'),
      l = t[n].split('.'),
      u = l.pop(),
      f = l.join('.')
    Bt.route(a, s, f, u)
  })
}
function b3(e) {
  return 'id' in e && 'defaults' in e
}
class k3 {
  constructor() {
    ;((this.controllers = new Ha(pi, 'datasets', !0)),
      (this.elements = new Ha(Ln, 'elements')),
      (this.plugins = new Ha(Object, 'plugins')),
      (this.scales = new Ha($i, 'scales')),
      (this._typedRegistries = [this.controllers, this.scales, this.elements]))
  }
  add(...t) {
    this._each('register', t)
  }
  remove(...t) {
    this._each('unregister', t)
  }
  addControllers(...t) {
    this._each('register', t, this.controllers)
  }
  addElements(...t) {
    this._each('register', t, this.elements)
  }
  addPlugins(...t) {
    this._each('register', t, this.plugins)
  }
  addScales(...t) {
    this._each('register', t, this.scales)
  }
  getController(t) {
    return this._get(t, this.controllers, 'controller')
  }
  getElement(t) {
    return this._get(t, this.elements, 'element')
  }
  getPlugin(t) {
    return this._get(t, this.plugins, 'plugin')
  }
  getScale(t) {
    return this._get(t, this.scales, 'scale')
  }
  removeControllers(...t) {
    this._each('unregister', t, this.controllers)
  }
  removeElements(...t) {
    this._each('unregister', t, this.elements)
  }
  removePlugins(...t) {
    this._each('unregister', t, this.plugins)
  }
  removeScales(...t) {
    this._each('unregister', t, this.scales)
  }
  _each(t, n, i) {
    ;[...n].forEach(s => {
      const a = i || this._getRegistryForType(s)
      i || a.isForType(s) || (a === this.plugins && s.id)
        ? this._exec(t, a, s)
        : Mt(s, l => {
            const u = i || this._getRegistryForType(l)
            this._exec(t, u, l)
          })
    })
  }
  _exec(t, n, i) {
    const s = gh(t)
    ;(Lt(i['before' + s], [], i), n[t](i), Lt(i['after' + s], [], i))
  }
  _getRegistryForType(t) {
    for (let n = 0; n < this._typedRegistries.length; n++) {
      const i = this._typedRegistries[n]
      if (i.isForType(t)) return i
    }
    return this.plugins
  }
  _get(t, n, i) {
    const s = n.get(t)
    if (s === void 0) throw new Error('"' + t + '" is not a registered ' + i + '.')
    return s
  }
}
var on = new k3()
class P3 {
  constructor() {
    this._init = []
  }
  notify(t, n, i, s) {
    n === 'beforeInit' &&
      ((this._init = this._createDescriptors(t, !0)), this._notify(this._init, t, 'install'))
    const a = s ? this._descriptors(t).filter(s) : this._descriptors(t),
      l = this._notify(a, t, n, i)
    return (
      n === 'afterDestroy' &&
        (this._notify(a, t, 'stop'), this._notify(this._init, t, 'uninstall')),
      l
    )
  }
  _notify(t, n, i, s) {
    s = s || {}
    for (const a of t) {
      const l = a.plugin,
        u = l[i],
        f = [n, s, a.options]
      if (Lt(u, f, l) === !1 && s.cancelable) return !1
    }
    return !0
  }
  invalidate() {
    wt(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0))
  }
  _descriptors(t) {
    if (this._cache) return this._cache
    const n = (this._cache = this._createDescriptors(t))
    return (this._notifyStateChanges(t), n)
  }
  _createDescriptors(t, n) {
    const i = t && t.config,
      s = yt(i.options && i.options.plugins, {}),
      a = C3(i)
    return s === !1 && !n ? [] : T3(t, a, s, n)
  }
  _notifyStateChanges(t) {
    const n = this._oldCache || [],
      i = this._cache,
      s = (a, l) => a.filter(u => !l.some(f => u.plugin.id === f.plugin.id))
    ;(this._notify(s(n, i), t, 'stop'), this._notify(s(i, n), t, 'start'))
  }
}
function C3(e) {
  const t = {},
    n = [],
    i = Object.keys(on.plugins.items)
  for (let a = 0; a < i.length; a++) n.push(on.getPlugin(i[a]))
  const s = e.plugins || []
  for (let a = 0; a < s.length; a++) {
    const l = s[a]
    n.indexOf(l) === -1 && (n.push(l), (t[l.id] = !0))
  }
  return { plugins: n, localIds: t }
}
function M3(e, t) {
  return !t && e === !1 ? null : e === !0 ? {} : e
}
function T3(e, { plugins: t, localIds: n }, i, s) {
  const a = [],
    l = e.getContext()
  for (const u of t) {
    const f = u.id,
      h = M3(i[f], s)
    h !== null && a.push({ plugin: u, options: E3(e.config, { plugin: u, local: n[f] }, h, l) })
  }
  return a
}
function E3(e, { plugin: t, local: n }, i, s) {
  const a = e.pluginScopeKeys(t),
    l = e.getOptionScopes(i, a)
  return (
    n && t.defaults && l.push(t.defaults),
    e.createResolver(l, s, [''], { scriptable: !1, indexable: !1, allKeys: !0 })
  )
}
function Lf(e, t) {
  const n = Bt.datasets[e] || {}
  return ((t.datasets || {})[e] || {}).indexAxis || t.indexAxis || n.indexAxis || 'x'
}
function O3(e, t) {
  let n = e
  return (e === '_index_' ? (n = t) : e === '_value_' && (n = t === 'x' ? 'y' : 'x'), n)
}
function L3(e, t) {
  return e === t ? '_index_' : '_value_'
}
function Z0(e) {
  if (e === 'x' || e === 'y' || e === 'r') return e
}
function D3(e) {
  if (e === 'top' || e === 'bottom') return 'x'
  if (e === 'left' || e === 'right') return 'y'
}
function Df(e, ...t) {
  if (Z0(e)) return e
  for (const n of t) {
    const i = n.axis || D3(n.position) || (e.length > 1 && Z0(e[0].toLowerCase()))
    if (i) return i
  }
  throw new Error(
    `Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`
  )
}
function J0(e, t, n) {
  if (n[t + 'AxisID'] === e) return { axis: t }
}
function A3(e, t) {
  if (t.data && t.data.datasets) {
    const n = t.data.datasets.filter(i => i.xAxisID === e || i.yAxisID === e)
    if (n.length) return J0(e, 'x', n[0]) || J0(e, 'y', n[0])
  }
  return {}
}
function R3(e, t) {
  const n = ji[e.type] || { scales: {} },
    i = t.scales || {},
    s = Lf(e.type, t),
    a = Object.create(null)
  return (
    Object.keys(i).forEach(l => {
      const u = i[l]
      if (!St(u)) return console.error(`Invalid scale configuration for scale: ${l}`)
      if (u._proxy) return console.warn(`Ignoring resolver passed as options for scale: ${l}`)
      const f = Df(l, u, A3(l, e), Bt.scales[u.type]),
        h = L3(f, s),
        p = n.scales || {}
      a[l] = Fs(Object.create(null), [{ axis: f }, u, p[f], p[h]])
    }),
    e.data.datasets.forEach(l => {
      const u = l.type || e.type,
        f = l.indexAxis || Lf(u, t),
        p = (ji[u] || {}).scales || {}
      Object.keys(p).forEach(m => {
        const y = O3(m, f),
          x = l[y + 'AxisID'] || y
        ;((a[x] = a[x] || Object.create(null)), Fs(a[x], [{ axis: y }, i[x], p[m]]))
      })
    }),
    Object.keys(a).forEach(l => {
      const u = a[l]
      Fs(u, [Bt.scales[u.type], Bt.scale])
    }),
    a
  )
}
function i2(e) {
  const t = e.options || (e.options = {})
  ;((t.plugins = yt(t.plugins, {})), (t.scales = R3(e, t)))
}
function r2(e) {
  return ((e = e || {}), (e.datasets = e.datasets || []), (e.labels = e.labels || []), e)
}
function F3(e) {
  return ((e = e || {}), (e.data = r2(e.data)), i2(e), e)
}
const t1 = new Map(),
  s2 = new Set()
function Wa(e, t) {
  let n = t1.get(e)
  return (n || ((n = t()), t1.set(e, n), s2.add(n)), n)
}
const Ps = (e, t, n) => {
  const i = ui(t, n)
  i !== void 0 && e.add(i)
}
class I3 {
  constructor(t) {
    ;((this._config = F3(t)), (this._scopeCache = new Map()), (this._resolverCache = new Map()))
  }
  get platform() {
    return this._config.platform
  }
  get type() {
    return this._config.type
  }
  set type(t) {
    this._config.type = t
  }
  get data() {
    return this._config.data
  }
  set data(t) {
    this._config.data = r2(t)
  }
  get options() {
    return this._config.options
  }
  set options(t) {
    this._config.options = t
  }
  get plugins() {
    return this._config.plugins
  }
  update() {
    const t = this._config
    ;(this.clearCache(), i2(t))
  }
  clearCache() {
    ;(this._scopeCache.clear(), this._resolverCache.clear())
  }
  datasetScopeKeys(t) {
    return Wa(t, () => [[`datasets.${t}`, '']])
  }
  datasetAnimationScopeKeys(t, n) {
    return Wa(`${t}.transition.${n}`, () => [
      [`datasets.${t}.transitions.${n}`, `transitions.${n}`],
      [`datasets.${t}`, ''],
    ])
  }
  datasetElementScopeKeys(t, n) {
    return Wa(`${t}-${n}`, () => [
      [`datasets.${t}.elements.${n}`, `datasets.${t}`, `elements.${n}`, ''],
    ])
  }
  pluginScopeKeys(t) {
    const n = t.id,
      i = this.type
    return Wa(`${i}-plugin-${n}`, () => [[`plugins.${n}`, ...(t.additionalOptionScopes || [])]])
  }
  _cachedScopes(t, n) {
    const i = this._scopeCache
    let s = i.get(t)
    return ((!s || n) && ((s = new Map()), i.set(t, s)), s)
  }
  getOptionScopes(t, n, i) {
    const { options: s, type: a } = this,
      l = this._cachedScopes(t, i),
      u = l.get(n)
    if (u) return u
    const f = new Set()
    n.forEach(p => {
      ;(t && (f.add(t), p.forEach(m => Ps(f, t, m))),
        p.forEach(m => Ps(f, s, m)),
        p.forEach(m => Ps(f, ji[a] || {}, m)),
        p.forEach(m => Ps(f, Bt, m)),
        p.forEach(m => Ps(f, Ef, m)))
    })
    const h = Array.from(f)
    return (h.length === 0 && h.push(Object.create(null)), s2.has(n) && l.set(n, h), h)
  }
  chartOptionScopes() {
    const { options: t, type: n } = this
    return [t, ji[n] || {}, Bt.datasets[n] || {}, { type: n }, Bt, Ef]
  }
  resolveNamedOptions(t, n, i, s = ['']) {
    const a = { $shared: !0 },
      { resolver: l, subPrefixes: u } = e1(this._resolverCache, t, s)
    let f = l
    if (z3(l, n)) {
      ;((a.$shared = !1), (i = ci(i) ? i() : i))
      const h = this.createResolver(t, i, u)
      f = Mr(l, i, h)
    }
    for (const h of n) a[h] = f[h]
    return a
  }
  createResolver(t, n, i = [''], s) {
    const { resolver: a } = e1(this._resolverCache, t, i)
    return St(n) ? Mr(a, n, void 0, s) : a
  }
}
function e1(e, t, n) {
  let i = e.get(t)
  i || ((i = new Map()), e.set(t, i))
  const s = n.join()
  let a = i.get(s)
  return (
    a ||
      ((a = { resolver: Sh(t, n), subPrefixes: n.filter(u => !u.toLowerCase().includes('hover')) }),
      i.set(s, a)),
    a
  )
}
const V3 = e => St(e) && Object.getOwnPropertyNames(e).some(t => ci(e[t]))
function z3(e, t) {
  const { isScriptable: n, isIndexable: i } = Iv(e)
  for (const s of t) {
    const a = n(s),
      l = i(s),
      u = (l || a) && e[s]
    if ((a && (ci(u) || V3(u))) || (l && zt(u))) return !0
  }
  return !1
}
var B3 = '4.5.0'
const N3 = ['top', 'bottom', 'left', 'right', 'chartArea']
function n1(e, t) {
  return e === 'top' || e === 'bottom' || (N3.indexOf(e) === -1 && t === 'x')
}
function i1(e, t) {
  return function (n, i) {
    return n[e] === i[e] ? n[t] - i[t] : n[e] - i[e]
  }
}
function r1(e) {
  const t = e.chart,
    n = t.options.animation
  ;(t.notifyPlugins('afterRender'), Lt(n && n.onComplete, [e], t))
}
function j3(e) {
  const t = e.chart,
    n = t.options.animation
  Lt(n && n.onProgress, [e], t)
}
function o2(e) {
  return (
    Ph() && typeof e == 'string' ? (e = document.getElementById(e)) : e && e.length && (e = e[0]),
    e && e.canvas && (e = e.canvas),
    e
  )
}
const qa = {},
  s1 = e => {
    const t = o2(e)
    return Object.values(qa)
      .filter(n => n.canvas === t)
      .pop()
  }
function H3(e, t, n) {
  const i = Object.keys(e)
  for (const s of i) {
    const a = +s
    if (a >= t) {
      const l = e[s]
      ;(delete e[s], (n > 0 || a > t) && (e[a + n] = l))
    }
  }
}
function W3(e, t, n, i) {
  return !n || e.type === 'mouseout' ? null : i ? t : e
}
class a2 {
  static defaults = Bt
  static instances = qa
  static overrides = ji
  static registry = on
  static version = B3
  static getChart = s1
  static register(...t) {
    ;(on.add(...t), o1())
  }
  static unregister(...t) {
    ;(on.remove(...t), o1())
  }
  constructor(t, n) {
    const i = (this.config = new I3(n)),
      s = o2(t),
      a = s1(s)
    if (a)
      throw new Error(
        "Canvas is already in use. Chart with ID '" +
          a.id +
          "' must be destroyed before the canvas with ID '" +
          a.canvas.id +
          "' can be reused."
      )
    const l = i.createResolver(i.chartOptionScopes(), this.getContext())
    ;((this.platform = new (i.platform || a3(s))()), this.platform.updateConfig(i))
    const u = this.platform.acquireContext(s, l.aspectRatio),
      f = u && u.canvas,
      h = f && f.height,
      p = f && f.width
    if (
      ((this.id = zP()),
      (this.ctx = u),
      (this.canvas = f),
      (this.width = p),
      (this.height = h),
      (this._options = l),
      (this._aspectRatio = this.aspectRatio),
      (this._layers = []),
      (this._metasets = []),
      (this._stacks = void 0),
      (this.boxes = []),
      (this.currentDevicePixelRatio = void 0),
      (this.chartArea = void 0),
      (this._active = []),
      (this._lastEvent = void 0),
      (this._listeners = {}),
      (this._responsiveListeners = void 0),
      (this._sortedMetasets = []),
      (this.scales = {}),
      (this._plugins = new P3()),
      (this.$proxies = {}),
      (this._hiddenIndices = {}),
      (this.attached = !1),
      (this._animationsDisabled = void 0),
      (this.$context = void 0),
      (this._doResize = e6(m => this.update(m), l.resizeDelay || 0)),
      (this._dataChanges = []),
      (qa[this.id] = this),
      !u || !f)
    ) {
      console.error("Failed to create chart: can't acquire context from the given item")
      return
    }
    ;(xn.listen(this, 'complete', r1),
      xn.listen(this, 'progress', j3),
      this._initialize(),
      this.attached && this.update())
  }
  get aspectRatio() {
    const {
      options: { aspectRatio: t, maintainAspectRatio: n },
      width: i,
      height: s,
      _aspectRatio: a,
    } = this
    return wt(t) ? (n && a ? a : s ? i / s : null) : t
  }
  get data() {
    return this.config.data
  }
  set data(t) {
    this.config.data = t
  }
  get options() {
    return this._options
  }
  set options(t) {
    this.config.options = t
  }
  get registry() {
    return on
  }
  _initialize() {
    return (
      this.notifyPlugins('beforeInit'),
      this.options.responsive ? this.resize() : T0(this, this.options.devicePixelRatio),
      this.bindEvents(),
      this.notifyPlugins('afterInit'),
      this
    )
  }
  clear() {
    return (P0(this.canvas, this.ctx), this)
  }
  stop() {
    return (xn.stop(this), this)
  }
  resize(t, n) {
    xn.running(this) ? (this._resizeBeforeDraw = { width: t, height: n }) : this._resize(t, n)
  }
  _resize(t, n) {
    const i = this.options,
      s = this.canvas,
      a = i.maintainAspectRatio && this.aspectRatio,
      l = this.platform.getMaximumSize(s, t, n, a),
      u = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
      f = this.width ? 'resize' : 'attach'
    ;((this.width = l.width),
      (this.height = l.height),
      (this._aspectRatio = this.aspectRatio),
      T0(this, u, !0) &&
        (this.notifyPlugins('resize', { size: l }),
        Lt(i.onResize, [this, l], this),
        this.attached && this._doResize(f) && this.render()))
  }
  ensureScalesHaveIDs() {
    const n = this.options.scales || {}
    Mt(n, (i, s) => {
      i.id = s
    })
  }
  buildOrUpdateScales() {
    const t = this.options,
      n = t.scales,
      i = this.scales,
      s = Object.keys(i).reduce((l, u) => ((l[u] = !1), l), {})
    let a = []
    ;(n &&
      (a = a.concat(
        Object.keys(n).map(l => {
          const u = n[l],
            f = Df(l, u),
            h = f === 'r',
            p = f === 'x'
          return {
            options: u,
            dposition: h ? 'chartArea' : p ? 'bottom' : 'left',
            dtype: h ? 'radialLinear' : p ? 'category' : 'linear',
          }
        })
      )),
      Mt(a, l => {
        const u = l.options,
          f = u.id,
          h = Df(f, u),
          p = yt(u.type, l.dtype)
        ;((u.position === void 0 || n1(u.position, h) !== n1(l.dposition)) &&
          (u.position = l.dposition),
          (s[f] = !0))
        let m = null
        if (f in i && i[f].type === p) m = i[f]
        else {
          const y = on.getScale(p)
          ;((m = new y({ id: f, type: p, ctx: this.ctx, chart: this })), (i[m.id] = m))
        }
        m.init(u, t)
      }),
      Mt(s, (l, u) => {
        l || delete i[u]
      }),
      Mt(i, l => {
        ;(me.configure(this, l, l.options), me.addBox(this, l))
      }))
  }
  _updateMetasets() {
    const t = this._metasets,
      n = this.data.datasets.length,
      i = t.length
    if ((t.sort((s, a) => s.index - a.index), i > n)) {
      for (let s = n; s < i; ++s) this._destroyDatasetMeta(s)
      t.splice(n, i - n)
    }
    this._sortedMetasets = t.slice(0).sort(i1('order', 'index'))
  }
  _removeUnreferencedMetasets() {
    const {
      _metasets: t,
      data: { datasets: n },
    } = this
    ;(t.length > n.length && delete this._stacks,
      t.forEach((i, s) => {
        n.filter(a => a === i._dataset).length === 0 && this._destroyDatasetMeta(s)
      }))
  }
  buildOrUpdateControllers() {
    const t = [],
      n = this.data.datasets
    let i, s
    for (this._removeUnreferencedMetasets(), i = 0, s = n.length; i < s; i++) {
      const a = n[i]
      let l = this.getDatasetMeta(i)
      const u = a.type || this.config.type
      if (
        (l.type && l.type !== u && (this._destroyDatasetMeta(i), (l = this.getDatasetMeta(i))),
        (l.type = u),
        (l.indexAxis = a.indexAxis || Lf(u, this.options)),
        (l.order = a.order || 0),
        (l.index = i),
        (l.label = '' + a.label),
        (l.visible = this.isDatasetVisible(i)),
        l.controller)
      )
        (l.controller.updateIndex(i), l.controller.linkScales())
      else {
        const f = on.getController(u),
          { datasetElementType: h, dataElementType: p } = Bt.datasets[u]
        ;(Object.assign(f, {
          dataElementType: on.getElement(p),
          datasetElementType: h && on.getElement(h),
        }),
          (l.controller = new f(this, i)),
          t.push(l.controller))
      }
    }
    return (this._updateMetasets(), t)
  }
  _resetElements() {
    Mt(
      this.data.datasets,
      (t, n) => {
        this.getDatasetMeta(n).controller.reset()
      },
      this
    )
  }
  reset() {
    ;(this._resetElements(), this.notifyPlugins('reset'))
  }
  update(t) {
    const n = this.config
    n.update()
    const i = (this._options = n.createResolver(n.chartOptionScopes(), this.getContext())),
      s = (this._animationsDisabled = !i.animation)
    if (
      (this._updateScales(),
      this._checkEventBindings(),
      this._updateHiddenIndices(),
      this._plugins.invalidate(),
      this.notifyPlugins('beforeUpdate', { mode: t, cancelable: !0 }) === !1)
    )
      return
    const a = this.buildOrUpdateControllers()
    this.notifyPlugins('beforeElementsUpdate')
    let l = 0
    for (let h = 0, p = this.data.datasets.length; h < p; h++) {
      const { controller: m } = this.getDatasetMeta(h),
        y = !s && a.indexOf(m) === -1
      ;(m.buildOrUpdateElements(y), (l = Math.max(+m.getMaxOverflow(), l)))
    }
    ;((l = this._minPadding = i.layout.autoPadding ? l : 0),
      this._updateLayout(l),
      s ||
        Mt(a, h => {
          h.reset()
        }),
      this._updateDatasets(t),
      this.notifyPlugins('afterUpdate', { mode: t }),
      this._layers.sort(i1('z', '_idx')))
    const { _active: u, _lastEvent: f } = this
    ;(f ? this._eventHandler(f, !0) : u.length && this._updateHoverStyles(u, u, !0), this.render())
  }
  _updateScales() {
    ;(Mt(this.scales, t => {
      me.removeBox(this, t)
    }),
      this.ensureScalesHaveIDs(),
      this.buildOrUpdateScales())
  }
  _checkEventBindings() {
    const t = this.options,
      n = new Set(Object.keys(this._listeners)),
      i = new Set(t.events)
    ;(!g0(n, i) || !!this._responsiveListeners !== t.responsive) &&
      (this.unbindEvents(), this.bindEvents())
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this,
      n = this._getUniformDataChanges() || []
    for (const { method: i, start: s, count: a } of n) {
      const l = i === '_removeElements' ? -a : a
      H3(t, s, l)
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges
    if (!t || !t.length) return
    this._dataChanges = []
    const n = this.data.datasets.length,
      i = a => new Set(t.filter(l => l[0] === a).map((l, u) => u + ',' + l.splice(1).join(','))),
      s = i(0)
    for (let a = 1; a < n; a++) if (!g0(s, i(a))) return
    return Array.from(s)
      .map(a => a.split(','))
      .map(a => ({ method: a[1], start: +a[2], count: +a[3] }))
  }
  _updateLayout(t) {
    if (this.notifyPlugins('beforeLayout', { cancelable: !0 }) === !1) return
    me.update(this, this.width, this.height, t)
    const n = this.chartArea,
      i = n.width <= 0 || n.height <= 0
    ;((this._layers = []),
      Mt(
        this.boxes,
        s => {
          ;(i && s.position === 'chartArea') ||
            (s.configure && s.configure(), this._layers.push(...s._layers()))
        },
        this
      ),
      this._layers.forEach((s, a) => {
        s._idx = a
      }),
      this.notifyPlugins('afterLayout'))
  }
  _updateDatasets(t) {
    if (this.notifyPlugins('beforeDatasetsUpdate', { mode: t, cancelable: !0 }) !== !1) {
      for (let n = 0, i = this.data.datasets.length; n < i; ++n)
        this.getDatasetMeta(n).controller.configure()
      for (let n = 0, i = this.data.datasets.length; n < i; ++n)
        this._updateDataset(n, ci(t) ? t({ datasetIndex: n }) : t)
      this.notifyPlugins('afterDatasetsUpdate', { mode: t })
    }
  }
  _updateDataset(t, n) {
    const i = this.getDatasetMeta(t),
      s = { meta: i, index: t, mode: n, cancelable: !0 }
    this.notifyPlugins('beforeDatasetUpdate', s) !== !1 &&
      (i.controller._update(n), (s.cancelable = !1), this.notifyPlugins('afterDatasetUpdate', s))
  }
  render() {
    this.notifyPlugins('beforeRender', { cancelable: !0 }) !== !1 &&
      (xn.has(this)
        ? this.attached && !xn.running(this) && xn.start(this)
        : (this.draw(), r1({ chart: this })))
  }
  draw() {
    let t
    if (this._resizeBeforeDraw) {
      const { width: i, height: s } = this._resizeBeforeDraw
      ;((this._resizeBeforeDraw = null), this._resize(i, s))
    }
    if (
      (this.clear(),
      this.width <= 0 ||
        this.height <= 0 ||
        this.notifyPlugins('beforeDraw', { cancelable: !0 }) === !1)
    )
      return
    const n = this._layers
    for (t = 0; t < n.length && n[t].z <= 0; ++t) n[t].draw(this.chartArea)
    for (this._drawDatasets(); t < n.length; ++t) n[t].draw(this.chartArea)
    this.notifyPlugins('afterDraw')
  }
  _getSortedDatasetMetas(t) {
    const n = this._sortedMetasets,
      i = []
    let s, a
    for (s = 0, a = n.length; s < a; ++s) {
      const l = n[s]
      ;(!t || l.visible) && i.push(l)
    }
    return i
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(!0)
  }
  _drawDatasets() {
    if (this.notifyPlugins('beforeDatasetsDraw', { cancelable: !0 }) === !1) return
    const t = this.getSortedVisibleDatasetMetas()
    for (let n = t.length - 1; n >= 0; --n) this._drawDataset(t[n])
    this.notifyPlugins('afterDatasetsDraw')
  }
  _drawDataset(t) {
    const n = this.ctx,
      i = { meta: t, index: t.index, cancelable: !0 },
      s = Xv(this, t)
    this.notifyPlugins('beforeDatasetDraw', i) !== !1 &&
      (s && Ml(n, s),
      t.controller.draw(),
      s && Tl(n),
      (i.cancelable = !1),
      this.notifyPlugins('afterDatasetDraw', i))
  }
  isPointInArea(t) {
    return Pn(t, this.chartArea, this._minPadding)
  }
  getElementsAtEventForMode(t, n, i, s) {
    const a = NC.modes[n]
    return typeof a == 'function' ? a(this, t, i, s) : []
  }
  getDatasetMeta(t) {
    const n = this.data.datasets[t],
      i = this._metasets
    let s = i.filter(a => a && a._dataset === n).pop()
    return (
      s ||
        ((s = {
          type: null,
          data: [],
          dataset: null,
          controller: null,
          hidden: null,
          xAxisID: null,
          yAxisID: null,
          order: (n && n.order) || 0,
          index: t,
          _dataset: n,
          _parsed: [],
          _sorted: !1,
        }),
        i.push(s)),
      s
    )
  }
  getContext() {
    return this.$context || (this.$context = di(null, { chart: this, type: 'chart' }))
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length
  }
  isDatasetVisible(t) {
    const n = this.data.datasets[t]
    if (!n) return !1
    const i = this.getDatasetMeta(t)
    return typeof i.hidden == 'boolean' ? !i.hidden : !n.hidden
  }
  setDatasetVisibility(t, n) {
    const i = this.getDatasetMeta(t)
    i.hidden = !n
  }
  toggleDataVisibility(t) {
    this._hiddenIndices[t] = !this._hiddenIndices[t]
  }
  getDataVisibility(t) {
    return !this._hiddenIndices[t]
  }
  _updateVisibility(t, n, i) {
    const s = i ? 'show' : 'hide',
      a = this.getDatasetMeta(t),
      l = a.controller._resolveAnimations(void 0, s)
    Ys(n)
      ? ((a.data[n].hidden = !i), this.update())
      : (this.setDatasetVisibility(t, i),
        l.update(a, { visible: i }),
        this.update(u => (u.datasetIndex === t ? s : void 0)))
  }
  hide(t, n) {
    this._updateVisibility(t, n, !1)
  }
  show(t, n) {
    this._updateVisibility(t, n, !0)
  }
  _destroyDatasetMeta(t) {
    const n = this._metasets[t]
    ;(n && n.controller && n.controller._destroy(), delete this._metasets[t])
  }
  _stop() {
    let t, n
    for (this.stop(), xn.remove(this), t = 0, n = this.data.datasets.length; t < n; ++t)
      this._destroyDatasetMeta(t)
  }
  destroy() {
    this.notifyPlugins('beforeDestroy')
    const { canvas: t, ctx: n } = this
    ;(this._stop(),
      this.config.clearCache(),
      t &&
        (this.unbindEvents(),
        P0(t, n),
        this.platform.releaseContext(n),
        (this.canvas = null),
        (this.ctx = null)),
      delete qa[this.id],
      this.notifyPlugins('afterDestroy'))
  }
  toBase64Image(...t) {
    return this.canvas.toDataURL(...t)
  }
  bindEvents() {
    ;(this.bindUserEvents(),
      this.options.responsive ? this.bindResponsiveEvents() : (this.attached = !0))
  }
  bindUserEvents() {
    const t = this._listeners,
      n = this.platform,
      i = (a, l) => {
        ;(n.addEventListener(this, a, l), (t[a] = l))
      },
      s = (a, l, u) => {
        ;((a.offsetX = l), (a.offsetY = u), this._eventHandler(a))
      }
    Mt(this.options.events, a => i(a, s))
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {})
    const t = this._responsiveListeners,
      n = this.platform,
      i = (f, h) => {
        ;(n.addEventListener(this, f, h), (t[f] = h))
      },
      s = (f, h) => {
        t[f] && (n.removeEventListener(this, f, h), delete t[f])
      },
      a = (f, h) => {
        this.canvas && this.resize(f, h)
      }
    let l
    const u = () => {
      ;(s('attach', u), (this.attached = !0), this.resize(), i('resize', a), i('detach', l))
    }
    ;((l = () => {
      ;((this.attached = !1), s('resize', a), this._stop(), this._resize(0, 0), i('attach', u))
    }),
      n.isAttached(this.canvas) ? u() : l())
  }
  unbindEvents() {
    ;(Mt(this._listeners, (t, n) => {
      this.platform.removeEventListener(this, n, t)
    }),
      (this._listeners = {}),
      Mt(this._responsiveListeners, (t, n) => {
        this.platform.removeEventListener(this, n, t)
      }),
      (this._responsiveListeners = void 0))
  }
  updateHoverStyle(t, n, i) {
    const s = i ? 'set' : 'remove'
    let a, l, u, f
    for (
      n === 'dataset' &&
        ((a = this.getDatasetMeta(t[0].datasetIndex)),
        a.controller['_' + s + 'DatasetHoverStyle']()),
        u = 0,
        f = t.length;
      u < f;
      ++u
    ) {
      l = t[u]
      const h = l && this.getDatasetMeta(l.datasetIndex).controller
      h && h[s + 'HoverStyle'](l.element, l.datasetIndex, l.index)
    }
  }
  getActiveElements() {
    return this._active || []
  }
  setActiveElements(t) {
    const n = this._active || [],
      i = t.map(({ datasetIndex: a, index: l }) => {
        const u = this.getDatasetMeta(a)
        if (!u) throw new Error('No dataset found at index ' + a)
        return { datasetIndex: a, element: u.data[l], index: l }
      })
    !ol(i, n) && ((this._active = i), (this._lastEvent = null), this._updateHoverStyles(i, n))
  }
  notifyPlugins(t, n, i) {
    return this._plugins.notify(this, t, n, i)
  }
  isPluginEnabled(t) {
    return this._plugins._cache.filter(n => n.plugin.id === t).length === 1
  }
  _updateHoverStyles(t, n, i) {
    const s = this.options.hover,
      a = (f, h) =>
        f.filter(p => !h.some(m => p.datasetIndex === m.datasetIndex && p.index === m.index)),
      l = a(n, t),
      u = i ? t : a(t, n)
    ;(l.length && this.updateHoverStyle(l, s.mode, !1),
      u.length && s.mode && this.updateHoverStyle(u, s.mode, !0))
  }
  _eventHandler(t, n) {
    const i = { event: t, replay: n, cancelable: !0, inChartArea: this.isPointInArea(t) },
      s = l => (l.options.events || this.options.events).includes(t.native.type)
    if (this.notifyPlugins('beforeEvent', i, s) === !1) return
    const a = this._handleEvent(t, n, i.inChartArea)
    return (
      (i.cancelable = !1),
      this.notifyPlugins('afterEvent', i, s),
      (a || i.changed) && this.render(),
      this
    )
  }
  _handleEvent(t, n, i) {
    const { _active: s = [], options: a } = this,
      l = n,
      u = this._getActiveElements(t, s, i, l),
      f = UP(t),
      h = W3(t, this._lastEvent, i, f)
    i &&
      ((this._lastEvent = null),
      Lt(a.onHover, [t, u, this], this),
      f && Lt(a.onClick, [t, u, this], this))
    const p = !ol(u, s)
    return (
      (p || n) && ((this._active = u), this._updateHoverStyles(u, s, n)),
      (this._lastEvent = h),
      p
    )
  }
  _getActiveElements(t, n, i, s) {
    if (t.type === 'mouseout') return []
    if (!i) return n
    const a = this.options.hover
    return this.getElementsAtEventForMode(t, a.mode, a, s)
  }
}
function o1() {
  return Mt(a2.instances, e => e._plugins.invalidate())
}
function U3(e, t, n) {
  const { startAngle: i, x: s, y: a, outerRadius: l, innerRadius: u, options: f } = t,
    { borderWidth: h, borderJoinStyle: p } = f,
    m = Math.min(h / l, pe(i - n))
  if ((e.beginPath(), e.arc(s, a, l - h / 2, i + m / 2, n - m / 2), u > 0)) {
    const y = Math.min(h / u, pe(i - n))
    e.arc(s, a, u + h / 2, n - y / 2, i + y / 2, !0)
  } else {
    const y = Math.min(h / 2, l * pe(i - n))
    if (p === 'round') e.arc(s, a, y, n - Pt / 2, i + Pt / 2, !0)
    else if (p === 'bevel') {
      const x = 2 * y * y,
        _ = -x * Math.cos(n + Pt / 2) + s,
        w = -x * Math.sin(n + Pt / 2) + a,
        S = x * Math.cos(i + Pt / 2) + s,
        k = x * Math.sin(i + Pt / 2) + a
      ;(e.lineTo(_, w), e.lineTo(S, k))
    }
  }
  ;(e.closePath(), e.moveTo(0, 0), e.rect(0, 0, e.canvas.width, e.canvas.height), e.clip('evenodd'))
}
function $3(e, t, n) {
  const { startAngle: i, pixelMargin: s, x: a, y: l, outerRadius: u, innerRadius: f } = t
  let h = s / u
  ;(e.beginPath(),
    e.arc(a, l, u, i - h, n + h),
    f > s ? ((h = s / f), e.arc(a, l, f, n + h, i - h, !0)) : e.arc(a, l, s, n + Kt, i - Kt),
    e.closePath(),
    e.clip())
}
function Y3(e) {
  return wh(e, ['outerStart', 'outerEnd', 'innerStart', 'innerEnd'])
}
function X3(e, t, n, i) {
  const s = Y3(e.options.borderRadius),
    a = (n - t) / 2,
    l = Math.min(a, (i * t) / 2),
    u = f => {
      const h = ((n - Math.min(a, f)) * i) / 2
      return se(f, 0, Math.min(a, h))
    }
  return {
    outerStart: u(s.outerStart),
    outerEnd: u(s.outerEnd),
    innerStart: se(s.innerStart, 0, l),
    innerEnd: se(s.innerEnd, 0, l),
  }
}
function vr(e, t, n, i) {
  return { x: n + e * Math.cos(t), y: i + e * Math.sin(t) }
}
function hl(e, t, n, i, s, a) {
  const { x: l, y: u, startAngle: f, pixelMargin: h, innerRadius: p } = t,
    m = Math.max(t.outerRadius + i + n - h, 0),
    y = p > 0 ? p + i + n + h : 0
  let x = 0
  const _ = s - f
  if (i) {
    const st = p > 0 ? p - i : 0,
      tt = m > 0 ? m - i : 0,
      rt = (st + tt) / 2,
      K = rt !== 0 ? (_ * rt) / (rt + i) : _
    x = (_ - K) / 2
  }
  const w = Math.max(0.001, _ * m - n / Pt) / m,
    S = (_ - w) / 2,
    k = f + S + x,
    P = s - S - x,
    { outerStart: C, outerEnd: T, innerStart: E, innerEnd: R } = X3(t, y, m, P - k),
    A = m - C,
    V = m - T,
    j = k + C / A,
    W = P - T / V,
    N = y + E,
    F = y + R,
    q = k + E / N,
    $ = P - R / F
  if ((e.beginPath(), a)) {
    const st = (j + W) / 2
    if ((e.arc(l, u, m, j, st), e.arc(l, u, m, st, W), T > 0)) {
      const J = vr(V, W, l, u)
      e.arc(J.x, J.y, T, W, P + Kt)
    }
    const tt = vr(F, P, l, u)
    if ((e.lineTo(tt.x, tt.y), R > 0)) {
      const J = vr(F, $, l, u)
      e.arc(J.x, J.y, R, P + Kt, $ + Math.PI)
    }
    const rt = (P - R / y + (k + E / y)) / 2
    if ((e.arc(l, u, y, P - R / y, rt, !0), e.arc(l, u, y, rt, k + E / y, !0), E > 0)) {
      const J = vr(N, q, l, u)
      e.arc(J.x, J.y, E, q + Math.PI, k - Kt)
    }
    const K = vr(A, k, l, u)
    if ((e.lineTo(K.x, K.y), C > 0)) {
      const J = vr(A, j, l, u)
      e.arc(J.x, J.y, C, k - Kt, j)
    }
  } else {
    e.moveTo(l, u)
    const st = Math.cos(j) * m + l,
      tt = Math.sin(j) * m + u
    e.lineTo(st, tt)
    const rt = Math.cos(W) * m + l,
      K = Math.sin(W) * m + u
    e.lineTo(rt, K)
  }
  e.closePath()
}
function K3(e, t, n, i, s) {
  const { fullCircles: a, startAngle: l, circumference: u } = t
  let f = t.endAngle
  if (a) {
    hl(e, t, n, i, f, s)
    for (let h = 0; h < a; ++h) e.fill()
    isNaN(u) || (f = l + (u % Ft || Ft))
  }
  return (hl(e, t, n, i, f, s), e.fill(), f)
}
function G3(e, t, n, i, s) {
  const { fullCircles: a, startAngle: l, circumference: u, options: f } = t,
    { borderWidth: h, borderJoinStyle: p, borderDash: m, borderDashOffset: y, borderRadius: x } = f,
    _ = f.borderAlign === 'inner'
  if (!h) return
  ;(e.setLineDash(m || []),
    (e.lineDashOffset = y),
    _
      ? ((e.lineWidth = h * 2), (e.lineJoin = p || 'round'))
      : ((e.lineWidth = h), (e.lineJoin = p || 'bevel')))
  let w = t.endAngle
  if (a) {
    hl(e, t, n, i, w, s)
    for (let S = 0; S < a; ++S) e.stroke()
    isNaN(u) || (w = l + (u % Ft || Ft))
  }
  ;(_ && $3(e, t, w),
    f.selfJoin && w - l >= Pt && x === 0 && p !== 'miter' && U3(e, t, w),
    a || (hl(e, t, n, i, w, s), e.stroke()))
}
class q3 extends Ln {
  static id = 'arc'
  static defaults = {
    borderAlign: 'center',
    borderColor: '#fff',
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: void 0,
    borderRadius: 0,
    borderWidth: 2,
    offset: 0,
    spacing: 0,
    angle: void 0,
    circular: !0,
    selfJoin: !1,
  }
  static defaultRoutes = { backgroundColor: 'backgroundColor' }
  static descriptors = { _scriptable: !0, _indexable: t => t !== 'borderDash' }
  circumference
  endAngle
  fullCircles
  innerRadius
  outerRadius
  pixelMargin
  startAngle
  constructor(t) {
    ;(super(),
      (this.options = void 0),
      (this.circumference = void 0),
      (this.startAngle = void 0),
      (this.endAngle = void 0),
      (this.innerRadius = void 0),
      (this.outerRadius = void 0),
      (this.pixelMargin = 0),
      (this.fullCircles = 0),
      t && Object.assign(this, t))
  }
  inRange(t, n, i) {
    const s = this.getProps(['x', 'y'], i),
      { angle: a, distance: l } = Cv(s, { x: t, y: n }),
      {
        startAngle: u,
        endAngle: f,
        innerRadius: h,
        outerRadius: p,
        circumference: m,
      } = this.getProps(
        ['startAngle', 'endAngle', 'innerRadius', 'outerRadius', 'circumference'],
        i
      ),
      y = (this.options.spacing + this.options.borderWidth) / 2,
      x = yt(m, f - u),
      _ = Xs(a, u, f) && u !== f,
      w = x >= Ft || _,
      S = bn(l, h + y, p + y)
    return w && S
  }
  getCenterPoint(t) {
    const {
        x: n,
        y: i,
        startAngle: s,
        endAngle: a,
        innerRadius: l,
        outerRadius: u,
      } = this.getProps(['x', 'y', 'startAngle', 'endAngle', 'innerRadius', 'outerRadius'], t),
      { offset: f, spacing: h } = this.options,
      p = (s + a) / 2,
      m = (l + u + h + f) / 2
    return { x: n + Math.cos(p) * m, y: i + Math.sin(p) * m }
  }
  tooltipPosition(t) {
    return this.getCenterPoint(t)
  }
  draw(t) {
    const { options: n, circumference: i } = this,
      s = (n.offset || 0) / 4,
      a = (n.spacing || 0) / 2,
      l = n.circular
    if (
      ((this.pixelMargin = n.borderAlign === 'inner' ? 0.33 : 0),
      (this.fullCircles = i > Ft ? Math.floor(i / Ft) : 0),
      i === 0 || this.innerRadius < 0 || this.outerRadius < 0)
    )
      return
    t.save()
    const u = (this.startAngle + this.endAngle) / 2
    t.translate(Math.cos(u) * s, Math.sin(u) * s)
    const f = 1 - Math.sin(Math.min(Pt, i || 0)),
      h = s * f
    ;((t.fillStyle = n.backgroundColor),
      (t.strokeStyle = n.borderColor),
      K3(t, this, h, a, l),
      G3(t, this, h, a, l),
      t.restore())
  }
}
function l2(e, t, n = t) {
  ;((e.lineCap = yt(n.borderCapStyle, t.borderCapStyle)),
    e.setLineDash(yt(n.borderDash, t.borderDash)),
    (e.lineDashOffset = yt(n.borderDashOffset, t.borderDashOffset)),
    (e.lineJoin = yt(n.borderJoinStyle, t.borderJoinStyle)),
    (e.lineWidth = yt(n.borderWidth, t.borderWidth)),
    (e.strokeStyle = yt(n.borderColor, t.borderColor)))
}
function Q3(e, t, n) {
  e.lineTo(n.x, n.y)
}
function Z3(e) {
  return e.stepped ? d6 : e.tension || e.cubicInterpolationMode === 'monotone' ? p6 : Q3
}
function u2(e, t, n = {}) {
  const i = e.length,
    { start: s = 0, end: a = i - 1 } = n,
    { start: l, end: u } = t,
    f = Math.max(s, l),
    h = Math.min(a, u),
    p = (s < l && a < l) || (s > u && a > u)
  return { count: i, start: f, loop: t.loop, ilen: h < f && !p ? i + h - f : h - f }
}
function J3(e, t, n, i) {
  const { points: s, options: a } = t,
    { count: l, start: u, loop: f, ilen: h } = u2(s, n, i),
    p = Z3(a)
  let { move: m = !0, reverse: y } = i || {},
    x,
    _,
    w
  for (x = 0; x <= h; ++x)
    ((_ = s[(u + (y ? h - x : x)) % l]),
      !_.skip && (m ? (e.moveTo(_.x, _.y), (m = !1)) : p(e, w, _, y, a.stepped), (w = _)))
  return (f && ((_ = s[(u + (y ? h : 0)) % l]), p(e, w, _, y, a.stepped)), !!f)
}
function tM(e, t, n, i) {
  const s = t.points,
    { count: a, start: l, ilen: u } = u2(s, n, i),
    { move: f = !0, reverse: h } = i || {}
  let p = 0,
    m = 0,
    y,
    x,
    _,
    w,
    S,
    k
  const P = T => (l + (h ? u - T : T)) % a,
    C = () => {
      w !== S && (e.lineTo(p, S), e.lineTo(p, w), e.lineTo(p, k))
    }
  for (f && ((x = s[P(0)]), e.moveTo(x.x, x.y)), y = 0; y <= u; ++y) {
    if (((x = s[P(y)]), x.skip)) continue
    const T = x.x,
      E = x.y,
      R = T | 0
    ;(R === _
      ? (E < w ? (w = E) : E > S && (S = E), (p = (m * p + T) / ++m))
      : (C(), e.lineTo(T, E), (_ = R), (m = 0), (w = S = E)),
      (k = E))
  }
  C()
}
function Af(e) {
  const t = e.options,
    n = t.borderDash && t.borderDash.length
  return !e._decimated &&
    !e._loop &&
    !t.tension &&
    t.cubicInterpolationMode !== 'monotone' &&
    !t.stepped &&
    !n
    ? tM
    : J3
}
function eM(e) {
  return e.stepped ? Y6 : e.tension || e.cubicInterpolationMode === 'monotone' ? X6 : Ii
}
function nM(e, t, n, i) {
  let s = t._path
  ;(s || ((s = t._path = new Path2D()), t.path(s, n, i) && s.closePath()),
    l2(e, t.options),
    e.stroke(s))
}
function iM(e, t, n, i) {
  const { segments: s, options: a } = t,
    l = Af(t)
  for (const u of s)
    (l2(e, a, u.style),
      e.beginPath(),
      l(e, t, u, { start: n, end: n + i - 1 }) && e.closePath(),
      e.stroke())
}
const rM = typeof Path2D == 'function'
function sM(e, t, n, i) {
  rM && !t.options.segment ? nM(e, t, n, i) : iM(e, t, n, i)
}
class Ll extends Ln {
  static id = 'line'
  static defaults = {
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: 'miter',
    borderWidth: 3,
    capBezierPoints: !0,
    cubicInterpolationMode: 'default',
    fill: !1,
    spanGaps: !1,
    stepped: !1,
    tension: 0,
  }
  static defaultRoutes = { backgroundColor: 'backgroundColor', borderColor: 'borderColor' }
  static descriptors = { _scriptable: !0, _indexable: t => t !== 'borderDash' && t !== 'fill' }
  constructor(t) {
    ;(super(),
      (this.animated = !0),
      (this.options = void 0),
      (this._chart = void 0),
      (this._loop = void 0),
      (this._fullLoop = void 0),
      (this._path = void 0),
      (this._points = void 0),
      (this._segments = void 0),
      (this._decimated = !1),
      (this._pointsUpdated = !1),
      (this._datasetIndex = void 0),
      t && Object.assign(this, t))
  }
  updateControlPoints(t, n) {
    const i = this.options
    if (
      (i.tension || i.cubicInterpolationMode === 'monotone') &&
      !i.stepped &&
      !this._pointsUpdated
    ) {
      const s = i.spanGaps ? this._loop : this._fullLoop
      ;(z6(this._points, i, t, s, n), (this._pointsUpdated = !0))
    }
  }
  set points(t) {
    ;((this._points = t), delete this._segments, delete this._path, (this._pointsUpdated = !1))
  }
  get points() {
    return this._points
  }
  get segments() {
    return this._segments || (this._segments = J6(this, this.options.segment))
  }
  first() {
    const t = this.segments,
      n = this.points
    return t.length && n[t[0].start]
  }
  last() {
    const t = this.segments,
      n = this.points,
      i = t.length
    return i && n[t[i - 1].end]
  }
  interpolate(t, n) {
    const i = this.options,
      s = t[n],
      a = this.points,
      l = Yv(this, { property: n, start: s, end: s })
    if (!l.length) return
    const u = [],
      f = eM(i)
    let h, p
    for (h = 0, p = l.length; h < p; ++h) {
      const { start: m, end: y } = l[h],
        x = a[m],
        _ = a[y]
      if (x === _) {
        u.push(x)
        continue
      }
      const w = Math.abs((s - x[n]) / (_[n] - x[n])),
        S = f(x, _, w, i.stepped)
      ;((S[n] = t[n]), u.push(S))
    }
    return u.length === 1 ? u[0] : u
  }
  pathSegment(t, n, i) {
    return Af(this)(t, this, n, i)
  }
  path(t, n, i) {
    const s = this.segments,
      a = Af(this)
    let l = this._loop
    ;((n = n || 0), (i = i || this.points.length - n))
    for (const u of s) l &= a(t, this, u, { start: n, end: n + i - 1 })
    return !!l
  }
  draw(t, n, i, s) {
    const a = this.options || {}
    ;((this.points || []).length && a.borderWidth && (t.save(), sM(t, this, i, s), t.restore()),
      this.animated && ((this._pointsUpdated = !1), (this._path = void 0)))
  }
}
function a1(e, t, n, i) {
  const s = e.options,
    { [n]: a } = e.getProps([n], i)
  return Math.abs(t - a) < s.radius + s.hitRadius
}
class oM extends Ln {
  static id = 'point'
  parsed
  skip
  stop
  static defaults = {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: 'circle',
    radius: 3,
    rotation: 0,
  }
  static defaultRoutes = { backgroundColor: 'backgroundColor', borderColor: 'borderColor' }
  constructor(t) {
    ;(super(),
      (this.options = void 0),
      (this.parsed = void 0),
      (this.skip = void 0),
      (this.stop = void 0),
      t && Object.assign(this, t))
  }
  inRange(t, n, i) {
    const s = this.options,
      { x: a, y: l } = this.getProps(['x', 'y'], i)
    return Math.pow(t - a, 2) + Math.pow(n - l, 2) < Math.pow(s.hitRadius + s.radius, 2)
  }
  inXRange(t, n) {
    return a1(this, t, 'x', n)
  }
  inYRange(t, n) {
    return a1(this, t, 'y', n)
  }
  getCenterPoint(t) {
    const { x: n, y: i } = this.getProps(['x', 'y'], t)
    return { x: n, y: i }
  }
  size(t) {
    t = t || this.options || {}
    let n = t.radius || 0
    n = Math.max(n, (n && t.hoverRadius) || 0)
    const i = (n && t.borderWidth) || 0
    return (n + i) * 2
  }
  draw(t, n) {
    const i = this.options
    this.skip ||
      i.radius < 0.1 ||
      !Pn(this, n, this.size(i) / 2) ||
      ((t.strokeStyle = i.borderColor),
      (t.lineWidth = i.borderWidth),
      (t.fillStyle = i.backgroundColor),
      Of(t, i, this.x, this.y))
  }
  getRange() {
    const t = this.options || {}
    return t.radius + t.hitRadius
  }
}
function c2(e, t) {
  const {
    x: n,
    y: i,
    base: s,
    width: a,
    height: l,
  } = e.getProps(['x', 'y', 'base', 'width', 'height'], t)
  let u, f, h, p, m
  return (
    e.horizontal
      ? ((m = l / 2), (u = Math.min(n, s)), (f = Math.max(n, s)), (h = i - m), (p = i + m))
      : ((m = a / 2), (u = n - m), (f = n + m), (h = Math.min(i, s)), (p = Math.max(i, s))),
    { left: u, top: h, right: f, bottom: p }
  )
}
function ni(e, t, n, i) {
  return e ? 0 : se(t, n, i)
}
function aM(e, t, n) {
  const i = e.options.borderWidth,
    s = e.borderSkipped,
    a = Fv(i)
  return {
    t: ni(s.top, a.top, 0, n),
    r: ni(s.right, a.right, 0, t),
    b: ni(s.bottom, a.bottom, 0, n),
    l: ni(s.left, a.left, 0, t),
  }
}
function lM(e, t, n) {
  const { enableBorderRadius: i } = e.getProps(['enableBorderRadius']),
    s = e.options.borderRadius,
    a = Bi(s),
    l = Math.min(t, n),
    u = e.borderSkipped,
    f = i || St(s)
  return {
    topLeft: ni(!f || u.top || u.left, a.topLeft, 0, l),
    topRight: ni(!f || u.top || u.right, a.topRight, 0, l),
    bottomLeft: ni(!f || u.bottom || u.left, a.bottomLeft, 0, l),
    bottomRight: ni(!f || u.bottom || u.right, a.bottomRight, 0, l),
  }
}
function uM(e) {
  const t = c2(e),
    n = t.right - t.left,
    i = t.bottom - t.top,
    s = aM(e, n / 2, i / 2),
    a = lM(e, n / 2, i / 2)
  return {
    outer: { x: t.left, y: t.top, w: n, h: i, radius: a },
    inner: {
      x: t.left + s.l,
      y: t.top + s.t,
      w: n - s.l - s.r,
      h: i - s.t - s.b,
      radius: {
        topLeft: Math.max(0, a.topLeft - Math.max(s.t, s.l)),
        topRight: Math.max(0, a.topRight - Math.max(s.t, s.r)),
        bottomLeft: Math.max(0, a.bottomLeft - Math.max(s.b, s.l)),
        bottomRight: Math.max(0, a.bottomRight - Math.max(s.b, s.r)),
      },
    },
  }
}
function af(e, t, n, i) {
  const s = t === null,
    a = n === null,
    u = e && !(s && a) && c2(e, i)
  return u && (s || bn(t, u.left, u.right)) && (a || bn(n, u.top, u.bottom))
}
function cM(e) {
  return e.topLeft || e.topRight || e.bottomLeft || e.bottomRight
}
function fM(e, t) {
  e.rect(t.x, t.y, t.w, t.h)
}
function lf(e, t, n = {}) {
  const i = e.x !== n.x ? -t : 0,
    s = e.y !== n.y ? -t : 0,
    a = (e.x + e.w !== n.x + n.w ? t : 0) - i,
    l = (e.y + e.h !== n.y + n.h ? t : 0) - s
  return { x: e.x + i, y: e.y + s, w: e.w + a, h: e.h + l, radius: e.radius }
}
class hM extends Ln {
  static id = 'bar'
  static defaults = {
    borderSkipped: 'start',
    borderWidth: 0,
    borderRadius: 0,
    inflateAmount: 'auto',
    pointStyle: void 0,
  }
  static defaultRoutes = { backgroundColor: 'backgroundColor', borderColor: 'borderColor' }
  constructor(t) {
    ;(super(),
      (this.options = void 0),
      (this.horizontal = void 0),
      (this.base = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.inflateAmount = void 0),
      t && Object.assign(this, t))
  }
  draw(t) {
    const {
        inflateAmount: n,
        options: { borderColor: i, backgroundColor: s },
      } = this,
      { inner: a, outer: l } = uM(this),
      u = cM(l.radius) ? Ks : fM
    ;(t.save(),
      (l.w !== a.w || l.h !== a.h) &&
        (t.beginPath(),
        u(t, lf(l, n, a)),
        t.clip(),
        u(t, lf(a, -n, l)),
        (t.fillStyle = i),
        t.fill('evenodd')),
      t.beginPath(),
      u(t, lf(a, n)),
      (t.fillStyle = s),
      t.fill(),
      t.restore())
  }
  inRange(t, n, i) {
    return af(this, t, n, i)
  }
  inXRange(t, n) {
    return af(this, t, null, n)
  }
  inYRange(t, n) {
    return af(this, null, t, n)
  }
  getCenterPoint(t) {
    const {
      x: n,
      y: i,
      base: s,
      horizontal: a,
    } = this.getProps(['x', 'y', 'base', 'horizontal'], t)
    return { x: a ? (n + s) / 2 : n, y: a ? i : (i + s) / 2 }
  }
  getRange(t) {
    return t === 'x' ? this.width / 2 : this.height / 2
  }
}
var dM = Object.freeze({
  __proto__: null,
  ArcElement: q3,
  BarElement: hM,
  LineElement: Ll,
  PointElement: oM,
})
const Rf = [
    'rgb(54, 162, 235)',
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(153, 102, 255)',
    'rgb(201, 203, 207)',
  ],
  l1 = Rf.map(e => e.replace('rgb(', 'rgba(').replace(')', ', 0.5)'))
function f2(e) {
  return Rf[e % Rf.length]
}
function h2(e) {
  return l1[e % l1.length]
}
function pM(e, t) {
  return ((e.borderColor = f2(t)), (e.backgroundColor = h2(t)), ++t)
}
function mM(e, t) {
  return ((e.backgroundColor = e.data.map(() => f2(t++))), t)
}
function gM(e, t) {
  return ((e.backgroundColor = e.data.map(() => h2(t++))), t)
}
function yM(e) {
  let t = 0
  return (n, i) => {
    const s = e.getDatasetMeta(i).controller
    s instanceof Mh ? (t = mM(n, t)) : s instanceof Qv ? (t = gM(n, t)) : s && (t = pM(n, t))
  }
}
function u1(e) {
  let t
  for (t in e) if (e[t].borderColor || e[t].backgroundColor) return !0
  return !1
}
function vM(e) {
  return e && (e.borderColor || e.backgroundColor)
}
function xM() {
  return Bt.borderColor !== 'rgba(0,0,0,0.1)' || Bt.backgroundColor !== 'rgba(0,0,0,0.1)'
}
var _M = {
  id: 'colors',
  defaults: { enabled: !0, forceOverride: !1 },
  beforeLayout(e, t, n) {
    if (!n.enabled) return
    const {
        data: { datasets: i },
        options: s,
      } = e.config,
      { elements: a } = s,
      l = u1(i) || vM(s) || (a && u1(a)) || xM()
    if (!n.forceOverride && l) return
    const u = yM(e)
    i.forEach(u)
  },
}
function wM(e, t, n, i, s) {
  const a = s.samples || i
  if (a >= n) return e.slice(t, t + n)
  const l = [],
    u = (n - 2) / (a - 2)
  let f = 0
  const h = t + n - 1
  let p = t,
    m,
    y,
    x,
    _,
    w
  for (l[f++] = e[p], m = 0; m < a - 2; m++) {
    let S = 0,
      k = 0,
      P
    const C = Math.floor((m + 1) * u) + 1 + t,
      T = Math.min(Math.floor((m + 2) * u) + 1, n) + t,
      E = T - C
    for (P = C; P < T; P++) ((S += e[P].x), (k += e[P].y))
    ;((S /= E), (k /= E))
    const R = Math.floor(m * u) + 1 + t,
      A = Math.min(Math.floor((m + 1) * u) + 1, n) + t,
      { x: V, y: j } = e[p]
    for (x = _ = -1, P = R; P < A; P++)
      ((_ = 0.5 * Math.abs((V - S) * (e[P].y - j) - (V - e[P].x) * (k - j))),
        _ > x && ((x = _), (y = e[P]), (w = P)))
    ;((l[f++] = y), (p = w))
  }
  return ((l[f++] = e[h]), l)
}
function SM(e, t, n, i) {
  let s = 0,
    a = 0,
    l,
    u,
    f,
    h,
    p,
    m,
    y,
    x,
    _,
    w
  const S = [],
    k = t + n - 1,
    P = e[t].x,
    T = e[k].x - P
  for (l = t; l < t + n; ++l) {
    ;((u = e[l]), (f = ((u.x - P) / T) * i), (h = u.y))
    const E = f | 0
    if (E === p)
      (h < _ ? ((_ = h), (m = l)) : h > w && ((w = h), (y = l)), (s = (a * s + u.x) / ++a))
    else {
      const R = l - 1
      if (!wt(m) && !wt(y)) {
        const A = Math.min(m, y),
          V = Math.max(m, y)
        ;(A !== x && A !== R && S.push({ ...e[A], x: s }),
          V !== x && V !== R && S.push({ ...e[V], x: s }))
      }
      ;(l > 0 && R !== x && S.push(e[R]), S.push(u), (p = E), (a = 0), (_ = w = h), (m = y = x = l))
    }
  }
  return S
}
function d2(e) {
  if (e._decimated) {
    const t = e._data
    ;(delete e._decimated,
      delete e._data,
      Object.defineProperty(e, 'data', {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: t,
      }))
  }
}
function c1(e) {
  e.data.datasets.forEach(t => {
    d2(t)
  })
}
function bM(e, t) {
  const n = t.length
  let i = 0,
    s
  const { iScale: a } = e,
    { min: l, max: u, minDefined: f, maxDefined: h } = a.getUserBounds()
  return (
    f && (i = se(kn(t, a.axis, l).lo, 0, n - 1)),
    h ? (s = se(kn(t, a.axis, u).hi + 1, i, n) - i) : (s = n - i),
    { start: i, count: s }
  )
}
var kM = {
  id: 'decimation',
  defaults: { algorithm: 'min-max', enabled: !1 },
  beforeElementsUpdate: (e, t, n) => {
    if (!n.enabled) {
      c1(e)
      return
    }
    const i = e.width
    e.data.datasets.forEach((s, a) => {
      const { _data: l, indexAxis: u } = s,
        f = e.getDatasetMeta(a),
        h = l || s.data
      if (Ts([u, e.options.indexAxis]) === 'y' || !f.controller.supportsDecimation) return
      const p = e.scales[f.xAxisID]
      if ((p.type !== 'linear' && p.type !== 'time') || e.options.parsing) return
      let { start: m, count: y } = bM(f, h)
      const x = n.threshold || 4 * i
      if (y <= x) {
        d2(s)
        return
      }
      wt(l) &&
        ((s._data = h),
        delete s.data,
        Object.defineProperty(s, 'data', {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this._decimated
          },
          set: function (w) {
            this._data = w
          },
        }))
      let _
      switch (n.algorithm) {
        case 'lttb':
          _ = wM(h, m, y, i, n)
          break
        case 'min-max':
          _ = SM(h, m, y, i)
          break
        default:
          throw new Error(`Unsupported decimation algorithm '${n.algorithm}'`)
      }
      s._decimated = _
    })
  },
  destroy(e) {
    c1(e)
  },
}
function PM(e, t, n) {
  const i = e.segments,
    s = e.points,
    a = t.points,
    l = []
  for (const u of i) {
    let { start: f, end: h } = u
    h = Dl(f, h, s)
    const p = Ff(n, s[f], s[h], u.loop)
    if (!t.segments) {
      l.push({ source: u, target: p, start: s[f], end: s[h] })
      continue
    }
    const m = Yv(t, p)
    for (const y of m) {
      const x = Ff(n, a[y.start], a[y.end], y.loop),
        _ = $v(u, s, x)
      for (const w of _)
        l.push({
          source: w,
          target: y,
          start: { [n]: f1(p, x, 'start', Math.max) },
          end: { [n]: f1(p, x, 'end', Math.min) },
        })
    }
  }
  return l
}
function Ff(e, t, n, i) {
  if (i) return
  let s = t[e],
    a = n[e]
  return (e === 'angle' && ((s = pe(s)), (a = pe(a))), { property: e, start: s, end: a })
}
function CM(e, t) {
  const { x: n = null, y: i = null } = e || {},
    s = t.points,
    a = []
  return (
    t.segments.forEach(({ start: l, end: u }) => {
      u = Dl(l, u, s)
      const f = s[l],
        h = s[u]
      i !== null
        ? (a.push({ x: f.x, y: i }), a.push({ x: h.x, y: i }))
        : n !== null && (a.push({ x: n, y: f.y }), a.push({ x: n, y: h.y }))
    }),
    a
  )
}
function Dl(e, t, n) {
  for (; t > e; t--) {
    const i = n[t]
    if (!isNaN(i.x) && !isNaN(i.y)) break
  }
  return t
}
function f1(e, t, n, i) {
  return e && t ? i(e[n], t[n]) : e ? e[n] : t ? t[n] : 0
}
function p2(e, t) {
  let n = [],
    i = !1
  return (
    zt(e) ? ((i = !0), (n = e)) : (n = CM(e, t)),
    n.length ? new Ll({ points: n, options: { tension: 0 }, _loop: i, _fullLoop: i }) : null
  )
}
function h1(e) {
  return e && e.fill !== !1
}
function MM(e, t, n) {
  let s = e[t].fill
  const a = [t]
  let l
  if (!n) return s
  for (; s !== !1 && a.indexOf(s) === -1; ) {
    if (!Ut(s)) return s
    if (((l = e[s]), !l)) return !1
    if (l.visible) return s
    ;(a.push(s), (s = l.fill))
  }
  return !1
}
function TM(e, t, n) {
  const i = DM(e)
  if (St(i)) return isNaN(i.value) ? !1 : i
  let s = parseFloat(i)
  return Ut(s) && Math.floor(s) === s
    ? EM(i[0], t, s, n)
    : ['origin', 'start', 'end', 'stack', 'shape'].indexOf(i) >= 0 && i
}
function EM(e, t, n, i) {
  return ((e === '-' || e === '+') && (n = t + n), n === t || n < 0 || n >= i ? !1 : n)
}
function OM(e, t) {
  let n = null
  return (
    e === 'start'
      ? (n = t.bottom)
      : e === 'end'
        ? (n = t.top)
        : St(e)
          ? (n = t.getPixelForValue(e.value))
          : t.getBasePixel && (n = t.getBasePixel()),
    n
  )
}
function LM(e, t, n) {
  let i
  return (
    e === 'start'
      ? (i = n)
      : e === 'end'
        ? (i = t.options.reverse ? t.min : t.max)
        : St(e)
          ? (i = e.value)
          : (i = t.getBaseValue()),
    i
  )
}
function DM(e) {
  const t = e.options,
    n = t.fill
  let i = yt(n && n.target, n)
  return (
    i === void 0 && (i = !!t.backgroundColor),
    i === !1 || i === null ? !1 : i === !0 ? 'origin' : i
  )
}
function AM(e) {
  const { scale: t, index: n, line: i } = e,
    s = [],
    a = i.segments,
    l = i.points,
    u = RM(t, n)
  u.push(p2({ x: null, y: t.bottom }, i))
  for (let f = 0; f < a.length; f++) {
    const h = a[f]
    for (let p = h.start; p <= h.end; p++) FM(s, l[p], u)
  }
  return new Ll({ points: s, options: {} })
}
function RM(e, t) {
  const n = [],
    i = e.getMatchingVisibleMetas('line')
  for (let s = 0; s < i.length; s++) {
    const a = i[s]
    if (a.index === t) break
    a.hidden || n.unshift(a.dataset)
  }
  return n
}
function FM(e, t, n) {
  const i = []
  for (let s = 0; s < n.length; s++) {
    const a = n[s],
      { first: l, last: u, point: f } = IM(a, t, 'x')
    if (!(!f || (l && u))) {
      if (l) i.unshift(f)
      else if ((e.push(f), !u)) break
    }
  }
  e.push(...i)
}
function IM(e, t, n) {
  const i = e.interpolate(t, n)
  if (!i) return {}
  const s = i[n],
    a = e.segments,
    l = e.points
  let u = !1,
    f = !1
  for (let h = 0; h < a.length; h++) {
    const p = a[h],
      m = l[p.start][n],
      y = l[p.end][n]
    if (bn(s, m, y)) {
      ;((u = s === m), (f = s === y))
      break
    }
  }
  return { first: u, last: f, point: i }
}
class m2 {
  constructor(t) {
    ;((this.x = t.x), (this.y = t.y), (this.radius = t.radius))
  }
  pathSegment(t, n, i) {
    const { x: s, y: a, radius: l } = this
    return ((n = n || { start: 0, end: Ft }), t.arc(s, a, l, n.end, n.start, !0), !i.bounds)
  }
  interpolate(t) {
    const { x: n, y: i, radius: s } = this,
      a = t.angle
    return { x: n + Math.cos(a) * s, y: i + Math.sin(a) * s, angle: a }
  }
}
function VM(e) {
  const { chart: t, fill: n, line: i } = e
  if (Ut(n)) return zM(t, n)
  if (n === 'stack') return AM(e)
  if (n === 'shape') return !0
  const s = BM(e)
  return s instanceof m2 ? s : p2(s, i)
}
function zM(e, t) {
  const n = e.getDatasetMeta(t)
  return n && e.isDatasetVisible(t) ? n.dataset : null
}
function BM(e) {
  return (e.scale || {}).getPointPositionForValue ? jM(e) : NM(e)
}
function NM(e) {
  const { scale: t = {}, fill: n } = e,
    i = OM(n, t)
  if (Ut(i)) {
    const s = t.isHorizontal()
    return { x: s ? i : null, y: s ? null : i }
  }
  return null
}
function jM(e) {
  const { scale: t, fill: n } = e,
    i = t.options,
    s = t.getLabels().length,
    a = i.reverse ? t.max : t.min,
    l = LM(n, t, a),
    u = []
  if (i.grid.circular) {
    const f = t.getPointPositionForValue(0, a)
    return new m2({ x: f.x, y: f.y, radius: t.getDistanceFromCenterForValue(l) })
  }
  for (let f = 0; f < s; ++f) u.push(t.getPointPositionForValue(f, l))
  return u
}
function uf(e, t, n) {
  const i = VM(t),
    { chart: s, index: a, line: l, scale: u, axis: f } = t,
    h = l.options,
    p = h.fill,
    m = h.backgroundColor,
    { above: y = m, below: x = m } = p || {},
    _ = s.getDatasetMeta(a),
    w = Xv(s, _)
  i &&
    l.points.length &&
    (Ml(e, n),
    HM(e, { line: l, target: i, above: y, below: x, area: n, scale: u, axis: f, clip: w }),
    Tl(e))
}
function HM(e, t) {
  const { line: n, target: i, above: s, below: a, area: l, scale: u, clip: f } = t,
    h = n._loop ? 'angle' : t.axis
  e.save()
  let p = a
  ;(a !== s &&
    (h === 'x'
      ? (d1(e, i, l.top),
        cf(e, { line: n, target: i, color: s, scale: u, property: h, clip: f }),
        e.restore(),
        e.save(),
        d1(e, i, l.bottom))
      : h === 'y' &&
        (p1(e, i, l.left),
        cf(e, { line: n, target: i, color: a, scale: u, property: h, clip: f }),
        e.restore(),
        e.save(),
        p1(e, i, l.right),
        (p = s))),
    cf(e, { line: n, target: i, color: p, scale: u, property: h, clip: f }),
    e.restore())
}
function d1(e, t, n) {
  const { segments: i, points: s } = t
  let a = !0,
    l = !1
  e.beginPath()
  for (const u of i) {
    const { start: f, end: h } = u,
      p = s[f],
      m = s[Dl(f, h, s)]
    ;(a ? (e.moveTo(p.x, p.y), (a = !1)) : (e.lineTo(p.x, n), e.lineTo(p.x, p.y)),
      (l = !!t.pathSegment(e, u, { move: l })),
      l ? e.closePath() : e.lineTo(m.x, n))
  }
  ;(e.lineTo(t.first().x, n), e.closePath(), e.clip())
}
function p1(e, t, n) {
  const { segments: i, points: s } = t
  let a = !0,
    l = !1
  e.beginPath()
  for (const u of i) {
    const { start: f, end: h } = u,
      p = s[f],
      m = s[Dl(f, h, s)]
    ;(a ? (e.moveTo(p.x, p.y), (a = !1)) : (e.lineTo(n, p.y), e.lineTo(p.x, p.y)),
      (l = !!t.pathSegment(e, u, { move: l })),
      l ? e.closePath() : e.lineTo(n, m.y))
  }
  ;(e.lineTo(n, t.first().y), e.closePath(), e.clip())
}
function cf(e, t) {
  const { line: n, target: i, property: s, color: a, scale: l, clip: u } = t,
    f = PM(n, i, s)
  for (const { source: h, target: p, start: m, end: y } of f) {
    const { style: { backgroundColor: x = a } = {} } = h,
      _ = i !== !0
    ;(e.save(), (e.fillStyle = x), WM(e, l, u, _ && Ff(s, m, y)), e.beginPath())
    const w = !!n.pathSegment(e, h)
    let S
    if (_) {
      w ? e.closePath() : m1(e, i, y, s)
      const k = !!i.pathSegment(e, p, { move: w, reverse: !0 })
      ;((S = w && k), S || m1(e, i, m, s))
    }
    ;(e.closePath(), e.fill(S ? 'evenodd' : 'nonzero'), e.restore())
  }
}
function WM(e, t, n, i) {
  const s = t.chart.chartArea,
    { property: a, start: l, end: u } = i || {}
  if (a === 'x' || a === 'y') {
    let f, h, p, m
    ;(a === 'x'
      ? ((f = l), (h = s.top), (p = u), (m = s.bottom))
      : ((f = s.left), (h = l), (p = s.right), (m = u)),
      e.beginPath(),
      n &&
        ((f = Math.max(f, n.left)),
        (p = Math.min(p, n.right)),
        (h = Math.max(h, n.top)),
        (m = Math.min(m, n.bottom))),
      e.rect(f, h, p - f, m - h),
      e.clip())
  }
}
function m1(e, t, n, i) {
  const s = t.interpolate(n, i)
  s && e.lineTo(s.x, s.y)
}
var UM = {
  id: 'filler',
  afterDatasetsUpdate(e, t, n) {
    const i = (e.data.datasets || []).length,
      s = []
    let a, l, u, f
    for (l = 0; l < i; ++l)
      ((a = e.getDatasetMeta(l)),
        (u = a.dataset),
        (f = null),
        u &&
          u.options &&
          u instanceof Ll &&
          (f = {
            visible: e.isDatasetVisible(l),
            index: l,
            fill: TM(u, l, i),
            chart: e,
            axis: a.controller.options.indexAxis,
            scale: a.vScale,
            line: u,
          }),
        (a.$filler = f),
        s.push(f))
    for (l = 0; l < i; ++l) ((f = s[l]), !(!f || f.fill === !1) && (f.fill = MM(s, l, n.propagate)))
  },
  beforeDraw(e, t, n) {
    const i = n.drawTime === 'beforeDraw',
      s = e.getSortedVisibleDatasetMetas(),
      a = e.chartArea
    for (let l = s.length - 1; l >= 0; --l) {
      const u = s[l].$filler
      u && (u.line.updateControlPoints(a, u.axis), i && u.fill && uf(e.ctx, u, a))
    }
  },
  beforeDatasetsDraw(e, t, n) {
    if (n.drawTime !== 'beforeDatasetsDraw') return
    const i = e.getSortedVisibleDatasetMetas()
    for (let s = i.length - 1; s >= 0; --s) {
      const a = i[s].$filler
      h1(a) && uf(e.ctx, a, e.chartArea)
    }
  },
  beforeDatasetDraw(e, t, n) {
    const i = t.meta.$filler
    !h1(i) || n.drawTime !== 'beforeDatasetDraw' || uf(e.ctx, i, e.chartArea)
  },
  defaults: { propagate: !0, drawTime: 'beforeDatasetDraw' },
}
const g1 = (e, t) => {
    let { boxHeight: n = t, boxWidth: i = t } = e
    return (
      e.usePointStyle && ((n = Math.min(n, t)), (i = e.pointStyleWidth || Math.min(i, t))),
      { boxWidth: i, boxHeight: n, itemHeight: Math.max(t, n) }
    )
  },
  $M = (e, t) =>
    e !== null && t !== null && e.datasetIndex === t.datasetIndex && e.index === t.index
class y1 extends Ln {
  constructor(t) {
    ;(super(),
      (this._added = !1),
      (this.legendHitBoxes = []),
      (this._hoveredItem = null),
      (this.doughnutMode = !1),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this.legendItems = void 0),
      (this.columnSizes = void 0),
      (this.lineWidths = void 0),
      (this.maxHeight = void 0),
      (this.maxWidth = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this._margins = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0))
  }
  update(t, n, i) {
    ;((this.maxWidth = t),
      (this.maxHeight = n),
      (this._margins = i),
      this.setDimensions(),
      this.buildLabels(),
      this.fit())
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth), (this.left = this._margins.left), (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = this._margins.top),
        (this.bottom = this.height))
  }
  buildLabels() {
    const t = this.options.labels || {}
    let n = Lt(t.generateLabels, [this.chart], this) || []
    ;(t.filter && (n = n.filter(i => t.filter(i, this.chart.data))),
      t.sort && (n = n.sort((i, s) => t.sort(i, s, this.chart.data))),
      this.options.reverse && n.reverse(),
      (this.legendItems = n))
  }
  fit() {
    const { options: t, ctx: n } = this
    if (!t.display) {
      this.width = this.height = 0
      return
    }
    const i = t.labels,
      s = te(i.font),
      a = s.size,
      l = this._computeTitleHeight(),
      { boxWidth: u, itemHeight: f } = g1(i, a)
    let h, p
    ;((n.font = s.string),
      this.isHorizontal()
        ? ((h = this.maxWidth), (p = this._fitRows(l, a, u, f) + 10))
        : ((p = this.maxHeight), (h = this._fitCols(l, s, u, f) + 10)),
      (this.width = Math.min(h, t.maxWidth || this.maxWidth)),
      (this.height = Math.min(p, t.maxHeight || this.maxHeight)))
  }
  _fitRows(t, n, i, s) {
    const {
        ctx: a,
        maxWidth: l,
        options: {
          labels: { padding: u },
        },
      } = this,
      f = (this.legendHitBoxes = []),
      h = (this.lineWidths = [0]),
      p = s + u
    let m = t
    ;((a.textAlign = 'left'), (a.textBaseline = 'middle'))
    let y = -1,
      x = -p
    return (
      this.legendItems.forEach((_, w) => {
        const S = i + n / 2 + a.measureText(_.text).width
        ;((w === 0 || h[h.length - 1] + S + 2 * u > l) &&
          ((m += p), (h[h.length - (w > 0 ? 0 : 1)] = 0), (x += p), y++),
          (f[w] = { left: 0, top: x, row: y, width: S, height: s }),
          (h[h.length - 1] += S + u))
      }),
      m
    )
  }
  _fitCols(t, n, i, s) {
    const {
        ctx: a,
        maxHeight: l,
        options: {
          labels: { padding: u },
        },
      } = this,
      f = (this.legendHitBoxes = []),
      h = (this.columnSizes = []),
      p = l - t
    let m = u,
      y = 0,
      x = 0,
      _ = 0,
      w = 0
    return (
      this.legendItems.forEach((S, k) => {
        const { itemWidth: P, itemHeight: C } = YM(i, n, a, S, s)
        ;(k > 0 &&
          x + C + 2 * u > p &&
          ((m += y + u), h.push({ width: y, height: x }), (_ += y + u), w++, (y = x = 0)),
          (f[k] = { left: _, top: x, col: w, width: P, height: C }),
          (y = Math.max(y, P)),
          (x += C + u))
      }),
      (m += y),
      h.push({ width: y, height: x }),
      m
    )
  }
  adjustHitBoxes() {
    if (!this.options.display) return
    const t = this._computeTitleHeight(),
      {
        legendHitBoxes: n,
        options: {
          align: i,
          labels: { padding: s },
          rtl: a,
        },
      } = this,
      l = br(a, this.left, this.width)
    if (this.isHorizontal()) {
      let u = 0,
        f = de(i, this.left + s, this.right - this.lineWidths[u])
      for (const h of n)
        (u !== h.row && ((u = h.row), (f = de(i, this.left + s, this.right - this.lineWidths[u]))),
          (h.top += this.top + t + s),
          (h.left = l.leftForLtr(l.x(f), h.width)),
          (f += h.width + s))
    } else {
      let u = 0,
        f = de(i, this.top + t + s, this.bottom - this.columnSizes[u].height)
      for (const h of n)
        (h.col !== u &&
          ((u = h.col), (f = de(i, this.top + t + s, this.bottom - this.columnSizes[u].height))),
          (h.top = f),
          (h.left += this.left + s),
          (h.left = l.leftForLtr(l.x(h.left), h.width)),
          (f += h.height + s))
    }
  }
  isHorizontal() {
    return this.options.position === 'top' || this.options.position === 'bottom'
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx
      ;(Ml(t, this), this._draw(), Tl(t))
    }
  }
  _draw() {
    const { options: t, columnSizes: n, lineWidths: i, ctx: s } = this,
      { align: a, labels: l } = t,
      u = Bt.color,
      f = br(t.rtl, this.left, this.width),
      h = te(l.font),
      { padding: p } = l,
      m = h.size,
      y = m / 2
    let x
    ;(this.drawTitle(),
      (s.textAlign = f.textAlign('left')),
      (s.textBaseline = 'middle'),
      (s.lineWidth = 0.5),
      (s.font = h.string))
    const { boxWidth: _, boxHeight: w, itemHeight: S } = g1(l, m),
      k = function (R, A, V) {
        if (isNaN(_) || _ <= 0 || isNaN(w) || w < 0) return
        s.save()
        const j = yt(V.lineWidth, 1)
        if (
          ((s.fillStyle = yt(V.fillStyle, u)),
          (s.lineCap = yt(V.lineCap, 'butt')),
          (s.lineDashOffset = yt(V.lineDashOffset, 0)),
          (s.lineJoin = yt(V.lineJoin, 'miter')),
          (s.lineWidth = j),
          (s.strokeStyle = yt(V.strokeStyle, u)),
          s.setLineDash(yt(V.lineDash, [])),
          l.usePointStyle)
        ) {
          const W = {
              radius: (w * Math.SQRT2) / 2,
              pointStyle: V.pointStyle,
              rotation: V.rotation,
              borderWidth: j,
            },
            N = f.xPlus(R, _ / 2),
            F = A + y
          Rv(s, W, N, F, l.pointStyleWidth && _)
        } else {
          const W = A + Math.max((m - w) / 2, 0),
            N = f.leftForLtr(R, _),
            F = Bi(V.borderRadius)
          ;(s.beginPath(),
            Object.values(F).some(q => q !== 0)
              ? Ks(s, { x: N, y: W, w: _, h: w, radius: F })
              : s.rect(N, W, _, w),
            s.fill(),
            j !== 0 && s.stroke())
        }
        s.restore()
      },
      P = function (R, A, V) {
        Hi(s, V.text, R, A + S / 2, h, {
          strikethrough: V.hidden,
          textAlign: f.textAlign(V.textAlign),
        })
      },
      C = this.isHorizontal(),
      T = this._computeTitleHeight()
    ;(C
      ? (x = { x: de(a, this.left + p, this.right - i[0]), y: this.top + p + T, line: 0 })
      : (x = { x: this.left + p, y: de(a, this.top + T + p, this.bottom - n[0].height), line: 0 }),
      Hv(this.ctx, t.textDirection))
    const E = S + p
    ;(this.legendItems.forEach((R, A) => {
      ;((s.strokeStyle = R.fontColor), (s.fillStyle = R.fontColor))
      const V = s.measureText(R.text).width,
        j = f.textAlign(R.textAlign || (R.textAlign = l.textAlign)),
        W = _ + y + V
      let N = x.x,
        F = x.y
      ;(f.setWidth(this.width),
        C
          ? A > 0 &&
            N + W + p > this.right &&
            ((F = x.y += E), x.line++, (N = x.x = de(a, this.left + p, this.right - i[x.line])))
          : A > 0 &&
            F + E > this.bottom &&
            ((N = x.x = N + n[x.line].width + p),
            x.line++,
            (F = x.y = de(a, this.top + T + p, this.bottom - n[x.line].height))))
      const q = f.x(N)
      if ((k(q, F, R), (N = n6(j, N + _ + y, C ? N + W : this.right, t.rtl)), P(f.x(N), F, R), C))
        x.x += W + p
      else if (typeof R.text != 'string') {
        const $ = h.lineHeight
        x.y += g2(R, $) + p
      } else x.y += E
    }),
      Wv(this.ctx, t.textDirection))
  }
  drawTitle() {
    const t = this.options,
      n = t.title,
      i = te(n.font),
      s = ge(n.padding)
    if (!n.display) return
    const a = br(t.rtl, this.left, this.width),
      l = this.ctx,
      u = n.position,
      f = i.size / 2,
      h = s.top + f
    let p,
      m = this.left,
      y = this.width
    if (this.isHorizontal())
      ((y = Math.max(...this.lineWidths)), (p = this.top + h), (m = de(t.align, m, this.right - y)))
    else {
      const _ = this.columnSizes.reduce((w, S) => Math.max(w, S.height), 0)
      p = h + de(t.align, this.top, this.bottom - _ - t.labels.padding - this._computeTitleHeight())
    }
    const x = de(u, m, m + y)
    ;((l.textAlign = a.textAlign(xh(u))),
      (l.textBaseline = 'middle'),
      (l.strokeStyle = n.color),
      (l.fillStyle = n.color),
      (l.font = i.string),
      Hi(l, n.text, x, p, i))
  }
  _computeTitleHeight() {
    const t = this.options.title,
      n = te(t.font),
      i = ge(t.padding)
    return t.display ? n.lineHeight + i.height : 0
  }
  _getLegendItemAt(t, n) {
    let i, s, a
    if (bn(t, this.left, this.right) && bn(n, this.top, this.bottom)) {
      for (a = this.legendHitBoxes, i = 0; i < a.length; ++i)
        if (((s = a[i]), bn(t, s.left, s.left + s.width) && bn(n, s.top, s.top + s.height)))
          return this.legendItems[i]
    }
    return null
  }
  handleEvent(t) {
    const n = this.options
    if (!GM(t.type, n)) return
    const i = this._getLegendItemAt(t.x, t.y)
    if (t.type === 'mousemove' || t.type === 'mouseout') {
      const s = this._hoveredItem,
        a = $M(s, i)
      ;(s && !a && Lt(n.onLeave, [t, s, this], this),
        (this._hoveredItem = i),
        i && !a && Lt(n.onHover, [t, i, this], this))
    } else i && Lt(n.onClick, [t, i, this], this)
  }
}
function YM(e, t, n, i, s) {
  const a = XM(i, e, t, n),
    l = KM(s, i, t.lineHeight)
  return { itemWidth: a, itemHeight: l }
}
function XM(e, t, n, i) {
  let s = e.text
  return (
    s && typeof s != 'string' && (s = s.reduce((a, l) => (a.length > l.length ? a : l))),
    t + n.size / 2 + i.measureText(s).width
  )
}
function KM(e, t, n) {
  let i = e
  return (typeof t.text != 'string' && (i = g2(t, n)), i)
}
function g2(e, t) {
  const n = e.text ? e.text.length : 0
  return t * n
}
function GM(e, t) {
  return !!(
    ((e === 'mousemove' || e === 'mouseout') && (t.onHover || t.onLeave)) ||
    (t.onClick && (e === 'click' || e === 'mouseup'))
  )
}
var qM = {
  id: 'legend',
  _element: y1,
  start(e, t, n) {
    const i = (e.legend = new y1({ ctx: e.ctx, options: n, chart: e }))
    ;(me.configure(e, i, n), me.addBox(e, i))
  },
  stop(e) {
    ;(me.removeBox(e, e.legend), delete e.legend)
  },
  beforeUpdate(e, t, n) {
    const i = e.legend
    ;(me.configure(e, i, n), (i.options = n))
  },
  afterUpdate(e) {
    const t = e.legend
    ;(t.buildLabels(), t.adjustHitBoxes())
  },
  afterEvent(e, t) {
    t.replay || e.legend.handleEvent(t.event)
  },
  defaults: {
    display: !0,
    position: 'top',
    align: 'center',
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(e, t, n) {
      const i = t.datasetIndex,
        s = n.chart
      s.isDatasetVisible(i) ? (s.hide(i), (t.hidden = !0)) : (s.show(i), (t.hidden = !1))
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: e => e.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(e) {
        const t = e.data.datasets,
          {
            labels: {
              usePointStyle: n,
              pointStyle: i,
              textAlign: s,
              color: a,
              useBorderRadius: l,
              borderRadius: u,
            },
          } = e.legend.options
        return e._getSortedDatasetMetas().map(f => {
          const h = f.controller.getStyle(n ? 0 : void 0),
            p = ge(h.borderWidth)
          return {
            text: t[f.index].label,
            fillStyle: h.backgroundColor,
            fontColor: a,
            hidden: !f.visible,
            lineCap: h.borderCapStyle,
            lineDash: h.borderDash,
            lineDashOffset: h.borderDashOffset,
            lineJoin: h.borderJoinStyle,
            lineWidth: (p.width + p.height) / 4,
            strokeStyle: h.borderColor,
            pointStyle: i || h.pointStyle,
            rotation: h.rotation,
            textAlign: s || h.textAlign,
            borderRadius: l && (u || h.borderRadius),
            datasetIndex: f.index,
          }
        }, this)
      },
    },
    title: { color: e => e.chart.options.color, display: !1, position: 'center', text: '' },
  },
  descriptors: {
    _scriptable: e => !e.startsWith('on'),
    labels: { _scriptable: e => !['generateLabels', 'filter', 'sort'].includes(e) },
  },
}
class Eh extends Ln {
  constructor(t) {
    ;(super(),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this._padding = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0))
  }
  update(t, n) {
    const i = this.options
    if (((this.left = 0), (this.top = 0), !i.display)) {
      this.width = this.height = this.right = this.bottom = 0
      return
    }
    ;((this.width = this.right = t), (this.height = this.bottom = n))
    const s = zt(i.text) ? i.text.length : 1
    this._padding = ge(i.padding)
    const a = s * te(i.font).lineHeight + this._padding.height
    this.isHorizontal() ? (this.height = a) : (this.width = a)
  }
  isHorizontal() {
    const t = this.options.position
    return t === 'top' || t === 'bottom'
  }
  _drawArgs(t) {
    const { top: n, left: i, bottom: s, right: a, options: l } = this,
      u = l.align
    let f = 0,
      h,
      p,
      m
    return (
      this.isHorizontal()
        ? ((p = de(u, i, a)), (m = n + t), (h = a - i))
        : (l.position === 'left'
            ? ((p = i + t), (m = de(u, s, n)), (f = Pt * -0.5))
            : ((p = a - t), (m = de(u, n, s)), (f = Pt * 0.5)),
          (h = s - n)),
      { titleX: p, titleY: m, maxWidth: h, rotation: f }
    )
  }
  draw() {
    const t = this.ctx,
      n = this.options
    if (!n.display) return
    const i = te(n.font),
      a = i.lineHeight / 2 + this._padding.top,
      { titleX: l, titleY: u, maxWidth: f, rotation: h } = this._drawArgs(a)
    Hi(t, n.text, 0, 0, i, {
      color: n.color,
      maxWidth: f,
      rotation: h,
      textAlign: xh(n.align),
      textBaseline: 'middle',
      translation: [l, u],
    })
  }
}
function QM(e, t) {
  const n = new Eh({ ctx: e.ctx, options: t, chart: e })
  ;(me.configure(e, n, t), me.addBox(e, n), (e.titleBlock = n))
}
var ZM = {
  id: 'title',
  _element: Eh,
  start(e, t, n) {
    QM(e, n)
  },
  stop(e) {
    const t = e.titleBlock
    ;(me.removeBox(e, t), delete e.titleBlock)
  },
  beforeUpdate(e, t, n) {
    const i = e.titleBlock
    ;(me.configure(e, i, n), (i.options = n))
  },
  defaults: {
    align: 'center',
    display: !1,
    font: { weight: 'bold' },
    fullSize: !0,
    padding: 10,
    position: 'top',
    text: '',
    weight: 2e3,
  },
  defaultRoutes: { color: 'color' },
  descriptors: { _scriptable: !0, _indexable: !1 },
}
const Ua = new WeakMap()
var JM = {
  id: 'subtitle',
  start(e, t, n) {
    const i = new Eh({ ctx: e.ctx, options: n, chart: e })
    ;(me.configure(e, i, n), me.addBox(e, i), Ua.set(e, i))
  },
  stop(e) {
    ;(me.removeBox(e, Ua.get(e)), Ua.delete(e))
  },
  beforeUpdate(e, t, n) {
    const i = Ua.get(e)
    ;(me.configure(e, i, n), (i.options = n))
  },
  defaults: {
    align: 'center',
    display: !1,
    font: { weight: 'normal' },
    fullSize: !0,
    padding: 0,
    position: 'top',
    text: '',
    weight: 1500,
  },
  defaultRoutes: { color: 'color' },
  descriptors: { _scriptable: !0, _indexable: !1 },
}
const Os = {
  average(e) {
    if (!e.length) return !1
    let t,
      n,
      i = new Set(),
      s = 0,
      a = 0
    for (t = 0, n = e.length; t < n; ++t) {
      const u = e[t].element
      if (u && u.hasValue()) {
        const f = u.tooltipPosition()
        ;(i.add(f.x), (s += f.y), ++a)
      }
    }
    return a === 0 || i.size === 0 ? !1 : { x: [...i].reduce((u, f) => u + f) / i.size, y: s / a }
  },
  nearest(e, t) {
    if (!e.length) return !1
    let n = t.x,
      i = t.y,
      s = Number.POSITIVE_INFINITY,
      a,
      l,
      u
    for (a = 0, l = e.length; a < l; ++a) {
      const f = e[a].element
      if (f && f.hasValue()) {
        const h = f.getCenterPoint(),
          p = Tf(t, h)
        p < s && ((s = p), (u = f))
      }
    }
    if (u) {
      const f = u.tooltipPosition()
      ;((n = f.x), (i = f.y))
    }
    return { x: n, y: i }
  },
}
function sn(e, t) {
  return (t && (zt(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e)
}
function _n(e) {
  return (typeof e == 'string' || e instanceof String) &&
    e.indexOf(`
`) > -1
    ? e.split(`
`)
    : e
}
function tT(e, t) {
  const { element: n, datasetIndex: i, index: s } = t,
    a = e.getDatasetMeta(i).controller,
    { label: l, value: u } = a.getLabelAndValue(s)
  return {
    chart: e,
    label: l,
    parsed: a.getParsed(s),
    raw: e.data.datasets[i].data[s],
    formattedValue: u,
    dataset: a.getDataset(),
    dataIndex: s,
    datasetIndex: i,
    element: n,
  }
}
function v1(e, t) {
  const n = e.chart.ctx,
    { body: i, footer: s, title: a } = e,
    { boxWidth: l, boxHeight: u } = t,
    f = te(t.bodyFont),
    h = te(t.titleFont),
    p = te(t.footerFont),
    m = a.length,
    y = s.length,
    x = i.length,
    _ = ge(t.padding)
  let w = _.height,
    S = 0,
    k = i.reduce((T, E) => T + E.before.length + E.lines.length + E.after.length, 0)
  if (
    ((k += e.beforeBody.length + e.afterBody.length),
    m && (w += m * h.lineHeight + (m - 1) * t.titleSpacing + t.titleMarginBottom),
    k)
  ) {
    const T = t.displayColors ? Math.max(u, f.lineHeight) : f.lineHeight
    w += x * T + (k - x) * f.lineHeight + (k - 1) * t.bodySpacing
  }
  y && (w += t.footerMarginTop + y * p.lineHeight + (y - 1) * t.footerSpacing)
  let P = 0
  const C = function (T) {
    S = Math.max(S, n.measureText(T).width + P)
  }
  return (
    n.save(),
    (n.font = h.string),
    Mt(e.title, C),
    (n.font = f.string),
    Mt(e.beforeBody.concat(e.afterBody), C),
    (P = t.displayColors ? l + 2 + t.boxPadding : 0),
    Mt(i, T => {
      ;(Mt(T.before, C), Mt(T.lines, C), Mt(T.after, C))
    }),
    (P = 0),
    (n.font = p.string),
    Mt(e.footer, C),
    n.restore(),
    (S += _.width),
    { width: S, height: w }
  )
}
function eT(e, t) {
  const { y: n, height: i } = t
  return n < i / 2 ? 'top' : n > e.height - i / 2 ? 'bottom' : 'center'
}
function nT(e, t, n, i) {
  const { x: s, width: a } = i,
    l = n.caretSize + n.caretPadding
  if ((e === 'left' && s + a + l > t.width) || (e === 'right' && s - a - l < 0)) return !0
}
function iT(e, t, n, i) {
  const { x: s, width: a } = n,
    {
      width: l,
      chartArea: { left: u, right: f },
    } = e
  let h = 'center'
  return (
    i === 'center'
      ? (h = s <= (u + f) / 2 ? 'left' : 'right')
      : s <= a / 2
        ? (h = 'left')
        : s >= l - a / 2 && (h = 'right'),
    nT(h, e, t, n) && (h = 'center'),
    h
  )
}
function x1(e, t, n) {
  const i = n.yAlign || t.yAlign || eT(e, n)
  return { xAlign: n.xAlign || t.xAlign || iT(e, t, n, i), yAlign: i }
}
function rT(e, t) {
  let { x: n, width: i } = e
  return (t === 'right' ? (n -= i) : t === 'center' && (n -= i / 2), n)
}
function sT(e, t, n) {
  let { y: i, height: s } = e
  return (t === 'top' ? (i += n) : t === 'bottom' ? (i -= s + n) : (i -= s / 2), i)
}
function _1(e, t, n, i) {
  const { caretSize: s, caretPadding: a, cornerRadius: l } = e,
    { xAlign: u, yAlign: f } = n,
    h = s + a,
    { topLeft: p, topRight: m, bottomLeft: y, bottomRight: x } = Bi(l)
  let _ = rT(t, u)
  const w = sT(t, f, h)
  return (
    f === 'center'
      ? u === 'left'
        ? (_ += h)
        : u === 'right' && (_ -= h)
      : u === 'left'
        ? (_ -= Math.max(p, y) + s)
        : u === 'right' && (_ += Math.max(m, x) + s),
    { x: se(_, 0, i.width - t.width), y: se(w, 0, i.height - t.height) }
  )
}
function $a(e, t, n) {
  const i = ge(n.padding)
  return t === 'center' ? e.x + e.width / 2 : t === 'right' ? e.x + e.width - i.right : e.x + i.left
}
function w1(e) {
  return sn([], _n(e))
}
function oT(e, t, n) {
  return di(e, { tooltip: t, tooltipItems: n, type: 'tooltip' })
}
function S1(e, t) {
  const n = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks
  return n ? e.override(n) : e
}
const y2 = {
  beforeTitle: vn,
  title(e) {
    if (e.length > 0) {
      const t = e[0],
        n = t.chart.data.labels,
        i = n ? n.length : 0
      if (this && this.options && this.options.mode === 'dataset') return t.dataset.label || ''
      if (t.label) return t.label
      if (i > 0 && t.dataIndex < i) return n[t.dataIndex]
    }
    return ''
  },
  afterTitle: vn,
  beforeBody: vn,
  beforeLabel: vn,
  label(e) {
    if (this && this.options && this.options.mode === 'dataset')
      return e.label + ': ' + e.formattedValue || e.formattedValue
    let t = e.dataset.label || ''
    t && (t += ': ')
    const n = e.formattedValue
    return (wt(n) || (t += n), t)
  },
  labelColor(e) {
    const n = e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex)
    return {
      borderColor: n.borderColor,
      backgroundColor: n.backgroundColor,
      borderWidth: n.borderWidth,
      borderDash: n.borderDash,
      borderDashOffset: n.borderDashOffset,
      borderRadius: 0,
    }
  },
  labelTextColor() {
    return this.options.bodyColor
  },
  labelPointStyle(e) {
    const n = e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex)
    return { pointStyle: n.pointStyle, rotation: n.rotation }
  },
  afterLabel: vn,
  afterBody: vn,
  beforeFooter: vn,
  footer: vn,
  afterFooter: vn,
}
function Me(e, t, n, i) {
  const s = e[t].call(n, i)
  return typeof s > 'u' ? y2[t].call(n, i) : s
}
class b1 extends Ln {
  static positioners = Os
  constructor(t) {
    ;(super(),
      (this.opacity = 0),
      (this._active = []),
      (this._eventPosition = void 0),
      (this._size = void 0),
      (this._cachedAnimations = void 0),
      (this._tooltipItems = []),
      (this.$animations = void 0),
      (this.$context = void 0),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.dataPoints = void 0),
      (this.title = void 0),
      (this.beforeBody = void 0),
      (this.body = void 0),
      (this.afterBody = void 0),
      (this.footer = void 0),
      (this.xAlign = void 0),
      (this.yAlign = void 0),
      (this.x = void 0),
      (this.y = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this.caretX = void 0),
      (this.caretY = void 0),
      (this.labelColors = void 0),
      (this.labelPointStyles = void 0),
      (this.labelTextColors = void 0))
  }
  initialize(t) {
    ;((this.options = t), (this._cachedAnimations = void 0), (this.$context = void 0))
  }
  _resolveAnimations() {
    const t = this._cachedAnimations
    if (t) return t
    const n = this.chart,
      i = this.options.setContext(this.getContext()),
      s = i.enabled && n.options.animation && i.animations,
      a = new Kv(this.chart, s)
    return (s._cacheable && (this._cachedAnimations = Object.freeze(a)), a)
  }
  getContext() {
    return this.$context || (this.$context = oT(this.chart.getContext(), this, this._tooltipItems))
  }
  getTitle(t, n) {
    const { callbacks: i } = n,
      s = Me(i, 'beforeTitle', this, t),
      a = Me(i, 'title', this, t),
      l = Me(i, 'afterTitle', this, t)
    let u = []
    return ((u = sn(u, _n(s))), (u = sn(u, _n(a))), (u = sn(u, _n(l))), u)
  }
  getBeforeBody(t, n) {
    return w1(Me(n.callbacks, 'beforeBody', this, t))
  }
  getBody(t, n) {
    const { callbacks: i } = n,
      s = []
    return (
      Mt(t, a => {
        const l = { before: [], lines: [], after: [] },
          u = S1(i, a)
        ;(sn(l.before, _n(Me(u, 'beforeLabel', this, a))),
          sn(l.lines, Me(u, 'label', this, a)),
          sn(l.after, _n(Me(u, 'afterLabel', this, a))),
          s.push(l))
      }),
      s
    )
  }
  getAfterBody(t, n) {
    return w1(Me(n.callbacks, 'afterBody', this, t))
  }
  getFooter(t, n) {
    const { callbacks: i } = n,
      s = Me(i, 'beforeFooter', this, t),
      a = Me(i, 'footer', this, t),
      l = Me(i, 'afterFooter', this, t)
    let u = []
    return ((u = sn(u, _n(s))), (u = sn(u, _n(a))), (u = sn(u, _n(l))), u)
  }
  _createItems(t) {
    const n = this._active,
      i = this.chart.data,
      s = [],
      a = [],
      l = []
    let u = [],
      f,
      h
    for (f = 0, h = n.length; f < h; ++f) u.push(tT(this.chart, n[f]))
    return (
      t.filter && (u = u.filter((p, m, y) => t.filter(p, m, y, i))),
      t.itemSort && (u = u.sort((p, m) => t.itemSort(p, m, i))),
      Mt(u, p => {
        const m = S1(t.callbacks, p)
        ;(s.push(Me(m, 'labelColor', this, p)),
          a.push(Me(m, 'labelPointStyle', this, p)),
          l.push(Me(m, 'labelTextColor', this, p)))
      }),
      (this.labelColors = s),
      (this.labelPointStyles = a),
      (this.labelTextColors = l),
      (this.dataPoints = u),
      u
    )
  }
  update(t, n) {
    const i = this.options.setContext(this.getContext()),
      s = this._active
    let a,
      l = []
    if (!s.length) this.opacity !== 0 && (a = { opacity: 0 })
    else {
      const u = Os[i.position].call(this, s, this._eventPosition)
      ;((l = this._createItems(i)),
        (this.title = this.getTitle(l, i)),
        (this.beforeBody = this.getBeforeBody(l, i)),
        (this.body = this.getBody(l, i)),
        (this.afterBody = this.getAfterBody(l, i)),
        (this.footer = this.getFooter(l, i)))
      const f = (this._size = v1(this, i)),
        h = Object.assign({}, u, f),
        p = x1(this.chart, i, h),
        m = _1(i, h, p, this.chart)
      ;((this.xAlign = p.xAlign),
        (this.yAlign = p.yAlign),
        (a = {
          opacity: 1,
          x: m.x,
          y: m.y,
          width: f.width,
          height: f.height,
          caretX: u.x,
          caretY: u.y,
        }))
    }
    ;((this._tooltipItems = l),
      (this.$context = void 0),
      a && this._resolveAnimations().update(this, a),
      t && i.external && i.external.call(this, { chart: this.chart, tooltip: this, replay: n }))
  }
  drawCaret(t, n, i, s) {
    const a = this.getCaretPosition(t, i, s)
    ;(n.lineTo(a.x1, a.y1), n.lineTo(a.x2, a.y2), n.lineTo(a.x3, a.y3))
  }
  getCaretPosition(t, n, i) {
    const { xAlign: s, yAlign: a } = this,
      { caretSize: l, cornerRadius: u } = i,
      { topLeft: f, topRight: h, bottomLeft: p, bottomRight: m } = Bi(u),
      { x: y, y: x } = t,
      { width: _, height: w } = n
    let S, k, P, C, T, E
    return (
      a === 'center'
        ? ((T = x + w / 2),
          s === 'left'
            ? ((S = y), (k = S - l), (C = T + l), (E = T - l))
            : ((S = y + _), (k = S + l), (C = T - l), (E = T + l)),
          (P = S))
        : (s === 'left'
            ? (k = y + Math.max(f, p) + l)
            : s === 'right'
              ? (k = y + _ - Math.max(h, m) - l)
              : (k = this.caretX),
          a === 'top'
            ? ((C = x), (T = C - l), (S = k - l), (P = k + l))
            : ((C = x + w), (T = C + l), (S = k + l), (P = k - l)),
          (E = C)),
      { x1: S, x2: k, x3: P, y1: C, y2: T, y3: E }
    )
  }
  drawTitle(t, n, i) {
    const s = this.title,
      a = s.length
    let l, u, f
    if (a) {
      const h = br(i.rtl, this.x, this.width)
      for (
        t.x = $a(this, i.titleAlign, i),
          n.textAlign = h.textAlign(i.titleAlign),
          n.textBaseline = 'middle',
          l = te(i.titleFont),
          u = i.titleSpacing,
          n.fillStyle = i.titleColor,
          n.font = l.string,
          f = 0;
        f < a;
        ++f
      )
        (n.fillText(s[f], h.x(t.x), t.y + l.lineHeight / 2),
          (t.y += l.lineHeight + u),
          f + 1 === a && (t.y += i.titleMarginBottom - u))
    }
  }
  _drawColorBox(t, n, i, s, a) {
    const l = this.labelColors[i],
      u = this.labelPointStyles[i],
      { boxHeight: f, boxWidth: h } = a,
      p = te(a.bodyFont),
      m = $a(this, 'left', a),
      y = s.x(m),
      x = f < p.lineHeight ? (p.lineHeight - f) / 2 : 0,
      _ = n.y + x
    if (a.usePointStyle) {
      const w = {
          radius: Math.min(h, f) / 2,
          pointStyle: u.pointStyle,
          rotation: u.rotation,
          borderWidth: 1,
        },
        S = s.leftForLtr(y, h) + h / 2,
        k = _ + f / 2
      ;((t.strokeStyle = a.multiKeyBackground),
        (t.fillStyle = a.multiKeyBackground),
        Of(t, w, S, k),
        (t.strokeStyle = l.borderColor),
        (t.fillStyle = l.backgroundColor),
        Of(t, w, S, k))
    } else {
      ;((t.lineWidth = St(l.borderWidth)
        ? Math.max(...Object.values(l.borderWidth))
        : l.borderWidth || 1),
        (t.strokeStyle = l.borderColor),
        t.setLineDash(l.borderDash || []),
        (t.lineDashOffset = l.borderDashOffset || 0))
      const w = s.leftForLtr(y, h),
        S = s.leftForLtr(s.xPlus(y, 1), h - 2),
        k = Bi(l.borderRadius)
      Object.values(k).some(P => P !== 0)
        ? (t.beginPath(),
          (t.fillStyle = a.multiKeyBackground),
          Ks(t, { x: w, y: _, w: h, h: f, radius: k }),
          t.fill(),
          t.stroke(),
          (t.fillStyle = l.backgroundColor),
          t.beginPath(),
          Ks(t, { x: S, y: _ + 1, w: h - 2, h: f - 2, radius: k }),
          t.fill())
        : ((t.fillStyle = a.multiKeyBackground),
          t.fillRect(w, _, h, f),
          t.strokeRect(w, _, h, f),
          (t.fillStyle = l.backgroundColor),
          t.fillRect(S, _ + 1, h - 2, f - 2))
    }
    t.fillStyle = this.labelTextColors[i]
  }
  drawBody(t, n, i) {
    const { body: s } = this,
      {
        bodySpacing: a,
        bodyAlign: l,
        displayColors: u,
        boxHeight: f,
        boxWidth: h,
        boxPadding: p,
      } = i,
      m = te(i.bodyFont)
    let y = m.lineHeight,
      x = 0
    const _ = br(i.rtl, this.x, this.width),
      w = function (V) {
        ;(n.fillText(V, _.x(t.x + x), t.y + y / 2), (t.y += y + a))
      },
      S = _.textAlign(l)
    let k, P, C, T, E, R, A
    for (
      n.textAlign = l,
        n.textBaseline = 'middle',
        n.font = m.string,
        t.x = $a(this, S, i),
        n.fillStyle = i.bodyColor,
        Mt(this.beforeBody, w),
        x = u && S !== 'right' ? (l === 'center' ? h / 2 + p : h + 2 + p) : 0,
        T = 0,
        R = s.length;
      T < R;
      ++T
    ) {
      for (
        k = s[T],
          P = this.labelTextColors[T],
          n.fillStyle = P,
          Mt(k.before, w),
          C = k.lines,
          u && C.length && (this._drawColorBox(n, t, T, _, i), (y = Math.max(m.lineHeight, f))),
          E = 0,
          A = C.length;
        E < A;
        ++E
      )
        (w(C[E]), (y = m.lineHeight))
      Mt(k.after, w)
    }
    ;((x = 0), (y = m.lineHeight), Mt(this.afterBody, w), (t.y -= a))
  }
  drawFooter(t, n, i) {
    const s = this.footer,
      a = s.length
    let l, u
    if (a) {
      const f = br(i.rtl, this.x, this.width)
      for (
        t.x = $a(this, i.footerAlign, i),
          t.y += i.footerMarginTop,
          n.textAlign = f.textAlign(i.footerAlign),
          n.textBaseline = 'middle',
          l = te(i.footerFont),
          n.fillStyle = i.footerColor,
          n.font = l.string,
          u = 0;
        u < a;
        ++u
      )
        (n.fillText(s[u], f.x(t.x), t.y + l.lineHeight / 2),
          (t.y += l.lineHeight + i.footerSpacing))
    }
  }
  drawBackground(t, n, i, s) {
    const { xAlign: a, yAlign: l } = this,
      { x: u, y: f } = t,
      { width: h, height: p } = i,
      { topLeft: m, topRight: y, bottomLeft: x, bottomRight: _ } = Bi(s.cornerRadius)
    ;((n.fillStyle = s.backgroundColor),
      (n.strokeStyle = s.borderColor),
      (n.lineWidth = s.borderWidth),
      n.beginPath(),
      n.moveTo(u + m, f),
      l === 'top' && this.drawCaret(t, n, i, s),
      n.lineTo(u + h - y, f),
      n.quadraticCurveTo(u + h, f, u + h, f + y),
      l === 'center' && a === 'right' && this.drawCaret(t, n, i, s),
      n.lineTo(u + h, f + p - _),
      n.quadraticCurveTo(u + h, f + p, u + h - _, f + p),
      l === 'bottom' && this.drawCaret(t, n, i, s),
      n.lineTo(u + x, f + p),
      n.quadraticCurveTo(u, f + p, u, f + p - x),
      l === 'center' && a === 'left' && this.drawCaret(t, n, i, s),
      n.lineTo(u, f + m),
      n.quadraticCurveTo(u, f, u + m, f),
      n.closePath(),
      n.fill(),
      s.borderWidth > 0 && n.stroke())
  }
  _updateAnimationTarget(t) {
    const n = this.chart,
      i = this.$animations,
      s = i && i.x,
      a = i && i.y
    if (s || a) {
      const l = Os[t.position].call(this, this._active, this._eventPosition)
      if (!l) return
      const u = (this._size = v1(this, t)),
        f = Object.assign({}, l, this._size),
        h = x1(n, t, f),
        p = _1(t, f, h, n)
      ;(s._to !== p.x || a._to !== p.y) &&
        ((this.xAlign = h.xAlign),
        (this.yAlign = h.yAlign),
        (this.width = u.width),
        (this.height = u.height),
        (this.caretX = l.x),
        (this.caretY = l.y),
        this._resolveAnimations().update(this, p))
    }
  }
  _willRender() {
    return !!this.opacity
  }
  draw(t) {
    const n = this.options.setContext(this.getContext())
    let i = this.opacity
    if (!i) return
    this._updateAnimationTarget(n)
    const s = { width: this.width, height: this.height },
      a = { x: this.x, y: this.y }
    i = Math.abs(i) < 0.001 ? 0 : i
    const l = ge(n.padding),
      u =
        this.title.length ||
        this.beforeBody.length ||
        this.body.length ||
        this.afterBody.length ||
        this.footer.length
    n.enabled &&
      u &&
      (t.save(),
      (t.globalAlpha = i),
      this.drawBackground(a, t, s, n),
      Hv(t, n.textDirection),
      (a.y += l.top),
      this.drawTitle(a, t, n),
      this.drawBody(a, t, n),
      this.drawFooter(a, t, n),
      Wv(t, n.textDirection),
      t.restore())
  }
  getActiveElements() {
    return this._active || []
  }
  setActiveElements(t, n) {
    const i = this._active,
      s = t.map(({ datasetIndex: u, index: f }) => {
        const h = this.chart.getDatasetMeta(u)
        if (!h) throw new Error('Cannot find a dataset at index ' + u)
        return { datasetIndex: u, element: h.data[f], index: f }
      }),
      a = !ol(i, s),
      l = this._positionChanged(s, n)
    ;(a || l) &&
      ((this._active = s),
      (this._eventPosition = n),
      (this._ignoreReplayEvents = !0),
      this.update(!0))
  }
  handleEvent(t, n, i = !0) {
    if (n && this._ignoreReplayEvents) return !1
    this._ignoreReplayEvents = !1
    const s = this.options,
      a = this._active || [],
      l = this._getActiveElements(t, a, n, i),
      u = this._positionChanged(l, t),
      f = n || !ol(l, a) || u
    return (
      f &&
        ((this._active = l),
        (s.enabled || s.external) &&
          ((this._eventPosition = { x: t.x, y: t.y }), this.update(!0, n))),
      f
    )
  }
  _getActiveElements(t, n, i, s) {
    const a = this.options
    if (t.type === 'mouseout') return []
    if (!s)
      return n.filter(
        u =>
          this.chart.data.datasets[u.datasetIndex] &&
          this.chart.getDatasetMeta(u.datasetIndex).controller.getParsed(u.index) !== void 0
      )
    const l = this.chart.getElementsAtEventForMode(t, a.mode, a, i)
    return (a.reverse && l.reverse(), l)
  }
  _positionChanged(t, n) {
    const { caretX: i, caretY: s, options: a } = this,
      l = Os[a.position].call(this, t, n)
    return l !== !1 && (i !== l.x || s !== l.y)
  }
}
var aT = {
    id: 'tooltip',
    _element: b1,
    positioners: Os,
    afterInit(e, t, n) {
      n && (e.tooltip = new b1({ chart: e, options: n }))
    },
    beforeUpdate(e, t, n) {
      e.tooltip && e.tooltip.initialize(n)
    },
    reset(e, t, n) {
      e.tooltip && e.tooltip.initialize(n)
    },
    afterDraw(e) {
      const t = e.tooltip
      if (t && t._willRender()) {
        const n = { tooltip: t }
        if (e.notifyPlugins('beforeTooltipDraw', { ...n, cancelable: !0 }) === !1) return
        ;(t.draw(e.ctx), e.notifyPlugins('afterTooltipDraw', n))
      }
    },
    afterEvent(e, t) {
      if (e.tooltip) {
        const n = t.replay
        e.tooltip.handleEvent(t.event, n, t.inChartArea) && (t.changed = !0)
      }
    },
    defaults: {
      enabled: !0,
      external: null,
      position: 'average',
      backgroundColor: 'rgba(0,0,0,0.8)',
      titleColor: '#fff',
      titleFont: { weight: 'bold' },
      titleSpacing: 2,
      titleMarginBottom: 6,
      titleAlign: 'left',
      bodyColor: '#fff',
      bodySpacing: 2,
      bodyFont: {},
      bodyAlign: 'left',
      footerColor: '#fff',
      footerSpacing: 2,
      footerMarginTop: 6,
      footerFont: { weight: 'bold' },
      footerAlign: 'left',
      padding: 6,
      caretPadding: 2,
      caretSize: 5,
      cornerRadius: 6,
      boxHeight: (e, t) => t.bodyFont.size,
      boxWidth: (e, t) => t.bodyFont.size,
      multiKeyBackground: '#fff',
      displayColors: !0,
      boxPadding: 0,
      borderColor: 'rgba(0,0,0,0)',
      borderWidth: 0,
      animation: { duration: 400, easing: 'easeOutQuart' },
      animations: {
        numbers: { type: 'number', properties: ['x', 'y', 'width', 'height', 'caretX', 'caretY'] },
        opacity: { easing: 'linear', duration: 200 },
      },
      callbacks: y2,
    },
    defaultRoutes: { bodyFont: 'font', footerFont: 'font', titleFont: 'font' },
    descriptors: {
      _scriptable: e => e !== 'filter' && e !== 'itemSort' && e !== 'external',
      _indexable: !1,
      callbacks: { _scriptable: !1, _indexable: !1 },
      animation: { _fallback: !1 },
      animations: { _fallback: 'animation' },
    },
    additionalOptionScopes: ['interaction'],
  },
  lT = Object.freeze({
    __proto__: null,
    Colors: _M,
    Decimation: kM,
    Filler: UM,
    Legend: qM,
    SubTitle: JM,
    Title: ZM,
    Tooltip: aT,
  })
const uT = (e, t, n, i) => (
  typeof t == 'string'
    ? ((n = e.push(t) - 1), i.unshift({ index: n, label: t }))
    : isNaN(t) && (n = null),
  n
)
function cT(e, t, n, i) {
  const s = e.indexOf(t)
  if (s === -1) return uT(e, t, n, i)
  const a = e.lastIndexOf(t)
  return s !== a ? n : s
}
const fT = (e, t) => (e === null ? null : se(Math.round(e), 0, t))
function k1(e) {
  const t = this.getLabels()
  return e >= 0 && e < t.length ? t[e] : e
}
class hT extends $i {
  static id = 'category'
  static defaults = { ticks: { callback: k1 } }
  constructor(t) {
    ;(super(t), (this._startValue = void 0), (this._valueRange = 0), (this._addedLabels = []))
  }
  init(t) {
    const n = this._addedLabels
    if (n.length) {
      const i = this.getLabels()
      for (const { index: s, label: a } of n) i[s] === a && i.splice(s, 1)
      this._addedLabels = []
    }
    super.init(t)
  }
  parse(t, n) {
    if (wt(t)) return null
    const i = this.getLabels()
    return (
      (n = isFinite(n) && i[n] === t ? n : cT(i, t, yt(n, t), this._addedLabels)),
      fT(n, i.length - 1)
    )
  }
  determineDataLimits() {
    const { minDefined: t, maxDefined: n } = this.getUserBounds()
    let { min: i, max: s } = this.getMinMax(!0)
    ;(this.options.bounds === 'ticks' && (t || (i = 0), n || (s = this.getLabels().length - 1)),
      (this.min = i),
      (this.max = s))
  }
  buildTicks() {
    const t = this.min,
      n = this.max,
      i = this.options.offset,
      s = []
    let a = this.getLabels()
    ;((a = t === 0 && n === a.length - 1 ? a : a.slice(t, n + 1)),
      (this._valueRange = Math.max(a.length - (i ? 0 : 1), 1)),
      (this._startValue = this.min - (i ? 0.5 : 0)))
    for (let l = t; l <= n; l++) s.push({ value: l })
    return s
  }
  getLabelForValue(t) {
    return k1.call(this, t)
  }
  configure() {
    ;(super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels))
  }
  getPixelForValue(t) {
    return (
      typeof t != 'number' && (t = this.parse(t)),
      t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
    )
  }
  getPixelForTick(t) {
    const n = this.ticks
    return t < 0 || t > n.length - 1 ? null : this.getPixelForValue(n[t].value)
  }
  getValueForPixel(t) {
    return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange)
  }
  getBasePixel() {
    return this.bottom
  }
}
function dT(e, t) {
  const n = [],
    {
      bounds: s,
      step: a,
      min: l,
      max: u,
      precision: f,
      count: h,
      maxTicks: p,
      maxDigits: m,
      includeBounds: y,
    } = e,
    x = a || 1,
    _ = p - 1,
    { min: w, max: S } = t,
    k = !wt(l),
    P = !wt(u),
    C = !wt(h),
    T = (S - w) / (m + 1)
  let E = v0((S - w) / _ / x) * x,
    R,
    A,
    V,
    j
  if (E < 1e-14 && !k && !P) return [{ value: w }, { value: S }]
  ;((j = Math.ceil(S / E) - Math.floor(w / E)),
    j > _ && (E = v0((j * E) / _ / x) * x),
    wt(f) || ((R = Math.pow(10, f)), (E = Math.ceil(E * R) / R)),
    s === 'ticks' ? ((A = Math.floor(w / E) * E), (V = Math.ceil(S / E) * E)) : ((A = w), (V = S)),
    k && P && a && GP((u - l) / a, E / 1e3)
      ? ((j = Math.round(Math.min((u - l) / E, p))), (E = (u - l) / j), (A = l), (V = u))
      : C
        ? ((A = k ? l : A), (V = P ? u : V), (j = h - 1), (E = (V - A) / j))
        : ((j = (V - A) / E),
          Is(j, Math.round(j), E / 1e3) ? (j = Math.round(j)) : (j = Math.ceil(j))))
  const W = Math.max(x0(E), x0(A))
  ;((R = Math.pow(10, wt(f) ? W : f)), (A = Math.round(A * R) / R), (V = Math.round(V * R) / R))
  let N = 0
  for (
    k &&
    (y && A !== l
      ? (n.push({ value: l }),
        A < l && N++,
        Is(Math.round((A + N * E) * R) / R, l, P1(l, T, e)) && N++)
      : A < l && N++);
    N < j;
    ++N
  ) {
    const F = Math.round((A + N * E) * R) / R
    if (P && F > u) break
    n.push({ value: F })
  }
  return (
    P && y && V !== u
      ? n.length && Is(n[n.length - 1].value, u, P1(u, T, e))
        ? (n[n.length - 1].value = u)
        : n.push({ value: u })
      : (!P || V === u) && n.push({ value: V }),
    n
  )
}
function P1(e, t, { horizontal: n, minRotation: i }) {
  const s = Ze(i),
    a = (n ? Math.sin(s) : Math.cos(s)) || 0.001,
    l = 0.75 * t * ('' + e).length
  return Math.min(t / a, l)
}
class dl extends $i {
  constructor(t) {
    ;(super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._endValue = void 0),
      (this._valueRange = 0))
  }
  parse(t, n) {
    return wt(t) || ((typeof t == 'number' || t instanceof Number) && !isFinite(+t)) ? null : +t
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options,
      { minDefined: n, maxDefined: i } = this.getUserBounds()
    let { min: s, max: a } = this
    const l = f => (s = n ? s : f),
      u = f => (a = i ? a : f)
    if (t) {
      const f = un(s),
        h = un(a)
      f < 0 && h < 0 ? u(0) : f > 0 && h > 0 && l(0)
    }
    if (s === a) {
      let f = a === 0 ? 1 : Math.abs(a * 0.05)
      ;(u(a + f), t || l(s - f))
    }
    ;((this.min = s), (this.max = a))
  }
  getTickLimit() {
    const t = this.options.ticks
    let { maxTicksLimit: n, stepSize: i } = t,
      s
    return (
      i
        ? ((s = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1),
          s > 1e3 &&
            (console.warn(
              `scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${s} ticks. Limiting to 1000.`
            ),
            (s = 1e3)))
        : ((s = this.computeTickLimit()), (n = n || 11)),
      n && (s = Math.min(n, s)),
      s
    )
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY
  }
  buildTicks() {
    const t = this.options,
      n = t.ticks
    let i = this.getTickLimit()
    i = Math.max(2, i)
    const s = {
        maxTicks: i,
        bounds: t.bounds,
        min: t.min,
        max: t.max,
        precision: n.precision,
        step: n.stepSize,
        count: n.count,
        maxDigits: this._maxDigits(),
        horizontal: this.isHorizontal(),
        minRotation: n.minRotation || 0,
        includeBounds: n.includeBounds !== !1,
      },
      a = this._range || this,
      l = dT(s, a)
    return (
      t.bounds === 'ticks' && Pv(l, this, 'value'),
      t.reverse
        ? (l.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      l
    )
  }
  configure() {
    const t = this.ticks
    let n = this.min,
      i = this.max
    if ((super.configure(), this.options.offset && t.length)) {
      const s = (i - n) / Math.max(t.length - 1, 1) / 2
      ;((n -= s), (i += s))
    }
    ;((this._startValue = n), (this._endValue = i), (this._valueRange = i - n))
  }
  getLabelForValue(t) {
    return io(t, this.chart.options.locale, this.options.ticks.format)
  }
}
class pT extends dl {
  static id = 'linear'
  static defaults = { ticks: { callback: Cl.formatters.numeric } }
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!0)
    ;((this.min = Ut(t) ? t : 0), (this.max = Ut(n) ? n : 1), this.handleTickRangeOptions())
  }
  computeTickLimit() {
    const t = this.isHorizontal(),
      n = t ? this.width : this.height,
      i = Ze(this.options.ticks.minRotation),
      s = (t ? Math.sin(i) : Math.cos(i)) || 0.001,
      a = this._resolveTickFontOptions(0)
    return Math.ceil(n / Math.min(40, a.lineHeight / s))
  }
  getPixelForValue(t) {
    return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange
  }
}
const qs = e => Math.floor(ei(e)),
  Di = (e, t) => Math.pow(10, qs(e) + t)
function C1(e) {
  return e / Math.pow(10, qs(e)) === 1
}
function M1(e, t, n) {
  const i = Math.pow(10, n),
    s = Math.floor(e / i)
  return Math.ceil(t / i) - s
}
function mT(e, t) {
  const n = t - e
  let i = qs(n)
  for (; M1(e, t, i) > 10; ) i++
  for (; M1(e, t, i) < 10; ) i--
  return Math.min(i, qs(e))
}
function gT(e, { min: t, max: n }) {
  t = Re(e.min, t)
  const i = [],
    s = qs(t)
  let a = mT(t, n),
    l = a < 0 ? Math.pow(10, Math.abs(a)) : 1
  const u = Math.pow(10, a),
    f = s > a ? Math.pow(10, s) : 0,
    h = Math.round((t - f) * l) / l,
    p = Math.floor((t - f) / u / 10) * u * 10
  let m = Math.floor((h - p) / Math.pow(10, a)),
    y = Re(e.min, Math.round((f + p + m * Math.pow(10, a)) * l) / l)
  for (; y < n; )
    (i.push({ value: y, major: C1(y), significand: m }),
      m >= 10 ? (m = m < 15 ? 15 : 20) : m++,
      m >= 20 && (a++, (m = 2), (l = a >= 0 ? 1 : l)),
      (y = Math.round((f + p + m * Math.pow(10, a)) * l) / l))
  const x = Re(e.max, y)
  return (i.push({ value: x, major: C1(x), significand: m }), i)
}
class yT extends $i {
  static id = 'logarithmic'
  static defaults = { ticks: { callback: Cl.formatters.logarithmic, major: { enabled: !0 } } }
  constructor(t) {
    ;(super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._valueRange = 0))
  }
  parse(t, n) {
    const i = dl.prototype.parse.apply(this, [t, n])
    if (i === 0) {
      this._zero = !0
      return
    }
    return Ut(i) && i > 0 ? i : null
  }
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!0)
    ;((this.min = Ut(t) ? Math.max(0, t) : null),
      (this.max = Ut(n) ? Math.max(0, n) : null),
      this.options.beginAtZero && (this._zero = !0),
      this._zero &&
        this.min !== this._suggestedMin &&
        !Ut(this._userMin) &&
        (this.min = t === Di(this.min, 0) ? Di(this.min, -1) : Di(this.min, 0)),
      this.handleTickRangeOptions())
  }
  handleTickRangeOptions() {
    const { minDefined: t, maxDefined: n } = this.getUserBounds()
    let i = this.min,
      s = this.max
    const a = u => (i = t ? i : u),
      l = u => (s = n ? s : u)
    ;(i === s && (i <= 0 ? (a(1), l(10)) : (a(Di(i, -1)), l(Di(s, 1)))),
      i <= 0 && a(Di(s, -1)),
      s <= 0 && l(Di(i, 1)),
      (this.min = i),
      (this.max = s))
  }
  buildTicks() {
    const t = this.options,
      n = { min: this._userMin, max: this._userMax },
      i = gT(n, this)
    return (
      t.bounds === 'ticks' && Pv(i, this, 'value'),
      t.reverse
        ? (i.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      i
    )
  }
  getLabelForValue(t) {
    return t === void 0 ? '0' : io(t, this.chart.options.locale, this.options.ticks.format)
  }
  configure() {
    const t = this.min
    ;(super.configure(), (this._startValue = ei(t)), (this._valueRange = ei(this.max) - ei(t)))
  }
  getPixelForValue(t) {
    return (
      (t === void 0 || t === 0) && (t = this.min),
      t === null || isNaN(t)
        ? NaN
        : this.getPixelForDecimal(
            t === this.min ? 0 : (ei(t) - this._startValue) / this._valueRange
          )
    )
  }
  getValueForPixel(t) {
    const n = this.getDecimalForPixel(t)
    return Math.pow(10, this._startValue + n * this._valueRange)
  }
}
function If(e) {
  const t = e.ticks
  if (t.display && e.display) {
    const n = ge(t.backdropPadding)
    return yt(t.font && t.font.size, Bt.font.size) + n.height
  }
  return 0
}
function vT(e, t, n) {
  return ((n = zt(n) ? n : [n]), { w: h6(e, t.string, n), h: n.length * t.lineHeight })
}
function T1(e, t, n, i, s) {
  return e === i || e === s
    ? { start: t - n / 2, end: t + n / 2 }
    : e < i || e > s
      ? { start: t - n, end: t }
      : { start: t, end: t + n }
}
function xT(e) {
  const t = {
      l: e.left + e._padding.left,
      r: e.right - e._padding.right,
      t: e.top + e._padding.top,
      b: e.bottom - e._padding.bottom,
    },
    n = Object.assign({}, t),
    i = [],
    s = [],
    a = e._pointLabels.length,
    l = e.options.pointLabels,
    u = l.centerPointLabels ? Pt / a : 0
  for (let f = 0; f < a; f++) {
    const h = l.setContext(e.getPointLabelContext(f))
    s[f] = h.padding
    const p = e.getPointPosition(f, e.drawingArea + s[f], u),
      m = te(h.font),
      y = vT(e.ctx, m, e._pointLabels[f])
    i[f] = y
    const x = pe(e.getIndexAngle(f) + u),
      _ = Math.round(yh(x)),
      w = T1(_, p.x, y.w, 0, 180),
      S = T1(_, p.y, y.h, 90, 270)
    _T(n, t, x, w, S)
  }
  ;(e.setCenterPoint(t.l - n.l, n.r - t.r, t.t - n.t, n.b - t.b),
    (e._pointLabelItems = bT(e, i, s)))
}
function _T(e, t, n, i, s) {
  const a = Math.abs(Math.sin(n)),
    l = Math.abs(Math.cos(n))
  let u = 0,
    f = 0
  ;(i.start < t.l
    ? ((u = (t.l - i.start) / a), (e.l = Math.min(e.l, t.l - u)))
    : i.end > t.r && ((u = (i.end - t.r) / a), (e.r = Math.max(e.r, t.r + u))),
    s.start < t.t
      ? ((f = (t.t - s.start) / l), (e.t = Math.min(e.t, t.t - f)))
      : s.end > t.b && ((f = (s.end - t.b) / l), (e.b = Math.max(e.b, t.b + f))))
}
function wT(e, t, n) {
  const i = e.drawingArea,
    { extra: s, additionalAngle: a, padding: l, size: u } = n,
    f = e.getPointPosition(t, i + s + l, a),
    h = Math.round(yh(pe(f.angle + Kt))),
    p = CT(f.y, u.h, h),
    m = kT(h),
    y = PT(f.x, u.w, m)
  return {
    visible: !0,
    x: f.x,
    y: p,
    textAlign: m,
    left: y,
    top: p,
    right: y + u.w,
    bottom: p + u.h,
  }
}
function ST(e, t) {
  if (!t) return !0
  const { left: n, top: i, right: s, bottom: a } = e
  return !(
    Pn({ x: n, y: i }, t) ||
    Pn({ x: n, y: a }, t) ||
    Pn({ x: s, y: i }, t) ||
    Pn({ x: s, y: a }, t)
  )
}
function bT(e, t, n) {
  const i = [],
    s = e._pointLabels.length,
    a = e.options,
    { centerPointLabels: l, display: u } = a.pointLabels,
    f = { extra: If(a) / 2, additionalAngle: l ? Pt / s : 0 }
  let h
  for (let p = 0; p < s; p++) {
    ;((f.padding = n[p]), (f.size = t[p]))
    const m = wT(e, p, f)
    ;(i.push(m), u === 'auto' && ((m.visible = ST(m, h)), m.visible && (h = m)))
  }
  return i
}
function kT(e) {
  return e === 0 || e === 180 ? 'center' : e < 180 ? 'left' : 'right'
}
function PT(e, t, n) {
  return (n === 'right' ? (e -= t) : n === 'center' && (e -= t / 2), e)
}
function CT(e, t, n) {
  return (n === 90 || n === 270 ? (e -= t / 2) : (n > 270 || n < 90) && (e -= t), e)
}
function MT(e, t, n) {
  const { left: i, top: s, right: a, bottom: l } = n,
    { backdropColor: u } = t
  if (!wt(u)) {
    const f = Bi(t.borderRadius),
      h = ge(t.backdropPadding)
    e.fillStyle = u
    const p = i - h.left,
      m = s - h.top,
      y = a - i + h.width,
      x = l - s + h.height
    Object.values(f).some(_ => _ !== 0)
      ? (e.beginPath(), Ks(e, { x: p, y: m, w: y, h: x, radius: f }), e.fill())
      : e.fillRect(p, m, y, x)
  }
}
function TT(e, t) {
  const {
    ctx: n,
    options: { pointLabels: i },
  } = e
  for (let s = t - 1; s >= 0; s--) {
    const a = e._pointLabelItems[s]
    if (!a.visible) continue
    const l = i.setContext(e.getPointLabelContext(s))
    MT(n, l, a)
    const u = te(l.font),
      { x: f, y: h, textAlign: p } = a
    Hi(n, e._pointLabels[s], f, h + u.lineHeight / 2, u, {
      color: l.color,
      textAlign: p,
      textBaseline: 'middle',
    })
  }
}
function v2(e, t, n, i) {
  const { ctx: s } = e
  if (n) s.arc(e.xCenter, e.yCenter, t, 0, Ft)
  else {
    let a = e.getPointPosition(0, t)
    s.moveTo(a.x, a.y)
    for (let l = 1; l < i; l++) ((a = e.getPointPosition(l, t)), s.lineTo(a.x, a.y))
  }
}
function ET(e, t, n, i, s) {
  const a = e.ctx,
    l = t.circular,
    { color: u, lineWidth: f } = t
  ;(!l && !i) ||
    !u ||
    !f ||
    n < 0 ||
    (a.save(),
    (a.strokeStyle = u),
    (a.lineWidth = f),
    a.setLineDash(s.dash || []),
    (a.lineDashOffset = s.dashOffset),
    a.beginPath(),
    v2(e, n, l, i),
    a.closePath(),
    a.stroke(),
    a.restore())
}
function OT(e, t, n) {
  return di(e, { label: n, index: t, type: 'pointLabel' })
}
class LT extends dl {
  static id = 'radialLinear'
  static defaults = {
    display: !0,
    animate: !0,
    position: 'chartArea',
    angleLines: { display: !0, lineWidth: 1, borderDash: [], borderDashOffset: 0 },
    grid: { circular: !1 },
    startAngle: 0,
    ticks: { showLabelBackdrop: !0, callback: Cl.formatters.numeric },
    pointLabels: {
      backdropColor: void 0,
      backdropPadding: 2,
      display: !0,
      font: { size: 10 },
      callback(t) {
        return t
      },
      padding: 5,
      centerPointLabels: !1,
    },
  }
  static defaultRoutes = {
    'angleLines.color': 'borderColor',
    'pointLabels.color': 'color',
    'ticks.color': 'color',
  }
  static descriptors = { angleLines: { _fallback: 'grid' } }
  constructor(t) {
    ;(super(t),
      (this.xCenter = void 0),
      (this.yCenter = void 0),
      (this.drawingArea = void 0),
      (this._pointLabels = []),
      (this._pointLabelItems = []))
  }
  setDimensions() {
    const t = (this._padding = ge(If(this.options) / 2)),
      n = (this.width = this.maxWidth - t.width),
      i = (this.height = this.maxHeight - t.height)
    ;((this.xCenter = Math.floor(this.left + n / 2 + t.left)),
      (this.yCenter = Math.floor(this.top + i / 2 + t.top)),
      (this.drawingArea = Math.floor(Math.min(n, i) / 2)))
  }
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!1)
    ;((this.min = Ut(t) && !isNaN(t) ? t : 0),
      (this.max = Ut(n) && !isNaN(n) ? n : 0),
      this.handleTickRangeOptions())
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / If(this.options))
  }
  generateTickLabels(t) {
    ;(dl.prototype.generateTickLabels.call(this, t),
      (this._pointLabels = this.getLabels()
        .map((n, i) => {
          const s = Lt(this.options.pointLabels.callback, [n, i], this)
          return s || s === 0 ? s : ''
        })
        .filter((n, i) => this.chart.getDataVisibility(i))))
  }
  fit() {
    const t = this.options
    t.display && t.pointLabels.display ? xT(this) : this.setCenterPoint(0, 0, 0, 0)
  }
  setCenterPoint(t, n, i, s) {
    ;((this.xCenter += Math.floor((t - n) / 2)),
      (this.yCenter += Math.floor((i - s) / 2)),
      (this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, n, i, s))))
  }
  getIndexAngle(t) {
    const n = Ft / (this._pointLabels.length || 1),
      i = this.options.startAngle || 0
    return pe(t * n + Ze(i))
  }
  getDistanceFromCenterForValue(t) {
    if (wt(t)) return NaN
    const n = this.drawingArea / (this.max - this.min)
    return this.options.reverse ? (this.max - t) * n : (t - this.min) * n
  }
  getValueForDistanceFromCenter(t) {
    if (wt(t)) return NaN
    const n = t / (this.drawingArea / (this.max - this.min))
    return this.options.reverse ? this.max - n : this.min + n
  }
  getPointLabelContext(t) {
    const n = this._pointLabels || []
    if (t >= 0 && t < n.length) {
      const i = n[t]
      return OT(this.getContext(), t, i)
    }
  }
  getPointPosition(t, n, i = 0) {
    const s = this.getIndexAngle(t) - Kt + i
    return { x: Math.cos(s) * n + this.xCenter, y: Math.sin(s) * n + this.yCenter, angle: s }
  }
  getPointPositionForValue(t, n) {
    return this.getPointPosition(t, this.getDistanceFromCenterForValue(n))
  }
  getBasePosition(t) {
    return this.getPointPositionForValue(t || 0, this.getBaseValue())
  }
  getPointLabelPosition(t) {
    const { left: n, top: i, right: s, bottom: a } = this._pointLabelItems[t]
    return { left: n, top: i, right: s, bottom: a }
  }
  drawBackground() {
    const {
      backgroundColor: t,
      grid: { circular: n },
    } = this.options
    if (t) {
      const i = this.ctx
      ;(i.save(),
        i.beginPath(),
        v2(this, this.getDistanceFromCenterForValue(this._endValue), n, this._pointLabels.length),
        i.closePath(),
        (i.fillStyle = t),
        i.fill(),
        i.restore())
    }
  }
  drawGrid() {
    const t = this.ctx,
      n = this.options,
      { angleLines: i, grid: s, border: a } = n,
      l = this._pointLabels.length
    let u, f, h
    if (
      (n.pointLabels.display && TT(this, l),
      s.display &&
        this.ticks.forEach((p, m) => {
          if (m !== 0 || (m === 0 && this.min < 0)) {
            f = this.getDistanceFromCenterForValue(p.value)
            const y = this.getContext(m),
              x = s.setContext(y),
              _ = a.setContext(y)
            ET(this, x, f, l, _)
          }
        }),
      i.display)
    ) {
      for (t.save(), u = l - 1; u >= 0; u--) {
        const p = i.setContext(this.getPointLabelContext(u)),
          { color: m, lineWidth: y } = p
        !y ||
          !m ||
          ((t.lineWidth = y),
          (t.strokeStyle = m),
          t.setLineDash(p.borderDash),
          (t.lineDashOffset = p.borderDashOffset),
          (f = this.getDistanceFromCenterForValue(n.reverse ? this.min : this.max)),
          (h = this.getPointPosition(u, f)),
          t.beginPath(),
          t.moveTo(this.xCenter, this.yCenter),
          t.lineTo(h.x, h.y),
          t.stroke())
      }
      t.restore()
    }
  }
  drawBorder() {}
  drawLabels() {
    const t = this.ctx,
      n = this.options,
      i = n.ticks
    if (!i.display) return
    const s = this.getIndexAngle(0)
    let a, l
    ;(t.save(),
      t.translate(this.xCenter, this.yCenter),
      t.rotate(s),
      (t.textAlign = 'center'),
      (t.textBaseline = 'middle'),
      this.ticks.forEach((u, f) => {
        if (f === 0 && this.min >= 0 && !n.reverse) return
        const h = i.setContext(this.getContext(f)),
          p = te(h.font)
        if (((a = this.getDistanceFromCenterForValue(this.ticks[f].value)), h.showLabelBackdrop)) {
          ;((t.font = p.string),
            (l = t.measureText(u.label).width),
            (t.fillStyle = h.backdropColor))
          const m = ge(h.backdropPadding)
          t.fillRect(-l / 2 - m.left, -a - p.size / 2 - m.top, l + m.width, p.size + m.height)
        }
        Hi(t, u.label, 0, -a, p, {
          color: h.color,
          strokeColor: h.textStrokeColor,
          strokeWidth: h.textStrokeWidth,
        })
      }),
      t.restore())
  }
  drawTitle() {}
}
const Al = {
    millisecond: { common: !0, size: 1, steps: 1e3 },
    second: { common: !0, size: 1e3, steps: 60 },
    minute: { common: !0, size: 6e4, steps: 60 },
    hour: { common: !0, size: 36e5, steps: 24 },
    day: { common: !0, size: 864e5, steps: 30 },
    week: { common: !1, size: 6048e5, steps: 4 },
    month: { common: !0, size: 2628e6, steps: 12 },
    quarter: { common: !1, size: 7884e6, steps: 4 },
    year: { common: !0, size: 3154e7 },
  },
  Te = Object.keys(Al)
function E1(e, t) {
  return e - t
}
function O1(e, t) {
  if (wt(t)) return null
  const n = e._adapter,
    { parser: i, round: s, isoWeekday: a } = e._parseOpts
  let l = t
  return (
    typeof i == 'function' && (l = i(l)),
    Ut(l) || (l = typeof i == 'string' ? n.parse(l, i) : n.parse(l)),
    l === null
      ? null
      : (s &&
          (l = s === 'week' && (Cr(a) || a === !0) ? n.startOf(l, 'isoWeek', a) : n.startOf(l, s)),
        +l)
  )
}
function L1(e, t, n, i) {
  const s = Te.length
  for (let a = Te.indexOf(e); a < s - 1; ++a) {
    const l = Al[Te[a]],
      u = l.steps ? l.steps : Number.MAX_SAFE_INTEGER
    if (l.common && Math.ceil((n - t) / (u * l.size)) <= i) return Te[a]
  }
  return Te[s - 1]
}
function DT(e, t, n, i, s) {
  for (let a = Te.length - 1; a >= Te.indexOf(n); a--) {
    const l = Te[a]
    if (Al[l].common && e._adapter.diff(s, i, l) >= t - 1) return l
  }
  return Te[n ? Te.indexOf(n) : 0]
}
function AT(e) {
  for (let t = Te.indexOf(e) + 1, n = Te.length; t < n; ++t) if (Al[Te[t]].common) return Te[t]
}
function D1(e, t, n) {
  if (!n) e[t] = !0
  else if (n.length) {
    const { lo: i, hi: s } = vh(n, t),
      a = n[i] >= t ? n[i] : n[s]
    e[a] = !0
  }
}
function RT(e, t, n, i) {
  const s = e._adapter,
    a = +s.startOf(t[0].value, i),
    l = t[t.length - 1].value
  let u, f
  for (u = a; u <= l; u = +s.add(u, 1, i)) ((f = n[u]), f >= 0 && (t[f].major = !0))
  return t
}
function A1(e, t, n) {
  const i = [],
    s = {},
    a = t.length
  let l, u
  for (l = 0; l < a; ++l) ((u = t[l]), (s[u] = l), i.push({ value: u, major: !1 }))
  return a === 0 || !n ? i : RT(e, i, s, n)
}
class Vf extends $i {
  static id = 'time'
  static defaults = {
    bounds: 'data',
    adapters: {},
    time: {
      parser: !1,
      unit: !1,
      round: !1,
      isoWeekday: !1,
      minUnit: 'millisecond',
      displayFormats: {},
    },
    ticks: { source: 'auto', callback: !1, major: { enabled: !1 } },
  }
  constructor(t) {
    ;(super(t),
      (this._cache = { data: [], labels: [], all: [] }),
      (this._unit = 'day'),
      (this._majorUnit = void 0),
      (this._offsets = {}),
      (this._normalized = !1),
      (this._parseOpts = void 0))
  }
  init(t, n = {}) {
    const i = t.time || (t.time = {}),
      s = (this._adapter = new FC._date(t.adapters.date))
    ;(s.init(n),
      Fs(i.displayFormats, s.formats()),
      (this._parseOpts = { parser: i.parser, round: i.round, isoWeekday: i.isoWeekday }),
      super.init(t),
      (this._normalized = n.normalized))
  }
  parse(t, n) {
    return t === void 0 ? null : O1(this, t)
  }
  beforeLayout() {
    ;(super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] }))
  }
  determineDataLimits() {
    const t = this.options,
      n = this._adapter,
      i = t.time.unit || 'day'
    let { min: s, max: a, minDefined: l, maxDefined: u } = this.getUserBounds()
    function f(h) {
      ;(!l && !isNaN(h.min) && (s = Math.min(s, h.min)),
        !u && !isNaN(h.max) && (a = Math.max(a, h.max)))
    }
    ;((!l || !u) &&
      (f(this._getLabelBounds()),
      (t.bounds !== 'ticks' || t.ticks.source !== 'labels') && f(this.getMinMax(!1))),
      (s = Ut(s) && !isNaN(s) ? s : +n.startOf(Date.now(), i)),
      (a = Ut(a) && !isNaN(a) ? a : +n.endOf(Date.now(), i) + 1),
      (this.min = Math.min(s, a - 1)),
      (this.max = Math.max(s + 1, a)))
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps()
    let n = Number.POSITIVE_INFINITY,
      i = Number.NEGATIVE_INFINITY
    return (t.length && ((n = t[0]), (i = t[t.length - 1])), { min: n, max: i })
  }
  buildTicks() {
    const t = this.options,
      n = t.time,
      i = t.ticks,
      s = i.source === 'labels' ? this.getLabelTimestamps() : this._generate()
    t.bounds === 'ticks' &&
      s.length &&
      ((this.min = this._userMin || s[0]), (this.max = this._userMax || s[s.length - 1]))
    const a = this.min,
      l = this.max,
      u = JP(s, a, l)
    return (
      (this._unit =
        n.unit ||
        (i.autoSkip
          ? L1(n.minUnit, this.min, this.max, this._getLabelCapacity(a))
          : DT(this, u.length, n.minUnit, this.min, this.max))),
      (this._majorUnit = !i.major.enabled || this._unit === 'year' ? void 0 : AT(this._unit)),
      this.initOffsets(s),
      t.reverse && u.reverse(),
      A1(this, u, this._majorUnit)
    )
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map(t => +t.value))
  }
  initOffsets(t = []) {
    let n = 0,
      i = 0,
      s,
      a
    this.options.offset &&
      t.length &&
      ((s = this.getDecimalForValue(t[0])),
      t.length === 1 ? (n = 1 - s) : (n = (this.getDecimalForValue(t[1]) - s) / 2),
      (a = this.getDecimalForValue(t[t.length - 1])),
      t.length === 1 ? (i = a) : (i = (a - this.getDecimalForValue(t[t.length - 2])) / 2))
    const l = t.length < 3 ? 0.5 : 0.25
    ;((n = se(n, 0, l)),
      (i = se(i, 0, l)),
      (this._offsets = { start: n, end: i, factor: 1 / (n + 1 + i) }))
  }
  _generate() {
    const t = this._adapter,
      n = this.min,
      i = this.max,
      s = this.options,
      a = s.time,
      l = a.unit || L1(a.minUnit, n, i, this._getLabelCapacity(n)),
      u = yt(s.ticks.stepSize, 1),
      f = l === 'week' ? a.isoWeekday : !1,
      h = Cr(f) || f === !0,
      p = {}
    let m = n,
      y,
      x
    if (
      (h && (m = +t.startOf(m, 'isoWeek', f)),
      (m = +t.startOf(m, h ? 'day' : l)),
      t.diff(i, n, l) > 1e5 * u)
    )
      throw new Error(n + ' and ' + i + ' are too far apart with stepSize of ' + u + ' ' + l)
    const _ = s.ticks.source === 'data' && this.getDataTimestamps()
    for (y = m, x = 0; y < i; y = +t.add(y, u, l), x++) D1(p, y, _)
    return (
      (y === i || s.bounds === 'ticks' || x === 1) && D1(p, y, _),
      Object.keys(p)
        .sort(E1)
        .map(w => +w)
    )
  }
  getLabelForValue(t) {
    const n = this._adapter,
      i = this.options.time
    return i.tooltipFormat ? n.format(t, i.tooltipFormat) : n.format(t, i.displayFormats.datetime)
  }
  format(t, n) {
    const s = this.options.time.displayFormats,
      a = this._unit,
      l = n || s[a]
    return this._adapter.format(t, l)
  }
  _tickFormatFunction(t, n, i, s) {
    const a = this.options,
      l = a.ticks.callback
    if (l) return Lt(l, [t, n, i], this)
    const u = a.time.displayFormats,
      f = this._unit,
      h = this._majorUnit,
      p = f && u[f],
      m = h && u[h],
      y = i[n],
      x = h && m && y && y.major
    return this._adapter.format(t, s || (x ? m : p))
  }
  generateTickLabels(t) {
    let n, i, s
    for (n = 0, i = t.length; n < i; ++n)
      ((s = t[n]), (s.label = this._tickFormatFunction(s.value, n, t)))
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min)
  }
  getPixelForValue(t) {
    const n = this._offsets,
      i = this.getDecimalForValue(t)
    return this.getPixelForDecimal((n.start + i) * n.factor)
  }
  getValueForPixel(t) {
    const n = this._offsets,
      i = this.getDecimalForPixel(t) / n.factor - n.end
    return this.min + i * (this.max - this.min)
  }
  _getLabelSize(t) {
    const n = this.options.ticks,
      i = this.ctx.measureText(t).width,
      s = Ze(this.isHorizontal() ? n.maxRotation : n.minRotation),
      a = Math.cos(s),
      l = Math.sin(s),
      u = this._resolveTickFontOptions(0).size
    return { w: i * a + u * l, h: i * l + u * a }
  }
  _getLabelCapacity(t) {
    const n = this.options.time,
      i = n.displayFormats,
      s = i[n.unit] || i.millisecond,
      a = this._tickFormatFunction(t, 0, A1(this, [t], this._majorUnit), s),
      l = this._getLabelSize(a),
      u = Math.floor(this.isHorizontal() ? this.width / l.w : this.height / l.h) - 1
    return u > 0 ? u : 1
  }
  getDataTimestamps() {
    let t = this._cache.data || [],
      n,
      i
    if (t.length) return t
    const s = this.getMatchingVisibleMetas()
    if (this._normalized && s.length)
      return (this._cache.data = s[0].controller.getAllParsedValues(this))
    for (n = 0, i = s.length; n < i; ++n) t = t.concat(s[n].controller.getAllParsedValues(this))
    return (this._cache.data = this.normalize(t))
  }
  getLabelTimestamps() {
    const t = this._cache.labels || []
    let n, i
    if (t.length) return t
    const s = this.getLabels()
    for (n = 0, i = s.length; n < i; ++n) t.push(O1(this, s[n]))
    return (this._cache.labels = this._normalized ? t : this.normalize(t))
  }
  normalize(t) {
    return Tv(t.sort(E1))
  }
}
function Ya(e, t, n) {
  let i = 0,
    s = e.length - 1,
    a,
    l,
    u,
    f
  n
    ? (t >= e[i].pos && t <= e[s].pos && ({ lo: i, hi: s } = kn(e, 'pos', t)),
      ({ pos: a, time: u } = e[i]),
      ({ pos: l, time: f } = e[s]))
    : (t >= e[i].time && t <= e[s].time && ({ lo: i, hi: s } = kn(e, 'time', t)),
      ({ time: a, pos: u } = e[i]),
      ({ time: l, pos: f } = e[s]))
  const h = l - a
  return h ? u + ((f - u) * (t - a)) / h : u
}
class FT extends Vf {
  static id = 'timeseries'
  static defaults = Vf.defaults
  constructor(t) {
    ;(super(t), (this._table = []), (this._minPos = void 0), (this._tableRange = void 0))
  }
  initOffsets() {
    const t = this._getTimestampsForTable(),
      n = (this._table = this.buildLookupTable(t))
    ;((this._minPos = Ya(n, this.min)),
      (this._tableRange = Ya(n, this.max) - this._minPos),
      super.initOffsets(t))
  }
  buildLookupTable(t) {
    const { min: n, max: i } = this,
      s = [],
      a = []
    let l, u, f, h, p
    for (l = 0, u = t.length; l < u; ++l) ((h = t[l]), h >= n && h <= i && s.push(h))
    if (s.length < 2)
      return [
        { time: n, pos: 0 },
        { time: i, pos: 1 },
      ]
    for (l = 0, u = s.length; l < u; ++l)
      ((p = s[l + 1]),
        (f = s[l - 1]),
        (h = s[l]),
        Math.round((p + f) / 2) !== h && a.push({ time: h, pos: l / (u - 1) }))
    return a
  }
  _generate() {
    const t = this.min,
      n = this.max
    let i = super.getDataTimestamps()
    return (
      (!i.includes(t) || !i.length) && i.splice(0, 0, t),
      (!i.includes(n) || i.length === 1) && i.push(n),
      i.sort((s, a) => s - a)
    )
  }
  _getTimestampsForTable() {
    let t = this._cache.all || []
    if (t.length) return t
    const n = this.getDataTimestamps(),
      i = this.getLabelTimestamps()
    return (
      n.length && i.length ? (t = this.normalize(n.concat(i))) : (t = n.length ? n : i),
      (t = this._cache.all = t),
      t
    )
  }
  getDecimalForValue(t) {
    return (Ya(this._table, t) - this._minPos) / this._tableRange
  }
  getValueForPixel(t) {
    const n = this._offsets,
      i = this.getDecimalForPixel(t) / n.factor - n.end
    return Ya(this._table, i * this._tableRange + this._minPos, !0)
  }
}
var IT = Object.freeze({
  __proto__: null,
  CategoryScale: hT,
  LinearScale: pT,
  LogarithmicScale: yT,
  RadialLinearScale: LT,
  TimeScale: Vf,
  TimeSeriesScale: FT,
})
const VT = [RC, dM, lT, IT]
a2.register(...VT)
export {
  L5 as $,
  QT as A,
  WT as B,
  u5 as C,
  t5 as D,
  l5 as E,
  KT as F,
  h5 as G,
  XT as H,
  n5 as I,
  f5 as J,
  V5 as K,
  k5 as L,
  j1 as M,
  NT as N,
  jT as O,
  b5 as P,
  P5 as Q,
  HT as R,
  C5 as S,
  O5 as T,
  F5 as U,
  i5 as V,
  M5 as W,
  I5 as X,
  T5 as Y,
  E5 as Z,
  S5 as _,
  gw as a,
  A5 as a0,
  D5 as a1,
  a2,
  R5 as a3,
  UT as a4,
  BT as b,
  an as c,
  YT as d,
  c5 as e,
  g5 as f,
  GT as g,
  w5 as h,
  a5 as i,
  zT as j,
  e5 as k,
  r5 as l,
  $T as m,
  qT as n,
  m5 as o,
  JT as p,
  v5 as q,
  U as r,
  o5 as s,
  d5 as t,
  Qs as u,
  s5 as v,
  x5 as w,
  ZT as x,
  p5 as y,
  y5 as z,
}
//# sourceMappingURL=vendor-Ccc7z4H6.js.map
