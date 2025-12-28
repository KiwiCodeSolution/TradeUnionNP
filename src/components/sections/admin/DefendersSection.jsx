"use client";
import { useState } from "react";
import FundraisersItem from "../defenders/FundraisersItem";
import AdminBaseSection from "./AdminBaseSection";
import PageNavBar from "./PageNavBar";

const DefendersSection = ({ items }) => {
  const [isArchive, setIsArchive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const toggleArchive = () => {
    console.log("toggle");
    setIsArchive(!isArchive);
  };

  const filteredItems = items.filter(
    item =>
      item.titleUk.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.descriptionUk.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.titleEn.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.descriptionEn.toLowerCase().includes(searchValue.toLowerCase())
  );
  const filterToActive = isArchive
    ? filteredItems.filter(item => item.status === "active")
    : filteredItems.filter(item => item.status !== "active");
  return (
    <AdminBaseSection styles={"w-full pt-5"}>
      <PageNavBar
        goTo={"/uk/admin/defenders/create"}
        toggleArchive={toggleArchive}
        isArchive={isArchive}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      {items.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 px-4">
          {filterToActive.map(el => (
            <FundraisersItem item={el} locale="uk" section="admin" key={el._id} />
          ))}
        </div>
      ) : (
        <p className="text-center text-3xl py-10 ">Немає активних проектів</p>
      )}
    </AdminBaseSection>
  );
};
export default DefendersSection;
