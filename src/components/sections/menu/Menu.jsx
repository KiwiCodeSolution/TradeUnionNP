import { navLinks } from "@/constants/navLinks";
import Logo from "@/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import LangButtons from "../../UI/buttons/LangButtons";
import MenuMobile from "./MenuMobile";
import Wrapper from "@/components/Wrapper";
import SearchInput from "@/components/UI/form/SearchInput";
import EmailAndSocLinks from "../contacts/EmailAndSocLinks";

const Menu = () => {
  const navItems = navLinks.slice(0, navLinks.length - 1);
  return (
    <Wrapper styles="flex items-center justify-between xl:gap-x-3">
      <MenuMobile />
      <Link href="/" className="w-[190px] md:h-20 flex items-center justify-between">
        <Image
          src={Logo}
          height={80}
          className="w-[186px] h-16"
          alt="Зображення логотипу Профспілки 'Нова Пошта'"
        />
      </Link>

      <nav className="w-fit hidden md:flex items-center h-20 mx-auto gap-x-3">
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
      </nav>
      <SearchInput />
      <EmailAndSocLinks />
      <LangButtons />
    </Wrapper>
  );
};

export default Menu;
