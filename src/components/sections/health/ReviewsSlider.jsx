"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ShowButton from "@/components/UI/buttons/ShowButton";
import ReviewCard from "./ReviewCard";
import Image from "next/image";
import HandIconSwipe from "@/images/health/hugeicons_swipe.png";

const ReviewsSlider = ({ reviews }) => {
  return (
    <div className="w-full relative flex flex-col reviews pb-10 xl:pb-20">
      <div className="h-11 hidden xl:flex items-center justify-center absolute bottom-0 left-8">
        <ShowButton btnStyle="health-button-prev" style="-rotate-180" isRed />
      </div>
      <div className="h-11 hidden xl:flex items-center justify-center absolute bottom-0 right-8">
        <ShowButton btnStyle="health-button-next" style="" isRed />
      </div>

      <Swiper
        modules={[Navigation, A11y]}
        slidesPerView={2}
        speed={500}
        // loop={true}
        rewind={true}
        navigation={{
          nextEl: ".health-button-next",
          prevEl: ".health-button-prev",
        }}
        className="w-full xl:pb-10 xl:pt-10"
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
      >
        {reviews.map(el => (
          <SwiperSlide key={el._id} className="md:pb-10">
            <ReviewCard review={el} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Image
        src={HandIconSwipe}
        width={48}
        height={48}
        alt="малюночок долоні із стрілочкою вліво, вказує напрямок гортання галереї"
        className="md:hidden ml-auto mb-4 mt-1"
      />
    </div>
  );
};

export default ReviewsSlider;
