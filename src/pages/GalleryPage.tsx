import React from 'react';
import { InstagramGallery } from '../components/InstagramGallery';
import { TrustStrip } from '../components/TrustStrip';
import { INSTAGRAM_POSTS } from '../data/mockData';

export const GalleryPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <section className="px-4 md:px-[64px] pt-12 md:pt-16 pb-4 bg-[#FFF8EF]">
        <div className="max-w-[1280px] mx-auto">
          <span className="font-['DM_Sans'] text-[12px] font-bold uppercase tracking-[0.1em] text-[#FF4F81]">
            Social Feed
          </span>
          <h1 className="font-['Fredoka'] text-[36px] sm:text-[48px] font-bold text-[#3D1E52] mt-2">
            Instagram Gallery
          </h1>
          <p className="font-['DM_Sans'] text-[16px] sm:text-[18px] text-[#3D1E52]/80 mt-3 max-w-xl">
            Browse Gen Foods posts — chocolate spread, chew beans, lollipops, citrus bursts, and more.
          </p>
        </div>
      </section>
      <TrustStrip />
      <InstagramGallery posts={INSTAGRAM_POSTS} showHeader={false} />
    </div>
  );
};
