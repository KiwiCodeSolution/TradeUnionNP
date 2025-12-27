"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const Value = ({ item, index, textStyle, className, children, currency }) => {
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
      className={`
    ${className} w-full min-h-[180px] flex flex-col justify-center relative rounded-[32px] values-item py-3 xl:py-10 overflow-hidden ${
        index !== 0 && "px-3"
      } ${index === 3 || index === 4 ? "items-start" : "items-center"}
  `}
    >
      {index === 0 && (
        <Image
          src="/images/defenders/bg_red_grad.png"
          className="absolute bottom-0 left-2 md:left-1/2 md:-translate-x-1/2 w-[260px] h-[122px]"
          width={260}
          height={122}
        />
      )}
      {index === 1 && (
        <Image
          src="/images/defenders/bg_red_grad_1.png"
          className="absolute -bottom-[22px] left-1/2 -translate-x-1/2 w-[264px] h-[91px]"
          width={264}
          height={91}
        />
      )}
      {index === 2 && (
        <Image
          src="/images/defenders/bg_red_grad_4.png"
          className="absolute -top-[25px] left-1/2 -translate-x-1/2 
               xl:left-auto xl:right-0 xl:translate-x-0
               w-[357px] h-[150px]"
          width={357}
          height={150}
        />
      )}
      {index === 3 && (
        <Image
          src="/images/defenders/bg_red_grad_3.png"
          className="absolute -bottom-[6px] left-[95px] w-[206px] h-[72px]"
          width={206}
          height={72}
        />
      )}
      {index === 4 && (
        <Image
          src="/images/defenders/bg_red_grad_2.png"
          className="absolute top-[18px] right-[95px] w-[232px] h-[90px]"
          width={232}
          height={90}
        />
      )}
      <div className="flex flex-col gap-y-2 md:gap-y-7">
        <p
          className={` ${
            index === 0
              ? "text-5xl md:text-[80px] text-center"
              : index === 1 || index === 2
              ? "text-[80px] xl:text-[110px] text-center"
              : "text-[40px] xl:text-[60px] text-left"
          } text-red leading-normal font-bold ${textStyle}`}
        >
          <CountUp start={item.start} end={item.end} formattingFn={formatNumber} />
          {(index === 0 || index === 3 || index === 4) && <span> {currency}</span>}
        </p>
        <div
          className={`w-full flex items-center gap-x-3 ${
            index === 0 && "md:gap-x-5 md:justify-end md:pr-[100px]"
          }`}
        >
          <p
            className={`${index === 0 ? "text-2xl w-2/3 md:w-[200px] md:text-right" : "text-xl"} ${
              index === 3 || index === 4 ? "text-left" : "text-center"
            } text-grey  ${textStyle}`}
          >
            {item.label}
          </p>
          {index === 0 && (
            <Image src="/images/defenders/people.png" width={66} height={77} alt="" className="" />
          )}
        </div>
      </div>
      {children}
    </article>
  );
};

export default Value;
