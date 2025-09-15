import Management from "@/components/sections/contacts/Management";
import Map from "@/components/sections/contacts/Map";
import RegionalOffices from "@/components/sections/contacts/RegionalOffices";
import TitleContactsPage from "@/components/sections/contacts/TitleContactsPage";
import { BaseURL } from "@/constants/BaseUrl";
import { getTranslations } from "next-intl/server";

async function getRegionalOfficesData() {
  const res = await fetch(`${BaseURL}ppo`, {
    method: "GET",
    cache: "no-store",
  });

  if (!res.ok) {
    return [];
  }

  return res.json();
}

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

export default async function ContactsPage() {
  const officesData = await getRegionalOfficesData();

  return (
    <main className="w-full bg-bgGrey">
      <TitleContactsPage />
      {officesData.length > 0 ? (
        <Map items={officesData} />
      ) : (
        <p className="text-center py-10">Інформація про контакти відсутня</p>
      )}

      <Management />
      {officesData.length > 0 ? (
        <RegionalOffices items={officesData} />
      ) : (
        <p className="text-center py-10">Інформація про контакти відсутня</p>
      )}
    </main>
  );
}
