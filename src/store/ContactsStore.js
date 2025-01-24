import { makeAutoObservable, runInAction, action } from "mobx";
import { makePersistable } from "mobx-persist-store";
import axios from "axios";
import { BaseURL } from "@/constants/BaseUrl";

class ContactsStore {
  contacts = [];

  constructor() {
    makeAutoObservable(this);
  }

  setItems(contacts) {
    this.contacts = contacts;
  }
}

export default ContactsStore;
