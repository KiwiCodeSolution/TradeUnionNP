import { inter } from "@/app/fonts";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import LawImage from "@/images/agreement/icon_law.svg";
import law from "@/data/law.json";
import LawItem from "@/components/LawItem";

const Law = () => {
  return (
    <BaseSection style={"py-16"}>
      <Wrapper styles={"flex flex-col gap-y-4"}>
        <h3 className="text-sm text-liteGrey uppercase leading-[1.2] font-bold text-center">
          ЗАКОН УКРАЇНИ
        </h3>
        <h2 className={`${inter.className} text-[46px] font-extrabold leading-[1.2] text-center`}>
          Про <span className="text-red">колективні договори</span> і угоди
        </h2>
        <div className="grid rid-grid-cols-1 xl:grid-cols-2 gap-4 z-[1]">
          {law.map(el => (
            <LawItem key={el.title} item={el} />
          ))}
        </div>
        <div className="absolute h-56 left-0 right-0 bg-gradient-to-b from-bgGrey to-white bottom-0 z-[0]" />
      </Wrapper>
    </BaseSection>
  );
};

export default Law;
