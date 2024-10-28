"use client";
import TitleAdmin from "@/components/sections/admin/TitleAdmin";
import PageNavBar from "@/components/sections/admin/PageNavBar";
import { useEffect, useState } from "react";

import PaginatedItems from "@/components/sections/news/PaginatedItems";
import AdminBaseSection from "@/components/sections/admin/AdminBaseSection";
import { useRouter, useSearchParams } from "next/navigation";

const NewsAdminPageComponent = ({ news, onToggleArchive }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const isArchiveFromURL = searchParams.get("archive") === "true";
  const [isArchive, setIsArchive] = useState(isArchiveFromURL);
  const [searchValue, setSearchValue] = useState("");

  const filteredNewsArray = news
    .filter(item => {
      const isStatusMatch = isArchive ? item.status === "archived" : item.status !== "archived";
      const isSearchMatch =
        item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.content.toLowerCase().includes(searchValue.toLowerCase());

      return isStatusMatch && isSearchMatch;
    })
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));

  useEffect(() => {
    setIsArchive(isArchiveFromURL);
  }, [isArchiveFromURL]);

  const toggleArchive = () => {
    const newArchiveState = !isArchive;
    setIsArchive(newArchiveState);
    router.push(`/uk/admin/news?page=1&archive=${newArchiveState ? "true" : "false"}`, undefined, {
      shallow: true,
    });
  };

  return (
    <>
      <TitleAdmin>Новини {isArchive && <span>/ Архів</span>}</TitleAdmin>
      <AdminBaseSection>
        <PageNavBar
          goTo={"/uk/admin/news/create-news"}
          toggleArchive={toggleArchive}
          isArchive={isArchive}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <PaginatedItems
          section={"admin"}
          items={filteredNewsArray}
          onToggleArchive={onToggleArchive}
          isArchive={isArchive}
        />
      </AdminBaseSection>
    </>
  );
};

export default NewsAdminPageComponent;
