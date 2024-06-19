import BaseSection from "@/components/BaseSection";
import PathPage from "@/components/PathPage";
import Wrapper from "@/components/Wrapper";
import HeroAboutPageImage from "./HeroAboutPageImage";
import Title from "@/components/Title";

const HeroAboutPage = () => {
  return (
    <BaseSection style={"bg-bgGrey"}>
      <Wrapper styles={"flex flex-col"}>
        <PathPage endPath={"Про Профспілку"} />
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-4 w-full sm:w-3/5 lg:w-2/5 text-xl-1 text-black-100 text-left xs:text-center md:text-left">
            <Title tag="h1" styles="mt-8 md:mt-16">
              Про Профспілку
            </Title>

            <p className="text-lg">
              Профспілка “Нова Пошта” — добровільне неприбуткове громадське об'єднання, що{" "}
              <strong>захищає права та інтереси членів профспілки</strong> — працівників групи
              компаній «NOVA».
            </p>
          </div>
          <div className="w-full sm:w-2/5 lg:w-3/5">
            <HeroAboutPageImage />
          </div>
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default HeroAboutPage;
