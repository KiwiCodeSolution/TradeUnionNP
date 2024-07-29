"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import principles from "@/data/principles.json";
import Image from "next/image";
import SecondPont from "./SecondPont";

const AgreementsPointsList = () => {
  const t = useTranslations("Collective_labour_agreement");
  const [currentPoint, setCurrentPoint] = useState(0);

  const currentPrinciple = principles.find((el, index) => index === currentPoint);

  return (
    <div className="h-full hidden md:flex items-start mt-8">
      <div className="w-1/2 flex flex-col min-h-[960px]">
        {principles.map((el, index) => (
          <button
            key={t(`collective_agreement.${index}.title`)}
            className={`w-full h-fit flex items-center rounded-l-2xl p-8 gap-x-4 text-lg font-bold ${
              index === currentPoint ? "bg-white" : ""
            }`}
            onClick={() => setCurrentPoint(index)}
          >
            <Image
              src={el.image}
              width={32}
              height={32}
              alt={`зображення на тему ${t(`collective_agreement.${index}.title`)}`}
            />
            <p className="text-left">{t(`collective_agreement.${index}.title`)}</p>
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
          currentPrinciple.texts.map((el, index) => (
            <p key={index + 22}>{t(`collective_agreement.${currentPoint}.texts.${index}`)}</p>
          ))
        )}
      </div>
    </div>
  );
};

export default AgreementsPointsList;
