import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Screen from "@/images/join/screen_5.png";
import ArrowRightImg from "@/images/join/arrow_right.png";
import SignatureImg from "@/images/join/signature.png";
import Hand from "@/images/join/hand.png";
import Man from "@/images/recreations/activity.svg";

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

const ArrowRight = ({ clName }) => {
  return (
    <Image
      src={ArrowRightImg}
      width={48}
      height={48}
      alt=""
      className={`absolute bottom-[65px] left-[128px] ${clName}`}
    />
  );
};

const StepSeven = () => {
  const t = useTranslations("Join");

  return (
    <BaseSection style={"bg-bgGrey"}>
      <Wrapper styles={"relative pb-8 xl:pb-[112px]"}>
        <div className="bg-white my-10 rounded-20 relative py-6 px-3 md:py-6 md:px-6 xl:py-6 xl:px-[102px] shadow-joinSections">
          <Title tag={"h2"} styles={"text-center"}>
            <span className="text-red">{t("step_7_title.0")}</span>
            {t("step_7_title.1")}
          </Title>
          <p className="text-[17px] md:text-lg mt-8 mb-3">{t("step_7_text")}</p>
          <div className="w-[275px] md:w-[640px] xl:w-[906px] relative mx-auto">
            <Image src={Screen} width={960} height={972} alt="" className="w-full mx-auto" />
            <Image
              src={ArrowRightImg}
              width={48}
              height={48}
              alt=""
              className="w-6 h-6 md:w-12 md:h-12 absolute top-[145px] md:top-[342px] xl:top-[496px] left-[-5px]"
            />
            <Signature
              clName={
                "top-[110px] right-[27px] md:top-[261px] md:right-[207px] xl:top-[379px] xl:right-[19px]"
              }
            />
            <Signature
              clName={
                "bottom-[-2px] right-[27px] md:bottom-[0px] md:right-[207px] xl:bottom-[8px] xl:right-[19px]"
              }
            />
            <div className="w-[90px] md:w-[340px] xl:w-[400px] h-[48px] flex items-start justify-center absolute top-[8px] right-[10px] md:right-[-30px] xl:right-[6px] xl:top-[12px]">
              <Image
                src={ArrowRightImg}
                width={48}
                height={48}
                alt=""
                className="w-6 h-6 md:w-12 md:h-12 absolute top-0 left-[-35px] md:left-[-11px]"
              />
              <div>
                <p className="text-red text-[6px] md:text-sm leading-[1] md:leading-3 xl:text-xl xl:leading-[1.21] font-extrabold text-center md:mt-[15px] xl:mt-[13px] mb-[17px] xl:mb-[54px]">
                  {t("heading.0")}
                </p>
                <p className="text-red text-[6px] md:text-sm leading-[1] md:leading-3 xl:text-xl xl:leading-[1] font-extrabold text-center mb-[21px] md:mt-[40px] xl:mb-[66px]">
                  {t("heading.2")} <br />
                  {t("heading.3")}
                </p>
                <p className="text-red text-[6px] md:text-sm leading-[1] md:leading-3 xl:text-xl xl:leading-[1.21] font-extrabold text-center mb-[9px] md:mt-[52px] md:mb-[24px] xl:mb-[27px]">
                  ХХХХХХХХХХ
                </p>
                <p className="text-red text-[6px] md:text-sm leading-[1] md:leading-3 xl:text-xl xl:leading-[1.21] font-extrabold text-center">
                  +380ХХХХХХХХ
                </p>
              </div>
            </div>
            <div className="flex gap-x-8 xl:gap-x-20 items-center absolute bottom-[73px] right-[32px] md:bottom-[173px] md:right-[93px] xl:bottom-[255px] xl:right-[84px]">
              <Image
                src={ArrowRightImg}
                width={48}
                height={48}
                alt=""
                className="w-6 h-6 md:w-12 md:h-12 "
              />
              <p className="text-red text-[6px] md:text-sm leading-[1] md:leading-3 xl:text-xl xl:leading-[1.21] font-extrabold text-center">
                {t("heading.2")} <br />
                {t("heading.3")}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white mt-[380px] md:mt-[511px] xl:mt-[100px] rounded-20 relative py-6 px-3 md:px-6 xl:py-[34px] pl-6 xl:pr-[244px] shadow-joinSections flex flex-col gap-y-10 md:flex-row items-center gap-x-10">
          <Image src={Hand} width={100} height={100} alt="" className="w-[100px] h-[100px]" />
          <p className="text-[17px] xl:text-xl font-bold leading-[1.5]">{t("congratulations")}</p>
          <Image
            src={Man}
            width={292}
            height={460}
            alt=""
            className="w-[212px] h-[323px] md:w-[292px] md:h-[460px] absolute bottom-[460px] md:bottom-[206px] left-1/2 -translate-x-1/2 
             xl:w-[324px] xl:h-[460px] xl:-bottom-[112px] xl:left-[75%] xl:translate-x-0"
          />
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default StepSeven;
