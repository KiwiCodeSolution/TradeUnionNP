import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import PathPage from "@/components/PathPage";
import Title from "@/components/Title";

const TitleContactsPage = () => {
  const t = useTranslations("Contacts");
  return (
    <BaseSection style={""}>
      <Wrapper>
        <PathPage endPath={t(`path`)} />

        <Title styles={"text-center"} tag="h1">
          <span className="text-red">{t(`title.0`)}</span> {t(`title.1`)} <br /> {t(`title.2`)}
        </Title>
      </Wrapper>
    </BaseSection>
  );
};

export default TitleContactsPage;
