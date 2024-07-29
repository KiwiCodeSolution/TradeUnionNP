import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import ResolutionList from "./ResolutionList";

const ResolutionPeriod = ({ gradient }) => {
  const t = useTranslations("Protection");
  return (
    <BaseSection style={""}>
      {gradient && (
        <div className="absolute h-96 left-0 right-0 bg-gradient-to-t from-bgGrey to-white top-0 z-0" />
      )}

      <Wrapper styles={"pt-24 md:pt-32 md:pb-10"}>
        <Title tag={"h2"} styles={"text-center mb-8 z-[10] relative"}>
          {t(`period_title.0`)} <br /> <span className="text-red"> {t(`period_title.1`)}</span>
        </Title>
        <ResolutionList />
      </Wrapper>
    </BaseSection>
  );
};

export default ResolutionPeriod;
