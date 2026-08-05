import React from 'react';
import { VALUES } from '../data/siteContent';

export const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <section className="relative w-full h-[280px] sm:h-[360px] overflow-hidden">
        <img
          src="/images/banner.jpeg"
          alt="Gen Foods"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#3D1E52]/55" />
        <div className="relative z-10 h-full max-w-[1280px] mx-auto px-4 md:px-[64px] flex flex-col justify-end pb-10">
          <span className="font-['DM_Sans'] text-[12px] font-bold uppercase tracking-[0.1em] text-white/80">
            About Us
          </span>
          <h1 className="font-['Fredoka'] text-[36px] sm:text-[48px] font-bold text-white mt-2">
            Our Story
          </h1>
        </div>
      </section>

      <section className="px-4 md:px-[64px] py-16 md:py-24 bg-[#FFF8EF]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-6">
            <span className="font-['DM_Sans'] text-[12px] font-bold uppercase tracking-[0.1em] text-[#FF7A45]">
              Where it all began
            </span>
            <div className="space-y-4 font-['DM_Sans'] text-[16px] sm:text-[17px] leading-[28px] text-[#3D1E52]/85">
              <p>
                Gen Foods started with a simple observation. Pakistan has always loved its candy, the
                tangy amrus, the chewy khopra rolls, the classic fanta flavored chews that we all grew up
                sneaking from the corner shop. But somewhere along the way, quality and consistency
                became harder to find.
              </p>
              <p className="font-['Fredoka'] text-[22px] font-bold text-[#3D1E52]">
                We wanted to change that.
              </p>
              <p>
                Gen Foods was built to bring back the flavors people love, made with modern
                manufacturing standards, better ingredients, and packaging that feels worth picking up.
              </p>
              <p>
                We are not here to reinvent candy. We are here to make it better.
              </p>
            </div>
          </div>
          <img
            src="/images/instagram/post-5.jpg"
            alt="Gen Foods fruity desi candy"
            className="w-full rounded-[32px] shadow-lg object-cover aspect-[4/3]"
          />
        </div>
      </section>

      <section className="px-4 md:px-[64px] py-16 md:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-[#FFF8EF] p-8 sm:p-10 rounded-[32px] border border-[#3D1E52]/5">
            <span className="font-['DM_Sans'] text-[12px] font-bold uppercase tracking-[0.1em] text-[#4CAF7D]">
              Vision
            </span>
            <p className="font-['DM_Sans'] text-[16px] sm:text-[17px] leading-[28px] text-[#3D1E52]/85 mt-4">
              To become Pakistan's most trusted and loved confectionery brand, recognized both
              locally and internationally for quality, innovation, and authentic flavor.
            </p>
          </div>
          <div className="bg-[#FFF8EF] p-8 sm:p-10 rounded-[32px] border border-[#3D1E52]/5">
            <span className="font-['DM_Sans'] text-[12px] font-bold uppercase tracking-[0.1em] text-[#FF7A45]">
              Mission
            </span>
            <p className="font-['DM_Sans'] text-[16px] sm:text-[17px] leading-[28px] text-[#3D1E52]/85 mt-4">
              To craft confectionery that combines beloved local flavors with international quality
              standards, delivering products that consumers can trust and enjoy every single time.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-[64px] py-16 md:py-24 bg-[#FFF8EF]">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <span className="font-['DM_Sans'] text-[12px] font-bold uppercase tracking-[0.1em] text-[#FF4F81]">
              Our Values
            </span>
            <h2 className="font-['Fredoka'] text-[32px] sm:text-[40px] font-bold text-[#3D1E52] mt-2">
              What we stand for
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="bg-white p-6 sm:p-8 rounded-[24px] border border-[#3D1E52]/5 flex gap-4"
              >
                <span className="material-symbols-outlined text-[#4CAF7D] text-[28px] shrink-0">
                  {value.icon}
                </span>
                <div>
                  <h3 className="font-['Fredoka'] text-[20px] font-bold text-[#3D1E52]">
                    {value.title}
                  </h3>
                  <p className="font-['DM_Sans'] text-[15px] leading-relaxed text-[#3D1E52]/80 mt-2">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
