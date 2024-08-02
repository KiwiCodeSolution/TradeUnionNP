import Law from "@/components/sections/agreements/Law";
import AgreementsBlogSection from "@/components/sections/blog/AgreementsBlogSection";
import ContactSection from "@/components/sections/contactForm/ContactSection";
import Algorithm from "@/components/sections/protection/Algorithm";
import Appeals from "@/components/sections/protection/Appeals";
import Cases from "@/components/sections/protection/Cases";
import ProtectionAgreement from "@/components/sections/protection/ProtectionAgreement";
import ProtectionHero from "@/components/sections/protection/ProtectionHero";
import ProtectionRights from "@/components/sections/protection/ProtectionRights";
import ResolutionPeriod from "@/components/sections/protection/ResolutionPeriod";
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
      <Law data={data} page={"protection"} />
      <ProtectionAgreement />
      <ProtectionRights />
      <Appeals />
      <Cases />
      <Algorithm />
      <ResolutionPeriod gradient />
      <ContactSection bgStyle={"bg-bgGrey"} />
      {params.locale === "uk" && <AgreementsBlogSection />}
    </main>
  );
}
