"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import ButtonBack from "@/components/sections/admin/ButtonBack";
import TitleAdmin from "@/components/sections/admin/TitleAdmin";

export default function CreateNewsPage() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      router.push("/login");
    }
  }, [router]);

  return (
    <main className="px-10 py-5">
      <TitleAdmin>Створення новини</TitleAdmin>
      <ButtonBack path={"/admin/news"} className={"mt-5"} />
    </main>
  );
}
