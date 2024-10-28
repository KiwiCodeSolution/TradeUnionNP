"use client";

import { Archive, ArrowNews, Edit, Timer, Trash, Views } from "@/components/icons/IconsComponents";
import Image from "next/image";
import Link from "next/link";
import NoImage from "@/images/No_Image.jpg";
import { deleteNews, toggleArchiveStatus } from "@/services/newsService";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const NewsItem = ({ item, section, onToggleArchive }) => {
  const router = useRouter();
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
    return months[parseInt(monthNumber, 10)];
  };
  const today = new Date();

  const handleDelete = async (slug, userId) => {
    toast.custom(t => (
      <div
        className={`bg-white p-4 rounded shadow-lg flex flex-col ${
          t.visible ? "animate-enter" : "animate-leave"
        }`}
      >
        <p className="mb-3">Ви дійсно бажаєте видалити цей запис? </p>
        <div className="flex justify-end gap-2">
          <button
            onClick={async () => {
              try {
                await deleteNews(slug, userId);
                toast.success("Новину видалено!");
                router.push("/uk/admin/news");
                router.reload();
              } catch (error) {
                console.error("Error deleting news:", error);
                if (error.message === "News not found") {
                  toast.error("Таку новину не знайдено.");
                } else toast.error("Щось пішло не так. Спробуйте ще раз.");
              } finally {
                toast.dismiss(t.id);
              }
            }}
            className="bg-red text-white px-3 py-1 rounded"
          >
            Так
          </button>
          <button
            onClick={() => toast.dismiss(t.id)}
            className="bg-black text-white px-3 py-1 rounded"
          >
            Ні
          </button>
        </div>
      </div>
    ));
  };

  const handleArchiveStatus = async () => {
    try {
      const updatedNews = await toggleArchiveStatus(item.slug, item.status, "<YOUR_TOKEN_HERE>");
      if (updatedNews) {
        toast.success(
          `Новина успішно ${item.status === "archived" ? "деархівована" : "архівована"}.`
        );
        router.replace("/uk/admin/news");
      }
    } catch (error) {
      toast.error("Сталася помилка при зміні статусу новини.");
      console.error("Помилка зміни статусу:", error);
    }
  };

  return (
    <article
      className={`w-full h-full flex gap-x-3 md:gap-x-6 items-start mx-auto md:py-8 md:px-4 relative ${
        item.status === "created" ? "opacity-35" : ""
      }`}
    >
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
            <button
              className="outline outline-1 outline-red rounded-xl text-red text-base hover:bg-red hover:text-white font-medium w-full h-fit py-2 flex items-center justify-center"
              onClick={() => onToggleArchive(item.slug, item.status)}
            >
              <Archive />
            </button>
            <button
              className="outline outline-1 outline-red rounded-xl text-red text-base hover:bg-red hover:text-white font-medium w-full h-fit py-2 flex items-center justify-center"
              onClick={() => handleDelete(item.slug, "admin_Evgenija")}
            >
              <Trash />
            </button>
            {new Date(item.publishDate) > today && (
              <div className="outline outline-1 outline-red rounded-xl text-red text-base   font-medium w-full h-fit py-2 flex items-center justify-center">
                <Timer />
              </div>
            )}
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
