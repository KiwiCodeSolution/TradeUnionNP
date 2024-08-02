import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import ReviewsSwiper from "./ReviewsSwiper";
import Title from "@/components/Title";

const Reviews = ({ section }) => {
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
  ];
  return (
    <BaseSection style={section === "iTrade" ? "bg-bgGrey" : "pb-6"}>
      <Wrapper styles={section === "iTrade" ? "pt-32" : ""}>
        <Title tag={"h2"} styles={section === "iTrade" ? "text-center" : "text-center mb-6"}>
          <span className="text-red">{t(`review_title.0`)}</span> <br />
          {t(`review_title.1`)}
        </Title>
        <ReviewsSwiper reviews={reviews} />
      </Wrapper>
    </BaseSection>
  );
};

export default Reviews;
