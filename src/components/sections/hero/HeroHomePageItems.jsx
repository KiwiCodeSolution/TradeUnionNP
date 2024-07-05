import React from "react";
import Protect from "@/images/home/icon_protect.svg";
import Achievement from "@/images/home/icon_achievement.svg";
import Sport from "@/images/home/icon_sport.svg";
import Football from "@/images/home/icon_football.svg";
import Image from "next/image";

const parseText = text => {
  const parts = text.split(/(<strong>.*?<\/strong>)/g);
  return parts.map((part, index) => {
    if (part.startsWith("<strong>") && part.endsWith("</strong>")) {
      return <strong key={index}>{part.replace(/<\/?strong>/g, "")}</strong>;
    }
    return part;
  });
};

const ITEMS = [
  { image: Protect, text: `Захист прав і інтересів членів Профспілки` },
  { image: Achievement, text: "Досягнення високих стандартів умов праці" },
  { image: Sport, text: "Різноманітне дозвілля працівників" },
  {
    image: Football,
    text: "Розвиток спорту та популяризація здорового способу життя",
  },
];

const updatedITEMS = ITEMS.map(item => {
  let textWithStrong = item.text;

  if (textWithStrong.includes("Захист")) {
    textWithStrong = textWithStrong.replace("Захист", "<strong>Захист</strong>");
  }
  if (textWithStrong.includes("умов праці")) {
    textWithStrong = textWithStrong.replace("умов праці", "<strong>умов праці</strong>");
  }
  if (textWithStrong.includes("дозвілля")) {
    textWithStrong = textWithStrong.replace("дозвілля", "<strong>дозвілля</strong>");
  }
  if (textWithStrong.includes("Розвиток спорту")) {
    textWithStrong = textWithStrong.replace("Розвиток спорту", "<strong>Розвиток спорту</strong>");
  }

  return {
    ...item,
    text: parseText(textWithStrong),
  };
});

const HeroHomePageItems = () => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 w-full gap-y-6 md:gap-y-2 mt-10 gap-x-6">
      {updatedITEMS.map((el, index) => (
        <li key={index + 1} className="flex gap-x-4 items-center">
          <Image
            src={el.image}
            width={73}
            height={73}
            alt="зображення, що характеризує один з основних принципів та напрямів роботи Профспілки"
          />
          <h2 className="text-[15px]">{el.text}</h2>
        </li>
      ))}
    </ul>
  );
};

export default HeroHomePageItems;
