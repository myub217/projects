// ⬅️ สร้าง ServiceListRenderer.tsx
// รับ prop: services[], layout: 'grid' | 'list'

import React from 'react';
import ServiceCard from './ServiceCard';

interface Props {
  services: Service[];
  layout?: 'grid' | 'list';
}

const ServiceListRenderer: React.FC<Props> = ({ services, layout = 'grid' }) => {
  const gridClass =
    layout === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'flex flex-col';
  return (
    <div className={`grid gap-4 ${gridClass}`}>
      {services.map((svc) => (
        <ServiceCard key={svc.id} {...svc} />
      ))}
    </div>
  );
};

export default ServiceListRenderer;
