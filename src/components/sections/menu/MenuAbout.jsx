import { useTranslations } from "next-intl";
import { aboutLinks } from "@/constants/navLinks";
import { Link } from "@/navigation";
import Wrapper from "../../Wrapper";

const MenuAbout = ({ locale }) => {
  const t = useTranslations("Root");
  const links =
    locale === "en" ? aboutLinks.filter(el => el.name !== "Обласні осередки") : aboutLinks;

  return (
    <div className="hidden md:block w-full bg-bgBlack">
      <Wrapper>
        <nav className="w-full flex items-center justify-between h-10">
          {links.map((el, index) => (
            <Link
              href={el.link}
              key={el.link}
              className="text-[15px] text-white text-opacity-60 hover:text-opacity-100"
              locale={locale}
            >
              {t(`aboutPageLinks.${index}.title`)}
            </Link>
          ))}
        </nav>
      </Wrapper>
    </div>
  );
};

export default MenuAbout;
