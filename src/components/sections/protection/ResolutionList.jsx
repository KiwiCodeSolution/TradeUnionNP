import Image from "next/image";
import Clock from "@/images/clock.svg";
import Clock_1 from "@/images/clock1.svg";
import ListItem from "@/components/UI/items/ListItem";

const FIRST_LIST = [
  "Розшифрування заробітної плати",
  "Питання щодо відпусток",
  "Консультації щодо пояснювальних записок",
  "Консультації щодо посадової інструкції",
  "Запит на надання контактної інформації з певним відділом",
  "Консультації щодо матеріальної допомоги",
  "Консультації щодо догляду за хворим родичем",
  "Консультація щодо поновлення після декрету",
  "Консультація щодо стажу",
];

const SECOND_LIST = [
  "Догани",
  "Лікарняні",
  "Скорочення робочих годин працівника",
  "Переведення на ставку працівника",
  "Депреміювання",
  "Конфлікт з керівником",
  "Забезпечення працівників",
  "Скорочення",
  "Умови праці",
];

const ResolutionList = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 z-[5]">
      <div className="px-8 sm:px-16 py-10 bg-white rounded-2xl w-full md:w-1/2 flex flex-col gap-4 relative">
        <h3 className="text-2xl font-bold mb-5 leading-[1.4]">
          Звернення, які вирішуються <br /> <span className="text-red">до 7 днів</span>
        </h3>
        <ul className="w-full flex flex-col gap-y-5">
          {FIRST_LIST.map(el => (
            <ListItem item={el} gap={4} key={el} />
          ))}
        </ul>
        <Image
          src={Clock}
          width={213}
          height={204}
          className="h-1/2 sm:h-1/3 opacity-10 absolute right-5 bottom-7"
          style={{ width: "auto", height: "auto" }}
          alt="зображення годинника"
        />
      </div>
      <div className="px-8 sm:px-16 py-10 bg-white rounded-2xl w-full md:w-1/2 flex flex-col gap-4 relative">
        <h3 className="text-2xl font-bold mb-5">
          Звернення, які вирішуються <br /> <span className="text-red">7-31 день</span>
        </h3>
        <ul className="w-full flex flex-col gap-y-5">
          {SECOND_LIST.map(el => (
            <ListItem item={el} gap={4} key={el} />
          ))}
        </ul>
        <Image
          src={Clock_1}
          width={144}
          height={204}
          className="h-1/2 sm:h-1/3 opacity-10 absolute right-5 bottom-7"
          style={{ width: "auto", height: "auto" }}
          alt="зображення годинника"
        />
      </div>
    </div>
  );
};

export default ResolutionList;
