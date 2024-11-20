import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale });

  return {
    title: t("Root.Metadata_Subscription_Page"),
    metadataBase: new URL("https://profspilka.org"),
    alternates: {
      languages: {
        "en-US": "/en",
        "uk-UA": "/uk",
      },
    },
    openGraph: {
      title: t("Root.Metadata_Subscription_Page"),
      url: "https://profspilka.org",
    },
  };
}

export default function SubscriptionPage() {
  const t = useTranslations("Subscription");
  return <main className="w-full"></main>;
}
