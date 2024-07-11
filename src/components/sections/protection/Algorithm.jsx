"use client";

import BaseSection from "@/components/BaseSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Title from "@/components/Title";
import { useEffect, useState } from "react";

const STEPS = [
  {
    title: "1 день",
    text: "Приймаємо ваше звернення (Facebook, телефонна розмова, Viber, запит до Голови ППО, електронна пошта тощо",
  },
  {
    title: "1 день",
    text: "Звіряємо ваше членство у ВПСП ТОВ “Нова Пошта”",
  },
  {
    title: "2-3 день",
    text: "Створюємо алгоритм для вирішення, консультуємося з Головою ППО",
  },
  {
    title: "5-7 день",
    text: "Створення відповідного листа (звернення/ запиту/подання) на керівництво",
  },
  {
    title: "до 7 день",
    text: "Відповідь вам на пошту, що запит в опрацюванні та термін на відповідь",
  },
  {
    title: "7 день",
    text: "Закриття звернення, яке не потребує додаткових запитів",
  },
];

const INVISIBLE = [1, 2, 3, 4, 5, 6, 7];

const Algorithm = () => {
  const [swiperStyle, setSwiperStyle] = useState({
    touchAction: "pan-y",
    paddingLeft: "100px",
    paddingTop: "20px",
  });

  useEffect(() => {
    const updateSwiperStyle = () => {
      if (window.innerWidth < 768) {
        setSwiperStyle({
          touchAction: "pan-y",
          paddingLeft: "100px",
          paddingTop: "20px",
        });
      } else if (window.innerWidth < 1200) {
        setSwiperStyle({
          touchAction: "pan-y",
          paddingLeft: "60px",
          paddingTop: "32px",
        });
      } else {
        setSwiperStyle({
          touchAction: "pan-y",
          paddingLeft: "430px",
          paddingTop: "80px",
        });
      }
    };

    updateSwiperStyle();
    window.addEventListener("resize", updateSwiperStyle);

    return () => {
      window.removeEventListener("resize", updateSwiperStyle);
    };
  }, []);
  return (
    <BaseSection style={"pt-10 bg-white"}>
      <div className="border-dashed border-4 border-bgBlack w-screen border-opacity-20 absolute top-[290px] left-0" />
      <Title tag={"h2"} styles={"text-center"}>
        Алгоритм та{" "}
        <span className="text-red">
          хронологія <br />
          опрацювання
        </span>{" "}
        звернень
      </Title>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        touchMoveStopPropagation={false}
        resistanceRatio={0}
        touchStartPreventDefault={false}
        style={swiperStyle}
        className
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 60,
          },
        }}
      >
        {STEPS.map((el, index) => (
          <SwiperSlide key={el.title + index} className="pt-10 mx-auto">
            <article className="cursor-grab w-64 h-fit relative overflow-visible mx-auto">
              <div className="w-full flex flex-col items-center relative">
                <div className="rotate-45 w-16 h-16 bg-red rounded-md absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 transform z-[2]" />

                <p className="text-white text-[15px] font-bold z-[5]">{index + 1}</p>
                <p className="text-white text-[15px] font-bold z-[5]">крок</p>
              </div>
              <div className="bg-red w-0.5 h-16 mx-auto" />
              <p className="text-xl font-bold text-center">{el.title}</p>
              <p className="text-lg text-grey text-center">{el.text}</p>
            </article>
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
