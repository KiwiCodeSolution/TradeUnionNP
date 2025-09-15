import { BaseURL } from "@/constants/BaseUrl";
import Arrow from "@/images/arrow_white.svg";
import Image from "next/image";

const FileButton = ({ link, name, styles }) => {
  return (
    <a
      href={`${BaseURL}doc/${link}`}
      target="_blank"
      className={`w-fit h-[60px] rounded-[100px] bg-red text-white font-bold uppercase py-[15px] px-[33px] shadow-redButton hover:shadow-redButtonHover gap-x-3 flex items-center justify-center ${styles}`}
    >
      {name}
      <Image
        src={Arrow}
        width={30}
        height={30}
        alt="зображення червоної іконки-стрілочки вправо на білому фоні"
        className="arrow-icon"
      />
    </a>
  );
};

export default FileButton;
