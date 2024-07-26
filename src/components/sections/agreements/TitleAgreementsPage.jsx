import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import PathPage from "@/components/PathPage";

const TitleAgreementsPage = () => {
  const t = useTranslations("Collective_labour_agreement");
  return (
    <BaseSection style={""}>
      <Wrapper>
        <PathPage endPath={t(`path`)} />
      </Wrapper>
    </BaseSection>
  );
};

export default TitleAgreementsPage;
