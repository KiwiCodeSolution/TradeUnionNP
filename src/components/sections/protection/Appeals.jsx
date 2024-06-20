import BaseSection from "@/components/BaseSection";
import Title from "@/components/Title";
import RedDot from "@/components/UI/RedDot";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import ImageSection from "@/images/protection/protection_appeal.svg";

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
    <BaseSection style={"md:pb-32"}>
      <Wrapper styles={"bg-white rounded-2xl py-16 md:pt-20 flex flex-col gap-y-4 relative"}>
        <Title tag="h2" styles={"ml-16"}>
          Звернення, які <span className="text-red">надходять найчастіше:</span>
        </Title>
        <ul className="w-1/2 flex flex-col gap-y-5 mt-5 ml-16">
          {APPEALS.map((el, index) => (
            <li key={index + 47} className="w-full flex items-center gap-5">
              <RedDot />
              <p className="w-[calc(100%-9px-20px]) text-lg text-grey">{el}</p>
            </li>
          ))}
        </ul>
        <Image
          src={ImageSection}
          width={536}
          height={526}
          alt="Малюнок людини, що тримає договір"
          className="absolute -bottom-[106px] right-0"
        />
      </Wrapper>
    </BaseSection>
  );
};

export default Appeals;