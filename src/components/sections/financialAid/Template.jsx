import BaseSection from "@/components/BaseSection";
import Title from "@/components/Title";
import RedDot from "@/components/UI/RedDot";
import Wrapper from "@/components/Wrapper";

const POINTS = [
  "виплата надходить на зарплатну картку;",

  "виплата допомоги щоп’ятниці (або напередодні, якщо це святковий день);",

  "якщо в нас виникнуть питання стосовно документів, ми обов’язково з вами зв'яжемося;",

  "у випадку відмови у виплаті допомоги, ви обов’язково отримаєте зворотній зв’язок з причиною відмови;",

  "якщо є додаткові питання — зверніться до Голови профспілкового осередку.",
];

const Template = () => {
  return (
    <BaseSection style={"pt-16 bg-bgGrey"}>
      <Wrapper styles={"flex gap-x-4"}>
        <div className="w-1/2 flex flex-col gap-y-8">
          <Title tag={"h2"}>
            Шаблон <span className="text-red">внутрішніх</span> відправок
          </Title>
          <p className="text-lg text-grey">
            Відправте пакет документів на отримання матеріальної допомоги, скориставшись шаблоном
            внутрішніх відправок "Матеріальна допомога від Профспілки", м. Полтава, відділення
            “Нової пошти” №23
          </p>
        </div>
        <ul
          className="w-1/2 flex flex-col gap-y-4 bg-white rounded-2xl px-9 py-6
        "
        >
          {POINTS.map(el => (
            <li className="w-full text-lg text-grey flex gap-x-5 items-center" key={el}>
              <RedDot />
              <p className="w-[calc(100%-9px-20px)]">{el}</p>
            </li>
          ))}
        </ul>
      </Wrapper>
    </BaseSection>
  );
};

export default Template;
