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
import { getAllReports } from "@/services/photoService";

export default async function ClientHome({ params }) {
  const [news, reports, contacts] = await Promise.all([
    getAllNews(),
    getAllReports(),
    getContacts(),
  ]);

  return (
    <main className="flex flex-col relative">
      <HeroHomePage />
      <FinancialAid />
      <Values />
      <CollectiveAgreement />
      <DirectionsWork locale={params.locale} />
      <Interview locale={params.locale} />
      {params.locale === "uk" && <NewsSectionHomePage />}
      <ContactSection bgStyle={"bg-bgGrey"} locale={params.locale} />
    </main>
  );
}
