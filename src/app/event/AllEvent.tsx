"use client";

import React, { useState, useMemo } from "react";
import EventCard from "@/component/EventCard";
import { EventItem } from "@/type/type";
import {
  MdSearch,
  MdClose,
  MdSearchOff,
  MdFilterList,
  MdSort,
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

  // Dynamically extract all available categories
  const categories = useMemo(() => {
    const unique = Array.from(
      new Set(events.map((e) => e.category).filter(Boolean))
    );
    return ["All", ...unique];
  }, [events]);

  // Compute category item counts for badges
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: events.length };
    events.forEach((e) => {
      if (e.category) {
        counts[e.category] = (counts[e.category] || 0) + 1;
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
          item.category?.toLowerCase() === selectedCategory.toLowerCase();

        const q = searchQuery.toLowerCase().trim();
        const matchesSearch =
          !q ||
          item.title?.toLowerCase().includes(q) ||
          item.location?.toLowerCase().includes(q) ||
          item.category?.toLowerCase().includes(q) ||
          item.organizerName?.toLowerCase().includes(q) ||
          item.date?.toLowerCase().includes(q);

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        // Sort latest to earliest
        return parseEventDate(b.date) - parseEventDate(a.date);
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
          <MdSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[20px] text-outline pointer-events-none" />
          <input
            aria-label="Search initiatives"
            className="w-full pl-10 pr-10 py-2.5 bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-sm text-body-sm rounded-xl border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary-container shadow-sm transition-all"
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title, location, organizer..."
            type="text"
            value={searchQuery}
          />
          {searchQuery && (
            <button
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-outline hover:text-on-surface transition-colors cursor-pointer"
              onClick={() => setSearchQuery("")}
              type="button"
            >
              <MdClose className="text-[18px]" />
            </button>
          )}
        </div>

        {/* Counter Info & Sort Status Badge */}
        <div className="flex items-center gap-3 text-on-surface-variant font-label-sm text-label-sm self-start sm:self-center">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-container text-on-surface-variant font-medium text-caption">
            <MdSort className="text-[16px] text-primary-container" />
            <span>Sorted: Latest to Earliest</span>
          </div>
          <div>
            <span className="font-semibold text-on-surface">
              {filteredEvents.length}
            </span>
            <span> of {events.length} initiatives</span>
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        <span className="hidden sm:inline-flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm mr-1 shrink-0">
          <MdFilterList className="text-[18px]" />
          <span>Category:</span>
        </span>
        {categories.map((category) => {
          const isActive = selectedCategory === category;
          const count = categoryCounts[category] ?? 0;

          return (
            <button
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-label-sm text-label-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                isActive
                  ? "bg-primary-container text-white shadow-sm"
                  : "bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low border border-outline-variant/30"
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
                    : "bg-surface-container text-on-surface-variant"
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
        <div className="flex flex-wrap items-center gap-2 text-caption font-caption text-on-surface-variant">
          <span>Active filters:</span>
          {selectedCategory !== "All" && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-surface-container text-on-surface">
              Category: <strong className="font-semibold">{selectedCategory}</strong>
              <button
                aria-label="Remove category filter"
                className="hover:text-error ml-0.5 cursor-pointer"
                onClick={() => setSelectedCategory("All")}
                type="button"
              >
                <MdClose className="text-[14px]" />
              </button>
            </span>
          )}
          {searchQuery && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-surface-container text-on-surface">
              Query: <strong className="font-semibold">&quot;{searchQuery}&quot;</strong>
              <button
                aria-label="Remove search query"
                className="hover:text-error ml-0.5 cursor-pointer"
                onClick={() => setSearchQuery("")}
                type="button"
              >
                <MdClose className="text-[14px]" />
              </button>
            </span>
          )}
          <button
            className="text-primary-container hover:underline ml-1 font-semibold cursor-pointer"
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2"
          id="events-grid"
        >
          {filteredEvents.map((item) => (
            <EventCard item={item} key={item.id} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="flex flex-col items-center justify-center p-12 text-center bg-surface-container-lowest rounded-2xl border border-outline-variant/30 mt-4 shadow-sm">
          <div className="w-16 h-16 rounded-full bg-surface-container-low flex items-center justify-center text-outline mb-4">
            <MdSearchOff className="text-[36px]" />
          </div>
          <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
            No initiatives found
          </h3>
          <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant max-w-md">
            We couldn&apos;t find any events matching &quot;{searchQuery || selectedCategory}&quot;.
            Try clearing filters or search with different keywords.
          </p>
          <button
            className="mt-5 px-5 py-2.5 rounded-lg bg-primary-container text-white font-label-md text-label-md font-semibold hover:bg-primary transition-all shadow-sm cursor-pointer"
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
