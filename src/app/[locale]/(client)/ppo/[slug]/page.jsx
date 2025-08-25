import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import RegionalOffice from "@/components/sections/regional_offices/RegionalOffice";
import RegionalOfficePageItem from "@/components/sections/regional_offices/RegionalOfficePageItem";
import { BaseURL } from "@/constants/BaseUrl";

export async function fetchOfficeBySlug(slug) {
  const res = await fetch(`${BaseURL}ppo/link/${slug}`, { method: "GET", cache: "no-store" });
  if (!res.ok) {
    throw new Error(`Failed to fetch ppo by slug ${slug}`);
  }

  return res.json();
}

export async function generateMetadata({ params: { slug } }) {
  const office = await fetchOfficeBySlug(slug);

  return {
    title: `${office.region}`,
  };
}

export default async function RegionalCellsBySlugPage({ params: { slug } }) {
  const office = await fetchOfficeBySlug(slug);

  return (
    <main className="w-full bg-bgGrey">
      <BaseSection style={"h-full"}>
        <Wrapper styles={"py-10"}>
          <RegionalOffice item={office} source={"search"} />
        </Wrapper>
      </BaseSection>
    </main>
  );
}
