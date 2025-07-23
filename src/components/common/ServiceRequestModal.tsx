// src/components/common/ServiceRequestModal.tsx
import React, { useEffect, useRef, useCallback } from 'react'
import type { Service } from '@components/ServicesSection'

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
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        )
        if (focusableElements.length === 0) return

        const firstEl = focusableElements[0]
        const lastEl = focusableElements[focusableElements.length - 1]

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
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [service])

  const onModalContentClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
  }, [])

  if (!service) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      aria-describedby="service-modal-desc"
      tabIndex={-1}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4 py-6 md:px-6 transition-opacity duration-300"
    >
      <div
        tabIndex={0}
        ref={modalRef}
        onClick={onModalContentClick}
        className="w-full max-w-lg rounded-2xl bg-base-100 dark:bg-gray-900 p-6 shadow-2xl space-y-5 focus:outline-none transform transition-transform duration-300 ease-out"
      >
        <h3
          id="service-modal-title"
          className="text-xl font-bold text-primary"
          tabIndex={-1}
        >
          ขอใช้บริการจาก JP Visual & Docs
        </h3>

        <section
          id="service-modal-desc"
          className="space-y-2 text-sm sm:text-base text-base-content/80"
        >
          <p><strong>บริการ:</strong> {service.title}</p>
          <p><strong>รายละเอียด:</strong> {service.description}</p>
          <p><strong>ค่าบริการ:</strong> {service.price}</p>
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            ทีมงานสายทำจริง สไตล์มือโปร — เอกสาร ชัด เป๊ะ ขายงานผ่าน
          </p>
        </section>

        <div className="mt-6 flex flex-col sm:flex-row justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="btn btn-sm rounded border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            ปิด
          </button>

          <a
            href={`https://line.me/ti/p/~jpdocs?text=${encodeURIComponent(
              `สวัสดีครับ/ค่ะ สนใจใช้บริการ: ${service.title}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="btn btn-sm btn-primary rounded text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            ติดต่อผ่าน LINE
          </a>
        </div>
      </div>
    </div>
  )
}

export default ServiceRequestModal