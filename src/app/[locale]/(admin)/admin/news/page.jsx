"use client";
import TitleAdmin from "@/components/sections/admin/TitleAdmin";
import PageNavBar from "@/components/sections/admin/PageNavBar";
import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";
import PaginatedItems from "@/components/sections/news/PaginatedItems";

export default function AdminNewsPage() {
  const [isArchive, setIsArchive] = useState(false);

  // const router = useRouter();

  // useEffect(() => {
  //   const user = localStorage.getItem("user");

  //   if (!user) {
  //     router.push("/login");
  //   }
  // }, [router]);

  return (
    <main className="px-10 py-5 admin relative max-h-screen">
      <TitleAdmin>Новини {isArchive && <span>/ Архів</span>}</TitleAdmin>

      <PageNavBar
        goTo={"/uk/admin/news/create-news"}
        toggleArchive={() => setIsArchive(!isArchive)}
        isArchive={isArchive}
      />
      <PaginatedItems section={"admin"} />
    </main>
  );
}
