import Places from "@/components/sections/health/Places";
import ConditionsHealth from "@/components/sections/health/ConditionsHealth";
import HealthHero from "@/components/sections/health/HealthHero";
import Quantity from "@/components/sections/health/Quantity";
import TemplateHealthSection from "@/components/sections/health/TemplateHealthSection";
import Variants from "@/components/sections/health/Variants";
import RunningLine from "@/components/sections/health/RunningLine";
import ReviewPlaces from "@/components/sections/health/ReviewPlaces";
import Importantly from "@/components/sections/financialAid/Importantly";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale });

  return {
    title: t("Root.Metadata_Healthy_Page"),
    metadataBase: new URL("https://profspilka.org"),
    openGraph: {
      title: t("Root.Metadata_Healthy_Page"),
      url: "https://profspilka.org",
    },
  };
}

export default function HealthImprovementPage({ params }) {
  return (
    <main className="w-full ">
      <HealthHero />
      <Variants />
      <ConditionsHealth />
      <TemplateHealthSection />
      <Quantity />
      <Places />
      <ReviewPlaces />
      <RunningLine />
      <Importantly locale={params.locale} page={"health"} />
    </main>
  );
}
