import NewsPathHero from "@/components/sections/news/NewsPathHero";
import PaginatedItems from "@/components/sections/news/PaginatedItems";
import { getTranslations } from "next-intl/server";

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

export default function NewsPage() {
  return (
    <main className="w-full  bg-bgGrey">
      <NewsPathHero />
      <PaginatedItems />
    </main>
  );
}
