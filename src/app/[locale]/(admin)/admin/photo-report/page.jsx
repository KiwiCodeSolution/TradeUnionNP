"use client";

import { useState, useEffect, useMemo } from "react";
import NewsAdminPageComponent from "@/components/sections/news/NewsAdminPageComponent";
import toast from "react-hot-toast";
import { deleteReport } from "@/services/photoService";
import useAuth from "@/hooks/useAuth";
import { StoreProvider, useStore } from "@/store/StoreProvider";
import { observer } from "mobx-react-lite";
import Loader from "@/components/UI/loader/Loader";

export const PhotoReportsComponenTPage = observer(() => {
  const { photoReportsStore } = useStore();
  const allReports = photoReportsStore.photoReports || [];
  const isLoading = photoReportsStore.isLoading;

  const { token, username } = useAuth();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (allReports.length === 0 && !isLoading) {
      photoReportsStore.fetchAllReports();
    }
  }, [allReports, isLoading, photoReportsStore]);

  const handleArchiveToggle = async (slug, currentStatus) => {
    try {
      await photoReportsStore.toggleArchiveStatus(slug, currentStatus, token);
      toast.success(
        `Запис успішно ${currentStatus === "archived" ? "деархівовано" : "архівовано"}.`
      );
    } catch (error) {
      toast.error("Сталася помилка при зміні статусу запису.");
      console.error("Помилка зміни статусу:", error);
    }
  };

  const sortedReports = useMemo(() => {
    return [...allReports].sort((a, b) => {
      const publishDateA = new Date(a.publishDate);
      const publishDateB = new Date(b.publishDate);

      if (publishDateB - publishDateA !== 0) {
        return publishDateB - publishDateA;
      }

      return new Date(b.createdAt) - new Date(a.createdAt);
    });
  }, [allReports]);

  const handleDelete = async slug => {
    const toastId = toast.custom(t => (
      <div
        className={`bg-white p-4 rounded shadow-lg flex flex-col ${
          t.visible ? "animate-enter" : "animate-leave"
        }`}
      >
        <p className="mb-3">Ви дійсно бажаєте видалити цей запис?</p>
        <div className="flex justify-end gap-2">
          <button
            onClick={async () => {
              toast.dismiss(t.id);
              try {
                await deleteReport(slug, username, token);
                toast.success("Запис видалено!");
                photoReportsStore.fetchAllReports();
              } catch (error) {
                console.error("Error deleting news:", error);
                if (error.message === "News not found") {
                  toast.error("Такий запис не знайдено.");
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
    <main className="px-10 py-5">
      <NewsAdminPageComponent
        section={"photo"}
        items={sortedReports}
        onToggleArchive={handleArchiveToggle}
        onDelete={handleDelete}
        token={token}
      />
    </main>
  );
});

export default function AdminPhotoReportsPage() {
  return (
    <StoreProvider>
      <PhotoReportsComponenTPage />
    </StoreProvider>
  );
}
