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

  async fetchAllReports() {
    this.isLoading = true;
    this.error = null;

    try {
      const res = await axios.get(`${BaseURL}gallerey`);
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

  async createReports(reportsData, token, router) {
    try {
      const res = await axios.post(`${BaseURL}gallerey`, reportsData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      runInAction(() => {
        this.photoReports.push(res.data);
        router.replace(`/uk/admin/photo-report?page=1&archive=false`);
      });
    } catch (error) {
      if (error.response?.status === 409) {
        throw new Error("Запис з такою назвою вже існує.");
      }
      console.error("Сталася помилка при створенні фотозвіту", error);
      throw new Error("Сталася помилка при створенні фотозвіту");
    }
  }

  async updateReports(slug, reportsData, token, router, id) {
    try {
      const res = await axios.put(`${BaseURL}gallerey/${slug}`, reportsData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      runInAction(() => {
        const index = this.photoReports.findIndex(n => n._id === id);

        if (index !== -1) {
          const updatedReports = { ...this.photoReports[index], ...res.data };

          this.photoReports[index] = updatedReports;
          this.photoReports = [...this.photoReports];

          router.replace(`/uk/admin/photo-report?page=1&archive=false`);
        }
      });

      return res.data;
    } catch (error) {
      console.error("Сталася помилка при оновленні фотозвіту", error);
      throw new Error("Сталася помилка при оновленні фотозвіту");
    }
  }

  async toggleArchiveStatus(slug, currentStatus, token) {
    try {
      const updatedStatus = currentStatus === "archived" ? "created" : "archived";
      const res = await axios.put(
        `${BaseURL}gallerey/${slug}`,
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
          const updatedReports = { ...this.photoReports[index], status: updatedStatus };
          this.photoReports[index] = updatedReports;
          this.photoReports = [...this.photoReports];
        }
      });
    } catch (error) {
      console.error("Сталася помилка при оновленні статусу фотозвіту", error);
      throw new Error("Сталася помилка при оновленні статусу фотозвіту");
    }
  }

  async deleteReports(slug, userId, token) {
    try {
      await axios.delete(`${BaseURL}gallerey/${slug}/${userId}`, {
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
