"use client";

import { useState } from "react";
import Image from "next/image";
import SecondPont from "./SecondPont";

const PrinciplesList = ({ principles }) => {
  const [currentPoint, setCurrentPoint] = useState(0);

  const currentPrinciple = principles.find((el, index) => index === currentPoint);
  return (
    <>
      <div className="w-1/2 flex flex-col min-h-[960px]">
        {principles.map((el, index) => (
          <button
            key={el.title}
            className={`w-full h-fit flex items-center rounded-l-2xl p-8 gap-x-4 text-lg font-bold ${
              index === currentPoint ? "bg-white" : ""
            }`}
            onClick={() => setCurrentPoint(index)}
          >
            <Image src={el.image} width={32} height={32} alt={`зображення на тему ${el.title}`} />
            <p className="text-left">{el.title}</p>
          </button>
        ))}
      </div>
      <div
        className={`w-1/2 min-h-[960px] md:min-h-[1160px] xl:min-h-[960px] p-8 ${
          currentPoint === 0
            ? "rounded-b-2xl rounded-r-2xl"
            : currentPoint === principles.length - 1
            ? "rounded-t-2xl rounded-r-2xl"
            : "rounded-2xl"
        }  bg-white text-[15px] flex flex-col gap-y-4`}
      >
        {currentPoint === 1 ? (
          <SecondPont />
        ) : (
          currentPrinciple.texts.map((el, index) => <p key={index + 22}>{el}</p>)
        )}
      </div>
    </>
  );
};

export default PrinciplesList;
