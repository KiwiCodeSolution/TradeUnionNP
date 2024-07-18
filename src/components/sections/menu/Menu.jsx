import { useTranslations } from "next-intl";
import { navLinks } from "@/constants/navLinks";
import LogoUA from "@/images/logo.svg";
import LogoEn from "@/images/logo-eng.svg";

import Image from "next/image";
import { Link } from "@/navigation";
import LangButtons from "../../UI/buttons/LangButtons";
import MenuMobile from "./MenuMobile";
import Wrapper from "@/components/Wrapper";
import SearchInput from "@/components/UI/form/SearchInput";
import EmailAndSocLinks from "../contacts/EmailAndSocLinks";

const Menu = ({ locale }) => {
  const t = useTranslations("Root");
  const navItems = navLinks.slice(0, navLinks.length - 1);

  return (
    <Wrapper styles="flex items-center justify-between xl:gap-x-3">
      <MenuMobile locale={locale} />
      <Link href="/" className="w-[190px] md:h-20 flex items-center justify-between">
        <Image
          src={locale === "uk" ? LogoUA : LogoEn}
          height={80}
          className="w-[186px] h-16"
          alt="Зображення логотипу Профспілки 'Нова Пошта'"
        />
      </Link>

      <nav className="w-fit hidden md:flex items-center h-20 mx-auto gap-x-3">
        {navItems.map((el, index) => (
          <Link
            href={el.link}
            key={el.link}
            className="leading-loose border-transparent hover:border-red hover:text-red border-b-2"
            locale={locale}
          >
            {t(`navBarLinks.${index}.title`)}
          </Link>
        ))}
      </nav>
      <SearchInput />
      <EmailAndSocLinks />
      <LangButtons locale={locale} />
    </Wrapper>
  );
};

export default Menu;
