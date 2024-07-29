import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import PathPage from "@/components/PathPage";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import HeroImage from "@/images/protection/protection_hero.svg";
import Hand from "@/images/hand.svg";
import { inter } from "@/app/[locale]/fonts";
import Title from "@/components/Title";

const ProtectionHero = () => {
  const t = useTranslations("Protection");
  return (
    <BaseSection style={""}>
      <Wrapper>
        <PathPage endPath={t(`path`)} />
        <div className="w-full flex flex-col md:flex-row gap-y-4 md:gap-y-0">
          <div className="w-full md:w-3/5 xl:w-2/5 flex flex-col gap-y-4 pt-6 md:pt-16 ">
            <Title tag="h1" styles={"text-center md:text-left"}>
              <span className="text-red">{t(`title.0`)}</span> {t(`title.1`)}
            </Title>
            <p className="text-lg text-center md:text-left">
              <strong>{t(`subtitle.0`)} </strong>
              {t(`subtitle.1`)}
            </p>
          </div>
          <Image
            src={HeroImage}
            width={642}
            height={485}
            alt="малюнок двох чоловіків"
            className="w-full md:w-2/5 xl:w-3/5"
          />
        </div>
        <div className="w-full bg-white rounded-t-lg border-b-4 border-red flex flex-col gap-y-4 md:gap-y-0 md:flex-row  gap-x-8 p-6 md:p-8 xl:p-12 relative justify-between">
          <div className="xl:w-1/4">
            <Image
              src={Hand}
              width={211}
              height={235}
              alt="малюнок руки"
              className="hidden xl:block absolute bottom-12 left-12 z-[2]"
            />
          </div>

          <div className="flex flex-col justify-center w-full md:w-fit xl:w-1/4">
            <div className="flex items-center gap-x-6 mx-auto md:ml-0">
              <p className={`${inter.className} text-red text-2xl font-bold`}>{t(`hero_text.0`)}</p>
              <p className={`${inter.className} text-red text-[50px] font-bold`}>5000</p>
            </div>

            <p className="text-lg text-grey text-center md:text-left">{t(`hero_text.1`)}</p>
          </div>
          <p className="w-full md:w-fit xl:w-2/4 text-lg text-grey text-center md:text-left">
            {t(`hero_text.2`)}
            <strong>{t(`hero_text.3`)}</strong> {t(`hero_text.4`)}
          </p>
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default ProtectionHero;
