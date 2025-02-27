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

const ReviewsSwiperITrade = ({ reviews }) => {
  return (
    <div className="w-full relative flex">
      <ShowButton btnStyle="revitrade-btn-prev mt-[130px]" style="-rotate-180" />
      <Swiper
        modules={[Navigation, A11y]}
        // slidesPerView={2}
        spaceBetween={10}
        speed={500}
        autoplay
        loop={true}
        navigation={{
          nextEl: ".revitrade-btn-next",
          prevEl: ".revitrade-btn-prev",
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
                alt="Зображення білого трикутника, частинка фонового зображення"
              />
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
      <ShowButton btnStyle="revitrade-btn-next mt-[130px]" style="" />
    </div>
  );
};

export default ReviewsSwiperITrade;
