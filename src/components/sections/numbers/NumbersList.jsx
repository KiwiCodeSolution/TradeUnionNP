"use client";
import { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";
import Image from "next/image";
import { numbersValue } from "@/constants/numbers";
import Blanc from "@/images/home/icon_benef_dog.svg";
import { inter } from "@/app/[locale]/fonts";

const NumberItem = ({ item, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  function formatNumber(number) {
    if (number > 999) {
      return new Intl.NumberFormat("uk-UA").format(number);
    }
    return number;
  }

  function formatNumberToString(number) {
    return number.toString();
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
      className={` ${
        index === 3 ? "w-[320px] md:w-fit mx-auto" : "w-[304px]"
      } flex md:flex-col items-start gap-7`}
    >
      <Image
        src={item.img}
        width={64}
        height={65}
        alt="тематична іконка, що за змістом відповідає одному з напрямків роботи профспілки"
        className="mx-auto"
      />
      <div className="flex flex-col gap-y-2 md:gap-y-7">
        <p
          className={` ${
            index === 3
              ? "text-[40px] md:text-[95px] xl:text-5xl leading-[1.25]"
              : "text-[50px] md:text-[100px] leading-[1.4]"
          } ${inter.className} md:text-center font-bold flex items-center`}
        >
          <span className="text-[50px]">&gt;</span>
          {index === 3 ? (
            <>
              <CountUp
                start={item.start}
                end={item.end}
                formattingFn={formatNumber}
                className="hidden xl:block"
              />
              <CountUp start={0} end={30} className="xl:hidden" suffix="млн" />
            </>
          ) : (
            <CountUp start={item.start} end={item.end} formattingFn={formatNumberToString} />
          )}
        </p>
        <p className="text-grey text-base md:text-lg md:text-center h-14 md:pl-7">{item.text}</p>
      </div>
    </article>
  );
};

const NumbersList = () => {
  return (
    <ul className="flex flex-col gap-y-6 md:gap-y-16">
      <li className="w-[360px] flex md:flex-col items-start gap-8 mt-16 md:mx-auto">
        <Image
          src={Blanc}
          width={64}
          height={65}
          alt="тематична іконка, що за зображує бланк із відзнакою"
          className="mx-auto"
        />
        <div className="flex flex-col gap-y-4 md:gap-y-7">
          <p
            className={`text-xl md:text-[22px] leading-[1.3] font-bold md:text-center ${inter.className}`}
          >
            "Кращий Колективний договір серед профспілок країни"
          </p>
          <p className="text-grey text-base md:text-lg md:text-center">
            * за версією громадської організації «Трудові ініціативи»
          </p>
        </div>
      </li>
      <li className="w-full flex flex-wrap gap-x-14 md:gap-x-8 xl:gap-x-14 items-center justify-between gap-y-6 md:gap-y-16">
        {numbersValue.map((el, index) => (
          <NumberItem key={el.end} item={el} index={index} />
        ))}
      </li>
    </ul>
  );
};

export default NumbersList;
