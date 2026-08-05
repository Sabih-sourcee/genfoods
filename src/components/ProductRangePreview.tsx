import React from 'react';
import { PRODUCT_RANGE } from '../data/siteContent';

export const ProductRangePreview: React.FC = () => {
  return (
    <section className="px-4 md:px-[64px] py-16 md:py-24 bg-[#FFF8EF]" id="products">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-12">
          <span className="font-['DM_Sans'] text-[12px] font-bold uppercase tracking-[0.1em] text-[#FF4F81]">
            Our Product Range
          </span>
          <h2 className="font-['Fredoka'] text-[32px] sm:text-[40px] font-bold text-[#3D1E52] mt-2">
            A little something for every kind of sweet tooth
          </h2>
          <p className="font-['DM_Sans'] text-[16px] sm:text-[17px] text-[#3D1E52]/80 mt-4 max-w-2xl mx-auto">
            From fruity chews to rich chocolate, our range covers a wide variety of confectionery
            categories, each one made with its own personality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCT_RANGE.map((product) => (
            <div
              key={product.name}
              className="group bg-white rounded-[24px] overflow-hidden border border-[#3D1E52]/5 hover:border-[#FF7A45]/30 hover:shadow-lg transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-['Fredoka'] text-[20px] font-bold text-[#3D1E52] group-hover:text-[#FF7A45] transition-colors">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#products"
            className="inline-flex items-center gap-2 font-['Fredoka'] text-[18px] font-bold text-[#FF7A45] hover:text-[#FF4F81] transition-colors"
          >
            See Full Product Range
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
};
