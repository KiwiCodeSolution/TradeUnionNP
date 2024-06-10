import AllAboutCompany from "@/components/sections/about/AllAboutCompany";
import StatutoryDocuments from "@/components/sections/about/StatutoryDocuments";
import HeroAboutPage from "@/components/sections/hero/HeroAboutPage";

export default function AboutUsPage() {
  return (
    <main className="w-full">
      <HeroAboutPage />
      <AllAboutCompany />
      <StatutoryDocuments />
    </main>
  );
}
