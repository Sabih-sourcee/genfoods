import React from 'react';

export const WelcomeSection: React.FC = () => {
  return (
    <section className="px-4 md:px-[64px] py-16 md:py-24 bg-[#FFF8EF]">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="flex flex-col gap-6">
          <span className="font-['DM_Sans'] text-[12px] font-bold uppercase tracking-[0.1em] text-[#FF4F81]">
            Welcome
          </span>
          <h2 className="font-['Fredoka'] text-[32px] sm:text-[40px] font-bold text-[#3D1E52] leading-tight">
            Welcome to Gen Foods
          </h2>
          <div className="space-y-4 font-['DM_Sans'] text-[16px] sm:text-[17px] leading-[28px] text-[#3D1E52]/85">
            <p>
              We believe candy should do more than just taste good. It should bring back memories,
              spark a smile, and make you feel like a kid again. That is exactly what we set out to
              create.
            </p>
            <p>
              Gen Foods is a Pakistani confectionery brand built on one simple idea: everyone
              deserves treats that are made with genuine care. We combine the flavors we grew up
              loving with the quality standards that modern families expect.
            </p>
            <p>
              Every product we make goes through careful thought. From the ingredients we choose to
              the way we package each treat, we want you to taste the difference.
            </p>
          </div>
        </div>
        <div className="rounded-[32px] overflow-hidden shadow-xl border-4 border-white">
          <img
            src="/images/instagram/post-2.jpg"
            alt="Gen Foods confectionery"
            className="w-full h-[320px] sm:h-[420px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};
