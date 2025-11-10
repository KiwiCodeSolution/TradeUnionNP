"use client";
import BaseSection from "@/components/BaseSection";
import { Arrow } from "@/components/icons/IconsComponents";
import Wrapper from "@/components/Wrapper";
import { sectionMap } from "@/constants/news_sections";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { startTransition, useEffect, useMemo, useState } from "react";
import ReactPaginate from "react-paginate";
import NewsItem from "./NewsItem";

const PaginatedItems = ({ section, items, onToggleArchive, isArchive, onDelete, locale, part }) => {
  const itemsPerPage = section !== "admin" ? 9 : 3;
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const getSectionParams = searchParams.get("section") || "vse";
  const currentPageFromURL = parseInt(searchParams.get("page")) || 1;
  const [currentPage, setCurrentPage] = useState(currentPageFromURL);

  const filterSection = sectionMap[getSectionParams] || "Новини";

  // синхронізація сторінки з URL
  useEffect(() => {
    const page = parseInt(searchParams.get("page")) || 1;
    setCurrentPage(page);
  }, [searchParams]);

  // фільтрація — мемоізована для швидкодії
  const filteredItems = useMemo(() => {
    if (filterSection === "Новини") return items;
    return items.filter(item => item.sections.includes(filterSection));
  }, [items, filterSection]);

  // кількість сторінок
  const pageCount = Math.ceil(filteredItems.length / itemsPerPage);
  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredItems.slice(start, start + itemsPerPage);
  }, [filteredItems, currentPage, itemsPerPage]);

  // якщо сторінка не визначена — встановити 1 без повного перерендеру
  useEffect(() => {
    if (!searchParams.get("page")) {
      const newURL = pathname.includes("admin")
        ? `/uk/admin/${part === "news" ? "news" : "photo-report"}?page=1&archive=${isArchive}`
        : `/${locale}/${
            section === "photo" ? "foto" : "novyny"
          }?section=${getSectionParams}&page=1`;

      // миттєве оновлення адреси без SSR-цикла
      window.history.replaceState(null, "", newURL);
      startTransition(() => router.replace(newURL, { scroll: false }));
    }
  }, [searchParams, pathname, part, isArchive, locale, section, getSectionParams, router]);

  const handlePageClick = event => {
    const selectedPage = event.selected + 1;
    setCurrentPage(selectedPage);

    if (pathname.includes("admin")) {
      const baseAdmin =
        part === "news"
          ? `/uk/admin/news?page=${selectedPage}&archive=${isArchive ? "true" : "false"}`
          : `/uk/admin/photo-report?page=${selectedPage}&archive=${isArchive ? "true" : "false"}`;

      window.history.replaceState(null, "", baseAdmin);
      startTransition(() => router.replace(baseAdmin, { scroll: false }));
    } else {
      const newURL = `/${locale}/${
        section === "photo"
          ? `foto?section=${getSectionParams}`
          : `novyny?section=${getSectionParams}`
      }&page=${selectedPage}`;

      window.history.replaceState(null, "", newURL);
      startTransition(() => router.replace(newURL, { scroll: false }));
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

  return section === "admin" ? (
    <BaseSection style="h-[90%]">
      <div className="h-full w-full overflow-auto">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-6 pb-10 xl:pb-14">
          {currentItems.map(item => (
            <NewsItem
              item={item}
              key={item._id}
              section="admin"
              onToggleArchive={onToggleArchive}
              onDelete={onDelete}
              part={part}
            />
          ))}
        </div>
        <div className="flex mx-auto relative">
          <ReactPaginate
            breakLabel="..."
            nextLabel={nextLabel}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            forcePage={currentPage - 1}
            previousLabel={previousLabel}
            renderOnZeroPageCount={null}
            containerClassName="pagination-container pagination-container_admin"
            pageClassName="pagination-page"
            activeClassName="pagination-active"
            previousClassName="pagination-previous"
            nextClassName="pagination-next"
          />
        </div>
      </div>
    </BaseSection>
  ) : (
    <BaseSection>
      <Wrapper styles="pt-8 pb-[110px] relative">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-6">
          {currentItems.map(item => (
            <NewsItem item={item} key={item._id} part={part} locale={locale} />
          ))}
        </div>
        <div className="flex mx-auto">
          <ReactPaginate
            breakLabel="..."
            nextLabel={nextLabel}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            forcePage={currentPage - 1}
            previousLabel={previousLabel}
            renderOnZeroPageCount={null}
            containerClassName="pagination-container"
            pageClassName="pagination-page"
            activeClassName="pagination-active"
            previousClassName="pagination-previous"
            nextClassName="pagination-next"
          />
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default PaginatedItems;
