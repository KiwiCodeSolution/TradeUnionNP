import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import Title from "@/components/Title";
import AgreementsPointsList from "./AgreementsPointsList";
import AgreementsPointsSwiper from "./AgreementsPointsSwiper";

const AgreementsPoints = () => {
  const t = useTranslations("Collective_labour_agreement");
  return (
    <BaseSection style={"py-16"}>
      <Wrapper>
        <Title tag="h2" styles="text-center">
          {t(`title.0`)} <span className="text-red">{t(`title.1`)}</span>
        </Title>
        <AgreementsPointsList />
        <AgreementsPointsSwiper />
      </Wrapper>
    </BaseSection>
  );
};

export default AgreementsPoints;
