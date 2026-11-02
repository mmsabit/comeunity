'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Upcoming Events", href: "/upcomingevent" },
  { name: "All Events", href: "/event" },
];

const Navlink = () => {
  const pathname = usePathname();

  return (
    <nav
      className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600"
      data-purpose="primary-navigation"
    >
      {NAV_LINKS.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            className={`transition-colors py-1 ${
              isActive
                ? "text-brand-600 font-semibold relative after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-0.5 after:bg-brand-600 after:rounded-full"
                : "hover:text-slate-900"
            }`}
            href={item.href}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navlink;
