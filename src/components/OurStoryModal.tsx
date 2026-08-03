import React from 'react';

interface OurStoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const OurStoryModal: React.FC<OurStoryModalProps> = ({
  isOpen,
  onClose,
  onShowToast,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#3D1E52]/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-300"
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#FFF8EF] w-full max-w-3xl rounded-[32px] border border-[#3D1E52]/10 shadow-2xl overflow-hidden z-10 my-8 p-6 sm:p-10 animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white hover:bg-[#3D1E52] hover:text-white text-[#3D1E52] flex items-center justify-center transition-colors cursor-pointer shadow-xs z-10"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Video Player Mockup Header */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[#3D1E52] mb-8 shadow-inner group">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiWxydFqWBZcILSvbUl75LK1z89rgr5pSO67C6s5f1GIOzlbt-9njRDwDYCFyFa75yhcgUJykNxG0nrFK8IjlXUktFRD5w6nmT96OM3f3YP-Jb0y-AhKxZGKKeqJGjWUAEJId5c2BP9acUploe57gZ1qXszhcS6qK8bhyRyP6ep1tAGnCLL7qMLJIyAHBAnzMNOrW73vGQVJsa5A24fMARNr73pOkeRXwulPIUSWFgoPcEkYIIzEfA"
            alt="GenFoods Facility and Fruit Orchard"
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3D1E52]/80 via-transparent to-transparent flex items-center justify-center">
            <button
              onClick={() => onShowToast('Playing GenFoods Quality Story video...')}
              className="w-16 h-16 rounded-full bg-[#FF7A45] hover:bg-[#FF4F81] hover:scale-110 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-90"
            >
              <span className="material-symbols-outlined text-[32px]">play_arrow</span>
            </button>
          </div>
          <div className="absolute bottom-4 left-4 text-white">
            <span className="bg-[#4CAF7D] text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Documentary
            </span>
            <h3 className="font-['Fredoka'] text-[18px] font-bold mt-1">
              Crafting Pakistani Sweetness with Pure Care
            </h3>
          </div>
        </div>

        {/* Story Text & Milestones */}
        <div className="space-y-6">
          <div>
            <span className="font-['DM_Sans'] text-[12px] font-bold uppercase tracking-widest text-[#FF7A45]">
              Our Mission & Values
            </span>
            <h2 className="font-['Fredoka'] text-[28px] font-bold text-[#3D1E52] leading-tight mt-1">
              Pure Ingredients, Uncompromised Smiles
            </h2>
            <p className="font-['DM_Sans'] text-[15px] leading-relaxed text-[#3D1E52]/80 mt-2">
              GenFoods was founded in Pakistan with a singular vision: to eliminate artificial dyes and synthetic fillers from kids' favorite treats. We source fresh mangoes, guava, apples, and berries directly from Pakistani orchards, transforming pure fruit juice into soft, vitamin-enriched gummies.
            </p>
          </div>

          {/* 3 Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="bg-white p-4 rounded-2xl border border-[#3D1E52]/5">
              <span className="material-symbols-outlined text-[#4CAF7D] text-[28px] mb-2">
                nature
              </span>
              <h4 className="font-['Fredoka'] text-[16px] font-bold text-[#3D1E52]">
                100% Real Juice
              </h4>
              <p className="font-['DM_Sans'] text-[12px] text-[#3D1E52]/70 mt-1">
                Zero artificial colors or synthetic additives.
              </p>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-[#3D1E52]/5">
              <span className="material-symbols-outlined text-[#4CAF7D] text-[28px] mb-2">
                verified_user
              </span>
              <h4 className="font-['Fredoka'] text-[16px] font-bold text-[#3D1E52]">
                24 Safety Checks
              </h4>
              <p className="font-['DM_Sans'] text-[12px] text-[#3D1E52]/70 mt-1">
                Rigorous quality control for every single batch.
              </p>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-[#3D1E52]/5">
              <span className="material-symbols-outlined text-[#4CAF7D] text-[28px] mb-2">
                favorite
              </span>
              <h4 className="font-['Fredoka'] text-[16px] font-bold text-[#3D1E52]">
                Halal & Safe
              </h4>
              <p className="font-['DM_Sans'] text-[12px] text-[#3D1E52]/70 mt-1">
                Certified 100% Halal gelatin-free alternatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
