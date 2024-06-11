import { inter } from "@/app/fonts";
import templates from "@/data/templates.json";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import Blank from "./Blank";
import PathPage from "@/components/PathPage";

const TemplatesList = () => {
  return (
    <BaseSection style={"bg-bgGrey"}>
      <Wrapper styles={"flex flex-col"}>
        <PathPage endPath={"Бланки"} />
        <h2
          className={`text-[46px] font-semibold mb-8 ${inter.className} text-center leading-[55px]`}
        >
          <span className="text-red">Бланки</span> на вступ до <br /> Профспілки
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {templates.map(el => (
            <Blank key={el.title} item={el} />
          ))}
        </div>
        <p className="text-lg text-grey mt-8 text-center">
          <span className="text-red">Завантажте</span> Заяву на вступ,{" "}
          <span className="text-red">роздрукуйте та надішліть</span> за шаблоном “Матеріальна
          допомога від Профспілки”
        </p>
      </Wrapper>
    </BaseSection>
  );
};

export default TemplatesList;
