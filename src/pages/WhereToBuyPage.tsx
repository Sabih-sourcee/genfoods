import React, { useState } from 'react';
import { STORE_LOCATIONS } from '../data/mockData';
import { useApp } from '../context/AppContext';

export const WhereToBuyPage: React.FC = () => {
  const { setToastMessage } = useApp();
  const [selectedCity, setSelectedCity] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const cities = ['All', 'Karachi', 'Lahore', 'Islamabad', 'Rawalpindi'];

  const filteredStores = STORE_LOCATIONS.filter((store) => {
    const matchesCity = selectedCity === 'All' || store.city === selectedCity;
    const matchesSearch =
      store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.area.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCity && matchesSearch;
  });

  const handleDirections = (address: string) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(url, '_blank');
    setToastMessage('Opening Google Maps directions...');
  };

  return (
    <div className="flex flex-col w-full">
      <section className="px-4 md:px-[64px] pt-12 md:pt-16 pb-8 bg-[#FFF8EF]">
        <div className="max-w-[1280px] mx-auto space-y-3">
          <div className="flex items-center gap-2 text-[#FF7A45]">
            <span className="material-symbols-outlined text-[24px]">location_on</span>
            <span className="font-['DM_Sans'] text-[12px] font-bold uppercase tracking-wider">
              Store Locator
            </span>
          </div>
          <h1 className="font-['Fredoka'] text-[36px] sm:text-[48px] font-bold text-[#3D1E52]">
            Find GenFoods Near You
          </h1>
          <p className="font-['DM_Sans'] text-[16px] sm:text-[18px] text-[#3D1E52]/70 max-w-2xl">
            Available at leading hypermarkets, supermarkets, and local confectionery shops across Pakistan.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-[64px] pb-16 md:pb-24 bg-[#FFF8EF]">
        <div className="max-w-[1280px] mx-auto space-y-6">
          <div className="flex flex-wrap gap-2">
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-4 py-2 rounded-full font-['DM_Sans'] text-[13px] font-bold transition-all cursor-pointer ${
                  selectedCity === city
                    ? 'bg-[#FF7A45] text-white shadow-xs'
                    : 'bg-white text-[#3D1E52] border border-[#3D1E52]/10 hover:border-[#FF7A45]'
                }`}
              >
                {city}
              </button>
            ))}
          </div>

          <div className="relative max-w-xl">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#3D1E52]/40 text-[20px]">
              search
            </span>
            <input
              type="text"
              placeholder="Search by store name, area, or street..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white rounded-2xl border border-[#3D1E52]/10 font-['DM_Sans'] text-[14px] focus:outline-none focus:border-[#FF7A45]"
            />
          </div>

          <div className="space-y-3">
            {filteredStores.length === 0 ? (
              <div className="text-center py-16 bg-white/50 rounded-2xl border border-[#3D1E52]/5">
                <p className="font-['Fredoka'] text-[18px] text-[#3D1E52]">
                  No stores found in this area.
                </p>
                <p className="font-['DM_Sans'] text-[13px] text-[#3D1E52]/60 mt-1">
                  Try searching another city or order directly online!
                </p>
              </div>
            ) : (
              filteredStores.map((store) => (
                <div
                  key={store.id}
                  className="bg-white p-4 sm:p-5 rounded-2xl border border-[#3D1E52]/5 hover:border-[#FF7A45]/30 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-['Fredoka'] text-[18px] font-bold text-[#3D1E52]">
                        {store.name}
                      </h3>
                      <span className="bg-[#4CAF7D]/10 text-[#4CAF7D] text-[11px] font-bold px-2 py-0.5 rounded-full">
                        In Stock
                      </span>
                    </div>
                    <p className="font-['DM_Sans'] text-[13px] text-[#3D1E52]/80">
                      {store.address}
                    </p>
                    <div className="flex items-center gap-4 text-[12px] text-[#3D1E52]/60 pt-1 font-['DM_Sans'] flex-wrap">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">schedule</span>
                        {store.hours}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">call</span>
                        {store.phone}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDirections(store.address)}
                    className="bg-[#3D1E52] hover:bg-[#FF7A45] text-white font-['DM_Sans'] text-[13px] font-bold px-4 py-2.5 rounded-xl transition-colors shrink-0 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">directions</span>
                    Directions
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
