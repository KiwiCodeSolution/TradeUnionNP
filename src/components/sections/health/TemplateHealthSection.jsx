import BaseSection from "@/components/BaseSection";
import Title from "@/components/Title";
import RedDot from "@/components/UI/RedDot";
import Wrapper from "@/components/Wrapper";

const TemplateHealthSection = () => {
  const points = [
    "виплата надходить на картку, реквізити якої надає член Профспілки;",
    "пиплата допомоги щопʼятниці (або напередодні, якщо це святковий день);",
    "якщо в нас виникнути питання стосовно документів, ми обовʼязково з вами звʼяжемося;",
    "у випадку відмови у виплаті допопмоги, ви обовʼязклвл отримаєте зворотній звʼязок з причиною відмови;",
    "якщо є додаткові питання — зверніться до Голови профспілкового осередку.",
  ];
  return (
    <BaseSection style={"bg-bgGrey py-8"}>
      <Wrapper styles={"flex gap-x-10 flex-col xl:flex-row"}>
        <div className="w-full xl:w-1/2 flex flex-col gap-y-8 my-auto">
          <Title tag={"h2"}>
            Шаблон <span className="text-red">внутрішніх</span> відправок
          </Title>
          <p className="text-grey text-lg mb-8 xl:mb-0">
            Віправте пакет документів на отримання матеріальної допомоги, скориставшись шаблоном
            внутрішніх відправок <strong>Матеріальна допомога від Профспілки</strong>
          </p>
        </div>
        <ul className="w-full xl:w-1/2 bg-white rounded-[20px] py-[15px] px-[30px] flex flex-col gap-y-4">
          {points.map(el => (
            <li className="w-full flex items-center gap-x-4" key={el}>
              <RedDot />
              <p className="w-[calc(100%-9px-12px)] text-lg text-grey">{el}</p>
            </li>
          ))}
        </ul>
      </Wrapper>
    </BaseSection>
  );
};

export default TemplateHealthSection;
