"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import SearchItem from "./SearchItem";

import { inter } from "@/app/[locale]/(client)/fonts";
import { searchNews } from "@/services/searchService";

export default function SearchPageComponent() {
  const searchParams = useSearchParams();
  const search = searchParams.get("query");

  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await searchNews(search);
        setSearchResult(result);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchData();
  }, [search]);

  return (
    <>
      <p className="w-fit mx-auto text-2xl font-bold">{search}</p>

      <div className="w-full flex flex-col gap-y-2 py-5">
        {searchResult.length === 0 && (
          <h2 className="text-2xl text-center">
            Вибачте, за запитом{" "}
            <span className={`${inter.className} font-bold text-red`}>{search}</span> нічого не
            знайдено. Спробуйте змінити запит та повторити спробу пошуку.{" "}
          </h2>
        )}
        {searchResult.length > 0 && searchResult.map(el => <SearchItem key={el._id} item={el} />)}
      </div>
    </>
  );
}
