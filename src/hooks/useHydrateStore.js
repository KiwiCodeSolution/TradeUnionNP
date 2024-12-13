import { useEffect } from "react";
import { isLocalStorageAvailable } from "../utils/localStorageHelper";

export const useHydrateStore = (store, key, initialData = []) => {
  useEffect(() => {
    if (initialData.length > 0) {
      store.setItems(initialData); 
    } else {
      if (typeof window !== "undefined" && isLocalStorageAvailable()) {
        const storedData = localStorage.getItem(key);
        if (storedData) {
          store.setItems(JSON.parse(storedData));
        }
      }
    }

   
    return () => {
      if (typeof window !== "undefined" && isLocalStorageAvailable()) {
        localStorage.setItem(key, JSON.stringify(store.items)); // Актуальні дані зі стору
      }
    };
  }, [initialData, store, key]);
};
