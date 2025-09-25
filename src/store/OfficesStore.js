import { BaseURL } from "@/constants/BaseUrl";
import axios from "axios";
import { action, makeAutoObservable, runInAction } from "mobx";
import { makePersistable } from "mobx-persist-store";

class OfficesStore {
  offices = [];
  lastUpdated = null;

  constructor() {
    makeAutoObservable(this, { hydrate: action.bound });

    if (typeof window !== "undefined" && !this.isHydrated) {
      this.isHydrated = true;
      makePersistable(this, {
        name: "offices",
        properties: ["offices", "lastUpdated"],
        storage: window.localStorage,
      });
    }
  }

  hydrate(data) {
    if (Array.isArray(data)) {
      this.setItems(data);
    }
  }

  setItems(items) {
    this.offices = items;
    this.lastUpdated = Date.now();
  }

  async fetchAllOffices(force = false) {
    const isStale = !this.lastUpdated || Date.now() - this.lastUpdated > 30 * 60 * 1000; // 30 хв

    if (!force && this.offices.length > 0 && !isStale) {
      return; // використовуємо кеш
    }

    try {
      const res = await axios.get(`${BaseURL}ppo`);
      console.log(res.data);
      runInAction(() => {
        this.setItems(res.data);
      });
    } catch (error) {
      console.error("Сталася помилка при отриманні ППО.", error);
    }
  }

  async updateOfficeById(_id, officeData, token, router) {
    console.log("officeData -------> ", officeData, token);
    // try {

    //   const res = await axios.put(`${BaseURL}ppo/${_id}`, officeData, {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //       "Content-Type": "application/json",
    //     },
    //   });

    //   runInAction(() => {
    //     this.setItems(res.data);
    //   });

    //   runInAction(() => {
    //     const index = this.offices.findIndex(o => o._id === id);
    //     if (index !== -1) {
    //       const updatedOffice = { ...this.offices[index], ...res.data };
    //       this.offices[index] = updatedOffice;
    //       this.offices = [...this.offices];

    //       router.replace(`/uk/admin/ppo`);
    //     }
    //   });
    // } catch (error) {
    //   runInAction(() => {
    //     this.error = "Сталася помилка при оновленні.";
    //   });
    //   console.error("Сталася помилка при оновленні.", error);
    // }
  }
}

export default OfficesStore;
