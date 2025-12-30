"use client";

import ShowButton from "@/components/UI/buttons/ShowButton";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import FundraisersItem from "./FundraisersItem";
import { useEffect, useState } from "react";

const FundraisersGallery = ({ fundraisers, locale }) => {
  const [isSwiper, setIsSwiper] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!fundraisers || fundraisers.length === 0) return null;
  const checkNeedSwiper = () => {
    const width = window.innerWidth;
    let perView = 1;
    if (width >= 1280) perView = 5;
    else if (width >= 768) perView = 3;
    else perView = 1;
    return fundraisers.length > perView;
  };
  useEffect(() => {
    const handleResize = () => {
      setIsSwiper(checkNeedSwiper());
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [fundraisers.length]);

  if (!mounted) return null;

  return (
    <div className="w-full relative flex flex-col pb-20 xl:pb-20 pl-4 md:px-16 fundraisers-gallery">
      {isSwiper && (
        <div className="h-11 hidden xl:flex items-center justify-center absolute top-1/2 left-0 transform -translate-y-1/2 z-[10]">
          <ShowButton btnStyle="fund-button-prev" style="-rotate-180" isBlack />
        </div>
      )}
      {isSwiper ? (
        <Swiper
          modules={[Navigation, A11y, Pagination]}
          rewind={true}
          navigation={
            isSwiper
              ? {
                  nextEl: ".fund-button-next",
                  prevEl: ".fund-button-prev",
                }
              : false
          }
          slidesOffsetAfter={16}
          pagination={
            isSwiper
              ? {
                  el: ".custom-pagination",
                  clickable: true,
                  renderBullet: className => {
                    return `<span class="${className} swiper-pagination-bullet"></span>`;
                  },
                }
              : false
          }
          className="w-full md:!pb-10 xl:!pt-10 md:!pr-5 xl:!pr-2"
          breakpoints={{
            320: { slidesPerView: 1.5, spaceBetween: 16 },
            768: { slidesPerView: 3, spaceBetween: 32 },
            1280: { slidesPerView: 5, spaceBetween: 16 },
          }}
        >
          {fundraisers.map(el => (
            <SwiperSlide key={el._id} className="xl:px-3 mx-auto !h-auto">
              <div className="fundraisers-card min-w-[204px] max-w-[204px] h-full rounded-[32px] overflow-hidden border-[1px] border-[#D8D8D8] mx-auto">
                <FundraisersItem item={el} locale={locale} section="client" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="w-full flex justify-center gap-4 items-stretch">
          {fundraisers.map(el => (
            <div
              className="fundraisers-card w-[204px] max-w-[204px] rounded-[32px] overflow-hidden border border-[#D8D8D8] flex flex-col"
              key={el._id}
            >
              <FundraisersItem item={el} locale={locale} section="client" />
            </div>
          ))}
        </div>
      )}

      {isSwiper && (
        <div className="h-11 hidden xl:flex items-center justify-center absolute top-1/2 right-0 transform -translate-y-1/2 z-[10]">
          <ShowButton btnStyle="fund-button-next" style="" isBlack />
        </div>
      )}

      {isSwiper && (
        <div className="swiper-controls relative flex justify-between items-center pr-4 md:px-16 mx-auto md:w-fit md:gap-x-4 xl:hidden mt-8 md:mt-0">
          <div className="h-11 flex items-center justify-center">
            <ShowButton btnStyle="fund-button-prev" style="-rotate-180" isBlack />
          </div>
          <div className="custom-pagination w-fit flex items-center gap-x-2" />
          <div className="h-11 flex items-center justify-center">
            <ShowButton btnStyle="fund-button-next" style="" isBlack />
          </div>
        </div>
      )}
    </div>
  );
};
export default FundraisersGallery;
