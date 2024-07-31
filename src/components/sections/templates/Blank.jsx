import { useTranslations } from "next-intl";
import Image from "next/image";
import Bookmark from "@/images/bookmark.svg";

const Blank = ({ index, title, text, file }) => {
  console.log(file);
  const t = useTranslations("Forms");
  return (
    <article className="w-full bg-white rounded-2xl px-9 py-6 flex flex-col justify-between gap-y-4 relative">
      <Image
        src={Bookmark}
        width={23}
        height={24}
        alt="червона закладка"
        className="absolute -top-1 left-8"
      />
      <h3 className="text-2xl font-bold">{title}</h3>
      <div className="flex flex-col gap-y-4">
        {text && <p className="text-lg text-grey">{text}</p>}
        <a
          href={file}
          className="text-lg text-red underline underline-offset-1 hover:underline-offset-4"
        >
          {t(`link`)}
          <span className="no-underline"> &gt;</span>
        </a>
      </div>
    </article>
  );
};

export default Blank;
