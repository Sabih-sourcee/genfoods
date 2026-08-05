import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { WelcomeSection } from '../components/WelcomeSection';
import { WhatMakesUsDifferent } from '../components/WhatMakesUsDifferent';
import { ProductRangePreview } from '../components/ProductRangePreview';
import { CtaBanner } from '../components/CtaBanner';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <WelcomeSection />
      <WhatMakesUsDifferent />
      <ProductRangePreview />
      <CtaBanner />
    </div>
  );
};
