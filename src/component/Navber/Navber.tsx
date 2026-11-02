import Link from "next/link";
import Navlink from "./Navlink";
import Navbtn from "./Navbtn";

const Navber = () => {
  return (
    <header className="sticky top-0 z-50 glass-nav border-b border-slate-200/70 transition-all duration-200" data-purpose="site-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-lg p-1"
          data-purpose="brand-logo"
          href="/"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 via-indigo-600 to-purple-500 flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform duration-200">
            <svg
              className="w-5 h-5"
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
          <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-brand-600 transition-colors">
            CommUnity
          </span>
        </Link>

        {/* Primary Navigation Links */}
        <Navlink />

        {/* User Profile / Profile CTA */}
        <div className="flex items-center gap-4" data-purpose="user-actions">
          <Navbtn />
        </div>
      </div>
    </header>
  );
};

export default Navber;
