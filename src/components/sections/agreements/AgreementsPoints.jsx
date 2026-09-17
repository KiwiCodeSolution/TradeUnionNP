import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import Title from "@/components/Title";
import AgreementsPointsList from "./AgreementsPointsList";
import AgreementsPointsSwiper from "./AgreementsPointsSwiper";

const AgreementsPoints = () => {
  const t = useTranslations("Collective_labour_agreement");
  return (
    <BaseSection style={"pt-16"}>
      <Wrapper>
        <Title tag="h2" styles="text-center">
          {t(`points_title.0`)} <span className="text-red">{t(`points_title.1`)}</span>
        </Title>
        <AgreementsPointsList />
        <AgreementsPointsSwiper />

        <div className="w-full rounded-2xl my-8 px-16 py-4 xl:py-8 flex gap-8 bg-red">
          <p className="text-white text-lg">
            <strong>{t(`warning.0`)}</strong>, <span className="opacity-75">{t(`warning.1`)},</span>{" "}
            <strong>{t(`warning.2`)}</strong>
            <span className="opacity-75">{t(`warning.3`)}</span>
          </p>
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default AgreementsPoints;
