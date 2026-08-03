import React, { useState } from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onShowToast: (msg: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onShowToast,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const freeShippingThreshold = 1000;
  const deliveryFee = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 150;
  const discountAmount = Math.round((subtotal * discount) / 100);
  const total = subtotal - discountAmount + deliveryFee;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'GENFOODS10' || promoCode.trim().toUpperCase() === 'SWEET10') {
      setDiscount(10);
      onShowToast('Promo code applied! 10% discount added.');
    } else {
      onShowToast('Invalid promo code. Try GENFOODS10');
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderSuccess(true);
      onClearCart();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#3D1E52]/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FFF8EF] shadow-2xl flex flex-col justify-between z-10 border-l border-[#3D1E52]/10">
          {/* Cart Header */}
          <div className="p-6 border-b border-[#3D1E52]/10 flex items-center justify-between bg-white/50">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#FF7A45] text-[24px]">
                shopping_bag
              </span>
              <h2 className="font-['Fredoka'] text-[22px] font-bold text-[#3D1E52]">
                Your Sweet Cart
              </h2>
              <span className="bg-[#FF7A45]/10 text-[#FF7A45] font-['DM_Sans'] text-[12px] font-bold px-2.5 py-0.5 rounded-full">
                {items.reduce((acc, item) => acc + item.quantity, 0)} items
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#3D1E52]/10 text-[#3D1E52] transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {orderSuccess ? (
              <div className="text-center py-12 flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#4CAF7D]/20 text-[#4CAF7D] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[36px]">
                    check_circle
                  </span>
                </div>
                <h3 className="font-['Fredoka'] text-[24px] font-bold text-[#3D1E52]">
                  Order Placed!
                </h3>
                <p className="font-['DM_Sans'] text-[15px] text-[#3D1E52]/80 max-w-xs">
                  Thank you for bringing GenFoods home! Your gummies will arrive freshly packed.
                </p>
                <button
                  onClick={() => {
                    setOrderSuccess(false);
                    onClose();
                  }}
                  className="bg-[#FF7A45] text-white font-bold px-6 py-3 rounded-full text-[14px]"
                >
                  Continue Shopping
                </button>
              </div>
            ) : items.length === 0 ? (
              <div className="text-center py-16 flex flex-col items-center justify-center gap-4">
                <div className="w-20 h-20 rounded-full bg-[#FF7A45]/10 text-[#FF7A45] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[40px]">
                    sentiment_dissatisfied
                  </span>
                </div>
                <h3 className="font-['Fredoka'] text-[20px] font-bold text-[#3D1E52]">
                  Your cart is empty
                </h3>
                <p className="font-['DM_Sans'] text-[14px] text-[#3D1E52]/70 max-w-xs">
                  Explore our Fruity Bears, Sour Worms, and Creamy Chews to add sweet joy to your day!
                </p>
                <button
                  onClick={onClose}
                  className="bg-[#FF7A45] text-white font-['DM_Sans'] text-[14px] font-bold px-6 py-3 rounded-full"
                >
                  Explore Treats
                </button>
              </div>
            ) : (
              <>
                {/* Free Shipping Progress */}
                <div className="bg-white p-4 rounded-2xl border border-[#3D1E52]/5 space-y-2">
                  <div className="flex justify-between text-[13px] font-['DM_Sans'] font-bold text-[#3D1E52]">
                    <span>
                      {subtotal >= freeShippingThreshold
                        ? '🎉 You unlocked FREE Delivery in Pakistan!'
                        : `Add Rs. ${freeShippingThreshold - subtotal} for FREE Delivery`}
                    </span>
                  </div>
                  <div className="w-full bg-[#3D1E52]/10 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-[#4CAF7D] h-full transition-all duration-500 rounded-full"
                      style={{
                        width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%`,
                      }}
                    />
                  </div>
                </div>

                {/* Items List */}
                <div className="space-y-4">
                  {items.map(({ product, quantity }) => (
                    <div
                      key={product.id}
                      className="flex items-center gap-4 bg-white p-3.5 rounded-2xl border border-[#3D1E52]/5 shadow-xs"
                    >
                      <div
                        className="w-16 h-16 rounded-xl flex items-center justify-center shrink-0 p-1"
                        style={{ backgroundColor: product.bgColor }}
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="font-['Fredoka'] text-[16px] font-bold text-[#3D1E52] truncate">
                          {product.name}
                        </h4>
                        <p className="font-['DM_Sans'] text-[12px] text-[#3D1E52]/70">
                          Rs. {product.price}
                        </p>

                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => onUpdateQuantity(product.id, -1)}
                            className="w-6 h-6 rounded-full bg-[#3D1E52]/10 hover:bg-[#3D1E52] hover:text-white flex items-center justify-center text-[12px] font-bold transition-colors cursor-pointer"
                          >
                            -
                          </button>
                          <span className="font-['DM_Sans'] text-[13px] font-bold w-4 text-center">
                            {quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(product.id, 1)}
                            className="w-6 h-6 rounded-full bg-[#3D1E52]/10 hover:bg-[#3D1E52] hover:text-white flex items-center justify-center text-[12px] font-bold transition-colors cursor-pointer"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="text-right flex flex-col items-end gap-2">
                        <span className="font-['Fredoka'] text-[16px] font-bold text-[#3D1E52]">
                          Rs. {product.price * quantity}
                        </span>
                        <button
                          onClick={() => onRemoveItem(product.id)}
                          className="text-[#FF4F81] hover:text-[#3D1E52] text-[12px] font-['DM_Sans'] flex items-center gap-1 cursor-pointer"
                        >
                          <span className="material-symbols-outlined text-[16px]">
                            delete
                          </span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Promo Code Input */}
                <form
                  onSubmit={handleApplyPromo}
                  className="flex gap-2 bg-white p-2 rounded-2xl border border-[#3D1E52]/5"
                >
                  <input
                    type="text"
                    placeholder="Promo Code (GENFOODS10)"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 bg-transparent px-3 py-1.5 font-['DM_Sans'] text-[13px] focus:outline-none uppercase"
                  />
                  <button
                    type="submit"
                    className="bg-[#3D1E52] hover:bg-[#FF7A45] text-white font-['DM_Sans'] text-[12px] font-bold px-4 py-1.5 rounded-xl transition-colors cursor-pointer"
                  >
                    Apply
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Cart Footer / Checkout Summary */}
          {!orderSuccess && items.length > 0 && (
            <div className="p-6 border-t border-[#3D1E52]/10 bg-white/80 space-y-4">
              <div className="space-y-2 text-[14px] font-['DM_Sans'] text-[#3D1E52]/80">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-[#3D1E52]">Rs. {subtotal}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-[#4CAF7D]">
                    <span>Discount (10%)</span>
                    <span>- Rs. {discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span>{deliveryFee === 0 ? 'FREE' : `Rs. ${deliveryFee}`}</span>
                </div>
                <div className="flex justify-between text-[18px] font-['Fredoka'] font-bold text-[#3D1E52] pt-2 border-t border-[#3D1E52]/10">
                  <span>Total Amount</span>
                  <span className="text-[#FF7A45]">Rs. {total}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full bg-[#FF7A45] hover:bg-[#FF4F81] text-white font-['Fredoka'] text-[18px] font-bold py-4 rounded-full shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
              >
                {isCheckingOut ? (
                  <>
                    <span className="material-symbols-outlined animate-spin text-[20px]">
                      progress_activity
                    </span>
                    Processing Order...
                  </>
                ) : (
                  <>
                    Checkout (Rs. {total})
                    <span className="material-symbols-outlined text-[20px]">
                      arrow_forward
                    </span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
