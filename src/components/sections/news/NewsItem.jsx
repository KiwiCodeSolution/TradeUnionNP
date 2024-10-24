import { Archive, ArrowNews, Edit, Trash, Views } from "@/components/icons/IconsComponents";
import Image from "next/image";
import Link from "next/link";
import NoImage from "@/images/No_Image.jpg";
import { deleteNews } from "@/services/newsService";

const NewsItem = ({ item, section }) => {
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

  const handleDelete = async (slug, userId) => {
    if (confirm("Are you sure you want to delete this news item?")) {
      try {
        await deleteNews(slug, userId);

        // router.refresh();
      } catch (error) {
        console.error("Error deleting news:", error);
        alert("Failed to delete news. Please try again.");
      }
    }
  };

  return (
    <article className="w-full h-full flex gap-x-3 md:gap-x-6 items-start mx-auto md:py-8 md:px-4 relative">
      <div className="w-12 h-full flex flex-col gap-y-10">
        <div className="flex flex-col">
          <p className="text-[15px] text-center">{new Date(item.publishDate).getFullYear()}</p>
          <p className="text-[15px] text-center border-grey border-y-[2px] py">
            {getMonthName(new Date(item.publishDate).getMonth())}
          </p>
          <p className="text-[15px] text-center">{new Date(item.publishDate).getDate()}</p>
        </div>
        {section === "admin" && (
          <div className="w-full flex flex-col gap-y-3 items-center justify-between">
            <Link
              href={`/uk/admin/news/${item._id}`}
              className="outline outline-1 outline-red rounded-xl text-red text-base hover:bg-red hover:text-white font-medium w-full h-fit py-2 flex items-center justify-center"
            >
              <Edit />
            </Link>
            <button className="outline outline-1 outline-red rounded-xl text-red text-base hover:bg-red hover:text-white font-medium w-full h-fit py-2 flex items-center justify-center">
              <Archive />
            </button>
            <button
              className="outline outline-1 outline-red rounded-xl text-red text-base hover:bg-red hover:text-white font-medium w-full h-fit py-2 flex items-center justify-center"
              onClick={() => handleDelete(item.slug, "admin_Evgenija")}
            >
              <Trash />
            </button>
          </div>
        )}
      </div>
      <div className="absolute top-0 left-[88px] flex items-center ">
        {item.sections.map(el => {
          const currentLink =
            el === "Новина"
              ? "/novyny"
              : el === "Звіт"
              ? "/novyny?section=zvit"
              : el === "Інтерв'ю"
              ? "/novyny?section=interview"
              : el === "Культура"
              ? "/novyny?section=kultura"
              : el === "Наука"
              ? "/novyny?section=nauka"
              : "/novyny";
          return (
            <Link
              href={currentLink}
              className="mr-2 pr-2 border-r border-r-[#6366f1] last:border-none hover:underline hover:underline-offset-2 decoration-[#6366f1]"
              key={item._id + el}
            >
              <h3 className="text-[#6366f1] uppercase text-[15px] tracking-widest font-medium">
                {el}
              </h3>
            </Link>
          );
        })}
      </div>

      <Link
        href={`/novyny/${item.slug}`}
        className="w-[calc(100%-48px-12px)] md:w-[calc(100%-48px-24px)] h-full hover:shadow-xl rounded-lg overflow-hidden"
        target="_blank"
      >
        <div className="rounded-lg h-64 overflow-hidden mb-4 relative">
          <Image
            className="w-full h-full object-cover object-center"
            src={item.titleImage || NoImage}
            width={293}
            height={256}
            alt={`фото до новини ${item.title}`}
          />
        </div>
        <div className="px-2 flex flex-col justify-between">
          {section === "admin" && (
            <div className="flex w-full h-fit gap-x-3 text-base text-liteGrey items-center mb-2">
              <Views /> {item.views}
            </div>
          )}

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
