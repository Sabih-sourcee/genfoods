import React, { useState } from 'react';

interface HeaderProps {
  cartItemCount: number;
  onOpenCart: () => void;
  onOpenStoreLocator: () => void;
  onOpenProfile: () => void;
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = ({
  cartItemCount,
  onOpenCart,
  onOpenStoreLocator,
  onOpenProfile
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#FFF8EF]/80 backdrop-blur-xl border-b border-[#3D1E52]/5 transition-all">
      <div className="h-20 w-full px-4 md:px-[64px] flex items-center justify-between gap-4 md:gap-[24px]">
        {/* Logo & Brand Name */}
        <a href="#" className="flex items-center gap-2 group">
          <img
            alt="GenFoods Logo"
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQ8xMrJbBZbQvHHDZh2nNaDYvaUHgFCB_HFAgMd6VcwQYqLsjXcWEria5cMGKG4nepROl_3dte7yXk6bLSRh_XfKbStQlOjMkpsRNkP86ZjyoLHG3Wc3EBHCb_QRq5LoWB2hoawosdoCUU761SswbthJYigUX3TN3ZSqjOcDkBcPi6JCr9sWnZB4Rdu8vH78klA1Z85AVY82ZeIRZI-nCTnjihAWi6Ne3NSK9TKt5K-hTQkvvGUAez"
          />
          <span className="font-['Fredoka'] text-[28px] leading-[36px] font-bold text-[#3D1E52] tracking-tight">
            GenFoods
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <a
            className="transition-all duration-300 text-[#FF7A45] font-bold font-['Fredoka'] text-[20px] hover:scale-105"
            href="#products"
          >
            Products
          </a>
          <a
            className="font-['Fredoka'] text-[20px] text-[#3D1E52] hover:text-[#FF7A45] transition-all duration-300 hover:scale-105"
            href="#about"
          >
            About
          </a>
          <a
            className="font-['Fredoka'] text-[20px] text-[#3D1E52] hover:text-[#FF7A45] transition-all duration-300 hover:scale-105"
            href="#where-to-buy"
            onClick={(e) => {
              e.preventDefault();
              onOpenStoreLocator();
            }}
          >
            Where to Buy
          </a>
          <a
            className="font-['Fredoka'] text-[20px] text-[#3D1E52] hover:text-[#FF7A45] transition-all duration-300 hover:scale-105"
            href="#contact"
          >
            Contact
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 md:gap-[24px]">
          {/* Find Near You CTA */}
          <button
            onClick={onOpenStoreLocator}
            className="bg-[#FF7A45] hover:bg-[#FF4F81] text-white font-['DM_Sans'] text-[14px] font-bold tracking-[0.02em] px-4 md:px-6 py-2.5 md:py-3 rounded-full transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap active:scale-95"
          >
            Find Near You
          </button>

          {/* Cart Icon Button */}
          <button
            onClick={onOpenCart}
            className="relative w-10 h-10 rounded-full bg-[#3D1E52]/5 hover:bg-[#FF7A45] hover:text-white text-[#3D1E52] flex items-center justify-center transition-all cursor-pointer active:scale-95 group"
            title="Shopping Cart"
            aria-label="Shopping Cart"
          >
            <span className="material-symbols-outlined text-[20px] transition-colors">
              shopping_bag
            </span>
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#FF4F81] text-white font-bold text-[11px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-white animate-bounce">
                {cartItemCount}
              </span>
            )}
          </button>

          {/* Profile Icon Button */}
          <button
            onClick={onOpenProfile}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#FF7A45] flex items-center justify-center hover:scale-110 hover:bg-[#FF4F81] transition-all cursor-pointer shadow-sm active:scale-90"
            title="Account & Loyalty"
            aria-label="Account Profile"
          >
            <span className="material-symbols-outlined text-white text-[18px] md:text-[20px]">
              person
            </span>
          </button>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-full bg-[#3D1E52]/5 text-[#3D1E52] flex items-center justify-center cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFF8EF] border-b border-[#3D1E52]/10 px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-300 shadow-xl">
          <a
            onClick={() => setMobileMenuOpen(false)}
            href="#products"
            className="font-['Fredoka'] text-[22px] font-bold text-[#FF7A45]"
          >
            Products
          </a>
          <a
            onClick={() => setMobileMenuOpen(false)}
            href="#about"
            className="font-['Fredoka'] text-[22px] font-bold text-[#3D1E52]"
          >
            About
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenStoreLocator();
            }}
            className="font-['Fredoka'] text-[22px] font-bold text-[#3D1E52] text-left"
          >
            Where to Buy
          </button>
          <a
            onClick={() => setMobileMenuOpen(false)}
            href="#contact"
            className="font-['Fredoka'] text-[22px] font-bold text-[#3D1E52]"
          >
            Contact
          </a>
          <div className="pt-4 border-t border-[#3D1E52]/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenStoreLocator();
              }}
              className="w-full bg-[#FF7A45] text-white font-bold py-3 rounded-full text-center"
            >
              Find Near You
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCart();
              }}
              className="w-full border border-[#3D1E52] text-[#3D1E52] font-bold py-3 rounded-full text-center flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
              View Cart ({cartItemCount})
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
