import PathPage from "@/components/PathPage";

import Wrapper from "@/components/Wrapper";
import HeroImage from "./HeroImage";

import { useTranslations } from "next-intl";
import HeroHomePageItems from "../hero/HeroHomePageItems";

import TitleHomePage from "@/components/UI/titles/TitleHomePage";
import LinkButton from "@/components/UI/buttons/LinkButton";

const HeroITradeSectionNew = () => {
  const t = useTranslations();

  return (
    <section className={"bg-bgGrey w-full pt-2 md:pt-6 pb-[40px] md:pb-[100px] xl:pb-0 relative"}>
      <Wrapper styles={"relative"}>
        <PathPage endPath={t(`I.path`)} />
        <div className="flex flex-col md:flex-row mt-5 md:mt-0 gap-y-2">
          <div className="w-full xl:w-1/2 flex justify-center items-center xl:items-start gap-4 flex-col relative -mt-8 xl:-mt-28">
            <TitleHomePage />
            <HeroHomePageItems />
            <LinkButton goTo="#channels" view="red" btnType="button" style={"my-6"} icon goToPage>
              {t(`I.link`)}
            </LinkButton>
          </div>
          <div className="hidden w-full xl:w-1/2 h-[256px] xl:h-auto xl:flex justify-end items-end relative z-[3]">
            <HeroImage className={""} />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
export default HeroITradeSectionNew;
