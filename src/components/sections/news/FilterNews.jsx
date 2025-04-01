"use client";
import { useEffect, useState } from "react";
import BlogItem from "../blog/BlogItem";
import { NEWS_SECTIONS } from "@/constants/news_sections";
import LinkButton from "@/components/UI/buttons/LinkButton";
import { BaseURL } from "@/constants/BaseUrl";

const BUTTONS = NEWS_SECTIONS;

export default function FilterNews({ locale }) {
  const [allNews, setAllNews] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(`${BaseURL}news`, { method: "GET", cache: "no-store" });

        if (!res.ok) {
          throw new Error("Failed to fetch news");
        }

        const data = await res.json();
        setAllNews(data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  const [nameButton, setNameButton] = useState("Новини");

  // Якщо новин немає після завантаження
  if (allNews.length === 0) {
    return <h3 className="text-center">Вибачте, новини не знайдені</h3>;
  }

  const today = new Date();
  const filteredNewsArray = allNews
    .filter(item => item.status === "published" && new Date(item.publishDate) <= today)
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));

  const currentNews =
    nameButton === "Новини"
      ? filteredNewsArray.slice(0, 3)
      : filteredNewsArray.filter(el => el.sections.includes(nameButton)).slice(0, 3);

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 gap-x-10">
            {currentNews.map(el => (
              <BlogItem key={el._id} item={el} section={"home"} locale={locale} part={"novyny"} />
            ))}
          </div>
        ) : (
          <h3 className="text-center">Вибачте, по Вашому запиту нічого не знайдено</h3>
        )}
      </div>

      <LinkButton
        view={"transparent"}
        goTo={"/novyny"}
        locale={locale}
        goToPage
        icon
        style={
          "border border-red mt-9 mx-auto relative z-[7] py-[15px] px-[33px] rounded-full w-fit uppercase flex items-center justify-between gap-x-5 text-[14px] font-bold"
        }
      >
        Всі новини
      </LinkButton>
    </div>
  );
}
