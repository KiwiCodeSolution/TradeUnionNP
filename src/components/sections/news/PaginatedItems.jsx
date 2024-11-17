"use client";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import NewsItem from "./NewsItem";
import { Arrow } from "@/components/icons/IconsComponents";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { sectionMap } from "@/constants/news_sections";

const PaginatedItems = ({ section, items, onToggleArchive, isArchive, onDelete, locale }) => {
  const itemsPerPage = section !== "admin" ? 9 : 3;
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const getSectionParams = searchParams.get("section") || "vsi_novyny";

  const currentPageFromURL = parseInt(searchParams.get("page")) || 1;

  const [currentPage, setCurrentPage] = useState(currentPageFromURL);

  const filterSection = sectionMap[getSectionParams] || "Новини";

  useEffect(() => {
    setCurrentPage(currentPageFromURL);
  }, [currentPageFromURL]);

  useEffect(() => {
    // Перевірка та редирект на ?page=1, якщо відсутній параметр, тільки якщо ми не на адмінці
    if (!searchParams.get("page") && !pathname.includes("admin")) {
      router.replace(
        `/${locale}/${section === "photo" ? "foto" : `novyny?section=${getSectionParams}`}&page=1`
      );
    } else if (!searchParams.get("page") && pathname.includes("admin")) {
      router.replace(`/uk/admin/news?page=1&archive=${isArchive ? "true" : "false"}`);
    }
  }, [searchParams, router, section, getSectionParams, pathname, isArchive]);

  const filteredItems = items.filter(item => {
    if (filterSection === "Новини") return true;
    return item.sections.includes(filterSection);
  });

  // Обчислюємо початковий зсув елементів на основі поточної сторінки
  const initialOffset = (currentPage - 1) * itemsPerPage;
  const [itemOffset, setItemOffset] = useState(initialOffset);

  const currentItems = filteredItems.slice(itemOffset, itemOffset + itemsPerPage);
  const pageCount = Math.ceil(filteredItems.length / itemsPerPage);

  useEffect(() => {
    setItemOffset(initialOffset);
  }, [initialOffset]);

  const handlePageClick = event => {
    const selectedPage = event.selected + 1;
    setCurrentPage(selectedPage);

    // Умовне оновлення URL залежно від того, чи ми в адмінці
    if (pathname.includes("admin")) {
      router.push(
        `/uk/admin/news?page=${selectedPage}&archive=${isArchive ? "true" : "false"}`,
        undefined,
        { shallow: true }
      );
    } else {
      const newURL = `/${locale}/${
        section === "photo" ? "foto" : `novyny?section=${getSectionParams}`
      }&page=${selectedPage}`;
      router.push(newURL, undefined, { shallow: true });
    }

    setItemOffset((selectedPage - 1) * itemsPerPage);
  };

  const nextLabel = (
    <div className="pagination-page">
      <Arrow />
    </div>
  );

  const previousLabel = (
    <div className="pagination-page">
      <Arrow className={"rotate-180"} />
    </div>
  );

  return section === "admin" ? (
    <BaseSection style="h-[90%]">
      <div className="h-full w-full overflow-auto relative">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-6">
          {currentItems.map(item => (
            <NewsItem
              item={item}
              key={item._id}
              section={"admin"}
              onToggleArchive={onToggleArchive}
              onDelete={onDelete}
            />
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
    <BaseSection style={""}>
      <Wrapper styles={"pt-8 pb-[110px] relative"}>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-6">
          {currentItems.map(item => (
            <NewsItem item={item} key={item._id} section={section} />
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
