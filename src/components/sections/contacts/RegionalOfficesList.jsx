"use client";

import { useEffect, useState } from "react";
import Office from "./Office";
import Button from "@/components/UI/buttons/Buttons";
import { observer } from "mobx-react-lite";
import { StoreProvider, useStore } from "@/store/StoreProvider";
import Loader from "@/components/UI/loader/Loader";

export const AllRegionalOfficesList = observer(({ placeholder, button }) => {

  const { officesStore } = useStore();
  const offices = officesStore.offices;
  const isLoading = officesStore.isLoading;
  const [isHydrated, setIsHydrated] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [showAll, setShowAll] = useState(false);
  const initialDisplayCount = 6;

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

  const handleShowMore = () => {
    setShowAll(true);
  };

  const filteredOffices = filterText
    ? offices.filter(office => office.region.toLowerCase().includes(filterText?.toLowerCase()))
    : offices;

  return isLoading ? (
    <Loader />
  ) : (
    <div className="w-full flex flex-col gap-y-8 pb-10">
      <input
        type="text"
        placeholder={placeholder}
        onChange={e => setFilterText(e.target.value)}
        className="w-full xl:w-7/12 h-14 py-3 pr-5 pl-10 rounded-full bg-[#f9f0da] outline-none focus:outline-1 focus:outline-grey mt-8 mx-auto"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredOffices
          .slice(0, showAll || filterText ? filteredOffices.length : initialDisplayCount)
          .map(el => (
            <Office office={el} key={el.region} />
          ))}
      </div>

      {!showAll && filterText === "" && filteredOffices.length > initialDisplayCount && (
        <Button clickFn={handleShowMore} view="red" style="mx-auto">
          {button}
        </Button>
      )}
    </div>
  );
});

export default function RegionalOfficesList({ placeholder, button }) {
  return (
    <StoreProvider>
      <AllRegionalOfficesList placeholder={placeholder} button={button} />
    </StoreProvider>
  );
}
