import BaseSection from "@/components/BaseSection";
import UnsubscriptionPageComponent from "@/components/sections/subscription/Unsubscribe";

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

export default function UnSubscriptionConfirmPage() {
  const t = useTranslations("UnSubscription");

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
    <main className="w-full h-[40%]">
      <BaseSection style={""}>
        <Wrapper styles={"pt-10"}>
          <UnsubscriptionPageComponent text={text} />
        </Wrapper>
      </BaseSection>
    </main>
  );
}
