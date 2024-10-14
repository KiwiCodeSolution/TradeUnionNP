"use client";
import TitleAdmin from "@/components/sections/admin/TitleAdmin";
import PageNavBar from "@/components/sections/admin/PageNavBar";
import { useState } from "react";

import PaginatedItems from "@/components/sections/news/PaginatedItems";
import AdminBaseSection from "@/components/sections/admin/AdminBaseSection";

export default function AdminNewsPage() {
  const [isArchive, setIsArchive] = useState(false);

  return (
    <main className="px-10 py-5 admin relative max-h-screen">
      <TitleAdmin>Новини {isArchive && <span>/ Архів</span>}</TitleAdmin>
      <AdminBaseSection>
        <PageNavBar
          goTo={"/uk/admin/news/create-news"}
          toggleArchive={() => setIsArchive(!isArchive)}
          isArchive={isArchive}
        />
        <PaginatedItems section={"admin"} />
      </AdminBaseSection>
    </main>
  );
}
