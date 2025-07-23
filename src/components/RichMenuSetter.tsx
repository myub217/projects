// src/components/RichMenuSetter.tsx
import React, { useState } from 'react'
import Button from '@/components/common/Button'
import { Card, CardContent } from '@/components/ui/card'
import { Sparkles } from 'lucide-react'

const RichMenuSetter: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<string | null>(null)

  const handleSetRichMenu = async () => {
    setLoading(true)
    setStatus(null)
    try {
      // จำลอง API ตั้งค่า Rich Menu
      await new Promise(res => setTimeout(res, 1000))
      setStatus('กำหนด Rich Menu สำเร็จ')
    } catch {
      setStatus('เกิดข้อผิดพลาดในการตั้งค่า')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="mx-auto w-full max-w-md shadow-lg">
      <CardContent className="space-y-4 p-6">
        <div className="flex items-center space-x-2 text-lg font-semibold">
          <Sparkles className="h-5 w-5 text-gray-700" />
          <span>ตั้งค่า Rich Menu</span>
        </div>
        <Button loading={loading} onClick={handleSetRichMenu} className="w-full">
          ตั้งค่า Rich Menu
        </Button>
        {status && <p className="text-sm text-gray-600">{status}</p>}
      </CardContent>
    </Card>
  )
}

export default RichMenuSetter
