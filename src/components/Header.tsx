import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

interface HeaderProps {
  cartItemCount: number;
  onOpenCart: () => void;
  onOpenProfile: () => void;
}

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `font-['Fredoka'] text-[20px] transition-all duration-300 hover:scale-105 ${
    isActive ? 'text-[#FF7A45] font-bold' : 'text-[#3D1E52] hover:text-[#FF7A45]'
  }`;

const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  `font-['Fredoka'] text-[22px] font-bold ${
    isActive ? 'text-[#FF7A45]' : 'text-[#3D1E52]'
  }`;

export const Header: React.FC<HeaderProps> = ({
  cartItemCount,
  onOpenCart,
  onOpenProfile,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 w-full z-50 bg-[#FFF8EF]/80 backdrop-blur-xl border-b border-[#3D1E52]/5 transition-all">
      <div className="h-20 w-full px-4 md:px-[64px] flex items-center justify-between gap-4 md:gap-[24px]">
        <Link to="/" className="flex items-center gap-2 group" onClick={() => setMobileMenuOpen(false)}>
          <img
            alt="GenFoods Logo"
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQ8xMrJbBZbQvHHDZh2nNaDYvaUHgFCB_HFAgMd6VcwQYqLsjXcWEria5cMGKG4nepROl_3dte7yXk6bLSRh_XfKbStQlOjMkpsRNkP86ZjyoLHG3Wc3EBHCb_QRq5LoWB2hoawosdoCUU761SswbthJYigUX3TN3ZSqjOcDkBcPi6JCr9sWnZB4Rdu8vH78klA1Z85AVY82ZeIRZI-nCTnjihAWi6Ne3NSK9TKt5K-hTQkvvGUAez"
          />
          <span className="font-['Fredoka'] text-[28px] leading-[36px] font-bold text-[#3D1E52] tracking-tight">
            GenFoods
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          <NavLink to="/products" className={navLinkClass}>
            Products
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/where-to-buy" className={navLinkClass}>
            Where to Buy
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        <div className="flex items-center gap-3 md:gap-[24px]">
          <button
            onClick={() => navigate('/where-to-buy')}
            className="bg-[#FF7A45] hover:bg-[#FF4F81] text-white font-['DM_Sans'] text-[14px] font-bold tracking-[0.02em] px-4 md:px-6 py-2.5 md:py-3 rounded-full transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap active:scale-95"
          >
            Find Near You
          </button>

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

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFF8EF] border-b border-[#3D1E52]/10 px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-300 shadow-xl">
          <NavLink
            to="/products"
            onClick={() => setMobileMenuOpen(false)}
            className={mobileNavLinkClass}
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={mobileNavLinkClass}
          >
            About
          </NavLink>
          <NavLink
            to="/where-to-buy"
            onClick={() => setMobileMenuOpen(false)}
            className={mobileNavLinkClass}
          >
            Where to Buy
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={mobileNavLinkClass}
          >
            Contact
          </NavLink>
          <div className="pt-4 border-t border-[#3D1E52]/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                navigate('/where-to-buy');
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
