"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ShowButton from "@/components/UI/buttons/ShowButton";
import Image from "next/image";
import ReviewImage from "@/images/appeal/review.svg";

const ReviewsSwiper = ({ reviews }) => {
  return (
    <div className="w-full relative flex">
      <div className="flex flex-col items-center justify-center">
        <ShowButton btnStyle="review-button-next" style="-rotate-180" />
      </div>

      <Swiper
        modules={[Navigation, A11y]}
        // slidesPerView={2}
        spaceBetween={10}
        speed={500}
        autoplay
        loop={true}
        navigation={{
          nextEl: ".review-button-next",
          prevEl: ".review-button-prev",
        }}
        className="w-[calc(100%-44px-44px)]"
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
      >
        {reviews.map((el, index) => (
          <SwiperSlide key={el.text} className="py-10">
            <article className="w-[95%] min-h-[136px] md:h-full bg-white rounded-xl p-8 relative mx-auto">
              <p className="text-base">
                "{el.text} " - {el.name} ({el.address} )
              </p>

              <Image
                src={ReviewImage}
                width={58}
                height={59}
                className="absolute -bottom-8 right-8 z-[30]"
              />
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex flex-col items-center justify-center z-[20]">
        <ShowButton btnStyle="review-button-prev" style="" />
      </div>
    </div>
  );
};

export default ReviewsSwiper;
