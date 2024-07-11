"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import ShowButton from "@/components/UI/buttons/ShowButton";
import projects from "@/data/projects.json";

import "swiper/css";
import "swiper/css/navigation";
import ProjectsItem from "./ProjectsItem";

const ProjectsSwiper = () => {
  return (
    <div className="w-full md:w-4/5 relative">
      <Swiper
        modules={[Navigation, A11y]}
        loop={true}
        speed={500}
        navigation={{
          nextEl: ".project-button-next",
          prevEl: ".project-button-prev",
        }}
        className="project-swiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {projects.map(el => (
          <SwiperSlide key={el.text}>
            <ProjectsItem item={el} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-fit absolute -top-10 right-0 md:top-[350px]  md:-left-60 flex justify-center items-center gap-x-8 z-[5]">
        <ShowButton btnStyle="project-button-prev" style="-rotate-180" />
        <ShowButton btnStyle="project-button-next" />
      </div>
    </div>
  );
};

export default ProjectsSwiper;
