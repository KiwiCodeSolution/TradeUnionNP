"use client";

import { useEffect } from "react";
import { useStore } from "@/store/StoreProvider";
import PaginatedItems from "@/components/sections/news/PaginatedItems";
import NewsFiltersSection from "@/components/sections/news/NewsFiltersSection";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import Loader from "@/components/UI/loader/Loader";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

const NewsComponent = observer(({ locale }) => {
  const { newsStore } = useStore();
  const news = newsStore.news;
  const isLoading = newsStore.isLoading;
  const router = useRouter();
  const searchParams = useSearchParams();

  // Використовуємо useEffect для того, щоб при першому рендері встановити значення за замовчуванням
  useEffect(() => {
    if (!searchParams.get("section") && !searchParams.get("page")) {
      // Якщо в URL немає параметрів section і page, встановлюємо їх за замовчуванням
      const defaultSection = "vse";
      const defaultPage = 1;
      const path = `/${locale}/novyny`;

      const newURL = `${path}?section=${defaultSection}&page=${defaultPage}`;

      // Оновлюємо URL без перезавантаження сторінки
      router.replace(newURL, undefined, { shallow: true });
    }
  }, [locale, searchParams, router]);

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

  return (
    <>
      <NewsFiltersSection news={news} locale={locale} part={"novyny"} />
      <PaginatedItems section={"news"} items={filteredNewsArray} locale={locale} part={"news"} />
    </>
  );
});

export default NewsComponent;
