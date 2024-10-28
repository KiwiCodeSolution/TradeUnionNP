"use client";

import { useState, useEffect } from "react";
import NewsAdminPageComponent from "@/components/sections/news/NewsAdminPageComponent";
import { BaseURL } from "@/constants/BaseUrl";
import toast from "react-hot-toast";
import { toggleArchiveStatus } from "@/services/newsService";

export default function AdminNewsPage() {
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    try {
      const res = await fetch(`${BaseURL}news`, { method: "GET", cache: "no-store" });
      if (!res.ok) throw new Error("Failed to fetch news");
      const data = await res.json();
      setNews(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleArchiveToggle = async (slug, status) => {
    try {
      const updatedNews = await toggleArchiveStatus(slug, status, "<YOUR_TOKEN_HERE>");

      if (updatedNews) {
        setNews(prevNews =>
          prevNews.map(item =>
            item.slug === slug ? { ...item, status: updatedNews.data.status } : item
          )
        );
        toast.success(`Новина успішно ${status === "archived" ? "деархівована" : "архівована"}.`);
      }
    } catch (error) {
      toast.error("Сталася помилка при зміні статусу новини.");
      console.error("Помилка зміни статусу:", error);
    }
  };

  return (
    <main className="px-10 py-5 admin relative max-h-screen">
      <NewsAdminPageComponent news={news} onToggleArchive={handleArchiveToggle} />
    </main>
  );
}
