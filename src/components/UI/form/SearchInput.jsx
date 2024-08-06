"use client";
import { useCallback, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Search from "@/images/search.svg";

const SearchInput = ({ size }) => {
  const [searchparams, setSearchparams] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const onSubmit = e => {
    e.preventDefault();
    router.push(`poshuk-po-saytu?${createQueryString("query", searchparams)}`);
  };

  return (
    <form
      className={`${
        size === "mobile"
          ? "md:hidden absolute bottom-0 flex w-[95%] left-1/2 -translate-x-1/2"
          : "hidden md:flex "
      } gap-x-2`}
      onSubmit={onSubmit}
    >
      <input
        onChange={e => setSearchparams(e.target.value)}
        value={searchparams}
        type="text"
        className="w-full md:w-[148px] h-[38px] py-2 px-3 border border-1 border-liteGrey rounded-lg"
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
