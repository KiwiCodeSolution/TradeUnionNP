"use client";

import { useEffect } from "react";
import { useStore } from "@/store/StoreProvider";
import { toJS } from "mobx";

const HydrateStores = ({ initialData }) => {
  const { newsStore, contactsStore, officesStore, photoReportsStore } = useStore();

  useEffect(() => {
    if (!initialData) {
      console.error("Missing initial data for hydration!");
      return;
    }

    if (initialData.news) {
      newsStore.hydrate(initialData.news);
      console.log("Hydrated news:", toJS(newsStore.news));
    }
    if (initialData.contacts) {
      contactsStore.setItems(initialData.contacts); // Обробка контактів
    }
    if (initialData.offices) {
      officesStore.setItems(initialData.offices);
    }
    if (initialData.photoReports) {
      photoReportsStore.setItems(initialData.photoReports);
    }
  }, [initialData, newsStore, contactsStore, officesStore, photoReportsStore]);

  return null;
};

export default HydrateStores;
