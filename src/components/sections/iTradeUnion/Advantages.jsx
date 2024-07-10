import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import AdvantagesList from "./AdvantagesList";

const Advantages = () => {
  return (
    <section className={"bg-white pt-48 pb-10 md:pb-0 w-full"}>
      <Wrapper>
        <Title tag={"h2"} styles={"text-center mb-16"}>
          <span className="text-red">Переваги</span> <br /> профспілкового життя
        </Title>
        <AdvantagesList />
      </Wrapper>
    </section>
  );
};

export default Advantages;
