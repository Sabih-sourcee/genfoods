import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CONTACT } from '../data/siteContent';

export const ContactPage: React.FC = () => {
  const { setToastMessage } = useApp();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setToastMessage('Thanks! We received your message and will reply soon.');
    setFullName('');
    setEmail('');
    setPhone('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="flex flex-col w-full">
      <section className="px-4 md:px-[64px] pt-12 md:pt-16 pb-8 bg-[#FFF8EF]">
        <div className="max-w-[1280px] mx-auto">
          <span className="font-['DM_Sans'] text-[12px] font-bold uppercase tracking-[0.1em] text-[#FF7A45]">
            Contact Us
          </span>
          <h1 className="font-['Fredoka'] text-[36px] sm:text-[48px] font-bold text-[#3D1E52] mt-2">
            Let's talk
          </h1>
          <p className="font-['DM_Sans'] text-[16px] sm:text-[18px] text-[#3D1E52]/80 mt-3 max-w-xl">
            Got a question, a partnership idea, or just want to say hello? We would love to hear from
            you.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-[64px] pb-16 md:pb-24 bg-[#FFF8EF]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-5">
            <h2 className="font-['Fredoka'] text-[22px] font-bold text-[#3D1E52] mb-2">
              Contact Details
            </h2>

            <div className="bg-white p-6 rounded-2xl border border-[#3D1E52]/5 flex gap-4">
              <span className="material-symbols-outlined text-[#FF7A45] text-[28px] shrink-0">
                mail
              </span>
              <div>
                <h3 className="font-['Fredoka'] text-[16px] font-bold text-[#3D1E52]">
                  General Inquiries
                </h3>
                <a
                  href={`mailto:${CONTACT.general}`}
                  className="font-['DM_Sans'] text-[15px] text-[#FF7A45] hover:underline mt-1 block"
                >
                  {CONTACT.general}
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#3D1E52]/5 flex gap-4">
              <span className="material-symbols-outlined text-[#FF7A45] text-[28px] shrink-0">
                handshake
              </span>
              <div>
                <h3 className="font-['Fredoka'] text-[16px] font-bold text-[#3D1E52]">
                  For Business and Distribution
                </h3>
                <a
                  href={`mailto:${CONTACT.business}`}
                  className="font-['DM_Sans'] text-[15px] text-[#FF7A45] hover:underline mt-1 block"
                >
                  {CONTACT.business}
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#3D1E52]/5 flex gap-4">
              <span className="material-symbols-outlined text-[#FF7A45] text-[28px] shrink-0">
                work
              </span>
              <div>
                <h3 className="font-['Fredoka'] text-[16px] font-bold text-[#3D1E52]">Careers</h3>
                <a
                  href={`mailto:${CONTACT.careers}`}
                  className="font-['DM_Sans'] text-[15px] text-[#FF7A45] hover:underline mt-1 block"
                >
                  {CONTACT.careers}
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#3D1E52]/5 flex gap-4">
              <span className="material-symbols-outlined text-[#FF7A45] text-[28px] shrink-0">
                call
              </span>
              <div>
                <h3 className="font-['Fredoka'] text-[16px] font-bold text-[#3D1E52]">Phone</h3>
                <p className="font-['DM_Sans'] text-[15px] text-[#3D1E52]/80 mt-1">
                  {CONTACT.phone}
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#3D1E52]/5 flex gap-4">
              <span className="material-symbols-outlined text-[#FF7A45] text-[28px] shrink-0">
                location_on
              </span>
              <div>
                <h3 className="font-['Fredoka'] text-[16px] font-bold text-[#3D1E52]">Location</h3>
                <p className="font-['DM_Sans'] text-[15px] text-[#3D1E52]/80 mt-1">
                  {CONTACT.location}
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 sm:p-8 rounded-[32px] border border-[#3D1E52]/5 shadow-sm space-y-5"
          >
            <div className="space-y-2">
              <label className="font-['DM_Sans'] text-[13px] font-bold text-[#3D1E52]">
                Full Name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-2xl border border-[#3D1E52]/10 font-['DM_Sans'] text-[14px] focus:outline-none focus:border-[#FF7A45] bg-[#FFF8EF]"
              />
            </div>

            <div className="space-y-2">
              <label className="font-['DM_Sans'] text-[13px] font-bold text-[#3D1E52]">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-2xl border border-[#3D1E52]/10 font-['DM_Sans'] text-[14px] focus:outline-none focus:border-[#FF7A45] bg-[#FFF8EF]"
              />
            </div>

            <div className="space-y-2">
              <label className="font-['DM_Sans'] text-[13px] font-bold text-[#3D1E52]">
                Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl border border-[#3D1E52]/10 font-['DM_Sans'] text-[14px] focus:outline-none focus:border-[#FF7A45] bg-[#FFF8EF]"
              />
            </div>

            <div className="space-y-2">
              <label className="font-['DM_Sans'] text-[13px] font-bold text-[#3D1E52]">
                Subject
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-2xl border border-[#3D1E52]/10 font-['DM_Sans'] text-[14px] focus:outline-none focus:border-[#FF7A45] bg-[#FFF8EF]"
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

        <p className="font-['DM_Sans'] text-[15px] text-[#3D1E52]/70 text-center mt-12 max-w-xl mx-auto">
          We read every message and try to respond as quickly as we can. Thanks for reaching out,
          we cannot wait to connect.
        </p>
      </section>
    </div>
  );
};
