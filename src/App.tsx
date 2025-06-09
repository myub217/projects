// src/App.tsx
import { useEffect, useState } from 'react'

function App() {
  const [dark, setDark] = useState(() =>
    localStorage.theme === 'dark' || (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
  )

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      root.classList.remove('dark')
      localStorage.theme = 'light'
    }
  }, [dark])

  return (
    <div className="min-h-screen bg-background-light text-foreground-light dark:bg-background-dark dark:text-foreground-dark transition-colors">
      {/* ปุ่ม toggle ด้านขวาบน */}
      <button
        onClick={() => setDark(!dark)}
        className="fixed top-4 right-4 bg-gray-300 dark:bg-gray-700 px-4 py-2 rounded-lg shadow"
      >
        {dark ? '☀️' : '🌙'}
      </button>

      {/* Header */}
      <header className="p-6 bg-white dark:bg-gray-800 shadow">
        <h1 className="text-2xl font-bold">📱 Applicationlubmobile</h1>
      </header>

      {/* Main Content */}
      <main className="p-6">
        <h2 className="text-xl font-semibold mb-4">ระบบจัดการธุรกิจมือถือ</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>📦 จัดการสินค้า บริการ และพนักงาน</li>
          <li>👤 บันทึกข้อมูลลูกค้าและประวัติการซื้อ</li>
          <li>📈 รายงานยอดขาย รายได้ และสต๊อก</li>
        </ul>
      </main>

      {/* Footer */}
      <footer className="p-4 bg-gray-100 dark:bg-gray-900 text-center text-sm">
        © 2025 Applicationlubmobile. All rights reserved.
      </footer>
    </div>
  )
}

export default App