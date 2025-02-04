import { makeAutoObservable, runInAction, action, autorun } from "mobx";
import { makePersistable } from "mobx-persist-store";
import axios from "axios";
import { BaseURL } from "@/constants/BaseUrl";

class PhotoReportsStore {
  photoReports = [];
  isLoading = false;
  error = null;

  constructor() {
    makeAutoObservable(this, {
      hydrate: action.bound,
    });

    if (typeof window !== "undefined" && !this.isHydrated) {
      this.isHydrated = true;
      makePersistable(this, {
        name: "photoReports",
        properties: ["photoReports"],
        storage: window.localStorage,
      }).catch(error => {
        console.error("Failed to make persistable:", error);
      });
    }
  }

  hydrate(data) {
    if (Array.isArray(data)) {
      this.setItems(data);
    }
  }

  setItems(items) {
    this.photoReports = items;
  }

  async fetchAllNews() {
    this.isLoading = true;
    this.error = null;

    try {
      const res = await axios.get(`${BaseURL}reports`);
      runInAction(() => {
        this.setItems(res.data);
      });
    } catch (error) {
      runInAction(() => {
        this.error = "Сталася помилка при отриманні фотозвітів";
      });
      console.error("Сталася помилка при отриманні фотозвітів", error);
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }

  async createNews(newsData, token, router) {
    try {
      const res = await axios.post(`${BaseURL}reports`, newsData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      runInAction(() => {
        this.photoReports.push(res.data);
        router.replace(`/uk/admin/news?page=1&archive=false`);
      });
    } catch (error) {
      if (error.response?.status === 409) {
        throw new Error("Запис з такою назвою вже існує.");
      }
      console.error("Сталася помилка при створенні фотозвіту", error);
      throw new Error("Сталася помилка при створенні фотозвіту");
    }
  }

  async updateNews(newsId, newsData, token) {
    try {
      const res = await axios.put(`${BaseURL}reports/${newsId}`, newsData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      runInAction(() => {
        const index = this.photoReports.findIndex(n => n.slug === slug);
        if (index !== -1) {
          const updatedNews = { ...this.photoReports[index], status: updatedStatus };
          this.photoReports[index] = updatedNews;
          this.photoReports = [...this.photoReports];
        }
      });
    } catch (error) {
      console.error("Сталася помилка при оновленні фотозвіту", error);
      throw new Error("Сталася помилка при оновленні фотозвіту");
    }
  }

  async toggleArchiveStatus(slug, currentStatus, token) {
    try {
      const updatedStatus = currentStatus === "archived" ? "created" : "archived";
      const res = await axios.put(
        `${BaseURL}reports/${slug}`,
        { status: updatedStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      runInAction(() => {
        const index = this.photoReports.findIndex(n => n.slug === slug);
        if (index !== -1) {
          const updatedNews = { ...this.photoReports[index], status: updatedStatus };
          this.photoReports[index] = updatedNews;
          this.photoReports = [...this.photoReports];
        }
      });
    } catch (error) {
      console.error("Сталася помилка при оновленні статусу фотозвіту", error);
      throw new Error("Сталася помилка при оновленні статусу фотозвіту");
    }
  }

  async deleteNews(slug, userId, token) {
    try {
      await axios.delete(`${BaseURL}reports/${slug}/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      runInAction(() => {
        this.photoReports = this.photoReports.filter(n => n.slug !== slug);
      });
    } catch (error) {
      console.error("Сталася помилка при видаленні фотозвіту", error);
      throw new Error("Сталася помилка при видаленні фотозвіту.");
    }
  }
}

export default PhotoReportsStore;
