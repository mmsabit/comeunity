import React from "react";
import Image from "next/image";
import { EventItem } from "@/type/type";
import { CiUser } from "react-icons/ci";
import Link from "next/link";

const EventCard = ({ item }: { item: EventItem }) => {
  return (
    <div
      className="bg-white rounded-2xl border border-slate-200/80 shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all duration-200 overflow-hidden flex flex-col group"
      data-purpose="event-card"
    >
      {/* Image & Tag Container */}
      <div className="relative h-52 w-full overflow-hidden bg-slate-100">
        <Image
          alt={item.eventTitle || "Event Image"}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          height={208}
          src={item.thumbnailUrl || "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80"}
          width={400}
          unoptimized
        />
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-600 text-white shadow-sm capitalize">
            {item.eventType}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Date */}
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
            <span>{item.eventDate}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors line-clamp-2">
            {item.eventTitle}
          </h3>

          {/* Location */}
          <div className="mt-2 flex items-center gap-1.5 text-sm text-slate-500">
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
            <span className="truncate">{item.eventLocation}</span>
          </div>

          {/* Host Info Box */}
          <div className="mt-5 p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
            {item.organizerImage ? (
              <Image
                alt={item.organizerName || "Organizer avatar"}
                className="w-8 h-8 rounded-full object-cover ring-1 ring-slate-200"
                height={32}
                src={item.organizerImage}
                width={32}
                unoptimized
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 ring-1 ring-slate-200">
                <CiUser className="text-base" />
              </div>
            )}
            <div className="text-xs min-w-0">
              <p className="text-slate-400 font-medium">Event Hosted by</p>
              <p className="font-bold text-slate-800 truncate">
                {item.organizerName}
              </p>
            </div>
          </div>
        </div>

        {/* Button CTA */}
        <div className="mt-6">
          <Link
            href={`/event/${item._id}`}
            className="w-full py-3 px-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500 block text-center"
          >
            Join Event
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
