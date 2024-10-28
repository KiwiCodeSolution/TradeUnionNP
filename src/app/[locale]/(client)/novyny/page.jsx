import NewsPathHero from "@/components/sections/news/NewsPathHero";
import PaginatedItems from "@/components/sections/news/PaginatedItems";
import { getTranslations } from "next-intl/server";
import NewsFiltersSection from "@/components/sections/news/NewsFiltersSection";
import { BaseURL } from "@/constants/BaseUrl";

async function fetchNews() {
  const res = await fetch(`${BaseURL}news`, { method: "GET", cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch news");
  }

  return res.json();
}

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale });

  return {
    title: t("Root.Metadata_News_Page"),
    metadataBase: new URL("https://profspilka.org"),
    alternates: {
      canonical: "https://profspilka.org/uk/novyny",
      languages: {
        "en-US": "/en",
        "uk-UA": "/uk",
      },
    },
    openGraph: {
      title: t("Root.Metadata_News_Page"),
      url: "https://profspilka.org",
    },
  };
}

export default async function NewsPage() {
  const news = await fetchNews();

  const today = new Date();

  const filteredNewsArray = news
    .filter(item => item.status === "published" && new Date(item.publishDate) <= today)
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));

  return (
    <main className="w-full  bg-bgGrey">
      <NewsPathHero />
      <NewsFiltersSection news={news} />
      <PaginatedItems section={"news"} items={filteredNewsArray} />
    </main>
  );
}
