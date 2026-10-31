
import { MdMarkEmailRead } from "react-icons/md";

const NewsLetter = () => {
  

  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-linear-to-r from-[#4d2db7] via-[#5c37ce] to-[#6e47ed] p-8 sm:p-10 md:p-12 shadow-[0_20px_50px_-15px_rgba(82,51,199,0.35)]">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            {/* Glass Icon Box */}
            <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-white/20 backdrop-blur-md border border-white/25 flex items-center justify-center text-white shrink-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
              <MdMarkEmailRead className="text-3xl sm:text-[34px] text-white drop-shadow-sm" />
            </div>

            {/* Content Column */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-xl sm:text-2xl md:text-[26px] font-bold text-white tracking-tight">
                Stay Rooted in Your Community
              </h2>
              <p className="mt-2 text-xs sm:text-sm md:text-[15px] text-white/85 leading-relaxed max-w-2xl">
                Subscribe for curated weekly dispatches on upcoming service opportunities, volunteer grant announcements, and inspiring neighborhood impact stories.
              </p>

              
                <form
                  className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
                  
                >
                  <input
                    aria-label="Email address"
                    className="w-full sm:max-w-md px-4 py-3 bg-white text-gray-800 placeholder:text-gray-400 text-sm rounded-xl outline-none shadow-sm focus:ring-2 focus:ring-white/50 transition-all"
                    
                    placeholder="Enter your email address..."
                    required
                    type="email"
                    
                  />
                  <button
                    className="px-6 py-3 bg-white hover:bg-white/95 text-[#5434cb] font-semibold text-sm rounded-xl shadow-sm transition-all whitespace-nowrap active:scale-[0.98] cursor-pointer"
                    type="submit"
                  >
                    Subscribe to Updates
                  </button>
                </form>

              <p className="mt-3.5 text-[11px] sm:text-xs text-white/70 font-normal">
                Zero spam. Verified municipal notifications only. Unsubscribe anytime with one click.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
