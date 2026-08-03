import React from 'react';
import { Link } from 'react-router-dom';

export const CtaBanner: React.FC = () => {
  return (
    <section className="px-4 md:px-[64px] py-16 md:py-24 relative overflow-hidden bg-[#FFF8EF]">
      <div className="max-w-[1280px] mx-auto bg-[#FF4F81] rounded-[32px] sm:rounded-[48px] p-8 sm:p-12 md:p-24 relative overflow-hidden flex flex-col items-center text-center gap-6 sm:gap-8 shadow-xl">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

        <h2 className="font-['Fredoka'] text-[32px] sm:text-[42px] md:text-[48px] leading-tight text-white max-w-2xl z-10 font-extrabold">
          Ready for some fun? Find us at your local store.
        </h2>

        <p className="font-['DM_Sans'] text-[16px] sm:text-[18px] text-white/90 max-w-lg z-10">
          From corner shops to hypermarkets, GenFoods is everywhere you need sweetness to be.
        </p>

        <Link
          to="/where-to-buy"
          className="bg-white text-[#FF4F81] font-['Fredoka'] text-[18px] font-bold px-10 sm:px-12 py-4 sm:py-5 rounded-full hover:bg-[#FFF8EF] hover:scale-105 active:scale-95 transition-all duration-300 z-10 shadow-lg cursor-pointer inline-block"
        >
          Where to Buy
        </Link>
      </div>
    </section>
  );
};
