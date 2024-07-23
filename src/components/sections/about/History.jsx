import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import HistoryList from "./HistoryList";
import Title from "@/components/Title";

const History = () => {
  const t = useTranslations("About.history");

  return (
    <BaseSection style={"my-16"}>
      <Wrapper styles={"flex flex-col"}>
        <Title tag="h2" styles="text-center">
          <span className="text-red"> {t(`title.0`)}</span> <br /> {t(`title.1`)}
        </Title>
        <HistoryList />
      </Wrapper>
    </BaseSection>
  );
};

export default History;
