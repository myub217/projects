import React, { useEffect, useState } from 'react';
import SecretRoomDashboard from '@components/SecretRoom/Dashboard';

const SecretRoomPage: React.FC = () => {
  const [username, setUsername] = useState('ไม่ระบุชื่อผู้ใช้งาน');

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser')?.trim();
    if (storedUser) setUsername(storedUser);
  }, []);

  return (
    <main
      role="main"
      aria-label="หน้าหลักห้องลับ"
      className="min-h-screen bg-base-100 px-4 py-10 sm:px-6 lg:px-8"
      tabIndex={-1}
    >
      <SecretRoomDashboard username={username} />
    </main>
  );
};

export default SecretRoomPage;
