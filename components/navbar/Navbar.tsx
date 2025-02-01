"use client";

import React, { Suspense } from "react";
import Logo from "./Logo";
import CartButton from "./CartButton";
import DarkMode from "./DarkMode";
import LinksDropdown from "./LinksDropdown";
import NavSearch from "./NavSearch";
import { NavLinks } from "@/utils/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import BrowseCategories from "./BrowseCategories";

function Navbar() {
  const pathname = usePathname();
  return (
    <header className="border-b font-sans min-h-[60px] py-8 tracking-wide relative z-50">
      <div className="flex flex-wrap items-center max-lg:gap-y-6 max-sm:gap-x-4">
        <Logo />
        <div className="max-lg:hidden lg:!flex lg:items-center max-lg:before:fixed max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50">
          <ul className="lg:flex lg:gap-x-10 lg:absolute lg:left-1/2 lg:-translate-x-1/2 max-lg:space-y-3 max-lg:fixed max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:px-10 max-lg:py-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            {NavLinks.map((link) => (
              <li key={link.href} className="max-lg:border-b max-lg:py-3">
                <Link
                  href={link.href}
                  className={clsx(
                    "hover:text-primary text-base block capitalize",
                    { "text-primary font-bold": pathname === link.href }
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center ml-auto space-x-3">
          <CartButton />
          <DarkMode />
          <LinksDropdown />
        </div>
      </div>

      <div className="flex items-center mt-6 gap-x-5">
        <BrowseCategories />
        <Suspense>
          <NavSearch />
        </Suspense>
      </div>
    </header>
  );
}

export default Navbar;
