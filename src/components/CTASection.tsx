// src/components/CTASection.tsx – ปรับปรุงโครงสร้างและ UX

import React from 'react'
import { FaFacebook, FaFacebookMessenger, FaLine } from 'react-icons/fa'

const CTASection: React.FC = () => (
  <section
    id="cta"
    className="relative isolate overflow-hidden bg-primary py-20 px-4 text-white sm:px-6 lg:px-8"
    aria-labelledby="cta-heading"
  >
    {/* Background Pattern */}
    <div
      className="absolute inset-0 -z-10 opacity-20 bg-[url('/bg/cta-pattern.svg')] bg-cover bg-center"
      aria-hidden="true"
    />

    <div className="mx-auto max-w-4xl text-center space-y-6">
      <h2
        id="cta-heading"
        className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight font-heading"
      >
        พร้อมเริ่มใช้งานหรือยัง?
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
        ติดต่อเราวันนี้ เพื่อรับคำปรึกษาฟรีและข้อเสนอสุดพิเศษจากทีมงานมืออาชีพของเรา
      </p>

      <div className="flex flex-wrap justify-center items-center gap-4 pt-6">
        <a
          href="#contact"
          className="inline-block rounded-xl bg-white text-primary font-semibold px-6 py-3 text-sm sm:text-base shadow hover:bg-gray-100 hover:text-primary-focus transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
        >
          ติดต่อเรา
        </a>

        <a
          href="https://line.me/R/ti/p/@jpdocs"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-white text-white font-semibold px-6 py-3 text-sm sm:text-base hover:bg-white hover:text-primary transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
        >
          <FaLine className="text-lg" />
          LINE: @462fqrfc
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=61573307616115"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-white text-white font-semibold px-6 py-3 text-sm sm:text-base hover:bg-white hover:text-primary transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
        >
          <FaFacebook className="text-lg" />
          Facebook
        </a>

        <a
          href="https://m.me/61573307616115?hash=AbZf0L5cSZ8XvIYw&source=qr_link_share"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-white text-white font-semibold px-6 py-3 text-sm sm:text-base hover:bg-white hover:text-primary transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
        >
          <FaFacebookMessenger className="text-lg" />
          Messenger
        </a>
      </div>
    </div>
  </section>
)

export default CTASection