import { Clock } from "@/components/icons/IconsComponents";
import Image from "next/image";
import Link from "next/link";
import NoImage from "@/images/No_Image.jpg";
import { BaseURLImage } from "@/constants/BaseUrl";

const BlogItem = ({ item }) => {
  const currentImage = (item.previewImg && `${BaseURLImage}${item.previewImg}`) || NoImage;

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
    return months[parseInt(monthNumber, 10)];
  };

  const date = new Date(item.publishDate);
  const day = date.getDate();
  const month = getMonthName(date.getMonth());
  const year = date.getFullYear();

  return (
    <article className="relative w-full h-[400px] bg-white rounded-xl">
      <div className="absolute top-3 left-3 w-fit h-[29px] flex items-center justify-between px-2 bg-main bg-opacity-60 rounded-md">
        {item.sections.map((el, index) => (
          <h3
            className="text-[15px] tracking-widest mr-1 pr-1 text-white text-opacity-80 border-r border-r-white-opacity-80 last:border-none"
            key={Date.now() + index}
          >
            {el}
          </h3>
        ))}
      </div>
      <Link
        href={item.slug}
        className="w-full h-full flex flex-col rounded-t-xl overflow-hidden"
        target="_blank"
      >
        <div className="h-[210px] overflow-hidden">
          <Image
            className="w-full h-full object-cover object-top"
            src={currentImage}
            width={375}
            height={210}
            alt={`фото до новини ${item.title}`}
          />
        </div>
        <ul className="flex flex-col p-7 gap-y-6 pb-4">
          <li className="flex gap-x-2 items-center text-[15px] text-newsData">
            <Clock />
            {day} {month} {year}
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
