import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const ContactPage: React.FC = () => {
  const { setToastMessage } = useApp();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setToastMessage('Thanks! We received your message and will reply soon.');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="flex flex-col w-full">
      <section className="px-4 md:px-[64px] pt-12 md:pt-16 pb-8 bg-[#FFF8EF]">
        <div className="max-w-[1280px] mx-auto">
          <span className="font-['DM_Sans'] text-[12px] font-bold uppercase tracking-[0.1em] text-[#FF7A45]">
            Get in Touch
          </span>
          <h1 className="font-['Fredoka'] text-[36px] sm:text-[48px] font-bold text-[#3D1E52] mt-2">
            Contact Us
          </h1>
          <p className="font-['DM_Sans'] text-[16px] sm:text-[18px] text-[#3D1E52]/80 mt-3 max-w-xl">
            Questions about products, stores, or wholesale? We would love to hear from you.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-[64px] pb-16 md:pb-24 bg-[#FFF8EF]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-[#3D1E52]/5 flex gap-4">
              <span className="material-symbols-outlined text-[#FF7A45] text-[28px] shrink-0">
                call
              </span>
              <div>
                <h3 className="font-['Fredoka'] text-[18px] font-bold text-[#3D1E52]">Phone</h3>
                <p className="font-['DM_Sans'] text-[15px] text-[#3D1E52]/80 mt-1">
                  +92 21 111 436 366
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#3D1E52]/5 flex gap-4">
              <span className="material-symbols-outlined text-[#FF7A45] text-[28px] shrink-0">
                mail
              </span>
              <div>
                <h3 className="font-['Fredoka'] text-[18px] font-bold text-[#3D1E52]">Email</h3>
                <p className="font-['DM_Sans'] text-[15px] text-[#3D1E52]/80 mt-1">
                  support@genfoods.pk
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#3D1E52]/5 flex gap-4">
              <span className="material-symbols-outlined text-[#FF7A45] text-[28px] shrink-0">
                work
              </span>
              <div>
                <h3 className="font-['Fredoka'] text-[18px] font-bold text-[#3D1E52]">Careers</h3>
                <p className="font-['DM_Sans'] text-[15px] text-[#3D1E52]/80 mt-1">
                  careers@genfoods.pk
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#3D1E52]/5 flex gap-4">
              <span className="material-symbols-outlined text-[#FF7A45] text-[28px] shrink-0">
                schedule
              </span>
              <div>
                <h3 className="font-['Fredoka'] text-[18px] font-bold text-[#3D1E52]">
                  Support Hours
                </h3>
                <p className="font-['DM_Sans'] text-[15px] text-[#3D1E52]/80 mt-1">
                  Mon – Sat, 9:00 AM – 6:00 PM PKT
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 sm:p-8 rounded-[32px] border border-[#3D1E52]/5 shadow-sm space-y-5"
          >
            <h2 className="font-['Fredoka'] text-[24px] font-bold text-[#3D1E52]">
              Send a Message
            </h2>

            <div className="space-y-2">
              <label className="font-['DM_Sans'] text-[13px] font-bold text-[#3D1E52]">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-2xl border border-[#3D1E52]/10 font-['DM_Sans'] text-[14px] focus:outline-none focus:border-[#FF7A45] bg-[#FFF8EF]"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <label className="font-['DM_Sans'] text-[13px] font-bold text-[#3D1E52]">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-2xl border border-[#3D1E52]/10 font-['DM_Sans'] text-[14px] focus:outline-none focus:border-[#FF7A45] bg-[#FFF8EF]"
                placeholder="you@email.com"
              />
            </div>

            <div className="space-y-2">
              <label className="font-['DM_Sans'] text-[13px] font-bold text-[#3D1E52]">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-2xl border border-[#3D1E52]/10 font-['DM_Sans'] text-[14px] focus:outline-none focus:border-[#FF7A45] bg-[#FFF8EF] resize-none"
                placeholder="How can we help?"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#FF7A45] hover:bg-[#FF4F81] text-white font-['DM_Sans'] text-[14px] font-bold py-3.5 rounded-full transition-all cursor-pointer active:scale-95"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
