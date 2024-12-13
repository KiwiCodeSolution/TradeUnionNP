"use client";

import { useEffect } from "react";
import { useStore } from "../providers/StoreProvider";

export const NewsHydrator = ({ initialData, initialPage }) => {
  const store = useStore();

  useEffect(() => {
    store.loadFromLocalStorage();
    if (initialData) {
      store.hydrate({ news: initialData, page: initialPage });
    }
  }, [initialData, initialPage, store]);

  return null;
};
