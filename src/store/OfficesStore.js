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
