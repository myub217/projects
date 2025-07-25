// src/components/SendMessage.tsx
import React, { useState } from 'react';
import Button from '@/components/common/Button';
import { Card, CardContent } from '@/components/ui/card';
import { SendHorizontal } from 'lucide-react';

const SendMessage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState('');

  const handleSend = async () => {
    if (loading || !message.trim()) return;
    setLoading(true);
    setSent(false);
    setError(null);

    try {
      // จำลองส่งข้อมูล API
      await new Promise((res) => setTimeout(res, 1000));
      setSent(true);
      setMessage('');
    } catch {
      setError('เกิดข้อผิดพลาดในการส่งข้อความ กรุณาลองใหม่อีกครั้ง');
      setSent(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="mx-auto w-full max-w-md shadow-lg">
      <CardContent className="space-y-4 p-6">
        <div className="flex items-center space-x-2 text-lg font-semibold">
          <SendHorizontal className="h-5 w-5 text-gray-700" aria-hidden="true" />
          <span>ส่งข้อความ</span>
        </div>

        <textarea
          aria-label="ข้อความที่ต้องการส่ง"
          className="w-full resize-none rounded border border-gray-300 p-2 text-base focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={loading}
        />

        {error && (
          <p
            role="alert"
            className="text-sm text-red-600 dark:text-red-400"
            aria-live="assertive"
          >
            {error}
          </p>
        )}

        <Button
          loading={loading}
          onClick={handleSend}
          className="w-full"
          aria-live="polite"
          aria-disabled={loading || !message.trim()}
          aria-label={sent ? 'ส่งข้อความแล้ว' : 'ส่งข้อความ'}
          disabled={loading || !message.trim()}
        >
          {sent ? 'ส่งแล้วเรียบร้อย' : 'ส่งข้อความ'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default SendMessage;
