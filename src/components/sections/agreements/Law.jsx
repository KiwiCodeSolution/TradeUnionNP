import { inter } from "@/app/fonts";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import LawImage from "@/images/agreement/icon_law.svg";
import law from "@/data/law.json";
import AboutAgreement from "./AboutAgreement";

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
            <article
              className="w-full px-7 py-6 md:p-10 rounded-2xl bg-white flex flex-col gap-y-4"
              key={el.title}
            >
              <div className="w-full flex gap-x-4 items-center">
                <Image
                  src={LawImage}
                  width={42}
                  height={42}
                  alt="зображення сувою із написаним текстом"
                />
                <p className="text-xl font-bold">{el.title}</p>
              </div>
              <p className="w-full text-lg leading-[1.5] text-grey">{el.text}</p>
            </article>
          ))}
        </div>
        <div className="absolute h-56 left-0 right-0 bg-gradient-to-b from-bgGrey to-white bottom-0 z-[0]" />
      </Wrapper>
    </BaseSection>
  );
};

export default Law;
