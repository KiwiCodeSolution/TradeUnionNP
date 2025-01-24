import NewsPathHero from "@/components/sections/news/NewsPathHero";
import NewsComponent from "@/components/sections/news/NewsComponent";
import { getTranslations } from "next-intl/server";
import { StoreProvider } from "@/store/StoreProvider";

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

export default function NewsPage({ params: { locale } }) {
  return (
    <main className="w-full bg-bgGrey">
      <NewsPathHero />
      <StoreProvider>
        <NewsComponent locale={locale} />
      </StoreProvider>
    </main>
  );
}
