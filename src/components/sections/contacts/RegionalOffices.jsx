import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import RegionalOfficesList from "./RegionalOfficesList";
import Title from "@/components/Title";

const RegionalOffices = () => {
  return (
    <BaseSection>
      <Wrapper styles={"pt-16"}>
        <Title tag="h1" styles="text-center">
          <span className="text-red">Список голів</span> обласних <br /> осередків
        </Title>

        <RegionalOfficesList />
      </Wrapper>
    </BaseSection>
  );
};

export default RegionalOffices;
