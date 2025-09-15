import { makeAutoObservable, runInAction, action, autorun } from "mobx";
import { makePersistable } from "mobx-persist-store";
import axios from "axios";
import { BaseURL } from "@/constants/BaseUrl";

class NewsStore {
  news = [];
  isLoading = false;
  error = null;

  constructor() {
    makeAutoObservable(this, {
      hydrate: action.bound,
    });

    if (typeof window !== "undefined" && !this.isHydrated) {
      this.isHydrated = true;
      makePersistable(this, {
        name: "news",
        properties: ["news"],
        // storage: window.localStorage,
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
    this.news = items;
  }

  get filteredNewsArray() {
    return this.news
      .filter(item => {
        const isStatusMatch = isArchive ? item.status === "archived" : item.status !== "archived";
        const isSearchMatch =
          item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.content.toLowerCase().includes(searchValue.toLowerCase());

        return isStatusMatch && isSearchMatch;
      })
      .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
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

  async createNews(newsData, token, router) {
    try {
      const res = await axios.post(`${BaseURL}news`, newsData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      runInAction(() => {
        this.news.push(res.data);
        router.replace(`/uk/admin/news?page=1&archive=false`);
      });
    } catch (error) {
      if (error.response?.status === 409) {
        throw new Error("Новина з такою назвою вже існує.");
      }
      console.error("Сталася помилка при створенні новини.", error);
      throw new Error("Сталася помилка при створенні новини.");
    }
  }

  async updateNews(slug, newsData, token, router, id) {
    try {
      const res = await axios.put(`${BaseURL}news/${slug}`, newsData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      runInAction(() => {
        const index = this.news.findIndex(n => n._id === id);
        if (index !== -1) {
          const updatedNews = { ...this.news[index], ...res.data };
          this.news[index] = updatedNews;
          this.news = [...this.news];

          router.replace(`/uk/admin/news?page=1&archive=false`);
          console.log("news update!");
        }
      });

      return res.data;
    } catch (error) {
      console.error("Сталася помилка при оновленні новини.", error);
      throw new Error("Сталася помилка при оновленні новини.");
    }
  }

  async toggleArchiveStatus(slug, currentStatus, token) {
    try {
      const updatedStatus = currentStatus === "archived" ? "created" : "archived";
      const res = await axios.put(
        `${BaseURL}news/${slug}`,
        { status: updatedStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      runInAction(() => {
        const index = this.news.findIndex(n => n.slug === slug);
        if (index !== -1) {
          const updatedNews = { ...this.news[index], status: updatedStatus };
          this.news[index] = updatedNews;
          this.news = [...this.news];
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
