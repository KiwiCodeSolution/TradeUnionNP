import { ArrowNews } from "@/components/icons/IconsComponents";
import Image from "next/image";
import Link from "next/link";

const NewsItem = ({ item }) => {
  const dateParts = item.date.split(".");
  const day = dateParts[0];
  const month = dateParts[1];
  const year = dateParts[2];

  const getMonthName = monthNumber => {
    const months = [
      "січ",
      "лют",
      "бер",
      "квіт",
      "трав",
      "черв",
      "лип",
      "серп",
      "вер",
      "жовт",
      "лист",
      "груд",
    ];
    return months[parseInt(monthNumber, 10) - 1];
  };
  return (
    <article className="w-full h-full flex gap-x-3 md:gap-x-6 items-start mx-auto md:py-8 md:px-4 relative">
      <div className="w-12 h-full flex flex-col">
        <p className="text-[15px] text-center">{year}</p>
        <p className="text-[15px] text-center border-grey border-y-[2px] py">
          {getMonthName(month)}
        </p>
        <p className="text-[15px] text-center">{day}</p>
      </div>
      <Link href={item.sectionLink} className="absolute top-0 left-[88px]">
        <h3 className="text-[#6366f1] uppercase text-[15px] tracking-widest font-medium">
          {item.section}
        </h3>
      </Link>
      <Link
        href={item.slug}
        className="w-[calc(100%-48px-12px)] md:w-[calc(100%-48px-24px)] h-full hover:shadow-xl rounded-lg overflow-hidden"
      >
        <div className="rounded-lg h-64 overflow-hidden mb-4">
          <Image
            className="w-full h-full object-cover object-center"
            src={item.titleImage}
            width={293}
            height={256}
          />
        </div>
        <div className="px-2 flex flex-col justify-between">
          <h2 className="text-liteGrey font-medium text-[22px] leading-[1.3] mb-3">{item.title}</h2>
          <p className="text-[15px] leading-[1.625] mb-5">{item.shortText}</p>
          <div className="text-[#6366f1] flex items-center gap-x-1 mb-2">
            <h3 className="text-[#6366f1] text-[15px] font-medium">Читати</h3>
            <ArrowNews />
          </div>
        </div>
      </Link>
    </article>
  );
};

export default NewsItem;