// src/components/CTASection.tsx

import React from 'react'
import { FaFacebook, FaFacebookMessenger, FaLine } from 'react-icons/fa'

const CTASection: React.FC = () => (
  <section
    id="cta"
    aria-labelledby="cta-heading"
    className="relative isolate overflow-hidden bg-primary px-4 py-20 text-white sm:px-6 lg:px-8"
  >
    {/* Background Pattern */}
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 bg-[url('/bg/cta-pattern.svg')] bg-cover bg-center opacity-20"
    />

    <div className="mx-auto max-w-4xl space-y-6 text-center">
      <h2
        id="cta-heading"
        className="font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl"
      >
        พร้อมเริ่มใช้งานหรือยัง?
      </h2>

      <p className="mx-auto max-w-2xl text-base text-white/90 sm:text-lg md:text-xl">
        ติดต่อเราวันนี้ เพื่อรับคำปรึกษาฟรีและข้อเสนอสุดพิเศษจากทีมงานมืออาชีพของเรา
      </p>

      <div className="flex flex-wrap justify-center gap-4 pt-6">
        <a
          href="#contact"
          className="hover:text-primary-focus inline-block rounded-xl bg-white px-6 py-3 text-sm font-semibold text-primary shadow transition hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 sm:text-base"
        >
          ติดต่อเรา
        </a>

        <a
          href="https://line.me/R/ti/p/@jpdocs"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 sm:text-base"
        >
          <FaLine className="text-lg" aria-hidden="true" />
          <span>LINE: @462fqrfc</span>
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=61573307616115"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 sm:text-base"
        >
          <FaFacebook className="text-lg" aria-hidden="true" />
          <span>Facebook</span>
        </a>

        <a
          href="https://m.me/61573307616115?hash=AbZf0L5cSZ8XvIYw&source=qr_link_share"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 sm:text-base"
        >
          <FaFacebookMessenger className="text-lg" aria-hidden="true" />
          <span>Messenger</span>
        </a>
      </div>
    </div>
  </section>
)

export default CTASection
