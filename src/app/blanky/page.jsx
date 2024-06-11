import ContactSection from "@/components/sections/contactForm/ContactSection";
import StatementsList from "@/components/sections/templates/StatementsList";
import TemplatesList from "@/components/sections/templates/TemplatesList";

export default function BlanksPage() {
  return (
    <main className="w-full">
      <TemplatesList />
      <StatementsList />
      <ContactSection />
    </main>
  );
}
