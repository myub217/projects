// src/components/SecretRoom/SystemCheckCard.tsx

import React from 'react';
import { FaCheckCircle, FaTimesCircle, FaExclamationTriangle } from 'react-icons/fa';

interface SystemCheckCardProps {
  title: string;
  status: 'ok' | 'warning' | 'error';
  description: string;
}

const statusIcon = {
  ok: <FaCheckCircle className="text-green-500" />,
  warning: <FaExclamationTriangle className="text-yellow-500" />,
  error: <FaTimesCircle className="text-red-500" />,
};

const SystemCheckCard: React.FC<SystemCheckCardProps> = ({ title, status, description }) => {
  return (
    <div className="card bg-base-200 p-4 rounded-lg shadow-md flex items-start gap-4">
      <div className="text-3xl">{statusIcon[status]}</div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default SystemCheckCard;