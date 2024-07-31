"use client";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import NewsItem from "./NewsItem";
import items from "@/data/news.json";
import { Arrow } from "@/components/icons/IconsComponents";

const PaginatedItems = ({ section }) => {
  const itemsPerPage = section !== "admin" ? 9 : 3;
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
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
    <div className="w-full overflow-auto ">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-6">
        {currentItems.map(item => (
          <NewsItem item={item} key={item.id} section={"admin"} />
        ))}
      </div>
      <div className="flex mx-auto">
        <ReactPaginate
          breakLabel="..."
          // nextLabel="next >"
          nextLabel={nextLabel}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          // previousLabel="< previous"
          previousLabel={previousLabel}
          renderOnZeroPageCount={null}
          containerClassName="pagination-container"
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
            // nextLabel="next >"
            nextLabel={nextLabel}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            // previousLabel="< previous"
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
