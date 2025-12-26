import LinkButton from "@/components/UI/buttons/LinkButton";
import Image from "next/image";

const FundraisersItem = ({ item, locale }) => {
  console.log("FundraisersItem item:", item);

  console.log("Current locale:", locale);

  return (
    <article className="w-full h-full flex flex-col justify-between bg-white md:pb-10 xl:pb-4 ">
      <div className="w-full h-[146px] overflow-hidden">
        <Image
          src={item.image}
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
          доєднатись
        </LinkButton>
      </div>
    </article>
  );
};
export default FundraisersItem;
