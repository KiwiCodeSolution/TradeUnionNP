import FAQ from "@/components/sections/appeal/FAQ";
import HeroAppealSections from "@/components/sections/appeal/HeroAppealSections";
import Reviews from "@/components/sections/appeal/Reviews";
import ContactSection from "@/components/sections/contactForm/ContactSection";

export default function AppealPage() {
  return (
    <main className="w-full bg-bgGrey">
      <HeroAppealSections />
      <FAQ />
      <Reviews />
      <ContactSection bgStyle={"bg-bgGrey"} />
    </main>
  );
}
