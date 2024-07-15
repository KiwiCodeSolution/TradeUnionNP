"use client";
import { useState } from "react";
import news from "@/data/news.json";
import BlogItem from "../blog/BlogItem";

const BUTTONS = ["Всі новини", "Дозвілля", "Інтерв`ю", "Звітність", "Стаття"];

const FilterNews = () => {
  const [nameButton, setNameButton] = useState("Всі новини");
  const currentNews = news.slice(0, 3);

  return (
    <div className="relative z-[7]">
      <div className="w-fit flex flex-col md:flex-row mx-auto mb-6">
        {BUTTONS.map(el => (
          <button
            className={`w-full md:w-fit px-6 py-3 xl:px-10 xl:py-3 md:pt-0 md:pb-4 text-lg transition border-solid border-b-2 ${
              el === nameButton
                ? "text-red border-red"
                : "text-bgBlack border-main border-opacity-20"
            }`}
            onClick={() => setNameButton(el)}
            key={el}
          >
            {el}
          </button>
        ))}
      </div>
      {/* <div className="w-full h-[600px] mx-auto text-center py-10">
        News section here. Filter {nameButton}
      </div> */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-x-10">
        {currentNews.map(el => (
          <BlogItem key={el.title} item={el} />
        ))}
      </div>
    </div>
  );
};

export default FilterNews;
