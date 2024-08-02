import FAQ from "@/components/sections/appeal/FAQ";
import HeroAppealSections from "@/components/sections/appeal/HeroAppealSections";
import Reviews from "@/components/sections/appeal/Reviews";
import ContactSection from "@/components/sections/contactForm/ContactSection";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale });

  return {
    title: t("Root.Metadata_Appeal_Page"),
    metadataBase: new URL("https://profspilka.org"),
    alternates: {
      canonical: "https://profspilka.org/uk/zvernennya",
      languages: {
        "en-US": "/en",
        "uk-UA": "/uk",
      },
    },
    openGraph: {
      title: t("Root.Metadata_Appeal_Page"),
      url: "https://profspilka.org",
    },
  };
}

export default function AppealPage() {
  return (
    <main className="w-full bg-bgGrey">
      <HeroAppealSections />
      <FAQ />
      <Reviews />
      <ContactSection bgStyle={"bg-bgGrey"} />
    </main>
  );
}
