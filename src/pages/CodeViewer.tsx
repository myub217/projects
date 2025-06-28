// src/pages/CodeViewer.tsx
import React from "react";
import CodePlayground from "@/components/CodePlayground";

// ✅ นำเข้าไฟล์ที่ต้องการแสดงผลเป็น raw text
import salaryCode from "@/documents/SalaryCertificate.tsx?raw";
import businessCode from "@/documents/BusinessRegistration.tsx?raw";
import viteConfig from "@/../vite.config.mjs?raw";

const CodeViewer: React.FC = () => {
  return (
    <main className="min-h-screen p-4 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-xl font-bold mb-4 text-center text-blue-700 dark:text-blue-300">
          ตัวอย่างไฟล์ที่ใช้งานจริง
        </h1>

        <CodePlayground
          title="ตัวอย่างโค้ด"
          defaultFile="SalaryCertificate.tsx"
          files={{
            "SalaryCertificate.tsx": salaryCode,
            "BusinessRegistration.tsx": businessCode,
            "vite.config.mjs": viteConfig,
          }}
        />
      </div>
    </main>
  );
};

export default CodeViewer;