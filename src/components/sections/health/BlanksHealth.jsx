"use client";

import { useTranslations } from "next-intl";
import FileButton from "@/components/UI/buttons/FileButton";
import RedDot from "@/components/UI/RedDot";
import Title from "@/components/Title";
import OpenClose from "@/images/health/open.png";
import Image from "next/image";
import { useState } from "react";

const BlanksHealth = ({ documents, name }) => {
  const t = useTranslations("Health");
  const [openItems, setOpenItems] = useState({});

  const toggleItem = title => {
    setOpenItems(prev => ({
      ...prev,
      [title]: !prev[title], // Перемикаємо конкретний елемент
    }));
  };

  return (
    <>
      <ul className="w-full hidden xl:flex flex-col gap-y-6 mx-auto">
        {documents.map(el => (
          <li
            key={el.title}
            className="w-full rounded-[20px] bg-[#F4F4F4] flex gap-x-11 pt-6 px-[38px] pb-[30px]"
          >
            <div className="w-2/5 flex flex-col">
              <Title tag={"h4"} styles={"mb-[15px]"}>
                {el.title}
              </Title>
              <p className="text-red text-[22px] font-extrabold mb-6">{el.text}</p>
              <FileButton link={el.file} name={name} />
            </div>
            <ul className="w-3/5">
              <li>
                <h4 className="text-lg font-bold mb-2.5">{t(`section`)}:</h4>
              </li>
              {el.points.map(point => (
                <li className="w-full flex items-center gap-x-4" key={point}>
                  <RedDot />
                  <p className="w-[calc(100%-9px-12px)] text-lg text-grey">{point}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <ul className="w-full flex xl:hidden flex-col gap-y-6 mx-auto">
        {documents.map(el => (
          <li
            key={el.title}
            className="w-full rounded-[20px] bg-[#F4F4F4] flex flex-col gap-y-6 p-5 md:pt-6 md:px-[38px] md:pb-[30px]"
          >
            <div className="w-full flex flex-col md:flex-row items-baseline justify-between">
              <h4 className="md:mb-[15px] text-[25px] md:text-[30px] font-extrabold">{el.title}</h4>
              <p className="min-w-[130px] text-red text-xl md:text-[22px] font-extrabold">
                {el.text}
              </p>
            </div>
            <ul className="w-full">
              <li className="flex">
                <h4 className="text-lg font-bold mb-2.5">{t(`section`)}:</h4>
                <button
                  className="w-6 h-6 flex items-center justify-center md:hidden"
                  onClick={() => toggleItem(el.title)}
                >
                  <Image
                    src={OpenClose}
                    width={12}
                    height={6}
                    alt="кнопка відкриття детальної інформації"
                    className={openItems[el.title] ? "rotate-180" : ""}
                  />
                </button>
              </li>
              <li className="hidden md:block">
                {el.points.map(point => (
                  <div className="w-full flex items-center gap-x-4 mb-2" key={point}>
                    <RedDot />
                    <p className="w-[calc(100%-9px-12px)] text-lg text-grey">{point}</p>
                  </div>
                ))}
              </li>
              <li className="md:hidden">
                {openItems[el.title] &&
                  el.points.map(point => (
                    <div className="w-full flex items-center gap-x-4 mb-2" key={point}>
                      <RedDot />
                      <p className="w-[calc(100%-9px-12px)] text-lg text-grey">{point}</p>
                    </div>
                  ))}
              </li>
            </ul>
            <FileButton link={el.file} name={name} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default BlanksHealth;
