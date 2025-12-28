import LinkButton from "@/components/UI/buttons/LinkButton";
import { BaseURLImage } from "@/constants/BaseUrl";
import Image from "next/image";
import Link from "next/link";

const FundraisersItem = ({ item, locale, section = "client" }) => {
  const imageUrl = BaseURLImage + item.image;

  return (
    <article
      className={`w-full h-full flex flex-col justify-between bg-white md:pb-10 xl:pb-4 ${
        section !== "client" &&
        "shadow-standardShadow rounded-[32px] max-w-[204px] h-[436px] overflow-hidden border-[1px] border-black/10 relative z-10"
      }`}
    >
      {section === "admin" && (
        <div className="w-full h-8 bg-white/20 absolute top-0 left-0 flex z-0 rounded-t-[32px] overflow-hidden">
          <Link
            href={`/defenders/edit/${item._id}`}
            className="w-1/2 cursor-pointer border-r-[1px] border-black/10 text-center"
          >
            edit
          </Link>
          <button
            href={`/defenders/edit/${item._id}`}
            className="w-1/2 cursor-pointer text-center border-l-[1px] border-black/10"
          >
            del
          </button>
        </div>
      )}

      <div className="w-full h-[146px] overflow-hidden">
        <Image
          src={imageUrl}
          width={280}
          height={146}
          alt=""
          className="w-full min-w-[204px] max-w-[280p] h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-2 p-2 pb-4 justify-between h-[calc(100%-146px)]">
        <p className="text-xl font-bold line-clamp-2">
          {locale === "uk" ? item.titleUk : item.titleEn}
        </p>
        <p className="text-lg">{locale === "uk" ? item.descriptionUk : item.descriptionEn}</p>
        <LinkButton
          view={"red"}
          goToPage
          goTo={item.link}
          style={"font-bold w-full mt-auto"}
          locale={locale}
        >
          {locale === "uk" ? "доєднатись" : "join"}
        </LinkButton>
      </div>
    </article>
  );
};
export default FundraisersItem;
