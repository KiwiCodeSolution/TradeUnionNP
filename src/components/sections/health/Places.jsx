import BaseSection from "@/components/BaseSection";
import { useTranslations } from "next-intl";
import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import PlacesSlider from "./PlacesSlider";
import AboutVoucher from "./AboutVoucher";
import ParticipationRules from "./ParticipationRules";
// import places from "@/data/places.json";
import Place from "./Place";
import Image from "next/image";
import HandIconSwipe from "@/images/health/hugeicons_swipe.png";

const Places = () => {
  const t = useTranslations("Health");

  const places = [
    {
      _id: "Z9yQ9qHWRKzma",
      name: t("places.0.name"),
      description: t("places.0.description"),
      address: t("places.0.address"),
      rating: 4.8,
      type: "sea",
      isAvailability: false,
    },
    {
      _id: "FOKiVtP4zSUtP",
      name: t("places.1.name"),
      description: t("places.1.description"),
      address: t("places.1.address"),
      rating: 4.8,
      type: "mountains",
      isAvailability: true,
    },
    {
      _id: "djv6BRYGTOKjw",
      name: t("places.2.name"),
      description: t("places.2.description"),
      address: t("places.2.address"),
      rating: 4.7,
      type: "",
      isAvailability: true,
    },
    {
      _id: "FcyfGQ1Q6IusW",
      name: t("places.3.name"),
      description: t("places.3.description"),
      address: t("places.3.address"),
      rating: 4.9,
      type: "",
      isAvailability: false,
    },
    {
      _id: "vFcIC5YejixFX",
      name: t("places.4.name"),
      description: t("places.4.description"),
      address: t("places.4.address"),
      rating: 4.9,
      type: "",
      isAvailability: true,
    },
    {
      _id: "bRkub5nyGn3nX",
      name: t("places.5.name"),
      description: t("places.5.description"),
      address: t("places.5.address"),
      rating: 4.8,
      type: "",
      isAvailability: true,
    },
  ];

  return (
    <BaseSection style={""}>
      <div className="w-full h-[3000px] xl:h-[1560px] bg-health-gradient-2 absolute top-[380px] left-0 z-0" />
      <Wrapper styles={"z-[2] relative"}>
        <Title tag={"h2"} styles={"mb-8"}>
          <span className="text-red">{t("places_title.0")}</span>
          {t("places_title.1")}
        </Title>
        <p className="text-lg text-grey">
          {t("places_subtitle.0")}
          <br />
          <strong>{t("places_subtitle.1")}</strong>
          {t("places_subtitle.2")}
        </p>
        <PlacesSlider places={places} />
        <Image
          src={HandIconSwipe}
          width={48}
          height={48}
          alt="малюночок долоні із стрілочкою вліво, вказує напрямок гортання галереї"
          className="md:hidden ml-auto mb-4 mt-1"
        />
        <AboutVoucher />
        <ParticipationRules />
        <Title tag={"h2"} styles={"mt-14 mb-10"}>
          {t("places_title_second.0")}
          <span className="text-red">{t("places_title_second.1")}</span>
          {t("places_title_second.2")}
        </Title>
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 pb-8 gap-y-6">
          <Place place={places.find(el => el._id === "FOKiVtP4zSUtP")} />
          <Place place={places.find(el => el._id === "bRkub5nyGn3nX")} />
        </div>
      </Wrapper>
    </BaseSection>
  );
};

export default Places;
