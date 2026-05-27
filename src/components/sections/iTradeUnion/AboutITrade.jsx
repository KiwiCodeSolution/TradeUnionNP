import Title from "@/components/Title";
import LinkButton from "@/components/UI/buttons/LinkButton";
import Wrapper from "@/components/Wrapper";
import { useTranslations } from "next-intl";

import HeroAboutPageImage from "../hero/HeroAboutPageImage";

const AboutITrade = () => {
  const t = useTranslations("I");
  return (
    <section className={"w-full pt-2 md:pt-6 pb-[40px] md:pb-[60px] xl:pt-[100px] relative"}>
      <Wrapper styles={"relative mt-5"}>
        <Title tag={"h2"} styles={"text-center"}>
          {t(`about_title.0`)}
          <span className="text-red"> {t(`about_title.1`)}</span>
        </Title>
        <div className="flex flex-col gap-y-8 xl:flex-row items-center mt-4 xl:mt-12">
          <div className="w-full xl:w-3/5 flex items-center justify-center rounded-20 overflow-hidden">
            <HeroAboutPageImage />
          </div>
          <div className="w-full xl:w-2/5 flex flex-col gap-y-8">
            <p className="text-lg text-grey mb-4 md:mb-0">{t(`about.0`)}</p>
            <p className="text-lg text-grey mb-4 md:mb-0">{t(`about.1`)}</p>
            <p className="text-lg text-grey mb-4 md:mb-0">{t(`about.2`)}</p>
            <LinkButton
              goTo="#channels"
              view="red"
              btnType="button"
              style={"self-start mt-4"}
              icon
              goToPage
            >
              {t(`abuot_link`)}
            </LinkButton>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
export default AboutITrade;
