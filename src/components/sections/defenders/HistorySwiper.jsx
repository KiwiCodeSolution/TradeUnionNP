"use client";

import ShowButton from "@/components/UI/buttons/ShowButton";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import HistoryItem from "./HistoryItem";

const HistorySwiper = ({ reviews, locale }) => {
  if (!reviews || reviews.length === 0) {
    return null;
  }

  return (
    <div className="w-full relative flex flex-col px-4 md:px-16 mt-8 md:mt-[52px]">
      <div className="h-11 flex items-center justify-center absolute top-1/2 left-0 transform -translate-y-1/2 z-[10]">
        <ShowButton btnStyle="history-military-button-prev" style="-rotate-180" isBlack />
      </div>
      <Swiper
        modules={[Navigation, A11y]}
        speed={500}
        rewind={true}
        navigation={{
          nextEl: ".history-military-button-next",
          prevEl: ".history-military-button-prev",
        }}
        slidesOffsetAfter={16}
        className="w-[calc(100%-32px)] md:!py-10 md:!pr-5 xl:!px-2"
        breakpoints={{
          320: {
            slidesPerView: 1,
          },

          1280: {
            slidesPerView: 2,
            spaceBetween: 32,
          },
        }}
      >
        {reviews.map(el => (
          <SwiperSlide key={el._id} className="">
            <div className="mx-4 collapse-shadow ">
              <HistoryItem item={el} locale={locale} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="h-11 flex items-center justify-center absolute top-1/2 right-0 transform -translate-y-1/2 z-[10]">
        <ShowButton btnStyle="history-military-button-next" style="" isBlack />
      </div>
    </div>
  );
};
export default HistorySwiper;
