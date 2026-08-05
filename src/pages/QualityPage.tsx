import React from 'react';
import { QUALITY_POINTS } from '../data/siteContent';

export const QualityPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <section className="px-4 md:px-[64px] pt-12 md:pt-16 pb-8 bg-[#FFF8EF]">
        <div className="max-w-[1280px] mx-auto">
          <span className="font-['DM_Sans'] text-[12px] font-bold uppercase tracking-[0.1em] text-[#4CAF7D]">
            Quality & Safety
          </span>
          <h1 className="font-['Fredoka'] text-[36px] sm:text-[48px] font-bold text-[#3D1E52] mt-2 max-w-3xl">
            Quality you can taste, safety you can trust
          </h1>
          <p className="font-['DM_Sans'] text-[16px] sm:text-[18px] leading-[28px] text-[#3D1E52]/80 mt-4 max-w-2xl">
            At Gen Foods, quality is not a checkbox, it is the whole reason we exist. Every product we
            make goes through a thoughtful process before it ever reaches a shelf.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-[64px] pb-16 md:pb-24 bg-[#FFF8EF]">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="font-['Fredoka'] text-[28px] sm:text-[32px] font-bold text-[#3D1E52] mb-8">
            Our Approach to Quality
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {QUALITY_POINTS.map((point) => (
              <div
                key={point.title}
                className="bg-white p-6 sm:p-8 rounded-[24px] border border-[#3D1E52]/5 flex gap-4"
              >
                <span className="material-symbols-outlined text-[#FF7A45] text-[28px] shrink-0">
                  {point.icon}
                </span>
                <div>
                  <h3 className="font-['Fredoka'] text-[18px] font-bold text-[#3D1E52]">
                    {point.title}
                  </h3>
                  <p className="font-['DM_Sans'] text-[15px] leading-relaxed text-[#3D1E52]/80 mt-2">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#3D1E52] text-white p-8 sm:p-12 rounded-[32px]">
            <h2 className="font-['Fredoka'] text-[24px] sm:text-[28px] font-bold">
              A Note on Our Journey
            </h2>
            <p className="font-['DM_Sans'] text-[16px] sm:text-[17px] leading-[28px] text-white/90 mt-4 max-w-3xl">
              We are a young brand with big ambitions, and we take that responsibility seriously. As
              we grow, our commitment to quality only gets stronger, not weaker.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
