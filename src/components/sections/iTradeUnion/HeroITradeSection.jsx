import BaseSection from "@/components/BaseSection";
import PathPage from "@/components/PathPage";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import BgImage from "@/images/i-trade/np-arrow-white.svg";
import Title from "@/components/Title";
import HeroImage from "./HeroImage";

const HeroITradeSection = () => {
  return (
    <BaseSection style={"bg-bgGrey"}>
      <Wrapper>
        <PathPage endPath={"Я - Профспілка"} />
        <div className="flex ">
          <div className="w-full sm:w-2/6 flex justify-center gap-4 flex-col relative">
            <Image
              src={BgImage}
              width={100}
              height={250}
              className="absolute top-0 left-1/2 -translate-x-1"
              alt="білий логотип Профспілки Нова пошта на прозорому тлі"
            />
            <Title tag={"h1"} styles={"mt-8 md:mt-16"}>
              Я — <span className="text-red">Профспілка</span>
            </Title>
            <p>
              <strong>Ти — Профспілка. </strong> <br /> Ми об'єднуємося, щоб змінювати на краще
              умови праці
            </p>
            <p>
              Тут <strong>захищають права та інтереси</strong> профспілчан групи компаній “Нова
              Пошта”
            </p>
          </div>
          <div className="w-full sm:w-4/6">{/* <HeroImage /> */}</div>
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default HeroITradeSection;
