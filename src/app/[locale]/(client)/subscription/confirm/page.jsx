import BaseSection from "@/components/BaseSection";
import SubscriptionPageComponent from "@/components/sections/subscription/SubscriptionPageComponent";
import Title from "@/components/Title";
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

  const text = [t(`text.0`), t(`text.1`)];
  console.log(text);
  return (
    <main className="w-full">
      <BaseSection style={""}>
        <Wrapper styles={"pt-10"}>
          <Title tag={"h1"} styles={"text-center mb-10"}>
            {t(`title`)}
          </Title>
          <SubscriptionPageComponent text={text} />
        </Wrapper>
      </BaseSection>
    </main>
  );
}
