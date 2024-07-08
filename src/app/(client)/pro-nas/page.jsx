import AllAboutCompany from "@/components/sections/about/AllAboutCompany";
import History from "@/components/sections/about/History";
import StatutoryDocuments from "@/components/sections/about/StatutoryDocuments";
import VideoSection from "@/components/sections/about/VideoSection";
import HeroAboutPage from "@/components/sections/hero/HeroAboutPage";

export default function AboutUsPage() {
  return (
    <main className="w-full">
      <HeroAboutPage />
      <AllAboutCompany />
      <StatutoryDocuments />
      <VideoSection />
      <History />
    </main>
  );
}
