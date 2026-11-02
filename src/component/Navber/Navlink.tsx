'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = () => {
  const pathname = usePathname();

  return (
    <nav
      className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600"
      data-purpose="primary-navigation"
    >
      <Link
        className={`transition-colors py-1 ${
          pathname === "/"
            ? "text-brand-600 font-semibold relative after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-0.5 after:bg-brand-600 after:rounded-full"
            : "hover:text-slate-900"
        }`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={`transition-colors py-1 ${
          pathname === "/upcomingevent"
            ? "text-brand-600 font-semibold relative after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-0.5 after:bg-brand-600 after:rounded-full"
            : "hover:text-slate-900"
        }`}
        href="/upcomingevent"
      >
        Upcoming Events
      </Link>
      <Link
        className={`transition-colors py-1 ${
          pathname === "/event"
            ? "text-brand-600 font-semibold relative after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-0.5 after:bg-brand-600 after:rounded-full"
            : "hover:text-slate-900"
        }`}
        href="/event"
      >
        All Events
      </Link>
    </nav>
  );
};

export default Navlink;
