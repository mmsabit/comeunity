import React from "react";
import Image from "next/image";
import {
  MdAdd,
  MdCalendarMonth,
  MdConfirmationNumber,
  MdGroups,
  MdLogout,
} from "react-icons/md";
import Link from "next/link";

const Navber = () => {
  return (
    <header className="w-full z-50 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-7xl mx-auto px-margin flex items-center justify-between gap-space-md">
        {/* Logo & Main Nav */}
        <div className="flex items-center">
          <a
            className="flex items-center gap-space-xs focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
            data-path="upcoming-events"
            href="#"
          >
            <div className="w-8 h-8 rounded-lg bg-primary-container text-white flex items-center justify-center shadow-sm">
              <MdGroups className="text-[20px]" />
            </div>
            <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight font-bold ml-1.5">
              CommUnity
            </span>
          </a>
        </div>
        <div className="flex items-center">
          <nav
            className="hidden lg:flex items-center gap-space-lg ml-space-sm"
            data-active-classes="text-primary-container font-label-md"
          >
            <Link
              className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors py-1"
              href="/"
            >
              Home
            </Link>
            <Link
              className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors py-1"
              href="/upcomingevent"
            >
              Upcoming Events
            </Link>
            <Link
              className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors py-1"
              href="/allevent"
            >
              All Events
            </Link>
          </nav>
        </div>
        {/* Action CTAs & Auth Controls */}
        <div className="flex items-center">
          <div
            className="relative flex items-center gap-space-sm"
            id="auth-view-container"
          >
            {/* Demo Toggle Button */}

            {/* Logged Out Slot */}

            <div className="flex items-center gap-2" id="logged-out-slot">
              <a
                className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface px-3 py-2 rounded-lg transition-colors"
                data-path="login"
                href="#"
              >
                Sign In
              </a>
              <a
                className="font-label-md text-label-md bg-primary-container text-white hover:bg-primary px-4 py-2 rounded-lg transition-all font-semibold shadow-[0_1px_3px_0_rgba(0,0,0,0.04)]"
                data-path="login"
                href="#"
              >
                Join Us
              </a>
            </div>

            {/* Logged In Slot */}
            <div
              className="relative group flex items-center"
              id="logged-in-slot"
            >
              <div
                aria-expanded="false"
                aria-haspopup="true"
                className="relative flex items-center cursor-pointer p-0.5 rounded-full hover:ring-2 hover:ring-primary-container/20 transition-all"
                tabIndex={0}
              >
                <Image
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover"
                  height={32}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD79Z8TUSZBlAYqHhde3yJl3cHreaX3NqzemOCN8HBju0lMP0biblMMYOvAS1VSF-E_7A_6SC4t8mOGcSKncD65vNawuh7wlO5vg8x3-HryrOTyuGgJKlbizKT8aKEIcYEU7-6Lg4Zr_81hIG-02--_zBRrBeis26Nx5EJSKtsKz1AimL-Q3GxeUfQKIEwep3bj_RvQN6jYir0nawCldqpcfIMaAE_VAX5dgfSZ8p8"
                  width={32}
                />
              </div>

              {/* Profile Dropdown */}
              <div className="absolute right-0 top-full mt-2 w-64 bg-surface-container-lowest rounded-xl shadow-[0_20px_25px_-5px_rgba(0,0,0,0.07),0_8px_10px_-6px_rgba(0,0,0,0.04)] p-space-sm hidden group-hover:block hover:block focus-within:block z-50 animate-in fade-in slide-in-from-top-1">
                <div className="px-3 py-2.5 bg-surface-container-low rounded-lg mb-space-xs">
                  <p className="font-label-md text-label-md text-on-surface font-semibold truncate">
                    Sarah Jenkins
                  </p>
                  <p className="font-caption text-caption text-on-surface-variant truncate">
                    sarah.j@community.org
                  </p>
                </div>

                <div className="py-1 flex flex-col gap-0.5">
                  <a
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-label-md text-label-md transition-colors"
                    data-path="create-event"
                    href="#"
                  >
                    <MdAdd className="text-primary-container text-[20px]" />
                    <span>Create Event</span>
                  </a>
                  <a
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-label-md text-label-md transition-colors"
                    data-path="manage-events"
                    href="#"
                  >
                    <MdCalendarMonth className="text-on-surface-variant text-[20px]" />
                    <span>Manage Events</span>
                  </a>
                  <a
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-label-md text-label-md transition-colors"
                    data-path="joined-events"
                    href="#"
                  >
                    <MdConfirmationNumber className="text-on-surface-variant text-[20px]" />
                    <span>Joined Events</span>
                  </a>
                </div>

                <div className="my-1.5 h-px bg-surface-container-high"></div>

                <button
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-error hover:bg-error-container hover:text-on-error-container font-label-md text-label-md transition-colors text-left"
                  id="profile-logout-btn"
                  type="button"
                >
                  <MdLogout className="text-error text-[20px]" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navber;
