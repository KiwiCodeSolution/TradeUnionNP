"use client";
import { useEffect } from "react";

const isLocalStorageAvailable = () => {
  if (typeof window === "undefined") return false; // Перевірка на сервер
  try {
    const test = "test";
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
};

const getStoredData = key => {
  try {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : null;
  } catch (e) {
    console.error(`Error parsing localStorage data for key "${key}":`, e);
    return null;
  }
};

export const useHydrateStore = (store, key, initialData = []) => {
  useEffect(() => {
    if (!Array.isArray(initialData)) {
      console.error("Initial data must be an array");
      return;
    }

    if (initialData.length > 0 && JSON.stringify(store.items) !== JSON.stringify(initialData)) {
      store.setItems(initialData);
    } else if (typeof window !== "undefined" && isLocalStorageAvailable()) {
      const storedData = getStoredData(key);
      if (storedData && JSON.stringify(store.items) !== JSON.stringify(storedData)) {
        store.setItems(storedData);
      }
    }

    return () => {
      if (typeof window !== "undefined" && isLocalStorageAvailable()) {
        try {
          localStorage.setItem(key, JSON.stringify(store.items));
        } catch (e) {
          console.error(`Error saving data to localStorage for key "${key}":`, e);
        }
      }
    };
  }, [initialData, store, key]);
};
