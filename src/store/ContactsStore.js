import { makeAutoObservable } from "mobx";

class ContactsStore {
  contacts = [];

  constructor() {
    makeAutoObservable(this);
  }

  setContacts(contacts) {
    this.contacts = contacts;
  }
}

export default ContactsStore;
