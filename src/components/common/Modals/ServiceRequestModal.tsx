// src/components/Modals/ServiceRequestModal.tsx
// ✅ Modal แสดงรายละเอียดบริการ รองรับ focus trap, ปิดด้วย ESC และ backdrop
// ✅ ปิด scroll หน้า, คืน focus เดิม, และลิงก์ LINE พร้อมข้อความ preset

import React, { useEffect, useRef, useCallback } from 'react'
import type { Service } from '@types/service'

interface ServiceRequestModalProps {
  service: Service | null
  onClose: () => void
}

const ServiceRequestModal: React.FC<ServiceRequestModalProps> = ({ service, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!service) return

    const previousActiveElement = document.activeElement as HTMLElement | null
    modalRef.current?.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableEls = modalRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        )
        const firstEl = focusableEls[0]
        const lastEl = focusableEls[focusableEls.length - 1]

        if (!firstEl || !lastEl) return

        if (e.shiftKey) {
          if (document.activeElement === firstEl) {
            e.preventDefault()
            lastEl.focus()
          }
        } else {
          if (document.activeElement === lastEl) {
            e.preventDefault()
            firstEl.focus()
          }
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      previousActiveElement?.focus()
    }
  }, [service, onClose])

  useEffect(() => {
    if (service) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [service])

  const handleBackdropClick = () => onClose()
  const handleContentClick = useCallback((e: React.MouseEvent) => e.stopPropagation(), [])

  if (!service) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      aria-describedby="service-modal-desc"
      tabIndex={-1}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm md:px-6"
    >
      <div
        ref={modalRef}
        tabIndex={0}
        onClick={handleContentClick}
        className="w-full max-w-lg space-y-5 rounded-2xl bg-base-100 p-6 shadow-xl outline-none transition-transform dark:bg-gray-900"
      >
        <h2 id="service-modal-title" className="text-xl font-semibold text-primary">
          ขอใช้บริการจาก JP Visual & Docs
        </h2>

        <div
          id="service-modal-desc"
          className="space-y-2 text-sm text-base-content/80 sm:text-base"
        >
          <p>
            <strong>บริการ:</strong> {service.title}
          </p>
          <p>
            <strong>รายละเอียด:</strong> {service.description}
          </p>
          <p>
            <strong>ค่าบริการ:</strong> {service.price.amount} {service.price.currency}
          </p>
          <p className="pt-2 text-xs text-muted">
            ทีมงานมือโปร สไตล์สายเทา — งานไว เอกสารเป๊ะ ผ่านฉลุย
          </p>
        </div>

        <div className="mt-6 flex flex-col justify-end gap-3 sm:flex-row">
          <button
            type="button"
            onClick={onClose}
            className="btn btn-sm rounded border border-base-300 bg-base-200 hover:bg-base-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            ปิด
          </button>

          <a
            href={`https://line.me/ti/p/~jpdocs?text=${encodeURIComponent(`สวัสดีครับ/ค่ะ สนใจใช้บริการ: ${service.title}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="btn btn-primary btn-sm rounded text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            ติดต่อผ่าน LINE
          </a>
        </div>
      </div>
    </div>
  )
}

export default ServiceRequestModal
