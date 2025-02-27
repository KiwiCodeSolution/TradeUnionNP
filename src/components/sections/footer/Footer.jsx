import { useTranslations } from "next-intl";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import LogoFooterUA from "@/images/logo_bottom.svg";
import LogoFooterEn from "@/images/logo_bottom_eng.svg";

import { Link } from "@/navigation";
import EmailAndSocLinks from "../contacts/EmailAndSocLinks";
import NavBarFooter from "../menu/NavBarFooter";

const Footer = ({ locale }) => {
  const t = useTranslations();
  const year = new Date().getFullYear();

  const aboutLinks = [
    { title: t("Root.aboutPageLinks.0.title"), link: "/kolektyvnyy-dohovir" },
    { title: t("Root.aboutPageLinks.1.title"), link: "/yak-vstupyty" },
    { title: t("Root.aboutPageLinks.2.title"), link: "/ppo" },
    { title: t("Root.aboutPageLinks.3.title"), link: "/zakhyst-trudovykh-prav" },
    { title: t("Root.aboutPageLinks.4.title"), link: "/materialna-dopomoga" },
    { title: t("Root.aboutPageLinks.5.title"), link: "/dozvillya-ta-sport" },
    { title: t("Root.aboutPageLinks.6.title"), link: "/ya-profspilka" },
    { title: t("Root.aboutPageLinks.7.title"), link: "/zvernennya" },
    { title: t("Root.aboutPageLinks.8.title"), link: "/ozdorovlennya" },
  ];

  const navItems = [
    { title: t("Root.navBarLinks.0.title"), link: "/pro-nas" },
    { title: t("Root.navBarLinks.1.title"), link: "/blanky" },
    { title: t("Root.navBarLinks.2.title"), link: "/novyny" },
    { title: t("Root.navBarLinks.3.title"), link: "/foto" },
    { title: t("Root.navBarLinks.4.title"), link: "/kontakty" },
  ];

  const links = locale === "en" ? aboutLinks.filter(el => el.link !== "/ppo") : aboutLinks;

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

        <NavBarFooter
          navItems={navItems}
          aboutLinks={links}
          titleLinks={t(`HomePage.footer.titles.0`)}
          titleAboutLinks={t(`HomePage.footer.titles.1`)}
          locale={locale}
        />

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
