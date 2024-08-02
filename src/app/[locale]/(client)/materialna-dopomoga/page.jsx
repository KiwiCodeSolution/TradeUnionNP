import Conditions from "@/components/sections/financialAid/Conditions";
import Documents from "@/components/sections/financialAid/Documents";
import Graph from "@/components/sections/financialAid/Graph";
import HeroFinancialAidPage from "@/components/sections/financialAid/HeroFinancialAidPage";
import Importantly from "@/components/sections/financialAid/Importantly";
import Limitation from "@/components/sections/financialAid/Limitation";
import Template from "@/components/sections/financialAid/Template";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale });

  return {
    title: t("Root.Metadata_FinancialAid_Page"),
    metadataBase: new URL("https://profspilka.org"),
    alternates: {
      canonical: "https://profspilka.org/uk/materialna-dopomoga",
      languages: {
        "en-US": "/en",
        "uk-UA": "/uk",
      },
    },
    openGraph: {
      title: t("Root.Metadata_FinancialAid_Page"),
      url: "https://profspilka.org",
    },
  };
}

export default function FinancialAidPage({ params }) {
  return (
    <main className="w-full">
      <HeroFinancialAidPage />
      <Graph />
      <Conditions />
      <Limitation />
      <Documents locale={params.locale} />
      <Template />
      <Importantly locale={params.locale} />
    </main>
  );
}
