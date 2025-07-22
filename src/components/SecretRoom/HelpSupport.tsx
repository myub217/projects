// src/components/SecretRoom/HelpSupport.tsx

import React from 'react'
import { LifeBuoyIcon, MailIcon, MessageCircleIcon } from 'lucide-react'

const HelpSupport: React.FC = () => {
  return (
    <section
      aria-label="ศูนย์ช่วยเหลือและการติดต่อ"
      className="bg-base-200 dark:bg-zinc-800 rounded-xl shadow-md p-6 sm:p-8 space-y-6 transition-colors"
    >
      <header className="flex items-center gap-3 mb-4">
        <LifeBuoyIcon className="w-6 h-6 text-primary" aria-hidden="true" />
        <h2 className="text-lg sm:text-xl font-bold text-base-content select-none">
          ศูนย์ช่วยเหลือ & การสนับสนุน
        </h2>
      </header>

      <ul className="space-y-6 text-base-content/80 text-sm sm:text-base">
        <li className="flex items-start gap-3">
          <MessageCircleIcon className="w-5 h-5 mt-1 text-blue-500 flex-shrink-0" aria-hidden="true" />
          <div>
            <p className="font-medium text-base-content select-text">สอบถามด่วนผ่าน LINE</p>
            <a
              href="https://line.me/ti/p/~jpdocs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-4 hover:text-primary-focus transition"
              aria-label="เปิดแชท LINE กับทีมงาน"
            >
              คลิกที่นี่เพื่อแชทกับทีมงาน
            </a>
          </div>
        </li>

        <li className="flex items-start gap-3">
          <MailIcon className="w-5 h-5 mt-1 text-emerald-500 flex-shrink-0" aria-hidden="true" />
          <div>
            <p className="font-medium text-base-content select-text">ติดต่อทางอีเมล</p>
            <a
              href="mailto:support@jpvisualdocs.com"
              className="text-primary underline underline-offset-4 hover:text-primary-focus transition"
              aria-label="ส่งอีเมลไปที่ support@jpvisualdocs.com"
            >
              support@jpvisualdocs.com
            </a>
          </div>
        </li>
      </ul>

      <p className="text-xs text-gray-500 dark:text-gray-400 select-none">
        ทีมงานพร้อมตอบกลับภายใน 1-3 ชั่วโมง ในเวลาทำการ
      </p>
    </section>
  )
}

export default HelpSupport