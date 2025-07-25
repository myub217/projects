import React, { useState } from 'react';
import Button from '@/components/common/Button';
import { Card, CardContent } from '@/components/ui/card';
import { Users2 } from 'lucide-react';

const GetFollowers: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [followers, setFollowers] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGetFollowers = async () => {
    setLoading(true);
    setError(null);
    try {
      await new Promise((res) => setTimeout(res, 1000));
      const count = Math.floor(Math.random() * 9000) + 1000; // 1,000 to 9,999
      setFollowers(count);
    } catch {
      setFollowers(null);
      setError('เกิดข้อผิดพลาดในการดึงข้อมูล');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="mx-auto w-full max-w-md shadow-lg">
      <CardContent className="space-y-4 p-6">
        <div
          className="flex items-center space-x-2 text-lg font-semibold text-gray-800 dark:text-gray-200"
          id="followers-title"
          aria-live="polite"
        >
          <Users2 className="h-6 w-6 text-primary" aria-hidden="true" />
          <span>ดึงจำนวนผู้ติดตาม</span>
        </div>

        {error && (
          <p role="alert" className="text-sm font-medium text-error">
            {error}
          </p>
        )}

        <Button
          loading={loading}
          onClick={handleGetFollowers}
          className="w-full"
          aria-labelledby="followers-title"
          aria-busy={loading}
          aria-live="polite"
        >
          {followers !== null
            ? `มีผู้ติดตาม ${followers.toLocaleString()} คน`
            : 'ดึงข้อมูล'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default GetFollowers;
