import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import LogoFooter from "@/images/logo_bottom.svg";
import { aboutLinks, navLinks } from "@/constants/navLinks";
import Link from "next/link";
import FooterContacts from "../contacts/FooterContacts";

const Footer = () => {
  const navItems = navLinks.slice(0, navLinks.length - 1);
  return (
    <footer className="w-full py-16">
      <Wrapper styles={"flex flex-col xl:flex-row gap-y-10 md:gap-y-8 justify-between"}>
        <Image
          src={LogoFooter}
          width={128}
          height={110}
          alt="логотип компанії 'Профспілка Новой пошти': червоний ромб із білою стрілкою та маленьким колом. напис червоними та чорними літерами"
          className="w-fit mx-auto"
        />
        <nav className="w-fit flex flex-col items-center mx-auto gap-y-2">
          {navItems.map(el => (
            <Link href={el.link} aria-label={el.aria} key={el.link} className="text-base text-grey">
              {el.name}
            </Link>
          ))}
        </nav>
        <nav className="w-fit flex flex-col items-center mx-auto gap-y-2">
          {aboutLinks.map(el => (
            <Link href={el.link} aria-label={el.aria} key={el.link} className="text-base text-grey">
              {el.name}
            </Link>
          ))}
        </nav>
        <FooterContacts />
      </Wrapper>
    </footer>
  );
};

export default Footer;
