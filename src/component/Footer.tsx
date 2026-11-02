import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

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
                <FaFacebookF />
              </a>
              <a
                aria-label="Announcements"
                className="p-2 rounded-lg bg-white border border-slate-200 hover:text-brand-600 hover:border-brand-200 transition-colors"
                href="#"
              >
                <FaXTwitter />
              </a>
              <a
                aria-label="Members"
                className="p-2 rounded-lg bg-white border border-slate-200 hover:text-brand-600 hover:border-brand-200 transition-colors"
                href="#"
              >
                <FaInstagram />
              </a>
              <a
                aria-label="LinkedIn"
                className="p-2 rounded-lg bg-white border border-slate-200 hover:text-brand-600 hover:border-brand-200 transition-colors"
                href="#"
              >
                <FaLinkedinIn />
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
        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 text-xs text-slate-500 font-medium">
          <div>
            <p>© 2026 CommUnity Platform Inc. All rights reserved.</p>
          </div>
          
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
