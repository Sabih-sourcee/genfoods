import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductShowcaseProps {
  products: Product[];
  onAddToCart: (product: Product, e: React.MouseEvent) => void;
  onSelectProduct: (product: Product) => void;
  viewAllLink?: string;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  products,
  onAddToCart,
  onSelectProduct,
  viewAllLink,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Gummies', 'Sour', 'Fruit Chews'];

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section className="px-4 md:px-[64px] py-16 md:py-24 bg-[#FFF8EF]" id="products">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="flex flex-col gap-2">
            <span className="font-['DM_Sans'] text-[12px] font-bold uppercase tracking-[0.1em] text-[#FF4F81]">
              Our Favorites
            </span>
            <h2 className="font-['Fredoka'] text-[32px] sm:text-[40px] font-bold text-[#3D1E52]">
              Explore the Sweetness
            </h2>
          </div>

          {/* Category Filter & View All */}
          <div className="flex flex-wrap items-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full font-['DM_Sans'] text-[14px] font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#3D1E52] text-white shadow-sm'
                    : 'bg-[#3D1E52]/5 text-[#3D1E52] hover:bg-[#FF7A45]/10'
                }`}
              >
                {cat}
              </button>
            ))}

            {viewAllLink ? (
              <Link
                to={viewAllLink}
                className="font-['Fredoka'] text-[16px] text-[#3D1E52] flex items-center gap-1.5 hover:text-[#FF7A45] transition-colors ml-2"
              >
                View All Products{' '}
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </Link>
            ) : (
              selectedCategory !== 'All' && (
                <button
                  onClick={() => setSelectedCategory('All')}
                  className="font-['Fredoka'] text-[16px] text-[#3D1E52] flex items-center gap-1.5 hover:text-[#FF7A45] transition-colors ml-2 cursor-pointer"
                >
                  View All Products{' '}
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </button>
              )
            )}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="group bg-[#FFF8EF] p-6 rounded-[24px] border border-[#3D1E52]/5 hover:border-[#FF7A45]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Product Image Container */}
                <div
                  className="relative w-full aspect-square rounded-2xl mb-6 overflow-hidden flex items-center justify-center transition-transform"
                  style={{ backgroundColor: product.bgColor }}
                >
                  <img
                    alt={product.name}
                    className="w-3/4 h-auto object-contain transform group-hover:scale-110 transition-transform duration-500 drop-shadow-md"
                    src={product.image}
                  />
                  <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-xs px-2.5 py-1 rounded-full text-[11px] font-bold text-[#3D1E52]">
                    {product.weight}
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-['Fredoka'] text-[20px] font-bold text-[#3D1E52] group-hover:text-[#FF7A45] transition-colors">
                    {product.name}
                  </h3>
                  <p className="font-['DM_Sans'] text-[15px] text-[#3D1E52]/80 line-clamp-2">
                    {product.subtitle}
                  </p>
                </div>
              </div>

              {/* Price & Add Button */}
              <div className="mt-6 pt-4 border-t border-[#3D1E52]/5 flex justify-between items-center">
                <span className="font-['Fredoka'] text-[20px] font-bold text-[#3D1E52]">
                  Rs. {product.price}
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onAddToCart(product, e);
                  }}
                  className="w-10 h-10 rounded-full bg-[#FF7A45] text-white flex items-center justify-center hover:bg-[#FF4F81] hover:scale-110 transition-all cursor-pointer active:scale-90 shadow-xs"
                  title={`Add ${product.name} to cart`}
                  aria-label={`Add ${product.name} to cart`}
                >
                  <span className="material-symbols-outlined text-[20px]">add</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
