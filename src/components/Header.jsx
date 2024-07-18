import Menu from "./sections/menu/Menu";
import MenuAbout from "./sections/menu/MenuAbout";

const Header = ({ locale }) => {
  return (
    <header className="w-full flex flex-col relative">
      <MenuAbout locale={locale} />
      <Menu locale={locale} />
    </header>
  );
};

export default Header;
