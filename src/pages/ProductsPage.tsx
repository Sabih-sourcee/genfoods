import React from 'react';
import { ProductShowcase } from '../components/ProductShowcase';
import { TrustStrip } from '../components/TrustStrip';
import { useApp } from '../context/AppContext';

export const ProductsPage: React.FC = () => {
  const { products, handleAddToCart, setSelectedProduct } = useApp();

  return (
    <div className="flex flex-col w-full">
      <section className="px-4 md:px-[64px] pt-12 md:pt-16 pb-4 bg-[#FFF8EF]">
        <div className="max-w-[1280px] mx-auto">
          <span className="font-['DM_Sans'] text-[12px] font-bold uppercase tracking-[0.1em] text-[#FF4F81]">
            Shop
          </span>
          <h1 className="font-['Fredoka'] text-[36px] sm:text-[48px] font-bold text-[#3D1E52] mt-2">
            Our Products
          </h1>
          <p className="font-['DM_Sans'] text-[16px] sm:text-[18px] text-[#3D1E52]/80 mt-3 max-w-xl">
            Fun treats kids love, quality parents trust — browse the full GenFoods range.
          </p>
        </div>
      </section>
      <TrustStrip />
      <ProductShowcase
        products={products}
        onAddToCart={(prod, e) => handleAddToCart(prod, e)}
        onSelectProduct={(prod) => setSelectedProduct(prod)}
      />
    </div>
  );
};
