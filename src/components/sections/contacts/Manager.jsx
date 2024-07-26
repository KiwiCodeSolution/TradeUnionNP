import { useTranslations } from "next-intl";
import Image from "next/image";
import Mail from "@/images/contacts/mail.svg";

const Manager = ({ item, index }) => {
  const t = useTranslations("Contacts");
  return (
    <article className="w-full flex flex-col gap-4 text-grey text-lg">
      <h3 className="font-bold text-[30px] text-main">{t(`managers.${index}.name`)}</h3>
      <div className="flex items-center gap-x-3">
        <Image src={Mail} width={21} height={27} alt="малюнок конверту червоного кольору" />
        <a
          href={`mailto:${item.mail}`}
          className="text-red hover:underline hover:underline-offset-1"
        >
          {item.mail}
        </a>
      </div>
      <p className="font-bold"> {t(`managers.${index}.position`)}</p>
      <p> {t(`managers.${index}.details`)}</p>
    </article>
  );
};

export default Manager;
