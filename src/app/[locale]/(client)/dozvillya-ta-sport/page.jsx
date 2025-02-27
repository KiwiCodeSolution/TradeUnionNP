import ContactSection from "@/components/sections/contactForm/ContactSection";
import HeroRecreationPage from "@/components/sections/recreation/HeroRecreationPage";
import PhotoReports from "@/components/sections/recreation/PhotoReports";
import PrincipleRecreation from "@/components/sections/recreation/PrincipleRecreation";
import RecreationActivity from "@/components/sections/recreation/RecreationActivity";
import RecreationProjects from "@/components/sections/recreation/RecreationProjects";
import StatuteRecreationPage from "@/components/sections/recreation/StatuteRecreationPage";
import { BaseURL } from "@/constants/BaseUrl";
import { getTranslations } from "next-intl/server";

async function fetchReports() {
  const res = await fetch(`${BaseURL}gallerey`, { method: "GET", cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch reports");
  }

  return res.json();
}

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale });

  return {
    title: t("Root.Metadata_Recreation_Page"),
    metadataBase: new URL("https://profspilka.org"),
    alternates: {
      canonical: "https://profspilka.org/uk/dozvillya-ta-sport",
      languages: {
        "en-US": "/en",
        "uk-UA": "/uk",
      },
    },
    openGraph: {
      title: t("Root.Metadata_Recreation_Page"),
      url: "https://profspilka.org",
    },
  };
}

export default async function RecreationPage({ params }) {
  const reports = await fetchReports();

  const today = new Date();

  const filteredReportsArray = reports
    .filter(item => item.status === "published" && new Date(item.publishDate) <= today)
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));

  return (
    <main className="w-full bg-bgGrey">
      <HeroRecreationPage />
      <StatuteRecreationPage />
      <RecreationActivity />
      <PrincipleRecreation />
      {params.locale === "uk" && <RecreationProjects />}
      <ContactSection bgStyle={"bg-bgGrey"} />
      {params.locale === "uk" && (
        <PhotoReports items={filteredReportsArray} locale={params.locale} />
      )}
    </main>
  );
}
