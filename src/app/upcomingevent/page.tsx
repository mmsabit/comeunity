import UpcComingEvent from "./UpcComingEvent";
import { EventItem } from "@/type/type";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Upcoming Community Initiatives — CommUnity",
  description:
    "Explore and join hands-on upcoming community events, cleanups, drives, and civic initiatives happening today and in the upcoming days.",
};

const getUpcomingEvents = async (): Promise<EventItem[]> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`, {
      cache: "no-store",
    });
    if (!res.ok) {
      console.error(`Failed to fetch events: HTTP ${res.status}`);
      return [];
    }

    const allEvents: EventItem[] = await res.json();

    // Start of today (00:00:00.000)
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Filter for today and all following future dates
    return allEvents
      .filter((event) => {
        const eventDate = event.eventDate ? new Date(event.eventDate) : null;
        if (!eventDate) return false;

        // End of the event's day (23:59:59.999)
        const eventDayEnd = new Date(eventDate);
        eventDayEnd.setHours(23, 59, 59, 999);

        return eventDayEnd >= today;
      })
      .sort((a, b) => {
        const dateA = a.eventDate ? new Date(a.eventDate).getTime() : 0;
        const dateB = b.eventDate ? new Date(b.eventDate).getTime() : 0;
        return dateA - dateB;
      });
  } catch (error) {
    console.error("Error fetching upcoming events:", error);
    return [];
  }
};

const UpcComingEvents = async () => {
  const events = await getUpcomingEvents();

  return (
    <div className="w-full pt-10 pb-20 bg-surface min-h-[calc(100vh-80px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-100/80 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Happening Today &amp; Upcoming Days</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-slate-900 tracking-tight">
            Upcoming Community Initiatives
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
            Discover upcoming and active hands-on opportunities in your district for today and the days ahead. Filter by cause, search neighborhoods, and reserve your volunteer spot.
          </p>
        </div>

        {/* Client Component with Search and Category Filters */}
        <UpcComingEvent events={events} />
      </div>
    </div>
  );
};

export default UpcComingEvents;
