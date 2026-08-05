import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  onShowToast: (msg: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onShowToast }) => {
  const [emailInput, setEmailInput] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      onShowToast('Thank you for subscribing to GenFoods Sweet News!');
      setEmailInput('');
    }
  };

  return (
    <footer className="w-full bg-[#3D1E52] text-white py-16">
      <div className="w-full px-4 md:px-[64px] grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4 flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-2">
            <img
              alt="GenFoods Logo"
              className="h-10 w-auto object-contain brightness-0 invert"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQ8xMrJbBZbQvHHDZh2nNaDYvaUHgFCB_HFAgMd6VcwQYqLsjXcWEria5cMGKG4nepROl_3dte7yXk6bLSRh_XfKbStQlOjMkpsRNkP86ZjyoLHG3Wc3EBHCb_QRq5LoWB2hoawosdoCUU761SswbthJYigUX3TN3ZSqjOcDkBcPi6JCr9sWnZB4Rdu8vH78klA1Z85AVY82ZeIRZI-nCTnjihAWi6Ne3NSK9TKt5K-hTQkvvGUAez"
            />
            <span className="font-['Fredoka'] text-[28px] font-bold text-white tracking-tight">
              GenFoods
            </span>
          </Link>

          <p className="font-['DM_Sans'] text-[16px] text-[#FFF8EF]/80 max-w-xs leading-relaxed">
            Fun treats kids love, quality parents trust.
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 max-w-xs">
            <label className="font-['DM_Sans'] text-[12px] uppercase font-bold text-[#FF7A45]">
              Get Sweet Updates & Treats
            </label>
            <div className="flex bg-white/10 rounded-full p-1 border border-white/20 focus-within:border-[#FF7A45]">
              <input
                type="email"
                placeholder="Enter your email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="bg-transparent px-4 py-2 font-['DM_Sans'] text-[14px] text-white placeholder-white/50 focus:outline-none w-full"
                required
              />
              <button
                type="submit"
                className="bg-[#FF7A45] hover:bg-[#FF4F81] text-white font-bold text-[13px] px-4 py-2 rounded-full transition-colors shrink-0 cursor-pointer"
              >
                Join
              </button>
            </div>
          </form>

          <div className="flex gap-3 pt-2">
            <button
              onClick={() => {
                navigator.clipboard?.writeText(window.location.href);
                onShowToast('Link copied to clipboard!');
              }}
              className="p-2.5 rounded-full border border-white/20 hover:bg-[#FF7A45] transition-colors text-white cursor-pointer"
              title="Share Page"
            >
              <span className="material-symbols-outlined text-[20px]">share</span>
            </button>
            <Link
              to="/gallery"
              className="p-2.5 rounded-full border border-white/20 hover:bg-[#FF7A45] transition-colors text-white"
              title="Instagram Gallery"
            >
              <span className="material-symbols-outlined text-[20px]">photo_camera</span>
            </Link>
            <Link
              to="/where-to-buy"
              className="p-2.5 rounded-full border border-white/20 hover:bg-[#FF7A45] transition-colors text-white"
              title="Find Stores Near You"
            >
              <span className="material-symbols-outlined text-[20px]">public</span>
            </Link>
          </div>
        </div>

        <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <h4 className="font-['Fredoka'] text-[18px] font-bold text-[#FF7A45]">Explore</h4>
            <nav className="flex flex-col gap-3">
              <Link
                to="/gallery"
                className="text-[14px] font-['DM_Sans'] text-[#FFF8EF]/70 hover:text-white transition-colors"
              >
                Instagram Gallery
              </Link>
              <Link
                to="/about"
                className="text-[14px] font-['DM_Sans'] text-[#FFF8EF]/70 hover:text-white transition-colors"
              >
                Our Story
              </Link>
              <Link
                to="/where-to-buy"
                className="text-[14px] font-['DM_Sans'] text-[#FFF8EF]/70 hover:text-white transition-colors"
              >
                Where to Buy
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-['Fredoka'] text-[18px] font-bold text-[#FF7A45]">Company</h4>
            <nav className="flex flex-col gap-3">
              <Link
                to="/about"
                className="text-[14px] font-['DM_Sans'] text-[#FFF8EF]/70 hover:text-white transition-colors"
              >
                About Us
              </Link>
              <button
                onClick={() => onShowToast('Careers: Send CV to careers@genfoods.pk')}
                className="text-left text-[14px] font-['DM_Sans'] text-[#FFF8EF]/70 hover:text-white transition-colors cursor-pointer"
              >
                Careers
              </button>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-['Fredoka'] text-[18px] font-bold text-[#FF7A45]">Support</h4>
            <nav className="flex flex-col gap-3">
              <Link
                to="/contact"
                className="text-[14px] font-['DM_Sans'] text-[#FFF8EF]/70 hover:text-white transition-colors"
              >
                Contact Us
              </Link>
              <Link
                to="/where-to-buy"
                className="text-[14px] font-['DM_Sans'] text-[#FFF8EF]/70 hover:text-white transition-colors"
              >
                Shipping & Stores
              </Link>
            </nav>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-white/10 w-full px-4 md:px-[64px] flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] font-['DM_Sans'] text-[#FFF8EF]/50">
        <span>© 2024 GenFoods Inc. All sweet rights reserved.</span>
        <div className="flex gap-6">
          <button
            onClick={() => onShowToast('Privacy Policy: We never share your personal data.')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Privacy Policy
          </button>
          <button
            onClick={() => onShowToast('Terms of Service: GenFoods quality guarantee.')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Terms of Service
          </button>
        </div>
      </div>
    </footer>
  );
};
