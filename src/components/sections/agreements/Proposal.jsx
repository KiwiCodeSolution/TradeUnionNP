import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";

const Proposal = ({ email }) => {
  const t = useTranslations("Collective_labour_agreement");
  return (
    <BaseSection style={"pt-16"}>
      <Wrapper>
        <p className="text-center text-lg text-black-100">
          {t(`proposal`)}
          {email && (
            <a className="text-red underline font-semibold" href={`mailto:${email}`}>
              {email}
            </a>
          )}
        </p>
      </Wrapper>
    </BaseSection>
  );
};
export default Proposal;
