import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";

const AboutAgreement = () => {
  const t = useTranslations("Collective_labour_agreement");
  const items = Array.from({ length: 3 }, (v, i) => i);
  return (
    <BaseSection style={"bg-white"}>
      <Wrapper>
        <ul className="w-full my-16 flex flex-col gap-y-8">
          {items.map((el, index) => (
            <li key={el + 45} className="flex flex-col md:flex-row gap-4 md:gap-16 justify-center">
              <p className="w-full md:w-1/3 text-lg md:text-right font-bold">
                {t(`about.${index}.title`)}
              </p>
              <p className="w-full md:w-2/3 text-lg">{t(`about.${index}.text`)}</p>
            </li>
          ))}
        </ul>
      </Wrapper>
    </BaseSection>
  );
};

export default AboutAgreement;
