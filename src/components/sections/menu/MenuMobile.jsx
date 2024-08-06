"use client";
import { useTranslations } from "next-intl";
import MenuMobileItems from "./MenuMobileItems";

const MenuMobile = ({ locale }) => {
  const t = useTranslations("Root");

  const navLinks = [
    {
      name: t(`navBarLinks.0.title`),
      link: "/pro-nas",
      aria: "",
    },
    {
      name: t(`navBarLinks.1.title`),
      link: "/blanky",
      aria: "",
    },
    {
      name: t(`navBarLinks.2.title`),
      link: "/novyny",
      aria: "",
    },
    {
      name: t(`navBarLinks.3.title`),
      link: "/foto",
      aria: "",
    },
    {
      name: t(`navBarLinks.4.title`),
      link: "/kontakty",
      aria: "",
    },
  ];

  const aboutLinks = [
    {
      name: t(`aboutPageLinks.0.title`),
      link: "/kolektyvnyy-dohovir",
    },
    {
      name: t(`aboutPageLinks.1.title`),
      link: "/ppo",
      aria: "посилання на сторінку колективних договорів",
    },
    {
      name: t(`aboutPageLinks.2.title`),
      link: "/zakhyst-trudovykh-prav",
      aria: "посилання на сторінку колективних договорів",
    },
    {
      name: t(`aboutPageLinks.3.title`),
      link: "/materialna-dopomoga",
      aria: "посилання на сторінку колективних договорів",
    },
    {
      name: t(`aboutPageLinks.4.title`),
      link: "/dozvillya-ta-sport",
      aria: "",
    },
    {
      name: t(`aboutPageLinks.5.title`),
      link: "/ya-profspilka",
      aria: "",
    },
    {
      name: t(`aboutPageLinks.6.title`),
      link: "/zvernennya",
      aria: "",
    },
  ];

  const navItems = navLinks.slice(1, navLinks.length);

  return (
    <nav className="w-4 md:hidden">
      <MenuMobileItems locale={locale} aboutLinks={aboutLinks} navLinks={navLinks} />
    </nav>
  );
};

export default MenuMobile;
