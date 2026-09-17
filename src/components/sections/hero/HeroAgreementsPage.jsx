import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Done from "@/images/agreement/done.svg";
import HeroImage from "@/images/agreement/hand.svg";
import BookMark from "@/images/agreement/bookmark-logo.svg";
import Arrow from "@/images/arrow_white.svg";
import Title from "@/components/Title";
import { BaseURL } from "@/constants/BaseUrl";
import FileButton from "@/components/UI/buttons/FileButton";

const HeroAgreementsPage = () => {
  const t = useTranslations("Collective_labour_agreement");

  return (
    <BaseSection style={"pb-6"}>
      <Wrapper styles={""}>
        <div className="w-full flex flex-col md:flex-row items-center gap-x-10 gap-y-8 xl:gap-y-10">
          <div className="flex flex-col gap-y-8 xl:gap-y-10">
            <Title tag="h2">
              {t(`title.0`)}
              <span className="text-red">{t(`title.1`)}</span>
            </Title>
            <p className="text-lg">{t(`hero_text.0`)}</p>
            <p className="text-lg">{t(`hero_text.1`)}</p>
          </div>
          <Image src={"/images/agreement/hero.png"} width={400} height={350} className="shrink-0" />
        </div>
        <div className="flex flex-col xl:flex-row mt-8 xl:mt-10 gap-6 xl:items-center justify-between">
          <a
            href={`${BaseURL}files/koldogovor.pdf`}
            і
            target="_blank"
            className="w-fit h-[60px] rounded-[100px] bg-red text-white font-bold uppercase py-[15px] px-[33px] shadow-redButton hover:shadow-redButtonHover gap-x-3 flex items-center justify-between mx-auto xl:mb-5 mt-10 xl:mt-14"
          >
            {t(`button`)}
            <Image src={Arrow} width={30} height={30} alt="іконка червоної стрілочки вправо" />
          </a>{" "}
          <div className="flex flex-col justify-center w-full xl:w-3/5 text-center shrink-0 honors">
            <p className="text-[40px]">{t(`honors.0`)}</p>
            <p className="text-[40px] font-bold">{t(`honors.1`)}</p>
          </div>
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default HeroAgreementsPage;
