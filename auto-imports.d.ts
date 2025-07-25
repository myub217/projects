// /auto-imports.d.ts
// 🔧 Improved auto-import types for unplugin-auto-import
// ปรับแก้ตามการใช้งานจริง ป้องกัน path ผิดหรือ component ไม่ได้ใช้

/// <reference types="vite/client" />
/// <reference types="unplugin-auto-imports" />

declare global {
  // React core hooks
  const React: typeof import('react');
  const useState: typeof import('react').useState;
  const useEffect: typeof import('react').useEffect;
  const useRef: typeof import('react').useRef;
  const useMemo: typeof import('react').useMemo;
  const useCallback: typeof import('react').useCallback;
  const useContext: typeof import('react').useContext;
  const useReducer: typeof import('react').useReducer;
  const useLayoutEffect: typeof import('react').useLayoutEffect;

  // React Router DOM hooks
  const useNavigate: typeof import('react-router-dom').useNavigate;
  const useParams: typeof import('react-router-dom').useParams;
  const useLocation: typeof import('react-router-dom').useLocation;
  const useMatch: typeof import('react-router-dom').useMatch;

  // Uncomment & adjust if used:
  // const useStore: typeof import('@/store').useStore;
  // const debounce: typeof import('lodash.debounce');
  // const twMerge: typeof import('tailwind-merge').twMerge;
}

export {};
