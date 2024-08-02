import ContactSection from "@/components/sections/contactForm/ContactSection";
import StatementsList from "@/components/sections/templates/StatementsList";
import TemplatesList from "@/components/sections/templates/TemplatesList";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale });

  return {
    title: t("Root.Metadata_Blanks_Page"),
    metadataBase: new URL("https://profspilka.org"),
    alternates: {
      canonical: "https://profspilka.org/uk/blanky",
      languages: {
        "en-US": "/en",
        "uk-UA": "/uk",
      },
    },
    openGraph: {
      title: t("Root.Metadata_Blanks_Page"),
      url: "https://profspilka.org",
    },
  };
}

export default function BlanksPage() {
  return (
    <main className="w-full">
      <TemplatesList />
      <StatementsList />
      <ContactSection bgStyle={"bg-bgGrey"} />
    </main>
  );
}
