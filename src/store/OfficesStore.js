import { makeAutoObservable } from "mobx";

class OfficesStore {
  offices = [];

  constructor() {
    makeAutoObservable(this);
  }

  setItems(offices) {
    this.offices = offices;
  }

  addOfficesItem(item) {
    this.offices.push(item);
  }
}

export default OfficesStore;
