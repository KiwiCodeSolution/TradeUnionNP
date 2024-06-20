import Conditions from "@/components/sections/financialAid/Conditions";
import Documents from "@/components/sections/financialAid/Documents";
import Graph from "@/components/sections/financialAid/Graph";
import HeroFinancialAidPage from "@/components/sections/financialAid/HeroFinancialAidPage";
import Limitation from "@/components/sections/financialAid/Limitation";
import Template from "@/components/sections/financialAid/Template";

export default function FinancialAidPage() {
  return (
    <main className="w-full">
      <HeroFinancialAidPage />
      <Graph />
      <Conditions />
      <Limitation />
      <Documents />
      <Template />
    </main>
  );
}
