"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

type CounterProps = {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
};

const Counter = ({
  target,
  decimals = 0,
  prefix = "",
  suffix = "",
}: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1200;
    let startTime: number | undefined;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (startTime === undefined) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const nextCount = progress === 1 ? target : target * progress;
      setCount(Number(nextCount.toFixed(decimals)));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [decimals, target]);

  const formattedCount = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: decimals,
  }).format(count);

  return (
    <span>
      {prefix}
      {formattedCount}
      {suffix}
    </span>
  );
};

const Hero = () => {
  return (
    <section
      className="relative pt-12 pb-24 lg:pt-16 lg:pb-32 overflow-hidden hero-mesh border-b border-slate-100"
      data-purpose="hero-section"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1920&q=80"
          alt="CommUnity volunteers outdoors"
          fill
          priority
          className="w-full h-full object-cover object-center opacity-25"
          unoptimized
        />
        <div className="absolute inset-0 bg-linear-to-b from-surface/70 via-surface/85 to-surface"></div>
      </div>

      {/* Background Ambient Glow & Visual Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-225 h-125 bg-linear-to-b from-indigo-200/50 to-purple-100/10 blur-3xl rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Text Hero Content */}
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Unite for Change. Organize and Join Local Community Events That Matter.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
            A community-first platform designed to mobilize neighbors, champion grassroots civic projects, clean public spaces, and organize meaningful social service initiatives.
          </p>

          {/* Primary CTA */}
          <div className="mt-8 flex justify-center">
            <a
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-linear-to-r from-brand-600 to-indigo-600 text-white font-semibold text-base shadow-lg shadow-brand-600/25 hover:shadow-xl hover:shadow-brand-600/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
              href="#upcoming"
            >
              <span>Explore Upcoming Events</span>
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.2"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Metric Stat Bar Docked Card */}
        <div className="mt-14 max-w-5xl mx-auto" data-purpose="stat-bar">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 sm:p-6 lg:p-7 border border-slate-200/80 shadow-subtle grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {/* Metric 1 */}
            <div className="flex items-center gap-4 pt-3 sm:pt-0 sm:px-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100/80 flex items-center justify-center text-brand-600 shrink-0">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold tracking-tight text-slate-900">
                  <Counter target={1240} suffix="+" />
                </p>
                <p className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">
                  Active Events
                </p>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-4">
              <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-100/80 flex items-center justify-center text-rose-500 shrink-0">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold tracking-tight text-slate-900">
                  <Counter target={48.5} decimals={1} suffix="K" />
                </p>
                <p className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">
                  Volunteers Engaged
                </p>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100/80 flex items-center justify-center text-amber-600 shrink-0">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold tracking-tight text-slate-900">
                  <Counter target={180} suffix="+" />
                </p>
                <p className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">
                  Neighborhoods Served
                </p>
              </div>
            </div>

            {/* Metric 4 */}
            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-4">
              <div className="w-12 h-12 rounded-xl bg-violet-50 border border-violet-100/80 flex items-center justify-center text-violet-600 shrink-0">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold tracking-tight text-slate-900">
                  <Counter target={2.4} decimals={1} prefix="$" suffix="M" />
                </p>
                <p className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">
                  Social Value Generated
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
