"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import TitleAdmin from "@/components/sections/admin/TitleAdmin";

export default function AdminContactsPage() {
  const router = useRouter();

  // useEffect(() => {
  //   const user = localStorage.getItem("user");

  //   if (!user) {
  //     router.push("/login");
  //   }
  // }, [router]);

  return (
    <main className="px-10 py-5">
      <TitleAdmin>Контакти та соціальні мережі</TitleAdmin>
    </main>
  );
}
