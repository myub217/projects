// src/components/ErrorBoundary.tsx

import React, { ReactNode, ErrorInfo } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, info);
    // 🪵 You can send logs to external service here
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <section className="flex h-screen w-full flex-col items-center justify-center bg-base-100 p-6 text-center text-base-content">
            <h2 className="mb-4 text-3xl font-bold text-error">ขออภัย เกิดข้อผิดพลาดบางอย่าง</h2>
            <p className="mb-6 text-lg">ลองรีโหลดหน้าหรือกลับไปที่หน้าหลัก</p>
            <button
              onClick={() => window.location.reload()}
              className="hover:bg-primary-focus rounded bg-primary px-6 py-3 font-semibold text-primary-content shadow-md transition"
            >
              รีโหลดหน้า
            </button>
          </section>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
