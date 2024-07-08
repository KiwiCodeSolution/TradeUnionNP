"use client";
import PageNavBar from "@/components/sections/admin/PageNavBar";
import TitleAdmin from "@/components/sections/admin/TitleAdmin";
import { useState } from "react";

export default function AdminPhotoPage() {
  const [isArchive, setIsArchive] = useState(false);

  return (
    <main className="px-10 py-5">
      <TitleAdmin>Фотозвіти {isArchive && <span>/ Архів</span>}</TitleAdmin>
      <PageNavBar
        goTo={"/admin/create-photo-report"}
        toggleArchive={() => setIsArchive(!isArchive)}
        isArchive={isArchive}
      />
    </main>
  );
}
