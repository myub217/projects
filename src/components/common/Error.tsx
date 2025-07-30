// src/components/ErrorBoundary.tsx

import React, { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error, errorInfo });

    // Optional: Log to external monitoring service
    // sendErrorToService({ error, info: errorInfo })
    console.error("[ErrorBoundary] 🔥", error);
    console.info("[ErrorBoundary Info]", errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    const { hasError, error, errorInfo } = this.state;
    const { children, fallback } = this.props;

    if (hasError) {
      if (fallback) return fallback;

      return (
        <div className="flex flex-col items-center justify-center p-6 text-center bg-red-50 text-red-900 rounded-xl shadow-md max-w-xl mx-auto mt-12">
          <svg
            className="w-12 h-12 mb-4 text-red-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M5.07 5.07a10 10 0 1113.86 13.86A10 10 0 015.07 5.07z"
            />
          </svg>
          <h2 className="text-xl font-bold mb-2">เกิดข้อผิดพลาดบางอย่าง</h2>
          <p className="text-sm mb-4">
            ระบบไม่สามารถประมวลผลคำขอของคุณได้ในขณะนี้ กรุณาลองอีกครั้งในภายหลัง
          </p>
          <button
            onClick={this.resetError}
            className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
          >
            รีโหลดหน้านี้
          </button>

          {process.env.NODE_ENV === "development" && error && (
            <div className="mt-6 w-full text-left bg-white p-4 rounded border border-red-200 max-h-64 overflow-auto text-xs text-gray-800">
              <strong>{error.toString()}</strong>
              {errorInfo?.componentStack && (
                <pre className="mt-2">{errorInfo.componentStack}</pre>
              )}
            </div>
          )}
        </div>
      );
    }

    return children;
  }
}
