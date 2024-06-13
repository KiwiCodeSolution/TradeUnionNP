"use client";
import { useState } from "react";

const BUTTONS = ["Всі новини", "Дозвілля", "Інтерв`ю", "Звітність", "Стаття"];

const FilterNews = () => {
  const [nameButton, setNameButton] = useState("Всі новини");
  return (
    <>
      <div className="w-fit flex mx-auto">
        {BUTTONS.map(el => (
          <button
            className={`w-fit px-10 pb-4 text-lg transition border-solid border-b-2  ${
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
      <div className="w-full h-[600px] mx-auto text-center py-10">
        News section here. Filter {nameButton}
      </div>
    </>
  );
};

export default FilterNews;