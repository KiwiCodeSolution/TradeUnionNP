import { makeAutoObservable, runInAction, action } from "mobx";
import { makePersistable } from "mobx-persist-store";
import axios from "axios";
import { BaseURL } from "@/constants/BaseUrl";

class NewsStore {
  news = [];
  isLoading = false;
  error = null;

  constructor() {
    makeAutoObservable(this, {
      setItems: action,
      hydrate: action.bound,
    });

    if (typeof window !== "undefined" && !this.isHydrated) {
      this.isHydrated = true;
      makePersistable(this, {
        name: "news",
        properties: ["news"],
        storage: window.localStorage,
      })
        .then(() => {
          runInAction(() => {
            this.news = Array.isArray(this.news) ? this.news : [];
          });
        })
        .catch(error => {
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
    this.news = items;
  }

  async fetchAllNews() {
    this.isLoading = true;
    this.error = null;

    try {
      const res = await axios.get(`${BaseURL}news`);
      runInAction(() => {
        this.setItems(res.data);
      });
    } catch (error) {
      runInAction(() => {
        this.error = "Сталася помилка при отриманні новин.";
      });
      console.error("Сталася помилка при отриманні новин.", error);
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }

  async createNews(newsData, token) {
    try {
      const res = await axios.post(`${BaseURL}news`, newsData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      runInAction(() => {
        this.news.push(res.data);
      });
    } catch (error) {
      if (error.response?.status === 409) {
        throw new Error("Новина з такою назвою вже існує.");
      }
      console.error("Сталася помилка при створенні новини.", error);
      throw new Error("Сталася помилка при створенні новини.");
    }
  }

  async updateNews(newsId, newsData, token) {
    try {
      const res = await axios.put(`${BaseURL}news/${newsId}`, newsData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      runInAction(() => {
        const index = this.news.findIndex(n => n.id === newsId);
        if (index !== -1) {
          this.news[index] = res.data;
        }
      });
    } catch (error) {
      console.error("Сталася помилка при оновленні новини.", error);
      throw new Error("Сталася помилка при оновленні новини.");
    }
  }

  async toggleArchiveStatus(newsId, currentStatus, token) {
    try {
      const updatedStatus = currentStatus === "archived" ? "created" : "archived";
      const res = await axios.put(
        `${BaseURL}news/${newsId}`,
        { status: updatedStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      runInAction(() => {
        const index = this.news.findIndex(n => n.id === newsId);
        if (index !== -1) {
          this.news[index].status = updatedStatus;
        }
      });
    } catch (error) {
      console.error("Сталася помилка при оновленні статусу новини.", error);
      throw new Error("Сталася помилка при оновленні статусу новини.");
    }
  }

  async deleteNews(slug, userId, token) {
    try {
      await axios.delete(`${BaseURL}news/${slug}/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      runInAction(() => {
        this.news = this.news.filter(n => n.slug !== slug);
      });
    } catch (error) {
      console.error("Сталася помилка при видаленні новини", error);
      throw new Error("Сталася помилка при видаленні новини.");
    }
  }
}

export default NewsStore;
