import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import ReviewsSwiperITrade from "./ReviewsSwiperITrade";

const ReviewsITrade = () => {
  const t = useTranslations("I");
  const reviews = [
    {
      text: t(`reviews.0.text`),
      name: t(`reviews.0.name`),
      address: t(`reviews.0.address`),
    },
    { text: t(`reviews.1.text`), name: t(`reviews.1.name`), address: t(`reviews.1.address`) },
    {
      text: t(`reviews.2.text`),
      name: t(`reviews.2.name`),
      address: t(`reviews.2.address`),
    },
    {
      text: t(`reviews.3.text`),
      name: t(`reviews.3.name`),
      address: t(`reviews.3.address`),
    },
    {
      text: t(`reviews.4.text`),
      name: t(`reviews.4.name`),
      address: t(`reviews.4.address`),
    },
    {
      text: t(`reviews.5.text`),
      name: t(`reviews.5.name`),
      address: t(`reviews.5.address`),
    },
    {
      text: t(`reviews.6.text`),
      name: t(`reviews.6.name`),
      address: t(`reviews.6.address`),
    },
    {
      text: t(`reviews.7.text`),
      name: t(`reviews.7.name`),
      address: t(`reviews.7.address`),
    },
    {
      text: t(`reviews.8.text`),
      name: t(`reviews.8.name`),
      address: t(`reviews.8.address`),
    },
    {
      text: t(`reviews.9.text`),
      name: t(`reviews.9.name`),
      address: t(`reviews.9.address`),
    },
    {
      text: t(`reviews.10.text`),
      name: t(`reviews.10.name`),
      address: t(`reviews.10.address`),
    },
    {
      text: t(`reviews.11.text`),
      name: t(`reviews.11.name`),
      address: t(`reviews.11.address`),
    },
    {
      text: t(`reviews.12.text`),
      name: t(`reviews.12.name`),
      address: t(`reviews.12.address`),
    },
  ];
  return (
    <BaseSection style={"bg-bgGrey"}>
      <Wrapper styles={"pt-32"}>
        <Title tag={"h2"} styles={"text-center "}>
          <span className="text-red">{t(`review_title.0`)} </span> <br />
          {t(`review_title.1`)}
        </Title>
        <ReviewsSwiperITrade reviews={reviews} />
      </Wrapper>
    </BaseSection>
  );
};

export default ReviewsITrade;
