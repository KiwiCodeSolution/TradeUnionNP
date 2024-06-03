import Menu from "./Menu";
import MenuAbout from "./MenuAbout";

const Header = () => {
  return (
    <header className="w-full flex flex-col">
      <MenuAbout />
      <Menu />
    </header>
  );
};

export default Header;
