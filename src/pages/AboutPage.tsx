import React from 'react';
import { BrandStory } from '../components/BrandStory';
import { useApp } from '../context/AppContext';

export const AboutPage: React.FC = () => {
  const { setToastMessage } = useApp();

  return (
    <div className="flex flex-col w-full">
      <section className="px-4 md:px-[64px] pt-12 md:pt-16 pb-4 bg-[#FFF8EF]">
        <div className="max-w-[1280px] mx-auto">
          <span className="font-['DM_Sans'] text-[12px] font-bold uppercase tracking-[0.1em] text-[#4CAF7D]">
            About GenFoods
          </span>
          <h1 className="font-['Fredoka'] text-[36px] sm:text-[48px] font-bold text-[#3D1E52] mt-2">
            Our Story
          </h1>
          <p className="font-['DM_Sans'] text-[16px] sm:text-[18px] text-[#3D1E52]/80 mt-3 max-w-2xl">
            Pure ingredients, uncompromised smiles — crafted with care in the heart of Pakistan.
          </p>
        </div>
      </section>

      <BrandStory showLearnMore={false} />

      {/* Full story content (from Our Story modal) */}
      <section className="px-4 md:px-[64px] py-16 md:py-24 bg-[#FFF8EF]">
        <div className="max-w-[1280px] mx-auto space-y-10">
          <div className="relative w-full aspect-video rounded-[32px] overflow-hidden bg-[#3D1E52] shadow-inner group">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiWxydFqWBZcILSvbUl75LK1z89rgr5pSO67C6s5f1GIOzlbt-9njRDwDYCFyFa75yhcgUJykNxG0nrFK8IjlXUktFRD5w6nmT96OM3f3YP-Jb0y-AhKxZGKKeqJGjWUAEJId5c2BP9acUploe57gZ1qXszhcS6qK8bhyRyP6ep1tAGnCLL7qMLJIyAHBAnzMNOrW73vGQVJsa5A24fMARNr73pOkeRXwulPIUSWFgoPcEkYIIzEfA"
              alt="GenFoods Facility and Fruit Orchard"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3D1E52]/80 via-transparent to-transparent flex items-center justify-center">
              <button
                onClick={() => setToastMessage('Playing GenFoods Quality Story video...')}
                className="w-16 h-16 rounded-full bg-[#FF7A45] hover:bg-[#FF4F81] hover:scale-110 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-90"
              >
                <span className="material-symbols-outlined text-[32px]">play_arrow</span>
              </button>
            </div>
            <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 text-white">
              <span className="bg-[#4CAF7D] text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Documentary
              </span>
              <h3 className="font-['Fredoka'] text-[18px] sm:text-[24px] font-bold mt-1">
                Crafting Pakistani Sweetness with Pure Care
              </h3>
            </div>
          </div>

          <div>
            <span className="font-['DM_Sans'] text-[12px] font-bold uppercase tracking-widest text-[#FF7A45]">
              Our Mission & Values
            </span>
            <h2 className="font-['Fredoka'] text-[28px] sm:text-[36px] font-bold text-[#3D1E52] leading-tight mt-1">
              Pure Ingredients, Uncompromised Smiles
            </h2>
            <p className="font-['DM_Sans'] text-[15px] sm:text-[17px] leading-relaxed text-[#3D1E52]/80 mt-3 max-w-3xl">
              GenFoods was founded in Pakistan with a singular vision: to eliminate artificial dyes and synthetic fillers from kids' favorite treats. We source fresh mangoes, guava, apples, and berries directly from Pakistani orchards, transforming pure fruit juice into soft, vitamin-enriched gummies.
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
        </div>
      </section>
    </div>
  );
};
