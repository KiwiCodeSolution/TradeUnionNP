"use client";

import { useState, useEffect } from "react";
import NewsAdminPageComponent from "@/components/sections/news/NewsAdminPageComponent";
import { BaseURL } from "@/constants/BaseUrl";
import toast from "react-hot-toast";
import { deleteReport, toggleArchiveReportStatus } from "@/services/photoService";
import useAuth from "@/hooks/useAuth";

export default function AdminPhotoPage() {
  const [entries, setEntries] = useState([]);
  const { token } = useAuth();

  const fetchEntries = async () => {
    try {
      const res = await fetch(`${BaseURL}gallerey`, { method: "GET", cache: "no-store" });
      if (!res.ok) throw new Error("Failed to fetch entries");
      const data = await res.json();
      setEntries(data);
    } catch (error) {
      console.error(error);
      toast.error("Не вдалося завантажити записи.");
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const handleArchiveToggle = async (slug, status) => {
    try {
      const updatedEntries = await toggleArchiveReportStatus(slug, status, token);
      if (updatedEntries) {
        setEntries(prevEntries =>
          prevEntries.map(item =>
            item.slug === slug ? { ...item, status: updatedEntries.data.status } : item
          )
        );
        toast.success(`Запис успішно ${status === "archived" ? "деархівована" : "архівована"}.`);
      }
    } catch (error) {
      toast.error("Сталася помилка при зміні статусу.");
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
                await deleteReport(slug, userId, token);
                toast.success("Запис видалено!");
                fetchEntries();
              } catch (error) {
                toast.dismiss(t.id);
                console.error("Error deleting entries:", error);
                if (error.message === "Entries not found") {
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

  return (
    <main className="px-10 py-5">
      <NewsAdminPageComponent
        section={"photo"}
        items={entries}
        onToggleArchive={handleArchiveToggle}
        onDelete={handleDelete}
      />
    </main>
  );
}
