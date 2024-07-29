import { useTranslations } from "next-intl";
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
  const t = useTranslations("Protection");
  return (
    <BaseSection style={"pb-32"}>
      <Wrapper styles={""}>
        <div className="bg-white rounded-2xl px-10 py-16 md:pt-20 flex flex-col gap-y-4 h-[968px] md:h-[1070px] xl:h-fit relative">
          <Title tag="h2" styles={"md:ml-16"}>
            {t(`appeals_title.0`)}
            <span className="text-red">{t(`appeals_title.1`)}</span>
          </Title>
          <ul className="w-full xl:w-1/2 flex flex-col gap-y-5 mt-5 md:ml-16">
            {APPEALS.map((el, index) => (
              <ListItem item={t(`appeals.${index}`)} gap={5} key={t(`appeals.${index}`)} />
            ))}
          </ul>
          <Image
            src={ImageSection}
            width={536}
            height={526}
            alt="Малюнок людини, що тримає договір"
            className="absolute -bottom-[106px] md:-bottom-[120px] xl:-bottom-[106px] right-0 z-10"
          />
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default Appeals;
