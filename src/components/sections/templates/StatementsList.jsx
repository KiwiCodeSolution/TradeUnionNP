import statements from "@/data/statements.json";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import Blank from "./Blank";
import Title from "@/components/Title";

const StatementsList = () => {
  return (
    <BaseSection style={"bg-bgGrey pt-8 md:pt-16"}>
      <Wrapper styles={"flex flex-col"}>
        <Title tag="h2" styles="text-center mb-8">
          <span className="text-red">Заяви</span> на матеріальну <br /> допомогу
        </Title>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {statements.map(el => (
            <Blank key={el.title} item={el} />
          ))}
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default StatementsList;
