import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import advantages from "@/data/advantages.json";

const Advantages = () => {
  return (
    <section className={"bg-white pt-48 w-full"}>
      <Wrapper>
        <Title tag={"h2"} styles={"text-center mb-16"}>
          <span className="text-red">Переваги</span> <br /> профспілкового життя
        </Title>
        <div className="grid grid-cols-4 gap-x-4 gap-y-5">
          {advantages.map((el, index) => (
            <article key={el.first_text}>
              <p>
                {el.first_text} <strong>{el.accent_text}</strong> {el.second_text}
              </p>
            </article>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Advantages;
