import React, { useState } from 'react';
import { STORE_LOCATIONS } from '../data/mockData';

interface StoreLocatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const StoreLocatorModal: React.FC<StoreLocatorModalProps> = ({
  isOpen,
  onClose,
  onShowToast,
}) => {
  const [selectedCity, setSelectedCity] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  if (!isOpen) return null;

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
    onShowToast('Opening Google Maps directions...');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#3D1E52]/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-300"
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#FFF8EF] w-full max-w-3xl rounded-[32px] border border-[#3D1E52]/10 shadow-2xl overflow-hidden z-10 my-8 p-6 sm:p-8 animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white hover:bg-[#3D1E52] hover:text-white text-[#3D1E52] flex items-center justify-center transition-colors cursor-pointer shadow-xs z-10"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Header */}
        <div className="mb-6 space-y-2">
          <div className="flex items-center gap-2 text-[#FF7A45]">
            <span className="material-symbols-outlined text-[24px]">location_on</span>
            <span className="font-['DM_Sans'] text-[12px] font-bold uppercase tracking-wider">
              Store Locator
            </span>
          </div>
          <h2 className="font-['Fredoka'] text-[28px] font-bold text-[#3D1E52]">
            Find GenFoods Near You
          </h2>
          <p className="font-['DM_Sans'] text-[14px] text-[#3D1E52]/70">
            Available at leading hypermarkets, supermarkets, and local confectionery shops across Pakistan.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="space-y-4 mb-6">
          {/* City Tabs */}
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

          {/* Search Input */}
          <div className="relative">
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
        </div>

        {/* Store List */}
        <div className="max-h-[380px] overflow-y-auto space-y-3 pr-1">
          {filteredStores.length === 0 ? (
            <div className="text-center py-10 bg-white/50 rounded-2xl border border-[#3D1E52]/5">
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
                  <div className="flex items-center gap-2">
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
                  <div className="flex items-center gap-4 text-[12px] text-[#3D1E52]/60 pt-1 font-['DM_Sans']">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">
                        schedule
                      </span>
                      {store.hours}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">
                        call
                      </span>
                      {store.phone}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleDirections(store.address)}
                  className="bg-[#3D1E52] hover:bg-[#FF7A45] text-white font-['DM_Sans'] text-[13px] font-bold px-4 py-2.5 rounded-xl transition-colors shrink-0 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    directions
                  </span>
                  Directions
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
