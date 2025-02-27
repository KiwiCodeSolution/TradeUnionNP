import { useTranslations } from "next-intl";
import Wrapper from "../../Wrapper";
import NavBar from "./NavBar";

const MenuAbout = ({ locale }) => {
  const t = useTranslations("Root");

  const aboutLinks = [
    { title: t("aboutPageLinks.0.title"), link: "/kolektyvnyy-dohovir" },
    { title: t("aboutPageLinks.1.title"), link: "/yak-vstupyty" },
    { title: t("aboutPageLinks.2.title"), link: "/ppo" },
    { title: t("aboutPageLinks.3.title"), link: "/zakhyst-trudovykh-prav" },
    { title: t("aboutPageLinks.4.title"), link: "/materialna-dopomoga" },
    { title: t("aboutPageLinks.5.title"), link: "/dozvillya-ta-sport" },
    { title: t("aboutPageLinks.6.title"), link: "/ya-profspilka" },
    { title: t("aboutPageLinks.7.title"), link: "/zvernennya" },
    { title: t("aboutPageLinks.8.title"), link: "/ozdorovlennya" },
  ];

  const links = locale === "en" ? aboutLinks.filter(el => el.link !== "/ppo") : aboutLinks;

  return (
    <div className="hidden md:block w-full bg-bgBlack">
      <Wrapper>
        <NavBar locale={locale} navItems={links} section={"about"} />
      </Wrapper>
    </div>
  );
};

export default MenuAbout;
