import BaseSection from "@/components/BaseSection";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import ImageSection from "@/images/protection/protection_appeal.svg";
import ListItem from "@/components/UI/items/ListItem";

const APPEALS = [
  "Матеріальна відповідальність",
  "Догани",
  "Депреміювання",
  "Порушення прав працівника",
  "Конфліктні ситуації з керівником або колегою",
  "Інформаційна допомога/консультування",
  "Нарахування/виплата заробітної плати",
  "Інші види звернень",
];

const Appeals = () => {
  return (
    <BaseSection style={"pb-32"}>
      <Wrapper
        styles={
          "bg-white rounded-2xl py-16 md:pt-20 flex flex-col gap-y-4 h-[968px] md:h-fit relative"
        }
      >
        <Title tag="h2" styles={"md:ml-16"}>
          Звернення, які <span className="text-red">надходять найчастіше:</span>
        </Title>
        <ul className="w-full md:w-1/2 flex flex-col gap-y-5 mt-5 md:ml-16">
          {APPEALS.map((el, index) => (
            <ListItem item={el} gap={5} key={index + 47} />
          ))}
        </ul>
        <Image
          src={ImageSection}
          width={536}
          height={526}
          alt="Малюнок людини, що тримає договір"
          className="absolute -bottom-[106px] right-0 z-10"
        />
      </Wrapper>
    </BaseSection>
  );
};

export default Appeals;
