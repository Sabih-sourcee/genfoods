import React from 'react';
import { Link } from 'react-router-dom';
import { BANNER_IMAGE } from '../data/mockData';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[calc(100vh-5rem)] overflow-hidden bg-[#FF7A45]">
      <img
        src={BANNER_IMAGE}
        alt="Gen Foods — Sweetify Unleash the Sweetness"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#3D1E52]/55 via-transparent to-[#3D1E52]/20" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-[64px] min-h-[calc(100vh-5rem)] flex flex-col justify-end pb-16 md:pb-24 pt-24">
        <p className="font-['DM_Sans'] text-[12px] font-bold uppercase tracking-[0.15em] text-white/90 mb-3">
          Gen Foods
        </p>
        <h1 className="font-['Fredoka'] text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.1] font-extrabold text-white tracking-tight drop-shadow-lg max-w-2xl">
          Sweetify
          <span className="block text-[28px] sm:text-[36px] lg:text-[44px] font-bold mt-1">
            Unleash the Sweetness
          </span>
        </h1>
        <p className="font-['DM_Sans'] text-[16px] sm:text-[18px] text-white/90 max-w-lg mt-4 drop-shadow">
          Fun treats kids love, quality parents trust — natural confectionery made for Pakistan.
        </p>
        <div className="flex flex-wrap items-center gap-4 mt-8">
          <Link
            to="/gallery"
            className="bg-white text-[#FF7A45] font-['DM_Sans'] text-[14px] font-bold px-8 py-4 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
          >
            View Instagram Gallery
          </Link>
          <Link
            to="/about"
            className="font-['Fredoka'] text-[20px] font-bold text-white hover:text-[#FFF8EF] transition-colors underline underline-offset-4 decoration-white/40 hover:decoration-white"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
};
