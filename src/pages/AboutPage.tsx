import React from 'react';
import { BrandStory } from '../components/BrandStory';
import { useApp } from '../context/AppContext';

export const AboutPage: React.FC = () => {
  const { setToastMessage } = useApp();

  return (
    <div className="flex flex-col w-full">
      <section className="relative w-full h-[280px] sm:h-[360px] overflow-hidden">
        <img
          src="/images/instagram/post-1.jpg"
          alt="Gen Foods chocolate spread"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#3D1E52]/50" />
        <div className="relative z-10 h-full max-w-[1280px] mx-auto px-4 md:px-[64px] flex flex-col justify-end pb-10">
          <span className="font-['DM_Sans'] text-[12px] font-bold uppercase tracking-[0.1em] text-white/80">
            About Gen Foods
          </span>
          <h1 className="font-['Fredoka'] text-[36px] sm:text-[48px] font-bold text-white mt-2">
            Our Story
          </h1>
        </div>
      </section>

      <BrandStory showLearnMore={false} />

      <section className="px-4 md:px-[64px] py-16 md:py-24 bg-[#FFF8EF]">
        <div className="max-w-[1280px] mx-auto space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img
              src="/images/instagram/post-4.jpg"
              alt="Gen Foods lollipop"
              className="w-full aspect-square object-cover rounded-[32px] shadow-lg"
            />
            <img
              src="/images/instagram/post-3.jpg"
              alt="Gen Foods rainbow sweets"
              className="w-full aspect-square object-cover rounded-[32px] shadow-lg"
            />
          </div>

          <div>
            <span className="font-['DM_Sans'] text-[12px] font-bold uppercase tracking-widest text-[#FF7A45]">
              Our Mission & Values
            </span>
            <h2 className="font-['Fredoka'] text-[28px] sm:text-[36px] font-bold text-[#3D1E52] leading-tight mt-1">
              Pure Ingredients, Uncompromised Smiles
            </h2>
            <p className="font-['DM_Sans'] text-[15px] sm:text-[17px] leading-relaxed text-[#3D1E52]/80 mt-3 max-w-3xl">
              Gen Foods was founded in Pakistan with a singular vision: to eliminate artificial dyes and synthetic fillers from kids' favorite treats. We source fresh mangoes, guava, apples, and berries directly from Pakistani orchards, transforming pure fruit juice into soft, vitamin-enriched sweets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-[#3D1E52]/5">
              <span className="material-symbols-outlined text-[#4CAF7D] text-[28px] mb-2">
                nature
              </span>
              <h4 className="font-['Fredoka'] text-[18px] font-bold text-[#3D1E52]">
                100% Real Juice
              </h4>
              <p className="font-['DM_Sans'] text-[14px] text-[#3D1E52]/70 mt-1">
                Zero artificial colors or synthetic additives.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#3D1E52]/5">
              <span className="material-symbols-outlined text-[#4CAF7D] text-[28px] mb-2">
                verified_user
              </span>
              <h4 className="font-['Fredoka'] text-[18px] font-bold text-[#3D1E52]">
                24 Safety Checks
              </h4>
              <p className="font-['DM_Sans'] text-[14px] text-[#3D1E52]/70 mt-1">
                Rigorous quality control for every single batch.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#3D1E52]/5">
              <span className="material-symbols-outlined text-[#4CAF7D] text-[28px] mb-2">
                favorite
              </span>
              <h4 className="font-['Fredoka'] text-[18px] font-bold text-[#3D1E52]">
                Halal & Safe
              </h4>
              <p className="font-['DM_Sans'] text-[14px] text-[#3D1E52]/70 mt-1">
                Certified 100% Halal gelatin-free alternatives.
              </p>
            </div>
          </div>

          <button
            onClick={() => setToastMessage('Follow Gen Foods on Instagram for the latest drops!')}
            className="inline-flex items-center gap-2 bg-[#FF7A45] hover:bg-[#FF4F81] text-white font-['DM_Sans'] text-[14px] font-bold px-6 py-3 rounded-full transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">photo_camera</span>
            Follow the Journey
          </button>
        </div>
      </section>
    </div>
  );
};
