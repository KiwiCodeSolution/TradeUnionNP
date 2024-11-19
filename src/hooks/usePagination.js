import { useState, useEffect } from "react";

export const usePagination = ({ items, itemsPerPage, currentPage, setCurrentPage }) => {
  const [itemOffset, setItemOffset] = useState((currentPage - 1) * itemsPerPage);

  useEffect(() => {
    setItemOffset((currentPage - 1) * itemsPerPage);
  }, [currentPage, itemsPerPage]);

  const currentItems = items.slice(itemOffset, itemOffset + itemsPerPage);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageChange = selectedPage => {
    setCurrentPage(selectedPage);
    setItemOffset((selectedPage - 1) * itemsPerPage);
  };

  return { currentItems, pageCount, handlePageChange };
};
