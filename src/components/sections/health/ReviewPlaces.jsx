import BaseSection from "@/components/BaseSection";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import ReviewsSlider from "./ReviewsSlider";

const ReviewPlaces = () => {
  return (
    <BaseSection style={"min-h-[940px]"}>
      <Wrapper>
        <Title tag={"h2"} styles={"mb-[65px] text-center"}>
          <span className="text-red">Відгуки профспілчан про</span> відпочинок з Профспілкою
        </Title>
        <ReviewsSlider />
      </Wrapper>
    </BaseSection>
  );
};

export default ReviewPlaces;
