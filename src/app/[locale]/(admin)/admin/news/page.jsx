"use client";

import { useState, useEffect, useMemo } from "react";
import NewsAdminPageComponent from "@/components/sections/news/NewsAdminPageComponent";
import toast from "react-hot-toast";
import { deleteNews } from "@/services/newsService";
import useAuth from "@/hooks/useAuth";
import { observer } from "mobx-react-lite";
import Loader from "@/components/UI/loader/Loader";
import { StoreProvider, useStore } from "@/store/StoreProvider";

export const NewsContent = observer(() => {
  const { newsStore } = useStore();
  const allNews = newsStore.news;
  const isLoading = newsStore.isLoading;

  const { token } = useAuth();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (allNews.length === 0 && !isLoading) {
      newsStore.fetchAllNews();
    }
  }, [allNews, isLoading, newsStore]);

  const handleArchiveToggle = async (slug, currentStatus) => {
    try {
      await newsStore.toggleArchiveStatus(slug, currentStatus, token);
      toast.success(
        `Новина успішно ${currentStatus === "archived" ? "деархівована" : "архівована"}.`
      );
    } catch (error) {
      toast.error("Сталася помилка при зміні статусу новини.");
      console.error("Помилка зміни статусу:", error);
    }
  };

  const sortedNews = useMemo(() => {
    return [...allNews].sort((a, b) => {
      const publishDateA = new Date(a.publishDate);
      const publishDateB = new Date(b.publishDate);

      if (publishDateB - publishDateA !== 0) {
        return publishDateB - publishDateA;
      }

      return new Date(b.createdAt) - new Date(a.createdAt);
    });
  }, [allNews]);

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

                newsStore.fetchAllNews();
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
    return null;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main className="px-10 py-5 admin relative max-h-screen">
      <NewsAdminPageComponent
        section={"news"}
        items={sortedNews}
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
