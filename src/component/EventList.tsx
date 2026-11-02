import React from "react";
import Image from "next/image";
import { EventItem } from "@/type/type";
import Link from "next/link";

const EventList = ({ event }: { event: EventItem }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-subtle hover:shadow-card hover:-translate-y-0.5 transition-all overflow-hidden flex flex-col md:flex-row group">
      {/* Card Media Left */}
      <div className="relative w-full md:w-80 h-52 md:h-auto min-h-[180px] shrink-0 overflow-hidden bg-slate-100">
        <Image
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={event.thumbnailUrl || "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80"}
          alt={event.eventTitle || "Community event"}
          fill
          unoptimized
        />
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-600 text-white shadow-sm capitalize">
            {event.eventType}
          </span>
        </div>
      </div>

      {/* Card Content Right */}
      <div className="p-6 flex-1 flex flex-col justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-brand-600 mb-2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
            <span>{event.eventDate}</span>
          </div>

          <h2 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors line-clamp-2 mb-2">
            {event.eventTitle}
          </h2>

          <div className="flex items-center gap-1.5 text-sm text-slate-500">
            <svg
              className="w-4 h-4 text-slate-400 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
            <span className="truncate">{event.eventLocation}</span>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            Hosted by <span className="font-semibold text-slate-800">{event.organizerName}</span>
          </div>
          <Link
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm transition-colors shadow-sm text-center"
            href={`/event/${event._id}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventList;
