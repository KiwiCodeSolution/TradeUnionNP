import { useTranslations } from "next-intl";
import Image from "next/image";
import ArrowNext from "@/images/about/arrow_history.svg";
import Appeal from "@/images/about/appeal.svg";
import ListItem from "@/components/UI/items/ListItem";

const standardShadow = ({ item, last, index }) => {
  const t = useTranslations("About.history");

  return (
    <li className="w-full md:w-9/12 h-fit p-8 md:p-12 flex flex-col md:flex-row items-center gap-4 md:gap-24 rounded-3xl bg-white shadow-standardShadow relative mx-auto">
      <p className="w-full md:w-3/12 text-2xl text-red font-bold text-center">
        {t(`history_points.${index}.year`)}
      </p>
      <ul className="w-full md:w-9/12 flex flex-col gap-y-4">
        {item.appeal && (
          <li className="flex gap-x-5">
            <Image src={Appeal} width={49} height={49} alt="Appeal" />
            <div className="w-fit flex flex-col gap-y-1">
              <p className="text-xl md:text-3xl font-bold text-red">{item.appeal}</p>
              <p className="text-lg"> {t(`history_points.${index}.appeal`)}</p>
            </div>
          </li>
        )}
        {item.events.map((el, ind) => (
          <ListItem item={t(`history_points.${index}.events.${ind}`)} gap={3} key={index + 10} />
        ))}
      </ul>
      {!last && (
        <Image
          src={ArrowNext}
          width={23}
          height={39}
          alt="сіра стрілочка вниз, вказує на наступний блок"
          className="absolute -bottom-[42px] left-1/2 -translate-x-1/2"
        />
      )}
    </li>
  );
};

export default standardShadow;
