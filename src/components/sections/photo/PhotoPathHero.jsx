import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import PathPage from "@/components/PathPage";
import Wrapper from "@/components/Wrapper";

const PhotoPathHero = () => {
  const t = useTranslations("Photo");
  return (
    <BaseSection style={""}>
      <Wrapper>
        <PathPage endPath={t(`path`)} />
      </Wrapper>
    </BaseSection>
  );
};

export default PhotoPathHero;
