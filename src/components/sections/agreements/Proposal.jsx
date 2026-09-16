import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import SupportEmailLink from "@/components/UI/SupportEmailLink";

const Proposal = () => {
  const t = useTranslations("Collective_labour_agreement");
  return (
    <BaseSection style={"pt-16"}>
      <Wrapper>
        <p className="text-center text-lg text-black-100">
          {t(`proposal`)}
          <SupportEmailLink className="text-red underline font-semibold" />
        </p>
      </Wrapper>
    </BaseSection>
  );
};
export default Proposal;
