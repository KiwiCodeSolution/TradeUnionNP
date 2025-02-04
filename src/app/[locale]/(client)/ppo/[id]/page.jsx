import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import RegionalOfficePageItem from "@/components/sections/regional_offices/RegionalOfficePageItem";
import { BaseURL } from "@/constants/BaseUrl";

export async function fetchOfficeById(id) {
  const res = await fetch(`${BaseURL}ppo/${id}`, { method: "GET", cache: "no-store" });
  if (!res.ok) {
    throw new Error(`Failed to fetch ppo by id ${id}`);
  }

  return res.json();
}

export async function generateMetadata({ params: { id } }) {
  const office = await fetchOfficeById(id);

  return {
    title: `${office.region}`,
  };
}

export default async function RegionalCellsBySlugPage({ params: { id } }) {
  const office = await fetchOfficeById(id);

  return (
    <main className="w-full bg-bgGrey">
      <BaseSection style={"h-full"}>
        <Wrapper styles={""}>
          <RegionalOfficePageItem office={office} />
        </Wrapper>
      </BaseSection>
    </main>
  );
}
