import Management from "@/components/sections/contacts/Management";
import Map from "@/components/sections/contacts/Map";
import RegionalOffices from "@/components/sections/contacts/RegionalOffices";
import TitleContactsPage from "@/components/sections/contacts/TitleContactsPage";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale });

  return {
    title: t("Root.Metadata_Contacts_Page"),
    metadataBase: new URL("https://profspilka.org"),
    alternates: {
      canonical: "https://profspilka.org/uk/kontakty",
      languages: {
        "en-US": "/en",
        "uk-UA": "/uk",
      },
    },
    openGraph: {
      title: t("Root.Metadata_Contacts_Page"),
      url: "https://profspilka.org",
    },
  };
}

export default function ContactsPage() {
  return (
    <main className="w-full bg-bgGrey">
      <TitleContactsPage />
      <Map />
      <Management />
      <RegionalOffices />
    </main>
  );
}
