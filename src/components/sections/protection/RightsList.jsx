import Icon_1 from "@/images/protection/icon_01.svg";
import Icon_2 from "@/images/protection/icon_02.svg";
import Icon_3 from "@/images/protection/icon_03.svg";
import Icon_4 from "@/images/protection/icon_04.svg";
import Icon_5 from "@/images/protection/icon_05.svg";
import Icon_6 from "@/images/protection/icon_06.svg";
import Image from "next/image";

const RightsList = () => {
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
          <strong>Захист своїх трудових прав</strong> у встановленому чинним законодавством України
          порядку;
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
          Умови праці, що <strong>відповідають санітарним вимогам</strong>, вимогам безпеки і
          гігієни;
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
          Допомогу з соціального <strong>страхування</strong>;
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
          <strong>Відпочинок</strong>, який гарантується встановленою чинним законодавством України
          тривалістю робочого часу і забезпечується наданням вихідних днів, святкових і неробочих
          днів, оплачуваних щорічних відпусток;
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
          <strong>Оплату праці без будь-якої дискримінації</strong> і не нижче встановленого чинним
          законодавством України мінімального розміру;
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
          <strong>Соціальне забезпечення при втраті працездатності</strong>, додаткові трудові та
          соціально-побутові пільги, передбачені чинним законодавством України та Колективним
          договором.
        </p>
      </li>
    </ul>
  );
};

export default RightsList;
