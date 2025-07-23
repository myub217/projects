// src/components/SecretRoom/HelpSupport.tsx
// ✅ คอมโพเนนต์ศูนย์ช่วยเหลือ: รวมการติดต่อผ่าน LINE และอีเมล พร้อมไอคอนและดีไซน์รองรับ Dark Mode + Accessiblity

import React from 'react'
import { LifeBuoyIcon, MailIcon, MessageCircleIcon } from 'lucide-react'

const HelpSupport: React.FC = () => {
  return (
    <section
      aria-label="ศูนย์ช่วยเหลือและการติดต่อ"
      className="space-y-6 rounded-xl bg-base-200 p-6 shadow-md transition-colors duration-300 dark:bg-zinc-800 sm:p-8"
    >
      <header className="mb-4 flex items-center gap-3">
        <LifeBuoyIcon
          className="h-6 w-6 shrink-0 text-primary"
          aria-hidden="true"
          focusable="false"
        />
        <h2 className="text-lg font-bold text-base-content sm:text-xl">
          ศูนย์ช่วยเหลือ & การสนับสนุน
        </h2>
      </header>

      <ul className="space-y-6 text-sm text-base-content/80 sm:text-base">
        <li className="flex items-start gap-3">
          <MessageCircleIcon
            className="mt-1 h-5 w-5 shrink-0 text-blue-500"
            aria-hidden="true"
            focusable="false"
          />
          <div>
            <p className="mb-1 font-medium text-base-content">สอบถามด่วนผ่าน LINE</p>
            <a
              href="https://line.me/ti/p/~jpdocs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-focus inline-block text-primary underline underline-offset-4 transition-colors"
              aria-label="เปิดแชท LINE กับทีมงาน"
            >
              คลิกที่นี่เพื่อแชทกับทีมงาน
            </a>
          </div>
        </li>

        <li className="flex items-start gap-3">
          <MailIcon
            className="mt-1 h-5 w-5 shrink-0 text-emerald-500"
            aria-hidden="true"
            focusable="false"
          />
          <div>
            <p className="mb-1 font-medium text-base-content">ติดต่อทางอีเมล</p>
            <a
              href="mailto:support@jpvisualdocs.com"
              className="hover:text-primary-focus inline-block text-primary underline underline-offset-4 transition-colors"
              aria-label="ส่งอีเมลไปที่ support@jpvisualdocs.com"
            >
              support@jpvisualdocs.com
            </a>
          </div>
        </li>
      </ul>

      <footer>
        <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
          ทีมงานพร้อมตอบกลับภายใน 1–3 ชั่วโมง ในเวลาทำการ
        </p>
      </footer>
    </section>
  )
}

export default HelpSupport
