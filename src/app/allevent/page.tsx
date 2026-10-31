import type { Metadata } from "next";
import AllEvent from "./AllEvent";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "All Events — CommUnity",
  description:
    "Explore and join hands-on community events, cleanups, drives, and civic initiatives across all districts and categories.",
};

const AllEventsPage = async () => {
  const res = await fetch("http://localhost:5000/events", {
    cache: "no-store",
  });
  const events = await res.json();

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
            All Events
          </h1>
          <p className="mt-2 font-body-md text-body-md text-on-surface-variant max-w-2xl leading-relaxed">
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
