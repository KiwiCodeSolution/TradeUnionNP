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
    <div className="w-4/5 relative">
      <Swiper
        modules={[Navigation, A11y]}
        slidesPerView={3}
        loop={true}
        speed={500}
        navigation={{
          nextEl: ".project-button-next",
          prevEl: ".project-button-prev",
        }}
        className="project-swiper"
      >
        {projects.map(el => (
          <SwiperSlide key={el.text}>
            <ProjectsItem item={el} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-fit absolute bottom-[16px] -left-60 flex justify-center items-center gap-x-8 z-[5]">
        <ShowButton btnStyle="project-button-prev" style="-rotate-180" />
        <ShowButton btnStyle="project-button-next" />
      </div>
    </div>
  );
};

export default ProjectsSwiper;
