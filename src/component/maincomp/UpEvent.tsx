import React from "react";
import { MdChevronRight } from "react-icons/md";
import EventCard from "../EventCard";
import { EventItem } from "@/type/type";

const UpEvent = async () => {
  const res = await fetch("http://localhost:3200/events");
  const Events = await res.json();
  return (
    <section className="w-full py-16 lg:p-25 bg-white" id="events-catalogue">
      <div className="max-w-7xl mx-auto px-margin">
        {/* Section Title & Mongo Atlas Query Indicator */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-space-md">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              Upcoming Community Initiatives
            </h2>
            <p className="mt-1 font-body-md text-body-md text-on-surface-variant">
              Discover immediate hands-on opportunities in your district.
              Reserve your volunteer spot today.
            </p>
          </div>
        </div>

        {/* Event Cards Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-space-md"
          id="events-grid"
        >
          {Events.map((item: EventItem) => (
            <EventCard item={item} key={item._id} />
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
