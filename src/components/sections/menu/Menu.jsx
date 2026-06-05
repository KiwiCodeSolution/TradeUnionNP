import SearchInput from "@/components/UI/form/SearchInput";
import LogoEn from "@/images/logo-eng.svg";
import LogoUA from "@/images/logo.svg";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import LangButtons from "../../UI/buttons/LangButtons";
import EmailAndSocLinks from "../contacts/EmailAndSocLinks";

import MenuMobile from "./MenuMobile";
import NavBar from "./NavBar";

import Ticker from "@/components/Ticker";

const Menu = ({ locale }) => {
  const t = useTranslations();

  const navItems = [
    { title: t("Root.navBarLinks.0.title"), link: "/pro-nas" },
    { title: t("Root.navBarLinks.1.title"), link: "/blanky" },
    { title: t("Root.navBarLinks.2.title"), link: "/novyny" },
    { title: t("Root.navBarLinks.3.title"), link: "/foto" },
    { title: t("Root.navBarLinks.4.title"), link: "/kontakty" },
  ];

  const tgMessages = [
    t("BotsTexts.telegram_header.0"),
    t("BotsTexts.telegram_header.1"),
    t("BotsTexts.telegram_header.2"),
  ];

  const vbMessages = [
    t("BotsTexts.viber_header.0"),
    t("BotsTexts.viber_header.1"),
    t("BotsTexts.viber_header.2"),
  ];

  return (
    <>
      <div className="w-full xl:w-[1280px] px-8 md:px-4 xl:px-10 mx-auto flex flex-col md:flex-row relative pb-12 md:pb-0 pt-1 md:pt-0">
        <div className="w-full flex items-center justify-between xl:gap-x-3">
          <MenuMobile locale={locale} />
          <Link href="/" className="w-[190px] md:h-20 flex items-center justify-between">
            <Image
              src={locale === "uk" ? LogoUA : LogoEn}
              height={80}
              className="w-[186px] h-16"
              alt="Зображення логотипу Профспілки 'Нова Пошта'"
            />
          </Link>
          <NavBar locale={locale} navItems={navItems} />

          <SearchInput />
          <EmailAndSocLinks />
          <LangButtons locale={locale} />
        </div>
        <SearchInput size={"mobile"} />
      </div>
      {/* <RunningLineChatBot locale={locale} /> */}
      <Ticker tgMessages={tgMessages} vbMessages={vbMessages} />
    </>
  );
};

export default Menu;
