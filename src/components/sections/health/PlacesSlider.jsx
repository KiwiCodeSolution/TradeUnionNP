"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ShowButton from "@/components/UI/buttons/ShowButton";
import Place from "./Place";

const PlacesSlider = ({ places }) => {
  return (
    <div className="w-full relative flex places">
      <div className="hidden xl:flex flex-col items-center justify-center">
        <ShowButton btnStyle="places-button-prev" style="-rotate-180" />
      </div>

      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={20}
        speed={500}
        autoplay
        loop={true}
        navigation={{
          nextEl: ".places-button-next",
          prevEl: ".places-button-prev",
        }}
        className="w-full xl:w-[calc(100%-44px-44px)]"
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          769: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
      >
        {places.map(el => (
          <SwiperSlide key={el._id} className="md:pb-10 xl:py-16">
            <Place place={el} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="hidden xl:flex flex-col items-center justify-center z-[20]">
        <ShowButton btnStyle="places-button-next" style="" />
      </div>
    </div>
  );
};

export default PlacesSlider;
