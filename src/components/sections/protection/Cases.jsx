import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import SlidesSwiper from "./SlidesSwiper";

const Cases = () => {
  return (
    <BaseSection>
      <Wrapper>
        <h3 className="text-sm text-liteGrey uppercase">КЕЙСИ</h3>
        <SlidesSwiper />
      </Wrapper>
    </BaseSection>
  );
};

export default Cases;
