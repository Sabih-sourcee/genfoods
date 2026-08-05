import React from 'react';
import { BANNER_IMAGE } from '../data/mockData';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[calc(100vh-5rem)] overflow-hidden bg-[#FF7A45]">
      <img
        src={BANNER_IMAGE}
        alt="Gen Foods — Sweetness, made in Pakistan"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#3D1E52]/60 via-[#3D1E52]/20 to-transparent" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-[64px] min-h-[calc(100vh-5rem)] flex flex-col justify-end pb-16 md:pb-24 pt-24">
        <h1 className="font-['Fredoka'] text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.1] font-extrabold text-white tracking-tight drop-shadow-lg max-w-3xl">
          Sweetness, made in Pakistan.
        </h1>
        <p className="font-['DM_Sans'] text-[16px] sm:text-[18px] leading-[28px] text-white/95 max-w-2xl mt-5 drop-shadow">
          At Gen Foods, we make the treats that turn ordinary moments into little celebrations.
          From tangy desi flavored candies to smooth chocolate spreads, every bite is crafted with
          care, quality, and a touch of nostalgia.
        </p>
        <div className="mt-8">
          <a
            href="#products"
            className="inline-block bg-white text-[#FF7A45] font-['DM_Sans'] text-[14px] font-bold px-8 py-4 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
          >
            Explore Our Products
          </a>
        </div>
      </div>
    </section>
  );
};
