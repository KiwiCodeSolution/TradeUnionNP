import Image from "next/image";
import { useTranslations } from "next-intl";
import FirstIcon from "@/images/home/icon_refugee.svg";
import SecondIcon from "@/images/home/icon_military.svg";
import ThirdIcon from "@/images/home/icon_man.svg";

const NewKinds = () => {
  const t = useTranslations("HomePage.financialAid");
  return (
    <ul className="w-[295px] md:w-full flex flex-col gap-y-5 absolute top-[230px] md:top-[260px] xl:top-[230px] left-12">
      <li className="flex gap-x-4 rounded-2xl bg-white py-6 pl-8 pr-20 shadow-standardShadow">
        <Image src={FirstIcon} width={47} height={49} alt="червона торбинка на білому тлі" />
        <p className={`text-base md:text-lg text-grey leading-[1.5]`}>
          <strong>{t(`firstKind.0`)}</strong> {t(`firstKind.1`)}
        </p>
      </li>
      <li className="flex gap-x-4 rounded-2xl bg-white py-6 pl-8 pr-20 shadow-standardShadow">
        <Image src={SecondIcon} width={47} height={49} alt="військовий" />
        <p className={`text-base md:text-lg text-grey leading-[1.5]`}>
          <strong>{t(`secondKind.0`)}</strong> , {t(`secondKind.1`)}
        </p>
      </li>
      <li className="flex gap-x-4 rounded-2xl bg-white py-6 pl-8 pr-20 shadow-standardShadow">
        <Image src={ThirdIcon} width={47} height={49} alt="зображення людини" />
        <p className={`text-base md:text-lg text-grey leading-[1.5]`}>
          {t(`thirdKind.0`)}
          <strong> {t(`thirdKind.1`)}</strong> {t(`thirdKind.2`)}
        </p>
      </li>
    </ul>
  );
};

export default NewKinds;
