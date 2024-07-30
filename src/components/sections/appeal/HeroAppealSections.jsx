import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import PathPage from "@/components/PathPage";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import ResolutionList from "../protection/ResolutionList";

const HeroAppealSections = () => {
  const t = useTranslations("Appeal");
  return (
    <BaseSection style={""}>
      <Wrapper>
        <PathPage endPath={t(`path`)} />
        <Title tag={"h2"} styles={"text-center mb-16"}>
          <span className="text-red">{t(`title.0`)}</span> {t(`title.1`)}
        </Title>
        <ResolutionList />
      </Wrapper>
    </BaseSection>
  );
};

export default HeroAppealSections;
