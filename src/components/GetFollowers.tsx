// src/components/GetFollowers.tsx
import React, { useState } from 'react'
import Button from '@/components/common/Button'
import { Card, CardContent } from '@/components/ui/card'
import { Users2 } from 'lucide-react'

const GetFollowers: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [followers, setFollowers] = useState<number | null>(null)

  const handleGetFollowers = async () => {
    setLoading(true)
    try {
      // จำลอง API call
      await new Promise(res => setTimeout(res, 1000))
      setFollowers(Math.floor(Math.random() * 1000) + 100)
    } catch {
      setFollowers(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="mx-auto w-full max-w-md shadow-lg">
      <CardContent className="space-y-4 p-6">
        <div className="flex items-center space-x-2 text-lg font-semibold">
          <Users2 className="h-5 w-5 text-gray-700" />
          <span>ดึงจำนวนผู้ติดตาม</span>
        </div>
        <Button loading={loading} onClick={handleGetFollowers} className="w-full">
          {followers !== null ? `มีผู้ติดตาม ${followers.toLocaleString()} คน` : 'ดึงข้อมูล'}
        </Button>
      </CardContent>
    </Card>
  )
}

export default GetFollowers
