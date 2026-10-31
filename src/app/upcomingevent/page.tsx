import UpcComingEvent from "./UpcComingEvent";
import { EventItem } from "@/type/type";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Upcoming Community Initiatives — CommUnity",
  description:
    "Explore and join hands-on upcoming community events, cleanups, drives, and civic initiatives happening today and in the upcoming days.",
};

const parseEventDate = (dateStr: string): Date | null => {
  if (!dateStr) return null;
  // Remove time segments like "• 09:00 AM - 01:00 PM"
  const cleanDateStr = dateStr.split("•")[0].trim();
  const date = new Date(cleanDateStr);
  if (!isNaN(date.getTime())) {
    return date;
  }
  const timestamp = Date.parse(cleanDateStr);
  return isNaN(timestamp) ? null : new Date(timestamp);
};

const getUpcomingEvents = async (): Promise<EventItem[]> => {
  try {
    const res = await fetch("http://localhost:5000/events", {
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
        const eventDate = parseEventDate(event.date);
        if (!eventDate) return false;

        // End of the event's day (23:59:59.999)
        const eventDayEnd = new Date(eventDate);
        eventDayEnd.setHours(23, 59, 59, 999);

        return eventDayEnd >= today;
      })
      .sort((a, b) => {
        const dateA = parseEventDate(a.date)?.getTime() || 0;
        const dateB = parseEventDate(b.date)?.getTime() || 0;
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
    <div className="w-full pt-24 lg:pt-28 pb-20 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low text-primary-container font-caption text-caption font-semibold mb-3 border border-outline-variant/30">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
            <span>Happening Today &amp; Upcoming Days</span>
          </div>
          <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
            Upcoming Community Initiatives
          </h1>
          <p className="mt-2 font-body-md text-body-md text-on-surface-variant max-w-2xl leading-relaxed">
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
