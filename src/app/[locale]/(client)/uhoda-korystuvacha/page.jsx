import UserAgreement from "@/components/sections/userAgreement/UserAgreement";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale });

  return {
    title: t("Root.Metadata_UserAgreement_Page"),
    metadataBase: new URL("https://profspilka.org"),
    alternates: {
      canonical: "https://profspilka.org/uhoda-korystuvacha",
      languages: {
        "en-US": "/en",
        "uk-UA": "/uk",
      },
    },
    openGraph: {
      title: t("Root.Metadata_UserAgreement_Page"),
      url: "https://profspilka.org",
    },
  };
}

export default function UserAgreementPage({ params }) {
  return (
    <main className="w-full">
      <UserAgreement locale={params.locale} />
    </main>
  );
}
