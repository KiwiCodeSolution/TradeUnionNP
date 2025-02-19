"use client";

import HydrateStores from "@/components/helpers/HydrateStores";
import { StoreProvider } from "@/store/StoreProvider";

export default function HydratedStoreWrapper({ initialData }) {
  return (
    <StoreProvider>
      <HydrateStores initialData={initialData} />
    </StoreProvider>
  );
}
