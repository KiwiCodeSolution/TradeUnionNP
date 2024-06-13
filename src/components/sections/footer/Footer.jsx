import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import LogoFooter from "@/images/logo_bottom.svg";
import { aboutLinks, navLinks } from "@/constants/navLinks";
import Link from "next/link";
import EmailAndSocLinks from "../contacts/EmailAndSocLinks";
import UpButton from "@/components/UI/buttons/UpButton";

const Footer = () => {
  const navItems = navLinks.slice(0, navLinks.length - 1);
  const year = new Date().getFullYear();
  return (
    <footer className="w-full flex flex-col relative">
      <Wrapper styles={"flex flex-col xl:flex-row gap-y-10 md:gap-y-8 justify-between py-16"}>
        <Image
          src={LogoFooter}
          width={128}
          height={110}
          alt="логотип компанії 'Профспілка Новой пошти': червоний ромб із білою стрілкою та маленьким колом. напис червоними та чорними літерами"
          className="w-fit mb-auto"
        />
        <nav className="w-fit flex flex-col justify-start gap-y-2">
          <h3 className="text-base text-liteGrey mb-3 uppercase">ПРО НАС</h3>
          {navItems.map(el => (
            <Link
              href={el.link}
              aria-label={el.aria}
              key={el.link}
              className="text-base text-grey leading-[22px]"
            >
              {el.name}
            </Link>
          ))}
        </nav>
        <nav className="w-fit flex flex-col justify-start gap-y-2">
          <h3 className="text-base text-liteGrey mb-3 uppercase">НАПРЯМКИ РОБОТИ</h3>
          {aboutLinks.map(el => (
            <Link
              href={el.link}
              aria-label={el.aria}
              key={el.link}
              className="text-base text-grey leading-[22px]"
            >
              {el.name}
            </Link>
          ))}
        </nav>
        <EmailAndSocLinks section={"footer"} />
      </Wrapper>
      <Wrapper>
        <div className="w-full py-4 flex items-center justify-between border-main border-t border-opacity-20">
          <p className="text-lg text-grey">
            ©<span>{year}</span>, Всі права захищено
          </p>
          <Link
            href="/uhoda-korystuvacha"
            className="text-[15px] text-red underline underline-offset-1 hover:underline-offset-4"
          >
            Угода користувача
          </Link>
        </div>
      </Wrapper>
      <UpButton />
    </footer>
  );
};

export default Footer;