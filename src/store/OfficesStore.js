import { makeAutoObservable, runInAction, action } from "mobx";
import { makePersistable } from "mobx-persist-store";
import axios from "axios";
import { BaseURL } from "@/constants/BaseUrl";

class OfficesStore {
  offices = [];

  constructor() {
    makeAutoObservable(this, {
      hydrate: action.bound,
    });

    if (typeof window !== "undefined" && !this.isHydrated) {
      this.isHydrated = true;
      makePersistable(this, {
        name: "offices",
        properties: ["offices"],
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
    this.offices = items;
  }

  async fetchAllOffices() {
    this.isLoading = true;
    this.error = null;

    try {
      const res = await axios.get(`${BaseURL}ppo`);
      runInAction(() => {
        this.setItems(res.data);
      });
    } catch (error) {
      runInAction(() => {
        this.error = "Сталася помилка при отриманні переліку ППО.";
      });
      console.error("Сталася помилка при отриманні переліку ППО.", error);
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }
}

export default OfficesStore;
