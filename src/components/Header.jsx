import Menu from "./sections/menu/Menu";
import MenuAbout from "./sections/menu/MenuAbout";

const Header = ({ locale, contacts }) => {
  return (
    <header className="w-full flex flex-col relative">
      <MenuAbout locale={locale} />
      <Menu locale={locale} contacts={contacts} />
    </header>
  );
};

export default Header;
