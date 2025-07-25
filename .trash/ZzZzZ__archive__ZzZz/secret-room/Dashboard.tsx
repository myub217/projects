// src/components/SecretRoom/Dashboard.tsx
// ✅ Dashboard สำหรับห้องลับ รวมข้อมูลสำคัญและความปลอดภัย พร้อม UX ที่เข้าถึงง่าย

import React from 'react';
import HeaderBlock from './HeaderBlock';
import UserProfileCard from './UserProfileCard';
import NotificationsPanel from './NotificationsPanel';
import SystemCheckCard from './SystemCheckCard';
import PerformanceMetrics from './PerformanceMetrics';
import FileUpload from './FileUpload';
import AccessLogTable from './AccessLogTable';
import HelpSupport from './HelpSupport';
import CustomerLoanProgressGraph from './CustomerLoanProgressGraph';
import { ShieldCheck } from 'lucide-react';

interface SecretRoomDashboardProps {
  username: string;
}

const SecretRoomDashboard: React.FC<SecretRoomDashboardProps> = ({ username }) => {
  return (
    <main
      role="main"
      aria-label="แดชบอร์ดห้องลับ"
      tabIndex={-1}
      className="mx-auto flex max-w-7xl flex-col gap-10 rounded-2xl bg-base-200 p-8 shadow-xl transition-shadow hover:shadow-2xl focus-visible:ring-2 focus-visible:ring-primary sm:p-12"
    >
      <HeaderBlock />

      {/* ผู้ใช้ + แจ้งเตือน */}
      <section
        aria-label="ข้อมูลผู้ใช้และการแจ้งเตือน"
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        <UserProfileCard username={username} />
        <NotificationsPanel />
      </section>

      {/* สถานะระบบ + ประสิทธิภาพ */}
      <section
        aria-label="สถานะระบบและประสิทธิภาพ"
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        <SystemCheckCard />
        <PerformanceMetrics />
      </section>

      {/* กราฟสินเชื่อ */}
      <section
        aria-label="สถานะสินเชื่อ"
        tabIndex={-1}
        className="rounded-xl border border-base-300 bg-base-100 p-6 shadow-lg dark:border-zinc-700 dark:bg-zinc-900"
      >
        <CustomerLoanProgressGraph />
      </section>

      {/* อัปโหลดเอกสาร */}
      <section
        aria-label="อัปโหลดเอกสาร"
        tabIndex={-1}
        className="dark:border-base-700 mx-auto max-w-lg rounded-xl border border-base-300 bg-base-100 p-6 shadow-inner dark:bg-zinc-800"
      >
        <FileUpload
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
          multiple
          disabled={false}
          aria-disabled={false}
          onFileSelect={(files) => {
            if (!files) return;
            const fileNames = Array.isArray(files)
              ? files.map((f) => f.name).join(', ')
              : files.name;
            console.log('📁 ไฟล์ที่เลือก:', fileNames);
            // TODO: เชื่อม API อัปโหลดไฟล์
          }}
        />
      </section>

      {/* Log การใช้งาน */}
      <section
        aria-label="ประวัติการใช้งานระบบ"
        tabIndex={-1}
        className="rounded-xl border border-base-300 bg-base-100 p-4 shadow dark:border-zinc-700 dark:bg-zinc-900"
      >
        <AccessLogTable />
      </section>

      {/* Help Support */}
      <section
        aria-label="ศูนย์ช่วยเหลือและการติดต่อ"
        tabIndex={-1}
        className="rounded-xl border border-base-300 bg-base-100 p-6 shadow-inner dark:border-zinc-700 dark:bg-zinc-800"
      >
        <HelpSupport />
      </section>

      {/* Security Note */}
      <section
        aria-label="ข้อกำหนดความปลอดภัย"
        className="space-y-4 rounded-lg border border-warning bg-yellow-100 p-6 text-warning-content shadow-inner dark:border-yellow-600 dark:bg-yellow-900/20"
      >
        <div className="flex items-center gap-2 font-semibold text-yellow-800 dark:text-yellow-200">
          <ShieldCheck className="h-5 w-5 shrink-0" />
          ระบบออกแบบให้ปลอดภัยทั้งสองฝ่าย
        </div>

        <div className="space-y-3 text-sm leading-relaxed text-base-content/80 dark:text-zinc-300">
          <p>
            <strong className="text-red-500">*</strong>{' '}
            <span className="font-medium">หมายเหตุ:</span>{' '}
            รหัสที่คุณได้รับคือกุญแจเข้าถึงระบบทั้งหมด{' '}
            <strong>ใช้เฉพาะคุณเท่านั้น</strong>
          </p>

          <ul className="ml-4 list-disc space-y-1">
            <li>ห้ามแชร์ User / Password / IP / Token ให้กับบุคคลอื่น</li>
            <li>การเข้าระบบจากเครื่องที่ไม่ใช่เครื่องประจำ = บัญชีจะถูกปิดทันที</li>
            <li>ละเมิดกฎ = การจ้างงานยกเลิกอัตโนมัติ</li>
          </ul>

          <p className="font-medium">
            ความลับของคุณจะปลอดภัยหากอยู่กับเรา หากไม่ — เราไม่สามารถรับประกันใด ๆ ได้
          </p>

          <p className="font-semibold text-base-content/90 dark:text-white">
            กรุณาเคารพกติกาทั้งสองฝ่าย เพื่อความปลอดภัยของคุณและทีมงาน
          </p>
        </div>
      </section>
    </main>
  );
};

export default SecretRoomDashboard;
