import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import PathPage from "@/components/PathPage";
import Wrapper from "@/components/Wrapper";

const NewsPathHero = () => {
  const t = useTranslations("News");
  return (
    <BaseSection style={""}>
      <Wrapper>
        <PathPage endPath={t(`path`)} />
      </Wrapper>
    </BaseSection>
  );
};

export default NewsPathHero;
