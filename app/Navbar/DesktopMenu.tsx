"use client";

import { NAVLINKS } from "@/constants/navlink";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import NavbarLogo from "./NavbarLogo";

export default function DesktopMenu() {
  const pathname = usePathname();

  return (
    <>
   <NavbarLogo/>

      {/* Desktop Links */}
<div className="hidden lg:flex items-center gap-2 xl:gap-3">
          {NAVLINKS.map((link) => {
          const isActive =
            pathname === link.href ||
            pathname.startsWith(`${link.href}/`);

          return (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-emerald-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-emerald-400 dark:hover:bg-slate-800"
              )}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </>
  );
}