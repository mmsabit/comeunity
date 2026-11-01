'use client'
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import {
  MdAdd,
  MdCalendarMonth,
  MdConfirmationNumber,
  MdLogout,
} from "react-icons/md";
import { toast, Bounce } from "react-toastify";

const Navbtn = () => {
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
    redirect("/signin")
  };

  const { data: session } = authClient.useSession();
  const user = session?.user;
  if (user) {
    return (        
        <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className="relative flex items-center cursor-pointer p-0.5 rounded-full hover:ring-2 hover:ring-primary-container/20 transition-all"
          >
            <Image
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
              height={32}
              src={user.image || "@/public/placeholder.png"}
              width={32}
            />
          </div>

          <div
            tabIndex={-1}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm right-0"
          >
            <div className="px-3 py-2.5 bg-surface-container-low rounded-lg mb-space-xs">
              <p className="font-label-md text-label-md text-on-surface font-semibold truncate">
                {user.name}
              </p>
              <p className="font-caption text-caption text-on-surface-variant truncate">
                {user.email}
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
              className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-error hover:bg-error-container hover:text-on-error-container font-label-md text-label-md transition-colors text-left cursor-pointer"
              id="profile-logout-btn"
              type="button"
              onClick={handleSignOut}
            >
              <MdLogout className="text-error text-[20px]" />
              <span>Logout</span>
            </button>
          </div>
        </div>
    )}
      
  return (
    <div>
      <div
        className="relative flex items-center gap-space-sm"
        id="auth-view-container"
      >
        <div className="flex items-center gap-2" id="logged-out-slot">
          <Link className="btn btn-ghost" href="/signin">
            Sign In
          </Link>
          <a className="btn btn-primary" href="/signup">
            Join Us
          </a>
        </div>      
      </div>
    </div>
  );
};

export default Navbtn;
