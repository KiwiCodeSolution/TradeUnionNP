import NewsPathHero from "@/components/sections/news/NewsPathHero";
import NewsComponent from "@/components/sections/news/NewsComponent";
import { getTranslations } from "next-intl/server";
import { fetchNews } from "@/services/newsService";

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
  const allNews = await fetchNews();

  const sorryText =
    locale === "uk"
      ? "Новини відсутні, або виникла помилка"
      : "Sorry, there are no news, or an error has occurred";
  return (
    <main className="w-full bg-bgGrey">
      <NewsPathHero />
      {allNews.length > 0 ? (
        <NewsComponent locale={locale} items={allNews} />
      ) : (
        <p className="text-center text-2xl">{sorryText}</p>
      )}
    </main>
  );
}
