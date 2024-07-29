import { useTranslations } from "next-intl";
import Icon_1 from "@/images/protection/icon_01.svg";
import Icon_2 from "@/images/protection/icon_02.svg";
import Icon_3 from "@/images/protection/icon_03.svg";
import Icon_4 from "@/images/protection/icon_04.svg";
import Icon_5 from "@/images/protection/icon_05.svg";
import Icon_6 from "@/images/protection/icon_06.svg";
import Image from "next/image";

const RightsList = () => {
  const t = useTranslations("Protection");
  return (
    <ul className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      <li className="flex gap-x-4">
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
          <Image
            src={Icon_1}
            width={32}
            height={32}
            alt="зображення щиту, червоний контур на білому фоні"
          />
        </div>
        <p className="w-4/5 text-[15px] pt-4">
          <strong>
            {" "}
            {t(`rights_list.1.0`)}
            {/* Захист своїх трудових прав */}
          </strong>
          {t(`rights_list.1.1`)}
          {/* у встановленому чинним законодавством України порядку; */}
        </p>
      </li>
      <li className="flex gap-x-4">
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
          <Image
            src={Icon_2}
            width={32}
            height={32}
            alt="зображення рук, що обробляються чи очищуються, червоний контур на білому фоні"
          />
        </div>
        <p className="w-4/5 text-[15px] pt-4">
          {t(`rights_list.2.0`)}
          <strong> {t(`rights_list.2.1`)}</strong> {t(`rights_list.2.2`)}
        </p>
      </li>
      <li className="flex gap-x-4">
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
          <Image
            src={Icon_3}
            width={32}
            height={32}
            alt="контурне зображення банку договору, червоні лінії на білому фоні, червоний контур на білому фоні"
          />
        </div>
        <p className="w-4/5 text-[15px] pt-4">
          {t(`rights_list.3.0`)} <strong>{t(`rights_list.3.1`)}</strong>;
        </p>
      </li>
      <li className="flex gap-x-4">
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
          <Image
            src={Icon_4}
            width={32}
            height={32}
            alt="зображення літака на фоні календарного бланку, червоний контур на білому фоні"
          />
        </div>
        <p className="w-4/5 text-[15px] pt-4">
          <strong>{t(`rights_list.4.0`)}</strong>
          {t(`rights_list.4.1`)}
        </p>
      </li>
      <li className="flex gap-x-4">
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
          <Image
            src={Icon_5}
            width={32}
            height={32}
            alt="зображення гаманця, червоний контур на білому фоні"
          />
        </div>
        <p className="w-4/5 text-[15px] pt-4">
          <strong>{t(`rights_list.5.0`)}</strong>
          {t(`rights_list.5.1`)}
        </p>
      </li>
      <li className="flex gap-x-4">
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
          <Image
            src={Icon_6}
            width={32}
            height={32}
            alt="зображення руки, у яку падає монета, червоний контур на білому фоні"
          />
        </div>
        <p className="w-4/5 text-[15px] pt-4">
          <strong>{t(`rights_list.6.0`)}</strong>
          {t(`rights_list.6.1`)}
        </p>
      </li>
    </ul>
  );
};

export default RightsList;
