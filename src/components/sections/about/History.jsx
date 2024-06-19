
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import HistoryList from "./HistoryList";
import Title from "@/components/Title";

const History = () => {
  return (
    <BaseSection style={"my-16"}>
      <Wrapper styles={"flex flex-col"}>
        <Title tag="h2" styles="text-center">
          <span className="text-red"> Історія розвитку Профспілки</span> <br /> ТОВ “Нова Пошта”
        </Title>
        <HistoryList />
      </Wrapper>
    </BaseSection>
  );
};

export default History;
