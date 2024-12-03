"use client";
import { useEffect, useState } from "react";
import BlogItem from "../blog/BlogItem";
import { NEWS_SECTIONS } from "@/constants/news_sections";
import { BaseURL } from "@/constants/BaseUrl";

const BUTTONS = NEWS_SECTIONS;

const FilterNews = () => {
  const [nameButton, setNameButton] = useState("Новини");
  const [news, setNews] = useState([]);
  console.log(nameButton);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const res = await fetch(`${BaseURL}news`, { method: "GET", cache: "no-store" });
      if (!res.ok) throw new Error("Failed to fetch news");
      const data = await res.json();

      setNews(data);
    } catch (error) {
      console.error(error);
      toast.error("Не вдалося завантажити новини.");
    }
  };

  const currentNews =
    nameButton === "Новини"
      ? news.slice(0, 3)
      : news.filter(el => el.sections.includes(nameButton)).slice(0, 3);

  return (
    <div className="relative z-[7]">
      <div className="w-fit flex flex-col md:flex-row mx-auto mb-6">
        {BUTTONS.map((el, index) => (
          <button
            className={`w-full md:w-fit px-6 py-3 xl:px-10 xl:py-3 md:pt-0 md:pb-4 text-lg transition border-solid border-b-2 ${
              el === nameButton
                ? "text-red border-red"
                : "text-bgBlack border-main border-opacity-20"
            }`}
            onClick={() => setNameButton(el)}
            key={index + 58}
          >
            {el}
          </button>
        ))}
      </div>

      <div className="min-h-[400px]">
        {currentNews.length > 0 ? (
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-x-10">
            {currentNews.map(el => (
              <BlogItem key={el.title} item={el} section={"home"} />
            ))}
          </div>
        ) : (
          <h3 className="text-center">Вибачте, по Вашому запиту нічого не знайдено</h3>
        )}
      </div>
    </div>
  );
};

export default FilterNews;
