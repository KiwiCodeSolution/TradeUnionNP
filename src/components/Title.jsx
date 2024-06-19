import { inter } from "@/app/fonts";

const Title = ({ children, styles, tag }) => {
  const currentStyle = `${styles} ${inter.className}`;
  return (
    <>
      {tag === "h1" ? (
        <h1 className={`${currentStyle} text-5xl leading-[1.25] font-extrabold`}>{children} </h1>
      ) : tag === "h2" ? (
        <h2 className={`${currentStyle} text-[46px] leading-[1.2] font-extrabold`}>{children} </h2>
      ) : (
        <h3 className={`${currentStyle}`}>{children} </h3>
      )}
    </>
  );
};

export default Title;
