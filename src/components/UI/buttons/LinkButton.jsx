import Image from "next/image";
import { Link } from "@/navigation";
import Arrow from "@/images/arrow_red.svg";

const buttonsStyle = {
  transparent: "h-fit text-red",
  red: "w-fit h-[60px] rounded-[100px] bg-red text-white font-bold uppercase py-[15px] px-[33px] shadow-redButton hover:shadow-redButtonHover gap-x-3",
  round: "w-[54px] h-[54px] rounded-full bg-white hover:bg-red",
};

const LinkButton = ({ children, goTo, view, style, goToPage, icon, locale }) => {
  const additionalStyle = style || "";
  const currentStyle = `${buttonsStyle[view]} ${additionalStyle} flex items-center justify-between`;

  return (
    <Link href={goTo} className={currentStyle} target={!goToPage ? "_blank" : ""}>
      {children}
      {icon && (
        <Image
          src={Arrow}
          width={30}
          height={30}
          alt="зображення червоної іконки-стрілочки вправо на білому фоні"
          className="arrow-icon"
          locale={locale}
        />
      )}
    </Link>
  );
};

export default LinkButton;
