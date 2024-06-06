import Wrapper from "@/components/Wrapper";
import BaseSection from "@/components/BaseSection";
import WhoCanGet from "./WhoCanGet";
import Attention from "./Attention";
import Helps from "./Helps";
import Image from "next/image";
import Heart from "@/images/home/icon_heart-red.svg";
import TextImage from "@/images/home/icon_profsp.svg";
import NewKinds from "./NewKinds";

const FinancialAid = () => {
  return (
    <BaseSection>
      <Wrapper styles={"flex flex-col md:flex-row gap-8 py-16 h-[1031px]"}>
        <div className="order-1 w-full md:w-3/5 flex flex-col">
          <h2 className="text-[46px] font-extrabold inter leading-[1.2]">
            <span className="text-red">Матеріальна допомога</span> від Профспілки під час війни
          </h2>
          <p className="text-lg text-grey my-4">
            Матеріальну допомогу за спрощеною процедурою <strong> можуть отримати:</strong>
          </p>
          <WhoCanGet />
          <Attention />
          <p className="text-lg">
            Поза тим, буде надаватися <strong>будь-яка можлива допомога:</strong>
          </p>
          <Helps />
          <div className="w-full flex items-center gap-x-4 mt-4">
            <h2 className={`text-4xl font-extrabold uppercase leading-[48px]`}>
              ПРОФСПІЛКА З ВАМИ!
            </h2>
            <Image src={Heart} width={59} height={48} alt="зображення червоного серця" />
          </div>
        </div>

        <div className="order-2 w-full md:w-2/5 flex flex-col rounded-2xl bg-bgGrey py-9 pl-12 relative">
          <h2 className="w-full text-[34px] font-bold leading-10 text-red pb-9 pr-12">
            Нові види матеріальної допомоги під час війни
          </h2>
          <NewKinds />
          <Image
            src={TextImage}
            width={349}
            height={37}
            alt="білі літери, що утворюють слово 'профспілка'"
            className="mt-auto"
          />
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default FinancialAid;
