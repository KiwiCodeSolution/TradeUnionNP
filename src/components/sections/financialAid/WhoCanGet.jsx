import { useTranslations } from "next-intl";
import Image from "next/image";
import Check from "@/images/bullet.svg";

const WhoCanGet = () => {
  const t = useTranslations("HomePage.financialAid");
  return (
    <ul className="flex flex-col gap-y-5">
      <li className="w-full flex items-center gap-x-5">
        <Image src={Check} width={16} height={16} alt="зображення червоної іконки-галочки" />
        <p className="text-base md:text-lg text-grey"> {t(`whoCanGet.0`)}</p>
      </li>

      <li className="w-full flex items-center gap-x-5">
        <Image src={Check} width={16} height={16} alt="зображення червоної іконки-галочки" />
        <p className="text-base md:text-lg text-grey"> {t(`whoCanGet.1`)}</p>
      </li>

      <li className="w-full flex items-center gap-x-5">
        <Image src={Check} width={16} height={16} alt="зображення червоної іконки-галочки" />
        <p className="text-base md:text-lg text-grey"> {t(`whoCanGet.2`)}</p>
      </li>
    </ul>
  );
};

export default WhoCanGet;
