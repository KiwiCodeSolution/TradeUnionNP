"use client";

import ShowButton from "@/components/UI/buttons/ShowButton";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import FundraisersItem from "./FundraisersItem";

const FundraisersGallery = ({ fundraisers, locale }) => {
  if (!fundraisers || fundraisers.length === 0) {
    return null;
  }

  return (
    <div className="w-full relative flex flex-col pb-20 xl:pb-20 pl-4 md:px-16 fundraisers-gallery">
      <div className="h-11 hidden xl:flex items-center justify-center absolute top-1/2 left-0 transform -translate-y-1/2 z-[10]">
        <ShowButton btnStyle="fund-button-prev" style="-rotate-180" isBlack />
      </div>
      <Swiper
        modules={[Navigation, A11y, Pagination]}
        speed={500}
        rewind={true}
        navigation={{
          nextEl: ".fund-button-next",
          prevEl: ".fund-button-prev",
        }}
        slidesOffsetAfter={16}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
          renderBullet: className => {
            return `<span class="${className} swiper-pagination-bullet"></span>`;
          },
        }}
        className="w-full md:!pb-10 xl:!pt-10 md:!pr-5 xl:!pr-2"
        breakpoints={{
          320: {
            slidesPerView: 1.5,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 16,
          },
        }}
      >
        {fundraisers.map(el => (
          <SwiperSlide key={el._id} className="xl:px-3">
            <div className="fundraisers-card min-w-[204px] max-w-[280p] !h-[436px] rounded-[32px] overflow-hidden border-[1px] border-[#D8D8D8] mx-auto">
              <FundraisersItem item={el} locale={locale} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="h-11 hidden xl:flex items-center justify-center absolute top-1/2 right-0 transform -translate-y-1/2 z-[10]">
        <ShowButton btnStyle="fund-button-next" style="" isBlack />
      </div>

      <div className="swiper-controls relative flex justify-between items-center pr-4 md:px-16 mx-auto md:w-fit md:gap-x-4 xl:hidden mt-8 md:mt-0">
        <div className="h-11 flex items-center justify-center">
          <ShowButton btnStyle="fund-button-prev" style="-rotate-180" isBlack />
        </div>
        <div className="custom-pagination w-fit flex items-center gap-x-2" />
        <div className="h-11 flex items-center justify-center">
          <ShowButton btnStyle="fund-button-next" style="" isBlack />
        </div>
      </div>
    </div>
  );
};
export default FundraisersGallery;
