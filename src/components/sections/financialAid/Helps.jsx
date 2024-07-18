import { useTranslations } from "next-intl";
import Image from "next/image";
import Info from "@/images/home/icon_info-red.svg";
import Shield from "@/images/home/icon_shield-red.svg";

const Helps = () => {
  const t = useTranslations("HomePage.financialAid");
  return (
    <ul className="w-full flex flex-col md:flex-row gap-4 mt-4">
      <li className="w-full flex flex-col gap-y-4">
        <div className="w-full h-[41px] flex items-center justify-start gap-x-4">
          <Image
            src={Info}
            width={30}
            height={31}
            alt="зображення окличного знаку білого кольору у червоному колі"
          />
          <h3 className="text-[22px] font-bold inter">{t(`helpsItems.0.title`)}</h3>
        </div>
        <p className="text-grey leading-[1.5]">{t(`helpsItems.0.text`)}</p>
      </li>
      <li className="w-full flex flex-col gap-y-4">
        <div className="w-full h-[41px] flex items-center justify-start gap-x-4">
          <Image
            src={Shield}
            width={41}
            height={41}
            alt="зображення червоного щита з трьома білими крапками"
          />
          <h3 className="text-[22px] font-bold inter">{t(`helpsItems.1.title`)}</h3>
        </div>
        <p className="text-grey leading-[1.5]">{t(`helpsItems.1.text`)}</p>
      </li>
    </ul>
  );
};

export default Helps;
