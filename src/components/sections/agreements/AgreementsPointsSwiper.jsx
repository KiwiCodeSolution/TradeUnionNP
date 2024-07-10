"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import principles from "@/data/principles.json";
import Image from "next/image";
import SecondPont from "./SecondPont";
import ShowButton from "@/components/UI/buttons/ShowButton";

const AgreementsPointsSwiper = () => {
  const [currentPoint, setCurrentPoint] = useState(0);

  const handleChangeCurrentPoint = type => {
    setCurrentPoint(prev => {
      if (type === "increment") return prev + 1;
      if (type === "decrement" && prev > 0) return prev - 1;
      return prev;
    });
  };

  const currentPrinciple = principles[currentPoint];

  return (
    <div className="w-full h-full mt-8 relative md:hidden">
      <Swiper
        modules={[Navigation, A11y]}
        slidesPerView={1}
        navigation={{
          nextEl: ".point-button-next",
          prevEl: ".point-button-prev",
        }}
      >
        {principles.map((el, index) => (
          <SwiperSlide key={el.title}>
            <article className="w-full h-full mx-auto flex flex-col gap-y-8">
              <div className="w-3/5 h-[96px] flex items-center gap-x-4">
                <Image
                  src={el.image}
                  width={32}
                  height={32}
                  alt={`зображення на тему ${el.title}`}
                />
                <p className="text-base font-bold">{el.title}</p>
              </div>
              <div className="w-full min-h-[2000px] bg-white rounded-2xl p-8 text-[15px] flex flex-col gap-y-4">
                {index === 1 ? (
                  <SecondPont />
                ) : (
                  currentPrinciple?.texts?.map((text, idx) => <p key={idx + 22}>{text}</p>)
                )}
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-fit absolute top-5 right-0 flex justify-center items-center gap-x-8 z-[5]">
        <ShowButton
          btnStyle="point-button-prev"
          style="-rotate-180"
          func={() => handleChangeCurrentPoint("decrement")}
        />
        <ShowButton
          btnStyle="point-button-next"
          func={() => handleChangeCurrentPoint("increment")}
        />
      </div>
    </div>
  );
};

export default AgreementsPointsSwiper;
