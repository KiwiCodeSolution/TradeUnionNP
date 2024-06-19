import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import FilterNews from "./FilterNews";
import Title from "@/components/Title";

const NewsSectionHomePage = () => {
  return (
    <BaseSection style={"relative"}>
      <Wrapper styles={"pt-20"}>
        <Title tag="h2" styles="text-center mb-10">
          Новини
        </Title>
       
        <div className="absolute bottom-0 h-64 left-0 right-0 z-[5] bg-gradient-to-t from-gray to-white" />
        <FilterNews />
      </Wrapper>
      <div className="absolute bottom-0 h-64 left-0 right-0 z-0 bg-gradient-to-t from-bgGrey to-white" />
    </BaseSection>
  );
};

export default NewsSectionHomePage;
