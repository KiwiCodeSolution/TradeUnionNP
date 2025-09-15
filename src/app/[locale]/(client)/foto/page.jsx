import PhotoPathHero from "@/components/sections/photo/PhotoPathHero";
import { getTranslations } from "next-intl/server";
import { BaseURL } from "@/constants/BaseUrl";
import { StoreProvider } from "@/store/StoreProvider";
import PhotoComponent from "@/components/sections/photo/PhotoComponent";

async function getAllReports() {
  const res = await fetch(`${BaseURL}gallerey`, { method: "GET", cache: "no-store" });

  if (!res.ok) {
    return [];
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
  const allReports = await getAllReports();

  return (
    <main className="w-full bg-bgGrey">
      <PhotoPathHero />
      {allReports.length > 0 ? (
        <StoreProvider>
          <PhotoComponent locale={locale} items={allReports} />
        </StoreProvider>
      ) : (
        <p className="text-center py-10">Інформація відсутня</p>
      )}
    </main>
  );
}
