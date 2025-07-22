// src/components/AdminBoard/Dashboard.tsx

import React, { useEffect, useState } from 'react'
import CustomerCard from '../CustomerCard'
import StatsPanel from './StatsPanel'
import UserTable from './UserTable'
import { CustomerApproval } from '@/data/approvedCustomers'

const Dashboard: React.FC = () => {
  const [customers, setCustomers] = useState<CustomerApproval[]>([])
  const [loading, setLoading] = useState(true)

  // Mock fetching approved customers (replace with real API call if available)
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        setLoading(true)
        // Simulate fetch delay
        await new Promise((res) => setTimeout(res, 800))
        // Sample static data or import from '@/data/approvedCustomers'
        // Replace this with actual API logic if needed
        const data: CustomerApproval[] = [
          {
            id: '1',
            name: 'ลูกค้า A',
            status: 'เสร็จสมบูรณ์',
            documentTitle: 'ใบเสนอราคา',
            receivedDate: '2025-07-21',
          },
          {
            id: '2',
            name: 'ลูกค้า B',
            status: 'กำลังดำเนินการ',
            documentTitle: 'สัญญาเช่า',
            receivedDate: '2025-07-19',
          },
          {
            id: '3',
            name: 'ลูกค้า C',
            status: 'ยกเลิกแล้ว',
            documentTitle: '',
            receivedDate: '2025-07-18',
          },
        ]
        setCustomers(data)
      } catch (error) {
        console.error('โหลดข้อมูลลูกค้าไม่สำเร็จ:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchCustomers()
  }, [])

  // Sample stats for StatsPanel
  const stats = [
    { label: 'ลูกค้าทั้งหมด', value: customers.length, icon: '👥' },
    {
      label: 'งานเสร็จสมบูรณ์',
      value: customers.filter((c) => c.status === 'เสร็จสมบูรณ์').length,
      icon: '✅',
    },
    {
      label: 'งานกำลังดำเนินการ',
      value: customers.filter((c) => c.status === 'กำลังดำเนินการ').length,
      icon: '⏳',
    },
  ]

  return (
    <div className="flex flex-col gap-8">
      <StatsPanel stats={stats} />

      <section>
        <h2 className="text-xl font-semibold mb-4">ลูกค้าล่าสุด</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <CustomerCard key={i} loading />
              ))
            : customers.map((customer) => (
                <CustomerCard key={customer.id} customer={customer} />
              ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">รายชื่อผู้ใช้</h2>
        <UserTable />
      </section>
    </div>
  )
}

export default Dashboard