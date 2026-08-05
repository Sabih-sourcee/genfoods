import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { Toast } from './Toast';
import { useApp } from '../context/AppContext';

export const Layout: React.FC = () => {
  const location = useLocation();
  const { toastMessage, setToastMessage } = useApp();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    );

    const animatedElements = document.querySelectorAll('section > div');
    animatedElements.forEach((el) => {
      el.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <div className="bg-[#FFF8EF] font-['DM_Sans',sans-serif] text-[#3D1E52] min-h-screen selection:bg-[#FF7A45] selection:text-white">
      <Header />
      <main className="w-full pt-20 bg-[#FFF8EF]">
        <Outlet />
      </main>
      <Footer onShowToast={(msg) => setToastMessage(msg)} />
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
};
