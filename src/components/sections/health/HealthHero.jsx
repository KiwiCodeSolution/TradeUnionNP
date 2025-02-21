import PathPage from "@/components/PathPage";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import HealthImage from "@/images/health/health_hero.png";
import Image from "next/image";
import Seasons from "@/images/health/seasons.svg";
import Horse from "@/images/health/horse.svg";
import Military from "@/images/health/military.svg";
import { useTranslations } from "next-intl";

const HealthHero = () => {
  const t = useTranslations("Health");

  return (
    <section className="w-full relative">
      <Wrapper styles="flex flex-col">
        <PathPage endPath={t(`path`)} />
        <div className="flex flex-col lg:flex-row gap-x-[60px] pb-[280px] md:pb-[516px] lg:pb-0">
          <div className="flex flex-col w-full lg:w-2/5 text-xl-1 text-black-100 text-left xs:text-center md:text-left">
            <Title tag="h1" styles="mb-8 xl:mt-14 md:mb-10 text-red">
              {t(`title`)}
            </Title>
            <ul className="flex flex-col gap-y-6 pb-6">
              <li className="flex items-start gap-x-6">
                <Image
                  src={Seasons}
                  width={46}
                  height={46}
                  alt="червона іконка, на якій зображено половинку сонця та половинку сніжинки"
                  className="xl:hidden"
                />

                <p className="text-[17px] md:text-lg">
                  {t.rich("wellnessTrips", {
                    season: t("season"),
                    strong: chunks => <strong>{chunks}</strong>,
                  })}
                </p>
              </li>
              <li className="flex items-start gap-x-6">
                <Image
                  src={Military}
                  width={46}
                  height={46}
                  alt="схематичне зображення військового"
                  className="xl:hidden"
                />

                <p className="text-[17px] md:text-lg">
                  {t.rich("materialHelp", {
                    participants: t("participants"),
                    strong: chunks => <strong>{chunks}</strong>,
                  })}
                </p>
              </li>
              <li className="flex items-start gap-x-6">
                <Image
                  src={Horse}
                  width={46}
                  height={46}
                  alt="зображення іграшкової конячки-гойдалки"
                  className="xl:hidden"
                />

                <p className="text-[17px] md:text-lg">
                  {t.rich("helpForChildren", {
                    help: t("help"),
                    strong: chunks => <strong>{chunks}</strong>,
                  })}
                </p>
              </li>
            </ul>
          </div>
          <div className="w-full xl:w-3/5 xl:my-auto lg:relative">
            <Image
              src={HealthImage}
              width={825}
              height={520}
              alt="Зображення Дівчини у капелюсі, що тримає на руках хлопчика, та квитки."
              className="-bottom-[16px] md:-bottom-[28px] left-0 xl:-bottom-[237px] lg:right-32 absolute z-[2]"
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default HealthHero;
