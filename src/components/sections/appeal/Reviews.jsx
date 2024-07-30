import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import ReviewsSwiper from "./ReviewsSwiper";
import Title from "@/components/Title";

const Reviews = () => {
  const t = useTranslations("I");
  return (
    <BaseSection style={"pb-6"}>
      <Wrapper>
        <Title tag={"h2"} styles={"text-center mb-6"}>
          <span className="text-red">{t(`review_title.0`)}</span> <br />
          {t(`review_title.1`)}
        </Title>
        <ReviewsSwiper />
      </Wrapper>
    </BaseSection>
  );
};

export default Reviews;
