import RegionalOffices from "@/components/sections/regional_offices/RegionalOffices";
import TitleRegionOfficesPage from "@/components/sections/regional_offices/TitleRegionOfficesPage";

export default function RegionalCellsPage() {
  return (
    <main className="w-full min-h-screen bg-bgGrey">
      <TitleRegionOfficesPage />
      <RegionalOffices />
    </main>
  );
}
