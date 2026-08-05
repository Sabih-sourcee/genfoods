import React from 'react';
import { BANNER_IMAGE } from '../data/mockData';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[calc(100vh-5rem)] overflow-hidden bg-[#FF7A45]">
      <img
        src={BANNER_IMAGE}
        alt="Gen Foods banner"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-[64px] min-h-[calc(100vh-5rem)] flex flex-col justify-end pb-16 md:pb-24 pt-24">
        <a
          href="#products"
          className="inline-block w-fit bg-white text-[#FF7A45] font-['DM_Sans'] text-[14px] font-bold px-8 py-4 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
        >
          Explore Our Products
        </a>
      </div>
    </section>
  );
};
