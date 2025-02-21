import { useTranslations } from "next-intl";
import BaseSection from "@/components/BaseSection";
import Variant from "./Variant";
import Title from "@/components/Title";

const Variants = () => {
  const t = useTranslations("Health");
  const variants = [
    {
      period: t("periods.summer_winter"),
      title: t("wellnessTrips_detalis.title"),
      text: [
        t("wellnessTrips_detalis.text.0"),
        t("wellnessTrips_detalis.text.1"),
        t("wellnessTrips_detalis.text.2"),
      ],
    },
    {
      period: t("periods.october"),
      title: t("materialHelp_detalis.title"),
      text: [t("materialHelp_detalis.text.0"), t("materialHelp_detalis.text.1")],
    },
    {
      period: t("periods.as_needed"),
      title: t("rehabilitationHelp.title"),
      text: [
        t("rehabilitationHelp.text.0"),
        t("rehabilitationHelp.text.1"),
        t("rehabilitationHelp.text.2"),
      ],
    },
    {
      period: t("periods.summer"),
      title: t("childrenRehabilitation.title"),
      text: [t("childrenRehabilitation.text.0"), t("childrenRehabilitation.text.1")],
    },
  ];
  return (
    <BaseSection style={"bg-health-gradient pt-5 xl:pt-9 pb-4 xl:pb-[96px]"}>
      {/* <div className="w-full h-full absolute top-0 left-0 z-[1] " /> */}
      <div className="w-full lg:w-[1560px] relative z-[2] mx-auto pl-[38px] pr-8 md:px-[63px] lg:px-0">
        <Title tag={"h2"} styles={"text-center mb-10 xl:mb-8"}>
          {t("variant_title.0")}
          <span className="text-red">{t("variant_title.1")}</span>
        </Title>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-10 gap-y-6 mb-[74px]">
          {variants.map(el => (
            <Variant key={el.title} variant={el} />
          ))}
        </div>
      </div>
    </BaseSection>
  );
};

export default Variants;
