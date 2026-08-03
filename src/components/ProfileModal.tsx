import React, { useState } from 'react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  onShowToast,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [email, setEmail] = useState('family@genfoods.pk');
  const [name, setName] = useState('Amina Khan');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#3D1E52]/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-300"
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#FFF8EF] w-full max-w-md rounded-[32px] border border-[#3D1E52]/10 shadow-2xl overflow-hidden z-10 my-8 p-6 sm:p-8 animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white hover:bg-[#3D1E52] hover:text-white text-[#3D1E52] flex items-center justify-center transition-colors cursor-pointer shadow-xs z-10"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {isLoggedIn ? (
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#FF7A45] text-white flex items-center justify-center font-['Fredoka'] text-[24px] font-bold shadow-md">
                AK
              </div>
              <div>
                <h3 className="font-['Fredoka'] text-[22px] font-bold text-[#3D1E52]">
                  {name}
                </h3>
                <p className="font-['DM_Sans'] text-[13px] text-[#3D1E52]/70">
                  {email}
                </p>
              </div>
            </div>

            {/* Loyalty Sweet Points Banner */}
            <div className="bg-gradient-to-r from-[#FF7A45] to-[#FF4F81] p-5 rounded-2xl text-white shadow-md space-y-1">
              <div className="flex justify-between items-center text-[12px] font-['DM_Sans'] uppercase tracking-wider font-bold opacity-90">
                <span>Sweet Rewards Club</span>
                <span className="material-symbols-outlined text-[20px]">stars</span>
              </div>
              <div className="font-['Fredoka'] text-[28px] font-bold">
                120 Sweet Points
              </div>
              <p className="font-['DM_Sans'] text-[12px] opacity-90">
                80 points away from a FREE Fruity Bears pack!
              </p>
            </div>

            {/* Saved Address */}
            <div className="bg-white p-4 rounded-2xl border border-[#3D1E52]/5 space-y-1">
              <span className="font-['DM_Sans'] text-[12px] font-bold text-[#3D1E52]/60 uppercase">
                Default Shipping Address
              </span>
              <p className="font-['Fredoka'] text-[15px] text-[#3D1E52]">
                House 42-B, Block 6, PECHS, Karachi
              </p>
            </div>

            {/* Recent Orders */}
            <div className="space-y-3">
              <h4 className="font-['Fredoka'] text-[16px] font-bold text-[#3D1E52]">
                Recent Orders
              </h4>
              <div className="bg-white p-3.5 rounded-2xl border border-[#3D1E52]/5 flex justify-between items-center text-[13px] font-['DM_Sans']">
                <div>
                  <span className="font-bold text-[#3D1E52] block">#GF-9821</span>
                  <span className="text-[#3D1E52]/60">2x Fruity Bears, 1x Sour Worms</span>
                </div>
                <span className="bg-[#4CAF7D]/10 text-[#4CAF7D] font-bold px-2.5 py-1 rounded-full text-[11px]">
                  Delivered
                </span>
              </div>
            </div>

            {/* Logout */}
            <button
              onClick={() => {
                setIsLoggedIn(false);
                onShowToast('Logged out of GenFoods Account');
              }}
              className="w-full border border-[#3D1E52]/20 hover:bg-[#3D1E52] hover:text-white text-[#3D1E52] font-['DM_Sans'] text-[14px] font-bold py-3 rounded-full transition-colors cursor-pointer"
            >
              Sign Out
            </button>
          </div>
        ) : (
          /* Sign In Form */
          <div className="space-y-6">
            <div className="space-y-1">
              <h3 className="font-['Fredoka'] text-[24px] font-bold text-[#3D1E52]">
                Welcome to GenFoods
              </h3>
              <p className="font-['DM_Sans'] text-[14px] text-[#3D1E52]/70">
                Sign in to track orders and earn Sweet Points!
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setIsLoggedIn(true);
                onShowToast('Welcome back to GenFoods!');
              }}
              className="space-y-4"
            >
              <div>
                <label className="font-['DM_Sans'] text-[12px] font-bold text-[#3D1E52]/70 block mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white rounded-2xl border border-[#3D1E52]/10 font-['DM_Sans'] text-[14px] focus:outline-none focus:border-[#FF7A45]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#FF7A45] hover:bg-[#FF4F81] text-white font-['Fredoka'] text-[16px] font-bold py-3.5 rounded-full transition-all cursor-pointer shadow-md"
              >
                Sign In
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
