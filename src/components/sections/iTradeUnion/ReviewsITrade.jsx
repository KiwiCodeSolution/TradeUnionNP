import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import ReviewsSwiper from "../appeal/ReviewsSwiper";

const ReviewsITrade = () => {
  const t = useTranslations("I");
  return (
    <BaseSection style={"bg-bgGrey"}>
      <Wrapper styles={"pt-32"}>
        <Title tag={"h2"} styles={"text-center "}>
          <span className="text-red">{t(`review_title.0`)} </span> <br />
          {t(`review_title.1`)}
        </Title>
        <ReviewsSwiper />
      </Wrapper>
    </BaseSection>
  );
};

export default ReviewsITrade;
