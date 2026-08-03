import React from 'react';
import { Review } from '../types';

interface TestimonialsProps {
  reviews: Review[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ reviews }) => {
  return (
    <section className="px-4 md:px-[64px] py-16 md:py-24 bg-[#FFF8EF]">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="font-['Fredoka'] text-[32px] sm:text-[40px] font-bold text-[#3D1E52] text-center mb-12 sm:mb-16">
          Loved by Families
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <div
              key={rev.id}
              className={`bg-[#FFF8EF] border border-[#3D1E52]/5 p-8 sm:p-10 rounded-[32px] flex flex-col gap-6 shadow-xs hover:shadow-md transition-all duration-300 ${
                index === 1 ? 'transform md:translate-y-8' : ''
              }`}
            >
              {/* Star Rating */}
              <div className="flex text-[#FF7A45] gap-0.5">
                {[...Array(rev.rating)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-[20px]">
                    star
                  </span>
                ))}
              </div>

              {/* Review Comment */}
              <p className="font-['DM_Sans'] text-[16px] sm:text-[18px] leading-[28px] text-[#3D1E52] italic flex-1">
                "{rev.comment}"
              </p>

              {/* Author Footer */}
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-[#3D1E52]/5">
                <div className="w-12 h-12 rounded-full bg-[#3D1E52]/10 overflow-hidden shrink-0 border-2 border-white shadow-xs">
                  <img
                    className="w-full h-full object-cover"
                    src={rev.image}
                    alt={rev.name}
                  />
                </div>
                <div>
                  <p className="font-['Fredoka'] text-[16px] font-bold text-[#3D1E52]">
                    {rev.name}
                  </p>
                  <p className="font-['DM_Sans'] text-[12px] font-medium text-[#3D1E52]/70">
                    {rev.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
