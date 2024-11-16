"use client";

import { useState, useEffect } from "react";
import NewsAdminPageComponent from "@/components/sections/news/NewsAdminPageComponent";
import { BaseURL } from "@/constants/BaseUrl";
import toast from "react-hot-toast";
import { toggleArchiveStatus } from "@/services/newsService";
import { deleteNews } from "@/services/newsService"; 

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
      toast.error("Не вдалося завантажити новини.");
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


  const handleDelete = async (slug, userId) => {
    toast.custom(t => (
      <div
        className={`bg-white p-4 rounded shadow-lg flex flex-col ${
          t.visible ? "animate-enter" : "animate-leave"
        }`}
      >
        <p className="mb-3">Ви дійсно бажаєте видалити цей запис?</p>
        <div className="flex justify-end gap-2">
          <button
            onClick={async () => {
              try {
                await deleteNews(slug, userId);
                toast.dismiss(t.id);

                toast.success("Новину видалено!");

                fetchNews();
              } catch (error) {
                toast.dismiss(t.id);
                console.error("Error deleting news:", error);
                if (error.message === "News not found") {
                  toast.error("Таку новину не знайдено.");
                } else {
                  toast.error("Щось пішло не так. Спробуйте ще раз.");
                }
              }
            }}
            className="bg-red text-white px-3 py-1 rounded"
          >
            Так
          </button>
          <button
            onClick={() => toast.dismiss(t.id)} 
            className="bg-black text-white px-3 py-1 rounded"
          >
            Ні
          </button>
        </div>
      </div>
    ));
  };

  return (
    <main className="px-10 py-5 admin relative max-h-screen">
      <NewsAdminPageComponent
        news={news}
        onToggleArchive={handleArchiveToggle}
        onDelete={handleDelete} 
      />
    </main>
  );
}
