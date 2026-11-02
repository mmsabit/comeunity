import React from "react";
import EventCard from "../EventCard";
import { EventItem } from "@/type/type";
import Link from "next/link";

const UpEvent = async () => {
  let Events: EventItem[] = [];
  try {
    const res = await fetch("http://localhost:3200/events", {
      next: { revalidate: 60 },
    });
    if (res.ok) {
      Events = await res.json();
    }
  } catch (err) {
    console.error("Failed to load events in UpEvent:", err);
  }

  // Display top 6 events
  const displayEvents = Events.slice(0, 6);

  return (
    <section
      className="py-20 lg:py-28 bg-white border-y border-slate-100"
      data-purpose="upcoming-events-section"
      id="upcoming"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Upcoming Community Initiatives
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal">
            Discover immediate hands-on opportunities in your district. Reserve your volunteer spot today.
          </p>
        </div>

        {/* Event Cards Grid */}
        <div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="events-grid"
        >
          {displayEvents.map((item: EventItem) => (
            <EventCard item={item} key={item._id} />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-14 flex justify-center">
          <Link
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm shadow-sm transition-all duration-200 hover:border-slate-400"
            href="/upcomingevent"
          >
            <span>View All Upcoming Events</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpEvent;
