import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Screen from "@/images/join/screen_3.png";

import Screen_1 from "@/images/join/screen_4.png";
import ArrowRightImg from "@/images/join/arrow_right.png";
import SignatureImg from "@/images/join/signature.png";

const Signature = ({ clName }) => {
  return (
    <div className={`w-[120px] xl:w-[424px] flex items-center absolute ${clName}`}>
      <Image
        src={ArrowRightImg}
        width={48}
        height={48}
        alt=""
        className="w-6 h-6 md:w-12 md:h-12 mr-1 md:mr-2 xl:mr-3"
      />
      <p className="text-red text-[6px] md:text-[12px] xl:text-base leading-[1.21] font-extrabold mr-[2px] mf:mr-3">
        ХХ
      </p>
      <p className="text-red text-[6px] md:text-[12px] xl:text-base leading-[1.21] font-extrabold mr-2 md:mr-4 xl:mr-8">
        ХХ
      </p>
      <p className="text-red text-[6px] md:text-[12px] xl:text-base leading-[1.21] font-extrabold mr-4 md:mr-[50px] xl:mr-[95px]">
        ХХ
      </p>
      <Image
        src={SignatureImg}
        width={98}
        height={50}
        alt=""
        className="w-[44px] h-[20px] md:w-[88px] md:h-[41px] xl:w-[98px] xl:h-[50px] mr-2 xl:mr-8"
      />
      <Image
        src={ArrowRightImg}
        width={48}
        height={48}
        alt=""
        className="w-6 h-6 md:w-12 md:h-12 rotate-180"
      />
    </div>
  );
};

const StepsFiveAndSix = () => {
  const t = useTranslations("Join");

  return (
    <BaseSection style={""}>
      <div className="absolute h-56 left-0 right-0 bg-gradient-to-b from-bgGrey to-white top-0 z-[0]" />
      <Wrapper styles={"relative"}>
        <div className="bg-white rounded-20 relative py-6 px-3 md:py-6 md:px-6 xl:py-6 xl:px-[102px] shadow-joinSections">
          <Title tag={"h2"} styles={"text-center"}>
            <span className="text-red">{t("step_5_title.0")}</span>
            {t("step_5_title.1")}
          </Title>
          <p className="text-[17px] md:text-lg mt-8 mb-3">{t("step_5_text")}</p>
          <div className="w-[275px] md:w-[650px] xl:w-[910px] mx-auto relative">
            <Image
              src={ArrowRightImg}
              width={48}
              height={48}
              alt=""
              className="w-6 h-6 md:w-12 md:h-12 absolute bottom-[5px] left-[-5px] md:bottom-[20px] md:left-0 xl:bottom-[37px] xl:left-[20px]"
            />
            <Image src={Screen} width={960} height={292} alt="" className="w-full mx-auto " />
            <Signature
              clName={
                "top-[20px] md:top-[49px] xl:top-[78px] right-[27px] md:right-[212px] xl:right-[20px]"
              }
            />
          </div>
        </div>

        <div className="bg-white mt-10 rounded-20 relative py-6 px-3 md:py-6 md:px-6 xl:py-6 xl:px-[102px] shadow-joinSections z-[1]">
          <Title tag={"h2"} styles={"text-center"}>
            <span className="text-red">{t("step_6_title.0")}</span>
            {t("step_6_title.1")}
          </Title>
          <p className="text-[17px] md:text-lg mt-8 mb-3">{t("step_6_text")}</p>
          <div className="w-[275px] md:w-[650px] xl:w-[910px] mx-auto relative">
            <div className="absolute top-[8px] md:top-[24px] xl:top-[40px] right-[15px] md:right-[81px] flex items-center gap-x-1 md:gap-x-9">
              <Image
                src={ArrowRightImg}
                width={48}
                height={48}
                alt=""
                className="w-6 h-6 md:w-12 md:h-12 "
              />
              <p className="w-[80px] md:w-[105px] xl:w-[220px] text-red text-[7px] md:text-sm leading-[1] md:leading-3 xl:text-xl xl:leading-[1.21] font-extrabold text-center">
                {t("heading.1")}
              </p>
            </div>
            <Image src={Screen_1} width={960} height={292} alt="" className="w-full mx-auto" />
            <Signature
              clName={
                "bottom-[-3px] xl:top-[272px] right-[26px] md:right-[209px] xl:right-[162px] xl:right-[20px]"
              }
            />
          </div>
        </div>
      </Wrapper>
      <div className="absolute h-56 left-0 right-0 bg-gradient-to-b from-bgGrey to-white bottom-0 z-[0] rotate-180" />
    </BaseSection>
  );
};

export default StepsFiveAndSix;
