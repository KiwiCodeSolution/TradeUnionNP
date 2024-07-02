import BaseSection from "@/components/BaseSection";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import ReviewsSwiper from "../appeal/ReviewsSwiper";

const ReviewsITrade = () => {
  return (
    <BaseSection style={"bg-bgGrey"}>
      <Wrapper styles={"pt-32"}>
        <Title tag={"h2"} styles={"text-center "}>
          <span className="text-red">Відгуки та подяки </span> <br />
          від наших профспілчан
        </Title>
        <ReviewsSwiper />
      </Wrapper>
    </BaseSection>
  );
};

export default ReviewsITrade;
