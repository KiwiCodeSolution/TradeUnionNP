import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import Map from "../contacts/Map";
import PathPage from "@/components/PathPage";
import Title from "@/components/Title";

const HeroContactPage = () => {
  return (
    <BaseSection style={""}>
      <Wrapper>
        <PathPage endPath={"Контакти"} />
        <Title tag="h1" styles="text-center my-16">
          <span className="text-red">Контакти</span> обласних <br /> осередків Профспілки
        </Title>

        <Map />
      </Wrapper>
    </BaseSection>
  );
};

export default HeroContactPage;
