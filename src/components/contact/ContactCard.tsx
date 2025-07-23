// src/components/contact/ContactCard.tsx

import React from 'react'
import type { ContactLink } from '@/config/contact'

interface ContactCardProps {
  contact: ContactLink
  href: string
}

const ContactCard: React.FC<ContactCardProps> = ({ contact, href }) => {
  const Icon = contact.icon

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center rounded-lg border border-base-300 bg-base-100 p-4 text-center text-sm font-medium text-base-content shadow-sm transition-colors hover:bg-base-200 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      aria-label={contact.label}
    >
      <Icon className="mb-2 h-8 w-8 text-primary" />
      <span>{contact.label}</span>
    </a>
  )
}

export default ContactCard
