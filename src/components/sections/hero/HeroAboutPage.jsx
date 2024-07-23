import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import PathPage from "@/components/PathPage";
import Wrapper from "@/components/Wrapper";
import HeroAboutPageImage from "./HeroAboutPageImage";
import Title from "@/components/Title";

const HeroAboutPage = () => {
  const t = useTranslations("About");
  return (
    <BaseSection style={"bg-bgGrey"}>
      <Wrapper styles={"flex flex-col"}>
        <PathPage endPath={t(`path`)} />
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-4 w-full sm:w-3/5 lg:w-2/5 text-xl-1 text-black-100 text-left xs:text-center md:text-left">
            <Title tag="h1" styles="mt-8 md:mt-16">
              {t(`title`)}
            </Title>

            <p className="text-lg">
              {t(`subtitle.0`)}
              <strong> {t(`subtitle.1`)}</strong> {t(`subtitle.2`)}
            </p>
          </div>
          <div className="w-full sm:w-2/5 md:w-3/5 md:my-auto">
            <HeroAboutPageImage />
          </div>
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default HeroAboutPage;
