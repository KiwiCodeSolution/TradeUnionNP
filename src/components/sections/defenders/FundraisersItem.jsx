import LinkButton from "@/components/UI/buttons/LinkButton";
import { BaseURLImage } from "@/constants/BaseUrl";
import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import FunctionalButtons from "./FunctionalButtons";

const FundraisersItem = ({ item, locale, section = "client" }) => {
  const imageUrl = BaseURLImage + item.image;
  const { token } = useAuth();

  return (
    <article
      className={`w-full  flex flex-col justify-between bg-white md:pb-10 xl:pb-4 ${
        section !== "client"
          ? "shadow-standardShadow rounded-[32px] max-w-[204px] h-[436px] overflow-hidden border-[1px] border-black/10 relative z-10"
          : "h-full"
      }`}
    >
      {section === "admin" && <FunctionalButtons item={item} token={token} />}

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
