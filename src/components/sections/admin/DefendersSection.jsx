"use client";
import { useState } from "react";
import FundraisersItem from "../defenders/FundraisersItem";
import AdminBaseSection from "./AdminBaseSection";
import PageNavBar from "./PageNavBar";

const DefendersSection = ({ items }) => {
  const [isArchive, setIsArchive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [lang, setLang] = useState("uk");
  const toggleArchive = () => {
    setIsArchive(!isArchive);
  };
  const toggleLang = () => setLang(prev => (prev === "uk" ? "en" : "uk"));
  const filteredItems = items.filter(
    item =>
      item.titleUk.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.descriptionUk.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.titleEn.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.descriptionEn.toLowerCase().includes(searchValue.toLowerCase())
  );

  const filteredToActive = filteredItems.filter(item => item.is_active === !isArchive);

  return (
    <AdminBaseSection styles={"w-full pt-5"}>
      <PageNavBar
        goTo={"/uk/admin/defenders/create"}
        toggleArchive={toggleArchive}
        isArchive={isArchive}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        lang={lang}
        toggleLang={toggleLang}
      />
      {items.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 px-4">
          {filteredToActive.map(el => (
            <FundraisersItem item={el} locale={lang} section="admin" key={el._id} />
          ))}
        </div>
      ) : (
        <p className="text-center text-3xl py-10 ">Немає проектів</p>
      )}
    </AdminBaseSection>
  );
};
export default DefendersSection;
