import React, { useEffect } from 'react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, 3200);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 fade-in duration-300">
      <div className="bg-[#3D1E52] text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/10 max-w-sm">
        <div className="w-8 h-8 rounded-full bg-[#FF7A45] flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-[18px]">
            notifications_active
          </span>
        </div>
        <span className="font-['DM_Sans'] text-[14px] font-bold">{message}</span>
        <button
          onClick={onClose}
          className="ml-auto text-white/60 hover:text-white p-1 cursor-pointer"
        >
          <span className="material-symbols-outlined text-[16px]">close</span>
        </button>
      </div>
    </div>
  );
};
