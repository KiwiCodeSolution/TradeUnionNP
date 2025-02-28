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
      aria: "посилання на сторінку про колективну угоду",
    },
    {
      name: t(`aboutPageLinks.1.title`),
      link: "/yak-vstupyty",
      aria: "посилання на сторінку про те, як вступити у Профспілку",
    },
    {
      name: t(`aboutPageLinks.2.title`),
      link: "/ppo",
      aria: "посилання на сторінку регіональних підрозділів",
    },
    {
      name: t(`aboutPageLinks.3.title`),
      link: "/zakhyst-trudovykh-prav",
      aria: "посилання на сторінку про захист трудових прав",
    },
    {
      name: t(`aboutPageLinks.4.title`),
      link: "/materialna-dopomoga",
      aria: "посилання на сторінку про матеріальну допомогу",
    },
    {
      name: t(`aboutPageLinks.5.title`),
      link: "/dozvillya-ta-sport",
      aria: "посилання на сторінку дозвілля та спорт",
    },
    {
      name: t(`aboutPageLinks.6.title`),
      link: "/ya-profspilka",
      aria: "посилання на сторінку",
    },
    {
      name: t(`aboutPageLinks.7.title`),
      link: "/zvernennya",
      aria: "посилання на сторінку про звернення учасників",
    },
    {
      name: t(`aboutPageLinks.8.title`),
      link: "/ozdorovlennya",
      aria: "посилання на сторінку про варіанти для оздоровлення",
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
