import { useTranslations } from "next-intl";
import statements from "@/data/statements.json";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import Blank from "./Blank";
import Title from "@/components/Title";

const StatementsList = () => {
  const t = useTranslations("Forms");
  return (
    <BaseSection style={"bg-bgGrey pt-8 md:pt-16"}>
      <Wrapper styles={"flex flex-col"}>
        <Title tag="h2" styles="text-center mb-8">
          <span className="text-red">{t(`statement_title.0`)}</span> {t(`statement_title.1`)} <br />{" "}
          {t(`statement_title.2`)}
        </Title>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {statements.map((el, index) => (
            <Blank
              key={t(`statements.${index}.title`)}
              title={t(`statements.${index}.title`)}
              text={t(`statements.${index}.text`)}
              file={el.file}
            />
          ))}
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default StatementsList;
