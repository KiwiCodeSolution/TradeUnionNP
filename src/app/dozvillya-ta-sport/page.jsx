import ContactSection from "@/components/sections/contactForm/ContactSection";
import HeroRecreationPage from "@/components/sections/recreation/HeroRecreationPage";
import PhotoReports from "@/components/sections/recreation/PhotoReports";
import PrincipleRecreation from "@/components/sections/recreation/PrincipleRecreation";
import RecreationActivity from "@/components/sections/recreation/RecreationActivity";
import RecreationProjects from "@/components/sections/recreation/RecreationProjects";
import StatuteRecreationPage from "@/components/sections/recreation/StatuteRecreationPage";

export default function RecreationPage() {
  return (
    <main className="w-full min-h-screen bg-bgGrey">
      <HeroRecreationPage />
      <StatuteRecreationPage />
      <RecreationActivity />
      <PrincipleRecreation />
      <RecreationProjects />
      <ContactSection bgStyle={"bg-bgGrey"} />
      <PhotoReports />
    </main>
  );
}
