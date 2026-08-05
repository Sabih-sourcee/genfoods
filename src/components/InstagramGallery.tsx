import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { InstagramPost } from '../types';

interface InstagramGalleryProps {
  posts: InstagramPost[];
  limit?: number;
  showHeader?: boolean;
  viewAllLink?: string;
}

export const InstagramGallery: React.FC<InstagramGalleryProps> = ({
  posts,
  limit,
  showHeader = true,
  viewAllLink,
}) => {
  const [selected, setSelected] = useState<InstagramPost | null>(null);
  const visible = limit ? posts.slice(0, limit) : posts;

  return (
    <>
      <section className="px-4 md:px-[64px] py-16 md:py-24 bg-[#FFF8EF]">
        <div className="max-w-[1280px] mx-auto">
          {showHeader && (
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="flex flex-col gap-2">
                <span className="font-['DM_Sans'] text-[12px] font-bold uppercase tracking-[0.1em] text-[#FF4F81]">
                  From Instagram
                </span>
                <h2 className="font-['Fredoka'] text-[32px] sm:text-[40px] font-bold text-[#3D1E52]">
                  Latest Posts
                </h2>
                <p className="font-['DM_Sans'] text-[15px] text-[#3D1E52]/70 max-w-md">
                  Real Gen Foods visuals from our social feed — sweets, flavours, and the journey.
                </p>
              </div>

              {viewAllLink && (
                <Link
                  to={viewAllLink}
                  className="font-['Fredoka'] text-[16px] text-[#3D1E52] flex items-center gap-1.5 hover:text-[#FF7A45] transition-colors"
                >
                  See all posts
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              )}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {visible.map((post) => (
              <button
                key={post.id}
                type="button"
                onClick={() => setSelected(post)}
                className="group text-left bg-white rounded-[24px] overflow-hidden border border-[#3D1E52]/5 hover:border-[#FF7A45]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="relative aspect-square overflow-hidden bg-[#FFF8EF]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] text-[#FF7A45]">
                      photo_camera
                    </span>
                    <span className="font-['DM_Sans'] text-[11px] font-bold text-[#3D1E52]">
                      Instagram
                    </span>
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-2">
                  <h3 className="font-['Fredoka'] text-[20px] font-bold text-[#3D1E52] group-hover:text-[#FF7A45] transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-['DM_Sans'] text-[14px] text-[#3D1E52]/75 line-clamp-2">
                    {post.caption}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          <div
            onClick={() => setSelected(null)}
            className="fixed inset-0 bg-[#3D1E52]/40 backdrop-blur-xs"
          />
          <div className="relative bg-[#FFF8EF] w-full max-w-2xl rounded-[32px] border border-[#3D1E52]/10 shadow-2xl overflow-hidden z-10 my-8">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white hover:bg-[#3D1E52] hover:text-white text-[#3D1E52] flex items-center justify-center transition-colors cursor-pointer shadow-xs"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full aspect-square object-cover"
            />
            <div className="p-6 sm:p-8 space-y-3">
              <h3 className="font-['Fredoka'] text-[28px] font-bold text-[#3D1E52]">
                {selected.title}
              </h3>
              <p className="font-['DM_Sans'] text-[15px] leading-relaxed text-[#3D1E52]/80">
                {selected.caption}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {selected.hashtags.map((tag) => (
                  <span
                    key={tag}
                    className="font-['DM_Sans'] text-[12px] font-bold text-[#FF7A45] bg-[#FF7A45]/10 px-3 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
