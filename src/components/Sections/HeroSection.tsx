// src/components/Sections/HeroSection.tsx

import React from 'react';
import Hero from '@components/Hero';

type HeroSectionProps = {
  onRequestService?: (serviceId?: number) => void;
};

const HeroSection: React.FC<HeroSectionProps> = ({ onRequestService }) => {
  return <Hero onRequestService={onRequestService} />;
};

export default HeroSection;