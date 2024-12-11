import { makeAutoObservable } from "mobx";

class NewsStore {
  news = [];

  constructor() {
    makeAutoObservable(this);
  }

  setNews(news) {
    this.news = news;
  }

  addNewsItem(newsItem) {
    this.news.push(newsItem);
  }
}

let store;

export const initializeStore = (initialData = null) => {
  const _store = store ?? new NewsStore();

  if (initialData) {
    _store.setNews(initialData);
  }

  if (typeof window === "undefined") return _store;
  if (!store) store = _store;

  return _store;
};
