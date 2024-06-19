"use client";

const buttonsStyle = {
  transparent:
    "w-[163px] h-[60px] rounded-[100px] border-0.5 border-red text-red hover:bg-red hover:text-white",
  red: "w-fit h-[60px] rounded-[100px] bg-red text-white font-bold uppercase py-[15px] px-[33px] shadow-redButton hover:shadow-redButtonHover gap-x-3",
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
      {icon}
    </button>
  );
};

export default Button;
