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
import Navlink from "./Navlink";

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
          <Navlink/>
        </div>
        {/* Action CTAs & Auth Controls */}
        <div className="flex items-center">
          <div
            className="relative flex items-center gap-space-sm"
            id="auth-view-container"
          >

            {/* Logged Out Slot */}

            <div className="flex items-center gap-2" id="logged-out-slot">
              <Link
                className="btn btn-ghost"
                href="/signin"
              >
                Sign In
              </Link>
              <a
                className="btn btn-primary"
                
                href="/signup"
              >
                Join Us
              </a>
            </div>

            {/* Logged In Slot */}
            <div
              className="dropdown dropdown-hover"
              
            >
              <div
                tabIndex={0} role="button"
                className="relative flex items-center cursor-pointer p-0.5 rounded-full hover:ring-2 hover:ring-primary-container/20 transition-all"
                
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
              <div tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm right-0" >
                <div className="px-3 py-2.5 bg-surface-container-low rounded-lg mb-space-xs">
                  <p className="font-label-md text-label-md text-on-surface font-semibold truncate">
                    Sarah Jenkins
                  </p>
                  <p className="font-caption text-caption text-on-surface-variant truncate">
                    sarah.j@community.org
                  </p>
                </div>

                <div className="py-1 flex flex-col gap-0.5">
                  <Link
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-label-md text-label-md transition-colors"
                    data-path="create-event"
                    href="/new_event"
                  >
                    <MdAdd className="text-primary-container text-[20px]" />
                    <span>Create Event</span>
                  </Link>
                  <Link
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-label-md text-label-md transition-colors"
                    data-path="manage-events"
                    href="/myevent"
                  >
                    <MdCalendarMonth className="text-on-surface-variant text-[20px]" />
                    <span>Manage Events</span>
                  </Link>
                  <Link
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-label-md text-label-md transition-colors"
                    data-path="joined-events"
                    href="/joined_event"
                  >
                    <MdConfirmationNumber className="text-on-surface-variant text-[20px]" />
                    <span>Joined Events</span>
                  </Link>
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
