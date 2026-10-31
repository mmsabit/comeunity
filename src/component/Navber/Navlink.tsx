'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = () => {
    const pathname = usePathname()
    return (
        <nav
            className="hidden lg:flex items-center gap-space-lg ml-space-sm"
            data-active-classes="text-primary-container font-label-md"
          >
            <Link
              className={` text-on-surface-variant hover:text-on-surface transition-colors py-1 ${pathname === '/' ? 'text-primary font-semibold' : ''}`}
              href="/"
            >
              Home
            </Link>
            <Link
              className= {`text-on-surface-variant hover:text-on-surface transition-colors py-1 ${pathname === '/upcomingevent' ? 'text-primary font-semibold' : ''}`}
              href="/upcomingevent"
            >
              Upcoming Events
            </Link>
            <Link
              className= {`text-on-surface-variant hover:text-on-surface transition-colors py-1 ${pathname === '/event' ? 'text-primary font-semibold' : ''}`}
              href="/event"
            >
              All Events
            </Link>
          </nav>
    );
};

export default Navlink;