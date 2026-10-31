"use client";

import React, { useEffect, useState } from "react";
import {
  MdArrowForward,
  MdCalendarToday,
  MdVolunteerActivism,
  MdLocationCity,
  MdSavings,
} from "react-icons/md";

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
    <section className="relative w-full overflow-hidden bg-surface-container-lowest">
      {/* Ambient micro-dot & organic gradient background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-12 left-1/4 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl"></div>
        <div className="absolute top-24 right-1/4 w-md h-112 bg-secondary/5 rounded-full blur-3xl"></div>
        <svg
          className="absolute inset-0 w-full h-full text-outline-variant/30"
          height="100%"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              height="32"
              id="civic-grid-dots"
              patternUnits="userSpaceOnUse"
              width="32"
            >
              <circle cx="2" cy="2" fill="currentColor" r="1.5"></circle>
            </pattern>
          </defs>
          <rect fill="url(#civic-grid-dots)" height="100%" width="100%"></rect>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-margin  py-16 lg:p-25">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Primary Display Headline */}
          <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight max-w-4xl">
            Unite for Change. Organize and Join Local Community Events That
            Matter.
          </h1>

          {/* Subtitle */}
          <p className="mt-space-md font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            A community-first platform designed to mobilize neighbors, champion
            grassroots civic projects, clean public spaces, and organize
            meaningful social service initiatives.
          </p>

          {/* CTAs */}
          <div className="mt-space-lg flex flex-wrap items-center justify-center gap-space-sm sm:gap-space-md">
            <a
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary-container text-white font-label-md text-label-md font-semibold hover:bg-primary transition-all shadow-md group"
              href="#events-catalogue"
            >
              <span>Explore Upcoming Events</span>
              <MdArrowForward className="text-[20px] group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Live Impact Metrics Quad-bar */}
          <div className="w-full mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 p-3 bg-surface-container-low/70 backdrop-blur-sm rounded-xl shadow-sm">
            <div className="flex flex-col items-center justify-center p-4 bg-surface-container-lowest rounded-lg">
              <div className="flex items-center gap-1.5 text-primary-container mb-1">
                <MdCalendarToday className="text-[20px]" />
                <span className="font-headline-md text-headline-md font-bold text-on-surface">
                  <Counter target={1240} suffix="+" />
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                Active Events
              </span>
            </div>

            <div className="flex flex-col items-center justify-center p-4 bg-surface-container-lowest rounded-lg">
              <div className="flex items-center gap-1.5 text-secondary mb-1">
                <MdVolunteerActivism className="text-[20px]" />
                <span className="font-headline-md text-headline-md font-bold text-on-surface">
                  <Counter target={48.5} decimals={1} suffix="K" />
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                Volunteers Engaged
              </span>
            </div>

            <div className="flex flex-col items-center justify-center p-4 bg-surface-container-lowest rounded-lg">
              <div className="flex items-center gap-1.5 text-tertiary mb-1">
                <MdLocationCity className="text-[20px]" />
                <span className="font-headline-md text-headline-md font-bold text-on-surface">
                  <Counter target={180} suffix="+" />
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                Neighborhoods Served
              </span>
            </div>

            <div className="flex flex-col items-center justify-center p-4 bg-surface-container-lowest rounded-lg">
              <div className="flex items-center gap-1.5 text-primary-container mb-1">
                <MdSavings className="text-[20px]" />
                <span className="font-headline-md text-headline-md font-bold text-on-surface">
                  <Counter target={2.4} decimals={1} prefix="$" suffix="M" />
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                Social Value Generated
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
