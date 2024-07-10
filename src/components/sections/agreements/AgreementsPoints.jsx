import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import Title from "@/components/Title";
import AgreementsPointsList from "./AgreementsPointsList";
import AgreementsPointsSwiper from "./AgreementsPointsSwiper";

const AgreementsPoints = () => {
  return (
    <BaseSection style={"py-16"}>
      <Wrapper>
        <Title tag="h2" styles="text-center">
          Колективний <span className="text-red">договір</span>
        </Title>
        <AgreementsPointsList />
        <AgreementsPointsSwiper />
      </Wrapper>
    </BaseSection>
  );
};

export default AgreementsPoints;
