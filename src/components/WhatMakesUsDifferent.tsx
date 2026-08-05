import React from 'react';

export const WhatMakesUsDifferent: React.FC = () => {
  return (
    <section className="px-4 md:px-[64px] py-16 md:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto text-center">
        <span className="font-['DM_Sans'] text-[12px] font-bold uppercase tracking-[0.1em] text-[#4CAF7D]">
          What Makes Us Different
        </span>
        <h2 className="font-['Fredoka'] text-[32px] sm:text-[40px] font-bold text-[#3D1E52] mt-2 max-w-3xl mx-auto">
          Real flavor. Real quality. Real Pakistani roots.
        </h2>
        <p className="font-['DM_Sans'] text-[16px] sm:text-[18px] leading-[28px] text-[#3D1E52]/80 mt-6 max-w-2xl mx-auto">
          We are not trying to copy anyone. We are building something that feels familiar yet
          fresh, treats inspired by the flavors of home, made with the kind of quality control you
          would expect from a global brand.
        </p>
      </div>
    </section>
  );
};
