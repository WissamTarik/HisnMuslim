"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      dir="rtl"
      className="
        sticky top-0 z-50
        border-b border-slate-200/70 dark:border-slate-800
        bg-white/90 dark:bg-slate-900/90
        backdrop-blur-md
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <DesktopMenu />

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden cursor-pointer"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      <MobileMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </header>
  );
}