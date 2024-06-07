import Link from "next/link";
const buttonsStyle = {
  transparent: "w-[163px] h-fit text-red",
  red: "w-fit h-[60px] rounded-[100px] bg-red text-white font-bold uppercase py-[15px] px-[33px] shadow-redButton hover:shadow-redButtonHover gap-x-3",
  round: "w-[54px] h-[54px] rounded-full bg-white hover:bg-red",
};

const LinkButton = ({ children, goTo, view, style, goToPage }) => {
  const additionalStyle = style || "";
  const currentStyle = `${buttonsStyle[view]} ${additionalStyle} flex items-center justify-between`;

  return (
    <Link href={goTo} className={currentStyle} target={!goToPage ? "_blank" : ""}>
      {children}
    </Link>
  );
};

export default LinkButton;
