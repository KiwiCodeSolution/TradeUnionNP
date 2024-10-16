"use client";
import TitleAdmin from "@/components/sections/admin/TitleAdmin";
import PageNavBar from "@/components/sections/admin/PageNavBar";
import { useState } from "react";

import PaginatedItems from "@/components/sections/news/PaginatedItems";
import AdminBaseSection from "@/components/sections/admin/AdminBaseSection";
import { Link } from "@/navigation";

const NewsAdminPageComponent = ({ news }) => {
  const [isArchive, setIsArchive] = useState(false);

  return (
    <>
      <TitleAdmin>Новини {isArchive && <span>/ Архів</span>}</TitleAdmin>
      <AdminBaseSection>
        <PageNavBar
          goTo={"/uk/admin/news/create-news"}
          toggleArchive={() => setIsArchive(!isArchive)}
          isArchive={isArchive}
        />
        {/* <PaginatedItems section={"admin"} /> */}
        <div className="grid grid-cols-3 gap-x-4 gap-y-8">
          {news &&
            news.map(el => (
              <div id={el._id} className="w-1/3 bg-slate-300">
                <Link href={`/admin/news/${el._id}`}>
                  <h3>{el.title}</h3>
                </Link>
              </div>
            ))}
        </div>
      </AdminBaseSection>
    </>
  );
};

export default NewsAdminPageComponent;
