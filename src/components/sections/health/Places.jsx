import BaseSection from "@/components/BaseSection";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import PlacesSlider from "./PlacesSlider";
import AboutVoucher from "./AboutVoucher";

const Places = () => {
  return (
    <BaseSection style={"bg-grey"}>
      <Wrapper>
        <Title tag={"h2"} styles={"text-center mb-8"}>
          <span className="text-red">Пансіонати</span>, які обрано для путівок
        </Title>
        <p className="text-lg text-grey text-center">
          Кожен пансіонат оцінюють профспілчани за спеціально розробленою системою від 1 до 5 балів.{" "}
          <br />
          <strong>Від 4,3 до 5 балів</strong> — так наші працівники оцінили пансіонати, у яких
          відпочивали.
        </p>
        <PlacesSlider />
        <AboutVoucher />
      </Wrapper>
    </BaseSection>
  );
};

export default Places;
