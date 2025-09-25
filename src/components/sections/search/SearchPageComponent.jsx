"use client";

import { inter } from "@/app/[locale]/(client)/fonts";
import { Arrow } from "@/components/icons/IconsComponents";
import Loader from "@/components/UI/loader/Loader";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { searchNews } from "@/services/searchService";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import SearchItem from "./SearchItem";

// export default function SearchPageComponent({ locale }) {
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   const search = searchParams.get("query") || "";
//   const pageParam = parseInt(searchParams.get("page")) || 1;

//   const itemsPerPage = 15;

//   const [searchResult, setSearchResult] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   // ✅ Синхронізуємо currentPage з pageParam
//   const [currentPage, setCurrentPage] = useState(pageParam);

//   useEffect(() => {
//     setCurrentPage(1);
//   }, [search]);

//   useEffect(() => {
//     setCurrentPage(pageParam);
//   }, [pageParam]);

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       try {
//         if (!search) {
//           setSearchResult([]);
//           return;
//         }

//         const result = await searchNews(search);
//         setSearchResult(result);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [search]);

//   const pageCount = Math.ceil(searchResult.length / itemsPerPage);
//   const currentItems = searchResult.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const handlePageClick = ({ selected }) => {
//     const newPage = selected + 1;
//     router.push(`/${locale}/poshuk-po-saytu?query=${search}&page=${newPage}`, undefined, {
//       shallow: true,
//     });
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   // Пагінація
//   const nextLabel = (
//     <div className="pagination-page">
//       <Arrow />
//     </div>
//   );
//   const previousLabel = (
//     <div className="pagination-page">
//       <Arrow className="rotate-180" />
//     </div>
//   );

//   if (isLoading) return <Loader />;

//   return (
//     <>
//       <p className="w-fit mx-auto text-2xl font-bold">{search}</p>

//       <div className="w-full flex flex-col gap-y-2 py-5">
//         {searchResult.length === 0 && (
//           <h2 className="text-2xl text-center">
//             Вибачте, за запитом{" "}
//             <span className={`${inter.className} font-bold text-red`}>{search}</span> нічого не
//             знайдено.
//           </h2>
//         )}

//         {currentItems.map(el => (
//           <SearchItem key={el._id} item={el} />
//         ))}
//       </div>

//       {searchResult.length > itemsPerPage && (
//         <div className="w-full flex justify-center min-h-[54px] relative">
//           {/* <ReactPaginate
//             previousLabel={previousLabel}
//             breakLabel="..."
//             nextLabel={nextLabel}
//             pageCount={pageCount}
//             onPageChange={handlePageClick}
//             forcePage={currentPage - 1} // ✅ актуальна сторінка
//             containerClassName="pagination-container pagination-container_search"
//             pageClassName="pagination-page"
//             activeClassName="pagination-active"
//             previousClassName="pagination-previous"
//             nextClassName="pagination-next"
//           /> */}
//           <ReactPaginate
//             previousLabel={previousLabel}
//             breakLabel="..."
//             nextLabel={nextLabel}
//             pageCount={pageCount}
//             onPageChange={handlePageClick}
//             containerClassName="pagination-container pagination-container_search"
//             pageClassName="pagination-page"
//             activeClassName="pagination-active"
//             previousClassName="pagination-previous"
//             nextClassName="pagination-next"
//           />
//         </div>
//       )}
//     </>
//   );
// }

export default function SearchPageComponent({ locale }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const width = useWindowWidth();

  const search = searchParams.get("query") || "";
  const pageParam = parseInt(searchParams.get("page")) || 1;
  const itemsPerPage = 15;

  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;

  const marginPagesDisplayed = isMobile ? 1 : isTablet ? 2 : 3;
  const pageRangeDisplayed = isMobile ? 1 : isTablet ? 2 : 3;

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
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [search]);

  const pageCount = Math.ceil(searchResult.length / itemsPerPage);
  const currentItems = searchResult.slice((pageParam - 1) * itemsPerPage, pageParam * itemsPerPage);

  const handlePageClick = ({ selected }) => {
    const newPage = selected + 1;
    router.push(`/${locale}/poshuk-po-saytu?query=${search}&page=${newPage}`, undefined, {
      shallow: true,
    });
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
            forcePage={pageParam - 1} // ✅ напряму з URL
            containerClassName="pagination-container pagination-container_search"
            pageClassName="pagination-page"
            activeClassName="pagination-active"
            previousClassName="pagination-previous"
            nextClassName="pagination-next"
          />
        </div>
      )}
    </>
  );
}
