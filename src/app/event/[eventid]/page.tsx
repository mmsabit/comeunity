import Image from "next/image";
import React from "react";
import { FaClock, FaRegCalendarAlt } from "react-icons/fa";
import { FaLocationDot, FaUserGroup } from "react-icons/fa6";
import {
  MdArrowForward,
  
} from "react-icons/md";

const EventDetailesPage = async ({
  params,
}: {
  params: Promise<{ eventid: string }>;
}) => {
  const { eventid } = await params;
  const res = await fetch(`http://localhost:5000/events/${eventid}`);
  const event = await res.json();

  return (
    <div className="flex flex-col w-full">
      <section className="w-full bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-margin-mobile sm:px-margin-tablet lg:px-margin  py-15">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-md bg-surface-container-high aspect-video sm:aspect-21/9 max-h-115">
            <Image
              className="w-full h-full object-cover"
              src={event.image}
              alt={event.title}
              fill
            />
            <div className="absolute inset-0 bg-linear-to-t from-inverse-surface/90 via-inverse-surface/30 to-transparent" />
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex flex-wrap gap-2 z-10" />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 text-white z-10">
              <div className="inline-flex items-center gap-2 mb-2 text-primary-fixed font-label-technical text-label-technical tracking-wide">
                <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
              </div>
              <h1 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg font-bold tracking-tight text-white max-w-4xl leading-tight drop-shadow-sm">
                {event.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Two-Column Main Content Section */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-margin-mobile sm:px-margin-tablet lg:px-margin py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT COLUMN (~68%) */}
            <div className="lg:col-span-8 flex flex-col gap-8 min-w-0">
              {/* About This Initiative */}
              <article className="bg-surface-container-lowest rounded-xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center justify-between pb-4 mb-6 bg-white -mx-6 sm:-mx-8 px-6 sm:px-8 -mt-6 sm:-mt-8 pt-6 sm:pt-8 rounded-t-xl">
                  <div>
                    <span className="font-label-technical text-label-technical text-primary-container uppercase tracking-wider">
                      Project Narrative
                    </span>
                    <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                      About This Initiative
                    </h2>
                  </div>
                </div>
                <div className="prose max-w-none text-on-surface font-body-md text-body-md space-y-4">
                  <p>{event.description}</p>
                </div>
              </article>
            </div>

            {/* RIGHT COLUMN — Sticky RSVP Sidebar (~32%) */}
            <aside className="lg:col-span-4 flex flex-col gap-6 sticky top-24">
              <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-md">
                <ul>
                  <li className="flex items-center gap-2 text-xs mb-2"><FaClock className="text-primary" size={18} /> Finished </li>
                  <li className="flex items-center gap-2 text-xs mb-2"><FaRegCalendarAlt className="text-primary" size={18} /> {event.date}</li>
                  <li className="flex items-center gap-2 text-xs mb-2"><FaUserGroup className="text-primary" size={18} /> 0 Person Joinded</li>
                  <li className="flex items-center gap-2 text-xs mb-2"><FaLocationDot className="text-primary" size={18} /> {event.location}</li>
                </ul>

                <button
                  className="w-full mt-4 py-3.5 px-4 rounded-xl bg-primary-container hover:bg-primary text-white font-title-md text-title-md font-bold flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.99]"
                  id="rsvp-submit-btn"
                  type="submit"
                >
                  <span>Join this Event</span>
                  <MdArrowForward className="text-[20px]" />
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetailesPage;
