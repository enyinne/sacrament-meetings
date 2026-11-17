"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/meetings", label: "Meetings" },
    { href: "/meetings/current", label: "Current Meeting" },
  ];

  return (
    <nav className="flex gap-6">
      {links.map((link) => {
        const isActive =
          pathname === link.href ||
          (link.href === "/meetings" &&
            pathname.startsWith("/meetings/") &&
            pathname !== "/meetings/current");

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 ${
             isActive
               ? "font-bold text-blue-700 underline underline-offset-4"
               : "text-gray-700 hover:text-blue-700"
           }`}    
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}