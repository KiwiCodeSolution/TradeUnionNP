"use client";

import AdminBaseSection from "@/components/sections/admin/AdminBaseSection";

export default function AdminPage({ params }) {
  return (
    <main className="w-4/5">
      <AdminBaseSection>
        <div className="w-full h-screen flex items-center justify-center">
          <h2 className="text-3xl text-red font-semibold">Вітаємо в Адмін Панелі! </h2>
        </div>
      </AdminBaseSection>
    </main>
  );
}
