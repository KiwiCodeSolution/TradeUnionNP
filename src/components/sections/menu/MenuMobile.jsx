"use client";

import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { navLinks } from "@/constants/navLinks";
import Link from "next/link";

const MenuMobile = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const navItems = navLinks.slice(1, navLinks.length);

  return (
    <nav className="w-full">
      <button onClick={() => toggleOpen()}>toggle</button>
      {isOpen && (
        <div className="flex flex-col bg-red w-full text-white">
          <Link
            href={navLinks[0].link}
            aria-label={navLinks[0].aria}
            className="leading-loose border-transparent hover:border-red hover:text-red border-b-2"
          >
            {navLinks[0].name}
          </Link>
          {navItems.map(el => (
            <Link
              href={el.link}
              aria-label={el.aria}
              key={el.link}
              className="leading-loose border-transparent hover:border-red hover:text-red border-b-2"
            >
              {el.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default MenuMobile;
