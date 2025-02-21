import BaseSection from "@/components/BaseSection";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import ReviewsSlider from "./ReviewsSlider";
import { useTranslations } from "next-intl";

const ReviewPlaces = () => {
  const t = useTranslations("Health");

  const reviews = [
    {
      _id: "vqj1bQ87m4kdG",
      image: "/images/health/reviews/raletc.jpeg",
      author: t("reviews.0.author"),
      rating: 4.5,
      address: t("reviews.0.address"),
      description: t("reviews.0.description"),
    },
    {
      _id: "2zqlq7IkaiVTZ",
      image: "/images/health/reviews/hlushko.jpeg",
      author: t("reviews.1.author"),
      rating: 4.8,
      address: t("reviews.1.address"),
      description: t("reviews.1.description"),
    },
    {
      _id: "vqj1bQ87m4kdG",
      image: "/images/health/reviews/sushko.jpg",
      author: t("reviews.2.author"),
      rating: 4.5,
      address: t("reviews.2.address"),
      description: t("reviews.2.description"),
    },
    {
      _id: "2zqlq7IkaiVTZ",
      image: "/images/health/reviews/suslo.jpg",
      author: t("reviews.3.author"),
      rating: 4.8,
      address: t("reviews.3.address"),
      description: t("reviews.3.description"),
    },
    {
      _id: "vqj1bQ87m4kdG",
      image: "/images/health/reviews/stychynska.jpg",
      author: t("reviews.4.author"),
      rating: 4.5,
      address: t("reviews.4.address"),
      description: t("reviews.4.description"),
    },
    {
      _id: "2zqlq7IkaiVTZ",
      image: "/images/health/reviews/isaeva.jpg",
      author: t("reviews.5.author"),
      rating: 4.8,
      address: t("reviews.5.address"),
      description: t("reviews.5.description"),
    },
  ];
  return (
    <BaseSection style={"min-h-[600px] xl:min-h-[940px]"}>
      <Wrapper>
        <Title tag={"h2"} styles={"mb-[65px] text-center"}>
          <span className="text-red">{t("reviews_title.0")}</span>
          {t("reviews_title.1")}
        </Title>
        <ReviewsSlider reviews={reviews} />
      </Wrapper>
    </BaseSection>
  );
};

export default ReviewPlaces;
