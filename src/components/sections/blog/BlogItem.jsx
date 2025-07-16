import { Clock } from "@/components/icons/IconsComponents";
import Image from "next/image";
import { Link } from "@/navigation";
import NoImage from "@/images/No_Image.jpg";
import { BaseURLImage } from "@/constants/BaseUrl";
import { extractFirstImage } from "@/utils/extractFirstImage";

const BlogItem = ({ item, locale, part }) => {
  const filteredSrc = item.previewImg === 'src="/preview/qwerty.jpeg"';
  const imageItemLink = extractFirstImage(item.content);
  const currentImage =
    (item.previewImg && !filteredSrc && `${BaseURLImage}${item.previewImg}`) ||
    imageItemLink ||
    NoImage;

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
    <article className="relative w-full h-full xl:min-h-[400px] bg-white rounded-xl shadow-standardShadow">
      <div className="absolute top-3 left-3 w-fit h-[29px] flex items-center justify-between px-2 bg-main bg-opacity-60 rounded-md z-[3]">
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
        href={`/${part === "photo" ? "foto" : "novyny"}/${item.slug}`}
        className="w-full h-full flex flex-col rounded-t-xl overflow-hidden"
        target="_blank"
        locale={locale}
      >
        <div className="relative w-full h-[260px] md:h-[170px] xl:h-[320px] overflow-hidden">
          <Image
            className="absolute inset-0 object-contain object-top z-[1]"
            src={currentImage}
            width={375}
            height={370}
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
