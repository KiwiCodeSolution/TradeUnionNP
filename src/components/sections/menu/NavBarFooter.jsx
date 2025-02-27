"use client";

import { usePathname } from "next/navigation";
import { Link } from "@/navigation";

const NavBarFooter = ({ navItems, aboutLinks, titleLinks, titleAboutLinks, locale }) => {
  const pathname = usePathname();
  const normalizedPath = pathname.replace(`/${locale}`, "");

  const LinkItem = ({ link, title }) => {
    const isActive = normalizedPath === link;

    return (
      <Link
        href={link}
        className={`text-base border-b-2 leading-[22px] ${
          isActive
            ? "border-red text-red"
            : "text-grey border-transparent hover:border-red hover:text-red"
        }`}
      >
        {title}
      </Link>
    );
  };
  return (
    <>
      <nav className="w-fit flex flex-col items-center md:items-start justify-start gap-y-2">
        <h3 className="text-base text-liteGrey mb-3 uppercase">{titleLinks}</h3>
        {navItems.map(el => (
          <LinkItem link={el.link} title={el.title} key={el.link} />
        ))}
      </nav>
      <nav className="w-fit flex flex-col items-center md:items-start justify-start gap-y-2">
        <h3 className="text-base text-liteGrey mb-3 uppercase">{titleAboutLinks}</h3>
        {aboutLinks.map(el => (
          <LinkItem link={el.link} title={el.title} key={el.link} />
        ))}
      </nav>
    </>
  );
};

export default NavBarFooter;
