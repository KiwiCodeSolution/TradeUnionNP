import Wrapper from "@/components/Wrapper";
import BaseSection from "@/components/BaseSection";
import LinkButton from "@/components/UI/buttons/LinkButton";
import ImagesAgreement from "./ImagesAgreement";
import agr_1 from "@/images/home/agr_1.svg";
import agr_2 from "@/images/home/agr_2.svg";
import agr_3 from "@/images/home/agr_3.svg";
import ParallaxSection from "@/components/UI/parallax/ParallaxSection";
import Title from "@/components/Title";

const ITEMS = [
  {
    id: "1",
    url: agr_1,
    style: "absolute top-1/4 left-2",
    alt: "білий бланк із загнутим куточком",
  },
  { id: "2", url: agr_2, style: "absolute top-1/4 right-2", alt: "біла скріпка" },
  {
    id: "3",
    url: agr_3,
    style: "absolute bottom-0 right-0",
    alt: "білий бланк із загнутим куточком",
  },
];

const CollectiveAgreement = () => {
  return (
    <BaseSection style="bg-bgGrey min-h-[515px]">
      <div className="w-full absolute top-0 h-64 left-0 z-[10] bg-gradient-to-t from-bgGrey to-white" />
      <ParallaxSection items={ITEMS} />
      <Wrapper styles={"pt-12 md:pt-32"}>
        <article className="w-full relative mx-auto flex justify-center z-10 rounded-xl shadow-md bg-white">
          <div className="w-1/2 flex flex-col gap-y-4 py-14 ml-16">
            <Title tag="h2">
              Колективний <span className="text-red">договір</span>
            </Title>
            <p className="text-lg text-grey">
              Положення цього договору поширюються на всіх працівників і є обов’язковими як для
              адміністрації, так і для кожного члена трудового колективу. На період воєнного стану
              деякі положення призупинені роботодавцем.
            </p>
            <LinkButton view="red" style={"mt-5"} goTo={"/files/koldogovor.pdf"} icon>
              Переглянути
            </LinkButton>
          </div>
          <ImagesAgreement />
        </article>
      </Wrapper>
    </BaseSection>
  );
};

export default CollectiveAgreement;
