import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import SlidesSwiper from "./SlidesSwiper";

const Cases = () => {
  const t = useTranslations("Protection");
  return (
    <BaseSection style={"pt-16 md:pt-0 min-h-[640px] xl:h-fit xl:min-h-[400px]"}>
      <Wrapper>
        <h3 className="text-sm text-liteGrey uppercase">{t(`cases_title`)}</h3>

        <SlidesSwiper />
      </Wrapper>
    </BaseSection>
  );
};

export default Cases;
