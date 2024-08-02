import { useTranslations } from "next-intl";
import Image from "next/image";
import { numbersValue } from "@/constants/numbers";
import Blanc from "@/images/home/icon_benef_dog.svg";
import { inter } from "@/app/[locale]/fonts";
import NumberItem from "./NumberItem";

const NumbersList = () => {
  const t = useTranslations("HomePage.indexes");
  const text = [t(`texts.0`), t(`texts.1`), t(`texts.2`), t(`texts.3`)];
  return (
    <ul className="flex flex-col gap-y-6 md:gap-y-16">
      <li className="w-[360px] flex md:flex-col items-start gap-8 mt-16 md:mx-auto">
        <Image
          src={Blanc}
          width={64}
          height={65}
          alt="тематична іконка, що за зображує бланк із відзнакою"
          className="mx-auto"
        />
        <div className="flex flex-col gap-y-4 md:gap-y-7">
          <p
            className={`text-xl md:text-[22px] leading-[1.3] font-bold md:text-center ${inter.className}`}
          >
            "{t(`title.0`)}"
          </p>
          <p className="text-grey text-base md:text-lg md:text-center">* {t(`title.1`)}</p>
        </div>
      </li>
      <li className="w-full flex flex-wrap gap-x-14 md:gap-x-8 xl:gap-x-14 items-center justify-between gap-y-6 md:gap-y-16">
        {numbersValue.map((el, index) => (
          <NumberItem key={el.end} item={el} index={index} text={text} />
        ))}
      </li>
    </ul>
  );
};

export default NumbersList;
