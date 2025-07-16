import AllAboutCompany from "@/components/sections/about/AllAboutCompany";
import History from "@/components/sections/about/History";
import StatutoryDocuments from "@/components/sections/about/StatutoryDocuments";
import VideoSection from "@/components/sections/about/VideoSection";
import HeroAboutPage from "@/components/sections/hero/HeroAboutPage";
import { getTranslations } from "next-intl/server";
import { getAllNews } from "../novyny/page";
import BlogSection from "@/components/sections/blog/BlogSection";

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

export default async function AboutUsPage({ params }) {
  const allNews = await getAllNews();
  const blogItems = allNews
    .filter(n => n.sections.includes("Інтерв`ю"))
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
    .slice(0, 3);

  return (
    <main className="w-full">
      <HeroAboutPage />
      <AllAboutCompany />
      <StatutoryDocuments />
      <VideoSection />
      <History />
      {blogItems && blogItems.length > 0 && (
        <BlogSection locale={params.locale} items={blogItems} />
      )}
    </main>
  );
}
