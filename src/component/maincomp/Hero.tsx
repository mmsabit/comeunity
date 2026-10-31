"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
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
    <section className="relative w-full overflow-hidden bg-surface-container-lowest h-[85vh] flex flex-col items-center justify-center ">
      {/* Ambient micro-dot & organic gradient background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="https://i.pinimg.com/736x/e5/f4/4f/e5f44f7c7e2f57a91a71982eb3ddafdd.jpg"
          alt="bannerImage"
          fill
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.63)_0%,rgba(255,255,255,1)_70%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-margin  py-16 lg:p-25">
        <div className="flex flex-col items-center justify-center  text-center max-w-4xl mx-auto">
          {/* Primary Display Headline */}
          <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight max-w-4xl font-semibold">
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
