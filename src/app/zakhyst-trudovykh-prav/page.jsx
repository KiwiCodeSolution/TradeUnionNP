import Law from "@/components/sections/agreements/Law";
import Algorithm from "@/components/sections/protection/Algorithm";
import Appeals from "@/components/sections/protection/Appeals";
import Cases from "@/components/sections/protection/Cases";
import ProtectionAgreement from "@/components/sections/protection/ProtectionAgreement";
import ProtectionHero from "@/components/sections/protection/ProtectionHero";
import ProtectionRights from "@/components/sections/protection/ProtectionRights";

import data from "@/data/law_protect.json";

export default function ProtectionPage() {
  return (
    <main className="w-full bg-bgGrey">
      <ProtectionHero />
      <Law data={data}>«Про професійні спілки, їх права та гарантії діяльності»</Law>
      <ProtectionAgreement />
      <ProtectionRights />
      <Appeals />
      <Cases />
      <Algorithm />
    </main>
  );
}
