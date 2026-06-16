"use client";

import { NAVLINKS } from "@/constants/navlink";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type TMobileMenuProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function MobileMenu({
  isOpen,
  setIsOpen,
}: TMobileMenuProps) {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 bg-black/40 z-40 lg:hidden"
      />

      <div className="fixed top-16 right-0 left-0 z-50 lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-lg animate-in slide-in-from-top-4 duration-200">
        <div className="p-4 space-y-2">
          {NAVLINKS.map((link) => {
            const isActive =
              pathname === link.href ||
              pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={clsx(
                  "block rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-emerald-600 text-white"
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}