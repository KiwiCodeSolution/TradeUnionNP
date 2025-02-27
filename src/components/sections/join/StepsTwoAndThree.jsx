import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Arrow from "@/images/join/arrow.png";
import ArrowRight from "@/images/join/arrow_right.png";
import Screen from "@/images/join/screen_1.png";

const Heading = ({ clName }) => {
  const t = useTranslations("Join");
  return (
    <div className={`w-full h-fit flex flex-col absolute ${clName}`}>
      <div className="w-full h-[20px] md:h-[70px] flex items-center justify-center relative mt-4">
        <Image
          src={ArrowRight}
          width={72}
          height={69}
          alt=""
          className="w-8 h-8 md:w-12 md:h-12 xl:w-[72px] xl:h-[69px] absolute top-1/2 -translate-y-1/2 left-0"
        />
        <p className="text-red text-base md:text-[32px] xl:text-4xl leading-[1.21] font-extrabold text-center">
          {t("heading.0")}
        </p>
      </div>
      <div className="w-full h-[20px] md:h-[70px] flex items-center justify-center relative mt-[46px] md:mt-[68px]">
        <Image
          src={ArrowRight}
          width={72}
          height={69}
          alt=""
          className="w-8 h-8 md:w-12 md:h-12 xl:w-[72px] xl:h-[69px] absolute top-1/2 -translate-y-1/2 left-0"
        />
        <p className="text-red text-base md:text-[32px] xl:text-4xl leading-[1.21] font-extrabold text-center">
          {t("heading.2")} <br />
          {t("heading.3")}
        </p>
      </div>
      <div className="w-full h-[20px] md:h-[70px] flex items-center justify-center relative mt-[47px] md:mt-[97px]">
        <Image
          src={ArrowRight}
          width={72}
          height={69}
          alt=""
          className="w-8 h-8 md:w-12 md:h-12 xl:w-[72px] xl:h-[69px] absolute top-1/2 -translate-y-1/2 left-0"
        />
        <p className="text-red text-base md:text-[32px] xl:text-4xl leading-[1.21] font-extrabold text-center">
          ХХХХХХХХХХ
        </p>
      </div>
      <div className="w-full h-[20px] md:h-[70px] flex items-center justify-center relative mt-[17px]">
        <Image
          src={ArrowRight}
          width={72}
          height={69}
          alt=""
          className="w-8 h-8 md:w-12 md:h-12 xl:w-[72px] xl:h-[69px] absolute top-1/2 -translate-y-1/2 left-0"
        />
        <p className="text-red text-base md:text-[32px] xl:text-4xl leading-[1.21] font-extrabold text-center">
          +380 ХХХ ХХ ХХ ХХ
        </p>
      </div>
    </div>
  );
};

const StepsTwoAndThree = () => {
  const t = useTranslations("Join");
  return (
    <BaseSection style={"bg-bgGrey"}>
      <Wrapper styles={"relative"}>
        <Image
          src={Arrow}
          width={150}
          height={150}
          alt=""
          className="w-[44px] h-[44px] md:w-[92px] md:h-[92px] xl:w-[150px] xl:h-[150px] absolute top-[315px] md:top-[77px] xl:top-[130px] left-[50px] z-[1]"
        />
        <Image
          src={Arrow}
          width={224}
          height={192}
          alt=""
          className="w-[80px] h-[80px] md:w-[132px] md:h-[132px] xl:w-[224px] xl:h-[192px] absolute top-[350px] md:top-[202px] xl:top-[130px] right-[50px] z-[1]"
        />
        <div className="bg-white my-10 rounded-20 relative py-6 pl-6 pr-[2px] md:pt-6 md:px-6 shadow-joinSections xl:py-6 xl:px-16">
          <Title tag={"h2"} styles={"text-center"}>
            <span className="text-red">{t("step_2_title.0")}</span>
            {t("step_2_title.1")}
          </Title>
        </div>
        <div className="bg-white flex flex-col rounded-20 relative py-6 px-3 md:py-6 md:px-6 xl:py-6 xl:px-[102px] shadow-joinSections">
          <Title tag={"h2"} styles={"text-center mb-8"}>
            <span className="text-red">{t("step_3_title.0")}</span>
            {t("step_3_title.1")}
          </Title>
          <p className="text-[17px] md:text-lg mb-6">
            {t("step_3_text.0")}
            <span className="text-red">{t("step_3_text.1")}</span>
            {t("step_3_text.2")}
          </p>
          <div className="w-full md:w-[640px] mx-auto relative">
            <Heading clName={""} />

            <Image src={Screen} width={960} height={725} alt="" className="" />
          </div>
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default StepsTwoAndThree;
