"use client";
import AdminBaseSection from "@/components/sections/admin/AdminBaseSection";
import PageNavBar from "@/components/sections/admin/PageNavBar";
import TitleAdmin from "@/components/sections/admin/TitleAdmin";
import { useState } from "react";

export default function AdminPhotoPage() {
  const [isArchive, setIsArchive] = useState(false);

  return (
    <main className="px-10 py-5">
      <TitleAdmin>Фотозвіти {isArchive && <span>/ Архів</span>}</TitleAdmin>
      <AdminBaseSection>
        <PageNavBar
          goTo={"/uk/admin/photo-report/create-photo-report"}
          toggleArchive={() => setIsArchive(!isArchive)}
          isArchive={isArchive}
        />
      </AdminBaseSection>
    </main>
  );
}
