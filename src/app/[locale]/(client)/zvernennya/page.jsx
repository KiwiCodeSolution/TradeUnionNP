import AppealCta from "@/components/sections/appeal/AppealCta";
import AppealTypes from "@/components/sections/appeal/AppealTypes";
import FAQ from "@/components/sections/appeal/FAQ";
import HeroAppealSections from "@/components/sections/appeal/HeroAppealSections";
import Reviews from "@/components/sections/appeal/Reviews";
import ContactSection from "@/components/sections/contactForm/ContactSection";
import Cases from "@/components/sections/protection/Cases";
import { BaseURL } from "@/constants/BaseUrl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale });

  return {
    title: t("Root.Metadata_Appeal_Page"),
    metadataBase: new URL("https://profspilka.org"),
    alternates: {
      canonical: "https://profspilka.org/uk/zvernennya",
      languages: {
        "en-US": "/en",
        "uk-UA": "/uk",
      },
    },
    openGraph: {
      title: t("Root.Metadata_Appeal_Page"),
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

export default async function AppealPage() {
  const [contacts] = await fetchContacts();

  return (
    <main className="w-full bg-bgGrey">
      <HeroAppealSections />
      <AppealTypes />
      <FAQ />
      <Cases />
      <Reviews />
      <AppealCta email={contacts.mail} chatBotLink={contacts.telegrambot} />
    </main>
  );
}
