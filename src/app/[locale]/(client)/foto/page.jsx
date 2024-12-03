import PaginatedItems from "@/components/sections/news/PaginatedItems";
import PhotoPathHero from "@/components/sections/photo/PhotoPathHero";
import { getTranslations } from "next-intl/server";
import { BaseURL } from "@/constants/BaseUrl";
import NewsFiltersSection from "@/components/sections/news/NewsFiltersSection";

async function fetchReports() {
  const res = await fetch(`${BaseURL}gallerey`, { method: "GET", cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch reports");
  }

  return res.json();
}

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale });

  return {
    title: t("Root.Metadata_Photo_Page"),
    metadataBase: new URL("https://profspilka.org"),
    alternates: {
      canonical: "https://profspilka.org/uk/foto",
      languages: {
        "en-US": "/en",
        "uk-UA": "/uk",
      },
    },
    openGraph: {
      title: t("Root.Metadata_Photo_Page"),
      url: "https://profspilka.org",
    },
  };
}

export default async function PhotoPage({ params: { locale } }) {
  const reports = await fetchReports();

  const today = new Date();

  const filteredReportsArray = reports
    .filter(item => item.status === "published" && new Date(item.publishDate) <= today)
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));

  return (
    <main className="w-full bg-bgGrey">
      <PhotoPathHero />
      <NewsFiltersSection news={reports} locale={locale} part={"foto"} />
      <PaginatedItems
        part={"photo"}
        section={"photo"}
        items={filteredReportsArray}
        locale={locale}
      />
    </main>
  );
}
