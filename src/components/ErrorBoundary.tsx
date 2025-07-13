// src/components/ErrorBoundary.tsx

import React, { ReactNode, ErrorInfo } from "react";

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
    console.error("ErrorBoundary caught an error:", error, info);
    // 🪵 You can send logs to external service here
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <section className="w-full h-screen flex flex-col items-center justify-center text-center p-6 bg-base-100 text-base-content">
            <h2 className="text-3xl font-bold text-error mb-4">ขออภัย เกิดข้อผิดพลาดบางอย่าง</h2>
            <p className="text-lg mb-6">ลองรีโหลดหน้าหรือกลับไปที่หน้าหลัก</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-primary hover:bg-primary-focus text-primary-content font-semibold px-6 py-3 rounded shadow-md transition"
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