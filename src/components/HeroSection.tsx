import React from 'react';

interface HeroSectionProps {
  onOpenOurStory: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenOurStory }) => {
  return (
    <section className="relative px-4 md:px-[64px] py-16 md:py-24 overflow-hidden bg-[#FFF8EF]">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16">
        {/* Left Copy Column */}
        <div className="lg:col-span-6 flex flex-col gap-6 md:gap-8 z-10">
          <h1 className="font-['Fredoka'] text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.15] font-extrabold text-[#3D1E52] tracking-tight">
            Fun treats kids love,<br />
            <span className="text-[#FF7A45]">quality parents trust.</span>
          </h1>
          <p className="font-['DM_Sans'] text-[16px] sm:text-[18px] leading-[28px] text-[#3D1E52]/80 max-w-lg">
            Crafted with care using only the finest ingredients. Our gummies are the perfect balance of delightful flavor and wholesome quality, making snack time the highlight of every day.
          </p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
            <a
              className="bg-[#FF7A45] hover:bg-[#FF4F81] text-white font-['DM_Sans'] text-[14px] font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-full transition-all duration-300 inline-block shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
              href="#products"
            >
              Explore Products
            </a>
            <button
              type="button"
              onClick={onOpenOurStory}
              className="flex items-center gap-3 group cursor-pointer border-none bg-transparent"
            >
              <div className="w-12 h-12 rounded-full bg-[#FFF8EF] border-2 border-[#4CAF7D] flex items-center justify-center group-hover:bg-[#4CAF7D] transition-colors shadow-sm">
                <span className="material-symbols-outlined text-[#4CAF7D] group-hover:text-white transition-colors">
                  play_arrow
                </span>
              </div>
              <span className="font-['Fredoka'] text-[22px] md:text-[24px] font-bold text-[#3D1E52] group-hover:text-[#FF7A45] transition-colors">
                Our Story
              </span>
            </button>
          </div>
        </div>

        {/* Right Graphic / Image Column */}
        <div className="lg:col-span-6 relative flex justify-center items-center">
          {/* Organic Blob Backdrop */}
          <div className="absolute w-[120%] h-[120%] -z-10 pointer-events-none">
            <svg
              className="w-full h-full fill-[#FF7A45]/10 animate-pulse"
              style={{ animationDuration: '6s' }}
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M44.7,-76.4C58.1,-69.2,69.5,-57.4,77.3,-43.8C85.1,-30.2,89.2,-15.1,88.4,-0.4C87.7,14.3,82,28.6,73.5,41C65.1,53.3,53.8,63.7,40.7,70.9C27.5,78.1,13.8,82,-0.4,82.8C-14.6,83.5,-29.1,81.1,-42.6,74.1C-56.1,67,-68.5,55.3,-76.5,41.4C-84.5,27.5,-88,11.3,-87.3,-4.5C-86.7,-20.3,-81.9,-35.6,-72.6,-47.9C-63.3,-60.2,-49.4,-69.5,-35.1,-76.1C-20.7,-82.7,-10.4,-86.6,2.5,-90.9C15.4,-95.2,31.3,-83.6,44.7,-76.4Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>

          <img
            alt="GenFoods Gummy Packaging"
            className="w-full h-auto drop-shadow-[0_20px_50px_rgba(61,30,82,0.12)] rounded-3xl transform rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-500 cursor-pointer"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5Wn4PQoX8f7qx1pl-v7OVaNUfW90DANUxu6Z2mEcOjghnZ-3FPwDVtIj75uAq40_1FpixjViGJbR9h4JWZk_2LphvqjyvXT0jqGA_vjapWPFMAUIx5kMHGHv1eX8uIMbhtPdH_D_um3WD85DcbNqdErIJXmfWHzhnx6plCX1aTKw4zBVvv-Qg-nuVh39Kb5RGFFRil3g1ZHFo5LkSjdn2n2nbPoikWb5aMO4HSqfwErMN34MJgjs1"
          />
        </div>
      </div>
    </section>
  );
};
