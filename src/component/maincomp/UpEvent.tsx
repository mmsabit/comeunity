import React from 'react';
import { MdBookmarkBorder, MdEvent, MdLocationOn, MdShare, MdChevronRight } from 'react-icons/md';
import Image from "next/image";

interface EventItem {
  id: number;
  title: string;
  category: string;
  categoryStyle: string;
  badgeTextColor?: string;
  date: string;
  dateColor: string;
  location: string;
  organizerInitials: string;
  organizerBg: string;
  organizerTextColor?: string;
  organizerName: string;
  organizerRole: string;
  spotsLabel: string;
  spotsFilled: string;
  spotsPercent: number;
  progressColor: string;
  image: string;
  imageAlt: string;
  filterType: "all" | "weekend" | "environment";
}

const UpEvent = async() => {
    const res = await fetch('http://localhost:5000/events');
    const Events = await res.json();
    return (
        <section className="w-full py-space-xl bg-surface-container-low" id="events-catalogue">
                    <div className="max-w-7xl mx-auto px-margin">
                      {/* Section Title & Mongo Atlas Query Indicator */}
                      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-space-md">
                        <div>
                          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                            Upcoming Community Initiatives
                          </h2>
                          <p className="mt-1 font-body-md text-body-md text-on-surface-variant">
                            Discover immediate hands-on opportunities in your district. Reserve your volunteer spot today.
                          </p>
                        </div>
        
                        
                      </div>
        
                      {/* Event Cards Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-space-md" id="events-grid">
                        {Events.map((item:EventItem) => (
                          <div
                            className="flex flex-col bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden group"
                            key={item.id}
                          >
                            <div className="relative h-48 w-full overflow-hidden bg-surface-container">
                              <Image
                                alt={item.imageAlt}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                height={192}
                                src={item.image}
                                width={400}
                                unoptimized
                              />
                              <div className="absolute top-3 left-3 flex items-center gap-2">
                                <span className={`px-3 py-1 rounded-full font-label-sm text-label-sm font-bold shadow-sm ${item.categoryStyle}`}>
                                  {item.category}
                                </span>
                              </div>
                              <div className="absolute top-3 right-3">
                                <button
                                  className="w-8 h-8 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface-variant hover:text-primary-container flex items-center justify-center transition-colors shadow-sm"
                                  title="Bookmark Event"
                                  type="button"
                                >
                                  <MdBookmarkBorder className="text-[18px]" />
                                </button>
                              </div>
                            </div>
        
                            <div className="p-5 flex flex-col flex-1">
                              <div className={`flex items-center gap-2 font-label-sm text-label-sm font-semibold mb-2 ${item.dateColor}`}>
                                <MdEvent className="text-[16px]" />
                                <span>{item.date}</span>
                              </div>
        
                              <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary-container transition-colors line-clamp-2 mb-2 font-bold">
                                {item.title}
                              </h3>
        
                              <div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm mb-4">
                                <MdLocationOn className="text-[18px] text-outline shrink-0" />
                                <span className="truncate">{item.location}</span>
                              </div>
        
                              <div className="flex items-center gap-2 mb-4 pt-3 bg-surface-container-low/50 p-2.5 rounded-lg">
                                <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-caption ${item.organizerBg}`}>
                                  {item.organizerInitials}
                                </div>
                                <div className="flex flex-col min-w-0">
                                  <span className="font-label-sm text-label-sm text-on-surface font-semibold truncate">
                                    {item.organizerName}
                                  </span>
                                  <span className="font-caption text-caption text-on-surface-variant">
                                    {item.organizerRole}
                                  </span>
                                </div>
                              </div>
        
                              {/* Capacity Progress */}
                              <div className="mt-auto">
                                <div className="flex justify-between items-center text-label-sm font-label-sm mb-1.5">
                                  <span className="text-on-surface-variant font-medium">{item.spotsLabel}</span>
                                  <span className={`font-bold ${item.dateColor}`}>{item.spotsFilled}</span>
                                </div>
                                <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden mb-4">
                                  <div
                                    className={`${item.progressColor} h-full rounded-full transition-all duration-500`}
                                    style={{ width: `${item.spotsPercent}%` }}
                                  ></div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <button
                                    className="flex-1 py-2.5 px-4 rounded-lg bg-primary-container hover:bg-primary text-white font-label-md text-label-md font-semibold transition-all text-center"
                                    type="button"
                                  >
                                    Join Event
                                  </button>
                                  <button
                                    className="p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface transition-all"
                                    title="Share event"
                                    type="button"
                                  >
                                    <MdShare className="text-[18px]" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
        
                      
        
                      {/* Bottom View All CTA */}
                      <div className="mt-12 text-center">
                        <a
                          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md font-semibold shadow-sm hover:shadow hover:bg-surface-container transition-all"
                          data-path="all-events"
                          href="#"
                        >
                          <span>View All 140+ Upcoming Events</span>
                          <MdChevronRight className="text-primary-container text-[20px]" />
                        </a>
                      </div>
                    </div>
                  </section>
    );
};

export default UpEvent;