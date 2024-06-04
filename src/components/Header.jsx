import Menu from "./sections/menu/Menu";
import MenuAbout from "./sections/menu/MenuAbout";

const Header = () => {
  return (
    <header className="w-full flex flex-col">
      <MenuAbout />
      <Menu />
    </header>
  );
};

export default Header;
