"use client";

import { Cross, Search } from "@/components/icons/IconsComponents";
import { useState } from "react";

const SearchInputAdminPage = () => {
  const [isInputFocused, setInputFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = event => {
    setSearchValue(event.target.value);
  };

  const handleClearInput = () => {
    setSearchValue("");
  };
  return (
    <form className="w-4/5 relative">
      <input
        type="search"
        className="w-full h-8 outline-none border-b-2 border-red px-4 py-3 text-grey placeholder:text-liteGrey placeholder:italic"
        placeholder="Введіть інформацію для пошуку"
        value={searchValue}
        onChange={handleInputChange}
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
      />
      {isInputFocused ? (
        <button className="absolute top-0 right-3" onClick={handleClearInput}>
          <Cross />
        </button>
      ) : (
        <Search className="absolute top-0 right-3" />
      )}
    </form>
  );
};

export default SearchInputAdminPage;
