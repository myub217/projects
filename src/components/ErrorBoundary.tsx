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
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("❌ ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // ใช้ fallback จาก props ถ้ามี ไม่งั้นใช้ข้อความเริ่มต้น
      return (
        this.props.fallback ?? (
          <div
            role="alert"
            className="text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-4 rounded-lg"
          >
            ⚠️ เกิดข้อผิดพลาดในการโหลดข้อมูล โปรดลองใหม่อีกครั้งภายหลัง
          </div>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;