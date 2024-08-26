import { Clock } from "@/components/icons/IconsComponents";
import Image from "next/image";
import Link from "next/link";

const BlogItem = ({ item }) => {
  const dateParts = item.date.split(".");
  const day = dateParts[0];
  const month = dateParts[1];
  const year = dateParts[2];

  const getMonthName = monthNumber => {
    const months = [
      "січня",
      "лютого",
      "березня",
      "квітня",
      "травня",
      "червня",
      "липня",
      "серпня",
      "вересня",
      "жовтня",
      "листопада",
      "грудня",
    ];
    return months[parseInt(monthNumber, 10) - 1];
  };
  return (
    <article className="relative w-full h-[400px] bg-white rounded-xl">
      <Link
        href={item.sectionLink}
        className="absolute top-3 left-3 w-fit h-[29px] flex items-center justify-between px-2 bg-main bg-opacity-60 rounded-md"
        target="_blank"
      >
        <h3 className="text-[15px] tracking-widest text-white text-opacity-80">{item.section}</h3>
      </Link>
      <Link
        href={item.slug}
        className="w-full h-full flex flex-col rounded-t-xl overflow-hidden"
        target="_blank"
      >
        <div className="h-[210px] overflow-hidden">
          <Image
            className="w-full h-full object-cover object-center"
            src={item.titleImage}
            width={375}
            height={210}
            alt={`фото до новини ${item.title}`}
          />
        </div>
        <ul className="flex flex-col p-7 gap-y-6 pb-4">
          <li className="flex gap-x-2 items-center text-[15px] text-newsData">
            <Clock />
            {day} {getMonthName(month)} {year}
          </li>
          <li>
            <h2 className="font-bold text-[22px] leading-[1.3] mb-3 hover:underline hover:underline-offset-2 hover:text-red">
              {item.title}
            </h2>
          </li>
        </ul>
      </Link>
    </article>
  );
};

export default BlogItem;
