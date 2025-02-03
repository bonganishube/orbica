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
  return (
    <header className="font-sans min-h-[60px] py-8 tracking-wide relative z-50">
      <div className="flex flex-wrap items-center max-lg:gap-y-6 max-sm:gap-x-4">
        <Logo />
        <div className="max-xl:hidden xl:!flex xl:items-center max-xl:before:fixed max-xl:before:opacity-40 max-xl:before:inset-0 max-xl:before:z-50">
          <ul className="xl:flex xl:gap-x-10 xl:absolute xl:left-1/2 xl:-translate-x-1/2 max-xl:space-y-3 max-xl:fixed max-xl:w-2/3 max-xl:min-w-[300px] max-xl:top-0 max-xl:left-0 max-xl:px-10 max-xl:py-4 max-xl:h-full max-xl:shadow-md max-xl:overflow-auto z-50">
            {NavLinks.map((link) => (
              <li key={link.href} className="max-xl:border-b max-xl:py-3">
                <Link
                  href={link.href}
                  className="text-base block capitalize hover:text-primary hover:font-bold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center ml-auto space-x-5">
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
