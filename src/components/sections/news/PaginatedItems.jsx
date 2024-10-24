"use client";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import NewsItem from "./NewsItem";
import { Arrow } from "@/components/icons/IconsComponents";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

const PaginatedItems = ({ section, items }) => {
  const itemsPerPage = section !== "admin" ? 9 : 3;
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname(); // Отримуємо поточний шлях

  const getSectionParams = searchParams.get("section") || "vsi_novyny";
  const currentPageFromURL = parseInt(searchParams.get("page")) || 1;

  const [currentPage, setCurrentPage] = useState(currentPageFromURL);

  // Логіка мапінгу секцій
  const sectionMap = {
    zvit: "Звіт",
    interview: "Інтерв'ю",
    kultura: "Культура",
    nauka: "Наука",
    vsi_novyny: "Всі новини",
  };

  const filterSection = sectionMap[getSectionParams] || "Всі новини";

  useEffect(() => {
    // Оновлення поточної сторінки при зміні параметрів у URL
    setCurrentPage(currentPageFromURL);
  }, [currentPageFromURL]);

  useEffect(() => {
    // Перевірка та редирект на ?page=1, якщо відсутній параметр, тільки якщо ми не на адмінці
    if (!searchParams.get("page") && !pathname.includes("admin")) {
      router.replace(
        `/uk/${section === "photo" ? "foto" : `novyny?section=${getSectionParams}`}&page=1`
      );
    } else if (!searchParams.get("page") && pathname.includes("admin")) {
      router.replace(`/uk/admin/news?page=1`);
    }
  }, [searchParams, router, section, getSectionParams, pathname]);

  // Фільтруємо елементи на основі секції
  const filteredItems = items.filter(item => {
    if (filterSection === "Всі новини") return true;
    return item.sections.includes(filterSection);
  });

  // Обчислюємо початковий зсув елементів на основі поточної сторінки
  const initialOffset = (currentPage - 1) * itemsPerPage;
  const [itemOffset, setItemOffset] = useState(initialOffset);

  const currentItems = filteredItems.slice(itemOffset, itemOffset + itemsPerPage);
  const pageCount = Math.ceil(filteredItems.length / itemsPerPage);

  useEffect(() => {
    // Оновлюємо зсув елементів при зміні сторінки
    setItemOffset(initialOffset);
  }, [initialOffset]);

  const handlePageClick = event => {
    const selectedPage = event.selected + 1;
    setCurrentPage(selectedPage);

    // Умовне оновлення URL залежно від того, чи ми в адмінці
    if (pathname.includes("admin")) {
      router.push(`/uk/admin/news?page=${selectedPage}`, undefined, { shallow: true });
    } else {
      const newURL = `/uk/${
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
            <NewsItem item={item} key={item._id} section={"admin"} />
          ))}
        </div>
        <div className="flex mx-auto">
          <ReactPaginate
            breakLabel="..."
            nextLabel={nextLabel}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            forcePage={currentPage - 1} // Контролюємо активну сторінку
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
            <NewsItem item={item} key={item.id} section={section} />
          ))}
        </div>
        <div className="flex mx-auto">
          <ReactPaginate
            breakLabel="..."
            nextLabel={nextLabel}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            forcePage={currentPage - 1} // Контролюємо активну сторінку
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
