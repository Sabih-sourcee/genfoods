import React, { useState } from 'react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#3D1E52]/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-300"
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#FFF8EF] w-full max-w-2xl rounded-[32px] border border-[#3D1E52]/10 shadow-2xl overflow-hidden z-10 my-8 animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-[#3D1E52] hover:text-white text-[#3D1E52] flex items-center justify-center transition-colors cursor-pointer shadow-xs"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Side */}
          <div
            className="p-8 flex items-center justify-center relative min-h-[280px]"
            style={{ backgroundColor: product.bgColor }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-h-[260px] object-contain drop-shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-[12px] font-bold text-[#3D1E52]">
              {product.weight} Pack
            </div>
          </div>

          {/* Details Side */}
          <div className="p-6 md:p-8 flex flex-col justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#FF7A45] text-[13px] font-['DM_Sans'] font-bold">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-[16px]">
                      star
                    </span>
                  ))}
                </div>
                <span>{product.rating}</span>
                <span className="text-[#3D1E52]/50">({product.reviewsCount} reviews)</span>
              </div>

              <h2 className="font-['Fredoka'] text-[28px] font-bold text-[#3D1E52] leading-tight">
                {product.name}
              </h2>
              <p className="font-['DM_Sans'] text-[14px] text-[#FF7A45] font-bold">
                {product.subtitle}
              </p>
              <p className="font-['DM_Sans'] text-[14px] text-[#3D1E52]/80 leading-relaxed">
                {product.description}
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="inline-flex items-center gap-1 bg-[#4CAF7D]/10 text-[#4CAF7D] text-[12px] font-bold px-3 py-1 rounded-full">
                  <span className="material-symbols-outlined text-[14px]">verified</span>
                  Halal Certified
                </span>
                <span className="inline-flex items-center gap-1 bg-[#4CAF7D]/10 text-[#4CAF7D] text-[12px] font-bold px-3 py-1 rounded-full">
                  <span className="material-symbols-outlined text-[14px]">eco</span>
                  No Artificial Colors
                </span>
              </div>

              {/* Ingredients List */}
              <div className="pt-2 border-t border-[#3D1E52]/10 space-y-1">
                <h4 className="font-['Fredoka'] text-[14px] font-bold text-[#3D1E52]">
                  Key Ingredients:
                </h4>
                <p className="font-['DM_Sans'] text-[12px] text-[#3D1E52]/70">
                  {product.ingredients.join(', ')}
                </p>
              </div>
            </div>

            {/* Price & Add Row */}
            <div className="pt-4 border-t border-[#3D1E52]/10 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-['DM_Sans'] text-[12px] text-[#3D1E52]/60 uppercase font-bold block">
                    Price
                  </span>
                  <span className="font-['Fredoka'] text-[24px] font-bold text-[#3D1E52]">
                    Rs. {product.price * quantity}
                  </span>
                </div>

                {/* Quantity Control */}
                <div className="flex items-center gap-3 bg-white p-1.5 rounded-full border border-[#3D1E52]/10">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 rounded-full bg-[#3D1E52]/5 hover:bg-[#3D1E52] hover:text-white flex items-center justify-center font-bold text-[14px] transition-colors cursor-pointer"
                  >
                    -
                  </button>
                  <span className="font-['DM_Sans'] text-[14px] font-bold w-6 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 rounded-full bg-[#3D1E52]/5 hover:bg-[#3D1E52] hover:text-white flex items-center justify-center font-bold text-[14px] transition-colors cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAdd}
                className="w-full bg-[#FF7A45] hover:bg-[#FF4F81] text-white font-['Fredoka'] text-[18px] font-bold py-3.5 rounded-full transition-all duration-300 shadow-md cursor-pointer flex items-center justify-center gap-2 active:scale-95"
              >
                <span className="material-symbols-outlined text-[20px]">
                  shopping_bag
                </span>
                Add {quantity} to Cart - Rs. {product.price * quantity}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
