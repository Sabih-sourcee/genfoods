import React from 'react';

interface BrandStoryProps {
  onOpenOurStory: () => void;
}

export const BrandStory: React.FC<BrandStoryProps> = ({ onOpenOurStory }) => {
  return (
    <section className="px-4 md:px-[64px] py-16 md:py-24 bg-[#FFF8EF]" id="about">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Copy */}
        <div className="flex flex-col gap-6 md:gap-8">
          <span className="font-['DM_Sans'] text-[12px] font-bold uppercase tracking-[0.1em] text-[#4CAF7D]">
            Our Heritage
          </span>
          <h2 className="font-['Fredoka'] text-[32px] sm:text-[40px] font-bold text-[#3D1E52] leading-tight">
            The Heart of Pakistani Sweetness
          </h2>
          <p className="font-['DM_Sans'] text-[16px] sm:text-[18px] leading-[28px] text-[#3D1E52]/80">
            GenFoods was born from a simple mission: to create treats that celebrate the joy of childhood without compromising on quality. Based in the heart of Pakistan, we combine traditional values of care with modern production standards.
          </p>

          <div className="space-y-6 pt-2">
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-[#4CAF7D] text-[28px] shrink-0">
                park
              </span>
              <div>
                <h4 className="font-['Fredoka'] text-[18px] font-bold text-[#3D1E52]">
                  Locally Sourced
                </h4>
                <p className="font-['DM_Sans'] text-[15px] sm:text-[16px] text-[#3D1E52]/80">
                  We partner with local farmers to source the purest fruit pulps and juices.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="material-symbols-outlined text-[#4CAF7D] text-[28px] shrink-0">
                biotech
              </span>
              <div>
                <h4 className="font-['Fredoka'] text-[18px] font-bold text-[#3D1E52]">
                  Quality Controlled
                </h4>
                <p className="font-['DM_Sans'] text-[15px] sm:text-[16px] text-[#3D1E52]/80">
                  Every batch undergoes 24 rigorous safety checks in our state-of-the-art facility.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={onOpenOurStory}
              className="inline-flex items-center gap-2 bg-[#4CAF7D] hover:bg-[#3D1E52] text-white font-['DM_Sans'] text-[14px] font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-sm cursor-pointer active:scale-95"
            >
              Learn More About Our Journey
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Right Photo Frame with Quote Overlay */}
        <div className="relative">
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#FF4F81]/10 rounded-full -z-10 blur-3xl" />
          <div className="rounded-[40px] overflow-hidden rotate-3 shadow-xl border-4 border-white transform hover:rotate-0 transition-transform duration-500">
            <img
              className="w-full h-[400px] sm:h-[500px] object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiWxydFqWBZcILSvbUl75LK1z89rgr5pSO67C6s5f1GIOzlbt-9njRDwDYCFyFa75yhcgUJykNxG0nrFK8IjlXUktFRD5w6nmT96OM3f3YP-Jb0y-AhKxZGKKeqJGjWUAEJId5c2BP9acUploe57gZ1qXszhcS6qK8bhyRyP6ep1tAGnCLL7qMLJIyAHBAnzMNOrW73vGQVJsa5A24fMARNr73pOkeRXwulPIUSWFgoPcEkYIIzEfA"
              alt="Kids enjoying GenFoods gummies"
            />
          </div>

          <div className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:-right-8 bg-[#FFF8EF] p-6 sm:p-8 rounded-2xl shadow-xl max-w-xs transform -rotate-3 border-4 border-white">
            <p className="font-['Fredoka'] text-[20px] font-bold text-[#FF7A45] mb-2">
              100% Pure Joy
            </p>
            <p className="font-['DM_Sans'] text-[14px] sm:text-[15px] text-[#3D1E52]/80 italic">
              "We focus on the small details so you can focus on the big smiles."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
