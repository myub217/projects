// src/components/contact/ContactIconButton.tsx

import React from 'react'
import type { ContactLink } from '@/config/contact'

interface ContactIconButtonProps {
  contact: ContactLink
  href: string
}

const ContactIconButton: React.FC<ContactIconButtonProps> = ({ contact, href }) => {
  const Icon = contact.icon

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 rounded-full border border-base-300 bg-base-100 px-4 py-2 text-sm hover:bg-base-200 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
      aria-label={contact.label}
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
      <span>{contact.label}</span>
    </a>
  )
}

export default ContactIconButton