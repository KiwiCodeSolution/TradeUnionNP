import Image from "next/image";
import Danger from "@/images/home/icon_danger.svg";

const Attention = ({ text }) => {
  return (
    <div className="w-full h-fit flex flex-col gap-8 md:flex-row items-center justify-between my-9 p-4 rounded-2xl bg-red">
      <Image
        src={Danger}
        width={64}
        height={63}
        alt="малюнок знаку уваги: червоний знак оклику у білому трикутнику"
      />
      <p className="text-[15px] text-white">{text}</p>
    </div>
  );
};

export default Attention;
