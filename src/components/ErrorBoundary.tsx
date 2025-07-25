// src/components/ErrorBoundary.tsx
// ✅ Robust ErrorBoundary with fallback UI, reset on children change, and optional error logging

import React, { ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, info: ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    if (this.props.onError) {
      this.props.onError(error, info);
    }
    console.error('❌ ErrorBoundary caught error:', error, info);
  }

  componentDidUpdate(prevProps: ErrorBoundaryProps) {
    if (this.state.hasError && prevProps.children !== this.props.children) {
      this.setState({ hasError: false, error: null });
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;

      return (
        <section
          role="alert"
          aria-live="assertive"
          className="mx-auto mt-10 max-w-xl rounded-md bg-error p-6 text-error-content shadow-md"
        >
          <h2 className="mb-2 text-xl font-semibold">เกิดข้อผิดพลาดในระบบ</h2>
          <p className="text-sm">
            {this.state.error?.message || 'เกิดข้อผิดพลาดบางอย่าง กรุณาลองใหม่อีกครั้ง'}
          </p>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
