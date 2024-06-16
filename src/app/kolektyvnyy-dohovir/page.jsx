import AboutAgreement from "@/components/sections/agreements/AboutAgreement";
import AgreementsPoints from "@/components/sections/agreements/AgreementsPoints";
import Honors from "@/components/sections/agreements/Honors";
import Law from "@/components/sections/agreements/Law";
import OurAgreement from "@/components/sections/agreements/OurAgreement";
import TitleAgreementsPage from "@/components/sections/agreements/TitleAgreementsPage";
import AgreementsBlogSection from "@/components/sections/blog/AgreementsBlogSection";
import HeroAgreementsPage from "@/components/sections/hero/HeroAgreementsPage";

export default function CollectiveAgreementPage() {
  return (
    <main className="w-full bg-bgGrey">
      <TitleAgreementsPage />
      <HeroAgreementsPage />
      <AgreementsPoints />
      <Law />
      <AboutAgreement />
      <OurAgreement />
      <Honors />
      <AgreementsBlogSection />
    </main>
  );
}
