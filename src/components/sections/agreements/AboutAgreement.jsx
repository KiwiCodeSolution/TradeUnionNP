import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";

const ITEMS = [
  {
    title: "Сторони Колективного договору:",
    text: "роботодавець з одного боку і профспілкова організація, яка діє відповідно до статуту, з іншого боку.",
  },
  {
    title: "Термін дії Колдоговору:",
    text: "набирає чинності з дня його підписання, після закінчення терміну дії — продовжує діяти, доки сторони не укладуть новий або не переглянуть чинний договір. Зберігає чинність і в разі зміни складу, структури, найменування уповноваженого власником органу, від імені якого укладено цей договір.",
  },
  {
    title: "Співвідношення законодавства і колективного договору:",
    text: "до трудових договорів включають лише умови, що покращують становище працівників.",
  },
];

const AboutAgreement = () => {
  return (
    <BaseSection style={"bg-white"}>
      <Wrapper>
        <ul className="w-full my-16 flex flex-col gap-y-8">
          {ITEMS.map(el => (
            <li key={el.title} className="flex flex-col md:flex-row gap-4 md:gap-16 justify-center">
              <p className="w-1/3 text-lg text-right font-bold">{el.title}</p>
              <p className="w-2/3 text-lg ">{el.text}</p>
            </li>
          ))}
        </ul>
      </Wrapper>
    </BaseSection>
  );
};

export default AboutAgreement;
