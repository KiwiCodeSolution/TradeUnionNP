import RegionalOffices from "@/components/sections/regional_offices/RegionalOffices";
import TitleRegionOfficesPage from "@/components/sections/regional_offices/TitleRegionOfficesPage";
import { BaseURL } from "@/constants/BaseUrl";
import { getTranslations } from "next-intl/server";

export async function getRegionalOfficesData() {
  const res = await fetch(`${BaseURL}ppo`, {
    method: "GET",
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
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

  return (
    <main className="w-full bg-bgGrey">
      <TitleRegionOfficesPage />
      <RegionalOffices items={officesData} locale={locale} />
    </main>
  );
}
