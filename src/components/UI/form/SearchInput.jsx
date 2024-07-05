import Image from "next/image";
import Search from "@/images/search.svg";

const SearchInput = () => {
  return (
    <form className="hidden md:flex gap-x-2">
      <input
        type="text"
        className="w-[148px] h-[38px] py-2 px-3 border border-1 border-liteGrey rounded-lg"
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
