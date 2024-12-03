import BaseSection from "@/components/BaseSection";
import SubscriptionPageComponent from "@/components/sections/subscription/SubscriptionPageComponent";

import Wrapper from "@/components/Wrapper";
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

export default function SubscriptionConfirmPage() {
  const t = useTranslations("Subscription");

  const text = {
    title: t(`title`),
    successText: [t(`successText.0`), t(`successText.1`)],
    errorText: [t(`errorText.0`), t(`errorText.1`)],
    existsText: [t(`existsText.0`), t(`existsText.1`)],
    confirmationSuccess: t(`confirmationSuccess`),
    confirmationError: t(`confirmationError`),
    confirmationExists: t(`confirmationExists`),
  };

  return (
    <main className="w-full">
      <BaseSection style={""}>
        <Wrapper styles={"pt-10"}>
          <SubscriptionPageComponent text={text} />
        </Wrapper>
      </BaseSection>
    </main>
  );
}
