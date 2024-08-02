import PaginatedItems from "@/components/sections/news/PaginatedItems";
import PhotoPathHero from "@/components/sections/photo/PhotoPathHero";
import { getTranslations } from "next-intl/server";

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

export default function PhotoPage() {
  return (
    <main className="w-full bg-bgGrey">
      <PhotoPathHero />
      <PaginatedItems />
    </main>
  );
}
