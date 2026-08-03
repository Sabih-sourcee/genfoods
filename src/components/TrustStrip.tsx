import React from 'react';

export const TrustStrip: React.FC = () => {
  const Badges = [
    { icon: 'eco', title: 'No Artificial Colors' },
    { icon: 'verified', title: 'Halal Certified' },
    { icon: 'thumb_up', title: 'Kid-Approved Taste' },
    { icon: 'flag', title: 'Made in Pakistan' },
  ];

  return (
    <section className="px-4 md:px-[64px] py-8 md:py-12 bg-[#FFF8EF]">
      <div className="max-w-[1280px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-[24px]">
        {Badges.map((badge) => (
          <div
            key={badge.title}
            className="flex items-center gap-3 sm:gap-4 bg-[#FFF8EF] border border-[#3D1E52]/5 px-4 sm:px-6 py-3.5 sm:py-4 rounded-full shadow-xs hover:border-[#4CAF7D]/30 hover:bg-white transition-all duration-300"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#4CAF7D]/10 flex items-center justify-center text-[#4CAF7D] shrink-0">
              <span className="material-symbols-outlined text-[20px] sm:text-[22px]">
                {badge.icon}
              </span>
            </div>
            <span className="font-['DM_Sans'] text-[13px] sm:text-[14px] font-bold leading-tight text-[#3D1E52]/90">
              {badge.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
