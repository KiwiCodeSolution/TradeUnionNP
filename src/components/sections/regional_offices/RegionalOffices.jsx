"use client";

import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import RegionalOffice from "./RegionalOffice";
import { observer } from "mobx-react-lite";
import { StoreProvider, useStore } from "@/store/StoreProvider";
import Loader from "@/components/UI/loader/Loader";
import { useEffect, useState } from "react";

export const RegionalOfficesSection = observer(() => {
  const { officesStore } = useStore();
  const offices = officesStore.offices;
  const isLoading = officesStore.isLoading;
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (offices.length === 0 && !isLoading) {
      officesStore.fetchAllOffices();
    }
  }, [offices, isLoading, officesStore]);

  if (!isHydrated) {
    return null;
  }

  return isLoading ? (
    <Loader />
  ) : (
    <BaseSection style={""}>
      <Wrapper styles={"py-16"}>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-8 xl:gap-16">
          {offices.map(el => (
            <RegionalOffice key={el._id} item={el} />
          ))}
        </div>
      </Wrapper>
    </BaseSection>
  );
});

export default function RegionalOffices() {
  return (
    <StoreProvider>
      <RegionalOfficesSection />
    </StoreProvider>
  );
}
