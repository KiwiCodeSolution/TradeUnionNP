import { inter } from "@/app/fonts";

const Title = ({ children, styles, tag }) => {
  const currentStyle = styles || "";
  return (
    <>
      {tag === "h1" ? (
        <h1
          className={`${currentStyle} ${inter.className} text-[34px] md:text-5xl leading-[1.2] md:leading-[1.25] font-extrabold`}
        >
          {children}{" "}
        </h1>
      ) : tag === "h2" ? (
        <h2
          className={`${currentStyle} ${inter.className} text-[34px] md:text-[46px] leading-[1.2] font-extrabold`}
        >
          {children}{" "}
        </h2>
      ) : (
        <h3 className={`${currentStyle} ${inter.className} text-4xl`}>{children} </h3>
      )}
    </>
  );
};

export default Title;
