// src/components/contact/ContactList.tsx

import React from 'react'
import { contactLinks, getContactHref } from '@/config/contact'
import ContactCard from './ContactCard'

const ContactList: React.FC = () => (
  <section
    aria-labelledby="contact-list-title"
    className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-6"
    role="list"
  >
    {contactLinks.map((contact) => (
      <ContactCard
        key={contact.type}
        contact={contact}
        href={getContactHref(contact.type)}
        role="listitem"
      />
    ))}
  </section>
)

export default ContactList