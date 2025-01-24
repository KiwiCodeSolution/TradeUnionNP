"use client";

import { useState, useEffect } from "react";
import NewsAdminPageComponent from "@/components/sections/news/NewsAdminPageComponent";
import { BaseURL } from "@/constants/BaseUrl";
import toast from "react-hot-toast";
import { toggleArchiveStatus, deleteNews } from "@/services/newsService";
import useAuth from "@/hooks/useAuth";
import { observer } from "mobx-react-lite";
import Loader from "@/components/UI/loader/Loader";
import { StoreProvider, useStore } from "@/store/StoreProvider";

const NewsContent = observer(() => {
  const { newsStore } = useStore(); // MobX Store
  const allNews = newsStore.news;
  const isLoading = newsStore.isLoading;

  const [news, setNews] = useState([]); // Локальний стан для списку новин
  const { token } = useAuth(); // Аутентифікація користувача
  const [isHydrated, setIsHydrated] = useState(false); // Стан для гідратації

  useEffect(() => {
    setIsHydrated(true); // Оновлюємо стан, коли компоненти на клієнті
  }, []);

  // Викликаємо хуки useEffect одразу, без умов
  useEffect(() => {
    if (allNews.length === 0 && !isLoading) {
      newsStore.fetchAllNews(); // Завантаження новин зі стору
    }
  }, [allNews, isLoading, newsStore]);

  // useEffect(() => {
  //   const fetchNews = async () => {
  //     try {
  //       const res = await fetch(`${BaseURL}news`, { method: "GET", cache: "no-store" });
  //       if (!res.ok) throw new Error("Failed to fetch news");
  //       const data = await res.json();
  //       setNews(data);
  //     } catch (error) {
  //       console.error(error);
  //       toast.error("Не вдалося завантажити новини.");
  //     }
  //   };

  //   fetchNews(); // Завантаження новин із бекенду
  // }, []);

  const handleArchiveToggle = async (slug, status) => {
    try {
      const updatedNews = await toggleArchiveStatus(slug, status, token);
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
                toast.dismiss(t.id);
                await deleteNews(slug, userId, token);
                toast.success("Новину видалено!");

                newsStore.fetchAllNews(); // Оновлення даних у сторі
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

  if (!isHydrated) {
    return null; // Чекаємо, поки компонент не буде готовий до гідратації
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main className="px-10 py-5 admin relative max-h-screen">
      <NewsAdminPageComponent
        section={"news"}
        items={allNews}
        onToggleArchive={handleArchiveToggle}
        onDelete={handleDelete}
        token={token}
      />
    </main>
  );
});

export default function AdminNewsPage() {
  return (
    <StoreProvider>
      <NewsContent />
    </StoreProvider>
  );
}
