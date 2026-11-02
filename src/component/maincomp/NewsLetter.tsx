"use client";

import React from "react";

const NewsLetter = () => {
  return (
    <section className="py-16 lg:py-24 bg-white" data-purpose="newsletter-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Purple/Indigo Card Container */}
        <div className="relative rounded-3xl bg-linear-to-br from-brand-600 via-indigo-600 to-purple-700 text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-float">
          {/* Subtle Background Pattern */}
          <div className="absolute -right-10 -bottom-10 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute left-10 -top-10 w-72 h-72 bg-purple-400/20 rounded-full blur-2xl pointer-events-none"></div>

          <div className="relative max-w-2xl mx-auto text-center">
            {/* Mail Icon */}
            <div className="w-14 h-14 mx-auto rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white mb-6">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>

            {/* Title & Description */}
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Stay Rooted in Your Community
            </h2>
            <p className="mt-4 text-base sm:text-lg text-indigo-100 leading-relaxed font-normal">
              Subscribe for curated weekly dispatches on upcoming service opportunities, volunteer grant announcements, and inspiring neighborhood impact stories.
            </p>

            {/* Form */}
            <form
              className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
              data-purpose="newsletter-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="flex-1 px-5 py-3.5 rounded-xl bg-white/95 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:bg-white border-0 shadow-sm"
                placeholder="Enter your email address..."
                required
                type="email"
              />
              <button
                className="px-6 py-3.5 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-600 shrink-0 cursor-pointer"
                type="submit"
              >
                Subscribe to Updates
              </button>
            </form>

            {/* Disclaimer */}
            <p className="mt-4 text-xs text-indigo-200/90 font-medium">
              Zero spam. Verified municipal notifications only. Unsubscribe anytime with one click.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
