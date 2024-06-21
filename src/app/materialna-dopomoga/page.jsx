import Conditions from "@/components/sections/financialAid/Conditions";
import Documents from "@/components/sections/financialAid/Documents";
import Graph from "@/components/sections/financialAid/Graph";
import HeroFinancialAidPage from "@/components/sections/financialAid/HeroFinancialAidPage";
import Importantly from "@/components/sections/financialAid/Importantly";
import Limitation from "@/components/sections/financialAid/Limitation";
import Template from "@/components/sections/financialAid/Template";

export default function FinancialAidPage() {
  return (
    <main className="w-full min-h-screen">
      <HeroFinancialAidPage />
      <Graph />
      <Conditions />
      <Limitation />
      <Documents />
      <Template />
      <Importantly />
    </main>
  );
}
