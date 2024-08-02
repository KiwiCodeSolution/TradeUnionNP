import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale });

  return {
    title: t("Root.Metadata_Search_Page"),
    metadataBase: new URL("https://profspilka.org"),
    openGraph: {
      title: t("Root.Metadata_Search_Page"),
      url: "https://profspilka.org",
    },
  };
}
export default function SearchPage() {
  return (
    <main className="w-full">
      <h1> Search Page</h1>
    </main>
  );
}
