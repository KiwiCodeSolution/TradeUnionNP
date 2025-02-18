"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ShowButton from "@/components/UI/buttons/ShowButton";
import reviews from "@/data/review-health.json";
import ReviewCard from "./ReviewCard";

const ReviewsSlider = () => {
  const publishReviews = reviews.filter(el => el.address !== "");

  return (
    <div className="w-full relative flex flex-col reviews pb-20">
      <div className="h-11 flex items-center justify-center absolute bottom-0 left-8">
        <ShowButton btnStyle="health-button-prev" style="-rotate-180" isRed />
      </div>
      <div className="h-11 flex items-center justify-center absolute bottom-0 right-8">
        <ShowButton btnStyle="health-button-next" style="" isRed />
      </div>

      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={20}
        speed={500}
        autoplay
        loop={true}
        navigation={{
          nextEl: ".health-button-next",
          prevEl: ".health-button-prev",
        }}
        className="w-full pb-20 pt-10"
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
      >
        {publishReviews.map(el => (
          <SwiperSlide key={el._id} className="">
            <ReviewCard review={el} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewsSlider;
