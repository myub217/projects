// src/components/SendMessage.tsx
import React, { useState } from 'react'
import Button from '@/components/common/Button'
import { Card, CardContent } from '@/components/ui/card'
import { SendHorizontal } from 'lucide-react'

const SendMessage: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSend = async () => {
    if (loading) return
    setLoading(true)
    setSent(false)
    try {
      // จำลองส่งข้อมูล API
      await new Promise(res => setTimeout(res, 1000))
      setSent(true)
    } catch {
      setSent(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="mx-auto w-full max-w-md shadow-lg">
      <CardContent className="space-y-4 p-6">
        <div className="flex items-center space-x-2 text-lg font-semibold">
          <SendHorizontal className="h-5 w-5 text-gray-700" aria-hidden="true" />
          <span>ส่งข้อความ</span>
        </div>
        <Button
          loading={loading}
          onClick={handleSend}
          className="w-full"
          aria-live="polite"
          aria-disabled={loading}
        >
          {sent ? 'ส่งแล้วเรียบร้อย' : 'ส่งข้อความ'}
        </Button>
      </CardContent>
    </Card>
  )
}

export default SendMessage
