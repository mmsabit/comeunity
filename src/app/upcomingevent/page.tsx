import UpcComingEvent from "./UpcComingEvent";
import { EventItem } from "@/type/type";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Upcoming Community Initiatives — CommUnity",
  description:
    "Explore and join hands-on upcoming community events, cleanups, drives, and civic initiatives in your local area.",
};

const getEvents = async (): Promise<EventItem[]> => {
  try {
    const res = await fetch("http://localhost:5000/events", {
      cache: "no-store",
    });
    if (!res.ok) {
      console.error(`Failed to fetch events: HTTP ${res.status}`);
      return [];
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching upcoming events:", error);
    return [];
  }
};

const UpcComingEvents = async () => {
  const events = await getEvents();

  return (
    <div className="w-full pt-24 lg:pt-28 pb-20 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low text-primary-container font-caption text-caption font-semibold mb-3 border border-outline-variant/30">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
            <span>Civic Action Directory</span>
          </div>
          <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
            Upcoming Community Initiatives
          </h1>
          <p className="mt-2 font-body-md text-body-md text-on-surface-variant max-w-2xl leading-relaxed">
            Discover immediate hands-on opportunities in your district. Filter by cause, search neighborhoods, and reserve your volunteer spot today.
          </p>
        </div>

        {/* Client Component with Search and Category Filters */}
        <UpcComingEvent events={events} />
      </div>
    </div>
  );
};

export default UpcComingEvents;
