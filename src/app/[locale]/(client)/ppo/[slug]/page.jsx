import BaseSection from "@/components/BaseSection";
import Wrapper from "@/components/Wrapper";
import regions from "@/data/ppo.json";
import RegionalOfficePageItem from "@/components/sections/regional_offices/RegionalOfficePageItem";

// Функція для генерації метаданих
export async function generateMetadata({ params: { slug } }) {
  // const news = await fetchNewsBySlug(slug);

  const office = regions.find(el => el.link.includes(slug));

  return {
    title: `${office.region}`, // Динамічний title
  };
}

export default function RegionalCellsBySlugPage({ params: { slug } }) {
  const office = regions.find(el => el.link.includes(slug));

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
