"use client";
import TitleAdmin from "@/components/sections/admin/TitleAdmin";
import PageNavBar from "@/components/sections/admin/PageNavBar";
import { useState } from "react";

export default function AdminNewsPage() {
  const [isArchive, setIsArchive] = useState(false);

  return (
    <main className="px-10 py-5">
      <TitleAdmin>Новини {isArchive && <span>/ Архів</span>}</TitleAdmin>

      <PageNavBar
        goTo={"/admin/create-news"}
        toggleArchive={() => setIsArchive(!isArchive)}
        isArchive={isArchive}
      />
    </main>
  );
}
