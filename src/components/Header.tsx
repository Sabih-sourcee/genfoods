import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `font-['Fredoka'] text-[20px] transition-all duration-300 hover:scale-105 ${
    isActive ? 'text-[#FF7A45] font-bold' : 'text-[#3D1E52] hover:text-[#FF7A45]'
  }`;

const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  `font-['Fredoka'] text-[22px] font-bold ${
    isActive ? 'text-[#FF7A45]' : 'text-[#3D1E52]'
  }`;

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#FFF8EF]/80 backdrop-blur-xl border-b border-[#3D1E52]/5 transition-all">
      <div className="h-20 w-full px-4 md:px-[64px] flex items-center justify-between gap-4 md:gap-[24px]">
        <Link
          to="/"
          className="flex items-center group"
          onClick={() => setMobileMenuOpen(false)}
        >
          <img
            alt="Gen Foods"
            className="h-12 md:h-14 w-auto object-contain transition-transform group-hover:scale-105"
            src="/images/logo.jpg"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/quality" className={navLinkClass}>
            Quality
          </NavLink>
          <NavLink to="/careers" className={navLinkClass}>
            Careers
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:inline-block bg-[#FF7A45] hover:bg-[#FF4F81] text-white font-['DM_Sans'] text-[14px] font-bold px-5 md:px-6 py-2.5 md:py-3 rounded-full transition-all shadow-sm hover:shadow-md active:scale-95"
          >
            Get in Touch
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-full bg-[#3D1E52]/5 text-[#3D1E52] flex items-center justify-center cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFF8EF] border-b border-[#3D1E52]/10 px-6 py-6 flex flex-col gap-4 shadow-xl">
          <NavLink to="/" end onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>
            About
          </NavLink>
          <NavLink to="/quality" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>
            Quality
          </NavLink>
          <NavLink to="/careers" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>
            Careers
          </NavLink>
          <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>
            Contact
          </NavLink>
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full bg-[#FF7A45] text-white font-bold py-3 rounded-full text-center mt-2"
          >
            Get in Touch
          </Link>
        </div>
      )}
    </header>
  );
};
