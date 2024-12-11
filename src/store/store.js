import { makeAutoObservable } from "mobx";

class Store {
  count = 0;

  constructor() {
    makeAutoObservable(this); // Автоматичне спостереження за змінами
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}

export const store = new Store();
