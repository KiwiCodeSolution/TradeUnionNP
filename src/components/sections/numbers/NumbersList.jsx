"use client";
import { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";
import Image from "next/image";
import { numbersValue } from "@/constants/numbers";
import Blanc from "@/images/home/icon_benef_dog.svg";

const NumberItem = ({ item, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  function formatNumber(number) {
    if (number > 999) {
      return new Intl.NumberFormat("uk-UA").format(number);
    }
    return number;
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <article
      ref={ref}
      className={` ${index === 3 ? "w-fit" : "w-[30%]"} flex flex-col gap-y-7 mx-auto`}
    >
      <Image
        src={item.img}
        width={64}
        height={65}
        alt="тематична іконка, що за змістом відповідає одному з напрямків роботи профспілки"
        className="mx-auto"
      />
      <p
        className={` ${
          index === 3 ? "text-5xl leading-[1.25]" : "text-[100px] leading-[1.4]"
        } inter text-center font-bold`}
      >
        <span>&gt;</span>
        <CountUp start={item.start} end={item.end} formattingFn={formatNumber} />
      </p>
      <p className="text-grey text-lg text-center">{item.text}</p>
    </article>
  );
};

const NumbersList = () => {
  return (
    <ul className="flex flex-col gap-y-6 md:gap-y-16">
      <li className="w-[320px] flex flex-col gap-y-7 mt-16 mx-auto">
        <Image
          src={Blanc}
          width={64}
          height={65}
          alt="тематична іконка, що за зображує бланк із відзнакою"
          className="mx-auto"
        />
        <p className="text-[22px] leading-[1.3] font-bold inter text-center">
          "Кращий Колективний договір серед профспілок країни"
        </p>
        <p className="text-grey text-lg text-center">
          * за версією громадської організації «Трудові ініціативи»
        </p>
      </li>
      <li className="w-full flex flex-wrap gap-x-7 items-center justify-between gap-y-6 md:gap-y-16">
        {numbersValue.map((el, index) => (
          <NumberItem key={el.end} item={el} index={index} />
        ))}
      </li>
    </ul>
  );
};

export default NumbersList;