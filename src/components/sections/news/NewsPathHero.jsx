import BaseSection from "@/components/BaseSection";
import PathPage from "@/components/PathPage";
import Wrapper from "@/components/Wrapper";

const NewsPathHero = () => {
  return (
    <BaseSection style={""}>
      <Wrapper>
        <PathPage endPath={"Новини"} />
      </Wrapper>
    </BaseSection>
  );
};

export default NewsPathHero;
