import Image from 'next/image';
import { MdEvent, MdLocationOn } from 'react-icons/md';

const JoinedEvent = () => {
    return (
        <div className="flex flex-col w-full">
                
              {/* Main Events Grid Section */}
              <main className="w-full max-w-7xl mx-auto px-margin py-space-md">
                <div className='py-10'>
                    <h2 className='text-4xl text-center font-semibold'>Joined Event</h2>
                </div>
                <div className="grid grid-cols-1 gap-space-md">
        
                  {/* Event Card 1: Urban Reforestation */}
                  <article className="flex flex-col md:flex-row bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden group">
                    {/* Card Media Left */}
                    <div className="relative w-full md:w-80 h-52 md:h-60 shrink-0 overflow-hidden bg-surface-container">
                      <Image
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG7iMxYEhhUGgkOdjmRaqYmQ6YQ47Y99k7jR-AKzQWqMcoY8vnra1uR8i2wTPr0ahrpI99NvB4ESjiKkLiikyTiPWQlgdZXyVzgilO3nFUBpyJtxqdXDGiiBipWguPYEOpZJeyOPwjeiA2VUNAoM740BzD7_EhgGWqxleQnLOZI7ArUHYaumZiE8qdWzGj0HCidcr12gAklCdirlyfmK-mbptAt7Db8kQr5X91VqU"
                        alt="Volunteers planting trees in an urban community garden"
                        fill
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-on-surface/80 via-transparent to-transparent md:hidden" />
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5" />
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-surface-container-lowest font-label-technical text-label-technical" />
                    </div>
        
                    {/* Card Content Right */}
                    <div className="p-space-md flex-1 flex flex-col justify-between gap-space-sm">
                      <div>
                        <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold hover:text-primary-container transition-colors line-clamp-2 mb-1">
                          Green City Urban Reforestation &amp; Park Cleanup
                        </h2>
                        <div className="flex flex-col flex-wrap justify-center gap-x-space-md gap-y-1 font-body-sm text-body-sm text-on-surface-variant my-1.5">
                          <div className="flex items-center gap-1.5">
                            <MdEvent className="text-[18px] text-primary-container shrink-0" />
                            <span>Saturday, Oct 25, 2025 • 9:00 AM - 1:00 PM</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MdLocationOn className="text-[18px] text-on-surface-variant shrink-0" />
                            <span className="truncate">Riverside Commons Park, Sector 4</span>
                          </div>
                        </div>
                      </div>
                      <div className="pt-space-xs border-t border-surface-container flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                        <div className="flex items-center gap-2 shrink-0">
                          <a
                            className="bg-primary-container hover:bg-primary text-surface-container-lowest font-label-md text-label-md py-2.5 px-space-lg rounded-lg transition-colors font-semibold shadow-xs text-center"
                            href="#"
                          >
                            View Details
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
        
                  {/* Event Card 2: Food Relief & Pantry */}
                  <article className="flex flex-col md:flex-row bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden group">
                    <div className="relative w-full md:w-80 h-52 md:h-auto shrink-0 overflow-hidden bg-surface-container">
                      <div className="absolute inset-0 bg-linear-to-t from-on-surface/80 via-transparent to-transparent md:hidden" />
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                        <span className="bg-surface-container-lowest/95 backdrop-blur-sm text-secondary font-label-technical text-label-technical px-2.5 py-1 rounded-md font-bold shadow-xs">
                          🥫 Food Relief &amp; Pantry
                        </span>
                        <span className="bg-surface-container-lowest/95 backdrop-blur-sm text-on-surface font-label-technical text-label-technical px-2 py-1 rounded-md font-semibold">
                          3.0 Hrs Credit
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-surface-container-lowest font-label-technical text-label-technical">
                        <span className="bg-surface-container-lowest/20 backdrop-blur-sm px-2 py-0.5 rounded text-[11px]">
                          Beginner Friendly
                        </span>
                        <span className="text-surface-container-lowest/90 bg-inverse-surface/60 px-2 py-0.5 rounded backdrop-blur-xs">
                          Ward 3
                        </span>
                      </div>
                    </div>
                  </article>
        
                </div>
        
                {/* Organizer Callout Banner */}
                <section className="w-full max-w-7xl mx-auto my-space-xl" />
              </main>
        
            </div>
    );
};

export default JoinedEvent;