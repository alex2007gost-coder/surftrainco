"use client";

import { usePathname } from "next/navigation";
import HashLink from "@/components/HashLink";
import { navLinks } from "@/lib/data";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="rounded-full border border-navy/20 bg-white p-[4px]">
      <ul className="flex">
        {navLinks.map((link) => {
          const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

          return (
            <li key={link.label}>
              <HashLink
                href={link.href}
                className={`flex h-[51px] items-center rounded-full px-[21.5px] text-[16px] transition-colors ${
                  isActive ? "bg-navy text-white" : "hover:bg-light"
                }`}
              >
                {link.label}
              </HashLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
