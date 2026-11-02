"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  MdMenu,
  MdClose,
  MdHome,
  MdEvent,
  MdExplore,
  MdAdd,
  MdCalendarMonth,
  MdConfirmationNumber,
  MdLogout,
} from "react-icons/md";
import Navlink, { NAV_LINKS } from "./Navlink";
import Navbtn from "./Navbtn";
import { authClient } from "@/lib/auth-client";
import { toast, Bounce } from "react-toastify";

const themeListeners = new Set<() => void>();

const subscribeToTheme = (listener: () => void) => {
  themeListeners.add(listener);
  return () => themeListeners.delete(listener);
};

const getThemeSnapshot = () =>
  document.documentElement.dataset.theme === "dark";

const getServerThemeSnapshot = () => false;

const setTheme = (theme: "light" | "dark") => {
  document.documentElement.dataset.theme = theme;
  themeListeners.forEach((listener) => listener());

  try {
    window.localStorage.setItem("theme", theme);
  } catch (error) {
    console.error("Unable to save the theme preference.", error);
  }
};

const Navber = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isDarkMode = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );
  const pathname = usePathname();
  const router = useRouter();

  const { data: session } = authClient.useSession();
  const user = session?.user;

  useEffect(() => {
    let savedTheme: string | null = null;
    try {
      savedTheme = window.localStorage.getItem("theme");
    } catch (error) {
      console.error("Unable to read the saved theme preference.", error);
    }

    const theme = savedTheme === "dark" ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
    themeListeners.forEach((listener) => listener());
  }, []);

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  // Auto-close mobile menu on route change (React-recommended state adjustment during render)
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSignOut = async () => {
    await authClient.signOut();
    toast.success("Successfully signed out", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    router.push("/signin");
  };

  const getNavIcon = (href: string) => {
    switch (href) {
      case "/":
        return <MdHome className="text-lg" />;
      case "/upcomingevent":
        return <MdEvent className="text-lg" />;
      case "/event":
        return <MdExplore className="text-lg" />;
      default:
        return null;
    }
  };

  return (
    <header
      className="sticky top-0 z-50 glass-nav border-b border-slate-200/70 transition-all duration-200"
      data-purpose="site-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-lg p-1 shrink-0"
          data-purpose="brand-logo"
          href="/"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-linear-to-tr from-brand-600 via-indigo-600 to-purple-500 flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform duration-200">
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
          <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 group-hover:text-brand-600 transition-colors">
            CommUnity
          </span>
        </Link>

        {/* Primary Desktop Navigation Links (hidden on mobile, visible on md and up) */}
        <Navlink />

        {/* Header Actions: User Profile / CTA + Mobile Hamburger Toggle */}
        <div
          className="flex items-center gap-2 sm:gap-4"
          data-purpose="user-actions"
        >
          {/* Dark Vision toggle button */}

          <label className="swap swap-rotate">
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={toggleTheme}
              aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
            />

            {/* sun icon */}
            <svg
              className="swap-on h-5 w-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off h-5 w-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          <Navbtn />

          {/* Mobile Hamburger Toggle Button (visible on mobile, hidden on md and up) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl text-slate-700 hover:text-brand-600 hover:bg-slate-100/80 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? (
              <MdClose className="w-6 h-6" />
            ) : (
              <MdMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer / Dropdown */}
      {mobileMenuOpen && (
        <div
          className="md:hidden border-t border-slate-200/80 bg-white/95 backdrop-blur-xl px-4 py-5 shadow-xl transition-all"
          data-purpose="mobile-navigation absolute w-full"
        >
          {/* Primary Nav Links */}
          <div className="space-y-1">
            <p className="px-3 pb-1 text-xs font-bold text-slate-400 uppercase tracking-wider">
              Navigation
            </p>
            {NAV_LINKS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-brand-50 text-brand-600"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={isActive ? "text-brand-600" : "text-slate-400"}
                    >
                      {getNavIcon(item.href)}
                    </span>
                    <span>{item.name}</span>
                  </div>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-brand-600"></span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* User Profile or Auth CTA in Mobile Menu */}
          {user ? (
            <div className="mt-5 pt-4 border-t border-slate-100">
              <div className="px-3.5 py-3 mb-2 bg-slate-50 border border-slate-100 rounded-xl flex items-center gap-3">
                <Image
                  alt={user.name || "User avatar profile"}
                  className="h-10 w-10 rounded-full object-cover ring-2 ring-white shrink-0"
                  height={40}
                  src={
                    user.image ||
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                  }
                  width={40}
                  unoptimized
                />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-slate-900 truncate">
                    {user.name}
                  </p>
                  <p className="text-xs text-slate-500 truncate mt-0.5">
                    {user.email}
                  </p>
                </div>
              </div>

              <div className="space-y-1">
                <Link
                  href="/new_event"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-slate-700 hover:bg-brand-50 hover:text-brand-600 text-sm font-medium transition-colors"
                >
                  <div className="w-6 h-6 rounded-lg bg-indigo-50 text-brand-600 flex items-center justify-center">
                    <MdAdd className="text-base" />
                  </div>
                  <span>Create Event</span>
                </Link>
                <Link
                  href="/myevent"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-slate-700 hover:bg-brand-50 hover:text-brand-600 text-sm font-medium transition-colors"
                >
                  <div className="w-6 h-6 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center">
                    <MdCalendarMonth className="text-base" />
                  </div>
                  <span>Manage Events</span>
                </Link>
                <Link
                  href="/joined_event"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-slate-700 hover:bg-brand-50 hover:text-brand-600 text-sm font-medium transition-colors"
                >
                  <div className="w-6 h-6 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center">
                    <MdConfirmationNumber className="text-base" />
                  </div>
                  <span>Joined Events</span>
                </Link>
              </div>

              <div className="my-2.5 h-px bg-slate-100"></div>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleSignOut();
                }}
                className="w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-rose-600 hover:bg-rose-50 text-sm font-semibold transition-colors text-left cursor-pointer"
              >
                <MdLogout className="text-base" />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <Link
                href="/signin"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 px-4 text-sm font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 rounded-xl transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 px-4 text-sm font-semibold text-white bg-linear-to-r from-brand-600 to-indigo-600 hover:from-brand-700 hover:to-indigo-700 rounded-xl shadow-sm transition-all"
              >
                Join Us
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Navber;
