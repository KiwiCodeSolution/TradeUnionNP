import { useTranslations } from "next-intl";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import AdvantagesList from "./AdvantagesList";

const Advantages = () => {
  const t = useTranslations("I");
  return (
    <section className={"bg-white pt-48 pb-10 xl:pb-0 w-full"}>
      <Wrapper>
        <Title tag={"h2"} styles={"text-center mb-16"}>
          <span className="text-red"> {t(`advantages_title.0`)}</span> <br />{" "}
          {t(`advantages_title.1`)}
        </Title>
        <AdvantagesList />
      </Wrapper>
    </section>
  );
};

export default Advantages;
