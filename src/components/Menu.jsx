import { navLinks } from "@/constants/navLinks";
import Logo from "@/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "./Wrapper";

const Menu = () => {
  return (
    <Wrapper styles="flex items-center gap-x-3">
      <Link href="/" className="w-[190px] h-20 flex items-center justify-between">
        <Image src={Logo} height={80} className="w-[186px] h-16" />
      </Link>

      <nav className="w-fit flex items-center h-20 mx-auto gap-x-3">
        {navLinks.map(el => (
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
    </Wrapper>
  );
};

export default Menu;
