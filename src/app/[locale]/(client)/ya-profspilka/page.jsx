import Reviews from "@/components/sections/appeal/Reviews";
import ContactSection from "@/components/sections/contactForm/ContactSection";
import Advantages from "@/components/sections/iTradeUnion/Advantages";
import HeroITradeSection from "@/components/sections/iTradeUnion/HeroITradeSection";
import Invite from "@/components/sections/iTradeUnion/Invite";
import Subscription from "@/components/sections/iTradeUnion/Subscription";
import TellUs from "@/components/sections/iTradeUnion/TellUs";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale });

  return {
    title: t("Root.Metadata_TradeUnionist_Page"),
    metadataBase: new URL("https://profspilka.org"),
    alternates: {
      canonical: "https://profspilka.org/uk/ya-profspilka",
      languages: {
        "en-US": "/en",
        "uk-UA": "/uk",
      },
    },
    openGraph: {
      title: t("Root.Metadata_TradeUnionist_Page"),
      url: "https://profspilka.org",
    },
  };
}

export default function TradeUnionistPage() {
  return (
    <main className="w-full">
      <HeroITradeSection />
      <Advantages />
      <ContactSection bgStyle={"bg-white"} />
      <TellUs />
      <Reviews section={"iTrade"} />
      <Invite />
      <Subscription />
    </main>
  );
}
