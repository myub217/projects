// src/components/AdminBoard/Dashboard.tsx

import React from 'react'

const Dashboard: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-primary">Admin Dashboard</h2>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="bg-base-200 p-4 rounded-box shadow">
          <h3 className="text-lg font-semibold mb-2">สรุปภาพรวม</h3>
          <p>ยังไม่มีข้อมูล</p>
        </div>

        <div className="bg-base-200 p-4 rounded-box shadow">
          <h3 className="text-lg font-semibold mb-2">กิจกรรมล่าสุด</h3>
          <ul className="list-disc list-inside text-sm">
            <li>รอเชื่อมระบบในอนาคต</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Dashboard