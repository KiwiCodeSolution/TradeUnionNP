"use client";
import PageNavBar from "@/components/sections/admin/PageNavBar";
import TitleAdmin from "@/components/sections/admin/TitleAdmin";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminPhotoPage() {
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
      <TitleAdmin>Фотозвіти {isArchive && <span>/ Архів</span>}</TitleAdmin>
      <PageNavBar
        goTo={"/uk/admin/create-photo-report"}
        toggleArchive={() => setIsArchive(!isArchive)}
        isArchive={isArchive}
      />
    </main>
  );
}
