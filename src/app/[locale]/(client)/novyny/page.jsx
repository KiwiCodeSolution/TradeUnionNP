import NewsPathHero from "@/components/sections/news/NewsPathHero";
import NewsComponent from "@/components/sections/news/NewsComponent";
import { getTranslations } from "next-intl/server";
import { BaseURL } from "@/constants/BaseUrl";

export async function getAllNews() {
  const res = await fetch(`${BaseURL}news`, { method: "GET", cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// Генерація метаданих для сторінки
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

export default async function NewsPage({ params: { locale } }) {
  const allNews = await getAllNews();

  return (
    <main className="w-full bg-bgGrey">
      <NewsPathHero />
      <NewsComponent locale={locale} items={allNews} />
    </main>
  );
}
