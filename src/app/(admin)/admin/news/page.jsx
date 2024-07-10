"use client";
import TitleAdmin from "@/components/sections/admin/TitleAdmin";
import PageNavBar from "@/components/sections/admin/PageNavBar";
import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";

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
