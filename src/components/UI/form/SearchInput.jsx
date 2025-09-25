"use client";
import Search from "@/images/search.svg";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

const SearchInput = ({ size }) => {
  const [searchparams, setSearchparams] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    paramsToUpdate => {
      const params = new URLSearchParams(searchParams.toString());

      // Видаляємо старий page
      params.delete("page");

      // Додаємо нові параметри
      Object.entries(paramsToUpdate).forEach(([key, value]) => {
        params.set(key, value);
      });

      return params.toString();
    },
    [searchParams]
  );

  const onSubmit = e => {
    e.preventDefault();

    // ✅ Передаємо об'єкт з query і page
    const queryString = createQueryString({ query: searchparams, page: "1" });
    router.push(`poshuk-po-saytu?${queryString}`);
    setSearchparams("");
  };

  return (
    <form
      className={`${
        size === "mobile"
          ? "md:hidden absolute bottom-0 flex w-[95%] left-1/2 -translate-x-1/2"
          : "hidden md:flex w-[148px] xl:w-[200px] "
      } gap-x-2`}
      onSubmit={onSubmit}
    >
      <input
        onChange={e => setSearchparams(e.target.value)}
        value={searchparams}
        type="text"
        className="w-full md:w-full h-[38px] py-2 px-3 border border-1 border-liteGrey rounded-lg"
      />
      <button type="submit">
        <Image
          src={Search}
          width={20}
          height={20}
          alt="лупа, іконка, що зображує лупу для збільшення"
        />
      </button>
    </form>
  );
};

export default SearchInput;
