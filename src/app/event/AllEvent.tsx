"use client";

import React, { useState, useMemo } from "react";
import EventCard from "@/component/EventCard";
import { EventItem } from "@/type/type";
import {
  MdSearch,
  MdClose,
  MdSearchOff,
  MdFilterList,
} from "react-icons/md";

interface AllEventProps {
  events: EventItem[];
}

// Helper to reliably parse various date strings into timestamps
const parseEventDate = (dateStr?: string): number => {
  if (!dateStr) return 0;
  const clean = dateStr.split("•")[0].trim();
  const date = new Date(clean);
  const time = date.getTime();
  if (!isNaN(time)) return time;
  const fallback = Date.parse(clean);
  return !isNaN(fallback) ? fallback : 0;
};

const AllEvent: React.FC<AllEventProps> = ({ events }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Dynamically extract all available categories (normalized to avoid casing duplicates)
  const categories = useMemo(() => {
    const seen = new Map<string, string>(); // lowercase → original display form
    events.forEach((e) => {
      if (e.eventType) {
        const key = e.eventType.trim().toLowerCase();
        if (!seen.has(key)) seen.set(key, e.eventType.trim());
      }
    });
    return ["All", ...Array.from(seen.values())];
  }, [events]);

  // Compute category item counts for badges (case-insensitive keyed by lowercase)
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: events.length };
    events.forEach((e) => {
      if (e.eventType) {
        const key = e.eventType.trim().toLowerCase();
        counts[key] = (counts[key] || 0) + 1;
      }
    });
    return counts;
  }, [events]);

  // Filter events based on active category & search query, then sort latest to earliest
  const filteredEvents = useMemo(() => {
    return events
      .filter((item) => {
        const matchesCategory =
          selectedCategory === "All" ||
          item.eventType?.toLowerCase() === selectedCategory.toLowerCase();

        const q = searchQuery.toLowerCase().trim();
        const matchesSearch =
          !q ||
          item.eventTitle?.toLowerCase().includes(q) ||
          item.eventLocation?.toLowerCase().includes(q) ||
          item.eventType?.toLowerCase().includes(q) ||
          item.organizerName?.toLowerCase().includes(q) ||
          item.eventDate?.toLowerCase().includes(q);

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        // Sort latest to earliest
        return parseEventDate(b.eventDate) - parseEventDate(a.eventDate);
      });
  }, [events, selectedCategory, searchQuery]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Search Bar & Result Counter Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative flex-1 max-w-lg">
          <MdSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xl text-slate-400 pointer-events-none" />
          <input
            aria-label="Search initiatives"
            className="w-full pl-10 pr-10 py-3 bg-white text-slate-800 placeholder:text-slate-400 text-sm rounded-xl border border-slate-200/80 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 shadow-subtle transition-all"
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title, location, organizer..."
            type="text"
            value={searchQuery}
          />
          {searchQuery && (
            <button
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
              onClick={() => setSearchQuery("")}
              type="button"
            >
              <MdClose className="text-lg" />
            </button>
          )}
        </div>

        {/* Counter Info & Sort Status Badge */}
        <div className="flex items-center gap-3 text-slate-500 text-sm self-start sm:self-center font-medium">
          <div>
            <span className="font-bold text-slate-900">
              {filteredEvents.length}
            </span>
            <span> of {events.length} initiatives</span>
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        <span className="hidden sm:inline-flex items-center gap-1 text-slate-500 text-sm mr-1 shrink-0 font-medium">
          <MdFilterList className="text-lg" />
          <span>Category:</span>
        </span>
        {categories.map((category) => {
          const isActive = selectedCategory === category;
          const countKey = category === "All" ? "All" : category.toLowerCase();
          const count = categoryCounts[countKey] ?? 0;

          return (
            <button
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                isActive
                  ? "bg-brand-600 text-white shadow-sm"
                  : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200/80 shadow-xs"
              }`}
              key={category}
              onClick={() => setSelectedCategory(category)}
              type="button"
            >
              <span>{category}</span>
              <span
                className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Filter Indicator Tag (if filtered) */}
      {(selectedCategory !== "All" || searchQuery) && (
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
          <span>Active filters:</span>
          {selectedCategory !== "All" && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800">
              Category: <strong className="font-semibold">{selectedCategory}</strong>
              <button
                aria-label="Remove category filter"
                className="hover:text-rose-600 ml-0.5 cursor-pointer"
                onClick={() => setSelectedCategory("All")}
                type="button"
              >
                <MdClose className="text-sm" />
              </button>
            </span>
          )}
          {searchQuery && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800">
              Query: <strong className="font-semibold">&quot;{searchQuery}&quot;</strong>
              <button
                aria-label="Remove search query"
                className="hover:text-rose-600 ml-0.5 cursor-pointer"
                onClick={() => setSearchQuery("")}
                type="button"
              >
                <MdClose className="text-sm" />
              </button>
            </span>
          )}
          <button
            className="text-brand-600 hover:underline ml-1 font-semibold cursor-pointer"
            onClick={handleResetFilters}
            type="button"
          >
            Clear all
          </button>
        </div>
      )}

      {/* Events Grid */}
      {filteredEvents.length > 0 ? (
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-2"
          id="events-grid"
        >
          {filteredEvents.map((item) => (
            <EventCard item={item} key={item._id} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="flex flex-col items-center justify-center p-12 text-center bg-white rounded-2xl border border-slate-200/80 mt-4 shadow-subtle">
          <div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 mb-4">
            <MdSearchOff className="text-3xl" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">
            No initiatives found
          </h3>
          <p className="mt-1 text-sm text-slate-500 max-w-md">
            We couldn&apos;t find any events matching &quot;{searchQuery || selectedCategory}&quot;.
            Try clearing filters or search with different keywords.
          </p>
          <button
            className="mt-5 px-5 py-2.5 rounded-xl bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition-all shadow-sm cursor-pointer"
            onClick={handleResetFilters}
            type="button"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default AllEvent;
