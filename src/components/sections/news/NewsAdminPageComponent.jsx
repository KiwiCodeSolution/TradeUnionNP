"use client";
import TitleAdmin from "@/components/sections/admin/TitleAdmin";
import PageNavBar from "@/components/sections/admin/PageNavBar";
import { useState } from "react";

import PaginatedItems from "@/components/sections/news/PaginatedItems";
import AdminBaseSection from "@/components/sections/admin/AdminBaseSection";

const NewsAdminPageComponent = ({ news }) => {
  const [isArchive, setIsArchive] = useState(false);

  const filteredNewsArray = news
    .filter(item => {
      if (isArchive) {
        return item.status === "archived";
      } else {
        return item.status !== "archived";
      }
    })
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));

  return (
    <>
      <TitleAdmin>Новини {isArchive && <span>/ Архів</span>}</TitleAdmin>
      <AdminBaseSection>
        <PageNavBar
          goTo={"/uk/admin/news/create-news"}
          toggleArchive={() => setIsArchive(!isArchive)}
          isArchive={isArchive}
        />
        <PaginatedItems section={"admin"} items={filteredNewsArray} />
      </AdminBaseSection>
    </>
  );
};

export default NewsAdminPageComponent;
