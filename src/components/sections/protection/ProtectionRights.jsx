import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import RightsList from "./RightsList";
import Title from "@/components/Title";

const ProtectionRights = () => {
  const t = useTranslations("Protection");
  return (
    <BaseSection style={""}>
      <Wrapper styles={"pt-24 md:pt-32 pb-8"}>
        <Title tag="h2" styles="text-center">
          {t(`rights_title.0`)}
          <span className="text-red">{t(`rights_title.1`)}</span>
        </Title>

        <RightsList />
      </Wrapper>
    </BaseSection>
  );
};

export default ProtectionRights;
