import React from 'react';
import { Link } from 'react-router-dom';
import { HeroSection } from '../components/HeroSection';
import { TrustStrip } from '../components/TrustStrip';
import { ProductShowcase } from '../components/ProductShowcase';
import { BrandStory } from '../components/BrandStory';
import { Testimonials } from '../components/Testimonials';
import { CtaBanner } from '../components/CtaBanner';
import { REVIEWS } from '../data/mockData';
import { useApp } from '../context/AppContext';

export const HomePage: React.FC = () => {
  const { products, handleAddToCart, setSelectedProduct } = useApp();

  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <TrustStrip />
      <ProductShowcase
        products={products.slice(0, 4)}
        onAddToCart={(prod, e) => handleAddToCart(prod, e)}
        onSelectProduct={(prod) => setSelectedProduct(prod)}
        viewAllLink="/products"
      />
      <BrandStory />
      <Testimonials reviews={REVIEWS} />
      <CtaBanner />
      <section className="px-4 md:px-[64px] pb-16 md:pb-24 bg-[#FFF8EF]">
        <div className="max-w-[1280px] mx-auto text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 font-['Fredoka'] text-[18px] font-bold text-[#FF7A45] hover:text-[#FF4F81] transition-colors"
          >
            Browse all products
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </Link>
        </div>
      </section>
    </div>
  );
};
