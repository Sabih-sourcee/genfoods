import React from 'react';
import { Link } from 'react-router-dom';
import { CAREERS_BENEFITS, CONTACT } from '../data/siteContent';

export const CareersPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <section className="relative w-full h-[240px] sm:h-[300px] overflow-hidden">
        <img
          src="/images/instagram/post-3.jpg"
          alt="Gen Foods team"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#3D1E52]/55" />
        <div className="relative z-10 h-full max-w-[1280px] mx-auto px-4 md:px-[64px] flex flex-col justify-end pb-10">
          <h1 className="font-['Fredoka'] text-[36px] sm:text-[48px] font-bold text-white">
            Build something sweet with us
          </h1>
        </div>
      </section>

      <section className="px-4 md:px-[64px] py-16 md:py-24 bg-[#FFF8EF]">
        <div className="max-w-[1280px] mx-auto">
          <p className="font-['DM_Sans'] text-[16px] sm:text-[18px] leading-[28px] text-[#3D1E52]/85 max-w-3xl">
            Gen Foods is growing, and we are looking for people who are excited to be part of a
            Pakistani confectionery brand with big plans. If you love food, creativity, and building
            things from the ground up, we would love to meet you.
          </p>

          <h2 className="font-['Fredoka'] text-[28px] sm:text-[32px] font-bold text-[#3D1E52] mt-12 mb-8">
            Why Work With Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CAREERS_BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white p-6 sm:p-8 rounded-[24px] border border-[#3D1E52]/5"
              >
                <h3 className="font-['Fredoka'] text-[20px] font-bold text-[#3D1E52]">
                  {benefit.title}
                </h3>
                <p className="font-['DM_Sans'] text-[15px] leading-relaxed text-[#3D1E52]/80 mt-3">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <a
              href={`mailto:${CONTACT.careers}?subject=Resume%20-%20Gen%20Foods`}
              className="inline-flex items-center gap-2 bg-[#FF7A45] hover:bg-[#FF4F81] text-white font-['DM_Sans'] text-[14px] font-bold px-8 py-4 rounded-full transition-all shadow-md active:scale-95"
            >
              Send Us Your Resume
              <span className="material-symbols-outlined text-[18px]">mail</span>
            </a>
            <p className="font-['DM_Sans'] text-[14px] text-[#3D1E52]/60 mt-3">
              Or email us directly at{' '}
              <Link to="/contact" className="text-[#FF7A45] font-bold hover:underline">
                {CONTACT.careers}
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
