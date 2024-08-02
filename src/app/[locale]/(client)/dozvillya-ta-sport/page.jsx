import ContactSection from "@/components/sections/contactForm/ContactSection";
import HeroRecreationPage from "@/components/sections/recreation/HeroRecreationPage";
import PhotoReports from "@/components/sections/recreation/PhotoReports";
import PrincipleRecreation from "@/components/sections/recreation/PrincipleRecreation";
import RecreationActivity from "@/components/sections/recreation/RecreationActivity";
import RecreationProjects from "@/components/sections/recreation/RecreationProjects";
import StatuteRecreationPage from "@/components/sections/recreation/StatuteRecreationPage";
import { getTranslations } from "next-intl/server";

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

export default function RecreationPage({ params }) {
  return (
    <main className="w-full bg-bgGrey">
      <HeroRecreationPage />
      <StatuteRecreationPage />
      <RecreationActivity />
      <PrincipleRecreation />
      {params.locale === "uk" && <RecreationProjects />}
      <ContactSection bgStyle={"bg-bgGrey"} />
      {params.locale === "uk" && <PhotoReports />}
    </main>
  );
}
