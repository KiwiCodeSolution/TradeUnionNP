"use client";

import Slide from "./Slide";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ShowButton from "@/components/UI/buttons/ShowButton";

const SlidesSwiper = () => {
  const slides = Array.from({ length: 8 }, (_, index) => index);

  return (
    <div className="w-full relative">
      <Swiper
        modules={[Navigation, A11y]}
        slidesPerView={1}
        speed={1500}
        navigation={{
          nextEl: ".slide-button-next",
          prevEl: ".slide-button-prev",
        }}
      >
        {slides.map(el => {
          return (
            <SwiperSlide key={el}>
              <Slide slideNumber={el} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="w-fit absolute -top-8 md:top-5 right-0 flex justify-center items-center gap-x-8 z-[5]">
        <ShowButton btnStyle="slide-button-prev" style="-rotate-180" />
        <ShowButton btnStyle="slide-button-next" />
      </div>
    </div>
  );
};

export default SlidesSwiper;
