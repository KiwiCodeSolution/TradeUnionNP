"use client";

import { useSearchParams } from "next/navigation";
import news from "@/data/news.json";
import regions from "@/data/ppo.json";
import SearchItem from "./SearchItem";

export default function SearchPageComponent({ text, warning }) {
  const searchParams = useSearchParams();

  const search = searchParams.get("query");
  const filteredNews = news.filter(
    el =>
      (el.title && el.title.toLowerCase().includes(search.toLowerCase())) ||
      (el.shortText && el.shortText.toLowerCase().includes(search.toLowerCase()))
  );

  const filteredRegions = regions.filter(
    el =>
      (el.region && el.region.toLowerCase().includes(search.toLowerCase())) ||
      (el.director && el.director.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <>
      <p className=" px-5">
        {text} {search}
      </p>

      <p className="mt-7 px-5">
        <strong> {warning[0]}:</strong> {warning[1]}
      </p>

      <div className="w-full flex flex-col gap-y-2 py-5">
        {filteredNews.length > 0 && filteredNews.map(el => <SearchItem key={el.id} item={el} />)}
        {filteredRegions.length > 0 &&
          filteredRegions.map(el => <SearchItem key={el.region} item={el} />)}
      </div>
    </>
  );
}
