import AboutAgreement from "@/components/sections/agreements/AboutAgreement";
import AgreementsPoints from "@/components/sections/agreements/AgreementsPoints";

import Law from "@/components/sections/agreements/Law";
import OurAgreement from "@/components/sections/agreements/OurAgreement";
import Proposal from "@/components/sections/agreements/Proposal";
import TitleAgreementsPage from "@/components/sections/agreements/TitleAgreementsPage";

import HeroAgreementsPage from "@/components/sections/hero/HeroAgreementsPage";
import law from "@/data/law.json";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale });

  return {
    title: t("Root.Metadata_CollectiveAgreement_Page"),
    metadataBase: new URL("https://profspilka.org"),
    alternates: {
      canonical: "https://profspilka.org/uk/kolektyvnyy-dohovir",
      languages: {
        "en-US": "/en",
        "uk-UA": "/uk",
      },
    },
    openGraph: {
      title: t("Root.Metadata_CollectiveAgreement_Page"),
      url: "https://profspilka.org",
    },
  };
}

export default function CollectiveAgreementPage({ params }) {
  return (
    <main className="w-full bg-bgGrey py-8 xl:py-10">
      <TitleAgreementsPage />
      <HeroAgreementsPage />
      <AgreementsPoints />
      <Law data={law} page={"collective_agreement"} />
      <AboutAgreement />
      <OurAgreement />
      <Proposal />
    </main>
  );
}
