"use client";

import BaseSection from "@/components/BaseSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Wrapper from "@/components/Wrapper";

const STEPS = [
  {
    title: "1 крок",
    text: "Приймаємо ваше звернення (Facebook, телефонна розмова, Viber, запит до Голови ППО, електронна пошта тощо",
  },
  {
    title: "2 крок",
    text: "Звіряємо ваше членство у ВПСП ТОВ “Нова Пошта”",
  },
  {
    title: "3 крок",
    text: "Створюємо алгоритм для вирішення, консультуємося з Головою ППО",
  },
  {
    title: "4 крок",
    text: "Створення відповідного листа (звернення/ запиту/подання) на керівництво",
  },
  {
    title: "5 крок",
    text: "Відповідь вам на пошту, що запит в опрацюванні та термін на відповідь",
  },
  {
    title: "6 крок",
    text: "Закриття звернення, яке не потребує додаткових запитів",
  },
];

const INVISIBLE = [1, 2, 3, 4, 5, 6, 7];

const Algorithm = () => {
  return (
    <BaseSection>
      <div className="border-dashed border-4 border-bgBlack w-screen border-opacity-20 absolute top-3 left-0" />
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={5}
        touchMoveStopPropagation={false}
        resistanceRatio={0}
        touchStartPreventDefault={false}
        style={{ touchAction: "pan-y", paddingLeft: "300px" }}
        className
      >
        {STEPS.map(el => (
          <SwiperSlide key={el.title} className="border border-red">
            <div className="cursor-grab bg-lime-400">{el.text}</div>
          </SwiperSlide>
        ))}
        {INVISIBLE.map(el => (
          <SwiperSlide key={el + 42} className="bg-slate-300"></SwiperSlide>
        ))}
      </Swiper>
    </BaseSection>
  );
};

export default Algorithm;
