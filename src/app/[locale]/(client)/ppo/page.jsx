import RegionalOffices from "@/components/sections/regional_offices/RegionalOffices";
import TitleRegionOfficesPage from "@/components/sections/regional_offices/TitleRegionOfficesPage";
import { BaseURL } from "@/constants/BaseUrl";
import { getTranslations } from "next-intl/server";

export async function getRegionalOfficesData() {
  try {
    const res = await fetch(`${BaseURL}ppo`, {
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
    title: t("Root.Metadata_RegionalCells_Page"),
    metadataBase: new URL("https://profspilka.org"),
    alternates: {
      canonical: "https://profspilka.org/uk/ppo",
      languages: {
        "en-US": "/en",
        "uk-UA": "/uk",
      },
    },
    openGraph: {
      title: t("Root.Metadata_RegionalCells_Page"),
      url: "https://profspilka.org",
    },
  };
}

export default async function RegionalCellsPage({ params: { locale } }) {
  const officesData = await getRegionalOfficesData();

  const officesVisible = Array.isArray(officesData)
    ? officesData
        .filter(el => el.is_active !== false)
        .sort((a, b) => a.region.localeCompare(b.region))
    : [];

  return (
    <main className="w-full bg-bgGrey">
      <TitleRegionOfficesPage />
      {officesVisible.length > 0 ? (
        <RegionalOffices items={officesVisible} locale={locale} />
      ) : (
        <p className="text-center py-10">Немає доступних регіональних осередків</p>
      )}
    </main>
  );
}
