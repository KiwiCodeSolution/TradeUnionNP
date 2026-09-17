import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import PathPage from "@/components/PathPage";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import HeroImage from "@/images/protection/protection_appeal.svg";

const HeroAppealSections = () => {
  const t = useTranslations("Appeal");
  return (
    <BaseSection style={""}>
      <Wrapper>
        <PathPage endPath={t(`path`)} />
        <div className="w-full flex flex-col md:flex-row items-center gap-y-4 gap-x-8">
          <div className="w-full md:w-3/5 xl:w-2/5 flex flex-col gap-y-4">
            <Title tag={"h2"} styles={"text-center md:text-left"}>
              <span className="text-red">{t(`title.0`)}</span> {t(`title.1`)}
            </Title>
            <p className="text-lg text-grey text-center md:text-left">{t(`hero_text`)}</p>
          </div>
          <Image
            src={HeroImage}
            width={536}
            height={526}
            alt="Малюнок людини, що тримає документ зі зверненням"
            className="w-full md:w-2/5 xl:w-3/5"
          />
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default HeroAppealSections;
