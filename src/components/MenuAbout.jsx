import { aboutLinks } from "@/constants/navLinks";
import Link from "next/link";
import Wrapper from "./Wrapper";

const MenuAbout = () => {
  return (
    <div className="w-full bg-bgBlack">
      <Wrapper>
        <nav className="w-full flex items-center justify-between h-10">
          {aboutLinks.map(el => (
            <Link
              href={el.link}
              aria-label={el.aria}
              key={el.link}
              className="text-white text-opacity-60 hover:text-opacity-100"
            >
              {el.name}
            </Link>
          ))}
        </nav>
      </Wrapper>
    </div>
  );
};

export default MenuAbout;
