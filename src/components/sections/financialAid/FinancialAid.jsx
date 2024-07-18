import { useTranslations } from "next-intl";
import Wrapper from "@/components/Wrapper";
import BaseSection from "@/components/BaseSection";
import WhoCanGet from "./WhoCanGet";
import Attention from "./Attention";
import Helps from "./Helps";
import Image from "next/image";
import Heart from "@/images/home/icon_heart-red.svg";
import TextImage from "@/images/home/icon_profsp.svg";
import NewKinds from "./NewKinds";
import Title from "@/components/Title";

const FinancialAid = () => {
  const t = useTranslations("HomePage.financialAid");
  return (
    <BaseSection>
      <Wrapper styles={"flex flex-col md:flex-row gap-8 py-16 h-fit xl:h-[1031px]"}>
        <div className="order-1 w-full md:w-3/5 flex flex-col">
          <Title tag="h2">
            <span className="text-red">{t(`title.0`)}</span> {t(`title.1`)}
          </Title>

          <p className="text-base md:text-lg text-grey my-4">
            {t(`text.0`)}
            <strong> {t(`text.1`)}</strong> {t(`text.2`)}
          </p>
          <WhoCanGet />
          <Attention text={t(`attention`)} />
          <p className="text-base md:text-lg text-grey">
            {t(`helps.0`)} <strong>{t(`helps.1`)}</strong>
          </p>
          <Helps />
          <div className="w-full flex items-center gap-x-4 mt-4">
            <h2 className={`text-4xl font-extrabold uppercase leading-[48px]`}>{t(`title.2`)}</h2>
            <Image src={Heart} width={59} height={48} alt="зображення червоного серця" />
          </div>
        </div>

        <div className="order-2 w-full h-[1135px] md:h-[1265px] xl:h-[905px] md:w-2/5 flex flex-col rounded-2xl bg-bgGrey py-9 pl-12 relative">
          <h2 className="w-full text-[34px] font-bold leading-10 text-red pb-9 pr-12">
            {t(`newKindsTitle`)}
          </h2>
          <NewKinds />
          <Image
            src={TextImage}
            width={349}
            height={37}
            alt="білі літери, що утворюють слово 'профспілка'"
            className="mt-auto mx-auto w-[199px] md:w-[185px] xl:w-[349px] mr-12"
          />
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default FinancialAid;
