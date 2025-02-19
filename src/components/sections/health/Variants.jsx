import BaseSection from "@/components/BaseSection";
import Variant from "./Variant";
import Title from "@/components/Title";

const variants = [
  {
    period: "щорічно, влітку та взимку",
    title: "Путівки на оздоровлення профспілчан",
    text: [
      "Путівки на оздоровлення ",
      "розподіляються між первинним профспілковими організаціями",
      " за рішенням центрального комітету за квотами пропорційно до кількості членів ППО та бюджету ППО",
    ],
  },
  {
    period: "щорічно, жовтень",
    title: "Оздоровлення для учасників бойових дій",
    text: [
      "Виплата матеріальної допомоги на оздоровлення учасникам бойових дій — членів Профспілки ",
      "з нагоди Дня захисника та захисниць України",
      "",
    ],
  },
  {
    period: "за потреби",
    title: "Реабілітація мобілізованих профспілчан",
    text: [
      "Компенсація на реабілітацію мобілізованих профспілчан після ",
      "отримання поранення при участі в бойових діях",
      " та інших випадках, що повʼязані з війною.",
    ],
  },
  {
    period: "щорічно, червень — серпень",
    title: "Оздоровлення для дітей ",
    text: [
      "Компенсація витрат на оздоровлення на території України в літній період (з 01.06 по 31.08) для дітей членів Профспілки ",
      "віком від 6 до 13 років включно.",
      "",
    ],
  },
];

const Variants = () => {
  return (
    <BaseSection style={"bg-health-gradient pt-5 xl:pt-9 pb-4 xl:pb-[96px]"}>
      {/* <div className="w-full h-full absolute top-0 left-0 z-[1] " /> */}
      <div className="w-full lg:w-[1560px] relative z-[2] mx-auto pl-[38px] pr-8 md:px-[63px] lg:px-0">
        <Title tag={"h2"} styles={"text-center mb-10 xl:mb-8"}>
          Оздоровлення <span className="text-red">профспілчан</span>
        </Title>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-10 gap-y-6 mb-[74px]">
          {variants.map(el => (
            <Variant key={el.title} variant={el} />
          ))}
        </div>
      </div>
    </BaseSection>
  );
};

export default Variants;
