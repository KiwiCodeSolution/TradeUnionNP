"use client";

import React, { useRef, useState, useEffect } from "react";

const DragSlider = ({ steps, step }) => {
  const sliderRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const start = e => {
      setIsDown(true);
      slider.classList.add("active");
      const pageX = e.pageX || e.touches[0].pageX;
      setStartX(pageX - slider.offsetLeft);
      setScrollLeft(slider.scrollLeft);
    };

    const move = e => {
      if (!isDown) return;
      e.preventDefault();

      const pageX = e.touches ? e.touches[0]?.pageX : e.pageX;
      if (!pageX) return; // Запобігаємо помилкам

      const dist = pageX - startX;
      slider.scrollLeft = scrollLeft - dist;
    };

    const end = () => {
      setIsDown(false);
      slider.classList.remove("active");
    };

    // Додаємо слухачі подій
    slider.addEventListener("mousedown", start);
    slider.addEventListener("touchstart", start);
    slider.addEventListener("mousemove", move);
    slider.addEventListener("touchmove", move);
    slider.addEventListener("mouseleave", end);
    slider.addEventListener("mouseup", end);
    slider.addEventListener("touchend", end);

    // Видаляємо слухачі при розмонтуванні компонента
    return () => {
      slider.removeEventListener("mousedown", start);
      slider.removeEventListener("touchstart", start);
      slider.removeEventListener("mousemove", move);
      slider.removeEventListener("touchmove", move);
      slider.removeEventListener("mouseleave", end);
      slider.removeEventListener("mouseup", end);
      slider.removeEventListener("touchend", end);
    };
  }, [isDown, startX, scrollLeft]);

  return (
    <div className="wrapper-slider">
      <ul ref={sliderRef} className="items">
        <li className="hidden xl:inline-block w-[288px] mr-5" />
        <li className="hidden xl:inline-block w-[288px] mr-5" />
        {Array.from({ length: steps.length }, (_, i) => (
          <li className="cursor-grab w-72 mx-auto item" key={i}>
            <div className="w-full flex flex-col items-center relative">
              <div className="rotate-45 w-16 h-16 bg-red rounded-md absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 transform z-[2]" />

              <p className="text-white text-[15px] font-bold z-[5]">{i + 1}</p>
              <p className="text-white text-[15px] font-bold z-[5]">{step}</p>
            </div>
            <div className="bg-red w-0.5 h-16 mx-auto" />
            <p className="text-xl font-bold text-center">{steps[i].title}</p>
            <p className="min-h-[90px] text-lg text-grey text-center text-wrap">{steps[i].text}</p>
          </li>
        ))}
        <li className="hidden xl:inline-block w-[288px] mr-5" />
        <li className="hidden xl:inline-block w-[288px] mr-5" />
        <li className="hidden xl:inline-block w-[288px]" />
      </ul>
    </div>
  );
};

export default DragSlider;
