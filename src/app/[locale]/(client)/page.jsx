import HydrateStores from "@/components/helpers/HydrateStores";
import CollectiveAgreement from "@/components/sections/agreements/CollectiveAgreement";
import ContactSection from "@/components/sections/contactForm/ContactSection";
import DirectionsWork from "@/components/sections/directionsWork/DirectionsWork";
import FinancialAid from "@/components/sections/financialAid/FinancialAid";
import HeroHomePage from "@/components/sections/hero/HeroHomePage";
import Interview from "@/components/sections/interview/Interview";
import NewsSectionHomePage from "@/components/sections/news/NewsSectionHomePage";
import Values from "@/components/sections/numbers/ValuesHomepage";
import { getContacts } from "@/services/contactsService";
import { getAllNews } from "@/services/newsService";
import { getAllOffices } from "@/services/officeService";
import { StoreProvider } from "@/store/StoreProvider";

export default async function ClientHome({ params }) {
  const [news, contacts, offices] = await Promise.all([
    getAllNews(),
    getContacts(),
    getAllOffices(),
  ]);

  return (
    <>
      <main className="flex flex-col relative">
        <HeroHomePage />
        <FinancialAid />
        <Values />
        <CollectiveAgreement />
        <DirectionsWork locale={params.locale} />
        <Interview locale={params.locale} />
        {news.data && news.data.length > 0 && params.locale === "uk" && <NewsSectionHomePage />}
        <ContactSection bgStyle={"bg-bgGrey"} locale={params.locale} />

        {news.data &&
          news.data.length > 0 &&
          contacts.data &&
          contacts.data.length > 0 &&
          offices.data &&
          offices.data.length > 0 && (
            <StoreProvider>
              <HydrateStores
                initialData={{ news: news.data, contacts: contacts.data, offices: offices.data }}
              />
            </StoreProvider>
          )}
      </main>
    </>
  );
}
