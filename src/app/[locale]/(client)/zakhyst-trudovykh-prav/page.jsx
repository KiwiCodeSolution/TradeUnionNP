import Law from "@/components/sections/agreements/Law";
import ContactSection from "@/components/sections/contactForm/ContactSection";
import Appeals from "@/components/sections/protection/Appeals";
import ProtectionAgreement from "@/components/sections/protection/ProtectionAgreement";
import ProtectionHero from "@/components/sections/protection/ProtectionHero";
import ProtectionRights from "@/components/sections/protection/ProtectionRights";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale });

  return {
    title: t("Root.Metadata_Protection_Page"),
    metadataBase: new URL("https://profspilka.org"),
    alternates: {
      canonical: "https://profspilka.org/uk/zakhyst-trudovykh-prav",
      languages: {
        "en-US": "/en",
        "uk-UA": "/uk",
      },
    },
    openGraph: {
      title: t("Root.Metadata_Protection_Page"),
      url: "https://profspilka.org",
    },
  };
}

import data from "@/data/law_protect.json";

export default function ProtectionPage({ params }) {
  return (
    <main className="w-full bg-bgGrey">
      <ProtectionHero />
      <ProtectionAgreement />
      <ProtectionRights />
      <Appeals />
      <Law data={data} page={"protection"} />
      <ContactSection bgStyle={"bg-bgGrey"} />
    </main>
  );
}
