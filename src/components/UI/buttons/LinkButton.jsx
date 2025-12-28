import Arrow from "@/images/arrow_red.svg";
import ArrowRed from "@/images/arrow_white.svg";
import { Link } from "@/navigation";
import Image from "next/image";

const buttonsStyle = {
  transparent: "h-fit text-red",
  red: "w-fit h-[60px] rounded-[100px] bg-red text-white font-bold uppercase py-[15px] px-[33px] shadow-redButton hover:shadow-redButtonHover",
  round: "w-[54px] h-[54px] rounded-full bg-white hover:bg-red",
};

const LinkButton = ({ children, goTo, view, style, goToPage, icon, locale, isRedArrow }) => {
  const additionalStyle = style || "";
  const currentStyle = `${buttonsStyle[view]} ${additionalStyle} flex items-center justify-center`;

  return (
    <Link href={goTo} className={currentStyle} target={!goToPage ? "_blank" : ""} locale={locale}>
      {children}
      {icon && (
        <Image
          src={isRedArrow ? ArrowRed : Arrow}
          width={30}
          height={30}
          alt="зображення червоної іконки-стрілочки вправо на білому фоні"
          className="arrow-icon ml-3"
        />
      )}
    </Link>
  );
};

export default LinkButton;
