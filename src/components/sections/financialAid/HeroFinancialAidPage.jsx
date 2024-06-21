import BaseSection from "@/components/BaseSection";
import PathPage from "@/components/PathPage";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Arrow from "@/images/arrow_white.svg";
import LinkButton from "@/components/UI/buttons/LinkButton";
import HeroImages from "@/images/aid/dop-top.svg";
import CountAid from "./CountAid";
import RedDot from "@/components/UI/RedDot";

const ITEMS = [
  "На одруження",
  "На народження дитини",
  "На літній відпочинок дітей у дитячих таборах",
  "На ювілей 50-55-60 років",
  "Поховання близького родича",
  "На лікування себе або родичів 1-го ступеня споріднення (батьки, чоловік/дружина, діти)",
  "На оздоровлення УБД (заява розглядається щорічно в жовтні)",
  "Мобілізованим профспілчанам, що отримали поранення",
  "Профспілчанам на тимчасово окупованих територіях",
  "Внутрішньо переміщеним особам",
  "У зв'язку із смертю члена Профспілки",
];

const HeroFinancialAidPage = () => {
  return (
    <BaseSection style={"pb-20"}>
      <Wrapper>
        <PathPage endPath={"Матеріальна допомога"} />
        <div className="flex gap-x-4 pt-16">
          <div className="w-2/5 flex flex-col gap-y-8">
            <Title tag={"h2"}>
              Матеріальна <span className="text-red">допомога</span>
            </Title>
            <p className="text-lg text-grey">
              Матеріальна допомога надається працівникам, які{" "}
              <strong>
                є членами Всеукраїнської професійної спілки працівників ТОВ «Нова Пошта»
              </strong>{" "}
              та щомісячно сплачують членські внески.
            </p>
            <LinkButton view="red" style={"mt-9 mb-16"} goTo={"#documents"} goToPage icon>
              долучитися{" "}
            </LinkButton>
          </div>
          <div className="w-3/5 flex flex-col">
            <Image
              src={HeroImages}
              width={710}
              height={124}
              alt="зображення листа що виходить з принтера"
            />
            <div className="w-4/5 mx-auto -mt-14">
              <CountAid />
              <div className="border-dotted border-b-8 border-bgBlack w-3/4 border-opacity-20 mx-auto" />
              <ul className="w-4/5 flex flex-col gap-y-4 mx-auto mt-8">
                {ITEMS.map(el => (
                  <li className="w-full text-lg text-grey flex gap-x-5 items-center" key={el}>
                    <RedDot />
                    <p className="w-[calc(100%-9px-20px)]">{el}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default HeroFinancialAidPage;
