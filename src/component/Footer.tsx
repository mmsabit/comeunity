import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-12" data-purpose="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-slate-200/80">
          {/* Brand Info Column */}
          <div className="lg:col-span-2">
            <Link className="flex items-center gap-2.5" href="/">
              <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900">
                CommUnity
              </span>
            </Link>
            <p className="mt-4 text-sm text-slate-600 leading-relaxed max-w-sm">
              Empowering grassroots initiatives, volunteer action, and local community events worldwide.
            </p>
            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3 text-slate-400">
              <a
                aria-label="Community forum"
                className="p-2 rounded-lg bg-white border border-slate-200 hover:text-brand-600 hover:border-brand-200 transition-colors"
                href="#"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </a>
              <a
                aria-label="Announcements"
                className="p-2 rounded-lg bg-white border border-slate-200 hover:text-brand-600 hover:border-brand-200 transition-colors"
                href="#"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </a>
              <a
                aria-label="Members"
                className="p-2 rounded-lg bg-white border border-slate-200 hover:text-brand-600 hover:border-brand-200 transition-colors"
                href="#"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </a>
              <a
                aria-label="LinkedIn"
                className="p-2 rounded-lg bg-white border border-slate-200 hover:text-brand-600 hover:border-brand-200 transition-colors"
                href="#"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Column 1: EXPLORE */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              EXPLORE
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>
                <Link className="hover:text-brand-600 transition-colors" href="/upcomingevent">
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link className="hover:text-brand-600 transition-colors" href="/event">
                  All Events
                </Link>
              </li>
              <li>
                <a className="hover:text-brand-600 transition-colors" href="#">
                  Civic Projects
                </a>
              </li>
              <li>
                <a className="hover:text-brand-600 transition-colors" href="#">
                  Volunteer Hub
                </a>
              </li>
              <li>
                <a className="hover:text-brand-600 transition-colors" href="#">
                  Grant Program
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2: ORGANIZERS */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              ORGANIZERS
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>
                <Link className="hover:text-brand-600 transition-colors" href="/new_event">
                  Create Event
                </Link>
              </li>
              <li>
                <Link className="hover:text-brand-600 transition-colors" href="/myevent">
                  Event Guidelines
                </Link>
              </li>
              <li>
                <a className="hover:text-brand-600 transition-colors" href="#">
                  Verification
                </a>
              </li>
              <li>
                <a className="hover:text-brand-600 transition-colors" href="#">
                  Safety &amp; Code of Conduct
                </a>
              </li>
              <li>
                <a className="hover:text-brand-600 transition-colors" href="#">
                  Organizer Handbook
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 3: PLATFORM & SUPPORT */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              PLATFORM &amp; SUPPORT
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>
                <a className="hover:text-brand-600 transition-colors" href="#">
                  Help Center
                </a>
              </li>
              <li>
                <a className="hover:text-brand-600 transition-colors" href="#">
                  Community Guidelines
                </a>
              </li>
              <li>
                <a className="hover:text-brand-600 transition-colors" href="#">
                  API &amp; Developers
                </a>
              </li>
              <li>
                <a className="hover:text-brand-600 transition-colors" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="hover:text-brand-600 transition-colors" href="#">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Meta Bar */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <div>
            <p>© 2025 CommUnity Platform Inc. All rights reserved.</p>
          </div>
          {/* System Status */}
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>MongoDB Atlas Sync Active • 99.98% Uptime</span>
          </div>
          {/* Language Selector */}
          <div className="flex items-center gap-1.5 cursor-pointer hover:text-slate-900">
            <span>English (US)</span>
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 9l-7 7-7-7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
