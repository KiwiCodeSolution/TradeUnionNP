import BaseSection from "@/components/BaseSection";
import { MoneyHand } from "@/components/icons/IconsComponents";
import { useTranslations } from "next-intl";
import Image from "next/image";
import FundraisersGallery from "./FundraisersGallery";

const CurrentFundraisers = ({ fundraisers, locale }) => {
  const t = useTranslations("Defenders");

  const points = [
    t("current.points.0"),
    t("current.points.1"),
    t("current.points.2"),
    t("current.points.3"),
  ];

  return (
    <BaseSection>
      <div className={"w-full xl:w-[1280px] flex flex-col gap-y-16 xl:gap-y-8 mx-auto"}>
        <div className="flex px-4 md:px-16 items-center">
          <div className="flex flex-col gap-y-6 items-center xl:items-start">
            <h2 className="text-[32px] md:text-[40px] xl:text-[50px] font-extrabold">
              <span className="text-red">{t("join.0")}</span>
              {t("join.1")}
            </h2>

            <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-6 md:max-w-[640px]">
              <MoneyHand />
              <ul className="flex flex-col">
                <li className="mb-5 list-none">
                  <p className="text-xl md:text-2xl font-bold !leading-[1.5]">
                    {t("current.title")}
                  </p>
                  <p className="text-xl md:text-2xl !leading-[1.5]">
                    {t.rich("current.support", {
                      red: chunks => <span className="text-red font-bold">{chunks}</span>,
                    })}
                  </p>
                </li>

                <li className="list-none">
                  <p className="text-xl md:text-2xl font-bold !leading-[1.5]">
                    {t("current.target_title")}
                  </p>
                  {points.map(point => (
                    <p className="text-xl md:text-2xl !leading-[1.5]" key={point}>
                      - {point}
                    </p>
                  ))}
                </li>
              </ul>
            </div>
          </div>
          <Image
            src="/images/defenders/money.png"
            width={252}
            height={252}
            alt=""
            className="hidden xl:block shrink-0 w-[252px] h-[252px]"
          />
        </div>
        {fundraisers && fundraisers.length > 0 && (
          <FundraisersGallery fundraisers={fundraisers} locale={locale} />
        )}
      </div>
    </BaseSection>
  );
};
export default CurrentFundraisers;
