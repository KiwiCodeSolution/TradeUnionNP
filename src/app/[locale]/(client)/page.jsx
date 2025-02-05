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
    getAllNews().catch(() => null),
    getContacts().catch(() => null),
    getAllOffices().catch(() => null),
  ]);

  const hasNews = news?.data?.length > 0;
  const hasContacts = contacts?.data?.length > 0;
  const hasOffices = offices?.data?.length > 0;

  return (
    <main className="flex flex-col relative">
      <HeroHomePage />
      <FinancialAid />
      <Values />
      <CollectiveAgreement />
      <DirectionsWork locale={params.locale} />
      <Interview locale={params.locale} />

      {hasNews && params.locale === "uk" && <NewsSectionHomePage />}
      <ContactSection bgStyle={"bg-bgGrey"} locale={params.locale} />

      {/* прокидаємо ініціальні дані у стор через гідрацію */}
      {(hasNews || hasContacts || hasOffices) && (
        <StoreProvider>
          <HydrateStores
            initialData={{
              ...(hasNews && { news: news.data }),
              ...(hasContacts && { contacts: contacts.data }),
              ...(hasOffices && { offices: offices.data }),
            }}
          />
        </StoreProvider>
      )}
    </main>
  );
}
