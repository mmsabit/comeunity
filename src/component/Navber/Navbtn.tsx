'use client';

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  MdAdd,
  MdCalendarMonth,
  MdConfirmationNumber,
  MdLogout,
  MdPersonOutline,
} from "react-icons/md";
import { toast, Bounce } from "react-toastify";

const Navbtn = () => {
  const router = useRouter();

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

  const { data: session } = authClient.useSession();
  const user = session?.user;

  if (user) {
    return (
      <div className="dropdown dropdown-hover dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="relative group p-0.5 rounded-full ring-2 ring-transparent hover:ring-brand-500/30 transition-all focus:outline-none focus:ring-2 focus:ring-brand-600 cursor-pointer"
        >
          <Image
            alt={user.name || "User avatar profile"}
            className="h-9 w-9 sm:h-10 sm:w-10 rounded-full object-cover ring-2 ring-white shadow-sm"
            height={100}
            src={user.image || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"}
            width={100}
            unoptimized
          />
        </div>

        <div
          tabIndex={-1}
          className="dropdown-content menu bg-white rounded-2xl z-50 w-60 p-3 shadow-card border border-slate-200/80"
        >
          <div className="px-3.5 py-3 bg-slate-50 border border-slate-100 rounded-xl mb-2">
            <p className="text-sm font-bold text-slate-900 truncate">
              {user.name}
            </p>
            <p className="text-xs text-slate-500 truncate mt-0.5">
              {user.email}
            </p>
          </div>

          <div className="py-1 flex flex-col gap-1">
            <Link
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-slate-700 hover:bg-brand-50 hover:text-brand-600 text-sm font-medium transition-colors"
              href="/profile"
            >
              <div className="w-6 h-6 rounded-lg bg-indigo-50 text-brand-600 flex items-center justify-center">
                <MdPersonOutline className="text-base" />
              </div>
              <span>My Profile</span>
            </Link>
            <Link
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-slate-700 hover:bg-brand-50 hover:text-brand-600 text-sm font-medium transition-colors"
              data-path="create-event"
              href="/new_event"
            >
              <div className="w-6 h-6 rounded-lg bg-indigo-50 text-brand-600 flex items-center justify-center">
                <MdAdd className="text-base" />
              </div>
              <span>Create Event</span>
            </Link>
            <Link
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-slate-700 hover:bg-brand-50 hover:text-brand-600 text-sm font-medium transition-colors"
              data-path="manage-events"
              href="/myevent"
            >
              <div className="w-6 h-6 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center">
                <MdCalendarMonth className="text-base" />
              </div>
              <span>Manage Events</span>
            </Link>
            <Link
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-slate-700 hover:bg-brand-50 hover:text-brand-600 text-sm font-medium transition-colors"
              data-path="joined-events"
              href="/joined_event"
            >
              <div className="w-6 h-6 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center">
                <MdConfirmationNumber className="text-base" />
              </div>
              <span>Joined Events</span>
            </Link>
          </div>

          <div className="my-2 h-px bg-slate-100"></div>

          <button
            className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-rose-600 hover:bg-rose-50 text-sm font-semibold transition-colors text-left cursor-pointer"
            id="profile-logout-btn"
            type="button"
            onClick={handleSignOut}
          >
            <MdLogout className="text-base" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 sm:gap-2.5">
      <Link
        className="hidden sm:inline-flex px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100/70 rounded-xl transition-colors"
        href="/signin"
      >
        Sign In
      </Link>
      <Link
        className="items-center justify-center px-3.5 sm:px-4.5 py-2 text-xs sm:text-sm font-semibold text-white bg-linear-to-r from-brand-600 to-indigo-600 hover:from-brand-700 hover:to-indigo-700 rounded-xl shadow-sm hover:shadow transition-all whitespace-nowrap hidden sm:inline-flex"
        href="/signup"
      >
        Join Us
      </Link>
    </div>
  );
};

export default Navbtn;
