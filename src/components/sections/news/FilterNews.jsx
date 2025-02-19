"use client";
import { useEffect, useState } from "react";
import BlogItem from "../blog/BlogItem";
import { NEWS_SECTIONS } from "@/constants/news_sections";
import { observer } from "mobx-react-lite";
import { StoreProvider, useStore } from "@/store/StoreProvider";

const BUTTONS = NEWS_SECTIONS;

const FilterNewsHomePage = observer(() => {
  const { newsStore } = useStore();
  const news = newsStore.news;
  const isLoading = newsStore.isLoading;

  const [nameButton, setNameButton] = useState("Новини");

  useEffect(() => {
    if (news.length === 0 && !isLoading) {
      newsStore.fetchAllNews();
    }
  }, [news, isLoading]);

  if (isLoading) {
    return <Loader />;
  }

  const today = new Date();
  const filteredNewsArray = news
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
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-x-10">
            {currentNews.map(el => (
              <BlogItem key={el._id} item={el} section={"home"} />
            ))}
          </div>
        ) : (
          <h3 className="text-center">Вибачте, по Вашому запиту нічого не знайдено</h3>
        )}
      </div>
    </div>
  );
});

export default function FilterNews() {
  return (
    <StoreProvider>
      <FilterNewsHomePage />
    </StoreProvider>
  );
}
