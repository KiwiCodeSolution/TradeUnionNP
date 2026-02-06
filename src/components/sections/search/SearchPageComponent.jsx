"use client";

import { inter } from "@/app/[locale]/(client)/fonts";
import { Arrow } from "@/components/icons/IconsComponents";
import Loader from "@/components/UI/loader/Loader";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { searchNews } from "@/services/searchService";
import { useRouter, useSearchParams } from "next/navigation";
import { startTransition, useEffect, useMemo, useState } from "react";
import ReactPaginate from "react-paginate";
import SearchItem from "./SearchItem";

export default function SearchPageComponent({ locale }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const width = useWindowWidth();

  const search = searchParams.get("query") || "";
  const pageParam = parseInt(searchParams.get("page")) || 1;
  const itemsPerPage = 15;

  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(pageParam);

  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;

  const marginPagesDisplayed = isMobile ? 1 : isTablet ? 2 : 3;
  const pageRangeDisplayed = isMobile ? 1 : isTablet ? 2 : 3;

  // --- завантаження результатів пошуку ---
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        if (!search) {
          setSearchResult([]);
          return;
        }
        const result = await searchNews(search);
        setSearchResult(result);
      } catch (error) {
        console.error("Search error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [search]);

  // --- синхронізація сторінки з URL ---
  useEffect(() => {
    const page = parseInt(searchParams.get("page")) || 1;
    setCurrentPage(page);
  }, [searchParams]);

  // --- обчислення відображених елементів ---
  const pageCount = Math.max(1, Math.ceil(searchResult.length / itemsPerPage));

  const sortedResults = useMemo(() => {
    return [...searchResult].sort((a, b) => {
      if (a.publishDate && b.publishDate) {
        return new Date(b.publishDate) - new Date(a.publishDate);
      }
      if (a.publishDate) return -1;
      if (b.publishDate) return 1;
      return 0; // обидва без дати — порядок не міняємо
    });
  }, [searchResult]);

  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return sortedResults.slice(start, start + itemsPerPage);
  }, [sortedResults, currentPage, itemsPerPage]);

  // --- оновлення URL при зміні сторінки ---
  const handlePageClick = ({ selected }) => {
    const newPage = selected + 1;
    setCurrentPage(newPage);

    const newURL = `/${locale}/poshuk-po-saytu?query=${encodeURIComponent(search)}&page=${newPage}`;

    // миттєве оновлення адресного рядка
    window.history.replaceState(null, "", newURL);

    // оновлення Next.js router без повної навігації
    startTransition(() => router.replace(newURL, { scroll: false }));

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const sortedItems = currentItems.sort(
    (a, b) => new Date(b.publishDate) - new Date(a.publishDate)
  );

  const nextLabel = (
    <div className="pagination-page">
      <Arrow />
    </div>
  );
  const previousLabel = (
    <div className="pagination-page">
      <Arrow className="rotate-180" />
    </div>
  );

  if (isLoading) return <Loader />;

  return (
    <>
      <p className="w-fit mx-auto text-2xl font-bold">{search}</p>

      <div className="w-full flex flex-col gap-y-2 py-5">
        {searchResult.length === 0 && (
          <h2 className="text-2xl text-center">
            Вибачте, за запитом{" "}
            <span className={`${inter.className} font-bold text-red`}>{search}</span> нічого не
            знайдено.
          </h2>
        )}

        {currentItems.map(el => (
          <SearchItem key={el._id} item={el} />
        ))}
      </div>

      {searchResult.length > itemsPerPage && (
        <div className="w-full flex justify-center min-h-[54px] relative">
          <ReactPaginate
            previousLabel={previousLabel}
            breakLabel="..."
            nextLabel={nextLabel}
            pageCount={pageCount}
            marginPagesDisplayed={marginPagesDisplayed}
            pageRangeDisplayed={pageRangeDisplayed}
            onPageChange={handlePageClick}
            forcePage={currentPage - 1}
            containerClassName="pagination-container pagination-container_search"
            pageClassName="pagination-page"
            pageLinkClassName="pagination-link"
            activeClassName="pagination-active"
            previousClassName="pagination-previous"
            nextClassName="pagination-next"
          />
        </div>
      )}
    </>
  );
}
