import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#3D1E52] text-white py-16">
      <div className="w-full px-4 md:px-[64px] grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4 flex flex-col gap-4">
          <Link to="/" className="inline-flex items-center">
            <img
              alt="Gen Foods"
              className="h-16 md:h-20 w-auto max-w-[220px] object-contain"
              src="/images/logo.png"
            />
          </Link>
          <p className="font-['DM_Sans'] text-[16px] text-[#FFF8EF]/80 max-w-xs leading-relaxed">
            Sweetness, made in Pakistan.
          </p>
        </div>

        <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-3">
            <h4 className="font-['Fredoka'] text-[16px] font-bold text-[#FF7A45]">Company</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/about" className="text-[14px] font-['DM_Sans'] text-[#FFF8EF]/70 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/quality" className="text-[14px] font-['DM_Sans'] text-[#FFF8EF]/70 hover:text-white transition-colors">
                Quality & Safety
              </Link>
              <Link to="/careers" className="text-[14px] font-['DM_Sans'] text-[#FFF8EF]/70 hover:text-white transition-colors">
                Careers
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-['Fredoka'] text-[16px] font-bold text-[#FF7A45]">Explore</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-[14px] font-['DM_Sans'] text-[#FFF8EF]/70 hover:text-white transition-colors">
                Home
              </Link>
              <a href="/#products" className="text-[14px] font-['DM_Sans'] text-[#FFF8EF]/70 hover:text-white transition-colors">
                Products
              </a>
            </nav>
          </div>

          <div className="flex flex-col gap-3 col-span-2">
            <h4 className="font-['Fredoka'] text-[16px] font-bold text-[#FF7A45]">Contact</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/contact" className="text-[14px] font-['DM_Sans'] text-[#FFF8EF]/70 hover:text-white transition-colors">
                Get in Touch
              </Link>
            </nav>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-white/10 w-full px-4 md:px-[64px] text-center text-[12px] font-['DM_Sans'] text-[#FFF8EF]/50">
        <span>© {new Date().getFullYear()} Gen Foods. All sweet rights reserved.</span>
      </div>
    </footer>
  );
};
