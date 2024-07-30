import { useTranslations } from "next-intl";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import LogoFooterUA from "@/images/logo_bottom.svg";
import LogoFooterEn from "@/images/logo_bottom_eng.svg";
import { aboutLinks, navLinks } from "@/constants/navLinks";
import { Link } from "@/navigation";
import EmailAndSocLinks from "../contacts/EmailAndSocLinks";

const Footer = ({ locale }) => {
  const t = useTranslations();
  const navItems = navLinks.slice(0, navLinks.length - 1);
  const year = new Date().getFullYear();
  return (
    <footer className="w-full flex flex-col relative">
      <Wrapper
        styles={
          "flex flex-col md:flex-row gap-y-10 md:gap-y-8 items-center md:items-start justify-between py-16"
        }
      >
        <Image
          src={locale === "uk" ? LogoFooterUA : LogoFooterEn}
          width={128}
          height={110}
          alt="логотип компанії 'Профспілка Новой пошти': червоний ромб із білою стрілкою та маленьким колом. напис червоними та чорними літерами"
          className="mb-auto"
        />
        <nav className="w-fit flex flex-col items-center md:items-start justify-start gap-y-2">
          <h3 className="text-base text-liteGrey mb-3 uppercase">
            {t(`HomePage.footer.titles.0`)}
          </h3>
          {navItems.map((el, index) => (
            <Link
              href={el.link}
              aria-label={el.aria}
              key={el.link}
              className="text-base text-grey leading-[22px]"
            >
              {t(`Root.navBarLinks.${index}.title`)}
            </Link>
          ))}
        </nav>
        <nav className="w-fit flex flex-col items-center md:items-start justify-start gap-y-2">
          <h3 className="text-base text-liteGrey mb-3 uppercase">
            {t(`HomePage.footer.titles.1`)}
          </h3>
          {aboutLinks.map((el, index) => (
            <Link
              href={el.link}
              aria-label={el.aria}
              key={el.link}
              className="text-base text-grey leading-[22px]"
            >
              {t(`Root.aboutPageLinks.${index}.title`)}
            </Link>
          ))}
        </nav>
        <EmailAndSocLinks section={"footer"} title={t(`HomePage.footer.titles.2`)} />
      </Wrapper>
      <Wrapper>
        <div className="w-full py-4 flex flex-col md:flex-row items-center md:items-start justify-between border-main border-t border-opacity-20">
          <p className="text-[15px] md:text-lg text-grey">
            ©<span>{year}</span>, {t(`HomePage.footer.rights`)}
          </p>
          <Link
            href="/uhoda-korystuvacha"
            className="text-[15px] text-red underline underline-offset-1 hover:underline-offset-4"
          >
            {t(`HomePage.footer.user_agreement`)}
          </Link>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
