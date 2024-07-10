"use client";

import Slide from "./Slide";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ShowButton from "@/components/UI/buttons/ShowButton";

const FIRST_SLIDE = [
  {
    title: "Депреміювали",
    text: "Депреміювали працівника на 1200 грн., він звертається за захистом до Профспілки",
  },
  { title: "Звернувся", text: "Ми отримали звернення та внесли його до обліку" },
  {
    title: "Подаємо запит",
    text: "Написали Директору департаменту праці та Директору кадрового адміністрування",
  },
  {
    title: "Аргументуємо",
    text: "Спираючись на закони, нормативно-правові акти та Колективний договір, вимагаємо нарахувати вирахувані кошти",
  },
  { title: "Скасовуємо", text: "Отримуємо відповідь про скасування депреміювання" },
  { title: "Вирішено", text: "Працівник отримує вирахувані кошти разом з заробітною платою" },
];

const SECOND_SLIDE = [
  {
    title: "Лікарняний",
    text: "Працівнику у роз'ясненні по заробітній платі було вказано, що лікарняні нараховані, але вони не надійшли",
  },
  { title: "Звернувся", text: "Працівник звернувся за допомогою до Профспілки" },
  {
    title: "Подаємо запит",
    text: "Зробили запит до бухгалтерії з проханням роз’яснити нарахування лікарняних",
  },
  {
    title: "Отримали відповідь",
    text: "Відділ нарахування лікарняних та відпускних частину сплатив із зп, а частину, за яку відповідає фонд соціального страхування, буде виплачено після розгляду заявки",
  },
  { title: "Вирішено", text: "Звернення вирішено, працівник отримав роз’яснення" },
];

const SlidesSwiper = () => {
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
        <SwiperSlide>
          <Slide slide={FIRST_SLIDE} title={"Депреміювання"} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide slide={SECOND_SLIDE} title={"Лікарняний"} />
        </SwiperSlide>
      </Swiper>
      <div className="w-fit absolute -top-8 md:top-5 right-0 flex justify-center items-center gap-x-8 z-[5]">
        <ShowButton btnStyle="slide-button-prev" style="-rotate-180" />
        <ShowButton btnStyle="slide-button-next" />
      </div>
    </div>
  );
};

export default SlidesSwiper;
