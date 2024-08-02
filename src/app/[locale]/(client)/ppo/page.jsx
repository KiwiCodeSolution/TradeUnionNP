import RegionalOffices from "@/components/sections/regional_offices/RegionalOffices";
import TitleRegionOfficesPage from "@/components/sections/regional_offices/TitleRegionOfficesPage";
import { getTranslations } from "next-intl/server";

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

export default function RegionalCellsPage() {
  return (
    <main className="w-full bg-bgGrey">
      <TitleRegionOfficesPage />
      <RegionalOffices />
    </main>
  );
}
