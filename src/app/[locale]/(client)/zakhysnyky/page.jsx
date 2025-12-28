import CurrentFundraisers from "@/components/sections/defenders/CurrentFundraisers";
import DynamicSection from "@/components/sections/defenders/DynamicSection";
import HelpsSection from "@/components/sections/defenders/HelpsSection";
import HeroDef from "@/components/sections/defenders/HeroDef";
import History from "@/components/sections/defenders/History";
import Numbers from "@/components/sections/defenders/Numbers";
import Projects from "@/components/sections/defenders/Projects";
import RegularEvent from "@/components/sections/defenders/RegularEvent";
import { BaseURL } from "@/constants/BaseUrl";
import { getTranslations } from "next-intl/server";

export async function getDefendersData() {
  try {
    const res = await fetch(`${BaseURL}defenders`, {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) {
      return [];
    }

    return res.json();
  } catch (error) {
    console.error("Помилка завантаження:", error);
    return [];
  }
}

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale });

  return {
    title: t("Root.Metadata_Defenders_Page"),
    metadataBase: new URL("https://profspilka.org"),
    alternates: {
      languages: {
        "en-US": "/en",
        "uk-UA": "/uk",
      },
    },
    openGraph: {
      title: t("Root.Metadata_Defenders_Page"),
      url: "https://profspilka.org",
    },
  };
}

export default async function DefendersPage({ params: { locale } }) {
  const data = await getDefendersData();

  const filteredToActive = data.filter(item => item.is_active);
  return (
    <main className="w-full">
      <HeroDef />

      <CurrentFundraisers fundraisers={filteredToActive} locale={locale} />
      <Numbers />
      <Projects />
      <DynamicSection />
      <HelpsSection />
      <RegularEvent />
      <History />
    </main>
  );
}
