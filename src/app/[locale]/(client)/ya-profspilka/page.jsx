import ContactSection from "@/components/sections/contactForm/ContactSection";
import AboutITrade from "@/components/sections/iTradeUnion/AboutITrade";
import Advantages from "@/components/sections/iTradeUnion/Advantages";
import Channels from "@/components/sections/iTradeUnion/Channels";
import ContactUs from "@/components/sections/iTradeUnion/ContactUs";
import HeroITradeSection from "@/components/sections/iTradeUnion/HeroITradeSection";
import HeroITradeSectionNew from "@/components/sections/iTradeUnion/HeroITradeSectionNew";
import Invite from "@/components/sections/iTradeUnion/Invite";
import ReviewsITrade from "@/components/sections/iTradeUnion/ReviewsITrade";
import Subscription from "@/components/sections/iTradeUnion/Subscription";
import TellUs from "@/components/sections/iTradeUnion/TellUs";
import { BaseURL } from "@/constants/BaseUrl";
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

async function fetchContacts() {
  const res = await fetch(`${BaseURL}contacts`, { method: "GET", cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch contacts");
  }

  return res.json();
}

export default async function TradeUnionistPage({ params: { locale } }) {
  const contacts = await fetchContacts();
  const [{ _id, __v, ...initialContacts }] = contacts;

  return (
    <main className="w-full">
      {/* <HeroITradeSection /> */}
      <HeroITradeSectionNew />
      {/* <AboutITrade /> */}
      {initialContacts && <Channels contacts={initialContacts} />}
      <ContactUs locale={locale} />

      {/* <Advantages /> */}
      {/* <ContactSection bgStyle={"bg-white"} /> */}
      {/* <TellUs contacts={initialContacts} /> */}
      {/* <ReviewsITrade /> */}
      {/* <Invite /> */}
      {/* <Subscription contacts={initialContacts} /> */}
    </main>
  );
}
