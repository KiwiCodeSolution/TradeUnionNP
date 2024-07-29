import Image from "next/image";
import LawImage from "@/images/agreement/icon_law.svg";

const LawItem = ({ title, text }) => {
  return (
    <article className="w-full px-7 py-6 md:p-10 rounded-2xl bg-white flex flex-col gap-y-4">
      <div className="w-full flex gap-x-4 items-center">
        <Image src={LawImage} width={42} height={42} alt="зображення сувою із написаним текстом" />
        <p className="text-xl font-bold">{title}</p>
      </div>
      <p className="w-full text-lg leading-[1.5] text-grey">{text}</p>
    </article>
  );
};

export default LawItem;
