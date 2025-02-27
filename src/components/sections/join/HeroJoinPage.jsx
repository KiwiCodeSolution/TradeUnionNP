import { useTranslations } from "next-intl";
import PathPage from "@/components/PathPage";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import HeroImage from "@/images/join/hero.png";
import HeroImageMobTab from "@/images/join/hero_mob.png";

const HeroJoinPage = () => {
  const t = useTranslations("Join");

  return (
    <section className="w-full relative h-[755px] md:h-[830px] xl:h-[695px] bg-bgGrey overflow-hidden">
      <Wrapper styles="flex flex-col">
        <PathPage endPath={t("path")} />
        <div className="w-full flex items-start relative">
          <div className="w-full xl:w-1/2 flex flex-col gap-y-2 xl:gap-y-6">
            <Title tag="h1" styles="">
              <span className="text-red">{t("title.0")}</span>
              {t("title.1")}
              <span className="text-red">{t("title.2")}</span>
            </Title>
            <p className="w-full xl:w-2/3">{t("subtitle")}</p>
          </div>
          <Image
            src={HeroImage}
            width={824}
            height={824}
            alt=""
            className="hidden xl:inline-block absolute top-[-168px] right-[-16px] z-[0]"
          />
        </div>
        <Image
          src={HeroImageMobTab}
          width={260}
          height={389}
          alt=""
          className="md:w-[344px] xl:h-[520px] xl:hidden absolute bottom-[0px] left-1/2 -translate-x-1/2"
        />
      </Wrapper>
    </section>
  );
};

export default HeroJoinPage;
