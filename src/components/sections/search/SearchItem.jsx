import { ArrowNews } from "@/components/icons/IconsComponents";
import Link from "next/link";

const SearchItem = ({ item }) => {
  const link = item.link || item.slug || "#";
  const title = item.title || item.region || "";

  return (
    <article className="w-full border-b py-4 px-5 flex flex-col gap-y-5 hover:shadow-xl">
      <Link href={link} target="_blank" className="">
        <h3 className="text-2xl">{title}</h3>
        <div className="text-[#6366f1] flex items-center gap-x-1 mb-2">
          <h3 className="text-[#6366f1] text-lg font-medium flex items-center">Детальніше</h3>

          <ArrowNews />
        </div>
      </Link>
    </article>
  );
};

export default SearchItem;
