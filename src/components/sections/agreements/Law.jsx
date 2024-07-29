import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import LawItem from "@/components/LawItem";
import Title from "@/components/Title";

const Law = ({ page }) => {
  const t = useTranslations();
  const data = Array.from({ length: 4 }, (v, i) => i);
  return (
    <BaseSection style={"py-16"}>
      <Wrapper styles={"flex flex-col gap-y-4"}>
        <h3 className="text-sm text-liteGrey uppercase leading-[1.2] font-bold text-center">
          {t(`Collective_labour_agreement.law_title`)}
        </h3>

        <Title tag="h2" styles="text-center">
          {page === "collective_agreement" ? (
            <>
              {t(`Collective_labour_agreement.law_subtitle.0`)}
              <span className="text-red">{t(`Collective_labour_agreement.law_subtitle.1`)}</span>
              {t(`Collective_labour_agreement.law_subtitle.2`)}
            </>
          ) : (
            <>
              {t(`Protection.law_subtitle.0`)}
              <span className="text-red">{t(`Protection.law_subtitle.1`)}</span>
              {t(`Protection.law_subtitle.2`)}
            </>
          )}
        </Title>
        <div className="grid rid-grid-cols-1 md:grid-cols-2 gap-4 z-[1]">
          {data.map((el, index) => (
            <LawItem
              key={el + 25}
              title={t(`Collective_labour_agreement.law.${index}.title`)}
              text={t(`Collective_labour_agreement.law.${index}.text`)}
            />
          ))}
        </div>
        <div className="absolute h-56 left-0 right-0 bg-gradient-to-b from-bgGrey to-white bottom-0 z-[0]" />
      </Wrapper>
    </BaseSection>
  );
};

export default Law;
