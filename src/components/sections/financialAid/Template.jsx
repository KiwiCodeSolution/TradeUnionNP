import BaseSection from "@/components/BaseSection";
import Title from "@/components/Title";
import ListItem from "@/components/UI/items/ListItem";
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
            <ListItem item={el} gap={5} key={el} />
          ))}
        </ul>
      </Wrapper>
    </BaseSection>
  );
};

export default Template;
