import advantages from "@/data/advantages.json";
import Image from "next/image";
import Check from "@/images/i-trade/checked.svg";

const AdvantagesList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:px-4">
      {advantages.map((el, index) => (
        <article
          key={el.first_text + index}
          className={`flex md:flex-col gap-x-4 md:gap-y-4 ${index === 8 ? "md:col-start-2" : ""}`}
        >
          <Image src={Check} width={32} height={32} alt="біла галочка на червоному фоні" />
          <p className="text-[15px]">
            {el.first_text} <strong>{el.accent_text}</strong> {el.second_text}
          </p>
        </article>
      ))}
    </div>
  );
};

export default AdvantagesList;
