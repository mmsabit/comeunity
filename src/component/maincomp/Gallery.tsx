import { EventItem } from "@/type/type";
import Image from "next/image";
import React from "react";

const Gallery = async () => {
  let GALLERY_ITEMS: EventItem[] = [];
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`, {
      next: { revalidate: 60 },
    });
    if (res.ok) {
      GALLERY_ITEMS = await res.json();
    }
  } catch (err) {
    console.error("Failed to load events in Gallery:", err);
  }

  // Display top 6 for the gallery
  const items = GALLERY_ITEMS.slice(0, 6);

  return (
    <section
      className="py-20 lg:py-28 bg-surface"
      data-purpose="field-documentation-gallery"
      id="impact"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Micro Badge */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-100/80 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
            <span>FIELD DOCUMENTATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Moments of Impact: Community in Action
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal">
            Real stories and snapshots captured by volunteer teams working on the frontlines across neighborhood parks, shelters, and community centers.
          </p>
        </div>

        {/* Visual Media Grid with Glassy Overlays */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item: EventItem, index: number) => (
            <div
              className="relative group rounded-2xl overflow-hidden aspect-4/3 bg-slate-900 border border-slate-200 shadow-subtle"
              data-purpose="impact-photo-card"
              key={item._id || index}
            >
              <Image
                alt={item.eventTitle || "Community impact moment"}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                fill
                src={item.thumbnailUrl || "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80"}
                unoptimized
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  {item.eventType}
                </span>
                <h3 className="text-lg font-bold text-white mt-0.5 line-clamp-1">
                  {item.eventTitle}
                </h3>
                <p className="text-xs text-slate-300 flex items-center gap-1 mt-1 truncate">
                  <svg
                    className="w-3.5 h-3.5 text-slate-400 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                  <span>{item.eventLocation}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
