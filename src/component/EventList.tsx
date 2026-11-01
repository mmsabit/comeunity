import React from 'react';
import { MdEvent, MdLocationOn } from 'react-icons/md';
import Image from 'next/image';
import { EventItem } from '@/type/type';
import Link from 'next/link';

const EventList = ({ event }: { event: EventItem}) => {
    return (
        <div className="flex flex-col md:flex-row bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden group">
            {/* Card Media Left */}
            <div className="relative w-full md:w-80 h-52 md:h-60 shrink-0 overflow-hidden bg-surface-container">
              <Image
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={event.thumbnailUrl}
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
                  {event.eventTitle}
                </h2>
                <div className="flex flex-col flex-wrap justify-center gap-x-space-md gap-y-1 font-body-sm text-body-sm text-on-surface-variant my-1.5">
                  <div className="flex items-center gap-1.5">
                    <MdEvent className="text-[18px] text-primary-container shrink-0" />
                    <span>{event.eventDate}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MdLocationOn className="text-[18px] text-on-surface-variant shrink-0" />
                    <span className="truncate">{event.eventLocation}</span>
                  </div>
                </div>
              </div>
              <div className="pt-space-xs border-t border-surface-container flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                <div className="flex items-center gap-2 shrink-0">
                  <Link
                    className="bg-primary-container hover:bg-primary text-surface-container-lowest font-label-md text-label-md py-2.5 px-space-lg rounded-lg transition-colors font-semibold shadow-xs text-center"
                    href={`/event/${event._id}`}
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
    );
};

export default EventList;