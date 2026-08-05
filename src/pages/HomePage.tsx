import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { TrustStrip } from '../components/TrustStrip';
import { InstagramGallery } from '../components/InstagramGallery';
import { BrandStory } from '../components/BrandStory';
import { Testimonials } from '../components/Testimonials';
import { CtaBanner } from '../components/CtaBanner';
import { INSTAGRAM_POSTS, REVIEWS } from '../data/mockData';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <TrustStrip />
      <InstagramGallery
        posts={INSTAGRAM_POSTS}
        limit={3}
        viewAllLink="/gallery"
      />
      <BrandStory />
      <Testimonials reviews={REVIEWS} />
      <CtaBanner />
    </div>
  );
};
