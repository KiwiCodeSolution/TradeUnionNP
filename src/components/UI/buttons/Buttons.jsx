"use client";
import ArrowRed from "@/images/arrow_red.svg";
import ArrowWhite from "@/images/arrow_white.svg";

import Image from "next/image";

const buttonsStyle = {
  transparent:
    "w-[163px] h-[60px] rounded-[100px] border-0.5 border-red text-red hover:bg-red hover:text-white",
  red: "w-fit h-[60px] rounded-[100px] bg-red text-white font-bold uppercase py-[15px] px-[33px] shadow-redButton hover:shadow-redButtonHover gap-x-3",
  white:
    "w-fit h-[60px] rounded-[100px] bg-white text-white font-bold uppercase py-[15px] px-[33px] shadow-2xl hover:shadow gap-x-3",
  round: "w-[44px] h-[44px] rounded-full bg-white hover:bg-red rounded-button flex",
};

const Button = ({ children, view, btnType, icon, clickFn, style, disabled, ...restProps }) => {
  const handleClick = () => (clickFn ? clickFn() : null);
  const additionalStyle = style || "";

  const currentStyle = `${buttonsStyle[view]} ${additionalStyle} flex items-center justify-between`;

  return (
    <button
      type={btnType || "button"}
      className={currentStyle}
      onClick={handleClick}
      {...restProps}
      disabled={disabled}
    >
      {children}
      {icon && (
        <Image
          src={view === "transparent" ? ArrowRed : ArrowWhite}
          width={30}
          height={30}
          alt="зображення червоної іконки-стрілочки вправо на білому фоні"
          className="arrow-icon"
        />
      )}
    </button>
  );
};

export default Button;
