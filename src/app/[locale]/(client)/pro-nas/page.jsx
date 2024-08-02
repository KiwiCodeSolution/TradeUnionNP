import AllAboutCompany from "@/components/sections/about/AllAboutCompany";
import History from "@/components/sections/about/History";
import StatutoryDocuments from "@/components/sections/about/StatutoryDocuments";
import VideoSection from "@/components/sections/about/VideoSection";
import HeroAboutPage from "@/components/sections/hero/HeroAboutPage";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale });

  return {
    title: t("Root.Metadata_AboutUs_Page"),
    metadataBase: new URL("https://profspilka.org"),
    alternates: {
      canonical: "https://profspilka.org/pro-nas",
      languages: {
        "en-US": "/en",
        "uk-UA": "/uk",
      },
    },
    openGraph: {
      title: t("Root.Metadata_AboutUs_Page"),
      url: "https://profspilka.org",
    },
  };
}

export default function AboutUsPage() {
  return (
    <main className="w-full">
      <HeroAboutPage />
      <AllAboutCompany />
      <StatutoryDocuments />
      <VideoSection />
      <History />
    </main>
  );
}
