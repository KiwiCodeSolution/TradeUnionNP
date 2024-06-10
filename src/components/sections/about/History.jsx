import { inter } from "@/app/fonts";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import HistoryList from "./HistoryList";

const History = () => {
  return (
    <BaseSection style={"my-16"}>
      <Wrapper styles={"flex flex-col"}>
        <h2 className={`${inter.className} text-[46px] text-center leading-[1.2] font-extrabold`}>
          <span className="text-red"> Історія розвитку Профспілки</span> <br /> ТОВ “Нова Пошта”
        </h2>
        <HistoryList />
      </Wrapper>
    </BaseSection>
  );
};

export default History;
