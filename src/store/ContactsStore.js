import { makeAutoObservable, runInAction, action } from "mobx";
import { makePersistable } from "mobx-persist-store";
import axios from "axios";
import { BaseURL } from "@/constants/BaseUrl";

class ContactsStore {
  contacts = [];

  isLoading = false;
  error = null;

  constructor() {
    makeAutoObservable(this, {
      hydrate: action.bound,
    });

    if (typeof window !== "undefined" && !this.isHydrated) {
      this.isHydrated = true;
      makePersistable(this, {
        name: "contacts",
        properties: ["contacts"],
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
    this.contacts = items;
  }

  async fetchContacts() {
    this.isLoading = true;
    this.error = null;

    try {
      const res = await axios.get(`${BaseURL}contacts`);

      const [{ _id, __v, ...initialContacts }] = res.data;
      runInAction(() => {
        this.setItems(res.data);
      });
    } catch (error) {
      runInAction(() => {
        this.error = "Сталася помилка при отриманні контактів.";
      });
      console.error("Сталася помилка при отриманні контактів.", error);
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }
}

export default ContactsStore;
