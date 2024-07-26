import BaseSection from "@/components/BaseSection";
import PathPage from "@/components/PathPage";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import ResolutionList from "../protection/ResolutionList";

const HeroAppealSections = () => {
  return (
    <BaseSection style={""}>
      <Wrapper>
        <PathPage endPath={"Звернення"} />
        <Title tag={"h2"} styles={"text-center mb-16"}>
          <span className="text-red">Звернення</span> до Профспілки
        </Title>
        <ResolutionList />
      </Wrapper>
    </BaseSection>
  );
};

export default HeroAppealSections;
