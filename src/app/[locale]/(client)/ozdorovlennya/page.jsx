import ConditionsHealth from "@/components/sections/health/ConditionsHealth";
import HealthHero from "@/components/sections/health/HealthHero";
import Quantity from "@/components/sections/health/Quantity";
import TemplateHealthSection from "@/components/sections/health/TemplateHealthSection";
import Variants from "@/components/sections/health/Variants";
// import { useTranslations } from "next-intl";
// import { getTranslations } from "next-intl/server";

// export async function generateMetadata({ params: { locale } }) {
//   const t = await getTranslations({ locale });

//   return {
//     title: t("Root.Metadata_Search_Page"),
//     metadataBase: new URL("https://profspilka.org"),
//     openGraph: {
//       title: t("Root.Metadata_Search_Page"),
//       url: "https://profspilka.org",
//     },
//   };
// }

export default function HealthImprovementPage() {
  return (
    <main className="w-full ">
      <HealthHero />
      <Variants />
      <ConditionsHealth />
      <TemplateHealthSection />
      <Quantity />
    </main>
  );
}
