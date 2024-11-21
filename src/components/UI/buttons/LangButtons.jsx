"use client";

import { usePathname } from "next/navigation";
import { Link } from "@/navigation";

const LangButtons = ({ locale }) => {
  const pathname = usePathname();

  const pathSegments = pathname.split("/").filter(Boolean);

  if (pathSegments[0] === "uk" || pathSegments[0] === "en") {
    pathSegments.shift();
  }

  const pathWithoutLocale = pathSegments.join("/");

  const newPathForUk = `/${pathWithoutLocale}`;
  const newPathForEn = `/${pathWithoutLocale}`;

  return (
    <div className="flex gap-x-1">
      <Link
        className={`text-red uppercase ${locale === "uk" ? "border-b border-b-red" : ""}`}
        href={newPathForUk} // Оновлений шлях для української локалі
        locale="uk"
      >
        ua
      </Link>
      <Link
        className={`text-red uppercase ${locale === "en" ? "border-b border-b-red" : ""}`}
        href={newPathForEn} // Оновлений шлях для англійської локалі
        locale="en"
      >
        en
      </Link>
    </div>
  );
};

export default LangButtons;
