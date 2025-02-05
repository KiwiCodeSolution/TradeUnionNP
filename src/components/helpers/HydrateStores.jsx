"use client";

import { useEffect } from "react";
import { useStore } from "@/store/StoreProvider";

const HydrateStores = ({ initialData }) => {
  const { newsStore, contactsStore, officesStore, photoReportsStore } = useStore();

  useEffect(() => {
    if (!initialData) {
      console.error("Missing initial data for hydration!");
      return;
    }

    if (initialData.news) {
      newsStore.hydrate(initialData.news);
    }
    if (initialData.contacts) {
      contactsStore.setItems(initialData.contacts);
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
