"use client";

import { Link } from "@/navigation";
import { usePathname } from "next/navigation";

const NavBar = ({ locale, navItems, section }) => {
  const pathname = usePathname();
  const normalizedPath = pathname.replace(`/${locale}`, "");

  return section === "about" ? (
    <nav className="w-full flex items-center justify-between min-h-10 gap-x-3 md:gap-x-1 xl:gap-x-3">
      {navItems.map((el, index) => {
        const isActive = normalizedPath === el.link;

        return (
          <Link
            href={el.link}
            key={el.link}
            className={`text-[15px] text-white text-center ${
              isActive ? "text-opacity-100" : "text-opacity-60 hover:text-opacity-100"
            }`}
            locale={locale}
          >
            {el.title}
          </Link>
        );
      })}
    </nav>
  ) : (
    <nav className="w-fit hidden md:flex items-center h-20 mx-auto gap-x-3 relative z-10">
      {navItems.map(el => {
        const isActive = normalizedPath === el.link;

        return (
          <Link
            href={el.link}
            key={el.link}
            className={`leading-loose border-b-2 ${
              isActive
                ? "border-red text-red"
                : "border-transparent hover:border-red hover:text-red"
            }`}
            locale={locale}
          >
            {el.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavBar;
