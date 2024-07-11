import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import ReviewsSwiper from "./ReviewsSwiper";
import Title from "@/components/Title";

const Reviews = () => {
  return (
    <BaseSection style={"pb-6"}>
      <Wrapper>
        <Title tag={"h2"} styles={"text-center mb-6"}>
          <span className="text-red">Відгуки та подяки</span> <br />
          від наших профспілчан
        </Title>
        <ReviewsSwiper />
      </Wrapper>
    </BaseSection>
  );
};

export default Reviews;
