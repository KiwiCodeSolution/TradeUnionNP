import React from "react";
import { useTranslations } from "next-intl";
import Protect from "@/images/home/icon_protect.svg";
import Achievement from "@/images/home/icon_achievement.svg";
import Sport from "@/images/home/icon_sport.svg";
import Football from "@/images/home/icon_football.svg";
import Image from "next/image";

const HeroHomePageItems = () => {
  const t = useTranslations("HomePage");
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 w-full gap-y-6 md:gap-y-2 mt-10 gap-x-6">
      <li className="flex gap-x-4 items-center">
        <Image
          src={Protect}
          width={73}
          height={73}
          alt="зображення, що характеризує один з основних принципів та напрямів роботи Профспілки"
        />
        <h2 className="text-[15px]">
          <strong>{t(`heroText.protect.0`)}</strong>
          {t(`heroText.protect.1`)}
        </h2>
      </li>
      <li className="flex gap-x-4 items-center">
        <Image
          src={Achievement}
          width={73}
          height={73}
          alt="зображення, що характеризує один з основних принципів та напрямів роботи Профспілки"
        />
        <h2 className="text-[15px]">
          {t(`heroText.achievement.0`)} <strong>{t(`heroText.achievement.1`)}</strong>
        </h2>
      </li>
      <li className="flex gap-x-4 items-center">
        <Image
          src={Sport}
          width={73}
          height={73}
          alt="зображення, що характеризує один з основних принципів та напрямів роботи Профспілки"
        />
        <h2 className="text-[15px]">
          {t(`heroText.sport.0`)} <strong>{t(`heroText.sport.1`)}</strong> {t(`heroText.sport.2`)}
        </h2>
      </li>
      <li className="flex gap-x-4 items-center">
        <Image
          src={Football}
          width={73}
          height={73}
          alt="зображення, що характеризує один з основних принципів та напрямів роботи Профспілки"
        />
        <h2 className="text-[15px]">
          <strong>{t(`heroText.football.0`)}</strong>
          {t(`heroText.football.1`)}
        </h2>
      </li>
    </ul>
  );
};

export default HeroHomePageItems;
