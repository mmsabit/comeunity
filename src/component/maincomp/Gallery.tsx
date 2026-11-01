import { EventItem } from '@/type/type';
import Image from 'next/image';
import React from 'react';
import { MdPhotoCamera, MdLocationOn, } from 'react-icons/md';



const Gallery = async() => {
    const res = await fetch('http://localhost:3200/events');
    const GALLERY_ITEMS = await res.json();
    return (
        <section className="w-full py-16 lg:p-25 bg-surface" id="impact-stories">
                    <div className="max-w-7xl mx-auto px-margin">
                      {/* Section Header */}
                      <div className="text-center max-w-3xl mx-auto mb-space-lg">
                        <div className="inline-flex items-center gap-1.5 text-primary-container font-label-sm text-label-sm font-bold uppercase tracking-wider mb-2">
                          <MdPhotoCamera className="text-[18px]" />
                          <span>Field Documentation</span>
                        </div>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                          Moments of Impact: Community in Action
                        </h2>
                        <p className="mt-2 font-body-md text-body-md text-on-surface-variant">
                          Real stories and snapshots captured by volunteer teams working on the frontlines across neighborhood parks, shelters, and community centers.
                        </p>
                      </div>
        
                      {/* Authentic Community Photos Gallery Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {GALLERY_ITEMS.map((item:EventItem, index:number) => (
                          <div
                            className="group relative h-72 rounded-xl overflow-hidden shadow-sm bg-surface-container"
                            key={index}
                          >
                            <Image
                              alt={item.eventTitle}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              height={288}
                              src={item.thumbnailUrl}
                              width={400}
                              unoptimized
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-inverse-surface/90 via-inverse-surface/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-5 text-inverse-on-surface">
                              <span className={`font-label-sm text-label-sm font-bold`}>
                                {item.eventType}
                              </span>
                              <p className="font-title-md text-title-md font-bold text-surface-container-lowest mt-0.5">
                                {item.eventTitle}
                              </p>
                              <div className="flex items-center justify-between text-caption font-caption text-surface-dim mt-2">
                                <span className="flex items-center gap-1">
                                  <MdLocationOn className="text-[14px]" />
                                  {item.eventLocation}
                                </span>
                                
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
    );
};

export default Gallery;