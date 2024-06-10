import BaseSection from "@/components/BaseSection";
import PathPage from "@/components/PathPage";
import Wrapper from "@/components/Wrapper";
import { inter } from "@/app/fonts";
import HeroAboutPageImage from "./HeroAboutPageImage";

const HeroAboutPage = () => {
  return (
    <BaseSection style={"bg-bgGrey"}>
      <Wrapper styles={"flex flex-col"}>
        <PathPage endPath={"Про Профспілку"} />
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-4 w-full sm:w-3/5 lg:w-2/5 text-xl-1 text-black-100 text-left xs:text-center md:text-left">
            <h1
              className={`${inter.className} lg:text-5xl leading-[1.25] font-extrabold mt-8 md:mt-16`}
            >
              Про Профспілку
            </h1>
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
