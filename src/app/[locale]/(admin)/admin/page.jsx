"use client";

import AdminBaseSection from "@/components/sections/admin/AdminBaseSection";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminPage({ params }) {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      router.push(`/${params.locale}/login`);
    } else {
      router.push(`/${params.locale}/admin/news`);
    }
  }, [router]);

  return (
    <main className="w-4/5">
      <AdminBaseSection>
        <div className="w-full h-screen flex items-center justify-center">
          <h2 className="text-3xl text-red font-semibold">Вітаємо в Адмін Панелі! </h2>
          {/* <p>Оберіть потрібний розділ</p> */}
        </div>
      </AdminBaseSection>
    </main>
  );
}
