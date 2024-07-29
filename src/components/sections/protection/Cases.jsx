import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import SlidesSwiper from "./SlidesSwiper";

const Cases = () => {
  const t = useTranslations("Protection");
  return (
    <BaseSection style={"pt-16 md:pt-0"}>
      <Wrapper>
        <h3 className="text-sm text-liteGrey uppercase">{t(`cases_title`)}</h3>
        <SlidesSwiper />
        <div className="absolute h-52 left-0 right-0 bg-gradient-to-t from-white to-bgGrey z-0 bottom-0" />
      </Wrapper>
    </BaseSection>
  );
};

export default Cases;
