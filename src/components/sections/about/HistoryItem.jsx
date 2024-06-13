import Image from "next/image";
import ArrowNext from "@/images/about/arrow_history.svg";
import RedDot from "@/components/UI/RedDot";
import Appeal from "@/images/about/appeal.svg";

const HistoryItem = ({ item, last }) => {
  return (
    <li className="w-9/12 h-fit p-8 md:p-12 flex items-center gap-4 md:gap-24 rounded-3xl bg-white shadow-historyItem relative mx-auto">
      <p className="w-3/12 text-2xl text-red font-bold text-center">{item.year} рік</p>
      <ul className="w-9/12 flex flex-col gap-y-4">
        {item.appeal && (
          <li className="flex gap-x-5">
            <Image src={Appeal} width={49} height={49} alt="" />
            <div className="w-fit flex flex-col gap-y-1">
              <p className="text-3xl font-bold text-red">{item.appeal}</p>
              <p className="text-lg">звернення профспілчан вирішено</p>
            </div>
          </li>
        )}
        {item.events.map((el, index) => (
          <li className="flex gap-x-3 w-full items-center" key={index + 10}>
            <RedDot />
            <p className="w-[calc(100%-9px-12px)] text-lg">{el}</p>
          </li>
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

export default HistoryItem;