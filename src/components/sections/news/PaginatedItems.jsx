"use client";
import { useState, useEffect } from "react";

import ReactPaginate from "react-paginate";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import NewsItem from "./NewsItem";
import items from "@/data/news.json";
import { Arrow } from "@/components/icons/IconsComponents";
import { useRouter, useSearchParams } from "next/navigation";

const PaginatedItems = ({ section }) => {
  const itemsPerPage = section !== "admin" ? 9 : 3;
  const router = useRouter();
  const searchParams = useSearchParams();

  // Отримуємо поточну сторінку з URL параметрів або ставимо 1 за замовчуванням
  const currentPage = parseInt(searchParams.get("page")) || 1;

  useEffect(() => {
    // Перевіряємо, чи є параметр "page" у URL, якщо немає, перенаправляємо на ?page=1
    if (!searchParams.get("page")) {
      if (section === "photo") {
        router.replace(`/uk/foto?page=1`);
      }
      if (section === "news") {
        router.replace(`/uk/novyny?page=1`);
      }
    }
  }, [searchParams, router]);

  // Обчислюємо початковий зсув елементів на основі поточної сторінки
  const initialOffset = (currentPage - 1) * itemsPerPage;
  const [itemOffset, setItemOffset] = useState(initialOffset);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  useEffect(() => {
    // Оновлюємо зсув елементів при зміні поточної сторінки
    setItemOffset(initialOffset);
  }, [initialOffset]);

  const handlePageClick = event => {
    const selectedPage = event.selected + 1;

    // Оновлюємо параметри запиту з новим номером сторінки
    if (section === "photo") {
      router.push(`/uk/foto?page=${selectedPage}`, undefined, { shallow: true });
    }
    if (section === "news") {
      router.push(`/uk/novyny?page=${selectedPage}`, undefined, { shallow: true });
    }

    setItemOffset((selectedPage - 1) * itemsPerPage);
  };

  // const handlePageClick = event => {
  //   const selectedPage = event.selected + 1;
  //   const newOffset = (selectedPage * itemsPerPage) % items.length;

  //   // Update the query string with the new page number
  //   router.push({
  //     pathname: router.pathname,
  //     query: { ...query, page: selectedPage },
  //   });

  //   setItemOffset(newOffset);
  // };

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
    <div className="w-full overflow-auto ">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-6">
        {currentItems.map(item => (
          <NewsItem item={item} key={item.id} section={"admin"} />
        ))}
      </div>
      <div className="flex mx-auto">
        <ReactPaginate
          breakLabel="..."
          nextLabel={nextLabel}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
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
  ) : (
    <BaseSection style={""}>
      <Wrapper styles={"pt-8 pb-[110px] relative"}>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-6">
          {currentItems.map(item => (
            <NewsItem item={item} key={item.id} />
          ))}
        </div>
        <div className="flex mx-auto">
          <ReactPaginate
            breakLabel="..."
            nextLabel={nextLabel}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
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
