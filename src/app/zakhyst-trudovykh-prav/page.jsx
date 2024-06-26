import Law from "@/components/sections/agreements/Law";
import AgreementsBlogSection from "@/components/sections/blog/AgreementsBlogSection";
import ContactSection from "@/components/sections/contactForm/ContactSection";
import Algorithm from "@/components/sections/protection/Algorithm";
import Appeals from "@/components/sections/protection/Appeals";
import Cases from "@/components/sections/protection/Cases";
import ProtectionAgreement from "@/components/sections/protection/ProtectionAgreement";
import ProtectionHero from "@/components/sections/protection/ProtectionHero";
import ProtectionRights from "@/components/sections/protection/ProtectionRights";
import ResolutionPeriod from "@/components/sections/protection/ResolutionPeriod";

import data from "@/data/law_protect.json";

export default function ProtectionPage() {
  return (
    <main className="w-full min-h-screen bg-bgGrey">
      <ProtectionHero />
      <Law data={data}>«Про професійні спілки, їх права та гарантії діяльності»</Law>
      <ProtectionAgreement />
      <ProtectionRights />
      <Appeals />
      <Cases />
      <Algorithm />
      <ResolutionPeriod gradient />
      <ContactSection />
      <AgreementsBlogSection />
    </main>
  );
}
