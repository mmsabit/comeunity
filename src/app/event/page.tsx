import type { Metadata } from "next";
import AllEvent from "./AllEvent";
import { EventItem } from "@/type/type";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "All Events — CommUnity",
  description:
    "Explore and join hands-on community events, cleanups, drives, and civic initiatives across all districts and categories.",
};

const AllEventsPage = async () => {
  let events: EventItem[] = [];
  try {
    const res = await fetch("http://localhost:3200/events", {
      cache: "no-store",
    });
    if (res.ok) {
      events = await res.json();
    }
  } catch (err) {
    console.error("Failed to load events in AllEventsPage:", err);
  }

  return (
    <div className="w-full pt-10 pb-20 bg-surface min-h-[calc(100vh-80px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-100/80 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Civic Action Directory</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-slate-900 tracking-tight">
            All Events
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
            Discover all hands-on opportunities in your district. Filter by cause, search neighborhoods, and reserve your volunteer spot today.
          </p>
        </div>

        {/* Client Component with Search and Category Filters */}
        <AllEvent events={events} />
      </div>
    </div>
  );
};

export default AllEventsPage;
